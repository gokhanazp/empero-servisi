import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site, disclaimer } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası ve KVKK Aydınlatma Metni",
  description:
    "Empero Servisi olarak kişisel verilerinizi nasıl işlediğimize dair aydınlatma metni ve gizlilik politikası.",
  alternates: { canonical: "/gizlilik-politikasi" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero grain border-b border-ink-800">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:py-14">
          <div className="[&_a]:text-ink-400 [&_a:hover]:text-brand-400 [&_span]:text-ink-500 [&_[aria-current]]:text-ink-300">
            <Breadcrumbs
              items={[
                { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
              ]}
            />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Gizlilik Politikası ve KVKK Aydınlatma Metni
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <div className="prose-tr text-[1.0625rem]">
          <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <strong>Not:</strong> Aşağıdaki metin genel bir taslaktır. Yayına
            almadan önce firma unvanınız, vergi bilgileriniz ve varsa veri
            sorumlusu temsilciniz eklenerek bir hukukçu tarafından gözden
            geçirilmelidir.
          </p>

          <h2 className="mt-10 text-xl font-bold text-ink-900">
            1. Veri sorumlusu
          </h2>
          <p>
            Bu internet sitesi {site.legalName} tarafından işletilmektedir.
            İletişim: {site.email} · {site.phone.display}
          </p>

          <h2 className="mt-10 text-xl font-bold text-ink-900">
            2. Hangi verileri işliyoruz
          </h2>
          <p>
            Servis talebi oluşturduğunuzda ad-soyad, telefon numarası, işletme
            adı, adres/bölge bilgisi ve arıza tarifiniz işlenir. Bu veriler
            yalnızca talebinizin karşılanması, randevu planlanması, servis
            kaydının tutulması ve yasal saklama yükümlülüklerinin yerine
            getirilmesi amacıyla kullanılır.
          </p>
          <p>
            Sitede iletişim formu, doldurduğunuz bilgileri sunucumuza
            göndermeden doğrudan WhatsApp üzerinden iletecek şekilde
            çalışmaktadır. Bu durumda verileriniz WhatsApp'ın kendi gizlilik
            politikası kapsamında da işlenir.
          </p>

          <h2 className="mt-10 text-xl font-bold text-ink-900">
            3. Çerezler
          </h2>
          <p>
            Site, çalışması için zorunlu olan teknik çerezler dışında pazarlama
            amaçlı çerez kullanmamaktadır. Ziyaretçi istatistikleri için analiz
            aracı eklenmesi hâlinde bu bölüm güncellenecek ve çerez onayı
            alınacaktır.
          </p>

          <h2 className="mt-10 text-xl font-bold text-ink-900">
            4. Verilerin saklanması ve paylaşımı
          </h2>
          <p>
            Servis kayıtları, ilgili mevzuatın öngördüğü süre boyunca saklanır.
            Verileriniz, yasal zorunluluk hâlleri dışında üçüncü kişilerle
            paylaşılmaz; pazarlama amacıyla satılmaz veya devredilmez.
          </p>

          <h2 className="mt-10 text-xl font-bold text-ink-900">
            5. Haklarınız
          </h2>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 11. maddesi
            uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme,
            işlenmişse buna ilişkin bilgi talep etme, düzeltilmesini veya
            silinmesini isteme haklarına sahipsiniz. Taleplerinizi{" "}
            {site.email} adresine iletebilirsiniz.
          </p>

          <h2 className="mt-10 text-xl font-bold text-ink-900">
            6. Marka kullanımı hakkında
          </h2>
          <p>{disclaimer}</p>
        </div>
      </div>
    </>
  );
}
