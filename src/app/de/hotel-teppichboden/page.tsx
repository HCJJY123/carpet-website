import LocalizedLandingPage, { localizedLandingMetadata } from "@/components/LocalizedLandingPage";
import { getLocalizedLanding } from "@/lib/localized-landings";

const page = getLocalizedLanding("de", "hotel-teppichboden")!;

export const metadata = localizedLandingMetadata(page);

export default function GermanHotelCarpetLanding() {
  return <LocalizedLandingPage page={page} />;
}
