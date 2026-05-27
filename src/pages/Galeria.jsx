import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const allPhotos = [
  { src: "/images/slider3.jpg", category: "proyectos", alt: "Operación de grúa en campo" },
  { src: "/images/grualiebherr10501.jpg", category: "gruas", alt: "Liebherr LTM 1050 en proyecto" },
  { src: "/images/grualiebherr10503.jpg", category: "gruas", alt: "Liebherr LTM 1050" },
  { src: "/images/gruagrove1.jpg", category: "gruas", alt: "Grove GMK5115L" },
  { src: "/images/grualinkbelt1.jpg", category: "gruas", alt: "Link-Belt HTC 855" },
  { src: "/images/gruainternacional1.jpg", category: "gruas", alt: "Grúa Internacional 36T" },
  { src: "/images/IMG_0419.PNG", category: "proyectos", alt: "Proyecto en campo" },
  { src: "/images/IMG_0420.PNG", category: "proyectos", alt: "Operación de izaje" },
  { src: "/images/IMG_0421.PNG", category: "proyectos", alt: "Proyecto industrial" },
  { src: "/images/IMG_0423.PNG", category: "proyectos", alt: "Equipo en sitio" },
  { src: "/images/IMG_0424.PNG", category: "proyectos", alt: "Maniobra especializada" },
  { src: "/images/gruacamion1.jpg", category: "transporte", alt: "Camión con rastra" },
  { src: "/images/gruacamion4.jpg", category: "transporte", alt: "Transporte especializado" },
  { src: "/images/grualiebherr2.jpg", category: "gruas", alt: "Liebherr LTM 1080" },
  { src: "/images/about4.jpg", category: "proyectos", alt: "Operación en campo" },
  { src: "/images/about5.jpg", category: "proyectos", alt: "Equipo pesado" },
  { src: "/images/slider1.jpg", category: "proyectos", alt: "Proyecto de construcción" },
  { src: "/images/slider2.jpg", category: "proyectos", alt: "Elevación industrial" },
];

const categories = [
  { key: "all", label: "Todo" },
  { key: "gruas", label: "Grúas" },
  { key: "transporte", label: "Transporte" },
  { key: "proyectos", label: "Proyectos" },
];

function PhotoTile({ photo, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: (index % 6) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onClick(index)}
      className="group relative overflow-hidden bg-surface-iron w-full aspect-square focus:outline-none"
      aria-label={`Ver ${photo.alt}`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-surface-base/0 group-hover:bg-surface-base/45 transition-colors duration-350" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ZoomIn size={22} className="text-ink-cream" strokeWidth={1.5} />
      </div>
    </motion.button>
  );
}

export default function Galeria() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeFilter === "all"
    ? allPhotos
    : allPhotos.filter((p) => p.category === activeFilter);

  const openLightbox = useCallback((index) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length), [filtered.length]);
  const next = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % filtered.length), [filtered.length]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") closeLightbox();
  }, [prev, next, closeLightbox]);

  return (
    <div className="bg-surface-base min-h-screen" onKeyDown={handleKeyDown} tabIndex={-1}>

      {/* ── Hero ── */}
      <div className="relative h-[45vh] min-h-[320px] overflow-hidden">
        <img
          src="/images/grualiebherr10501.jpg"
          alt="Galería"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/50 to-black/40" />

        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-semibold text-xs uppercase tracking-[0.28em] text-brand-orange mb-3"
            >
              Nuestro Trabajo
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-display text-ink-cream leading-none"
            >
              GALERÍA
            </motion.h1>
          </div>
        </div>
      </div>

      {/* ── Filter bar ── */}
      <div className="sticky top-20 md:top-24 z-30 bg-surface-steel/95 backdrop-blur-sm border-b border-surface-iron">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center gap-1 h-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`font-heading font-bold text-xs uppercase tracking-[0.15em] px-5 py-2 transition-all duration-200 ${
                activeFilter === cat.key
                  ? "bg-brand-orange text-ink-cream"
                  : "text-ink-fog hover:text-ink-cream"
              }`}
            >
              {cat.label}
            </button>
          ))}
          <span className="ml-auto font-heading text-xs text-ink-ash uppercase tracking-widest">
            {filtered.length} fotos
          </span>
        </div>
      </div>

      {/* ── Photo grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-surface-iron"
          >
            {filtered.map((photo, i) => (
              <PhotoTile key={photo.src} photo={photo} index={i} onClick={openLightbox} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                className="max-w-full max-h-[85vh] object-contain"
              />
              <p className="mt-3 font-heading font-semibold text-xs uppercase tracking-[0.15em] text-ink-fog text-center">
                {filtered[lightboxIndex].alt}
              </p>
            </motion.div>

            {/* Controls */}
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-5 right-5 w-10 h-10 border border-surface-iron hover:border-ink-fog flex items-center justify-center text-ink-fog hover:text-ink-cream transition-colors"
            >
              <X size={18} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 border border-surface-iron hover:border-ink-fog flex items-center justify-center text-ink-fog hover:text-ink-cream transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 border border-surface-iron hover:border-ink-fog flex items-center justify-center text-ink-fog hover:text-ink-cream transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-xs text-ink-ash tracking-widest">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
