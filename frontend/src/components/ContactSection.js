import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowRight, Send, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const LOGO_DARK =
  "https://customer-assets.emergentagent.com/job_people-leadership/artifacts/sgzpl4ho_Intentio%20logo%20%28800%20x%20300%20px%29%283%29.png";

const areeInteresse = ["Formazione", "Coaching", "Team coaching", "Assessment", "Human-AImpact", "Altro"];
const opzioniTempistiche = ["Entro 1 mese", "Entro 3 mesi", "Entro 6 mesi", "Da valutare"];

function ContactForm() {
  const [form, setForm] = useState({
    nome: "", azienda: "", ruolo: "", email: "", telefono: "",
    area_interesse: "", obiettivo: "", tempistiche: "", privacy_consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.privacy_consent) { toast.error("Accetta la privacy policy per procedere."); return; }
    if (!form.nome || !form.email || !form.azienda || !form.ruolo || !form.area_interesse || !form.tempistiche) {
      toast.error("Compila tutti i campi obbligatori."); return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      setSubmitted(true);
      toast.success("Richiesta inviata con successo!");
    } catch { toast.error("Errore nell'invio. Riprova."); }
    finally { setLoading(false); }
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20" data-testid="form-success">
        <div className="w-16 h-16 mx-auto mb-6 bg-green-100 flex items-center justify-center"><Send className="h-7 w-7 text-green-600" /></div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Richiesta inviata</h3>
        <p className="text-slate-500 max-w-md mx-auto">La ricontatteremo entro 1-2 giorni lavorativi con una proposta di primo passo concreto.</p>
      </motion.div>
    );
  }

  return (
    <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} data-testid="contact-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="nome" className="text-slate-600 text-xs tracking-wide uppercase">Nome e cognome *</Label>
          <Input id="nome" data-testid="form-nome" value={form.nome} onChange={(e) => set("nome", e.target.value)} className="mt-2 h-12 rounded-none border-slate-300 focus:border-indigo-600" required />
        </div>
        <div>
          <Label htmlFor="azienda" className="text-slate-600 text-xs tracking-wide uppercase">Azienda *</Label>
          <Input id="azienda" data-testid="form-azienda" value={form.azienda} onChange={(e) => set("azienda", e.target.value)} className="mt-2 h-12 rounded-none border-slate-300 focus:border-indigo-600" required />
        </div>
        <div>
          <Label htmlFor="ruolo" className="text-slate-600 text-xs tracking-wide uppercase">Ruolo *</Label>
          <Input id="ruolo" data-testid="form-ruolo" value={form.ruolo} onChange={(e) => set("ruolo", e.target.value)} className="mt-2 h-12 rounded-none border-slate-300 focus:border-indigo-600" required />
        </div>
        <div>
          <Label htmlFor="email" className="text-slate-600 text-xs tracking-wide uppercase">Email *</Label>
          <Input id="email" type="email" data-testid="form-email" value={form.email} onChange={(e) => set("email", e.target.value)} className="mt-2 h-12 rounded-none border-slate-300 focus:border-indigo-600" required />
        </div>
        <div>
          <Label htmlFor="telefono" className="text-slate-600 text-xs tracking-wide uppercase">Telefono (opzionale)</Label>
          <Input id="telefono" data-testid="form-telefono" value={form.telefono} onChange={(e) => set("telefono", e.target.value)} className="mt-2 h-12 rounded-none border-slate-300 focus:border-indigo-600" />
        </div>
        <div>
          <Label className="text-slate-600 text-xs tracking-wide uppercase">Area di interesse *</Label>
          <Select onValueChange={(v) => set("area_interesse", v)}>
            <SelectTrigger className="mt-2 h-12 rounded-none border-slate-300" data-testid="form-area-interesse-trigger"><SelectValue placeholder="Seleziona..." /></SelectTrigger>
            <SelectContent>{areeInteresse.map((a) => (<SelectItem key={a} value={a}>{a}</SelectItem>))}</SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-5">
        <Label htmlFor="obiettivo" className="text-slate-600 text-xs tracking-wide uppercase">Obiettivo</Label>
        <Textarea id="obiettivo" data-testid="form-obiettivo" rows={3} value={form.obiettivo} onChange={(e) => set("obiettivo", e.target.value)} className="mt-2 rounded-none border-slate-300 focus:border-indigo-600" placeholder="Descrivi brevemente obiettivo e contesto..." />
      </div>

      <div className="mt-5">
        <Label className="text-slate-600 text-xs tracking-wide uppercase">Tempistiche *</Label>
        <Select onValueChange={(v) => set("tempistiche", v)}>
          <SelectTrigger className="mt-2 h-12 rounded-none border-slate-300" data-testid="form-tempistiche-trigger"><SelectValue placeholder="Seleziona..." /></SelectTrigger>
          <SelectContent>{opzioniTempistiche.map((t) => (<SelectItem key={t} value={t}>{t}</SelectItem>))}</SelectContent>
        </Select>
      </div>

      <div className="flex items-start gap-3 mt-6">
        <Checkbox id="privacy" data-testid="form-privacy" checked={form.privacy_consent} onCheckedChange={(v) => set("privacy_consent", v)} className="mt-0.5 rounded-none" />
        <Label htmlFor="privacy" className="text-sm text-slate-500 leading-relaxed cursor-pointer font-normal">
          Acconsento al trattamento dei miei dati personali ai sensi della{" "}
          <a href="/privacy" className="text-indigo-700 underline hover:text-indigo-800">Privacy Policy</a>.
        </Label>
      </div>

      <Button
        type="submit" data-testid="form-submit-btn" disabled={loading}
        className="mt-8 bg-indigo-700 hover:bg-indigo-800 text-white rounded-none px-10 py-3.5 text-sm font-medium tracking-wide uppercase transition-all"
      >
        {loading ? "Invio in corso..." : "Invia richiesta"}
        {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
    </motion.form>
  );
}

