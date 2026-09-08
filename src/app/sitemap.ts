import type { MetadataRoute } from "next";
import { serviceSlugs } from "@/content/services";
import { districts } from "@/content/districts";
import { posts } from "@/content/blog";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/hizmetler`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/bolgeler`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/hakkimizda`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/iletisim`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/sss`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/gizlilik-politikasi`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${site.url}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.95,
  }));

  // Avrupa yakası öncelikli olduğu için sitemap'te daha yüksek priority alıyor
  const districtPages: MetadataRoute.Sitemap = districts.map((d) => ({
    url: `${site.url}/bolgeler/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: d.side === "Avrupa" ? 0.8 : 0.6,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...districtPages, ...postPages];
}
