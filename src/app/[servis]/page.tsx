import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getService, serviceSlugs } from "@/content/services";
import { districts } from "@/content/districts";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ProductImage } from "@/components/ProductImage";
import { FaqList } from "@/components/FaqList";
import { Cta } from "@/components/Cta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site, telHref, waHref } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((servis) => ({ servis }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ servis: string }>;
}): Promise<Metadata> {
  const { servis } = await params;
  const service = getService(servis);
  if (!service) return {};

  const url = `${site.url}/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/${service.slug}` },
    openGraph: {
      type: "article",
      url,
      title: service.metaTitle,
      description: service.metaDescription,
      siteName: site.name,
      locale: "tr_TR",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ servis: string }>;
}) {
  const { servis } = await params;
  const service = getService(servis);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const url = `${site.url}/${service.slug}`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            url,
            serviceType: `${service.shortName} tamiri ve bakımı`,
          }),
          faqSchema(service.faq),
          breadcrumbSchema([
            { name: "Ana Sayfa", url: site.url },
            { name: "Hizmetler", url: `${site.url}/hizmetler` },
            { name: service.name, url },
          ]),
        ]}
      />

      {/* BAŞLIK */}
      <section className="page-hero grain border-b border-ink-800">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="[&_a]:text-ink-400 [&_a:hover]:text-brand-400 [&_span]:text-ink-500 [&_[aria-current]]:text-ink-300">
            <Breadcrumbs
              items={[
                { name: "Hizmetler", href: "/hizmetler" },
                { name: service.name, href: `/${service.slug}` },
              ]}
            />
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                <ServiceIcon icon={service.icon} className="h-6 w-6" />
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                {service.h1}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
                {service.teaser}
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {[
                  "İstanbul geneli yerinde servis",
                  "Aynı gün müdahale",
                  "Garantili işçilik",
                  "Orijinal ve muadil parça",
                ].map((chip) => (
                  <li
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-ink-300 backdrop-blur"
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full shrink-0 space-y-4 lg:w-[21rem]">
              <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-8 h-24 w-3/4 rounded-full bg-brand-600/30 blur-3xl"
                />
                <ProductImage
                  service={service}
                  priority
                  sizes="(min-width: 1024px) 336px, 90vw"
                  className="relative h-44 w-auto object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.6)]"
                />
              </div>

              <div className="rounded-2xl border border-ink-800 bg-ink-900 p-5">
              <p className="text-sm font-semibold text-white">
                Arıza için hemen ulaşın
              </p>
              <p className="mt-1 text-sm text-ink-400">
                Şikâyeti birkaç cümleyle anlatmanız yeterli.
              </p>
              <a
                href={telHref}
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-700"
              >
                {site.phone.display}
              </a>
              <a
                href={waHref(
                  `Merhaba, ${service.name} konusunda servis talebim var.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-ink-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
              >
                WhatsApp'tan yazın
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 py-12 lg:grid-cols-[1fr_20rem] lg:py-16">
          {/* ANA İÇERİK */}
          <article>
            <div className="prose-tr text-[1.0625rem]">
              {service.intro.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-ink-700">
                  {p}
                </p>
              ))}
            </div>

            {service.sections.map((section) => (
              <section key={section.heading} className="mt-12">
                <h2 className="text-2xl font-bold tracking-tight text-ink-900">
                  {section.heading}
                </h2>
                <div className="prose-tr mt-4 text-[1.0625rem]">
                  {section.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}

            {/* ARIZA TABLOSU */}
            <section className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900">
                Sık karşılaştığımız arızalar ve muhtemel sebepleri
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-600">
                Aşağıdaki tariflerden hangisi sizin durumunuza uyuyorsa,
                telefonda söylemeniz yeterli. Teknisyen doğru parçayla yola
                çıkar.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.symptoms.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl border border-ink-200 bg-white p-5"
                  >
                    <h3 className="flex items-start gap-2 text-base font-bold text-ink-900">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                        <path d="M12 9v4M12 17h.01" />
                      </svg>
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CİHAZ TİPLERİ */}
            <section className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900">
                Servis verdiğimiz {service.shortName.toLocaleLowerCase("tr-TR")}{" "}
                tipleri
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-600">
                Her modelin kendine göre zayıf noktası var. Aşağıda hangi tipte
                neye baktığımızı ayrı ayrı yazdık.
              </p>
              <div className="mt-6 space-y-px overflow-hidden rounded-xl bg-ink-200">
                {service.variants.map((v, i) => (
                  <div key={v.name} className="bg-white p-5 sm:p-6">
                    <h3 className="flex items-start gap-3 text-base font-bold tracking-tight text-ink-900">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 font-mono text-xs font-semibold text-brand-400"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {v.name}
                    </h3>
                    <p className="mt-2 pl-8 text-[0.9375rem] leading-relaxed text-ink-600">
                      {v.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <Cta
              title={`${service.name} için randevu alın`}
              text="İstanbul içinde sabah saatlerinde açılan çağrıların büyük kısmını aynı gün karşılıyoruz. Cihazın model etiketini gönderirseniz teknisyen parçayı yanında getirir."
              waMessage={`Merhaba, ${service.name} için randevu almak istiyorum.`}
            />

            <FaqList
              items={service.faq}
              title={`${service.name} hakkında sık sorulanlar`}
            />

            {/* DİĞER HİZMETLER */}
            <section className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900">
                Diğer cihaz servislerimiz
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/${o.slug}`}
                    className="group flex items-start gap-3 rounded-xl border border-ink-200 bg-white p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
                  >
                    <span className="flex h-14 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-ink-100/70 to-white">
                      <ProductImage
                        service={o}
                        sizes="64px"
                        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-ink-900">
                        {o.name}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-ink-500">
                        {o.teaser}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </article>

          {/* YAN SÜTUN */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl border border-ink-200 bg-white p-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-ink-900">
                Sık değişen parçalar
              </h2>
              <ul className="mt-3 space-y-2">
                {service.parts.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-ink-600"
                  >
                    <svg viewBox="0 0 24 24" className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-500" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-ink-200 bg-white p-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-ink-900">
                Servis verdiğimiz modeller
              </h2>
              <ul className="mt-3 space-y-2">
                {service.models.map((m) => (
                  <li key={m} className="text-sm leading-relaxed text-ink-600">
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-3 border-t border-ink-100 pt-3 text-xs leading-relaxed text-ink-400">
                Listede olmayan bir model için de arayabilirsiniz; etiket
                fotoğrafına bakıp parça durumunu söyleyelim.
              </p>
            </div>

            <div className="rounded-xl bg-ink-950 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                Bölgenizde servis
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">
                İstanbul'un iki yakasına da gidiyoruz.
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {districts.slice(0, 12).map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/bolgeler/${d.slug}`}
                      className="inline-block rounded-full border border-ink-700 px-2.5 py-1 text-xs text-ink-300 hover:border-brand-500 hover:text-white"
                    >
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/bolgeler"
                className="mt-3 inline-block text-xs font-semibold text-brand-400 hover:text-brand-300"
              >
                Tüm bölgeler →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
