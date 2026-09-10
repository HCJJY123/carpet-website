import type { Metadata } from "next";
import HotelCarpetProjectChecklist from "@/components/HotelCarpetProjectChecklist";
import PageHero from "@/components/PageHero";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/tools/hotel-carpet-project-checklist";
export const metadata: Metadata = { title: "Hotel Carpet Project Checklist | VISHOME", description: "Interactive hotel carpet project checklist covering zones, samples, documents, installation, packing, spare stock and RFQ preparation.", alternates: { canonical: absoluteUrl(pagePath) } };

export default function HotelCarpetProjectChecklistPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "@id": `${absoluteUrl(pagePath)}#checklist`, name: "Hotel Carpet Project Checklist", applicationCategory: "BusinessApplication", operatingSystem: "Web browser", url: absoluteUrl(pagePath), description: metadata.description, provider: { "@id": "https://www.vishomecarpet.com/#organization" }, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } };
  return <main className="bg-background"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} /><PageHero eyebrow="Project Planning Tool" title="Hotel Carpet Project Checklist" description="Check the information a hotel carpet supplier needs before comparing samples, technical documents, quantities, packing and delivery assumptions." image="/images/about/quality-control-inspection.webp" imageAlt="Hotel carpet project document and sample checklist" /><section className="section-padding"><div className="container-fox"><HotelCarpetProjectChecklist /></div></section></main>;
}
