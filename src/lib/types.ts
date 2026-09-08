export type Faq = {
  q: string;
  a: string;
};

export type Symptom = {
  title: string;
  text: string;
};

export type Section = {
  heading: string;
  /** Her eleman bir <p> olarak basılır */
  body: string[];
};

export type Service = {
  slug: string;
  /** Menülerde ve kartlarda görünen kısa ad */
  shortName: string;
  /** Tam hizmet adı — "Empero Ocak Servisi" */
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Kart ve liste açıklaması (1-2 cümle) */
  teaser: string;
  /** Sayfanın giriş paragrafları */
  intro: string[];
  sections: Section[];
  symptoms: Symptom[];
  /**
   * Cihaz tipine göre alt başlıklar. Uzun kuyruk aramalar için
   * ("empero konveksiyonlu fırın servisi" gibi) ayrı H2 olarak basılır.
   */
  variants: { name: string; text: string }[];
  /** Sık değiştirilen parçalar */
  parts: string[];
  /** Servis verilen model / seri örnekleri */
  models: string[];
  faq: Faq[];
  /** Basit inline SVG ikon anahtarı */
  icon:
    | "ocak"
    | "fritoz"
    | "bulasik"
    | "firin"
    | "buzdolabi"
    | "yerocak"
    | "benmari"
    | "izgara";
  /**
   * Ürün görselinin dosya adı (uzantısız).
   * public/gorseller/<image>.webp  → 800x600
   * public/gorseller/<image>@400.webp → 400x300
   * Görseller saydam arka planlı; hem açık hem koyu zeminde kullanılabilir.
   * Boş bırakılırsa ikon yer tutucu gösterilir.
   */
  image?: string;
  imageAlt: string;
};

export type District = {
  slug: string;
  name: string;
  /** Yakada: "Anadolu" | "Avrupa" */
  side: "Anadolu" | "Avrupa";
  /** İlçeye özel, tekrar etmeyen tanıtım metni */
  intro: string[];
  /** Sık gidilen semtler / mahalleler */
  areas: string[];
  /** İlçenin mutfak profiline dair not */
  note: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  updated?: string;
  readingMinutes: number;
  category: string;
  keywords: string[];
  body: Section[];
  faq?: Faq[];
};
