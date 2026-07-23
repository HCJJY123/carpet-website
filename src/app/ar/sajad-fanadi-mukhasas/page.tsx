import LocalizedLandingPage, { localizedLandingMetadata } from "@/components/LocalizedLandingPage";
import { getLocalizedLanding } from "@/lib/localized-landings";

const page = getLocalizedLanding("ar", "sajad-fanadi-mukhasas")!;

export const metadata = localizedLandingMetadata(page);

export default function ArabicHotelCarpetLanding() {
  return <LocalizedLandingPage page={page} />;
}
