import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Statik export. `npm run build` sonucunda tüm site `out/` klasörüne
   * saf HTML olarak çıkar. Cloudflare Pages / Workers, Netlify, cPanel —
   * hepsi bu klasörü olduğu gibi yayınlayabilir.
   *
   * Sunucu tarafı bir özellik (API route, SSR, ISR) eklerseniz bu satırı
   * kaldırıp Cloudflare tarafında @opennextjs/cloudflare adaptörüne
   * geçmeniz gerekir.
   */
  output: "export",

  poweredByHeader: false,
  reactStrictMode: true,

  /**
   * Görseller elle optimize edilmiş WebP olarak public/gorseller altında
   * duruyor ve düz <img> ile srcset kullanılıyor; Next'in görsel
   * optimizasyon sunucusuna ihtiyaç yok.
   */
  images: {
    unoptimized: true,
  },

  /**
   * NOT: Statik export'ta next.config içindeki headers() çalışmaz.
   * Güvenlik başlıkları ve önbellek kuralları public/_headers dosyasında.
   */
};

export default nextConfig;
