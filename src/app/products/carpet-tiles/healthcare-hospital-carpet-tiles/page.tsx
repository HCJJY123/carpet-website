import type { Metadata } from "next";
import ApplicationProductPage from "@/components/ApplicationProductPage";
import { products } from "@/lib/data";
import { absoluteUrl, productPath } from "@/lib/seo";

const productId = "healthcare-hospital-carpet-tiles";
const product = products.find((item) => item.id === productId)!;

export const metadata: Metadata = {
  title: "Healthcare & Hospital Carpet Tiles | Commercial Flooring",
  description: "Healthcare carpet tiles for waiting rooms, consultation areas and senior-care circulation. Review low-pile construction, samples, MOQ and technical documents.",
  alternates: { canonical: productPath(productId) },
  openGraph: {
    title: "Healthcare & Hospital Carpet Tiles | VISHOME",
    description: product.description,
    url: absoluteUrl(productPath(productId)),
    images: [{ url: absoluteUrl(product.image), alt: product.imageAlt }],
    type: "website",
  },
};

const faqs = [
  { q: "Where can carpet tiles be considered in healthcare facilities?", a: "They are generally considered for non-clinical areas such as waiting rooms, consultation areas, administration offices, senior-care lounges, and circulation zones. Wet rooms, treatment rooms, and spaces governed by infection-control protocols require separate flooring review." },
  { q: "Can you provide fire and indoor-air-quality documents?", a: "State the required standard in the RFQ. Vishome will confirm which reports apply to the exact fiber and backing construction being quoted; reports from another construction should not be treated as equivalent." },
  { q: "How are damaged or stained areas replaced?", a: "The modular 50x50 cm format allows individual tiles to be lifted and replaced when the installation system and spare-stock plan support selective maintenance." },
  { q: "What are the order levels?", a: `A material swatch is available, a typical standard-color trial starts from ${product.moqTiers.trialOrder}, and the project MOQ is ${product.moqTiers.project}. Final terms depend on stock, color, backing, and documentation.` },
];

export default function Page() {
  return (
    <ApplicationProductPage
      productId={productId}
      eyebrow="Healthcare Support-Area Flooring"
      overview={[
        "Healthcare flooring decisions should begin with the room function and cleaning protocol. Carpet tiles can support quieter, more comfortable waiting, consultation, administration, and senior-care environments, but they are not a universal replacement for resilient clinical flooring.",
        "Specify the exact fiber, low-pile profile, backing, installation system, cleaning chemistry, spare-stock plan, fire standard, and indoor-air-quality requirement before comparing quotations.",
      ]}
      applications={[
        { title: "Waiting Areas", text: "Low-pile modular flooring for quieter reception and waiting environments." },
        { title: "Consultation Zones", text: "Comfort-oriented flooring for non-procedure rooms and counseling spaces." },
        { title: "Administration", text: "Chair-caster and antistatic options for healthcare offices and support teams." },
        { title: "Senior Care", text: "Calm color zoning and selective replacement for lounges and circulation areas." },
      ]}
      selectionChecks={[
        "Confirm whether carpet is permitted for the exact room type and local healthcare standard.",
        "Provide the required fire, emissions, cleaning, and antistatic criteria.",
        "Match backing and adhesive to moisture readings and subfloor conditions.",
        "Approve a maintenance plan and attic-stock quantity before installation.",
        "Verify every report against the exact construction included in the quotation.",
      ]}
      faqs={faqs}
    />
  );
}
