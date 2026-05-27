import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const timeline = [
  { year: "1990", event: "Fundación en Río Hondo, Km 137 Ruta al Atlántico, Zacapa." },
  { year: "1998", event: "Incorporación de los primeros equipos de grúa de 30 toneladas." },
  { year: "2004", event: "Expansión de operaciones hacia Morales, Izabal." },
  { year: "2012", event: "La flota supera los cinco equipos pesados en operación simultánea." },
  { year: "2016", event: "Incorporación de la Liebherr LTM 1080 de 80 toneladas." },
  { year: "2020", event: "Llegada de la Grove GMK5115L — grúa insignia de 115 toneladas." },
  { year: "2024", event: "Apertura de tercera base en Poptén, Petén. Cobertura nacional consolidada." },
];

const locations = [
  {
    name: "Sede Zacapa",
    address: "Km 137 Carretera al Atlántico CA-9",
    city: "Río Hondo, Zacapa",
    phone: "+502 7934-0541",
    img: "/images/slider1.jpg",
  },
  {
    name: "Sede Izabal",
    address: "Km 245 Carretera al Atlántico CA-9",
    city: "Morales, Izabal",
    phone: "+502 5865-3835",
    img: "/images/slider2.jpg",
  },
  {
    name: "Sede Petén",
    address: "Km 383 CA-13",
    city: "Poptén, Petén",
    phone: "+502 5865-3835",
    img: "/images/slider3.jpg",
  },
];

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TimelineItem({ year, event, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-6 items-start"
    >
      <div className="flex flex-col items-center shrink-0">
        <div className="w-3 h-3 bg-brand-orange mt-1" />
        <div className="w-px flex-1 bg-surface-iron mt-2" />
      </div>
      <div className="pb-10">
        <span className="font-mono text-xs text-brand-orange tracking-widest">{year}</span>
        <p className="font-body text-base text-ink-fog leading-relaxed mt-1 max-w-md">{event}</p>
      </div>
    </motion.div>
  );
}

export default function Nosotros() {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="bg-surface-base min-h-screen">

      {/* ── Hero ── */}
      <div ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.div style={{ y: heroImgY }} className="absolute inset-[-10%]">
          <img
            src="/images/slider3.jpg"
            alt="Grúas Vargas"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/50 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-base/60 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-semibold text-xs uppercase tracking-[0.28em] text-brand-orange mb-4"
            >
              {t("about.eyebrow")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-display leading-none text-ink-cream"
              style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
            >
              DESDE{" "}
              <span className="text-brand-orange">1990</span>
            </motion.h1>
          </div>
        </div>
      </div>

      {/* ── Story ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="font-heading font-semibold text-xs uppercase tracking-[0.25em] text-brand-orange mb-4">
              Nuestra Historia
            </p>
            <h2 className="font-display text-display text-ink-cream leading-none mb-8">
              MÁS DE 30 AÑOS<br />
              <span className="text-brand-orange">MOVIENDO GUATEMALA</span>
            </h2>
            <div className="space-y-4">
              <p className="font-body text-base text-ink-fog leading-relaxed">
                {t("about.p1")}
              </p>
              <p className="font-body text-base text-ink-fog leading-relaxed">
                {t("about.p2")}
              </p>
              <p className="font-body text-base text-ink-fog leading-relaxed">
                Desde proyectos de infraestructura hasta rescates de emergencia en carretera,
                Grúas Vargas ha estado presente en los momentos que más importan para Guatemala.
              </p>
            </div>
          </FadeUp>

          {/* Stats column */}
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 gap-px bg-surface-iron">
              {[
                { value: "30+", label: "Años de experiencia" },
                { value: "115T", label: "Capacidad máxima" },
                { value: "9+", label: "Unidades en flota" },
                { value: "3", label: "Ubicaciones" },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface-steel p-8 text-center">
                  <p className="font-display text-5xl text-brand-orange leading-none mb-2">{stat.value}</p>
                  <p className="font-heading font-semibold text-xs uppercase tracking-[0.15em] text-ink-fog">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-surface-steel border-t border-b border-surface-iron py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="mb-16">
            <p className="font-heading font-semibold text-xs uppercase tracking-[0.25em] text-brand-orange mb-3">
              Cronología
            </p>
            <h2 className="font-display text-display text-ink-cream leading-none">
              NUESTRA TRAYECTORIA
            </h2>
          </FadeUp>

          <div className="max-w-2xl">
            {timeline.map((item, i) => (
              <TimelineItem key={item.year} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="mb-16">
            <p className="font-heading font-semibold text-xs uppercase tracking-[0.25em] text-brand-orange mb-3">
              Propósito
            </p>
            <h2 className="font-display text-display text-ink-cream leading-none">
              MISIÓN Y VISIÓN
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-iron">
            <FadeUp className="bg-surface-steel p-10 md:p-14">
              <div className="w-8 h-[2px] bg-brand-orange mb-6" />
              <h3 className="font-display text-4xl text-ink-cream leading-none mb-6">MISIÓN</h3>
              <p className="font-body text-base text-ink-fog leading-relaxed">
                Brindar soluciones de izaje, transporte especializado y maquinaria pesada con los más
                altos estándares de seguridad y eficiencia, contribuyendo al desarrollo de los proyectos
                más importantes de Guatemala.
              </p>
            </FadeUp>
            <FadeUp delay={0.12} className="bg-surface-raised p-10 md:p-14">
              <div className="w-8 h-[2px] bg-brand-orange mb-6" />
              <h3 className="font-display text-4xl text-ink-cream leading-none mb-6">VISIÓN</h3>
              <p className="font-body text-base text-ink-fog leading-relaxed">
                Ser la empresa líder en servicios de izaje y transporte pesado en Centroamérica,
                reconocida por la calidad de su flota, la excelencia de sus operadores y la confianza
                que genera en cada proyecto.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section className="bg-surface-steel border-t border-surface-iron py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="mb-16">
            <p className="font-heading font-semibold text-xs uppercase tracking-[0.25em] text-brand-orange mb-3">
              Presencia
            </p>
            <h2 className="font-display text-display text-ink-cream leading-none">
              NUESTRAS SEDES
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface-iron">
            {locations.map((loc, i) => (
              <FadeUp key={loc.name} delay={i * 0.1}>
                <div className="bg-surface-steel group overflow-hidden">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={loc.img}
                      alt={loc.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-steel to-transparent" />
                  </div>
                  <div className="p-7">
                    <div className="w-6 h-[2px] bg-brand-orange mb-4" />
                    <h3 className="font-heading font-bold text-xl text-ink-cream tracking-wide mb-4">
                      {loc.name}
                    </h3>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2.5">
                        <MapPin size={13} className="text-brand-orange mt-0.5 shrink-0" />
                        <span className="font-body text-sm text-ink-fog leading-snug">
                          {loc.address}<br />{loc.city}
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Phone size={13} className="text-brand-orange shrink-0" />
                        <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="font-body text-sm text-ink-fog hover:text-ink-cream transition-colors">
                          {loc.phone}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
