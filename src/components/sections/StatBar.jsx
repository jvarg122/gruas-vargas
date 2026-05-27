import { useTranslation } from "react-i18next";
import { useCounter } from "../../hooks/useCounter";

function StatItem({ target, suffix, label }) {
  const { value, ref } = useCounter(target, { duration: 1800 });

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 px-6 py-10 md:px-10">
      <span className="font-display text-5xl md:text-6xl lg:text-7xl text-ink-cream leading-none">
        {value}
        <span className="text-brand-orange">{suffix}</span>
      </span>
      <span className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-ink-fog text-center">
        {label}
      </span>
    </div>
  );
}

export default function StatBar() {
  const { t } = useTranslation();

  const stats = [
    { target: 30, suffix: t("stats.years_suffix"), label: t("stats.years_label") },
    { target: 115, suffix: t("stats.capacity_suffix"), label: t("stats.capacity_label") },
    { target: 3, suffix: t("stats.locations_suffix"), label: t("stats.locations_label") },
    { target: 24, suffix: t("stats.service_suffix"), label: t("stats.service_label") },
  ];

  return (
    <div className="bg-surface-steel border-t border-b border-surface-iron">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-surface-iron divide-y md:divide-y-0">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
