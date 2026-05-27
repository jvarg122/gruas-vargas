import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();
  const megaRef = useRef(null);

  const equipmentMenu = [
    {
      category: "GRÚAS",
      links: [
        { label: t("nav.cranes_rent"), to: "/gruas/renta" },
        { label: t("nav.cranes_sale"), to: "/gruas/venta" },
      ],
    },
    {
      category: "MONTACARGAS",
      links: [
        { label: t("nav.forklifts_rent"), to: "/montacargas/renta" },
        { label: t("nav.forklifts_sale"), to: "/montacargas/venta" },
      ],
    },
    {
      category: "MAQUINARIA",
      links: [
        { label: t("nav.machinery_rent"), to: "/maquinaria/renta" },
        { label: t("nav.machinery_sale"), to: "/maquinaria/venta" },
      ],
    },
    {
      category: "CAMIONES",
      links: [
        { label: t("nav.trucks_rent"), to: "/camiones/renta" },
        { label: t("nav.trucks_sale"), to: "/camiones/venta" },
      ],
    },
    {
      category: "ACCESORIOS",
      links: [{ label: t("nav.accessories"), to: "/accesorios" }],
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isES = i18n.language?.startsWith("es");
  const toggleLang = () => i18n.changeLanguage(isES ? "en" : "es");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-cinematic ${
          scrolled
            ? "bg-surface-steel/98 backdrop-blur-md border-b border-surface-iron"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20 md:h-24">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/images/logo.png"
              alt="Grúas Vargas"
              className="h-14 md:h-16 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="font-display text-2xl md:text-3xl text-ink-cream tracking-wider leading-none">
              GRÚAS <span className="text-brand-orange">VARGAS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              to="/"
              className="font-heading font-semibold text-base uppercase tracking-[0.1em] text-ink-cream/80 hover:text-ink-cream transition-colors duration-200"
            >
              {t("nav.home")}
            </Link>

            {/* Equipos megamenu */}
            <div className="relative" ref={megaRef}>
              <button
                onClick={() => setMegaOpen((p) => !p)}
                className="flex items-center gap-1.5 font-heading font-semibold text-base uppercase tracking-[0.1em] text-ink-cream/80 hover:text-ink-cream transition-colors duration-200"
              >
                {t("nav.equipment")}
                <ChevronDown size={13} className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[580px] bg-surface-steel border border-surface-iron shadow-2xl"
                  >
                    <div className="h-[2px] bg-brand-orange opacity-70" />
                    <div className="p-7 grid grid-cols-3 gap-7">
                      {equipmentMenu.map((group) => (
                        <div key={group.category}>
                          <p className="font-heading font-bold text-xs text-brand-orange uppercase tracking-[0.2em] mb-3">
                            {group.category}
                          </p>
                          <ul className="space-y-2">
                            {group.links.map((link) => (
                              <li key={link.to}>
                                <Link
                                  to={link.to}
                                  onClick={() => setMegaOpen(false)}
                                  className="font-body text-sm text-ink-fog hover:text-ink-cream transition-colors duration-200 flex items-center gap-2 group/link"
                                >
                                  <span className="w-0 group-hover/link:w-2.5 overflow-hidden transition-all duration-200 text-brand-orange text-xs">›</span>
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {[
              { key: "nav.gallery", to: "/galeria" },
              { key: "nav.about", to: "/nosotros" },
              { key: "nav.contact", to: "/contacto" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-heading font-semibold text-base uppercase tracking-[0.1em] text-ink-cream/80 hover:text-ink-cream transition-colors duration-200"
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              onClick={toggleLang}
              className="font-heading font-bold text-sm uppercase tracking-[0.15em] text-ink-cream/60 hover:text-ink-cream transition-colors duration-200"
            >
              <span className={isES ? "text-ink-cream" : "text-ink-cream/40"}>ES</span>
              <span className="mx-1.5 text-surface-iron">|</span>
              <span className={!isES ? "text-ink-cream" : "text-ink-cream/40"}>EN</span>
            </button>
            <Link
              to="/contacto"
              className="font-heading font-bold text-sm uppercase tracking-[0.15em] bg-brand-orange hover:bg-brand-orange-warm text-ink-cream px-6 py-3 transition-colors duration-300 flex items-center gap-2"
            >
              {t("nav.quote")} <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="lg:hidden text-ink-cream p-1.5 z-50"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-surface-steel flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col px-8 pt-28 pb-12">
              <Link to="/" className="font-display text-5xl text-ink-cream py-4 border-b border-surface-iron block">
                {t("nav.home")}
              </Link>
              {equipmentMenu.map((group) => (
                <div key={group.category} className="border-b border-surface-iron py-4">
                  <p className="font-heading font-bold text-xs text-brand-orange uppercase tracking-[0.2em] mb-3">
                    {group.category}
                  </p>
                  <div className="flex flex-col gap-3">
                    {group.links.map((link) => (
                      <Link key={link.to} to={link.to} className="font-display text-3xl text-ink-fog">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              {[
                { key: "nav.gallery", to: "/galeria" },
                { key: "nav.about", to: "/nosotros" },
                { key: "nav.contact", to: "/contacto" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="font-display text-5xl text-ink-cream py-4 border-b border-surface-iron block">
                  {t(link.key)}
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-between px-8 py-6 mt-auto border-t border-surface-iron">
              <button onClick={toggleLang} className="font-heading font-bold text-sm uppercase tracking-[0.15em] text-ink-fog">
                <span className={isES ? "text-ink-cream" : "text-ink-cream/40"}>ES</span>
                <span className="mx-1.5">|</span>
                <span className={!isES ? "text-ink-cream" : "text-ink-cream/40"}>EN</span>
              </button>
              <Link to="/contacto" className="font-heading font-bold text-xs uppercase tracking-[0.15em] bg-brand-orange text-ink-cream px-6 py-3 flex items-center gap-2">
                {t("nav.quote_full")} <ArrowUpRight size={12} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
