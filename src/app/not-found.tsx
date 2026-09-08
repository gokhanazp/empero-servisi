import Link from "next/link";
import { services } from "@/content/services";
import { site, telHref } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-4 py-20 sm:py-28">
      <p className="text-6xl font-extrabold text-brand-100">404</p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
        Aradığınız sayfayı bulamadık
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-600">
        Bağlantı değişmiş ya da adres yanlış yazılmış olabilir. Aşağıdaki
        hizmet sayfalarından devam edebilir veya doğrudan bizi arayabilirsiniz.
      </p>

      <ul className="mt-8 grid w-full gap-3 sm:grid-cols-2">
        {services.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/${s.slug}`}
              className="block rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
            >
              {s.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-lg border border-ink-200 px-5 py-3 text-sm font-semibold text-ink-800 hover:bg-ink-50"
        >
          Ana sayfaya dön
        </Link>
        <a
          href={telHref}
          className="rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
        >
          {site.phone.display}
        </a>
      </div>
    </div>
  );
}
