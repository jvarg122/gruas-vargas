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
import MaquinariaVenta from "./pages/MaquinariaVenta";
import MaquinariaRenta from "./pages/MaquinariaRenta";
import CamionesConRastrasLowboysVenta from "./pages/CamionesConRastrasLowboysVenta";
import CamionesConRastrasLowboysRenta from "./pages/CamionesConRastrasLowboysRenta";
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
            </>
          } 
        />

        {/* GRÚAS */}
        <Route path="/gruas/venta" element={<GruasVenta />} />
        <Route path="/gruas/renta" element={<GruasRenta />} />

        {/* MONTACARGAS */}
        <Route path="/montacargas/venta" element={<MontacargasVenta />} />
        <Route path="/montacargas/renta" element={<MontacargasRenta />} />

        {/* CAMIONES CON RASTRAS Y LOWBOYS */}
        <Route path="/camiones-con-rastras-lowboys/venta" element={<CamionesConRastrasLowboysVenta />} />
        <Route path="/camiones-con-rastras-lowboys/venta" element={<CamionesConRastrasLowboysRenta />} />

        {/* MAQUINARIA */}
        <Route path="/maquinaria/venta" element={<MaquinariaVenta />} />
        <Route path="/maquinaria/renta" element={<MaquinariaRenta />} />

        {/* ACCESORIOS */}
        <Route path="/accesorios" element={<Accesorios />} />

      </Routes>

      <Footer />
      <SocialBar />
    </div>
  );
}
