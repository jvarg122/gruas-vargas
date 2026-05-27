import { forwardRef } from "react";

const variants = {
  primary:
    "bg-brand-orange hover:bg-brand-orange-warm text-ink-cream border border-brand-orange hover:border-brand-orange-warm",
  outline:
    "bg-transparent border border-ink-cream text-ink-cream hover:bg-ink-cream hover:text-surface-base",
  ghost:
    "bg-transparent border border-surface-iron text-ink-fog hover:border-ink-fog hover:text-ink-cream",
  orange_ghost:
    "bg-transparent border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-ink-cream",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-xs",
  lg: "px-8 py-4 text-sm",
};

const Button = forwardRef(
  ({ variant = "primary", size = "md", className = "", children, as: Tag = "button", ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={`
          font-heading font-bold uppercase tracking-[0.15em]
          transition-all duration-300 ease-out-expo
          inline-flex items-center gap-2 whitespace-nowrap
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Button.displayName = "Button";
export default Button;
