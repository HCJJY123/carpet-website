import EvidenceProductPage, { evidenceProductMetadata } from "@/components/EvidenceProductPage";

export const metadata = evidenceProductMetadata("3d-printed-hotel-carpet");

export default function Page() {
  return <EvidenceProductPage productId="3d-printed-hotel-carpet" />;
}
