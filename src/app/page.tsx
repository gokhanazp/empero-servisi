import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/content/services";
import { districts } from "@/content/districts";
import { generalFaq } from "@/content/faq";
import { posts } from "@/content/blog";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ProductImage } from "@/components/ProductImage";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqList } from "@/components/FaqList";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, itemListSchema } from "@/lib/schema";
import { site, telHref, waHref, experienceYears } from "@/lib/site";

export const metadata: Metadata = {
  title: "Empero Servisi | Ocak, Fritöz, Fırın ve Bulaşık Makinesi Tamiri",
  description:
    "Empero ocak, fritöz, bulaşık makinesi, fırın, buzdolabı, yer ocağı, ızgara ve benmari servisi. İstanbul geneli yerinde tamir, aynı gün müdahale, garantili işçilik.",
  alternates: { canonical: "/" },
};

const icons = {
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  tag: (
    <>
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
};

const guarantees = [
  {
    icon: icons.wrench,
    title: "Yerinde çözüm",
    text: "Arızaların neredeyse tamamı mutfağınızda bitiyor. Cihazın atölyeye taşınması çok nadir gerekiyor.",
  },
  {
    icon: icons.tag,
    title: "Önce fiyat, sonra işlem",
    text: "Parça ve işçilik bedelini işe başlamadan söylüyoruz. Onayınız olmadan hiçbir parça değişmiyor.",
  },
  {
    icon: icons.shield,
    title: "Garantili işçilik",
    text: "Değiştirilen parçaya ve yapılan işe garanti veriyoruz. Aynı arıza tekrarlarsa ikinci ücret çıkmıyor.",
  },
  {
    icon: icons.clock,
    title: "Mutfak saatinize göre",
    text: "Servis saatini kapanış sonrasına ya da mutfağın en sakin saatine alabiliyoruz.",
  },
];

const steps = [
  {
    n: "01",
    title: "Arızayı anlatın",
    text: "Teknik terim gerekmiyor. \"Düğmeyi bırakınca sönüyor\" ya da \"tabaklar ıslak çıkıyor\" gibi bir tarif yeterli. Cihazın etiket fotoğrafını gönderirseniz teknisyen parçayı yanında getirir.",
  },
  {
    n: "02",
    title: "Randevuyu birlikte belirleyelim",
    text: "Mutfağınızın yoğun saatlerini bloke etmeyecek bir zaman aralığı seçiyoruz. Acil çağrılarda aynı gün yönlendirme yapıyoruz.",
  },
  {
    n: "03",
    title: "Yerinde tespit ve fiyat",
    text: "Teknisyen ölçüm yapıp arızayı tespit ediyor, ne yapılacağını ve maliyetini söylüyor. Onayınız olmadan işleme geçilmiyor.",
  },
  {
    n: "04",
    title: "Tamir ve birlikte test",
    text: "İş bittiğinde cihazı sizinle beraber çalıştırıyoruz. Değişen parçanın eskisini yerinde bırakıyor, faturayı ve garanti belgesini teslim ediyoruz.",
  },
];

export default function HomePage() {
  const featuredPosts = posts.slice(0, 3);
  const anadolu = districts.filter((d) => d.side === "Anadolu");
  const avrupa = districts.filter((d) => d.side === "Avrupa");

  return (
    <>
      <JsonLd
        data={[
          faqSchema(generalFaq.slice(0, 8)),
          itemListSchema(
            services.map((s) => ({ name: s.name, url: `${site.url}/${s.slug}` }))
          ),
        ]}
      />

      {/* ================= HERO ================= */}
      <section className="grain relative isolate overflow-hidden bg-ink-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-brand-600/30 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 h-[26rem] w-[26rem] rounded-full bg-brand-800/25 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
          }}
        />

        {/* Header bu bölümün üzerine biniyor; üst boşluk ona göre. */}
        <div className="relative mx-auto max-w-6xl px-4 pb-28 pt-28 sm:pb-32 sm:pt-32 lg:pt-40">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-200 backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
                </span>
                İstanbul geneli · Aynı gün servis
              </p>

              <h1 className="mt-6 text-[2.125rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.75rem] lg:text-[3.125rem]">
                Empero ocak, fritöz ve fırın tamirinde{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 bg-clip-text text-transparent">
                    yerinde çözüm
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-brand-600 to-brand-600/0"
                  />
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-300 sm:text-lg">
                {experienceYears} yılı aşkın süredir İstanbul'daki restoran,
                otel, catering ve fabrika mutfaklarında Empero markalı
                endüstriyel cihazlara bakım ve onarım yapıyoruz. Arızaların
                büyük kısmını ilk ziyarette, mutfağınızda bitiriyoruz.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={telHref}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-600 px-7 py-4 text-base font-semibold text-white shadow-[0_10px_30px_-8px_rgba(209,18,26,0.65)] ring-1 ring-inset ring-white/15 transition-all hover:bg-brand-500 hover:shadow-[0_14px_36px_-8px_rgba(209,18,26,0.8)]"
                >
                  <svg viewBox="0 0 24 24" className="h-[1.125rem] w-[1.125rem] transition-transform group-hover:-rotate-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {site.phone.display}
                </a>
                <a
                  href={waHref("Merhaba, Empero cihazım için servis talebim var.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:border-white/25 hover:bg-white/[0.09]"
                >
                  <svg viewBox="0 0 24 24" className="h-[1.125rem] w-[1.125rem] text-[#25D366]" fill="currentColor" aria-hidden="true">
                    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.2 5.07 4.48.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.88-9.9 9.88M20.52 3.45A11.8 11.8 0 0 0 12.05 0C5.49 0 .16 5.33.16 11.88c0 2.1.55 4.14 1.6 5.95L.06 24l6.33-1.66a11.86 11.86 0 0 0 5.66 1.44h.01c6.55 0 11.89-5.33 11.89-11.88 0-3.17-1.24-6.16-3.48-8.4" />
                  </svg>
                  WhatsApp'tan yazın
                </a>
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-7">
                {[
                  { k: "Deneyim", v: `${experienceYears}+`, s: "yıl sahada" },
                  { k: "Servis ağı", v: "39", s: "İstanbul ilçesi" },
                  { k: "Cihaz grubu", v: String(services.length), s: "uzmanlık alanı" },
                ].map((x, i) => (
                  <div key={x.k} className={i === 0 ? "pr-4 sm:pr-5" : "px-4 sm:px-5"}>
                    <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-ink-500 sm:text-[0.6875rem] sm:tracking-[0.14em]">
                      {x.k}
                    </dt>
                    <dd className="mt-1.5 text-2xl font-bold leading-none text-white sm:text-[1.75rem]">
                      {x.v}
                      <span className="mt-1 block text-[0.6875rem] font-normal text-ink-400 sm:text-xs">
                        {x.s}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Cihaz ızgarası — hairline grid */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-white/[0.07] to-transparent blur-sm"
              />
              <div className="relative grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08]">
                {services.map((s, i) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="group relative bg-ink-950/85 p-4 transition-colors hover:bg-ink-900"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-brand-500 to-transparent transition-transform duration-300 group-hover:scale-x-100"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-6 bottom-8 h-10 rounded-full bg-brand-500/0 blur-2xl transition-colors duration-300 group-hover:bg-brand-500/25"
                    />
                    <span className="relative flex h-[5.5rem] items-center justify-center">
                      <ProductImage
                        service={s}
                        sizes="180px"
                        priority={i < 2}
                        className="h-[5.5rem] w-auto object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-[1.06]"
                      />
                    </span>
                    <span className="mt-3 block text-[0.8125rem] font-semibold text-white">
                      Empero {s.shortName}
                    </span>
                    <span className="mt-0.5 flex items-center gap-1 text-[0.6875rem] text-ink-500">
                      Servis · Tamir
                      <svg viewBox="0 0 24 24" className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GÜVENCELER (hero'ya binen kartlar) ========== */}
      <section className="relative z-10 -mt-16 sm:-mt-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-px overflow-hidden rounded-2xl bg-ink-200 shadow-[0_20px_50px_-20px_rgba(11,11,11,0.35)] ring-1 ring-ink-200 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((g) => (
              <div
                key={g.title}
                className="group bg-white p-6 transition-colors hover:bg-brand-50/40"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                  <svg viewBox="0 0 24 24" className="h-[1.125rem] w-[1.125rem]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {g.icon}
                  </svg>
                </span>
                <h2 className="mt-4 text-[0.9375rem] font-bold tracking-tight text-ink-900">
                  {g.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                  {g.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HİZMETLER ================= */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <SectionHeading
          eyebrow="Cihaz servisleri"
          title="Servis verdiğimiz Empero cihazları"
          text="Sekiz cihaz grubunda hem arıza onarımı hem periyodik bakım yapıyoruz. Her cihazın sayfasında sık görülen arızaları, sebeplerini ve nasıl müdahale ettiğimizi ayrıntılı anlattık."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="card-lift group relative flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgba(11,11,11,0.28)]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand-600 to-brand-400 transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-ink-100/70 via-ink-50/40 to-white">
                <span
                  aria-hidden="true"
                  className="absolute bottom-4 h-8 w-2/3 rounded-[50%] bg-ink-900/10 blur-xl"
                />
                <ProductImage
                  service={s}
                  sizes="(min-width: 1024px) 320px, 90vw"
                  className="relative h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                />
                <span className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/85 text-brand-600 shadow-sm ring-1 ring-ink-200/70 backdrop-blur">
                  <ServiceIcon icon={s.icon} className="h-[1.125rem] w-[1.125rem]" />
                </span>
                <span className="absolute right-3 top-3 font-mono text-xs font-semibold tracking-widest text-ink-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold tracking-tight text-ink-900">
                <Link href={`/${s.slug}`} className="hover:text-brand-700">
                  {s.name}
                </Link>
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                {s.teaser}
              </p>

              <ul className="mt-5 space-y-1.5 border-t border-ink-100 pt-4">
                {s.symptoms.slice(0, 2).map((sym) => (
                  <li
                    key={sym.title}
                    className="flex items-start gap-2 text-[0.8125rem] text-ink-500"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.4375rem] h-1 w-1 shrink-0 rounded-full bg-brand-400"
                    />
                    {sym.title}
                  </li>
                ))}
              </ul>

              <Link
                href={`/${s.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Detaylı bilgi
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ================= SÜREÇ (koyu bant) ================= */}
      <section className="grain relative overflow-hidden bg-ink-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-brand-700/20 blur-[100px]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <SectionHeading
            light
            eyebrow="Süreç"
            title="Servis çağırdığınızda ne oluyor"
            text="Dört adım. Her adımda ne olacağını önceden biliyorsunuz, faturada sürpriz kalem çıkmıyor."
          />

          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.n} className="relative">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(209,18,26,0.9)]">
                    {s.n}
                  </span>
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-px flex-1 bg-gradient-to-r from-white/20 to-transparent lg:block"
                    />
                  )}
                </div>
                <h3 className="mt-5 text-base font-bold tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= EDİTORYAL İÇERİK ================= */}
      <section className="border-b border-ink-100 bg-ink-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[20rem_1fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Yaklaşımımız"
                title="Arıza çoğu zaman bir günde oluşmaz"
              />
              <p className="mt-6 border-l-2 border-brand-500 pl-4 text-base font-medium leading-relaxed text-ink-800">
                &ldquo;Yanan bir rezistansı değiştirmek yarım saatlik iş. Ama
                neden yandığını söylemezsek altı ay sonra aynı yerde
                buluşuyoruz.&rdquo;
              </p>
            </div>

            <div className="prose-tr max-w-2xl text-[1.0625rem]">
              <p className="text-lg leading-relaxed text-ink-800">
                Mutfak ekipmanı, ev cihazlarıyla aynı mantıkla çalışmıyor. Bir
                restoran ocağı günde on dört saat açık kalıyor, bir bulaşık
                makinesi bir vardiyada yüzü aşkın çevrim yapıyor, bir soğutucu
                kapısı günde yüzlerce kez açılıp kapanıyor. Bu yükün altında
                parçalar birden bozulmuyor; yavaş yavaş performans kaybediyor.
              </p>
              <p>
                Alev önce zayıflıyor, tabaklar önce hafif ıslak çıkıyor, dolap
                önce biraz geç soğutuyor. Sorun şu ki mutfak ekibi bu yavaş
                değişime alışıyor. Kaynama süresi on dakika uzadığında kimse
                fark etmiyor, çünkü değişim haftalara yayılmış oluyor. Servise
                çağrıldığımızda cihaz genellikle tamamen durmuş oluyor ve o
                noktada hem tamir daha pahalı hem de mutfak duruşu kaçınılmaz
                hale gelmiş oluyor.
              </p>
              <p>
                Bizim yaklaşımımız, arızayı gidermenin yanında sebebini de
                söylemek üzerine kurulu. Bulaşık makinesindeki rezistans su
                sertliğinden yanıyorsa, çözüm parça değişimi değil su tarafını
                düzeltmek. Fritözdeki yağ çabuk kararıyorsa, sorun yağ
                markasında değil termostatın kaç derece tuttuğunda olabilir.
              </p>
              <p>
                Bu yüzden servis sonrası sadece fatura bırakmıyoruz. Cihazda ne
                bulduğumuzu, hangi parçanın neden değiştiğini ve bir sonraki
                bakıma kadar nelere dikkat edilmesi gerektiğini yazılı olarak
                veriyoruz. Değiştirdiğimiz parçaların eskisini de yerinde
                bırakıyoruz — ödediğiniz paranın karşılığını görmeniz için en
                basit yol bu.
              </p>

              <h3 className="mt-10 text-xl font-bold tracking-tight text-ink-900">
                Hangi işletmelerle çalışıyoruz
              </h3>
              <p>
                Müşterilerimizin bir kısmı tek ocaklı esnaf lokantaları, bir
                kısmı yüzlerce kişilik üretim yapan catering mutfakları. İkisinin
                ihtiyacı da farklı. Küçük işletmelerde önemli olan tamirin ucuz
                ve hızlı olması; büyük mutfaklarda ise arızanın hiç olmaması,
                yani planlı bakım. Aynı hizmeti iki tarafa da aynı biçimde
                sunmak yerine, ölçeğe göre farklı program kuruyoruz.
              </p>
              <p>
                Otel ve zincir işletmelerde cihaz sayısı arttıkça bakım geçmişini
                kayıt altında tutmak önem kazanıyor. Hangi cihaza ne zaman ne
                yapıldığını bilmek, tekrarlayan arızaları görmeyi ve hangi
                cihazın ekonomik ömrünü doldurduğunu anlamayı sağlıyor. Bu kaydı
                anlaşmalı çalıştığımız işletmeler için biz tutuyoruz.
              </p>

              <h3 className="mt-10 text-xl font-bold tracking-tight text-ink-900">
                Yedek parçada dürüst olmak
              </h3>
              <p>
                Endüstriyel mutfak cihazlarında parça kalitesi, işçilikten daha
                belirleyici olabiliyor. Aynı işi gören iki termokupl arasında
                beş kat fiyat farkı olabiliyor ve ucuz olanı birkaç ay içinde
                aynı arızayı geri getirebiliyor. Servis aracımızda hem orijinal
                hem kaliteli muadil parçaları birlikte taşıyoruz; aradaki fiyat
                ve ömür farkını söyleyip tercihi size bırakıyoruz.
              </p>
              <p>
                Bunun bir istisnası var: güvenlik açısından kritik parçalarda —
                gaz emniyet valfi, termokupl, fritöz emniyet termostatı —
                kalitesiz muadil kullanmıyoruz. Bu parçalar cihazın kendini
                kapatmasını sağlayan parçalar ve orada tasarruf yapmanın
                karşılığı yok.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BÖLGELER ================= */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <SectionHeading
          eyebrow="Servis ağı"
          title="Ağırlıklı olarak Avrupa Yakası'nda çalışıyoruz"
          text="Ekiplerimizin büyük kısmı Avrupa yakasında konumlanıyor; bu bölgedeki çağrılara genellikle aynı gün ulaşıyoruz. Anadolu yakasına da servis veriyoruz. Bölgenizin mutfak profiline dair sahada edindiğimiz notları ilçe sayfalarında bulabilirsiniz."
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {[
            { title: "Avrupa Yakası", items: avrupa, oncelikli: true },
            { title: "Anadolu Yakası", items: anadolu, oncelikli: false },
          ].map((group) => (
            <div key={group.title}>
              <h3 className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-bold uppercase tracking-[0.12em] text-ink-900">
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${group.oncelikli ? "bg-brand-600" : "bg-ink-300"}`}
                />
                {group.title}
                <span className="text-xs font-medium tracking-normal text-ink-400">
                  {group.items.length} ilçe
                </span>
                {group.oncelikli && (
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[0.625rem] font-bold tracking-[0.08em] text-brand-700 ring-1 ring-inset ring-brand-100">
                    Yoğun servis bölgemiz
                  </span>
                )}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/bolgeler/${d.slug}`}
                      className="inline-block rounded-lg border border-ink-200 bg-white px-3.5 py-2 text-[0.8125rem] font-medium text-ink-700 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink-500">
          Listede olmayan ilçelere de gidiyoruz —{" "}
          <Link href="/bolgeler" className="font-semibold text-brand-600 hover:underline">
            tüm servis bölgeleri
          </Link>
        </p>
      </section>

      {/* ================= BLOG ================= */}
      <section className="border-y border-ink-100 bg-ink-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Mutfaktan notlar"
              title="Servis çağırmadan önce okumaya değer"
              text="Sahada en sık karşılaştığımız arızaları, sebeplerini ve önlenebilir olanları yazıyoruz."
            />
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              Tüm yazılar
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featuredPosts.map((p) => (
              <article
                key={p.slug}
                className="card-lift group flex flex-col rounded-2xl border border-ink-200 bg-white p-6 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgba(11,11,11,0.28)]"
              >
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-brand-600">
                  {p.category}
                </p>
                <h3 className="mt-3 text-base font-bold leading-snug tracking-tight text-ink-900">
                  <Link href={`/blog/${p.slug}`} className="group-hover:text-brand-700">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-600">
                  {p.excerpt}
                </p>
                <p className="mt-5 flex items-center gap-2 border-t border-ink-100 pt-4 text-xs text-ink-400">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  {p.readingMinutes} dakikalık okuma
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SSS + CTA ================= */}
      <section className="mx-auto max-w-4xl px-4 pb-4 pt-20 sm:pt-24">
        <SectionHeading
          eyebrow="Sorular"
          title="Sıkça sorulan sorular"
          text="Telefonda en çok karşılaştığımız sorular. Cihaza özel olanlar için ilgili hizmet sayfasına da bakabilirsiniz."
        />
        <div className="mt-10">
          <FaqList items={generalFaq.slice(0, 8)} />
        </div>
        <p className="mt-5 text-sm text-ink-500">
          Daha fazlası için{" "}
          <Link href="/sss" className="font-semibold text-brand-600 hover:underline">
            tüm soruları
          </Link>{" "}
          inceleyebilirsiniz.
        </p>

        <Cta />
      </section>
    </>
  );
}
