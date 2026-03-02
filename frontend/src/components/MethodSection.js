import { motion } from "framer-motion";
import { Target, SlidersHorizontal, Wrench, RefreshCw, ExternalLink } from "lucide-react";

const steps = [
  { num: "01", title: "Mappare", desc: "Ascolto, dati, assessment mirati", icon: Target },
  { num: "02", title: "Prioritizzare", desc: "Leve, obiettivi, formato migliore", icon: SlidersHorizontal },
  { num: "03", title: "Implementare", desc: "Interventi sul campo e routine operative", icon: Wrench },
  { num: "04", title: "Consolidare", desc: "Follow-up, misurazione leggera, autonomia", icon: RefreshCw },
];

const outputs = ["Roadmap 30-60-90 giorni", "Toolkit", "Check-in"];

const results = [
  "Decisioni più chiare e responsabilità distribuite",
  "Conversazioni manageriali più efficaci (feedback, delega, allineamento)",
  "Riduzione attriti e rilavorazioni operative",
  "Team più autonomi e coesi, con routine sostenibili",
];

export default function MethodSection() {
  return (
    <>
      {/* Method Timeline */}
      <section id="metodo" data-testid="method-section" className="py-20 md:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Un metodo semplice,
              <br className="hidden md:block" />
              misurabile, replicabile
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="space-y-0">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                    data-testid={`method-step-${i}`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-white border-[3px] border-violet-600 flex items-center justify-center z-10 shadow-sm">
                        <step.icon className="h-4 w-4 text-violet-700" />
                      </div>
                      {i < steps.length - 1 && <div className="w-px h-14 bg-violet-200" />}
                    </div>
                    <div className="pb-10">
                      <span className="text-xs font-mono text-violet-600 tracking-wider">{step.num}</span>
                      <h3 className="text-xl font-semibold text-slate-900 mt-1">{step.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm sticky top-28"
              >
                <p className="text-xs font-medium tracking-widest uppercase text-slate-400 mb-5">
                  Output tipici
                </p>
                <div className="space-y-3">
                  {outputs.map((o, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                      {o}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Partners */}
      <section id="partner" data-testid="ecosystem-section" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs font-medium tracking-widest uppercase text-slate-400 mb-3">Ecosistema</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-3">
              Partner
            </h2>
            <p className="text-base text-slate-500">
              Una struttura consulenziale che integra competenze e partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-100 rounded-xl p-8 hover:border-violet-200 transition-all duration-300"
              data-testid="partner-kitsap"
            >
              <h3
                className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Kitsap
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Valutazioni e percorsi basati sul modello FACED e possibilità di certificazioni People Loving Company®.
              </p>
              <a
                href="https://kit-sap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-700 hover:text-violet-800 transition-colors"
                data-testid="kitsap-link"
              >
                kit-sap.com <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 border border-slate-100 rounded-xl p-8 hover:border-violet-200 transition-all duration-300"
              data-testid="partner-ariadne"
            >
              <h3
                className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ariadne
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Percorsi strutturati di formazione per coach professionisti e programmi esperienziali per aziende,
                in coerenza con standard di riferimento.
              </p>
              <a
                href="https://www.ariadne.training"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-700 hover:text-violet-800 transition-colors"
                data-testid="ariadne-link"
              >
                ariadne.training <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Observable Results */}
      <section data-testid="results-section" className="py-20 md:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Risultati osservabili
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border-l-4 border-violet-600 p-6 shadow-sm rounded-r-xl hover:shadow-md transition-shadow duration-300"
                data-testid={`result-card-${i}`}
              >
                <p className="text-sm md:text-base text-slate-700 font-medium">{r}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
