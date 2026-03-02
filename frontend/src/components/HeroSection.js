import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_IMG = "https://customer-assets.emergentagent.com/job_people-leadership/artifacts/bl3vbo3w_gpt-image-1.5_specchia_l_immagine_in_modo_che_il_logo_sia_sulla_destra._Rendi_pi%C3%B9_simili_ai_s-0.jpg";

export default function HeroSection() {
  return (
    <section
      data-testid="hero-section"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0820]/95 via-[#0C0820]/80 to-[#0C0820]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-indigo-300/90 text-xs font-medium tracking-[0.25em] uppercase mb-8">
              Consulenza svizzera
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[0.92] tracking-tight mb-8">
              Evoluzione
              <br />
              consapevole
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-lg mb-12">
              Affianchiamo HR, imprenditori e manager nello sviluppo di cultura organizzativa,
              competenze manageriali e performance dei team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contatti">
                <Button
                  data-testid="hero-cta-btn"
                  className="bg-white text-slate-900 hover:bg-white/90 rounded-none px-8 py-3.5 text-sm font-medium tracking-wide uppercase transition-all"
                  size="lg"
                >
                  Richiedi un contatto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#servizi">
                <Button
                  variant="outline"
                  data-testid="hero-services-btn"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-none px-8 py-3.5 text-sm font-medium tracking-wide uppercase bg-transparent transition-all"
                  size="lg"
                >
                  Scopri i servizi
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scorri</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.div>

      {/* Badge */}
      <motion.div
        className="absolute bottom-10 right-10 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div
          data-testid="human-aimpact-badge"
          className="bg-white/10 backdrop-blur-md border border-white/15 rounded-sm px-5 py-3"
        >
          <p className="text-[10px] text-indigo-300 tracking-[0.2em] uppercase mb-1">Programma</p>
          <p className="text-sm text-white font-medium">Human-AImpact</p>
          <p className="text-[11px] text-white/50 mt-0.5">People-first nell'era dell'AI</p>
        </div>
      </motion.div>
    </section>
  );
}
