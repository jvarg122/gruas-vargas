import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const equipment = [
  {
    name: "Grove GMK5115L",
    capacity: "115T",
    type: "Grúa Todo Terreno",
    img: "/images/gruagrove1.jpg",
    to: "/gruas/renta",
  },
  {
    name: "Liebherr LTM 1080",
    capacity: "80T",
    type: "Grúa Telescópica",
    img: "/images/grualiebherr10501.jpg",
    to: "/gruas/renta",
  },
  {
    name: "Link-Belt HTT-8690",
    capacity: "90T",
    type: "Grúa Hidráulica",
    img: "/images/grualinkbelt1.jpg",
    to: "/gruas/renta",
  },
];

function EquipmentCard({ name, capacity, type, img, to, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden bg-surface-steel"
    >
      {/* Image */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-steel/90 via-surface-steel/20 to-transparent" />

        {/* Capacity badge */}
        <div className="absolute top-5 right-5 bg-brand-orange px-3 py-1.5">
          <span className="font-mono text-xs font-bold text-ink-cream tracking-widest">
            {capacity}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex items-end justify-between gap-4">
        <div>
          <p className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-ink-fog mb-1">
            {type}
          </p>
          <h3 className="font-heading font-bold text-2xl text-ink-cream tracking-wide">
            {name}
          </h3>
        </div>
        <Link
          to={to}
          className="shrink-0 w-11 h-11 border border-surface-iron group-hover:border-brand-orange group-hover:bg-brand-orange flex items-center justify-center transition-all duration-300"
        >
          <ArrowUpRight size={16} className="text-ink-fog group-hover:text-ink-cream transition-colors duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function FeaturedEquipment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="bg-surface-base py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Flota Destacada"
            headline="EQUIPO PRINCIPAL"
          />
          <Link
            to="/gruas/renta"
            className="font-heading font-bold text-sm uppercase tracking-[0.15em] text-brand-orange flex items-center gap-2 hover:gap-3 transition-all duration-300 shrink-0"
          >
            Ver Catálogo Completo <ArrowUpRight size={14} />
          </Link>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface-iron">
          {inView &&
            equipment.map((item, i) => (
              <EquipmentCard key={item.name} {...item} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
}
