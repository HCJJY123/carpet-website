import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import WhatsAppFloating from "@/components/WhatsAppFloating";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishome | Commercial Carpet Tiles & Hotel Broadloom Manufacturer",
  description:
    "Vishome Global Commercial Carpet Co. Ltd. manufactures commercial carpet tiles, hotel broadloom carpets, and custom flooring solutions for global B2B projects.",
  keywords:
    "Vishome, carpet tiles, broadloom carpet, commercial carpet, hotel carpet, modular flooring, China carpet manufacturer",
  openGraph: {
    title: "Vishome | Premium Commercial Carpet & Flooring Solutions",
    description: "Vishome Global Commercial Carpet Co. Ltd.: a Tianjin-based manufacturer for commercial carpet tiles, hotel carpets, and custom B2B flooring projects.",
    url: "https://www.visfurn.com",
    siteName: "Vishome",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/logo-mark.svg",
  }
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
