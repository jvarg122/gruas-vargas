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
      {/* FOOTER TOP */}
      <footer
        className="relative text-white py-20 px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/footer-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-green-900/85 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* LOGO */}
          <div>
            <h3 className="text-xl font-semibold tracking-wide uppercase mb-5">
              GRÚAS VARGAS
            </h3>
            <p className="text-base text-gray-200 leading-relaxed">
              Servicio profesional de grúas, rescate vehicular y transporte
              especializado a nivel nacional.
            </p>
          </div>

          {/* CONTACT */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold tracking-wide uppercase mb-5">
              Contacto
            </h3>

            <ul className="space-y-4 text-base text-gray-200">

              <li className="flex items-start gap-3 justify-center md:justify-start">
                <FaMapMarkerAlt className="text-green-400 text-sm mt-1" />
                <a
                  href="https://maps.app.goo.gl/uc9Lbed117kvXeZ26"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  Carretera Al Atlántico Km 137, Río Hondo Zacapa
                </a>
              </li>

              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaComment className="text-green-400 text-lg" />
                <a
                  href="https://wa.me/50258653835"
                  className="hover:text-white"
                  target="_blank"
                >
                  (+502) 5865-3835
                </a>
              </li>

              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaEnvelope className="text-green-400 text-sm" />
                <a
                  href="mailto:gruasvargaszacapa@yahoo.es"
                  className="hover:text-white"
                >
                  gruasvargaszacapa@yahoo.es
                </a>
              </li>

              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaPhoneAlt className="text-green-400 text-sm" />
                <a
                  href="tel:+50279340541"
                  className="hover:text-white"
                >
                  (+502) 7934-0541
                </a>
              </li>
            </ul>
          </div>

          {/* NAV */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold tracking-wide uppercase mb-5">
              Navegación
            </h3>

            <ul className="space-y-3 text-base text-gray-200">
              {[
                { name: "Inicio", href: "/" },
                { name: "Quiénes Somos", href: "/#quienes-somos" },
                { name: "Servicios", href: "/#servicios" },
                { name: "Contacto", href: "/#contacto" },
              ].map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-2 justify-center md:justify-start"
                >
                  <FaChevronUp className="rotate-90 text-green-400 text-xs" />
                  <a href={item.href} className="hover:text-white transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      {/* COPYRIGHT - 75px height, bigger text, proper space before JV */}
      <div
        className="bg-green-900 text-center text-gray-300"
        style={{ height: "75px", fontSize: "1rem", lineHeight: "75px" }}
      >
        Copyright © {new Date().getFullYear()} Gruas Vargas, powered by{' '}
        <span className="text-green-400 font-semibold">JV</span>
      </div>

      {/* SCROLL TO TOP */}
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
