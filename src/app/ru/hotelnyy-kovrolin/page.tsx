import LocalizedLandingPage, { localizedLandingMetadata } from "@/components/LocalizedLandingPage";
import { getLocalizedLanding } from "@/lib/localized-landings";

const page = getLocalizedLanding("ru", "hotelnyy-kovrolin")!;

export const metadata = localizedLandingMetadata(page);

export default function RussianHotelCarpetLanding() {
  return <LocalizedLandingPage page={page} />;
}
