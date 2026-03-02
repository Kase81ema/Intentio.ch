import { motion } from "framer-motion";

const situations = [
  { text: "Feedback e delega non sono continui, il carico ricade su poche persone", accent: "bg-indigo-600" },
  { text: "Obiettivi chiari, ma collaborazione e responsabilità restano confuse", accent: "bg-indigo-600" },
  { text: "Iniziative HR presenti, ma poca coerenza tra valori e pratiche quotidiane", accent: "bg-indigo-600" },
  { text: "Conflitti latenti e riunioni che non portano decisioni", accent: "bg-indigo-600" },
  { text: "Serve una lettura oggettiva per scegliere priorità e interventi", accent: "bg-indigo-600" },
  { text: "L'AI entra nei processi e serve governare impatti su ruoli e competenze", accent: "bg-indigo-600" },
];

export default function SituationsSection() {
  return (
    <section
      data-testid="situations-section"
      className="py-24 md:py-36"
      style={{ backgroundColor: "#F7F5F3" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-indigo-600 mb-5 block">
              Situazioni tipiche
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Quando veniamo
              <br />chiamati
            </h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-indigo-600 to-indigo-600 mt-6 rounded-full" />
          </motion.div>

          {/* Right: situations grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {situations.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-4 bg-white p-6 border border-slate-200/60 hover:border-indigo-300/60 hover:shadow-md transition-all duration-300 group"
                data-testid={`situation-pill-${i}`}
              >
                <span className={`mt-2 w-2 h-2 rounded-full ${s.accent} flex-shrink-0 group-hover:scale-125 transition-transform`} />
                <p className="text-sm text-slate-700 leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
