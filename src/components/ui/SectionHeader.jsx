export default function SectionHeader({ eyebrow, headline, subtext, align = "left", className = "" }) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="font-heading font-semibold text-xs uppercase tracking-[0.25em] text-brand-orange">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-display leading-none text-ink-cream">
        {headline}
      </h2>
      {subtext && (
        <p className="font-body text-base text-ink-fog max-w-xl leading-relaxed mt-1">
          {subtext}
        </p>
      )}
    </div>
  );
}
