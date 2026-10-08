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
    <header className={`max-w-3xl ${alignClass} ${className}`}>
      <h2 className="font-display text-3xl font-bold tracking-tight text-light-cream sm:text-4xl md:text-[2.75rem] md:leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p>
      ) : null}
    </header>
  );
}
