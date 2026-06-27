import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Vishome | Get a Quote for Commercial Carpet Projects",
  description: "Contact Vishome Global Commercial Carpet Co. Ltd. for B2B project quotes, sample requests, and technical support. WhatsApp +86 152 2288 5400.",
  keywords: "contact carpet manufacturer, carpet project quote, commercial carpet samples, carpet tile supplier contact",
  alternates: { canonical: "https://www.vishomecarpet.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
