import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import MarketingTracking from "@/components/MarketingTracking";
import ImageProtection from "@/components/ImageProtection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "SNIrO_J6kr1i6I36kSlpbPwsNdu4NiF6jmI2IoAJWWo",
  },
  title: "Vishome | Commercial Carpet Tiles & Hotel Broadloom Manufacturer",
  description:
    "Vishome Global Commercial Carpet Co. Ltd. manufactures commercial carpet tiles, hotel broadloom carpets, and custom flooring solutions for global B2B projects.",
  keywords:
    "Vishome, carpet tiles, broadloom carpet, commercial carpet, hotel carpet, modular flooring, China carpet manufacturer",
  openGraph: {
    title: "Vishome | Premium Commercial Carpet & Flooring Solutions",
    description: "Vishome Global Commercial Carpet Co. Ltd.: a Tianjin-based manufacturer for commercial carpet tiles, hotel carpets, and custom B2B flooring projects.",
    url: "https://www.vishomecarpet.com",
    siteName: "Vishome",
    type: "website",
    images: [
      {
        url: "https://www.vishomecarpet.com/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Vishome Global Commercial Carpet Manufacturer",
      },
      {
        url: "https://www.vishomecarpet.com/images/hero-home.jpg",
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
    images: ["https://www.vishomecarpet.com/images/og-cover.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/logo-mark.svg",
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
        <JsonLd />
        <MarketingTracking />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <ImageProtection />
      </body>
    </html>
  );
}
