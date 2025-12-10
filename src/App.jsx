import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialBar from "./components/SocialBar";
import NavigationTabs from "./components/NavigationTabs";
import Hero from "./components/Hero";

import GruasVenta from "./pages/GruasVenta";
import GruasRenta from "./pages/GruasRenta";
import MontacargasVenta from "./pages/MontacargasVenta";
import MontacargasRenta from "./pages/MontacargasRenta";
import CamionesVenta from "./pages/CamionesVenta";
import CamionesRenta from "./pages/CamionesRenta";
import MaquinariaVenta from "./pages/MaquinariaVenta";
import MaquinariaRenta from "./pages/MaquinariaRenta";
import RastrasLowboysVenta from "./pages/RastrasLowboysVenta";
import RastrasLowboysRenta from "./pages/RastrasLowboysRenta";
import Accesorios from "./pages/Accesorios";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <NavigationTabs />

      <Routes>

        {/* HOME PAGE */}
        <Route 
          path="/" 
          element={
            <>
              <HeroSlider />
              <About />
              <Hero />
              <Services />
              <Contact />
              <Footer />
              <SocialBar />
            </>
          } 
        />

        {/* GRÚAS */}
        <Route path="/gruas/venta" element={<GruasVenta />} />
        <Route path="/gruas/renta" element={<GruasRenta />} />

        {/* MONTACARGAS */}
        <Route path="/montacargas/venta" element={<MontacargasVenta />} />
        <Route path="/montacargas/renta" element={<MontacargasRenta />} />

        {/* CAMIONES */}
        <Route path="/camiones/venta" element={<CamionesVenta />} />
        <Route path="/camiones/renta" element={<CamionesRenta />} />

        {/* MAQUINARIA */}
        <Route path="/maquinaria/venta" element={<MaquinariaVenta />} />
        <Route path="/maquinaria/renta" element={<MaquinariaRenta />} />

        {/* RASTRAS Y LOWBOYS */}
        <Route path="/rastras-lowboys/venta" element={<RastrasLowboysVenta />} />
        <Route path="/rastras-lowboys/renta" element={<RastrasLowboysRenta />} />

        {/* ACCESORIOS */}
        <Route path="/accesorios" element={<Accesorios />} />

      </Routes>
    </div>
  );
}
