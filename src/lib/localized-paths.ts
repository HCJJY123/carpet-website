const localizedCampaignPrefixes = ["/fr/", "/es/", "/ar/", "/de/", "/pt/"];

export function isLocalizedCampaignPath(pathname: string) {
  return localizedCampaignPrefixes.some((prefix) => pathname.startsWith(prefix)) || pathname === "/ru/hotelnyy-kovrolin";
}
