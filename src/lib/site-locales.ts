export const defaultSiteLocale = "en" as const;

export const translatedSiteLocales = ["fr", "es", "ar", "de", "pt", "ru", "ja", "ko"] as const;

export type TranslatedSiteLocale = (typeof translatedSiteLocales)[number];
export type SiteLocale = typeof defaultSiteLocale | TranslatedSiteLocale;

export const localeCookieName = "vishome_locale";
export const googleTranslateCookieName = "googtrans";
export const localeCookieMaxAge = 60 * 60 * 24 * 180;
export const sharedLocaleCookieDomain = ".vishomecarpet.com";

const countryMarketContentLanguages: Record<string, string> = {
  ph: "en-PH",
  au: "en-AU",
  pl: "pl-PL",
  ro: "ro-RO",
  mx: "es-MX",
  dk: "da-DK",
  uz: "uz-UZ",
  am: "hy-AM",
  hr: "hr-HR",
  hu: "hu-HU",
  kg: "ru-KG",
  kz: "kk-KZ",
  rs: "sr-RS",
  no: "nb-NO",
  cz: "cs-CZ",
  sk: "sk-SK",
  si: "sl-SI",
  sg: "en-SG",
  ge: "ka-GE",
  se: "sv-SE",
  by: "ru-BY",
  fi: "fi-FI",
  az: "az-AZ",
  pe: "es-PE",
  co: "es-CO",
};

export function usesSharedLocaleCookieDomain(hostname: string) {
  const normalizedHostname = hostname.split(":")[0].toLowerCase();
  return normalizedHostname === "vishomecarpet.com" || normalizedHostname.endsWith(".vishomecarpet.com");
}

export const nativeLocalizedPaths = [
  "/fr/moquette-hotel-sur-mesure",
  "/fr/dalles-moquette-commerciales",
  "/fr/tapis-recuperation-or",
  "/es/alfombra-mineria-oro",
  "/es/losetas-alfombra-comerciales",
  "/ar/sajad-fanadi-mukhasas",
  "/ar/balat-sajad-tijari",
  "/de/hotel-teppichboden",
  "/pt/tapetes-personalizados-hotel",
  "/ja/custom-commercial-carpet",
  "/ko/commercial-carpet-tile",
  "/ru",
  "/ru/hotelnyy-kovrolin",
  "/ru/products/carpet-tiles/nylon-office-carpet-tile",
  "/ru/products/public-area/public-area-heavy-duty",
  "/ru/products/public-area/gold-mining-carpet-mat",
  "/ru/kovrolin-dlya-gostinits",
  "/ru/kovrovaya-plitka",
  "/ru/ofisnyy-kovrolin",
  "/ru/kommercheskiy-kovrolin",
  "/ru/aksmisterskiy-kovrolin",
  "/ru/pechatnyy-kovrolin",
  "/ru/sherstyanoy-kovrolin",
  "/ru/kovrolin-dlya-koridorov",
  "/ru/kovrolin-dlya-banketnykh-zalov",
  "/ru/kovrolin-dlya-restoranov",
  "/ru/kovrolin-dlya-kazino",
  "/ru/kovrolin-dlya-konferents-zalov",
  "/ru/dlya-importerov-i-distributorov",
  "/ru/dlya-dizaynerov-i-arkhitektorov",
  "/ru/dlya-gostinichnykh-proektov",
  "/ru/dlya-stroitelnykh-kompaniy",
  "/ru/optovye-postavki-kovrolina",
] as const;

export function isTranslatedSiteLocale(value: string | undefined): value is TranslatedSiteLocale {
  return translatedSiteLocales.includes(value as TranslatedSiteLocale);
}

export function getPathLocale(pathname: string): TranslatedSiteLocale | null {
  const segment = pathname.split("/")[1]?.toLowerCase();
  return isTranslatedSiteLocale(segment) ? segment : null;
}

export function stripLocaleFromPath(pathname: string) {
  const locale = getPathLocale(pathname);
  if (!locale) return pathname || "/";

  const stripped = pathname.slice(locale.length + 1);
  return stripped || "/";
}

export function localizePath(pathname: string, locale: TranslatedSiteLocale) {
  if (getPathLocale(pathname)) return pathname;
  return pathname === "/" ? `/${locale}` : `/${locale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function isNativeLocalizedPath(pathname: string) {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return nativeLocalizedPaths.includes(normalized as (typeof nativeLocalizedPaths)[number]);
}

export function getCountryMarketContentLanguage(pathname: string) {
  const [market, slug] = pathname.split("/").filter(Boolean);
  if (!market || !slug) return null;
  return countryMarketContentLanguages[market] ?? null;
}

export function isLocaleRoutingExcluded(pathname: string) {
  return (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname === "/markets" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/favicon.ico" ||
    pathname === "/favicon.svg" ||
    pathname === "/apple-touch-icon.png" ||
    /\.[a-z0-9]+$/i.test(pathname)
  );
}
