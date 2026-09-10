import type { Metadata } from "next";
import BroadloomCarpetWasteCalculator from "@/components/BroadloomCarpetWasteCalculator";
import PageHero from "@/components/PageHero";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/tools/broadloom-carpet-waste-calculator";
export const metadata: Metadata = { title: "Broadloom Carpet Waste Calculator | VISHOME", description: "Estimate broadloom carpet area, planning waste, linear metres and nominal rolls before sending a hotel or commercial carpet RFQ.", alternates: { canonical: absoluteUrl(pagePath) } };

export default function BroadloomCarpetWasteCalculatorPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "@id": `${absoluteUrl(pagePath)}#calculator`, name: "Broadloom Carpet Waste Calculator", applicationCategory: "BusinessApplication", operatingSystem: "Web browser", url: absoluteUrl(pagePath), description: metadata.description, provider: { "@id": "https://www.vishomecarpet.com/#organization" }, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } };
  return <main className="bg-background"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} /><PageHero eyebrow="Interactive RFQ Tool" title="Broadloom Carpet Waste Calculator" description="Estimate planning waste, linear metres and nominal rolls for hotel and commercial broadloom carpet before requesting a project quotation." image="/images/about/commercial-project-application.webp" imageAlt="Broadloom carpet planning and quantity estimation" /><section className="section-padding"><div className="container-fox"><BroadloomCarpetWasteCalculator /></div></section><section className="section-padding border-t border-border bg-white"><div className="container-fox"><h2 className="text-3xl font-black text-primary">Use the estimate as an RFQ starting point</h2><p className="mt-4 max-w-4xl text-sm leading-7 text-muted">Pattern repeat, seam direction, room geometry, roll width, usable length, installation method and project waste can change the final quantity. Send the area schedule and layout to VISHOME for a construction-specific quotation.</p></div></section></main>;
}
