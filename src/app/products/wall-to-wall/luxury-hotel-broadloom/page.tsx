import EvidenceProductPage, { evidenceProductMetadata } from "@/components/EvidenceProductPage";

export const metadata = evidenceProductMetadata("luxury-hotel-broadloom");

export default function Page() {
  return <EvidenceProductPage productId="luxury-hotel-broadloom" />;
}
