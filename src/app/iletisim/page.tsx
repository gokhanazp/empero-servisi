import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site, telHref, waHref, disclaimer } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim — Servis Talebi ve Randevu",
  description:
    "Empero Servisi iletişim bilgileri. Telefon, WhatsApp ve servis talep formu. İstanbul geneli endüstriyel mutfak cihazı tamiri için randevu alın.",
  alternates: { canonical: "/iletisim" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: site.url },
          { name: "İletişim", url: `${site.url}/iletisim` },
        ])}
      />

      <section className="page-hero grain border-b border-ink-800">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="[&_a]:text-ink-400 [&_a:hover]:text-brand-400 [&_span]:text-ink-500 [&_[aria-current]]:text-ink-300">
            <Breadcrumbs items={[{ name: "İletişim", href: "/iletisim" }]} />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Servis talebi ve iletişim
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            En hızlı yol telefon. Yazmayı tercih ederseniz WhatsApp'tan ya da
            aşağıdaki formdan ulaşabilirsiniz — ikisi de aynı hatta düşüyor.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_22rem]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink-900">
              Servis talep formu
            </h2>
            <p className="mt-2 text-base leading-relaxed text-ink-600">
              Formu doldurduğunuzda bilgiler hazır bir WhatsApp mesajına
              dönüşüyor; göndermeden önce kontrol edip düzenleyebilirsiniz.
            </p>
            <div className="mt-8 rounded-2xl border border-ink-200 bg-white p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-4">
            <a
              href={telHref}
              className="block rounded-xl bg-brand-600 p-5 text-white transition-colors hover:bg-brand-700"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-100">
                Telefon
              </p>
              <p className="mt-1 text-xl font-bold">{site.phone.display}</p>
              <p className="mt-1 text-sm text-brand-100">
                Arıza çağrıları için en hızlı yol
              </p>
            </a>

            <a
              href={waHref("Merhaba, Empero cihazım için servis talebim var.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-ink-200 bg-white p-5 transition-colors hover:border-brand-300"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                WhatsApp
              </p>
              <p className="mt-1 text-xl font-bold text-ink-900">
                {site.whatsapp.display}
              </p>
              <p className="mt-1 text-sm text-ink-500">
                Cihaz etiketinin fotoğrafını buraya gönderebilirsiniz
              </p>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="block rounded-xl border border-ink-200 bg-white p-5 transition-colors hover:border-brand-300"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                E-posta
              </p>
              <p className="mt-1 text-base font-bold text-ink-900">
                {site.email}
              </p>
              <p className="mt-1 text-sm text-ink-500">
                Teklif ve bakım anlaşması talepleri için
              </p>
            </a>

            <div className="rounded-xl border border-ink-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                Adres
              </p>
              <address className="mt-2 text-sm not-italic leading-relaxed text-ink-700">
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.district} /{" "}
                {site.address.city}
              </address>
            </div>

            <div className="rounded-xl border border-ink-200 bg-ink-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                Çalışma saatleri
              </p>
              <dl className="mt-2 space-y-1 text-sm text-ink-700">
                <div className="flex justify-between gap-4">
                  <dt>Pazartesi – Cuma</dt>
                  <dd className="font-medium">{site.hours.weekday}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Cumartesi</dt>
                  <dd className="font-medium">{site.hours.saturday}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Pazar</dt>
                  <dd className="font-medium">{site.hours.sunday}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        <section className="mt-14 rounded-2xl border border-brand-200 bg-brand-50/60 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-ink-900">
            Mutfakta gaz kokusu alıyorsanız
          </h2>
          <ol className="mt-4 space-y-2 text-base leading-relaxed text-ink-700">
            <li>1. Cihazı kullanmayı bırakın.</li>
            <li>2. Ana gaz vanasını kapatın.</li>
            <li>3. Pencereleri açın, mutfağı havalandırın.</li>
            <li>
              4. Elektrik anahtarlarına ve prizlere dokunmayın, mutfakta ateş
              yakmayın.
            </li>
            <li>5. Ardından bizi arayın — bu çağrılara öncelik veriyoruz.</li>
          </ol>
        </section>

        <p className="mt-10 rounded-xl border border-ink-200 bg-ink-50 p-4 text-xs leading-relaxed text-ink-500">
          {disclaimer}
        </p>
      </div>
    </>
  );
}
