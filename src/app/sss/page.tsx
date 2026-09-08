import Link from "next/link";
import type { Metadata } from "next";
import { generalFaq } from "@/content/faq";
import { services } from "@/content/services";
import { FaqList } from "@/components/FaqList";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular — Empero Servisi",
  description:
    "Servis ücreti, garanti, yedek parça, aynı gün servis ve bakım anlaşması hakkında en çok sorulan sorular ve cevapları.",
  alternates: { canonical: "/sss" },
};

export default function FaqPage() {
  const all = [...generalFaq, ...services.flatMap((s) => s.faq)];

  return (
    <>
      <JsonLd
        data={[
          faqSchema(all),
          breadcrumbSchema([
            { name: "Ana Sayfa", url: site.url },
            { name: "Sıkça Sorulan Sorular", url: `${site.url}/sss` },
          ]),
        ]}
      />

      <section className="page-hero grain border-b border-ink-800">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="[&_a]:text-ink-400 [&_a:hover]:text-brand-400 [&_span]:text-ink-500 [&_[aria-current]]:text-ink-300">
            <Breadcrumbs items={[{ name: "Sıkça Sorulan Sorular", href: "/sss" }]} />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Sıkça sorulan sorular
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            Telefonda en çok karşılaştığımız soruları burada topladık. Cihaza
            özel sorular için ilgili hizmet sayfasına da bakabilirsiniz.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <FaqList items={generalFaq} title="Genel sorular" />

        {services.map((s) => (
          <div key={s.slug} className="mt-14">
            <FaqList items={s.faq} title={s.name} />
            <Link
              href={`/${s.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              {s.name} sayfasına git →
            </Link>
          </div>
        ))}

        <Cta
          title="Sorunuzun cevabı burada yoksa"
          text="Telefonda sormanız yeterli. Çoğu soruyu servis çağırmanıza gerek kalmadan cevaplayabiliyoruz."
        />
      </div>
    </>
  );
}
