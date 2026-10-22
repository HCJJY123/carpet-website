import EvidenceProductPage, { evidenceProductMetadata } from "@/components/EvidenceProductPage";

export const metadata = evidenceProductMetadata("custom-sculpted-wool-lobby-rug");

export default function Page() {
  return <EvidenceProductPage productId="custom-sculpted-wool-lobby-rug" />;
}
