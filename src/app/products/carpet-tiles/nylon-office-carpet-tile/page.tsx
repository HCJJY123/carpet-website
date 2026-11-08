import EvidenceProductPage, { evidenceProductMetadata } from "@/components/EvidenceProductPage";
import CarpetQuantityExample from "@/components/CarpetQuantityExample";

export const metadata = evidenceProductMetadata("nylon-office-carpet-tile");

export default function Page() {
  return <EvidenceProductPage productId="nylon-office-carpet-tile" supplement={<CarpetQuantityExample kind="tiles" />} />;
}
