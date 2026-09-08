/**
 * Bölüm başlığı: küçük kırmızı etiket + başlık + açıklama.
 * Site genelinde aynı ritmi kurmak için kullanılıyor.
 */
export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`flex items-center gap-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.18em] ${
            align === "center" ? "justify-center" : ""
          } ${light ? "text-brand-400" : "text-brand-600"}`}
        >
          <span aria-hidden="true" className="h-px w-7 bg-current opacity-60" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-[1.75rem] font-bold leading-[1.2] tracking-[-0.02em] sm:text-[2rem] ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 text-[1.0625rem] leading-relaxed ${
            light ? "text-ink-400" : "text-ink-600"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
