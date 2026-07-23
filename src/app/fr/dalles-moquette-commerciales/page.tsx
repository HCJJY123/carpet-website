import LocalizedLandingPage, { localizedLandingMetadata } from "@/components/LocalizedLandingPage";
import { getLocalizedLanding } from "@/lib/localized-landings";

const page = getLocalizedLanding("fr", "dalles-moquette-commerciales")!;

export const metadata = localizedLandingMetadata(page);

export default function FrenchCarpetTilesLanding() {
  return <LocalizedLandingPage page={page} />;
}
