import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const services = [
  {
    title: "Renta de Grúas",
    desc: "Flota de grúas telescópicas y de celosía de hasta 115 toneladas para todo tipo de proyecto.",
    img: "/images/gruagrove1.jpg",
    to: "/gruas/renta",
  },
  {
    title: "Venta de Equipo",
    desc: "Adquiere maquinaria pesada certificada con soporte técnico y financiamiento disponible.",
    img: "/images/grualiebherr2.jpg",
    to: "/gruas/venta",
  },
  {
    title: "Montacargas",
    desc: "Soluciones de elevación para almacenes, puertos e industria con operadores certificados.",
    img: "/images/IMG_0419.PNG",
    to: "/montacargas/renta",
  },
  {
    title: "Maquinaria Pesada",
    desc: "Excavadoras, compactadoras y equipo de construcción disponible para renta y venta.",
    img: "/images/IMG_0421.PNG",
    to: "/maquinaria/renta",
  },
  {
    title: "Transporte Especializado",
    desc: "Camiones con rastras y lowboys para traslado de carga sobredimensionada a nivel nacional.",
    img: "/images/gruacamion1.jpg",
    to: "/camiones/renta",
  },
  {
    title: "Asistencia Vial",
    desc: "Servicio de rescate y auxilio vial disponible las 24 horas en toda la ruta al Atlántico.",
    img: "/images/gruacamion4.jpg",
    to: "/camiones/renta",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function ServiceCard({ title, desc, img, to }) {
  return (
    <motion.div variants={cardVariants} className="group relative overflow-hidden bg-surface-steel">
      {/* Image */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-steel via-surface-steel/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl text-ink-cream mb-2 tracking-wide">
          {title}
        </h3>
        <p className="font-body text-sm text-ink-fog leading-relaxed mb-5">{desc}</p>
        <Link
          to={to}
          className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-brand-orange flex items-center gap-1.5 group/link"
        >
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
            Ver Más
          </span>
          <ArrowUpRight
            size={13}
            className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </Link>
      </div>

      {/* Orange bottom accent — reveals on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out-expo origin-left" />
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-surface-base py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Lo que hacemos"
            headline="NUESTROS SERVICIOS"
            subtext="Equipos certificados, operadores especializados y cobertura en toda Guatemala."
            className="mb-14"
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-surface-iron"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
