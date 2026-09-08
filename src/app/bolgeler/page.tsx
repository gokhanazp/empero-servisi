import Link from "next/link";
import type { Metadata } from "next";
import { districts } from "@/content/districts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servis Bölgelerimiz — İstanbul Geneli Empero Servisi",
  description:
    "İstanbul'un Anadolu ve Avrupa yakasında Empero endüstriyel mutfak cihazları için yerinde servis. İlçe ilçe servis bölgelerimiz ve bölgeye özgü notlar.",
  alternates: { canonical: "/bolgeler" },
};

export default function DistrictsPage() {
  const anadolu = districts.filter((d) => d.side === "Anadolu");
  const avrupa = districts.filter((d) => d.side === "Avrupa");

  return (
    <>
      <JsonLd
        data={[
          itemListSchema(
            districts.map((d) => ({
              name: `${d.name} Empero Servisi`,
              url: `${site.url}/bolgeler/${d.slug}`,
            }))
          ),
          breadcrumbSchema([
            { name: "Ana Sayfa", url: site.url },
            { name: "Servis Bölgeleri", url: `${site.url}/bolgeler` },
          ]),
        ]}
      />

      <section className="page-hero grain border-b border-ink-800">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="[&_a]:text-ink-400 [&_a:hover]:text-brand-400 [&_span]:text-ink-500 [&_[aria-current]]:text-ink-300">
            <Breadcrumbs items={[{ name: "Servis Bölgeleri", href: "/bolgeler" }]} />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            İstanbul servis bölgelerimiz
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            Ekiplerimizin büyük kısmı Avrupa yakasında konumlanıyor; buradaki
            çağrılara genellikle aynı gün ulaşıyoruz. Anadolu yakasına da
            servis veriyoruz. Bölge sayfalarında o ilçenin mutfak profiline ve
            altyapısına dair sahada edindiğimiz notları bulacaksınız.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {[
          {
            title: "Avrupa Yakası",
            items: avrupa,
            note: "Yoğun servis bölgemiz — çağrıların çoğunu aynı gün karşılıyoruz.",
          },
          {
            title: "Anadolu Yakası",
            items: anadolu,
            note: "Bu yakaya da düzenli çıkıyoruz; randevu saatini birlikte belirliyoruz.",
          },
        ].map((group, gi) => (
          <section key={group.title} className="mb-14 last:mb-0">
            <h2 className="flex flex-wrap items-center gap-x-3 gap-y-2 text-2xl font-bold tracking-tight text-ink-900">
              {group.title}
              {gi === 0 && (
                <span className="rounded-full bg-brand-50 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-brand-700 ring-1 ring-inset ring-brand-100">
                  Öncelikli bölge
                </span>
              )}
            </h2>
            <p className="mt-2 text-base leading-relaxed text-ink-600">
              {group.note}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((d) => (
                <Link
                  key={d.slug}
                  href={`/bolgeler/${d.slug}`}
                  className="group rounded-xl border border-ink-200 bg-white p-5 transition-colors hover:border-brand-300 hover:bg-brand-50/30"
                >
                  <h3 className="flex items-center gap-2 text-base font-bold text-ink-900">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {d.name} Empero Servisi
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {d.note}
                  </p>
                  <p className="mt-3 text-xs text-ink-400">
                    {d.areas.slice(0, 4).join(" · ")}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="rounded-2xl border border-ink-200 bg-ink-50/60 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-ink-900">
            Listede olmayan bir ilçedeyseniz
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-600">
            Yukarıda kendi sayfası olan ilçeler en sık gittiğimiz bölgeler.
            Bunun dışındaki İstanbul ilçelerine de servis veriyoruz — Şile ve
            Çatalca gibi uzak noktalar dahil. Adresinizi söylediğinizde o gün
            için gerçekçi bir saat aralığı verebiliyoruz.
          </p>
        </div>

        <Cta />
      </div>
    </>
  );
}
