import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/home/Home";
import VentaGruas from "./app/gruas/venta/VentaGruas";
import RentaGruas from "./app/gruas/renta/RentaGruas";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        {/* GRUAS */}
        <Route path="/gruas/venta" element={<VentaGruas />} />
        <Route path="/gruas/renta" element={<RentaGruas />} />

        {/* Add the rest here later */}
      </Routes>
    </BrowserRouter>
  );
}
