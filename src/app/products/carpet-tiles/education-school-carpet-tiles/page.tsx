import type { Metadata } from "next";
import ApplicationProductPage from "@/components/ApplicationProductPage";
import { products } from "@/lib/data";
import { absoluteUrl, productPath } from "@/lib/seo";

const productId = "education-school-carpet-tiles";
const product = products.find((item) => item.id === productId)!;

export const metadata: Metadata = {
  title: "Education & School Carpet Tiles | Classrooms and Libraries",
  description: "Commercial school carpet tiles for classrooms, libraries, student centers and corridors. Compare modular replacement, acoustic options, samples and MOQ.",
  alternates: { canonical: productPath(productId) },
  openGraph: {
    title: "Education & School Carpet Tiles | VISHOME",
    description: product.description,
    url: absoluteUrl(productPath(productId)),
    images: [{ url: absoluteUrl(product.image), alt: product.imageAlt }],
    type: "website",
  },
};

const faqs = [
  { q: "Which education areas suit carpet tiles?", a: "Classrooms, libraries, faculty offices, student centers, meeting rooms, and selected corridors can benefit from acoustic comfort and modular replacement. Laboratories, kitchens, and wet areas require a different flooring review." },
  { q: "Can tiles support campus color zoning?", a: "Yes. Standard and custom accent colors can define quiet zones, collaboration areas, routes, and departmental identity, subject to the selected construction and project MOQ." },
  { q: "What performance information should a school request?", a: "Ask for fire performance, traffic classification, backing, total thickness, chair-caster suitability, antistatic behavior, emissions documents, and cleaning guidance for the exact quoted construction." },
  { q: "What are the order levels?", a: `A material swatch is available, a typical trial starts from ${product.moqTiers.trialOrder}, and the project MOQ is ${product.moqTiers.project}.` },
];

export default function Page() {
  return (
    <ApplicationProductPage
      productId={productId}
      eyebrow="Education and Campus Flooring"
      overview={[
        "Education flooring must handle concentrated daily use, movable furniture, rolling chairs, spills, and term-break installation windows. Modular carpet tiles make localized replacement and phased campus work easier to plan.",
        "The correct specification depends on the room: classrooms prioritize acoustic comfort and cleanability, libraries need low disruption and quiet footfall, while corridors require stronger appearance retention and a disciplined maintenance plan.",
      ]}
      applications={[
        { title: "Classrooms", text: "Acoustic modular flooring for teaching rooms and flexible furniture layouts." },
        { title: "Libraries", text: "Low-noise walking surfaces for study, reading, and computer areas." },
        { title: "Student Centers", text: "Durable color zoning for collaborative and high-use social spaces." },
        { title: "Faculty Offices", text: "Replaceable commercial tiles for administration and meeting rooms." },
      ]}
      selectionChecks={[
        "Map traffic, furniture, food, and cleaning exposure by room type.",
        "Confirm fire, emissions, acoustic, and antistatic requirements.",
        "Specify chair-caster testing where mobile seating is used.",
        "Plan spare tiles and installation direction for future replacement.",
        "Align production and delivery with campus access windows.",
      ]}
      faqs={faqs}
    />
  );
}
