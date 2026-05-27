import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const photos = [
  { src: "/images/slider3.jpg", alt: "Operación de grúa en campo" },
  { src: "/images/grualiebherr10501.jpg", alt: "Liebherr LTM 1080 en proyecto" },
  { src: "/images/IMG_0419.PNG", alt: "Equipo pesado en operación" },
  { src: "/images/IMG_0420.PNG", alt: "Grúa telescópica en sitio" },
  { src: "/images/IMG_0423.PNG", alt: "Izaje industrial" },
  { src: "/images/gruacamion1.jpg", alt: "Transporte especializado" },
];

function PhotoCard({ src, alt, index, onClick }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onClick(src)}
      className="group relative overflow-hidden bg-surface-steel w-full"
      style={{ aspectRatio: index === 0 || index === 3 ? "4/3" : "1/1" }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-surface-base/0 group-hover:bg-surface-base/40 transition-colors duration-400" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 border border-ink-cream flex items-center justify-center">
          <ArrowUpRight size={16} className="text-ink-cream" />
        </div>
      </div>
    </motion.button>
  );
}

export default function GalleryTeaser() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="bg-surface-steel border-t border-surface-iron py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeader
              eyebrow="Nuestro Trabajo"
              headline="PROYECTOS EN CAMPO"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/galeria"
              className="font-heading font-bold text-sm uppercase tracking-[0.15em] text-brand-orange flex items-center gap-2 hover:gap-3 transition-all duration-300"
            >
              Ver Galería Completa <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Masonry-style grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-surface-iron"
        >
          {inView &&
            photos.map((photo, i) => (
              <PhotoCard
                key={photo.src}
                {...photo}
                index={i}
                onClick={setLightbox}
              />
            ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              src={lightbox}
              alt="Galería"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 w-10 h-10 border border-surface-iron flex items-center justify-center text-ink-fog hover:text-ink-cream transition-colors"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
