import LocalizedLandingPage, { localizedLandingMetadata } from "@/components/LocalizedLandingPage";
import { getLocalizedLanding } from "@/lib/localized-landings";

const page = getLocalizedLanding("es", "losetas-alfombra-comerciales")!;

export const metadata = localizedLandingMetadata(page);

export default function SpanishCarpetTilesLanding() {
  return <LocalizedLandingPage page={page} />;
}
