type LeadConversionPayload = {
  formName: string;
  product?: string;
  quantity?: string;
  country?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
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
}

export {};
