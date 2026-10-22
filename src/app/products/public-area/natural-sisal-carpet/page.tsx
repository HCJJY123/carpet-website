import EvidenceProductPage, { evidenceProductMetadata } from "@/components/EvidenceProductPage";

export const metadata = evidenceProductMetadata("natural-sisal-carpet");

export default function Page() {
  return <EvidenceProductPage productId="natural-sisal-carpet" />;
}
