import { site, disclaimer } from "./site";
import type { Faq } from "./types";

const ORG_ID = `${site.url}/#organization`;
const BUSINESS_ID = `${site.url}/#localbusiness`;
const WEBSITE_ID = `${site.url}/#website`;

/** Tüm sayfalarda ortak: işletme + web sitesi kimliği */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": BUSINESS_ID,
        name: site.name,
        legalName: site.legalName,
        description: site.shortDescription,
        disambiguatingDescription: disclaimer,
        url: site.url,
        telephone: site.phone.href,
        email: site.email,
        image: `${site.url}/og-image.png`,
        logo: {
          "@type": "ImageObject",
          "@id": `${site.url}/#logo`,
          url: `${site.url}/logo.png`,
          width: 512,
          height: 512,
        },
        priceRange: "₺₺",
        currenciesAccepted: "TRY",
        paymentAccepted: "Nakit, Kredi Kartı, Havale/EFT",
        // Hizmet bölgesi işletmesi: açık adres yayınlanmıyor,
        // yalnızca şehir/ülke bilgisi veriliyor.
        address: {
          "@type": "PostalAddress",
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        areaServed: {
          "@type": "City",
          name: "İstanbul",
        },
        openingHoursSpecification: site.hours.schema.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.days,
          opens: h.opens,
          closes: h.closes,
        })),
        sameAs: Object.values(site.social).filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: site.url,
        name: site.name,
        inLanguage: "tr-TR",
        publisher: { "@id": BUSINESS_ID },
      },
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: site.name,
        url: site.url,
        logo: { "@id": `${site.url}/#logo` },
      },
    ],
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.serviceType,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "City", name: "İstanbul" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: opts.url,
      servicePhone: {
        "@type": "ContactPoint",
        telephone: site.phone.href,
        contactType: "customer service",
        availableLanguage: ["Turkish"],
      },
    },
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  date: string;
  updated?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    inLanguage: "tr-TR",
    datePublished: opts.date,
    dateModified: opts.updated ?? opts.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    author: { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}
