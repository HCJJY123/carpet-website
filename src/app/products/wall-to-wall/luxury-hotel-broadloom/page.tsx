import EvidenceProductPage, { evidenceProductMetadata } from "@/components/EvidenceProductPage";
import CarpetQuantityExample from "@/components/CarpetQuantityExample";

export const metadata = evidenceProductMetadata("luxury-hotel-broadloom");

export default function Page() {
  return <EvidenceProductPage productId="luxury-hotel-broadloom" supplement={<CarpetQuantityExample kind="broadloom" />} />;
}
