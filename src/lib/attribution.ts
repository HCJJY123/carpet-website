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
  trafficChannel?: "ai_referral";
  aiSource?: string;
}

const PARAM_MAP = {
  utmSource: "utm_source",
  utmMedium: "utm_medium",
  utmCampaign: "utm_campaign",
  utmTerm: "utm_term",
  utmContent: "utm_content",
  gclid: "gclid",
  fbclid: "fbclid",
  landingPage: "",
  referrer: "",
} satisfies Partial<Record<keyof Attribution, string>>;

type AttributionParamKey = keyof typeof PARAM_MAP;

const AI_SOURCE_PATTERNS = [
  { source: "ChatGPT", patterns: ["chatgpt", "openai"] },
  { source: "Perplexity", patterns: ["perplexity"] },
  { source: "Microsoft Copilot", patterns: ["copilot.microsoft", "microsoftcopilot"] },
  { source: "Google Gemini", patterns: ["gemini.google", "bard.google"] },
  { source: "Claude", patterns: ["claude.ai", "anthropic"] },
  { source: "Poe", patterns: ["poe.com", "quora-poe"] },
  { source: "You.com", patterns: ["you.com"] },
] as const;

export function identifyAiSource(...values: Array<string | undefined>) {
  const haystack = values.filter(Boolean).join(" ").toLowerCase();
  if (!haystack) return undefined;

  return AI_SOURCE_PATTERNS.find(({ patterns }) =>
    patterns.some((pattern) => haystack.includes(pattern))
  )?.source;
}

export function captureAttributionOnce() {
  if (typeof window === "undefined") return;
  if (sessionStorage.getItem(STORAGE_KEY)) return;

  const params = new URLSearchParams(window.location.search);
  const attribution: Attribution = {};

  (Object.keys(PARAM_MAP) as AttributionParamKey[]).forEach((key) => {
    const param = PARAM_MAP[key];
    if (!param) return;
    const value = params.get(param);
    if (value) attribution[key] = value;
  });

  attribution.landingPage = window.location.pathname;
  attribution.referrer = document.referrer || undefined;
  attribution.aiSource = identifyAiSource(attribution.utmSource, attribution.referrer);
  if (attribution.aiSource) attribution.trafficChannel = "ai_referral";

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
  if (attribution.trafficChannel) event.traffic_channel = attribution.trafficChannel;
  if (attribution.aiSource) event.ai_source = attribution.aiSource;
  return event;
}
