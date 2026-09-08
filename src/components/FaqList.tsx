import type { Faq } from "@/lib/types";

/** JavaScript gerektirmeyen, erişilebilir akordiyon (details/summary) */
export function FaqList({ items, title }: { items: Faq[]; title?: string }) {
  return (
    <section aria-labelledby={title ? "sss-baslik" : undefined}>
      {title && (
        <h2
          id="sss-baslik"
          className="text-[1.75rem] font-bold leading-tight tracking-[-0.02em] text-ink-900 sm:text-[2rem]"
        >
          {title}
        </h2>
      )}
      <div
        className={`${title ? "mt-8" : ""} space-y-2.5`}
      >
        {items.map((f, i) => (
          <details
            key={i}
            className="group overflow-hidden rounded-xl border border-ink-200 bg-white transition-colors open:border-brand-200 open:bg-brand-50/25 hover:border-ink-300"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-[0.9375rem] font-semibold text-ink-900 marker:content-none">
              <span className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 font-mono text-xs font-bold text-brand-400"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {f.q}
              </span>
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink-200 text-brand-600 transition-all duration-200 group-open:rotate-45 group-open:border-brand-500 group-open:bg-brand-600 group-open:text-white">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="border-t border-ink-100 px-5 py-4 pl-[3.25rem] text-[0.9375rem] leading-relaxed text-ink-600">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
