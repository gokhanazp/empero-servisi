import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/content/services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ProductImage } from "@/components/ProductImage";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetlerimiz — Empero Cihaz Servisi ve Tamiri",
  description:
    "Empero ocak, fritöz, bulaşık makinesi, fırın, buzdolabı, yer ocağı, ızgara ve benmari için servis, tamir ve periyodik bakım. İstanbul geneli yerinde müdahale.",
  alternates: { canonical: "/hizmetler" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          itemListSchema(
            services.map((s) => ({ name: s.name, url: `${site.url}/${s.slug}` }))
          ),
          breadcrumbSchema([
            { name: "Ana Sayfa", url: site.url },
            { name: "Hizmetler", url: `${site.url}/hizmetler` },
          ]),
        ]}
      />

      <section className="page-hero grain border-b border-ink-800">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="[&_a]:text-ink-400 [&_a:hover]:text-brand-400 [&_span]:text-ink-500 [&_[aria-current]]:text-ink-300">
            <Breadcrumbs items={[{ name: "Hizmetler", href: "/hizmetler" }]} />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Empero cihaz servisi ve tamir hizmetlerimiz
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            Sekiz cihaz grubunda arıza onarımı, periyodik bakım, gaz dönüşümü ve
            devreye alma yapıyoruz. Her cihazın sayfasında sık görülen
            arızaları ve nasıl müdahale ettiğimizi ayrıntılı yazdık.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.slug}
              className="group flex flex-col rounded-xl border border-ink-200 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-ink-900/5"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="relative flex h-32 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-ink-100/70 via-ink-50/40 to-white sm:w-44">
                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 h-6 w-2/3 rounded-[50%] bg-ink-900/10 blur-lg"
                  />
                  <ProductImage
                    service={s}
                    sizes="(min-width: 640px) 176px, 90vw"
                    className="relative h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                    <ServiceIcon icon={s.icon} className="h-[1.125rem] w-[1.125rem]" />
                  </span>
                  <h2 className="mt-3 text-lg font-bold tracking-tight text-ink-900">
                    <Link href={`/${s.slug}`} className="hover:text-brand-700">
                      {s.name}
                    </Link>
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                    {s.teaser}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-ink-100 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                  Bu cihazda en sık gelen çağrılar
                </p>
                <ul className="mt-2.5 space-y-1.5">
                  {s.symptoms.slice(0, 3).map((sym) => (
                    <li
                      key={sym.title}
                      className="flex items-start gap-2 text-sm text-ink-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"
                      />
                      {sym.title}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/${s.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                {s.shortName} servisi detayları
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-16 rounded-2xl border border-ink-200 bg-ink-50/60 p-6 sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">
            Tamirin dışında yaptıklarımız
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Periyodik bakım",
                d: "Üç aylık, altı aylık ya da yıllık programla cihaz cihaz bakım. Anlaşmalı işletmelerde çağrılara öncelik ve sabit servis ücreti.",
              },
              {
                t: "Gaz dönüşümü",
                d: "LPG–doğalgaz dönüşümünde enjektör, pilot memesi, hava ayarı ve gerekiyorsa regülatör düzenlemesi. Kaçak testiyle teslim.",
              },
              {
                t: "Devreye alma",
                d: "Yeni ya da ikinci el alınan cihazın gaz tipine göre ayarlanması, elektrik beslemesinin kontrolü ve ilk çalıştırma testleri.",
              },
              {
                t: "Ekipman taşıma ve kurulum",
                d: "Mutfak yerleşimi değişirken cihazların sökülüp yeniden kurulması, gaz ve su bağlantılarının yenilenmesi.",
              },
            ].map((x) => (
              <div key={x.t}>
                <h3 className="text-base font-bold text-ink-900">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Cta />
      </div>
    </>
  );
}
