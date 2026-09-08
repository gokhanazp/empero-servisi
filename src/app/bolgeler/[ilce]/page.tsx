import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { districts, getDistrict, districtSlugs } from "@/content/districts";
import { services } from "@/content/services";
import { ProductImage } from "@/components/ProductImage";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site, telHref } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return districtSlugs.map((ilce) => ({ ilce }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ilce: string }>;
}): Promise<Metadata> {
  const { ilce } = await params;
  const d = getDistrict(ilce);
  if (!d) return {};

  const title = `${d.name} Empero Servisi | Ocak, Fritöz ve Fırın Tamiri`;
  const description = `${d.name} ve çevresinde Empero ocak, fritöz, bulaşık makinesi, fırın, buzdolabı ve yer ocağı servisi. Yerinde tamir, aynı gün müdahale, garantili işçilik.`;

  return {
    title,
    description,
    keywords: [
      `${d.name.toLowerCase()} empero servisi`,
      `${d.name.toLowerCase()} empero ocak tamiri`,
      `${d.name.toLowerCase()} endüstriyel mutfak servisi`,
      `${d.name.toLowerCase()} sanayi tipi bulaşık makinesi tamiri`,
    ],
    alternates: { canonical: `/bolgeler/${d.slug}` },
    openGraph: {
      type: "article",
      url: `${site.url}/bolgeler/${d.slug}`,
      title,
      description,
      siteName: site.name,
      locale: "tr_TR",
    },
  };
}

export default async function DistrictPage({
  params,
}: {
  params: Promise<{ ilce: string }>;
}) {
  const { ilce } = await params;
  const d = getDistrict(ilce);
  if (!d) notFound();

  const url = `${site.url}/bolgeler/${d.slug}`;
  const sameSide = districts.filter(
    (x) => x.side === d.side && x.slug !== d.slug
  );

  const faq = [
    {
      q: `${d.name}'e aynı gün servis geliyor musunuz?`,
      a: `${d.name} ${d.side} yakasında ve düzenli gittiğimiz bölgelerden biri. Sabah saatlerinde açılan çağrıların büyük kısmını aynı gün karşılıyoruz. Gaz kokusu ve soğutucu arızası gibi bekletilmeye gelmeyen durumlarda sıraya bakmadan yönlendirme yapıyoruz.`,
    },
    {
      q: `${d.name}'de hangi cihazlara bakıyorsunuz?`,
      a: `Empero ocak, fritöz, sanayi tipi bulaşık makinesi, konveksiyonlu ve gazlı fırın, dik tip ve tezgah tipi buzdolabı ile yer ocağı gruplarının tamamına servis veriyoruz. Aynı adreste birden fazla cihaz varsa tek ziyarette hepsine bakabiliyoruz.`,
    },
    {
      q: `${d.name}'de servis ücreti farklı mı?`,
      a: `Hayır, İstanbul içinde servis ücretimiz bölgeye göre değişmiyor. Keşif ve arıza tespiti için sabit bir ücret alınıyor ve tamir yapılırsa bu ücret toplamdan düşülüyor.`,
    },
    {
      q: `Mutfağımızı gündüz kapatamıyoruz, ${d.name}'e akşam gelebilir misiniz?`,
      a: `Gelebiliriz. Bu bölgedeki restoran ve otel mutfaklarında kapanış sonrası ya da sabah erken saat randevularıyla sık çalışıyoruz. Randevuyu alırken belirtmeniz yeterli.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${d.name} Empero Servisi`,
            description: `${d.name} ve çevresinde Empero endüstriyel mutfak cihazları için yerinde teknik servis, tamir ve periyodik bakım.`,
            url,
            serviceType: "Endüstriyel mutfak cihazı tamiri",
          }),
          faqSchema(faq),
          breadcrumbSchema([
            { name: "Ana Sayfa", url: site.url },
            { name: "Servis Bölgeleri", url: `${site.url}/bolgeler` },
            { name: `${d.name} Empero Servisi`, url },
          ]),
        ]}
      />

      <section className="page-hero grain border-b border-ink-800">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="[&_a]:text-ink-400 [&_a:hover]:text-brand-400 [&_span]:text-ink-500 [&_[aria-current]]:text-ink-300">
            <Breadcrumbs
              items={[
                { name: "Servis Bölgeleri", href: "/bolgeler" },
                { name: d.name, href: `/bolgeler/${d.slug}` },
              ]}
            />
          </div>
          <p className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-ink-700 px-3 py-1 text-xs font-medium text-ink-300">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            İstanbul · {d.side} Yakası
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {d.name} Empero Servisi
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            {d.note}
          </p>
          <a
            href={telHref}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-700"
          >
            {site.phone.display} — {d.name} servis talebi
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <div className="prose-tr text-[1.0625rem]">
          {d.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">
            {d.name}'de gittiğimiz semtler
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-600">
            Aşağıdaki semtler ve çevrelerinde düzenli servis veriyoruz. Listede
            olmayan bir mahalledeyseniz de aramanız yeterli — {d.name} sınırları
            içindeki tüm adreslere gidiyoruz.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {d.areas.map((a) => (
              <li
                key={a}
                className="rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm text-ink-700"
              >
                {a}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">
            {d.name}'de servis verdiğimiz cihazlar
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group flex items-start gap-3 rounded-xl border border-ink-200 bg-white p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
              >
                <span className="flex h-14 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-ink-100/70 to-white">
                  <ProductImage
                    service={s}
                    sizes="64px"
                    className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink-900">
                    {d.name} {s.name}
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-ink-500">
                    {s.teaser}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <Cta
          title={`${d.name} için servis randevusu`}
          text={`${d.name} ve çevresine gün içinde düzenli çıkıyoruz. Arızayı telefonda birkaç cümleyle anlatmanız yeterli; teknisyen doğru parçayla yola çıksın diye cihaz modelini de soruyoruz.`}
          waMessage={`Merhaba, ${d.name}'deyim. Empero cihazım için servis talebim var.`}
        />

        <FaqList items={faq} title={`${d.name} servisi hakkında sorular`} />

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">
            {d.side} yakasında diğer bölgelerimiz
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {sameSide.map((x) => (
              <li key={x.slug}>
                <Link
                  href={`/bolgeler/${x.slug}`}
                  className="inline-block rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                >
                  {x.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
