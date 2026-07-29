import type { Metadata } from "next";
import ApplicationProductPage from "@/components/ApplicationProductPage";
import { products } from "@/lib/data";
import { absoluteUrl, productPath } from "@/lib/seo";

const productId = "cinema-theater-carpet";
const product = products.find((item) => item.id === productId)!;

export const metadata: Metadata = {
  title: "Cinema & Theater Carpet | Custom Auditorium Broadloom",
  description: "Custom cinema and theater carpet for auditoriums, aisles, lobbies and concession areas. Review patterned broadloom, acoustic options, samples and MOQ.",
  alternates: { canonical: productPath(productId) },
  openGraph: {
    title: "Cinema & Theater Carpet | VISHOME",
    description: product.description,
    url: absoluteUrl(productPath(productId)),
    images: [{ url: absoluteUrl(product.image), alt: product.imageAlt }],
    type: "website",
  },
};

const faqs = [
  { q: "Can the carpet pattern be customized for a cinema brand?", a: "Yes. Printed broadloom can coordinate brand colors, auditorium themes, aisle direction, and lobby identity after artwork, scale, color, and repeat are approved." },
  { q: "Does cinema carpet improve acoustics?", a: "Carpet can reduce footfall noise and room reverberation, but acoustic performance depends on the full construction, backing, underlay, subfloor, walls, seating, and ceiling. Request data for the exact assembly being considered." },
  { q: "Which fire documents are available?", a: "Tell Vishome which standard the venue or consultant requires. The team will confirm whether a report applies to the quoted construction or whether project-specific testing is needed." },
  { q: "What are the order levels?", a: `A material swatch is available, an approved-design trial typically starts from ${product.moqTiers.trialOrder}, and the project MOQ is ${product.moqTiers.project}.` },
];

export default function Page() {
  return (
    <ApplicationProductPage
      productId={productId}
      eyebrow="Entertainment Venue Broadloom"
      overview={[
        "Cinema and theater carpet has to coordinate visual identity, aisle geometry, acoustic comfort, cleaning access, and life-safety documentation. A strong pattern can conceal tracked soil while helping visitors read transitions between lobby, concession, aisle, and auditorium zones.",
        "Final suitability depends on the exact pile, backing, underlay, fire standard, seaming plan, stair and nosing details, cleaning method, and venue operating schedule. These requirements should be aligned before artwork is approved.",
      ]}
      applications={[
        { title: "Auditoriums", text: "Dark patterned broadloom designed around seating rows and high-use paths." },
        { title: "Cinema Aisles", text: "Directional pattern planning for circulation and step transitions." },
        { title: "Theater Lobbies", text: "Brand-led custom flooring for arrival, ticketing, and waiting zones." },
        { title: "Concession Areas", text: "Soil-hiding pattern options paired with a defined cleaning strategy." },
      ]}
      selectionChecks={[
        "Provide seating, aisle, stair, and lobby floor plans.",
        "Confirm the venue fire standard and document format.",
        "Define backing, underlay, acoustic, and seaming requirements.",
        "Approve artwork at both close-up and full-floor repeat scale.",
        "Plan installation around operating hours and reopening dates.",
      ]}
      faqs={faqs}
    />
  );
}
