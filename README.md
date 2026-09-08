# Empero Servisi — Next.js + Tailwind SEO Sitesi

Endüstriyel mutfak teknik servisi için hazırlanmış, tamamen statik üretilen
(SSG) ve SEO odaklı kurumsal site.

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (config dosyası yok, tema `globals.css` içinde)
- 52 sayfa, tamamı build sırasında statik HTML olarak üretiliyor
- Harici font/JS yüklemesi yok → hızlı LCP

---

## 1. Kurulum

```bash
npm install
npm run dev      # http://localhost:3000
```

Yayın için:

```bash
npm run build
npm run start
```

---

## 2. İLK YAPILACAK: kendi bilgilerinizi girin

Tek bir dosyayı düzenlemeniz yeterli — telefon, WhatsApp, adres, alan adı,
çalışma saatleri, sosyal medya ve Google doğrulama kodu buradan tüm siteye,
JSON‑LD şemalarına ve sitemap'e yayılır:

```
src/lib/site.ts
```

> **Önemli:** `site.url` alanına gerçek alan adınızı yazmadan yayına
> almayın. Canonical etiketleri, sitemap ve OG görselleri bu değeri
> kullanıyor.

---

## 3. Klasör yapısı

```
src/
├─ app/
│  ├─ layout.tsx                 kök şablon, global metadata, JSON-LD
│  ├─ page.tsx                   ana sayfa
│  ├─ [servis]/page.tsx          6 hizmet sayfası (kök seviyede URL)
│  ├─ bolgeler/                  ilçe listesi + ilçe sayfaları
│  ├─ blog/                      blog listesi + yazı sayfaları
│  ├─ hizmetler/ hakkimizda/ iletisim/ sss/ gizlilik-politikasi/
│  ├─ sitemap.ts  robots.ts  manifest.ts
│  └─ globals.css                marka renkleri ve tipografi
│
├─ components/                   Header, Footer, CTA, SSS, form vb.
│
├─ content/                      TÜM METİNLER BURADA
│  ├─ services/                  ocak, fritöz, bulaşık, fırın, buzdolabı, yer ocağı
│  ├─ districts.ts               28 İstanbul ilçesi
│  ├─ blog.ts                    5 uzun yazı
│  └─ faq.ts                     genel SSS
│
└─ lib/
   ├─ site.ts                    ← ayarlar
   ├─ schema.ts                  JSON-LD üreticileri
   └─ types.ts
```

---

## 4. İçerik eklemek

**Yeni hizmet:** `src/content/services/` altına yeni bir dosya açıp
`Service` tipine göre doldurun, `services/index.ts` içine ekleyin.
Sayfa, sitemap ve menü otomatik oluşur.

**Yeni ilçe:** `src/content/districts.ts` dizisine yeni bir kayıt ekleyin.
Her ilçenin metni özgün olmalı — aynı metni ilçe adı değiştirerek
çoğaltmak Google tarafından "doorway page" olarak değerlendirilir ve
sıralamaya zarar verir.

**Yeni blog yazısı:** `src/content/blog.ts` dizisine ekleyin.

---

## 5. SEO kontrol listesi (yayın öncesi)

- [ ] `src/lib/site.ts` içindeki tüm bilgiler gerçek değerlerle değiştirildi
- [ ] Alan adı SSL ile yayında, `www`/`non-www` yönlendirmesi tek yöne ayarlı
- [ ] Google Search Console'a site eklendi ve `sitemap.xml` gönderildi
- [ ] Google Business Profile (İşletme Profili) oluşturuldu; ad, adres ve
      telefon sitedekiyle **birebir aynı** yazıldı (NAP tutarlılığı)
- [ ] `site.googleSiteVerification` alanına doğrulama kodu eklendi
- [ ] OG görseli (`public/og-image.png`) kendi görselinizle değiştirildi
- [ ] Gizlilik politikası bir hukukçu tarafından gözden geçirildi

### Sitede zaten hazır olanlar

- Her sayfada benzersiz `title`, `description` ve `canonical`
- OpenGraph + Twitter Card etiketleri
- JSON‑LD: LocalBusiness, Service, FAQPage, BreadcrumbList, Article, ItemList
- `sitemap.xml` ve `robots.txt` otomatik üretiliyor
- Sayfa başına tek `h1`, anlamlı başlık hiyerarşisi
- Mobil öncelikli tasarım, tıkla‑ara çubuğu
- Erişilebilirlik: skip link, odak halkaları, `aria` etiketleri

---

## 6. Yayına alma — Cloudflare

Proje **statik export** olarak yapılandırıldı (`next.config.ts` içinde
`output: "export"`). `npm run build` çalıştırdığınızda tüm site saf HTML
olarak `out/` klasörüne çıkıyor — sunucu, Node çalışma zamanı, adaptör
gerekmiyor.

### Cloudflare Pages (önerilen)

Panelden **Workers & Pages → Create → Pages → Connect to Git** ve bu depoyu
seçin. Ayarlar:

| Alan | Değer |
| --- | --- |
| Framework preset | None (ya da Next.js Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | `22` (Environment variables → `NODE_VERSION=22`) |

`main` dalına her push'ta otomatik yayına alınır.

### Cloudflare Workers (Static Assets)

Depoda hazır `wrangler.jsonc` var:

```bash
npm run build
npx wrangler deploy
```

### Alan adı

Cloudflare'de **Custom domains** bölümünden alan adınızı bağlayın.
Bağladıktan sonra `src/lib/site.ts` içindeki `site.url` değerinin bu adresle
**birebir aynı** olduğundan emin olun (www var/yok farkı dahil) — canonical
etiketleri ve sitemap oradan üretiliyor.

Cloudflare'de tek yöne yönlendirme kuralı da kurun (örn. apex → www).
İki adres birden açık kalırsa Google içeriği çift indeksler.

### Başlıklar ve önbellek

`public/_headers` dosyası build sırasında `out/` içine kopyalanıyor ve
Cloudflare tarafından otomatik okunuyor. Güvenlik başlıkları ve görsel
önbellek kuralları orada.

> Not: Statik export'ta `next.config.ts` içindeki `headers()` fonksiyonu
> çalışmaz; bu yüzden kurallar `_headers` dosyasına taşındı.

### İleride sunucu tarafı bir şey eklerseniz

API route, form gönderimi, ISR gibi bir ihtiyaç doğarsa `output: "export"`
satırını kaldırıp Cloudflare tarafında `@opennextjs/cloudflare` adaptörüne
geçmeniz gerekir. Şu anki site tamamen statik olduğu için buna gerek yok.

---

## 7. Yasal not

Site, **bağımsız özel servis** olarak kurgulanmıştır. Her sayfada
"Empero'nun yetkili servisi değildir" ibaresi bulunur ve markanın kendi
logosu kullanılmaz. Bu ibareyi kaldırmak hem marka hakkı açısından risk
oluşturur hem de Google'ın yanıltıcı marka kullanımı politikalarına takılma
ihtimalini artırır.
