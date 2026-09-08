import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site, disclaimer, experienceYears } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda — Empero Servisi",
  description:
    "İstanbul'da endüstriyel mutfak cihazlarına servis veren bağımsız teknik servisiz. Nasıl çalıştığımız, ekibimiz ve müşterilerimize verdiğimiz sözler.",
  alternates: { canonical: "/hakkimizda" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: site.url },
          { name: "Hakkımızda", url: `${site.url}/hakkimizda` },
        ])}
      />

      <section className="page-hero grain border-b border-ink-800">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="[&_a]:text-ink-400 [&_a:hover]:text-brand-400 [&_span]:text-ink-500 [&_[aria-current]]:text-ink-300">
            <Breadcrumbs items={[{ name: "Hakkımızda", href: "/hakkimizda" }]} />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Mutfağın durmasına izin vermeyen bir servis
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            {experienceYears} yılı aşkın süredir İstanbul'daki ticari
            mutfaklarda endüstriyel cihaz bakım ve onarımı yapıyoruz. İşimizin
            özü basit: arızayı gidermek ve bir daha aynı sebeple gelmemek.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <div className="prose-tr text-[1.0625rem]">
          <p>
            Bu iş, atölyede tek başına çalışan bir teknisyenin işi olarak
            başladı. O dönem müşterilerin çoğu Kadıköy ve Ümraniye çevresindeki
            esnaf lokantalarıydı; arıza çağrısı geldiğinde çantayla otobüse
            binilirdi. Bugün İstanbul'un iki yakasında da ekiplerimiz var, ama
            işi yapma biçimimiz o günden çok değişmedi.
          </p>
          <p>
            Değişmeyen şey şu: cihazı bilmeyen adam parça değiştirerek tamir
            etmeye çalışır. Bilen adam önce ölçer. Bir fritöz ısınmıyorsa
            rezistansı hemen sökmek yerine, emniyet termostatının neden attığına
            bakmak gerekir. Bir soğutucu soğutmuyorsa gaz basmadan önce
            kondenserin ne halde olduğuna bakmak gerekir. Bu sıralamayı doğru
            kurmak, hem sizin paranızı hem bizim zamanımızı koruyor.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink-900">
            Nasıl çalışıyoruz
          </h2>
          <p>
            Telefonda arızayı anlatırken teknik terim beklemiyoruz. Mutfakta
            çalışan bir kişinin gördüğü şeyi kendi cümleleriyle anlatması bizim
            için yeterli — hatta daha faydalı. "Düğmeyi bırakınca sönüyor",
            "tabaklar ıslak çıkıyor", "eskisi kadar hızlı kaynamıyor" gibi
            tarifler, teknisyenin araca hangi parçayı koyacağını belirliyor.
          </p>
          <p>
            Yerinde çalışırken açık davranmaya çalışıyoruz. Ne bulduğumuzu,
            hangi parçanın neden değişeceğini ve ne kadar tutacağını işe
            başlamadan söylüyoruz. Onay vermeden hiçbir parça değişmiyor.
            Değiştirdiğimiz parçaların eskisini yerinde bırakıyoruz; ödediğiniz
            paranın karşılığını görmenin en basit yolu bu.
          </p>
          <p>
            Bazen en doğru tavsiye "tamir ettirmeyin" oluyor. Yaşı ilerlemiş,
            izolasyonu su almış bir soğutucuya kompresör takmak ya da kaynağı
            tutmayacak bir fritöz kazanını onarmaya çalışmak kimsenin işine
            yaramıyor. Böyle durumlarda maliyetleri yan yana koyup kararı size
            bırakıyoruz.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink-900">
            Kimlerle çalışıyoruz
          </h2>
          <p>
            Müşterilerimiz arasında tek ocaklı esnaf lokantaları da var, günde
            yüzlerce kişilik üretim yapan catering mutfakları da. İkisinin
            ihtiyacı farklı: küçük işletmede tamirin hızlı ve ekonomik olması
            önemli, büyük mutfakta ise arızanın hiç olmaması. Bu yüzden ölçeğe
            göre farklı program kuruyoruz — biri için hızlı çağrı servisi,
            diğeri için planlı bakım takvimi.
          </p>
          <p>
            Otel, zincir restoran ve fabrika yemekhaneleriyle yıllık bakım
            anlaşmalarıyla çalışıyoruz. Bu anlaşmalarda arıza çağrılarına
            öncelik veriyor, servis ücretini sabitliyor ve her cihazın bakım
            geçmişini kayıt altında tutuyoruz. Üç yıl sonra bir cihaza yeniden
            yatırım yapıp yapmama kararı verirken bu kayıt en değerli veri
            oluyor.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink-900">
            Marka ilişkimiz konusunda net olalım
          </h2>
          <p>
            {disclaimer} Cihazınız hâlâ üretici garantisi kapsamındaysa önce
            yetkili servise başvurmanızı öneririz; garanti kapsamındaki bir
            işlem için ücret ödemenize gerek kalmaz. Garanti dışı cihazlarda,
            garanti süresi biten cihazlarda ve yetkili servisin ulaşamadığı
            durumlarda bizim devreye girdiğimiz alan başlıyor.
          </p>
          <p>
            Bu ayrımı sitenin her sayfasında yazıyoruz, çünkü müşterinin kiminle
            çalıştığını bilmesi gerektiğini düşünüyoruz. Kendimizi yetkili
            servis gibi göstererek iş almak, ilk telefonda kazandığını ikinci
            telefonda kaybettiren bir yöntem.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            {
              t: "Ölçmeden parça değiştirmiyoruz",
              d: "Her müdahale ölçümle başlıyor. Basınç, direnç, sıcaklık — hangisi gerekiyorsa.",
            },
            {
              t: "Fiyatı önce söylüyoruz",
              d: "Parça ve işçilik bedeli işe başlamadan netleşiyor. Faturada sürpriz kalem çıkmıyor.",
            },
            {
              t: "Sebebini de anlatıyoruz",
              d: "Parçanın neden bozulduğunu söylemezsek altı ay sonra aynı yerde buluşuruz.",
            },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-xl border border-ink-200 bg-white p-5"
            >
              <h2 className="text-base font-bold text-ink-900">{x.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{x.d}</p>
            </div>
          ))}
        </div>

        <Cta />
      </div>
    </>
  );
}
