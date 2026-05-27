import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "50258653835";

function buildWhatsAppLink(itemName) {
  const msg = encodeURIComponent(
    `Hola, me gustaría obtener información sobre: ${itemName}.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export default function EquipmentCard({ item, index }) {
  const [imgIndex, setImgIndex] = useState(0);
  const images = item.images ?? [];

  const prev = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i + 1) % images.length);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-surface-steel flex flex-col overflow-hidden"
    >
      {/* Image area */}
      <div className="relative h-60 md:h-64 overflow-hidden bg-surface-iron">
        <AnimatePresence mode="wait">
          <motion.img
            key={imgIndex}
            src={images[imgIndex] ?? "/images/service-bg.jpg"}
            alt={item.name}
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
          />
        </AnimatePresence>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-steel/80 to-transparent" />

        {/* Image nav — only shown when multiple images exist */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-surface-base/70 hover:bg-surface-base flex items-center justify-center text-ink-cream transition-colors duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente imagen"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-surface-base/70 hover:bg-surface-base flex items-center justify-center text-ink-cream transition-colors duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={16} />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                  className={`w-1.5 h-1.5 transition-all duration-200 ${
                    i === imgIndex ? "bg-brand-orange w-3" : "bg-ink-fog/50"
                  }`}
                  aria-label={`Imagen ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Capacity badge */}
        {item.capacity && item.capacity !== "—" && (
          <div className="absolute top-4 right-4 bg-brand-orange px-2.5 py-1">
            <span className="font-mono text-xs font-bold text-ink-cream tracking-widest">
              {item.capacity}
            </span>
          </div>
        )}

        {/* Placeholder badge */}
        {item.placeholder && (
          <div className="absolute top-4 left-4 bg-surface-iron/80 px-2.5 py-1 border border-surface-iron">
            <span className="font-heading font-semibold text-xs uppercase tracking-widest text-ink-fog">
              Próximamente
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <p className="font-heading font-semibold text-xs uppercase tracking-[0.18em] text-brand-orange mb-1">
          {item.type}
        </p>
        <h3 className="font-heading font-bold text-xl text-ink-cream tracking-wide mb-2 leading-tight">
          {item.name}
        </h3>
        <p className="font-body text-sm text-ink-fog leading-relaxed flex-1 mb-5">
          {item.desc}
        </p>

        {/* CTA row */}
        <div className="flex gap-2 pt-4 border-t border-surface-iron">
          <a
            href={buildWhatsAppLink(item.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 font-heading font-bold text-xs uppercase tracking-[0.12em] bg-brand-orange hover:bg-brand-orange-warm text-ink-cream py-2.5 px-4 transition-colors duration-300 flex items-center justify-center gap-1.5"
          >
            <MessageCircle size={13} />
            Consultar
          </a>
          <button className="w-10 h-10 border border-surface-iron hover:border-ink-fog flex items-center justify-center text-ink-fog hover:text-ink-cream transition-all duration-200">
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
