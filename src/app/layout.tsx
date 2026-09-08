import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallBar } from "@/components/CallBar";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Empero Ocak, Fritöz, Fırın ve Bulaşık Makinesi Tamiri`,
    template: `%s | ${site.name}`,
  },
  description: site.shortDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "empero servisi",
    "empero ocak servisi",
    "empero ocak tamiri",
    "empero fritöz servisi",
    "empero bulaşık makinesi servisi",
    "empero fırın servisi",
    "empero buzdolabı servisi",
    "empero yer ocağı servisi",
    "endüstriyel mutfak servisi istanbul",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Endüstriyel Mutfak Teknik Servisi`,
    description: site.shortDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — İstanbul geneli endüstriyel mutfak teknik servisi`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Endüstriyel Mutfak Teknik Servisi`,
    description: site.shortDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Teknik Servis",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  formatDetection: {
    telephone: true,
    address: false,
    email: false,
  },
  ...(site.googleSiteVerification
    ? { verification: { google: site.googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#d1121a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className="flex min-h-screen flex-col antialiased">
        <JsonLd data={organizationSchema()} />
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik" className="flex-1 pb-20 sm:pb-0">
          {children}
        </main>
        <Footer />
        <CallBar />
      </body>
    </html>
  );
}
