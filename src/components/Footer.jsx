import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronUp, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-green-600 text-gray-100 font-[Oswald] relative">

        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-6 space-y-4">

          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            <div>
              <h2 className="text-2xl md:text-2xl font-extrabold text-white uppercase">GRÚAS VARGAS</h2>
              <p className="text-gray-100 mt-1 text-sm md:text-sm">
                Servicio profesional de grúas, rescate vehicular y transporte especializado a nivel nacional.
              </p>
            </div>
            <div className="flex gap-2 md:gap-3">
              <a
                href="https://wa.me/50258653835"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-orange-400 hover:bg-orange-500 transition-transform hover:scale-105 rounded flex items-center justify-center"
              >
                <FaWhatsapp size={18} className="text-white" />
              </a>
              <a
                href="tel:+50258653835"
                className="p-2 bg-orange-400 hover:bg-orange-500 transition-transform hover:scale-105 rounded flex items-center justify-center"
              >
                <FaPhone size={18} className="text-white" />
              </a>
              <a
                href="mailto:gruasvargaszacapa@yahoo.es"
                className="p-2 bg-orange-400 hover:bg-orange-500 transition-transform hover:scale-105 rounded flex items-center justify-center"
              >
                <FaEnvelope size={18} className="text-white" />
              </a>
            </div>
          </div>

      
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 items-start">

            <div className="flex-1 text-sm md:text-sm">
              <h3 className="text-white font-bold mb-1 uppercase">Contacto</h3>
              <ul className="space-y-1 text-gray-100">
                <li className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-orange-400" /> Carretera Al Atlántico Km 137, Río Hondo Zacapa
                </li>
                <li className="flex items-center gap-1">
                  <FaWhatsapp size={25} className="text-orange-400" /> PBX: (+502) 5865-3835
                </li>
                <li className="flex items-center gap-1">
                  <FaPhone className="text-orange-400" /> TEL: (+502) 7934-0541
                </li>
                <li className="flex items-center gap-1">
                  <FaEnvelope className="text-orange-400" /> gruasvargaszacapa@yahoo.es
                </li>
              </ul>
            </div>

            <div className="flex-1 text-sm md:text-sm">
              <h3 className="text-white font-bold mb-1 uppercase">Navegación</h3>
              <ul className="space-y-1">
                {[
                  { name: "Inicio", href: "/" },
                  { name: "Quiénes Somos", href: "/#quienes-somos" },
                  { name: "Servicios", href: "/#servicios" },
                  { name: "Contacto", href: "/#contacto" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="flex items-center gap-1 text-gray-100 hover:text-orange-400 transition-colors duration-300 uppercase text-sm md:text-sm"
                    >
                      <FaChevronUp className="rotate-90 text-orange-400" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="w-full border-t border-white pt-2 text-center text-gray-100 text-xs md:text-sm uppercase">
            © {new Date().getFullYear()} GRÚAS VARGAS. Todos los derechos reservados,{" "}
            <span>
                Powered by <span className="text-orange-400 font-bold">JV</span>
            </span>
          </div>
        </div>
      </footer>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-400 p-3 rounded shadow-lg hover:bg-orange-500 transition-transform hover:scale-110 z-50 flex items-center justify-center"
        >
          <FaArrowUp size={20} className="text-white" />
        </button>
      )}
    </>
  );
}
