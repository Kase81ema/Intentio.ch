import { motion } from "framer-motion";

const situations = [
  "Feedback e delega non sono continui, il carico ricade su poche persone",
  "Obiettivi chiari, ma collaborazione e responsabilità restano confuse",
  "Iniziative HR presenti, ma poca coerenza tra valori e pratiche quotidiane",
  "Conflitti latenti e riunioni che non portano decisioni",
  "Serve una lettura oggettiva per scegliere priorità e interventi",
  "L'AI entra nei processi e serve governare impatti su ruoli e competenze",
];

export default function SituationsSection() {
  return (
    <section data-testid="situations-section" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Quando veniamo chiamati
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {situations.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-start gap-3 p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-violet-200 hover:bg-violet-50/30 transition-all duration-300"
              data-testid={`situation-pill-${i}`}
            >
              <span className="mt-1.5 w-2 h-2 rounded-full bg-violet-500 flex-shrink-0" />
              <p className="text-sm text-slate-700 leading-relaxed">{s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