export default function ContactSection() {
  return (
    <>
      {/* CTA Band */}
      <section className="py-20 md:py-28 bg-indigo-700 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Tutto inizia da una conversazione.
            </h2>
            <p className="text-base md:text-lg text-indigo-200 max-w-xl mx-auto mb-8">
              Raccontaci il tuo contesto. Ti ricontattiamo con una proposta di primo passo concreto.
            </p>
            <a href="#contatti">
              <Button className="bg-white text-indigo-800 hover:bg-white/90 rounded-none px-10 py-3.5 text-sm font-medium tracking-wide uppercase">
                Richiedi un contatto <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contatti" data-testid="contact-section" className="py-24 md:py-36 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left intro */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-indigo-600 mb-5 block">
                Contatti
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
                Richiedi un contatto
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                Risposta entro 1–2 giorni lavorativi con una proposta di primo passo concreto.
              </p>
              <div className="space-y-4 text-sm text-slate-500">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <a href="mailto:info@intentionova.ch" className="hover:text-indigo-700 transition-colors">info@intentionova.ch</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-slate-400" />
                  <span>+41 77 26 14 860</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-slate-400 mt-0.5" />
                  <span>Via Clemente Maraini, 13<br />6900 Lugano CH</span>
                </div>
              </div>
            </motion.div>

            {/* Right form */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer data-testid="main-footer" className="bg-[#0C0820] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <img src={LOGO_DARK} alt="Intentio" className="h-12 mb-5" />
              <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                Evoluzione consapevole di persone, leadership e team.
                Società svizzera di consulenza organizzativa.
              </p>
            </div>
            <div>
              <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-slate-400 mb-5">Contatti</h4>
              <div className="space-y-2.5 text-sm text-slate-500">
                <p className="font-medium text-slate-400">Intentio Nova Sagl</p>
                <p>Via Clemente Maraini, 13</p>
                <p>6900 Lugano CH</p>
                <a href="mailto:info@intentionova.ch" className="block hover:text-indigo-400 transition-colors">info@intentionova.ch</a>
                <p>CH: +41 77 26 14 860</p>
                <p>IT: +39 340 240 33 77</p>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-slate-400 mb-5">Link</h4>
              <div className="space-y-2.5 text-sm text-slate-500">
                <a href="https://www.human-aimpact.ch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors" data-testid="footer-site-link">
                  human-aimpact.ch <ExternalLink className="h-3 w-3" />
                </a>
                <a href="/privacy" className="block hover:text-indigo-400 transition-colors">Privacy Policy</a>
                <a href="/cookie" className="block hover:text-indigo-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} Intentio Nova sagl &middot; P.IVA CHE 489.716.728 &middot; Tutti i diritti riservati.</p>
            <p className="text-xs text-slate-600">Lugano, Svizzera</p>
          </div>
        </div>
      </footer>
    </>
  );
}
