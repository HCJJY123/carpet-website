import LocalizedLandingPage, { localizedLandingMetadata } from "@/components/LocalizedLandingPage";
import { getLocalizedLanding } from "@/lib/localized-landings";

const page = getLocalizedLanding("es", "alfombra-mineria-oro")!;

export const metadata = localizedLandingMetadata(page);

export default function SpanishGoldMiningLanding() {
  return <LocalizedLandingPage page={page} />;
}
