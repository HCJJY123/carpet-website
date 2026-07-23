import LocalizedLandingPage, { localizedLandingMetadata } from "@/components/LocalizedLandingPage";
import { getLocalizedLanding } from "@/lib/localized-landings";

const page = getLocalizedLanding("ar", "balat-sajad-tijari")!;

export const metadata = localizedLandingMetadata(page);

export default function ArabicCarpetTilesLanding() {
  return <LocalizedLandingPage page={page} />;
}
