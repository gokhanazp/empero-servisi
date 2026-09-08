"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { services } from "@/content/services";
import { site, telHref } from "@/lib/site";

const nav = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/bolgeler", label: "Bölgeler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/sss", label: "S.S.S." },
  { href: "/iletisim", label: "İletişim" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  /** Ana sayfada header, hero'nun üzerine biner ve onunla aynı zemini paylaşır. */
  const overlay = pathname === "/";
  const transparent = overlay && !scrolled && !open;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /**
   * Mobil menüden bir sayfaya geçerken: menüyü kapat, gövde kilidini
   * hemen kaldır ve sayfayı en üste al. Kilit açılmadan yapılan
   * scroll-to-top işe yaramadığı için yeni sayfa ortadan başlıyordu.
   */
  function menuLinkTiklandi() {
    // Kilit önce kalkmalı; kilitliyken yapılan scroll işlemi etkisiz kalıyor.
    document.body.style.overflow = "";
    setOpen(false);
    window.scrollTo(0, 0);
    // Yönlendirme tamamlandıktan sonra da en üste sabitle.
    requestAnimationFrame(() => window.scrollTo(0, 0));
    setTimeout(() => window.scrollTo(0, 0), 80);
  }

  useEffect(() => {
    if (!overlay) {
      setScrolled(false);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      data-transparent={transparent ? "true" : "false"}
      className={`${
        overlay ? "fixed" : "sticky"
      } inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        transparent
          ? "border-b border-white/10 bg-transparent"
          : "border-b border-ink-100 bg-white/90 shadow-[0_10px_30px_-18px_rgba(11,11,11,0.35)] backdrop-blur-md supports-[backdrop-filter]:bg-white/80"
      }`}
    >
      {/* Üst şerit */}
      <div
        className={`hidden transition-colors duration-300 lg:block ${
          transparent
            ? "border-b border-white/[0.07] text-ink-400"
            : "bg-ink-950 text-ink-200"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 text-[0.8125rem]">
          <p className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            İstanbul geneli yerinde servis · Hafta içi {site.hours.weekday} ·
            Cumartesi {site.hours.saturday}
          </p>
          <p className="flex items-center gap-4">
            <a
              className="transition-colors hover:text-white"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <a
              className="font-semibold text-white transition-colors hover:text-brand-400"
              href={telHref}
            >
              {site.phone.display}
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo light={transparent} />

        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      transparent
                        ? active
                          ? "text-white"
                          : "text-ink-300 hover:bg-white/[0.07] hover:text-white"
                        : active
                          ? "text-brand-600"
                          : "text-ink-700 hover:bg-ink-50 hover:text-ink-900"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className={`hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all sm:inline-flex ${
              transparent
                ? "bg-white/10 text-white ring-1 ring-inset ring-white/20 backdrop-blur hover:bg-white/[0.18]"
                : "bg-brand-600 text-white shadow-[0_8px_20px_-10px_rgba(209,18,26,0.9)] hover:bg-brand-500"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {site.phone.display}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobil-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors lg:hidden ${
              transparent
                ? "border-white/20 bg-white/[0.06] text-white"
                : "border-ink-200 text-ink-800"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobil-menu"
          // 100dvh: mobil tarayıcıların adres çubuğu payını hesaba katar,
          // 100vh kullanıldığında panelin alt kısmı ekran dışında kalıyordu.
          className="max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain border-t border-ink-100 bg-white lg:hidden"
        >
          <nav aria-label="Mobil menü" className="mx-auto max-w-6xl px-4 pt-4">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={menuLinkTiklandi}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink-800 hover:bg-ink-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wider text-ink-400">
              Cihaz servisleri
            </p>
            <ul className="mt-1 space-y-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    onClick={menuLinkTiklandi}
                    className="block rounded-lg px-3 py-2 text-sm text-ink-600 hover:bg-ink-50 hover:text-ink-900"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/*
              Ara butonu panelin altına yapışık duruyor. Liste uzasa da
              her zaman ekranda kalıyor; alt boşluk mobildeki sabit
              arama çubuğunun altında kalmasını engelliyor.
            */}
            <div className="sticky bottom-0 -mx-4 mt-5 border-t border-ink-100 bg-white px-4 pb-[calc(env(safe-area-inset-bottom)+4.5rem)] pt-3">
              <a
                href={telHref}
                onClick={menuLinkTiklandi}
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_-10px_rgba(209,18,26,0.9)]"
              >
                <svg viewBox="0 0 24 24" className="h-[1.125rem] w-[1.125rem]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {site.phone.display} — Hemen Ara
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
