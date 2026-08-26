import LocalizedLandingPage, { localizedLandingMetadata } from "@/components/LocalizedLandingPage";
import { getLocalizedLanding } from "@/lib/localized-landings";

const page = getLocalizedLanding("de", "gewerbliche-teppichfliesen")!;

export const metadata = localizedLandingMetadata(page);

export default function GermanCommercialCarpetTilesLanding() {
  return <LocalizedLandingPage page={page} />;
}
