import { useEffect, useState } from "react";
import { FaChevronUp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaComment } from "react-icons/fa";


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
      <footer className="bg-[#0d1438] text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              GRÚAS VARGAS
            </h3>
            <p className="text-base leading-relaxed">
              Servicio profesional de grúas, rescate vehicular y transporte
              especializado a nivel nacional.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white text-xl font-semibold mb-4">Contacto</h3>

            <ul className="space-y-4 text-base">

              <li className="flex items-start gap-3 justify-center md:justify-start">
                <FaMapMarkerAlt className="text-white text-sm mt-1" />
                <a
                  href="https://maps.app.goo.gl/uc9Lbed117kvXeZ26"
                  target="_blank"
                  className="text-green-500 hover:text-white hover:underline transition"
                >
                  Carretera Al Atlántico Km 137, Río Hondo Zacapa
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaComment className="text-white text-lg" />
                <a
                  href="https://wa.me/50258653835"
                  className="text-green-400 hover:underline"
                  target="_blank"
                >
                  (+502) 5865-3835
                </a>
              </li>

              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaEnvelope className="text-white text-sm" />
                <a
                  href="mailto:gruasvargaszacapa@yahoo.es"
                  className="text-green-500 hover:text-white hover:underline transition"
                >
                  gruasvargaszacapa@yahoo.es
                </a>
              </li>
             
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaPhoneAlt className="text-white text-sm" />
                <a
                  href="tel:+50279340541"
                  className="text-green-500 hover:text-white hover:underline transition"
                >
                  (+502) 7934-0541
                </a>
              </li>

            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white text-xl font-semibold mb-4">Navegación</h3>

            <ul className="space-y-3 text-base">
              {[
                { name: "Inicio", href: "/" },
                { name: "Quiénes Somos", href: "/#quienes-somos" },
                { name: "Servicios", href: "/#servicios" },
                { name: "Contacto", href: "/#contacto" },
              ].map((item) => (
                <li key={item.name} className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="border-r border-gray-400 border-t w-2 h-2 rotate-45"></span>
                  <a
                    href={item.href}
                    className="hover:text-white transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="text-center text-sm text-gray-400 border-t border-gray-700 mt-12 pt-5">
          Copyright © {new Date().getFullYear()} Gruas Vargas,
          powered by <span className="text-green-500 font-semibold">JV</span>
        </div>
      </footer>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-700 text-white p-4 rounded-full shadow-xl z-50 hover:bg-green-800 transition"
        >
          <FaChevronUp />
        </button>
      )}
    </>
  );
}
