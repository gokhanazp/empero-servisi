import Link from "next/link";

/**
 * Kelime markası. Empero'nun kendi oval logosu kullanılmaz — bağımsız
 * servis olduğumuz için marka taklidi oluşturmaması gerekir. Renk paleti
 * (kırmızı + siyah) uyumlu tutulmuştur.
 */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Empero Servisi ana sayfa"
      className="group inline-flex items-center gap-2.5"
    >
      <span
        aria-hidden="true"
        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white shadow-sm ring-1 ring-brand-700/20 transition-transform duration-200 group-hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[1.0625rem] font-extrabold tracking-tight ${
            light ? "text-white" : "text-ink-900"
          }`}
        >
          EMPERO<span className="text-brand-600">SERVİSİ</span>
        </span>
        <span
          className={`mt-0.5 text-[0.6875rem] font-medium tracking-wide ${
            light ? "text-ink-300" : "text-ink-500"
          }`}
        >
          Endüstriyel Mutfak Teknik Servisi
        </span>
      </span>
    </Link>
  );
}
