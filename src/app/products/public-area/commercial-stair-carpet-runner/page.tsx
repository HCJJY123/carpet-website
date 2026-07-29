import type { Metadata } from "next";
import ApplicationProductPage from "@/components/ApplicationProductPage";
import { products } from "@/lib/data";
import { absoluteUrl, productPath } from "@/lib/seo";

const productId = "commercial-stair-carpet-runner";
const product = products.find((item) => item.id === productId)!;

export const metadata: Metadata = {
  title: "Commercial Stair Carpet Runner | Custom Cut and Bound",
  description: "Commercial stair carpet runners for hotels, clubs, offices and galleries. Review custom widths, binding, tread and landing coordination, samples and MOQ.",
  alternates: { canonical: productPath(productId) },
  openGraph: {
    title: "Commercial Stair Carpet Runner | VISHOME",
    description: product.description,
    url: absoluteUrl(productPath(productId)),
    images: [{ url: absoluteUrl(product.image), alt: product.imageAlt }],
    type: "website",
  },
};

const faqs = [
  { q: "Can stair runners be made to a custom width?", a: "Yes. Width, length, edge binding, color, and landing pieces can be prepared to approved dimensions. Accurate site measurement and installer confirmation are required before production." },
  { q: "Is natural sisal suitable for every staircase?", a: "No. Natural sisal offers a distinctive texture but is sensitive to moisture and requires suitable edge, nosing, and cleaning details. A synthetic sisal-look or other contract construction may be more suitable for demanding sites." },
  { q: "Who confirms stair safety and code compliance?", a: "The project designer and local installer must confirm nosing, tread geometry, fixing method, slip resistance, fire requirements, and local code compliance. Vishome supplies product information for the selected construction." },
  { q: "What are the order levels?", a: `A material and binding swatch is available, a trial can begin with ${product.moqTiers.trialOrder}, and the project MOQ is ${product.moqTiers.project}.` },
];

export default function Page() {
  return (
    <ApplicationProductPage
      productId={productId}
      eyebrow="Custom Stair and Landing Program"
      overview={[
        "A stair runner is a measured flooring component, not only a strip of carpet. Tread depth, riser height, nosing profile, turning landings, edge exposure, binding, fixing method, underlay, and local code requirements all influence the final construction.",
        "Vishome can review natural sisal, synthetic sisal-look, and selected contract carpet options. Final dimensions and installation details should be signed off by the local installer before cutting and binding begins.",
      ]}
      applications={[
        { title: "Hotels and Clubs", text: "Coordinated stairs and landings for quieter guest circulation." },
        { title: "Offices", text: "Custom-width runners for reception stairs and internal connections." },
        { title: "Galleries", text: "Natural-texture options for design-led public interiors." },
        { title: "Boutique Retail", text: "Bound runners that coordinate feature stairs with the interior palette." },
      ]}
      selectionChecks={[
        "Provide verified tread, riser, landing, and turning dimensions.",
        "Confirm nosing, fixing, underlay, and exposed-edge details.",
        "State fire, slip, accessibility, and local code requirements.",
        "Choose natural or synthetic fiber according to cleaning exposure.",
        "Approve binding color and a sample runner section before bulk cutting.",
      ]}
      faqs={faqs}
    />
  );
}
