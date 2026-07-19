const STORAGE_KEY = "vishome_attribution";

export interface Attribution {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  fbclid?: string;
  landingPage?: string;
  referrer?: string;
}

const PARAM_MAP: Record<keyof Attribution, string> = {
  utmSource: "utm_source",
  utmMedium: "utm_medium",
  utmCampaign: "utm_campaign",
  utmTerm: "utm_term",
  utmContent: "utm_content",
  gclid: "gclid",
  fbclid: "fbclid",
  landingPage: "",
  referrer: "",
};

export function captureAttributionOnce() {
  if (typeof window === "undefined") return;
  if (sessionStorage.getItem(STORAGE_KEY)) return;

  const params = new URLSearchParams(window.location.search);
  const attribution: Attribution = {};

  (Object.keys(PARAM_MAP) as (keyof Attribution)[]).forEach((key) => {
    const param = PARAM_MAP[key];
    if (!param) return;
    const value = params.get(param);
    if (value) attribution[key] = value;
  });

  attribution.landingPage = window.location.pathname;
  attribution.referrer = document.referrer || undefined;

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as Attribution;
  } catch {
    return {};
  }
}

export function getAttributionForEvent(): Record<string, string> {
  const attribution = getAttribution();
  const event: Record<string, string> = {};
  if (attribution.utmSource) event.utm_source = attribution.utmSource;
  if (attribution.utmMedium) event.utm_medium = attribution.utmMedium;
  if (attribution.utmCampaign) event.utm_campaign = attribution.utmCampaign;
  if (attribution.utmTerm) event.utm_term = attribution.utmTerm;
  if (attribution.utmContent) event.utm_content = attribution.utmContent;
  if (attribution.gclid) event.gclid = attribution.gclid;
  if (attribution.fbclid) event.fbclid = attribution.fbclid;
  if (attribution.landingPage) event.landing_page = attribution.landingPage;
  if (attribution.referrer) event.referrer = attribution.referrer;
  return event;
}
