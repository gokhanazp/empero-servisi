import { site, telHref, waHref } from "@/lib/site";

export function Cta({
  title = "Cihazınız durduysa vakit kaybetmeyin",
  text = "Arızayı telefonda birkaç cümleyle anlatmanız yeterli. Teknisyen doğru parçayla yola çıksın diye modeli ve şikâyeti önceden alıyoruz.",
  waMessage = "Merhaba, Empero cihazım için servis talebim var.",
}: {
  title?: string;
  text?: string;
  waMessage?: string;
}) {
  return (
    <section className="no-print my-16 rounded-[1.4rem] bg-gradient-to-br from-brand-600/50 via-ink-800 to-ink-950 p-px shadow-[0_24px_60px_-24px_rgba(11,11,11,0.5)]">
      <div className="grain relative overflow-hidden rounded-[1.35rem] bg-ink-950 px-6 py-12 sm:px-10 sm:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-600/25 blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 70% 90% at 100% 0%, #000, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 90% at 100% 0%, #000, transparent)",
          }}
        />

        <div className="relative max-w-2xl">
          <p className="flex items-center gap-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-brand-400">
            <span aria-hidden="true" className="h-px w-7 bg-current opacity-60" />
            Servis talebi
          </p>
          <h2 className="mt-3 text-[1.625rem] font-bold leading-tight tracking-[-0.02em] text-white sm:text-[2rem]">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">{text}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={telHref}
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-600 px-7 py-4 text-base font-semibold text-white shadow-[0_10px_30px_-8px_rgba(209,18,26,0.65)] ring-1 ring-inset ring-white/15 transition-all hover:bg-brand-500"
            >
              <svg viewBox="0 0 24 24" className="h-[1.125rem] w-[1.125rem] transition-transform group-hover:-rotate-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {site.phone.display}
            </a>
            <a
              href={waHref(waMessage)}
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

          <p className="mt-5 flex items-center gap-2 text-sm text-ink-500">
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
            Cihazın etiket fotoğrafını gönderirseniz teknisyen parçayı yanında
            getirir.
          </p>
        </div>
      </div>
    </section>
  );
}
