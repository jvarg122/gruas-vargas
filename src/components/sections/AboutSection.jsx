import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const locations = ["Zacapa", "Izabal", "Petén"];

export default function AboutSection() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const inView = useInView(textRef, { once: true, amount: 0.25 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const ghostY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section ref={sectionRef} className="relative bg-surface-base overflow-hidden">

      {/* Ghost year — full-width background decoration */}
      <motion.div
        style={{ y: ghostY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-display text-ink-cream leading-none whitespace-nowrap"
          style={{
            fontSize: "clamp(12rem, 30vw, 28rem)",
            opacity: 0.025,
            letterSpacing: "-0.02em",
          }}
        >
          1990
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* Left: parallax image */}
        <div className="relative h-[480px] lg:h-auto overflow-hidden">
          <motion.div style={{ y: imgY }} className="absolute inset-[-12%]">
            <img
              src="/images/grualiebherr10501.jpg"
              alt="Grúas Vargas en operación"
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Gradient fades image into the right column on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-base hidden lg:block" />
          {/* Gradient fades image into next section on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-base lg:hidden" />

          {/* Overlay accent: orange vertical bar */}
          <div className="absolute top-12 bottom-12 left-0 w-[3px] bg-brand-orange opacity-60" />
        </div>

        {/* Right: text */}
        <div
          ref={textRef}
          className="relative flex flex-col justify-center px-8 md:px-12 lg:pl-16 lg:pr-8 py-20 md:py-28"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-semibold text-xs uppercase tracking-[0.28em] text-brand-orange mb-4"
          >
            {t("about.eyebrow")}
          </motion.p>

          {/* Large display headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <h2 className="font-display leading-none text-ink-cream" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}>
              {t("about.headline")}
            </h2>
            <h2
              className="font-display leading-none text-brand-orange"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", WebkitTextStroke: "1px #D4560F" }}
            >
              {t("about.year")}
            </h2>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-[2px] bg-brand-orange mb-8 origin-left"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 mb-8"
          >
            <p className="font-body text-base text-ink-fog leading-relaxed">{t("about.p1")}</p>
            <p className="font-body text-base text-ink-fog leading-relaxed">{t("about.p2")}</p>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-5 mb-10"
          >
            {locations.map((loc) => (
              <div key={loc} className="flex items-center gap-1.5">
                <MapPin size={12} className="text-brand-orange" />
                <span className="font-heading font-semibold text-xs uppercase tracking-[0.15em] text-ink-fog">
                  {loc}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Link
              to="/nosotros"
              className="font-heading font-bold text-sm uppercase tracking-[0.15em] border border-surface-iron hover:border-ink-cream/50 text-ink-cream px-8 py-4 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              {t("about.cta")}
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
