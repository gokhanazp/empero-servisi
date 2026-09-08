import Link from "next/link";
import { services } from "@/content/services";
import { avrupaIlceleri } from "@/content/districts";
import { site, disclaimer, telHref, waHref } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative border-t border-ink-800 bg-ink-950 text-ink-300">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-600/70 to-transparent"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-extrabold tracking-tight text-white">
              EMPERO<span className="text-brand-500">SERVİSİ</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              Empero markalı endüstriyel mutfak cihazlarında bakım, onarım ve
              periyodik servis. İstanbul'un iki yakasında yerinde müdahale.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href={telHref}
                className="flex items-center gap-2 font-semibold text-white hover:text-brand-400"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {site.phone.display}
              </a>
              <a
                href={waHref("Merhaba, Empero cihazım için servis talebim var.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor" aria-hidden="true">
                  <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.2 5.07 4.48.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.88-9.9 9.88M20.52 3.45A11.8 11.8 0 0 0 12.05 0C5.49 0 .16 5.33.16 11.88c0 2.1.55 4.14 1.6 5.95L.06 24l6.33-1.66a11.86 11.86 0 0 0 5.66 1.44h.01c6.55 0 11.89-5.33 11.89-11.88 0-3.17-1.24-6.16-3.48-8.4" />
                </svg>
                WhatsApp: {site.whatsapp.display}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                {site.email}
              </a>
            </div>
          </div>

          <nav aria-label="Hizmetler">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Cihaz Servisleri
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Bölgeler">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Servis Bölgeleri
            </h2>
            <p className="mt-1 text-xs text-ink-500">Avrupa Yakası</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {avrupaIlceleri.map((d) => (
                <li key={d.slug}>
                  <Link href={`/bolgeler/${d.slug}`} className="hover:text-white">
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/bolgeler"
              className="mt-3 inline-block text-sm font-semibold text-brand-400 hover:text-brand-300"
            >
              Anadolu yakası ve tüm bölgeler →
            </Link>
          </nav>

          <nav aria-label="Kurumsal">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Kurumsal
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/hakkimizda" className="hover:text-white">Hakkımızda</Link></li>
              <li><Link href="/hizmetler" className="hover:text-white">Tüm Hizmetler</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/sss" className="hover:text-white">Sıkça Sorulan Sorular</Link></li>
              <li><Link href="/iletisim" className="hover:text-white">İletişim</Link></li>
              <li><Link href="/gizlilik-politikasi" className="hover:text-white">Gizlilik Politikası</Link></li>
            </ul>
            <div className="mt-6 rounded-lg border border-ink-800 bg-ink-900 p-3 text-sm">
              <p className="font-semibold text-white">Çalışma Saatleri</p>
              <p className="mt-1.5 text-ink-400">Hafta içi: {site.hours.weekday}</p>
              <p className="text-ink-400">Cumartesi: {site.hours.saturday}</p>
              <p className="text-ink-400">Pazar: {site.hours.sunday}</p>
            </div>
          </nav>
        </div>

        <div className="mt-12 rounded-lg border border-ink-800 bg-ink-900/60 p-4">
          <p className="text-xs leading-relaxed text-ink-400">
            <strong className="text-ink-300">Yasal bilgilendirme:</strong>{" "}
            {disclaimer}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-ink-800 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. Tüm hakları saklıdır.</p>
          <p>
            {site.credit.label}:{" "}
            <a
              href={site.credit.url}
              target="_blank"
              rel="noopener"
              className="font-medium text-ink-300 underline-offset-4 transition-colors hover:text-brand-400 hover:underline"
            >
              {site.credit.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
