import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function HeroSection() {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">

      {/* Background video / image */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/slider3.jpg"
        >
          <source src="/videos/hero.MP4" type="video/mp4" />
        </video>

        {/* Overlays — bottom to top fade keeps site seamless */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/40 to-transparent" />
        {/* Left column darkens for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-base/75 via-surface-base/20 to-transparent" />
        {/* Top strip keeps transparent navbar readable */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content — vertically centered, offset down slightly for cinematic balance */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-16 md:pt-20">

          <motion.p
            {...fadeUp(0.15)}
            className="font-heading font-semibold text-xs uppercase tracking-[0.3em] text-brand-orange mb-5"
          >
            {t("hero.eyebrow")}
          </motion.p>

          <motion.h1
            {...fadeUp(0.3)}
            className="font-display leading-none text-ink-cream mb-7"
            style={{ fontSize: "clamp(4.5rem, 11vw, 11rem)" }}
          >
            {t("hero.line1")}
            <br />
            <span className="text-brand-orange">{t("hero.line2")}</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.48)}
            className="font-body text-base md:text-lg text-ink-fog/90 max-w-lg leading-relaxed mb-10"
          >
            {t("hero.subtext")}
          </motion.p>

          <motion.div {...fadeUp(0.62)} className="flex flex-wrap gap-4">
            <Link
              to="/contacto"
              className="font-heading font-bold text-sm uppercase tracking-[0.15em] bg-brand-orange hover:bg-brand-orange-warm text-ink-cream px-8 py-4 transition-colors duration-300 flex items-center gap-2"
            >
              {t("hero.cta_primary")} <ArrowUpRight size={14} />
            </Link>
            <Link
              to="/gruas/renta"
              className="font-heading font-bold text-sm uppercase tracking-[0.15em] border border-ink-cream/35 hover:border-ink-cream text-ink-cream px-8 py-4 transition-colors duration-300"
            >
              {t("hero.cta_secondary")}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={22} className="text-ink-fog/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
