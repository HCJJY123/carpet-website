import LocalizedLandingPage, { localizedLandingMetadata } from "@/components/LocalizedLandingPage";
import { getLocalizedLanding } from "@/lib/localized-landings";

const page = getLocalizedLanding("ja", "custom-commercial-carpet")!;

export const metadata = localizedLandingMetadata(page);

export default function JapaneseCommercialCarpetLanding() {
  return <LocalizedLandingPage page={page} />;
}
