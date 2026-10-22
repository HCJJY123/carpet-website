import EvidenceProductPage, { evidenceProductMetadata } from "@/components/EvidenceProductPage";

export const metadata = evidenceProductMetadata("cinema-theater-carpet");

export default function Page() {
  return <EvidenceProductPage productId="cinema-theater-carpet" />;
}
