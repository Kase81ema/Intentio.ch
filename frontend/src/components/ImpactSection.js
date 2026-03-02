import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Users, Zap, ArrowRight } from "lucide-react";

const features = [
  { icon: Users, label: "Impatto", text: "Impatto su ruoli e competenze" },
  { icon: ShieldCheck, label: "Governance", text: "Governance e regole minime sostenibili" },
  { icon: Zap, label: "Adozione", text: "Adozione e fiducia nei team" },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      data-testid="impact-section"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: "#0C0820" }}
    >
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="impact-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#A78BFA" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#impact-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div
              data-testid="impact-badge"
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-indigo-500/10 border border-indigo-400/15 rounded-sm text-[11px] font-medium tracking-[0.2em] uppercase text-indigo-300 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Programma
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[0.95] mb-8">
              Human-AImpact
            </h2>

            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mb-6">
              Human-AImpact è il nostro programma per accompagnare aziende che stanno introducendo
              intelligenza artificiale e automazione e vogliono farlo senza perdere centralità,
              dignità e responsabilità delle persone.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed max-w-2xl mb-12">
              Non è formazione sugli strumenti: è governo dell'impatto su competenze, ruoli,
              decisioni e cultura.
            </p>

            <a href="#contatti">
              <Button
                data-testid="impact-cta-btn"
                className="bg-white text-slate-900 hover:bg-white/90 rounded-none px-8 py-3 text-sm font-medium tracking-wide uppercase transition-all"
              >
                Parliamone <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>

          {/* Right features */}
          <div className="lg:col-span-5 space-y-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex items-start gap-5 p-6 bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-indigo-400/20 transition-all duration-400"
                data-testid={`impact-feature-${i}`}
              >
                <div className="w-11 h-11 rounded-sm bg-indigo-500/10 flex items-center justify-center flex-shrink-0 border border-indigo-400/10">
                  <f.icon className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-[10px] text-indigo-400/70 tracking-[0.2em] uppercase mb-1">{f.label}</p>
                  <p className="text-sm text-white/80 font-medium">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
