import { getAttributionForEvent } from "@/lib/attribution";
import { hasAdvertisingConsent, hasAnalyticsConsent } from "@/lib/consent";

type LeadConversionPayload = {
  formName: string;
  product?: string;
  quantity?: string;
  country?: string;
  company?: string;
  projectStage?: string;
  purchaseTimeframe?: string;
  needSamples?: string;
  leadScore?: number;
  leadGrade?: "A" | "B" | "C";
  productViewCount?: number;
  maxEngagedSeconds?: number;
  sourcePage?: string;
  trafficChannel?: string;
};

type ClickConversionType =
  | "whatsapp_click"
  | "email_click"
  | "phone_click"
  | "request_sample_box_click"
  | "thank_you_page_view";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    ym?: (...args: unknown[]) => void;
    uetq?: { push?: (...args: unknown[]) => void } | unknown[];
  }
}

function pushUetEvent(event: string, payload: Record<string, unknown>) {
  if (typeof window === "undefined" || !hasAdvertisingConsent()) return;
  const queue = window.uetq as { push?: (...args: unknown[]) => void } | undefined;
  if (typeof queue?.push !== "function") return;
  queue.push("event", event, payload);
}

const PRIVATE_KEYS = new Set([
  "email",
  "phone",
  "phone_number",
  "name",
  "company",
  "message",
  "address",
  "filename",
  "uploaded_filename",
  "href",
  "url",
  "page_location",
  "query",
  "ref",
]);

function sanitizePayload(payload: Record<string, unknown>) {
  const safe: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(payload)) {
    if (PRIVATE_KEYS.has(key) || value === undefined || value === null) continue;
    if (typeof value === "string") {
      safe[key] = value.slice(0, 160);
      continue;
    }
    if (typeof value === "number" || typeof value === "boolean") safe[key] = value;
  }
  return safe;
}

export function pushTrackingEvent(event: string, payload: Record<string, unknown>) {
  if (typeof window === "undefined" || (!hasAnalyticsConsent() && !hasAdvertisingConsent())) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...sanitizePayload(payload) });
}

export function trackAnalyticsEvent(event: string, payload: Record<string, unknown>) {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return;
  const fullPayload = sanitizePayload({ ...payload, ...getAttributionForEvent() });

  pushTrackingEvent(event, fullPayload);

  if (typeof window.gtag === "function") {
    window.gtag("event", event, fullPayload);
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", event);
  }

  const yandexMetricaId = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;
  if (yandexMetricaId && typeof window.ym === "function") {
    window.ym(Number(yandexMetricaId), "reachGoal", event, fullPayload);
  }
}

export function trackLeadConversion({
  formName,
  product,
  quantity,
  country,
  company,
  projectStage,
  purchaseTimeframe,
  needSamples,
  leadScore,
  leadGrade,
  productViewCount,
  maxEngagedSeconds,
  sourcePage,
  trafficChannel,
}: LeadConversionPayload) {
  if (typeof window === "undefined" || (!hasAnalyticsConsent() && !hasAdvertisingConsent())) return;

  const conversionSendTo =
    process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_CONVERSION_SEND_TO ||
    process.env.NEXT_PUBLIC_GOOGLE_ADS_THANK_YOU_CONVERSION_SEND_TO ||
    "AW-18306142236/MKQzCMXB_swcEJyghplF";
  const attribution = getAttributionForEvent();
  const leadPayload = sanitizePayload({
    event_category: "lead",
    event_label: formName,
    form_name: formName,
    product,
    quantity,
    country,
    company_provided: Boolean(company),
    project_stage: projectStage,
    purchase_timeframe: purchaseTimeframe,
    need_samples: needSamples,
    lead_score: leadScore,
    lead_grade: leadGrade,
    product_view_count: productViewCount,
    max_engaged_seconds: maxEngagedSeconds,
    source_page: sourcePage,
    traffic_channel: trafficChannel,
    ...attribution,
  });

  if (hasAnalyticsConsent() && typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", leadPayload);

    if (leadGrade === "A") {
      window.gtag("event", "high_intent_lead", leadPayload);
    }
  }

  if (hasAdvertisingConsent() && typeof window.gtag === "function" && conversionSendTo) {
    window.gtag("event", "conversion", {
      send_to: conversionSendTo,
      event_category: "lead",
      event_label: formName,
    });
  }

  if (hasAnalyticsConsent() && typeof window.clarity === "function") {
    window.clarity("event", "contact_form_submit");
    window.clarity("set", "lead_form", formName);
    if (product) window.clarity("set", "lead_product", product);
    if (country) window.clarity("set", "lead_country", country);
    if (leadGrade) window.clarity("set", "lead_grade", leadGrade);
    if (typeof leadScore === "number") window.clarity("set", "lead_score", String(leadScore));
    if (sourcePage) window.clarity("set", "lead_source_page", sourcePage);
    if (trafficChannel) window.clarity("set", "lead_traffic_channel", trafficChannel);
    if (attribution.utm_source) window.clarity("set", "lead_utm_source", attribution.utm_source);
    if (attribution.traffic_channel) window.clarity("set", "lead_traffic_channel", attribution.traffic_channel);
    if (attribution.ai_source) window.clarity("set", "lead_ai_source", attribution.ai_source);
  }

  if (hasAnalyticsConsent()) pushTrackingEvent("lead_form_submit_success", leadPayload);
  if (hasAdvertisingConsent()) pushUetEvent("generate_lead", {
    form_name: formName,
    product,
    country,
    source_page: sourcePage,
    traffic_channel: trafficChannel,
  });
  if (hasAnalyticsConsent() && leadGrade === "A") pushTrackingEvent("high_intent_lead", leadPayload);
  if (hasAdvertisingConsent() && leadGrade === "A") pushUetEvent("high_intent_lead", { form_name: formName, product, country });
}

export function trackInteractionConversion(type: ClickConversionType, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || (!hasAnalyticsConsent() && !hasAdvertisingConsent())) return;

  const fullPayload = sanitizePayload({ ...payload, ...getAttributionForEvent() });

  if (hasAnalyticsConsent()) pushTrackingEvent(type, fullPayload);
  if (hasAdvertisingConsent()) pushUetEvent(type, fullPayload);

  if ((hasAnalyticsConsent() || hasAdvertisingConsent()) && typeof window.gtag === "function") {
    window.gtag("event", type, fullPayload);
  }

  if (hasAnalyticsConsent() && typeof window.clarity === "function") {
    window.clarity("event", type);
  }
}

export {};
