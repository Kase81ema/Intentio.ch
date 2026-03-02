from fastapi import FastAPI, APIRouter, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import requests as http_requests
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Brevo config
BREVO_API_KEY = os.environ.get('BREVO_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', '')
ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL', '')

app = FastAPI()
api_router = APIRouter(prefix="/api")


# Models
class ContactFormInput(BaseModel):
    nome: str
    azienda: str
    ruolo: str
    email: str
    telefono: Optional[str] = ""
    area_interesse: str
    obiettivo: Optional[str] = ""
    tempistiche: str
    privacy_consent: bool


class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    nome: str
    azienda: str
    ruolo: str
    email: str
    telefono: Optional[str] = ""
    area_interesse: str
    obiettivo: Optional[str] = ""
    tempistiche: str
    privacy_consent: bool
    timestamp: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


def send_brevo_email(to_email, to_name, subject, html_content):
    if not BREVO_API_KEY:
        logging.warning("BREVO_API_KEY not set, skipping email")
        return
    url = "https://api.brevo.com/v3/smtp/email"
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": BREVO_API_KEY
    }
    payload = {
        "sender": {"name": "Intentio Nova", "email": SENDER_EMAIL},
        "to": [{"email": to_email, "name": to_name}],
        "subject": subject,
        "htmlContent": html_content
    }
    try:
        resp = http_requests.post(url, headers=headers, json=payload, timeout=30)
        resp.raise_for_status()
        logging.info(f"Email sent to {to_email}: {resp.json()}")
    except Exception as e:
        logging.error(f"Failed to send email to {to_email}: {e}")


def send_admin_notification(sub):
    html = f"""
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
    <h2 style="color:#6D28D9;border-bottom:2px solid #6D28D9;padding-bottom:8px;">Nuova richiesta di contatto</h2>
    <table style="width:100%;border-collapse:collapse;margin-top:16px;">
    <tr style="background:#f8fafc;"><td style="padding:10px 12px;font-weight:bold;width:160px;">Nome:</td><td style="padding:10px 12px;">{sub.nome}</td></tr>
    <tr><td style="padding:10px 12px;font-weight:bold;">Azienda:</td><td style="padding:10px 12px;">{sub.azienda}</td></tr>
    <tr style="background:#f8fafc;"><td style="padding:10px 12px;font-weight:bold;">Ruolo:</td><td style="padding:10px 12px;">{sub.ruolo}</td></tr>
    <tr><td style="padding:10px 12px;font-weight:bold;">Email:</td><td style="padding:10px 12px;">{sub.email}</td></tr>
    <tr style="background:#f8fafc;"><td style="padding:10px 12px;font-weight:bold;">Telefono:</td><td style="padding:10px 12px;">{sub.telefono or 'Non fornito'}</td></tr>
    <tr><td style="padding:10px 12px;font-weight:bold;">Area di interesse:</td><td style="padding:10px 12px;">{sub.area_interesse}</td></tr>
    <tr style="background:#f8fafc;"><td style="padding:10px 12px;font-weight:bold;">Obiettivo:</td><td style="padding:10px 12px;">{sub.obiettivo or 'Non specificato'}</td></tr>
    <tr><td style="padding:10px 12px;font-weight:bold;">Tempistiche:</td><td style="padding:10px 12px;">{sub.tempistiche}</td></tr>
    </table>
    <p style="margin-top:16px;font-size:12px;color:#94a3b8;">Inviato il {sub.timestamp}</p>
    </div>
    """
    send_brevo_email(ADMIN_EMAIL, "Intentio Nova Admin", f"Nuova richiesta: {sub.nome} - {sub.azienda}", html)


def send_user_confirmation(sub):
    html = f"""
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
    <h2 style="color:#6D28D9;">Grazie per averci contattato</h2>
    <p>Gentile {sub.nome},</p>
    <p>abbiamo ricevuto la sua richiesta e la ricontatteremo entro 1-2 giorni lavorativi con una proposta di primo passo concreto.</p>
    <div style="background:#f8fafc;padding:16px;border-radius:8px;margin:16px 0;">
    <p style="margin:0 0 8px;"><strong>Riepilogo:</strong></p>
    <p style="margin:4px 0;">Area di interesse: {sub.area_interesse}</p>
    <p style="margin:4px 0;">Obiettivo: {sub.obiettivo or 'Non specificato'}</p>
    <p style="margin:4px 0;">Tempistiche: {sub.tempistiche}</p>
    </div>
    <p style="margin-top:24px;">Cordiali saluti,<br><strong>Intentio Nova sagl</strong><br>
    <span style="font-size:12px;color:#94a3b8;">Via Clemente Maraini, 13 - 6900 Lugano CH</span></p>
    </div>
    """
    send_brevo_email(sub.email, sub.nome, "Abbiamo ricevuto la sua richiesta - Intentio Nova", html)


@api_router.post("/contact")
async def submit_contact(form: ContactFormInput, background_tasks: BackgroundTasks):
    submission = ContactSubmission(**form.model_dump())
    doc = submission.model_dump()
    await db.contacts.insert_one(doc)
    background_tasks.add_task(send_admin_notification, submission)
    background_tasks.add_task(send_user_confirmation, submission)
    return {
        "status": "received",
        "message": "Richiesta ricevuta. La ricontatteremo entro 1-2 giorni lavorativi.",
        "id": submission.id
    }


@api_router.get("/contacts")
async def get_contacts():
    contacts = await db.contacts.find({}, {"_id": 0}).to_list(1000)
    return contacts


@api_router.get("/")
async def root():
    return {"message": "Intentio Nova API"}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
