"use client";

import { useState } from "react";
import { services } from "@/content/services";
import { districts } from "@/content/districts";
import { waHref } from "@/lib/site";

/**
 * Sunucu tarafı gerektirmeyen talep formu. Gönderildiğinde bilgiler
 * WhatsApp mesajına dönüştürülür. Sunucuya form gönderimi isterseniz
 * handleSubmit içindeki wa.me yönlendirmesini kendi API adresinizle
 * değiştirmeniz yeterli.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const lines = [
      "Servis talebi",
      `Ad Soyad: ${form.get("ad")}`,
      `İşletme: ${form.get("isletme") || "-"}`,
      `Telefon: ${form.get("telefon")}`,
      `Bölge: ${form.get("bolge")}`,
      `Cihaz: ${form.get("cihaz")}`,
      `Arıza: ${form.get("ariza")}`,
    ];
    setSent(true);
    window.open(waHref(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const fieldClass =
    "mt-1.5 w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none";
  const labelClass = "block text-sm font-semibold text-ink-800";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ad" className={labelClass}>
            Ad Soyad <span className="text-brand-600">*</span>
          </label>
          <input id="ad" name="ad" required autoComplete="name" className={fieldClass} placeholder="Adınız" />
        </div>
        <div>
          <label htmlFor="isletme" className={labelClass}>
            İşletme adı
          </label>
          <input id="isletme" name="isletme" autoComplete="organization" className={fieldClass} placeholder="Restoran / otel / firma" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="telefon" className={labelClass}>
            Telefon <span className="text-brand-600">*</span>
          </label>
          <input id="telefon" name="telefon" type="tel" required autoComplete="tel" inputMode="tel" className={fieldClass} placeholder="05xx xxx xx xx" />
        </div>
        <div>
          <label htmlFor="bolge" className={labelClass}>
            Bölge <span className="text-brand-600">*</span>
          </label>
          <select id="bolge" name="bolge" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              İlçe seçin
            </option>
            {districts.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.name}
              </option>
            ))}
            <option value="Diğer">Diğer / listede yok</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cihaz" className={labelClass}>
          Cihaz <span className="text-brand-600">*</span>
        </label>
        <select id="cihaz" name="cihaz" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Cihaz seçin
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Diğer endüstriyel mutfak cihazı">
            Diğer endüstriyel mutfak cihazı
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="ariza" className={labelClass}>
          Arızayı kısaca anlatın <span className="text-brand-600">*</span>
        </label>
        <textarea
          id="ariza"
          name="ariza"
          required
          rows={4}
          className={fieldClass}
          placeholder="Örn: Sol arka göz düğmeyi bırakınca sönüyor, iki gündür böyle."
        />
        <p className="mt-1.5 text-xs text-ink-500">
          Teknik terim gerekmiyor. Cihazın model etiketinin fotoğrafını
          WhatsApp'tan gönderirseniz teknisyen parçayı yanında getirir.
        </p>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-brand-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto"
      >
        Talebi WhatsApp'tan gönder
      </button>

      {sent && (
        <p role="status" className="rounded-lg bg-brand-50 px-4 py-3 text-sm text-brand-800">
          WhatsApp penceresi açıldı. Açılmadıysa telefonunuzdan doğrudan
          yazabilir ya da bizi arayabilirsiniz.
        </p>
      )}
    </form>
  );
}
