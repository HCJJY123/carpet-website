import EvidenceProductPage, { evidenceProductMetadata } from "@/components/EvidenceProductPage";

export const metadata = evidenceProductMetadata("public-area-heavy-duty");

export default function Page() {
  return <EvidenceProductPage productId="public-area-heavy-duty" />;
}
