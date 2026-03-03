import { motion } from "framer-motion";
import { Target, SlidersHorizontal, Wrench, RefreshCw, ExternalLink } from "lucide-react";

const steps = [
  { num: "01", title: "Mappare", desc: "Ascolto, dati, assessment mirati", icon: Target },
  { num: "02", title: "Prioritizzare", desc: "Leve, obiettivi, formato migliore", icon: SlidersHorizontal },
  { num: "03", title: "Implementare", desc: "Interventi sul campo e routine operative", icon: Wrench },
  { num: "04", title: "Consolidare", desc: "Follow-up, misurazione leggera, autonomia", icon: RefreshCw },
];

const team = [
  {
    initials: "EC",
    name: "Emanuele Casero",
    role: "Founder, People & AI Team Coach",
    bio: "Fondatore di Intentio Nova Sagl e progettista di Human-AImpact. Coach sistemico certificato ICF (PCC), formatore e consulente con background manageriale e imprenditoriale. Specializzato in leadership, complessità organizzativa e integrazione dell'AI come leva culturale e produttiva.",
  },
  {
    initials: "BM",
    name: "Benedetta Magarini Montenero",
    role: "Senior HR Consultant & PCC Coach",
    bio: "Consulente e senior HR con esperienza in sviluppo organizzativo, change management e politiche people. Collega l'introduzione dell'AI a cultura aziendale, ruoli, responsabilità e sistemi di gestione.",
  },
  {
    initials: "AC",
    name: "Alessandro Castelli",
    role: "HR Strategic Advisor",
    bio: "HR Director e advisor con +20 anni di esperienza in aziende strutturate come Crédit Agricole. Membro del comitato direttivo di AIDP, collega l'introduzione dell'AI ai temi di cultura organizzativa, policy e people strategy.",
  },
  {
    initials: "AT",
    name: "Annapaola Tiscornia",
    role: "AI Adoption & Training Specialist",
    bio: "Professionista specializzata in AI generativa, analisi dei dati e architetture socio-tecniche. Traduce esigenze di business in casi d'uso concreti, valuta limiti e potenzialità degli strumenti e integra l'AI nei flussi di lavoro reali.",
  },
];

const results = [
  "Decisioni più chiare e responsabilità distribuite",
  "Conversazioni manageriali più efficaci: feedback, delega, allineamento",
  "Riduzione attriti e rilavorazioni operative",
  "Team più autonomi e coesi, con routine sostenibili",
];

const logos = [
  { name: "Camera di Commercio Italiana per la Svizzera", abbr: "CCIS", img: "https://customer-assets.emergentagent.com/job_people-leadership/artifacts/q8voeh8d_logo-ccis.jpg" },
  { name: "HR Ticino", abbr: "HRT", img: "https://customer-assets.emergentagent.com/job_people-leadership/artifacts/fb6nnwas_logo-hrticino.png" },
  { name: "International Coaching Federation", abbr: "ICF", img: "https://customer-assets.emergentagent.com/job_people-leadership/artifacts/r3kqfkys_logo%20ICF.png" },
  { name: "European Mentoring & Coaching Council", abbr: "EMCC", img: "https://customer-assets.emergentagent.com/job_people-leadership/artifacts/2mkglfjz_emcc-global-1024x576.webp" },
  { name: "Employer Branding Awards", abbr: "EBA", img: "https://customer-assets.emergentagent.com/job_people-leadership/artifacts/h2m6ohuf_Logo-EBA_Normale.svg" },
];

