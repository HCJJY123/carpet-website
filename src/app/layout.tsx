import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vishomecarpet.com"),
  applicationName: "Vishome Carpet",
  title: {
    default: "Custom Commercial Carpet Manufacturer | Vishome Carpet",
    template: "%s | Vishome Carpet"
  },
  description:
    "Vishome Carpet manufactures commercial carpet tiles, hotel broadloom carpet, public area carpet, and custom carpet solutions for B2B projects worldwide.",
  keywords: [
    "custom commercial carpet manufacturer",
    "commercial carpet tiles supplier",
    "hotel carpet manufacturer",
    "wall to wall carpet factory",
    "custom rug manufacturer",
    "China carpet manufacturer",
    "B2B carpet supplier"
  ],
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Vishome Carpet | Commercial Carpet & Custom Flooring Manufacturer",
    description: "Tianjin-based manufacturer for commercial carpet tiles, hotel carpets, public area carpets, and custom B2B flooring projects.",
    url: "https://www.vishomecarpet.com",
    siteName: "Vishome Carpet",
    images: [
      {
        url: "/images/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "Vishome commercial carpet manufacturing and project flooring solutions"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishome Carpet | Commercial Carpet Manufacturer",
    description: "Factory-direct commercial carpet tiles, hotel carpet, public area carpet, and custom B2B flooring solutions.",
    images: ["/images/hero-home.jpg"]
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
    <html lang="en" className="h-full antialiased">
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
