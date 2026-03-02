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
import { Send, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_people-leadership/artifacts/qrr52jf8_Intentio%20logo%20%28800%20x%20300%20px%29%281%29.png";

const areeInteresse = [
  "Formazione",
  "Coaching",
  "Team coaching",
  "Assessment",
  "Human-AImpact",
  "Altro",
];

const opzioniTempistiche = [
  "Entro 1 mese",
  "Entro 3 mesi",
  "Entro 6 mesi",
  "Da valutare",
];

function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    azienda: "",
    ruolo: "",
    email: "",
    telefono: "",
    area_interesse: "",
    obiettivo: "",
    tempistiche: "",
    privacy_consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.privacy_consent) {
      toast.error("Accetta la privacy policy per procedere.");
      return;
    }
    if (
      !form.nome ||
      !form.email ||
      !form.azienda ||
      !form.ruolo ||
      !form.area_interesse ||
      !form.tempistiche
    ) {
      toast.error("Compila tutti i campi obbligatori.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      setSubmitted(true);
      toast.success("Richiesta inviata con successo!");
    } catch (err) {
      toast.error("Errore nell'invio. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto text-center py-16"
        data-testid="form-success"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <Send className="h-7 w-7 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 mb-3">Richiesta inviata</h3>
        <p className="text-slate-500">
          La ricontatteremo entro 1-2 giorni lavorativi con una proposta di primo passo concreto.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="max-w-2xl"
      data-testid="contact-form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="nome" className="text-slate-700">Nome e cognome *</Label>
          <Input
            id="nome"
            data-testid="form-nome"
            value={form.nome}
            onChange={(e) => handleChange("nome", e.target.value)}
            className="mt-1.5 h-11"
            required
          />
        </div>
        <div>
          <Label htmlFor="azienda" className="text-slate-700">Azienda *</Label>
          <Input
            id="azienda"
            data-testid="form-azienda"
            value={form.azienda}
            onChange={(e) => handleChange("azienda", e.target.value)}
            className="mt-1.5 h-11"
            required
          />
        </div>
        <div>
          <Label htmlFor="ruolo" className="text-slate-700">Ruolo *</Label>
          <Input
            id="ruolo"
            data-testid="form-ruolo"
            value={form.ruolo}
            onChange={(e) => handleChange("ruolo", e.target.value)}
            className="mt-1.5 h-11"
            required
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-slate-700">Email *</Label>
          <Input
            id="email"
            type="email"
            data-testid="form-email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="mt-1.5 h-11"
            required
          />
        </div>
        <div>
          <Label htmlFor="telefono" className="text-slate-700">Telefono (opzionale)</Label>
          <Input
            id="telefono"
            data-testid="form-telefono"
            value={form.telefono}
            onChange={(e) => handleChange("telefono", e.target.value)}
            className="mt-1.5 h-11"
          />
        </div>
        <div>
          <Label className="text-slate-700">Area di interesse *</Label>
          <Select onValueChange={(v) => handleChange("area_interesse", v)}>
            <SelectTrigger className="mt-1.5 h-11" data-testid="form-area-interesse-trigger">
              <SelectValue placeholder="Seleziona..." />
            </SelectTrigger>
            <SelectContent>
              {areeInteresse.map((a) => (
                <SelectItem key={a} value={a} data-testid={`area-${a.toLowerCase().replace(/\s/g, "-")}`}>
                  {a}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-6">
        <Label htmlFor="obiettivo" className="text-slate-700">Obiettivo</Label>
        <Textarea
          id="obiettivo"
          data-testid="form-obiettivo"
          rows={3}
          value={form.obiettivo}
          onChange={(e) => handleChange("obiettivo", e.target.value)}
          className="mt-1.5"
          placeholder="Descrivi brevemente obiettivo e contesto..."
        />
      </div>

      <div className="mt-6">
        <Label className="text-slate-700">Tempistiche *</Label>
        <Select onValueChange={(v) => handleChange("tempistiche", v)}>
          <SelectTrigger className="mt-1.5 h-11" data-testid="form-tempistiche-trigger">
            <SelectValue placeholder="Seleziona..." />
          </SelectTrigger>
          <SelectContent>
            {opzioniTempistiche.map((t) => (
              <SelectItem key={t} value={t} data-testid={`tempo-${t.toLowerCase().replace(/\s/g, "-")}`}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-start gap-3 mt-6">
        <Checkbox
          id="privacy"
          data-testid="form-privacy"
          checked={form.privacy_consent}
          onCheckedChange={(v) => handleChange("privacy_consent", v)}
          className="mt-0.5"
        />
        <Label htmlFor="privacy" className="text-sm text-slate-600 leading-relaxed cursor-pointer font-normal">
          Acconsento al trattamento dei miei dati personali ai sensi della{" "}
          <a href="/privacy" className="text-violet-700 underline hover:text-violet-800">
            Privacy Policy
          </a>
          .
        </Label>
      </div>

      <Button
        type="submit"
        data-testid="form-submit-btn"
        className="mt-8 bg-violet-700 hover:bg-violet-800 text-white rounded-md px-8 py-3 text-sm font-medium shadow-md hover:shadow-lg transition-all"
        disabled={loading}
      >
        {loading ? "Invio in corso..." : "Invia richiesta"}
      </Button>
    </motion.form>
  );
}

function Footer() {
  return (
    <footer data-testid="main-footer" className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img
              src={LOGO_URL}
              alt="Intentio"
              className="h-10 mb-5 brightness-0 invert opacity-80"
            />
            <p className="text-sm text-slate-400 leading-relaxed">
              Evoluzione consapevole di persone, leadership e team.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-5 text-white tracking-wide">Contatti</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-slate-500" />
                <span>
                  Via Clemente Maraini, 13
                  <br />
                  6900 Lugano CH
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-slate-500" />
                <a href="mailto:info@intentionova.ch" className="hover:text-violet-400 transition-colors">
                  info@intentionova.ch
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-slate-500" />
                <span>CH: +41 77 26 14 860</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-slate-500" />
                <span>IT: +39 340 240 33 77</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-5 text-white tracking-wide">Link</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <a
                href="https://www.intentionova.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-violet-400 transition-colors"
                data-testid="footer-site-link"
              >
                intentionova.ch <ExternalLink className="h-3 w-3" />
              </a>
              <a href="/privacy" className="block hover:text-violet-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/cookie" className="block hover:text-violet-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Intentio Nova sagl. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}

export default function ContactSection() {
  return (
    <>
      <section id="contatti" data-testid="contact-section" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              Richiedi un contatto
            </h2>
            <p className="text-base text-slate-500 mb-12 max-w-xl">
              Raccontaci obiettivo e contesto. Ti ricontattiamo con una proposta di primo passo concreto.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
