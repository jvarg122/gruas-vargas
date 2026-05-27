import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUp, ArrowUpRight } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";

const serviceLinks = [
  { label: "Renta de Grúas", to: "/gruas/renta" },
  { label: "Venta de Grúas", to: "/gruas/venta" },
  { label: "Montacargas", to: "/montacargas/renta" },
  { label: "Maquinaria Pesada", to: "/maquinaria/renta" },
  { label: "Camiones / Lowboys", to: "/camiones/renta" },
  { label: "Accesorios", to: "/accesorios" },
];

const companyLinks = [
  { label: "Nosotros", to: "/nosotros" },
  { label: "Galería", to: "/galeria" },
  { label: "Contacto", to: "/contacto" },
];

const locations = [
  "Km 137 CA-9 Río Hondo, Zacapa",
  "Km 245 CA-9 Morales, Izabal",
  "Km 383 CA-13 Poptén, Petén",
];

const socialLinks = [
  { icon: FaWhatsapp, href: "https://wa.me/50258653835", label: "WhatsApp" },
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaTiktok, href: "#", label: "TikTok" },
];

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="font-body text-sm text-ink-fog hover:text-ink-cream transition-colors duration-200 flex items-center gap-2 group"
    >
      <span className="text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs leading-none">
        ›
      </span>
      {children}
    </Link>
  );
}

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="bg-surface-steel border-t border-surface-iron">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Col 1: Brand */}
            <div className="flex flex-col gap-6 lg:col-span-1">
              <div>
                <p className="font-heading font-bold text-xs text-brand-orange uppercase tracking-[0.2em] mb-5">
                  Grúas Vargas S.A.
                </p>
                <Link to="/" className="flex items-center gap-3">
                  <img
                    src="/images/logo.png"
                    alt="Grúas Vargas"
                    className="h-10 w-auto"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                  <span className="font-display text-2xl text-ink-cream tracking-wider leading-none">
                    GRÚAS <span className="text-brand-orange">VARGAS</span>
                  </span>
                </Link>
              </div>

              <p className="font-body text-sm text-ink-fog leading-relaxed">
                Soluciones de izaje, transporte especializado y maquinaria pesada en Guatemala desde 1990.
              </p>

              <div className="flex gap-2.5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 border border-surface-iron flex items-center justify-center text-ink-fog hover:text-ink-cream hover:border-ink-fog transition-all duration-200"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Services */}
            <div>
              <p className="font-heading font-bold text-xs text-brand-orange uppercase tracking-[0.2em] mb-5">
                Servicios
              </p>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.to}>
                    <FooterLink to={link.to}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <p className="font-heading font-bold text-xs text-brand-orange uppercase tracking-[0.2em] mb-5">
                Empresa
              </p>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.to}>
                    <FooterLink to={link.to}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  to="/contacto"
                  className="font-heading font-bold text-xs uppercase tracking-[0.15em] bg-brand-orange hover:bg-brand-orange-warm text-ink-cream px-5 py-3 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  Solicitar Cotización <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>

            {/* Col 4: Contact info */}
            <div>
              <p className="font-heading font-bold text-xs text-brand-orange uppercase tracking-[0.2em] mb-5">
                Contacto
              </p>
              <ul className="space-y-4">
                {locations.map((loc) => (
                  <li key={loc} className="flex items-start gap-2.5">
                    <MapPin size={13} className="text-brand-orange mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-ink-fog leading-snug">{loc}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2.5 pt-1">
                  <Phone size={13} className="text-brand-orange shrink-0" />
                  <a
                    href="tel:+50258653835"
                    className="font-body text-sm text-ink-fog hover:text-ink-cream transition-colors duration-200"
                  >
                    (+502) 5865-3835
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <FaWhatsapp size={13} className="text-brand-orange shrink-0" />
                  <a
                    href="https://wa.me/50258653835"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-ink-fog hover:text-ink-cream transition-colors duration-200"
                  >
                    (+502) 5865-3835
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={13} className="text-brand-orange shrink-0" />
                  <a
                    href="mailto:gruasvargaszacapa@yahoo.es"
                    className="font-body text-sm text-ink-fog hover:text-ink-cream transition-colors duration-200 break-all"
                  >
                    gruasvargaszacapa@yahoo.es
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-surface-iron">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="font-body text-xs text-ink-ash uppercase tracking-[0.12em]">
              © {new Date().getFullYear()} Grúas Vargas S.A. — Todos los derechos reservados.
            </p>
            <p className="font-body text-xs text-ink-ash">
              Diseñado por{" "}
              <a
                href="#"
                className="text-brand-orange hover:text-brand-orange-warm transition-colors duration-200 font-medium"
              >
                JV — Josue Vargas
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 w-10 h-10 bg-surface-steel border border-surface-iron hover:border-brand-orange text-ink-fog hover:text-brand-orange flex items-center justify-center transition-all duration-300 z-40 shadow-lg"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </>
  );
}
