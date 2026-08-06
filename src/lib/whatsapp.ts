import { brandInfo } from "@/lib/data";

export interface WhatsAppContext {
  placement?: string;
  product?: string;
  intent?: string;
  pagePath?: string;
  country?: string;
  quantity?: string;
}

export function getWhatsAppBusinessUrl(message: string, context: WhatsAppContext = {}) {
  const phoneNumber = brandInfo.whatsapp.replace(/\D/g, "");

  const contextLines = [
    context.product ? `Product / Topic: ${context.product}` : "",
    context.quantity ? `Quantity: ${context.quantity}` : "",
    context.country ? `Country: ${context.country}` : "",
    context.intent ? `Inquiry Type: ${context.intent}` : "",
    context.pagePath ? `Source Page: ${context.pagePath}` : "",
    context.placement ? `Button: ${context.placement}` : "",
  ].filter(Boolean);

  const fullMessage = contextLines.length ? `${message}\n\n${contextLines.join("\n")}` : message;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
}

export function getContactBridgeUrl(message: string, context: WhatsAppContext = {}) {
  const url = new URL("/contact", brandInfo.url);
  url.searchParams.set("wa_message", message);
  if (context.placement) url.searchParams.set("placement", context.placement);
  if (context.product) url.searchParams.set("product", context.product);
  if (context.intent) url.searchParams.set("intent", context.intent);
  if (context.pagePath) url.searchParams.set("source", context.pagePath);
  if (context.country) url.searchParams.set("country", context.country);
  if (context.quantity) url.searchParams.set("quantity", context.quantity);
  return `${url.pathname}${url.search}`;
}

export const whatsappBusinessMessages = {
  header: `Hello, I am interested in commercial carpet for a project. Please send me price, sample options, MOQ, lead time, and technical data sheet.`,
  floating: `Hello, I am interested in commercial carpet for a project. Please send me price, sample options, MOQ, lead time, and technical data sheet.`,
  contact: `Hello, I am interested in commercial carpet for a project. Please send me price, sample options, MOQ, lead time, and technical data sheet.`,
  sampleBox: `Hello, I would like to request a commercial carpet sample box. Please send me sample options, preparation time, courier options, MOQ, price, and technical data sheet.`,
};