export default function MethodSection() {
  return (
    <>
      {/* METHOD */}
      <section id="metodo" data-testid="method-section" className="py-24 md:py-36 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-indigo-600 mb-5 block">
                Approccio
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Un metodo semplice,
                <br />misurabile,
                <br />replicabile
              </h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-indigo-600 to-indigo-600 mt-6 mb-10 rounded-full" />

              <div className="bg-slate-50 border border-slate-200/80 p-6">
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400 mb-4">
                  Output tipici
                </p>
                <div className="space-y-3">
                  {["Roadmap 30-60-90 giorni", "Toolkit operativo", "Check-in periodici"].map((o, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {o}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7">
              <div className="space-y-0 border-l-2 border-slate-200 ml-5">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-12 pb-14 last:pb-0"
                    data-testid={`method-step-${i}`}
                  >
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-[3px] border-indigo-600 flex items-center justify-center shadow-sm">
                      <step.icon className="h-4 w-4 text-indigo-700" />
                    </div>
                    <span className="text-[11px] font-mono text-indigo-600 tracking-wider">{step.num}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">{step.title}</h3>
                    <p className="text-sm text-slate-500 mt-2">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section
        id="team"
        data-testid="team-section"
        className="py-24 md:py-36"
        style={{ backgroundColor: "#F7F5F3" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-indigo-600 mb-5 block">
              Il team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Chi siamo
            </h2>
            <p className="text-base text-slate-500 mt-4 max-w-2xl leading-relaxed">
              Una struttura consulenziale con competenze complementari, unita dalla convinzione che le organizzazioni
              crescono quando investono nelle persone con metodo e coerenza.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200/80 hover:border-indigo-300/50 hover:shadow-lg transition-all duration-400 group"
                data-testid={`team-member-${i}`}
              >
                {/* Photo placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                  <div className="w-24 h-24 rounded-full bg-white/80 border-2 border-slate-300 flex items-center justify-center group-hover:border-indigo-400 transition-colors">
                    <span className="text-2xl font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                      {member.initials}
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-indigo-600 mt-1 mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partner" data-testid="ecosystem-section" className="py-24 md:py-36 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-indigo-600 mb-5 block">
              Ecosistema
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Partner
            </h2>
            <p className="text-base text-slate-500 mt-4 max-w-xl leading-relaxed">
              Una struttura consulenziale che integra competenze e partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-slate-200/80 p-8 lg:p-10 hover:border-indigo-300/50 hover:shadow-lg transition-all duration-400"
              data-testid="partner-kitsap"
            >
              <div className="mb-6">
                <img src="https://customer-assets.emergentagent.com/job_people-leadership/artifacts/2iho6wo9_kitsap_black.svg" alt="Kitsap" className="h-10" />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Valutazioni e percorsi basati sul modello FACED e possibilità di certificazioni People Loving Company®.
              </p>
              <a
                href="https://kit-sap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-800 tracking-wide uppercase transition-colors"
                data-testid="kitsap-link"
              >
                Visita il sito <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border border-slate-200/80 p-8 lg:p-10 hover:border-indigo-300/50 hover:shadow-lg transition-all duration-400"
              data-testid="partner-ariadne"
            >
              <div className="mb-6">
                <img src="https://customer-assets.emergentagent.com/job_people-leadership/artifacts/r23349yc_Ariadne_Logo_20grande_edited.avif" alt="Ariadne" className="h-10" />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Percorsi strutturati di formazione per coach professionisti e programmi esperienziali per aziende,
                in coerenza con standard di riferimento.
              </p>
              <a
                href="https://www.ariadne.training"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-800 tracking-wide uppercase transition-colors"
                data-testid="ariadne-link"
              >
                Visita il sito <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section data-testid="results-section" className="py-24 md:py-36" style={{ backgroundColor: "#F7F5F3" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-indigo-600 mb-5 block">
              Impatto
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Risultati osservabili
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border-l-[3px] border-indigo-600 p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
                data-testid={`result-card-${i}`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-indigo-200 leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm md:text-base text-slate-700 font-medium pt-1">{r}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section data-testid="trust-section" className="py-16 bg-white border-t border-slate-200/60">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-slate-400">
              Membri, community e standard di riferimento
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {logos.map((logo, i) => (
              <motion.div
                key={logo.abbr}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex flex-col items-center gap-2 group cursor-default"
                data-testid={`trust-logo-${logo.abbr.toLowerCase()}`}
              >
                <div className="w-28 h-16 md:w-36 md:h-20 bg-white border border-slate-200 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden p-3">
                  {logo.img ? (
                    <img src={logo.img} alt={logo.name} className="max-w-full max-h-full object-contain" />
                  ) : (
                    <span className="text-sm md:text-base font-bold text-slate-500">{logo.abbr}</span>
                  )}
                </div>
                <span className="text-[9px] text-slate-400 text-center max-w-[100px] leading-tight">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
