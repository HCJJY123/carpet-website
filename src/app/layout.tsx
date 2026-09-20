import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import SendInquiryFloating from "@/components/SendInquiryFloating";
import LocaleExperience from "@/components/LocaleExperience";
import DeferredSiteEnhancements from "@/components/DeferredSiteEnhancements";
import { brandInfo } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(brandInfo.url),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "SNIrO_J6kr1i6I36kSlpbPwsNdu4NiF6jmI2IoAJWWo",
  },
  title: "VCARPETS | Commercial Carpet Tiles & Hotel Broadloom Manufacturer",
  description:
    "Vcarpets Global Commercial Carpet Co., Ltd. manufactures commercial carpet tiles, hotel broadloom carpets, and custom flooring solutions for global B2B projects.",
  alternates: {
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "VCARPETS AI-readable summary" },
        { url: "/llms-full.txt", title: "VCARPETS full AI source map" },
      ],
      "application/json": [{ url: "/ai-sources.json", title: "VCARPETS structured AI source map" }],
    },
  },
  openGraph: {
    title: "VCARPETS | Premium Commercial Carpet & Flooring Solutions",
    description: "Vcarpets Global Commercial Carpet Co., Ltd.: a Tianjin-based manufacturer for commercial carpet tiles, hotel carpets, and custom B2B flooring projects.",
    url: brandInfo.url,
    siteName: "VCARPETS",
    type: "website",
    images: [
      {
        url: `${brandInfo.url}/images/og-cover.webp`,
        width: 1200,
        height: 630,
        alt: "VCARPETS Global Commercial Carpet Manufacturer",
      },
      {
        url: `${brandInfo.url}/images/hero-home.webp`,
        width: 1200,
        height: 630,
        alt: "VCARPETS commercial carpet tiles and hotel flooring solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@VCARPETS",
    creator: "@VCARPETS",
    title: "VCARPETS | Premium Commercial Carpet & Flooring Solutions",
    description: "B2B commercial carpet manufacturer in Tianjin, China. Carpet tiles, hotel broadloom, public area flooring for global projects.",
    images: [`${brandInfo.url}/images/og-cover.webp`],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LocaleExperience />
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <SendInquiryFloating />
        <WhatsAppFloating />
        <DeferredSiteEnhancements />
      </body>
    </html>
  );
}
