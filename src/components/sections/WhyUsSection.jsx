import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Users, Clock, MapPin } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const features = [
  {
    icon: ShieldCheck,
    title: "Flota Certificada",
    desc: "Todas las unidades con mantenimiento preventivo, certificaciones vigentes y seguros completos.",
  },
  {
    icon: Users,
    title: "Operadores Especializados",
    desc: "Personal con años de experiencia en izaje, certificado para operar en proyectos industriales y de construcción.",
  },
  {
    icon: Clock,
    title: "Respuesta 24 / 7",
    desc: "Disponibles a cualquier hora del día para emergencias, rescates viales y proyectos con cronograma ajustado.",
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    desc: "Tres bases estratégicas en Zacapa, Izabal y Petén para cubrir toda la Ruta al Atlántico y el oriente del país.",
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-surface-base py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Por qué elegirnos"
            headline="CONFIANZA EN CADA PROYECTO"
            subtext="Tres décadas de trabajo en campo nos respaldan."
            className="mb-16"
          />
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-surface-iron">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-surface-steel p-8 group hover:bg-surface-raised transition-colors duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-surface-iron group-hover:border-brand-orange mb-6 transition-colors duration-300">
                  <Icon size={18} className="text-brand-orange" />
                </div>
                <h3 className="font-heading font-bold text-lg text-ink-cream tracking-wide mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-ink-fog leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
