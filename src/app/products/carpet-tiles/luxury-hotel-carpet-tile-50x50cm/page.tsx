import EvidenceProductPage, { evidenceProductMetadata } from "@/components/EvidenceProductPage";

export const metadata = evidenceProductMetadata("luxury-hotel-carpet-tile-50x50cm");

export default function Page() {
  return <EvidenceProductPage productId="luxury-hotel-carpet-tile-50x50cm" />;
}
