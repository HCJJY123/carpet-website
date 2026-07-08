type LeadConversionPayload = {
  formName: string;
  product?: string;
  quantity?: string;
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
  }
}

function conversionSendToFor(type: ClickConversionType) {
  const map: Record<ClickConversionType, string | undefined> = {
    thank_you_page_view:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_THANK_YOU_CONVERSION_SEND_TO ||
      "AW-18306142236/MKQzCMXB_swcEJyghplF",
    whatsapp_click:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_SEND_TO ||
      "AW-18306142236/NqtSCK74gc0cEJyghplE",
    email_click:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_EMAIL_CONVERSION_SEND_TO ||
      "AW-18306142236/YUPmCKq-gc0cEJyghplE",
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

export function trackLeadConversion({
  formName,
  product,
  quantity,
  country,
}: LeadConversionPayload) {
  if (typeof window === "undefined") return;

  const conversionSendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_CONVERSION_SEND_TO;

  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      event_category: "lead",
      event_label: formName,
      form_name: formName,
      product,
      quantity,
      country,
    });

    if (conversionSendTo) {
      window.gtag("event", "conversion", {
        send_to: conversionSendTo,
        event_category: "lead",
        event_label: formName,
      });
    }
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", "contact_form_submit");
    window.clarity("set", "lead_form", formName);
    if (product) window.clarity("set", "lead_product", product);
    if (country) window.clarity("set", "lead_country", country);
  }

  pushTrackingEvent("lead_form_submit_success", {
    form_name: formName,
    product,
    quantity,
    country,
  });
}

export function trackInteractionConversion(type: ClickConversionType, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  pushTrackingEvent(type, payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", type, payload);

    const sendTo = conversionSendToFor(type);
    if (sendTo) {
      window.gtag("event", "conversion", {
        send_to: sendTo,
        ...payload,
      });
    }
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", type);
  }
}

export {};
