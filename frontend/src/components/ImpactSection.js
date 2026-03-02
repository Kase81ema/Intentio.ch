import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Users, Zap } from "lucide-react";

const features = [
  { icon: Users, text: "Impatto su ruoli e competenze" },
  { icon: ShieldCheck, text: "Governance e regole minime sostenibili" },
  { icon: Zap, text: "Adozione e fiducia nei team" },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      data-testid="impact-section"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#1E1B4B" }}
    >
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="impact-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1.5" fill="#A78BFA" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#impact-dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            data-testid="impact-badge"
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/15 border border-violet-400/25 rounded-full text-xs font-medium text-violet-300 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Programma
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Human-AImpact
          </h2>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mb-12">
            Human-AImpact è il nostro programma per accompagnare aziende che stanno introducendo intelligenza artificiale
            e automazione e vogliono farlo senza perdere centralità, dignità e responsabilità delle persone.
            Non è formazione sugli strumenti: è governo dell&apos;impatto su competenze, ruoli, decisioni e cultura.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-violet-400/25 hover:bg-white/[0.07] transition-all duration-300"
                data-testid={`impact-feature-${i}`}
              >
                <div className="w-10 h-10 rounded-lg bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                  <f.icon className="h-5 w-5 text-violet-400" />
                </div>
                <span className="text-sm text-slate-200 font-medium">{f.text}</span>
              </motion.div>
            ))}
          </div>

          <a href="#contatti">
            <Button
              data-testid="impact-cta-btn"
              className="bg-violet-600 hover:bg-violet-500 text-white rounded-md px-8 py-3 text-sm font-medium shadow-lg shadow-violet-900/30 transition-all"
            >
              Parliamone
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
