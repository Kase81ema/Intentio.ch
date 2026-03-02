import "@/App.css";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SituationsSection from "@/components/SituationsSection";
import ImpactSection from "@/components/ImpactSection";
import MethodSection from "@/components/MethodSection";
import ContactSection from "@/components/ContactSection";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <SituationsSection />
        <ImpactSection />
        <MethodSection />
        <ContactSection />
      </main>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
