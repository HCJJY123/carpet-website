import LocalizedLandingPage, { localizedLandingMetadata } from "@/components/LocalizedLandingPage";
import { getLocalizedLanding } from "@/lib/localized-landings";

const page = getLocalizedLanding("pt", "tapetes-personalizados-hotel")!;

export const metadata = localizedLandingMetadata(page);

export default function PortugueseCustomHotelRugsLanding() {
  return <LocalizedLandingPage page={page} />;
}
