import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function NetworkCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const nodesRef = useRef([]);

  const initNodes = useCallback((width, height) => {
    const nodes = [];
    const count = Math.min(Math.floor((width * height) / 18000), 50);
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 2.5 + 1.5,
        hue: Math.random() > 0.5 ? 263 : 221,
      });
    }
    return nodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      nodesRef.current = initNodes(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", handleMouse);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          node.x -= dx * 0.008;
          node.y -= dy * 0.008;
        }
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `hsla(263, 70%, 50%, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${node.hue}, 60%, 55%, 0.35)`;
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouse);
    };
  }, [initNodes]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto" />;
}

export default function HeroSection() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[88vh] flex items-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)" }}
    >
      <NetworkCanvas />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div
              data-testid="human-aimpact-badge"
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-100/80 border border-violet-200 rounded-full text-xs font-medium text-violet-800 mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              Human-AImpact: people-first nell&apos;era dell&apos;intelligenza artificiale
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-4">
              Intentio
            </h1>
            <p className="text-xl md:text-2xl font-medium text-violet-700 mb-8 tracking-tight">
              Evoluzione consapevole di persone, leadership e team.
            </p>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mb-10">
              Intentio Nova sagl è una società svizzera di consulenza che affianca HR, imprenditori e manager
              nello sviluppo di cultura organizzativa, competenze manageriali e performance dei team,
              attraverso formazione, coaching, team coaching e assessment.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#contatti">
                <Button
                  data-testid="hero-cta-btn"
                  className="bg-violet-700 hover:bg-violet-800 text-white rounded-md px-8 py-3 text-base font-medium shadow-lg hover:shadow-violet-300/40 transition-all"
                  size="lg"
                >
                  Richiedi un contatto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            <p className="text-sm text-slate-500 mt-4">
              Risposta entro 1–2 giorni lavorativi con una proposta di primo passo concreto.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
