import type { Metadata } from "next";
import { safeJsonLd } from "@/lib/seo";
import LinearAccentProduct from "./LinearAccentProduct";
import content from "./content.json";
import schema from "./product.schema.json";
const canonical = "https://www.vcarpets.com" + content.route;
export const metadata: Metadata = {
  title: content.name + " | VCARPETS",
  description: content.description,
  alternates: { canonical },
  openGraph: { title: content.name + " | VCARPETS", description: content.description, url: canonical, type: "website", images: [{ url: "https://www.vcarpets.com/images/products/linear-accent-commercial-carpet-tiles/01-studio-panel.webp", alt: content.images[0].alt }] },
};
export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} /><LinearAccentProduct /></>;
}
