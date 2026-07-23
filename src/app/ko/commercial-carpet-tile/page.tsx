import LocalizedLandingPage, { localizedLandingMetadata } from "@/components/LocalizedLandingPage";
import { getLocalizedLanding } from "@/lib/localized-landings";

const page = getLocalizedLanding("ko", "commercial-carpet-tile")!;

export const metadata = localizedLandingMetadata(page);

export default function KoreanCommercialCarpetTileLanding() {
  return <LocalizedLandingPage page={page} />;
}
