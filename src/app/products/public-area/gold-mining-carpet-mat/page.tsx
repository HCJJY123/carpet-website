import EvidenceProductPage, { evidenceProductMetadata } from "@/components/EvidenceProductPage";

export const metadata = evidenceProductMetadata("gold-mining-carpet-mat");

export default function Page() {
  return <EvidenceProductPage productId="gold-mining-carpet-mat" />;
}
