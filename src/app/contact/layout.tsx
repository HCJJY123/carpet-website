import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact VCARPETS | Get a Quote for Commercial Carpet Projects",
  description: "Contact Vcarpets Global Commercial Carpet Co., Ltd. for B2B project quotes, sample requests, WhatsApp support, WeChat support, and technical documents.",
  alternates: { canonical: "https://www.vcarpets.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
