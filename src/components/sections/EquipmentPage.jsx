import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import EquipmentCard from "../ui/EquipmentCard";

const WHATSAPP_NUMBER = "50258653835";

/**
 * Shared layout for all equipment category pages.
 *
 * Props:
 *   category       — display name e.g. "GRÚAS"
 *   heroImage      — path to hero background image
 *   rentaItems     — array of equipment objects for the Renta tab
 *   ventaItems     — array of equipment objects for the Venta tab (can be [])
 *   activeTab      — "renta" | "venta"
 *   rentaPath      — route path for the Renta tab link
 *   ventaPath      — route path for the Venta tab link
 *   breadcrumb     — e.g. "Grúas"
 */
export default function EquipmentPage({
  category,
  heroImage,
  rentaItems = [],
  ventaItems = [],
  activeTab = "renta",
  rentaPath,
  ventaPath,
  breadcrumb,
}) {
  const { t } = useTranslation();
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.05 });

  const items = activeTab === "renta" ? rentaItems : ventaItems;
  const hasVenta = ventaPath && ventaItems.length > 0;
  const hasRenta = rentaPath && rentaItems.length > 0;

  const whatsappMsg = encodeURIComponent(
    `Hola, me gustaría obtener información sobre: ${category}.`
  );

  return (
    <div className="bg-surface-base min-h-screen">

      {/* Page hero — 50vh */}
      <div className="relative h-[52vh] min-h-[380px] overflow-hidden">
        <img
          src={heroImage}
          alt={category}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/50 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-base/60 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-0 left-0 right-0 pt-28 md:pt-32 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 font-heading font-semibold text-xs uppercase tracking-[0.2em] text-ink-fog">
              <Link to="/" className="hover:text-ink-cream transition-colors duration-200">
                Inicio
              </Link>
              <span className="text-surface-iron">›</span>
              <span className="text-brand-orange">{breadcrumb}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 pb-10 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="font-heading font-semibold text-xs uppercase tracking-[0.25em] text-brand-orange mb-3">
              {activeTab === "renta" ? "Disponible para Renta" : "Disponible para Venta"}
            </p>
            <h1 className="font-display text-display text-ink-cream leading-none">
              {category}
            </h1>
          </div>
        </div>
      </div>

      {/* Tab switcher + actions bar */}
      <div className="sticky top-20 md:top-24 z-30 bg-surface-steel/95 backdrop-blur-sm border-b border-surface-iron">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-14">
          {/* Tabs */}
          <div className="flex h-full">
            {hasRenta && (
              <Link
                to={rentaPath}
                className={`font-heading font-bold text-xs uppercase tracking-[0.15em] px-6 flex items-center border-b-2 transition-all duration-200 ${
                  activeTab === "renta"
                    ? "border-brand-orange text-ink-cream"
                    : "border-transparent text-ink-fog hover:text-ink-cream"
                }`}
              >
                Renta
              </Link>
            )}
            {ventaPath && (
              <Link
                to={ventaPath}
                className={`font-heading font-bold text-xs uppercase tracking-[0.15em] px-6 flex items-center border-b-2 transition-all duration-200 ${
                  activeTab === "venta"
                    ? "border-brand-orange text-ink-cream"
                    : "border-transparent text-ink-fog hover:text-ink-cream"
                }`}
              >
                Venta
              </Link>
            )}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex font-heading font-bold text-xs uppercase tracking-[0.15em] bg-brand-orange hover:bg-brand-orange-warm text-ink-cream px-5 py-2 transition-colors duration-300 items-center gap-2"
          >
            Solicitar Cotización <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      {/* Equipment grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">

        {items.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-brand-orange mb-4">
              Próximamente
            </p>
            <h2 className="font-display text-4xl text-ink-cream mb-4">
              CATÁLOGO EN PREPARACIÓN
            </h2>
            <p className="font-body text-base text-ink-fog max-w-md mx-auto mb-8">
              Estamos preparando este catálogo. Contáctanos directamente para consultar disponibilidad.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-bold text-sm uppercase tracking-[0.15em] bg-brand-orange hover:bg-brand-orange-warm text-ink-cream px-8 py-4 transition-colors duration-300 inline-flex items-center gap-2"
            >
              Consultar por WhatsApp <ArrowUpRight size={14} />
            </a>
          </div>
        ) : (
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-surface-iron"
          >
            {items.map((item, i) => (
              <EquipmentCard key={item.id} item={item} index={i} />
            ))}
          </div>
        )}

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-surface-iron">
          <Link
            to="/"
            className="font-heading font-semibold text-sm uppercase tracking-[0.15em] text-ink-fog hover:text-ink-cream transition-colors duration-200 flex items-center gap-2 group"
          >
            <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1" />
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
