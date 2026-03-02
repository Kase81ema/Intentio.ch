import { motion } from "framer-motion";

const logos = [
  { name: "Camera di Commercio Italiana per la Svizzera", abbr: "CCIS", role: "Membro" },
  { name: "HR Ticino", abbr: "HRT", role: "Collaboratore" },
  { name: "International Coaching Federation", abbr: "ICF", role: "Standard" },
  { name: "European Mentoring & Coaching Council", abbr: "EMCC", role: "Membro team" },
  { name: "Employer Branding Awards", abbr: "EBA", role: "Network" },
];

export default function TrustSection() {
  return (
    <section data-testid="trust-section" className="py-16 md:py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-slate-400 mb-2">
            Membri, community e standard di riferimento
          </p>
          <p className="text-sm text-slate-500">
            Lavoriamo con un ecosistema riconosciuto nel mondo HR e coaching.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.abbr}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-2 group cursor-default"
              data-testid={`trust-logo-${logo.abbr.toLowerCase()}`}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:border-violet-200 transition-all duration-300">
                <span className="text-lg md:text-xl font-bold text-slate-400 group-hover:text-violet-600 transition-colors">
                  {logo.abbr}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 text-center max-w-[120px] leading-tight">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
