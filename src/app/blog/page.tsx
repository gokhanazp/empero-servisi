import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/content/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Endüstriyel Mutfak Bakım ve Arıza Rehberi",
  description:
    "Endüstriyel mutfak cihazlarında sık görülen arızalar, sebepleri ve önleme yolları. Sahadan notlar, bakım listeleri ve pratik kontrol rehberleri.",
  alternates: { canonical: "/blog" },
};

const dateFormatter = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <JsonLd
        data={[
          itemListSchema(
            sorted.map((p) => ({
              name: p.title,
              url: `${site.url}/blog/${p.slug}`,
            }))
          ),
          breadcrumbSchema([
            { name: "Ana Sayfa", url: site.url },
            { name: "Blog", url: `${site.url}/blog` },
          ]),
        ]}
      />

      <section className="page-hero grain border-b border-ink-800">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="[&_a]:text-ink-400 [&_a:hover]:text-brand-400 [&_span]:text-ink-500 [&_[aria-current]]:text-ink-300">
            <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Mutfaktan notlar
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            Sahada en sık karşılaştığımız arızaları, sebeplerini ve
            önlenebilir olanları yazıyoruz. Servis çağırmadan önce
            okuyabileceğiniz, işe yarar bilgi.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <div className="space-y-6">
          {sorted.map((p) => (
            <article
              key={p.slug}
              className="group rounded-xl border border-ink-200 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-ink-900/5 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                <span className="font-semibold uppercase tracking-wider text-brand-600">
                  {p.category}
                </span>
                <span className="text-ink-300">·</span>
                <time dateTime={p.date} className="text-ink-500">
                  {dateFormatter.format(new Date(p.date))}
                </time>
                <span className="text-ink-300">·</span>
                <span className="text-ink-500">
                  {p.readingMinutes} dakikalık okuma
                </span>
              </div>
              <h2 className="mt-3 text-xl font-bold leading-snug text-ink-900 sm:text-2xl">
                <Link href={`/blog/${p.slug}`} className="hover:text-brand-700">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-600">
                {p.excerpt}
              </p>
              <Link
                href={`/blog/${p.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Yazının tamamı
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        <Cta />
      </div>
    </>
  );
}
