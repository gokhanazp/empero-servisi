import type { Service } from "@/lib/types";
import { ServiceIcon } from "./ServiceIcon";

/**
 * Ürün görseli. Saydam arka planlı WebP; iki boyutta üretildi.
 * next/image yerine düz <img> kullanıldı ki statik export'ta da
 * hiçbir ek ayar gerekmeden çalışsın.
 *
 * Henüz fotoğrafı olmayan cihazlarda (service.image boşsa) ikon
 * yer tutucu gösterilir. Fotoğraf eklendiğinde otomatik devreye girer.
 */
export function ProductImage({
  service,
  className = "",
  sizes = "(min-width: 1024px) 320px, 45vw",
  priority = false,
}: {
  service: Pick<Service, "image" | "imageAlt" | "icon">;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!service.image) {
    return (
      <span
        role="img"
        aria-label={service.imageAlt}
        className={`inline-flex aspect-4/3 items-center justify-center ${className}`}
      >
        <ServiceIcon
          icon={service.icon}
          className="h-2/3 w-auto text-ink-400 opacity-70"
        />
      </span>
    );
  }

  const base = `/gorseller/${service.image}`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${base}.webp`}
      srcSet={`${base}@400.webp 400w, ${base}.webp 800w`}
      sizes={sizes}
      alt={service.imageAlt}
      width={800}
      height={600}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
      className={className}
    />
  );
}
