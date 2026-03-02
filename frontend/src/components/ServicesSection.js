import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, ClipboardCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Formazione aziendale",
    desc: "Percorsi pratici ed esperienziali per manager e team: leadership, comunicazione, collaborazione, organizzazione del lavoro.",
  },
  {
    icon: Users,
    title: "Coaching e team coaching",
    desc: "Spazi strutturati per aumentare chiarezza, responsabilità e qualità delle conversazioni nei momenti che contano.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment e diagnosi",
    desc: "Fotografie utili e leggibili per decidere priorità e investimenti su persone, ruoli e dinamiche di team.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servizi" data-testid="services-section" className="py-20 md:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Interventi people-focused,
            <br className="hidden md:block" />
            progettati per l&apos;implementazione
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-100 hover:border-violet-200 p-8 shadow-sm hover:shadow-md transition-all duration-300 group rounded-xl"
              data-testid={`service-card-${i}`}
            >
              <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-6 group-hover:bg-violet-100 transition-colors">
                <service.icon className="h-6 w-6 text-violet-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.desc}</p>
              <a href="#contatti">
                <Button
                  variant="ghost"
                  className="text-violet-700 hover:text-violet-800 hover:bg-violet-50 p-0 h-auto text-sm font-medium"
                  data-testid={`service-cta-${i}`}
                >
                  Richiedi un contatto <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
