import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_people-leadership/artifacts/qrr52jf8_Intentio%20logo%20%28800%20x%20300%20px%29%281%29.png";

const navLinks = [
  { label: "Cosa facciamo", href: "#servizi" },
  { label: "Human-AImpact", href: "#impact" },
  { label: "Metodo", href: "#metodo" },
  { label: "Partner", href: "#partner" },
  { label: "Contatti", href: "#contatti" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-testid="main-header"
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-slate-200 shadow-sm"
          : "bg-white/60 backdrop-blur-md border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex-shrink-0" data-testid="header-logo">
            <img src={LOGO_URL} alt="Intentio" className="h-10 md:h-12 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-violet-700 transition-colors"
                data-testid={`nav-${link.href.replace('#', '')}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#contatti">
              <Button
                data-testid="header-cta-btn"
                className="hidden md:inline-flex bg-violet-700 hover:bg-violet-800 text-white rounded-md px-6 py-2 text-sm font-medium shadow-md hover:shadow-lg transition-all"
              >
                Richiedi un contatto
              </Button>
            </a>
            <button
              data-testid="mobile-menu-toggle"
              className="md:hidden p-2 text-slate-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 shadow-lg" data-testid="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-slate-700 hover:text-violet-700 border-b border-slate-50 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contatti" onClick={() => setMobileOpen(false)}>
            <Button className="w-full mt-4 bg-violet-700 hover:bg-violet-800 text-white" data-testid="mobile-cta-btn">
              Richiedi un contatto
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
