const localizedCampaignPrefixes = ["/fr/", "/es/", "/ar/", "/de/", "/pt/", "/ja/", "/ko/"];

export function isLocalizedCampaignPath(pathname: string) {
  return localizedCampaignPrefixes.some((prefix) => pathname.startsWith(prefix)) || pathname === "/ru/hotelnyy-kovrolin";
}
