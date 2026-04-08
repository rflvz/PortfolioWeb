interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  label,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#d94f3d] mb-4">
          {label}
        </p>
      )}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#e8ddd0] chiseled sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-sm font-mono text-[rgba(232,221,208,0.75)] max-w-xl mx-auto leading-relaxed tracking-wide">
          {subtitle}
        </p>
      )}
      <div className="scratched-divider mt-8 max-w-xs mx-auto" />
    </div>
  );
}
