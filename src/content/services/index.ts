import type { Service } from "@/lib/types";
import { ocak } from "./ocak";
import { fritoz } from "./fritoz";
import { bulasikMakinesi } from "./bulasik-makinesi";
import { firin } from "./firin";
import { buzdolabi } from "./buzdolabi";
import { yerOcagi } from "./yer-ocagi";
import { benmari } from "./benmari";
import { izgara } from "./izgara";

export const services: Service[] = [
  ocak,
  fritoz,
  bulasikMakinesi,
  firin,
  buzdolabi,
  yerOcagi,
  izgara,
  benmari,
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
