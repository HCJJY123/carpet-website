import { getAttributionForEvent } from "@/lib/attribution";

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
};

type FormSubmitPayload = {
  formName: string;
  email?: string;
  pagePath?: string;
  pageUrl?: string;
  product?: string;
  country?: string;
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
  }
}

function conversionSendToFor(type: ClickConversionType) {
  const legacyEmailConversionSendTo = "AW-18306142236/YUPmCKq-gc0cEJyghplE";
  const emailConversionSendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_EMAIL_CONVERSION_SEND_TO;
  const map: Record<ClickConversionType, string | undefined> = {
    thank_you_page_view:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_THANK_YOU_CONVERSION_SEND_TO ||
      "AW-18306142236/MKQzCMXB_swcEJyghplF",
    whatsapp_click:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_SEND_TO ||
      "AW-18306142236/NqtSCK74gc0cEJyghplE",
    email_click:
      emailConversionSendTo && emailConversionSendTo !== legacyEmailConversionSendTo
        ? emailConversionSendTo
        : "AW-18306142236/jHA5COn46NkcEJyghplE",
    phone_click:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_SEND_TO ||
      "AW-18306142236/9VJZCK7t_swcEJyghplE",
    request_sample_box_click:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_SAMPLE_BOX_CONVERSION_SEND_TO ||
      "AW-18306142236/Co0OCK726MwcEJyghplE",
  };

  return map[type];
}

export function pushTrackingEvent(event: string, payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

export function trackAnalyticsEvent(event: string, payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const fullPayload = { ...payload, ...getAttributionForEvent() };

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
}: LeadConversionPayload) {
  if (typeof window === "undefined") return;

  const conversionSendTo =
    process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_CONVERSION_SEND_TO ||
    process.env.NEXT_PUBLIC_GOOGLE_ADS_THANK_YOU_CONVERSION_SEND_TO ||
    "AW-18306142236/MKQzCMXB_swcEJyghplF";
  const attribution = getAttributionForEvent();
  const leadPayload = {
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
    ...attribution,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", leadPayload);

    if (conversionSendTo) {
      window.gtag("event", "conversion", {
        send_to: conversionSendTo,
        event_category: "lead",
        event_label: formName,
      });
    }

    if (leadGrade === "A") {
      window.gtag("event", "high_intent_lead", leadPayload);
    }
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", "contact_form_submit");
    window.clarity("set", "lead_form", formName);
    if (product) window.clarity("set", "lead_product", product);
    if (country) window.clarity("set", "lead_country", country);
    if (leadGrade) window.clarity("set", "lead_grade", leadGrade);
    if (typeof leadScore === "number") window.clarity("set", "lead_score", String(leadScore));
    if (attribution.utm_source) window.clarity("set", "lead_utm_source", attribution.utm_source);
    if (attribution.traffic_channel) window.clarity("set", "lead_traffic_channel", attribution.traffic_channel);
    if (attribution.ai_source) window.clarity("set", "lead_ai_source", attribution.ai_source);
  }

  pushTrackingEvent("lead_form_submit_success", leadPayload);
  if (leadGrade === "A") pushTrackingEvent("high_intent_lead", leadPayload);
}

export function trackFormSubmitEmail({
  formName,
  email,
  pagePath,
  pageUrl,
  product,
  country,
}: FormSubmitPayload) {
  if (typeof window === "undefined") return;

  const normalizedEmail = email?.trim().toLowerCase();
  if (!normalizedEmail) return;

  const payload = {
    form_name: formName,
    email: normalizedEmail,
    page_path: pagePath,
    page_url: pageUrl,
    product,
    country,
    ...getAttributionForEvent(),
  };

  if (typeof window.gtag === "function") {
    window.gtag("set", "user_data", {
      email: normalizedEmail,
    });

    window.gtag("event", "表单提交", {
      send_to: "G-T2VYHXTK1F",
      ...payload,
    });
  }

  pushTrackingEvent("form_submit", payload);
}

export function trackInteractionConversion(type: ClickConversionType, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const fullPayload = { ...payload, ...getAttributionForEvent() };

  pushTrackingEvent(type, fullPayload);

  if (typeof window.gtag === "function") {
    window.gtag("event", type, fullPayload);

    const sendTo = conversionSendToFor(type);
    if (sendTo) {
      window.gtag("event", "conversion", {
        send_to: sendTo,
        ...fullPayload,
      });
    }
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", type);
  }
}

export {};
