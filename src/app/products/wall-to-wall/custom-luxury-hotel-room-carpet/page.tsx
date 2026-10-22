import EvidenceProductPage, { evidenceProductMetadata } from "@/components/EvidenceProductPage";

export const metadata = evidenceProductMetadata("custom-luxury-hotel-room-carpet");

export default function Page() {
  return <EvidenceProductPage productId="custom-luxury-hotel-room-carpet" />;
}
