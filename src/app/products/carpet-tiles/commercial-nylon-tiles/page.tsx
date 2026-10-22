import EvidenceProductPage, { evidenceProductMetadata } from "@/components/EvidenceProductPage";

export const metadata = evidenceProductMetadata("commercial-nylon-tiles");

export default function Page() {
  return <EvidenceProductPage productId="commercial-nylon-tiles" />;
}
