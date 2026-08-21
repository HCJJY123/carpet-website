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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vishomecarpet.com"),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "SNIrO_J6kr1i6I36kSlpbPwsNdu4NiF6jmI2IoAJWWo",
  },
  title: "Vishome | Commercial Carpet Tiles & Hotel Broadloom Manufacturer",
  description:
    "Vishome Global Commercial Carpet Co., Ltd. manufactures commercial carpet tiles, hotel broadloom carpets, and custom flooring solutions for global B2B projects.",
  alternates: {
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "VISHOME AI-readable summary" },
        { url: "/llms-full.txt", title: "VISHOME full AI source map" },
      ],
      "application/json": [{ url: "/ai-sources.json", title: "VISHOME structured AI source map" }],
    },
  },
  openGraph: {
    title: "Vishome | Premium Commercial Carpet & Flooring Solutions",
    description: "Vishome Global Commercial Carpet Co., Ltd.: a Tianjin-based manufacturer for commercial carpet tiles, hotel carpets, and custom B2B flooring projects.",
    url: "https://www.vishomecarpet.com",
    siteName: "Vishome",
    type: "website",
    images: [
      {
        url: "https://www.vishomecarpet.com/images/og-cover.webp",
        width: 1200,
        height: 630,
        alt: "Vishome Global Commercial Carpet Manufacturer",
      },
      {
        url: "https://www.vishomecarpet.com/images/hero-home.webp",
        width: 1200,
        height: 630,
        alt: "Vishome commercial carpet tiles and hotel flooring solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@VishomeCarpet",
    creator: "@VishomeCarpet",
    title: "Vishome | Premium Commercial Carpet & Flooring Solutions",
    description: "B2B commercial carpet manufacturer in Tianjin, China. Carpet tiles, hotel broadloom, public area flooring for global projects.",
    images: ["https://www.vishomecarpet.com/images/og-cover.webp"],
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
