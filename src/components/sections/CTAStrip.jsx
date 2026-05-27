import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WHATSAPP_NUMBER = "50258653835";

export default function CTAStrip() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  const whatsappMsg = encodeURIComponent(
    t("cta.whatsapp") === "WhatsApp"
      ? "Hola, me gustaría solicitar información sobre sus servicios de grúas y equipos."
      : "Hello, I'd like to request information about your crane and equipment services."
  );

  return (
    <section
      ref={ref}
      className="relative bg-surface-base border-t border-surface-iron py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle diagonal line texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #F0EBE3 0px, #F0EBE3 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* Ghost headline decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-display text-ink-cream leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(8rem, 20vw, 20rem)", opacity: 0.018, letterSpacing: "-0.02em" }}
        >
          {t("cta.eyebrow").toUpperCase()}
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-semibold text-xs uppercase tracking-[0.3em] text-brand-orange mb-5"
        >
          {t("cta.eyebrow")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display text-ink-cream leading-none mb-6 max-w-4xl mx-auto"
        >
          {t("cta.headline")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-base text-ink-fog max-w-md mx-auto leading-relaxed mb-12"
        >
          {t("cta.subtext")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading font-bold text-sm uppercase tracking-[0.15em] bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 transition-colors duration-300 flex items-center gap-2.5"
          >
            <FaWhatsapp size={17} />
            {t("cta.whatsapp")}
          </a>
          <Link
            to="/contacto"
            className="font-heading font-bold text-sm uppercase tracking-[0.15em] border border-ink-cream/30 hover:border-ink-cream text-ink-cream px-8 py-4 transition-colors duration-300 flex items-center gap-2"
          >
            <Mail size={14} />
            {t("cta.email")}
          </Link>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 h-px bg-surface-iron origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-6 font-heading text-xs uppercase tracking-[0.18em] text-ink-ash"
        >
          PBX (+502) 5865-3835 &nbsp;·&nbsp; TEL (+502) 7934-0541 &nbsp;·&nbsp; gruasvargaszacapa@yahoo.es
        </motion.p>
      </div>
    </section>
  );
}
