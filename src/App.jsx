import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialBar from "./components/SocialBar";

// Home page sections
import HeroSection from "./components/sections/HeroSection";
import StatBar from "./components/sections/StatBar";
import ServicesSection from "./components/sections/ServicesSection";
import FeaturedEquipment from "./components/sections/FeaturedEquipment";
import AboutSection from "./components/sections/AboutSection";
import WhyUsSection from "./components/sections/WhyUsSection";
import GalleryTeaser from "./components/sections/GalleryTeaser";
import CTAStrip from "./components/sections/CTAStrip";

// Equipment pages
import Nosotros from "./pages/Nosotros";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import GruasVenta from "./pages/GruasVenta";
import GruasRenta from "./pages/GruasRenta";
import MontacargasVenta from "./pages/MontacargasVenta";
import MontacargasRenta from "./pages/MontacargasRenta";
import MaquinariaVenta from "./pages/MaquinariaVenta";
import MaquinariaRenta from "./pages/MaquinariaRenta";
import CamionesConRastrasLowboysVenta from "./pages/CamionesConRastrasLowboysVenta";
import CamionesConRastrasLowboysRenta from "./pages/CamionesConRastrasLowboysRenta";
import Accesorios from "./pages/Accesorios";


function HomePage() {
  return (
    <>
      <HeroSection />
      <StatBar />
      <ServicesSection />
      <FeaturedEquipment />
      <AboutSection />
      <WhyUsSection />
      <GalleryTeaser />
      <CTAStrip />
    </>
  );
}

export default function App() {
  return (
    <div className="bg-surface-base text-ink-cream font-body">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* GRÚAS */}
        <Route path="/gruas/renta" element={<GruasRenta />} />
        <Route path="/gruas/venta" element={<GruasVenta />} />

        {/* MONTACARGAS */}
        <Route path="/montacargas/renta" element={<MontacargasRenta />} />
        <Route path="/montacargas/venta" element={<MontacargasVenta />} />

        {/* MAQUINARIA */}
        <Route path="/maquinaria/renta" element={<MaquinariaRenta />} />
        <Route path="/maquinaria/venta" element={<MaquinariaVenta />} />

        {/* CAMIONES */}
        <Route path="/camiones/renta" element={<CamionesConRastrasLowboysRenta />} />
        <Route path="/camiones/venta" element={<CamionesConRastrasLowboysVenta />} />
        <Route path="/camiones-con-rastras-lowboys/renta" element={<CamionesConRastrasLowboysRenta />} />
        <Route path="/camiones-con-rastras-lowboys/venta" element={<CamionesConRastrasLowboysVenta />} />

        {/* ACCESORIOS */}
        <Route path="/accesorios" element={<Accesorios />} />

        {/* PHASE 4 PAGES */}
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
      <SocialBar />
    </div>
  );
}
