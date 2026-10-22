import EvidenceProductPage, { evidenceProductMetadata } from "@/components/EvidenceProductPage";

export const metadata = evidenceProductMetadata("custom-floral-printed-hotel-carpet");

export default function Page() {
  return <EvidenceProductPage productId="custom-floral-printed-hotel-carpet" />;
}
