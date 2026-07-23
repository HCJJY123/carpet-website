import LocalizedLandingPage, { localizedLandingMetadata } from "@/components/LocalizedLandingPage";
import { getLocalizedLanding } from "@/lib/localized-landings";

const page = getLocalizedLanding("fr", "tapis-recuperation-or")!;

export const metadata = localizedLandingMetadata(page);

export default function FrenchGoldRecoveryLanding() {
  return <LocalizedLandingPage page={page} />;
}
