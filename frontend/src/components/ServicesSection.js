import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    tag: "Strategie di People Management",
    title: "Team Connection",
    lead: "Rendiamo più solide e misurabili le iniziative che impattano su attrazione, crescita e benessere delle persone nel team.",
    body: "Attraverso la progettazione strategica di iniziative di People management rigeneriamo relazioni sane e connessioni che accelerano la produttività.",
    image: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=800&h=600&fit=crop&crop=center&q=80",
    reverse: false,
  },
  {
    tag: "Sviluppo del potenziale del team",
    title: "Team Evolution",
    lead: "Scopriamo qual è il reale potenziale del team e come potervi accedere, raggiungendo i massimi livelli di performance.",
    body: "Grazie a strumenti concreti e azioni misurabili offriamo ai team la definizione di una roadmap di 30-60-90 giorni con regole di ingaggio e routine operative.",
    image: "https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?w=800&h=600&fit=crop&crop=center&q=80",
    reverse: true,
  },
  {
    tag: "Change Management",
    title: "Teaming with AI",
    lead: "Guidiamo i cambiamenti che impattano sul team, a partire da quello dell'introduzione della AI nelle aziende e nelle attività gestionali.",
    body: "Gli strumenti portano all'evoluzione di ruoli, processi, governance che devono essere ripensati per una crescita sostenibile ed ottenere il meglio dagli investimenti tecnologici.",
    image: "https://images.unsplash.com/photo-1757405930202-b2c3e11570fc?w=800&h=600&fit=crop&crop=center&q=80",
    reverse: false,
  },
];

function ServiceBlock({ service, index }) {
  const { tag, title, lead, body, image, reverse } = service;
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
        index > 0 ? "border-t border-slate-200" : ""
      }`}
      data-testid={`service-block-${index}`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={`img-zoom aspect-[4/3] lg:aspect-auto ${reverse ? "lg:order-2" : ""}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className={`flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-24 ${
          reverse ? "lg:order-1" : ""
        }`}
      >
        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-violet-600 mb-5">
          {tag}
        </span>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
          {title}
        </h3>
        <p className="text-base md:text-lg text-slate-800 font-medium leading-relaxed mb-4">
          {lead}
        </p>
        <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-8">
          {body}
        </p>
        <a href="#contatti" className="inline-block">
          <Button
            variant="ghost"
            className="text-violet-700 hover:text-violet-800 hover:bg-violet-50 p-0 h-auto text-sm font-medium tracking-wide uppercase"
            data-testid={`service-cta-${index}`}
          >
            Richiedi un contatto <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </Button>
        </a>
      </motion.div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="servizi" data-testid="services-section" className="bg-white">
      {/* Intro */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-violet-600 mb-5 block">
            Cosa facciamo
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]">
            Interventi people-focused,
            <br className="hidden md:block" />
            <span className="gradient-text">progettati per l'implementazione</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 mt-8 max-w-2xl leading-relaxed">
            Formazione, coaching, team coaching e assessment. Ogni intervento parte da un'analisi concreta e si traduce
            in pratiche operative misurabili.
          </p>
        </motion.div>
      </div>

      {/* Service blocks */}
      <div>
        {services.map((service, i) => (
          <ServiceBlock key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
