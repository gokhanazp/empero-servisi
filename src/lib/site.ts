/**
 * TEK NOKTADAN AYAR DOSYASI
 * ---------------------------------------------------------------
 * Telefon, WhatsApp, adres, alan adı gibi bilgileri sadece burada
 * değiştirmeniz yeterli. Tüm site (başlıklar, footer, JSON-LD şemaları,
 * sitemap, tıkla-ara butonları) bu dosyadan beslenir.
 */

export const site = {
  /** Yayına alacağınız alan adı. Sonunda "/" OLMAYACAK. */
  url: "https://www.emperoservisi.com",

  /** Sitede ve şemalarda görünen işletme adı */
  name: "Empero Servisi",
  legalName: "Empero Servisi — Endüstriyel Mutfak Teknik Servisi",

  /** Tarayıcı sekmesi ve arama sonuçlarındaki başlık şablonu */
  shortDescription:
    "Empero ocak, fritöz, bulaşık makinesi, fırın, buzdolabı, yer ocağı, ızgara ve benmari için İstanbul geneli yerinde teknik servis, tamir ve bakım hizmeti.",

  /** İLETİŞİM — kendi bilgilerinizle değiştirin */
  phone: {
    /** Ekranda görünen hâli */
    display: "0533 191 24 78",
    /** tel: linki için uluslararası format */
    href: "+905331912478",
  },
  whatsapp: {
    display: "0533 191 24 78",
    /** wa.me linki: başında + ve boşluk olmadan */
    href: "905331912478",
  },
  email: "info@emperoservisi.com",

  address: {
    street: "Örnek Mah. Örnek Cad. No: 00",
    district: "Ümraniye",
    city: "İstanbul",
    region: "İstanbul",
    postalCode: "34000",
    country: "TR",
    /** Google Haritalar için koordinat (yaklaşık) */
    geo: { lat: 41.0255, lng: 29.1244 },
  },

  hours: {
    weekday: "08:00 – 20:00",
    saturday: "09:00 – 19:00",
    sunday: "Acil çağrılar için ulaşılabilir",
    /** Şema için makine okunabilir hâli */
    schema: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "20:00" },
      { days: ["Saturday"], opens: "09:00", closes: "19:00" },
    ],
  },

  /** Sosyal medya hesaplarınız (boş bırakabilirsiniz) */
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
    linkedin: "",
  },

  /** Google Search Console doğrulama kodu (varsa) */
  googleSiteVerification: "",

  /** Kurulduğu yıl — "X yıldır" ifadeleri buradan hesaplanır */
  foundedYear: 2009,

  /** Footer'daki tasarım/geliştirme künyesi */
  credit: {
    label: "Web tasarım",
    name: "Gökhan Yıldırım",
    url: "https://gokhan-yildirim.com",
  },
} as const;

/** Yasal ayrım ibaresi — her sayfada görünür. Kaldırmayın. */
export const disclaimer =
  "Empero Servisi bağımsız bir özel teknik servistir. Empero markasının yetkili servisi, distribütörü veya iştiraki değildir. Marka adı yalnızca hizmet verilen cihazları tanımlamak amacıyla kullanılmaktadır.";

export const experienceYears = new Date().getFullYear() - site.foundedYear;

export const telHref = `tel:${site.phone.href}`;
export const waHref = (mesaj?: string) =>
  `https://wa.me/${site.whatsapp.href}${mesaj ? `?text=${encodeURIComponent(mesaj)}` : ""}`;
