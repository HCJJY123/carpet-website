import LocalizedLandingPage, { localizedLandingMetadata } from "@/components/LocalizedLandingPage";
import { getLocalizedLanding } from "@/lib/localized-landings";

const page = getLocalizedLanding("fr", "moquette-hotel-sur-mesure")!;

export const metadata = localizedLandingMetadata(page);

export default function FrenchHotelCarpetLanding() {
  return <LocalizedLandingPage page={page} />;
}
