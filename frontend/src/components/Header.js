import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_people-leadership/artifacts/qrr52jf8_Intentio%20logo%20%28800%20x%20300%20px%29%281%29.png";

const LOGO_LIGHT =
  "https://customer-assets.emergentagent.com/job_people-leadership/artifacts/1etgm0zr_Intentio%20logo%20%28800%20x%20300%20px%29%282%29.png";

const LOGO_DARK =
  "https://customer-assets.emergentagent.com/job_people-leadership/artifacts/sgzpl4ho_Intentio%20logo%20%28800%20x%20300%20px%29%283%29.png";

const navLinks = [
  { label: "Servizi", href: "#servizi" },
  { label: "Human-AImpact", href: "#impact" },
  { label: "Metodo", href: "#metodo" },
  { label: "Chi siamo", href: "#team" },
  { label: "Contatti", href: "#contatti" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      data-testid="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex-shrink-0" data-testid="header-logo">
            <img
              src={scrolled ? LOGO_LIGHT : LOGO_DARK}
              alt="Intentio"
              className="h-12 md:h-16 w-auto transition-all duration-500"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-10" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                  scrolled
                    ? "text-slate-700 hover:text-indigo-700"
                    : "text-white/80 hover:text-white"
                }`}
                data-testid={`nav-${link.href.replace("#", "")}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a href="#contatti">
              <Button
                data-testid="header-cta-btn"
                className={`hidden lg:inline-flex rounded-none px-7 py-2.5 text-[13px] font-medium tracking-wide uppercase transition-all ${
                  scrolled
                    ? "bg-indigo-700 hover:bg-indigo-800 text-white"
                    : "bg-white text-slate-900 hover:bg-white/90"
                }`}
              >
                Richiedi un contatto
              </Button>
            </a>
            <button
              data-testid="mobile-menu-toggle"
              className={`lg:hidden p-2 ${scrolled ? "text-slate-800" : "text-white"}`}
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl" data-testid="mobile-menu">
          <div className="px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3.5 text-sm font-medium text-slate-800 hover:text-indigo-700 border-b border-slate-100 last:border-0"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contatti" onClick={() => setOpen(false)}>
              <Button className="w-full mt-5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-none py-3" data-testid="mobile-cta-btn">
                Richiedi un contatto
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
