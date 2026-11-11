import { brandInfo } from "@/lib/data";

export interface WhatsAppContext {
  placement?: string;
  product?: string;
  intent?: string;
  pagePath?: string;
  pageUrl?: string;
  pageTitle?: string;
  country?: string;
  quantity?: string;
  campaign?: string;
}

const DEFAULT_MESSAGE = "Hello VCARPETS, I would like a quote for a commercial carpet project.";
const CAMPAIGN_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "msclkid"];
const COUNTRIES: Record<string, string> = {
  ro: "Romania", romania: "Romania", us: "United States", usa: "United States", "united-states": "United States",
  uk: "United Kingdom", "united-kingdom": "United Kingdom", ca: "Canada", canada: "Canada",
  au: "Australia", australia: "Australia", nz: "New Zealand", "new-zealand": "New Zealand",
  uae: "UAE", "united-arab-emirates": "UAE", sa: "Saudi Arabia", "saudi-arabia": "Saudi Arabia",
  ph: "Philippines", philippines: "Philippines", my: "Malaysia", malaysia: "Malaysia",
  bg: "Bulgaria", bulgaria: "Bulgaria", za: "South Africa", "south-africa": "South Africa",
  de: "Germany", germany: "Germany", fr: "France", france: "France", sg: "Singapore", singapore: "Singapore",
};

function line(value = "") { return String(value).replace(/\s+/g, " ").trim(); }

export function whatsAppCountryFromPath(path = "") {
  const slug = String(path).match(/(?:^|\/)markets\/([^/?#]+)/)?.[1];
  return slug ? COUNTRIES[slug.toLowerCase()] || "" : "";
}

function sourceUrl(context: WhatsAppContext) {
  try {
    const url = new URL(context.pageUrl || context.pagePath || "/", brandInfo.url);
    if (url.protocol === "https:" || url.protocol === "http:") return url.origin + url.pathname;
  } catch { /* Use the public website when a caller has no usable page path. */ }
  return brandInfo.url + "/";
}

export function whatsAppCampaignFromUrl(value = "") {
  try {
    const url = new URL(value, brandInfo.url);
    return CAMPAIGN_KEYS.filter(key => url.searchParams.get(key)).map(key => `${key}=${line(url.searchParams.get(key) || "")}`).join(", ");
  } catch { return ""; }
}

function fillBlank(body: string, label: string, value = "") {
  if (!line(value)) return body;
  return body.split("\n").map(row => row.trimEnd() === label + ":" ? label + ": " + line(value) : row).join("\n");
}

export function buildWhatsAppMessage(message = "", context: WhatsAppContext = {}) {
  const url = sourceUrl(context);
  const product = line(context.product);
  const country = line(context.country) || whatsAppCountryFromPath(url);
  let body: string;
  if (message.includes("\nArea / quantity (m² / pcs):")) {
    body = message.split(/\n\n--- Attribution ---/)[0];
  } else {
    const application = /hotel/i.test(product + " " + url) ? "Hotel" : /office/i.test(product + " " + url) ? "Office" : "";
    const fields = [
      ["Application (hotel / office / other)", application],
      ["Carpet type / construction", product],
      ["Area / quantity (m² / pcs)", line(context.quantity)],
      ["Tile size / roll width", ""],
      ["Material / backing preference", ""],
      ["Design / color reference", ""],
      ["Destination country / port", country],
      ["Required delivery date", ""],
      ["Sample / technical document needs", /sample/i.test(context.intent || "") ? "Sample options and courier cost" : ""],
    ];
    const lines = [DEFAULT_MESSAGE, "", ...fields.map(([label, value]) => `${label}: ${value}`)];
    const request = message.trim();
    if (request && request !== DEFAULT_MESSAGE) lines.push("", "Additional request: " + request.replace(/^(?:Hello|Hi)(?: VCARPETS(?: team)?)?[,!.]?\s*/i, ""));
    lines.push("", "Please advise on pricing, MOQ, samples, lead time and technical documents. Thank you.");
    body = lines.join("\n");
  }

  body = fillBlank(body, "Carpet type / construction", product);
  body = fillBlank(body, "Area / quantity (m² / pcs)", context.quantity);
  body = fillBlank(body, "Destination country / port", country);
  const page = line(context.pageTitle || "VCARPETS project inquiry").replace(/\s*[|·–-]\s*VCARPETS\s*$/i, "");
  const attribution = [
    ["Source", line(context.placement || "website_whatsapp")],
    ["Page", page],
    ["Intent", line(context.intent || "request_project_quote")],
    ["URL", url],
    ["Campaign", line(context.campaign || "") || whatsAppCampaignFromUrl(context.pageUrl || context.pagePath)],
  ].filter(([, value]) => value);
  return body + "\n\n--- Attribution ---\n" + attribution.map(([label, value]) => `${label}: ${value}`).join("\n");
}

export function getWhatsAppBusinessUrl(message = "", context: WhatsAppContext = {}) {
  const phoneNumber = brandInfo.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(buildWhatsAppMessage(message, context))}`;
}

export function getContactBridgeUrl(message = "", context: WhatsAppContext = {}) {
  return getWhatsAppBusinessUrl(message, context);
}

export const whatsappBusinessMessages = {
  header: DEFAULT_MESSAGE,
  floating: DEFAULT_MESSAGE,
  contact: DEFAULT_MESSAGE,
  sampleBox: "Hello VCARPETS, I would like a commercial carpet sample box. Please advise sample formats, preparation time and courier options.",
};
