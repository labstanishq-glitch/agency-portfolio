type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-2xl ${alignClass} ${className}`}>
      <h2
        className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-light-cream"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
