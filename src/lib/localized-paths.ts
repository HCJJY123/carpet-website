import { isNativeLocalizedPath } from "@/lib/site-locales";

export function isLocalizedCampaignPath(pathname: string) {
  return isNativeLocalizedPath(pathname);
}
