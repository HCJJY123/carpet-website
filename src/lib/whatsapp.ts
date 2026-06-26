import { brandInfo } from "@/lib/data";

export function getWhatsAppBusinessUrl(message: string) {
  const phoneNumber = brandInfo.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappBusinessMessages = {
  header: `Hello ${brandInfo.shortName}, I need commercial carpet support. Please help me with product selection, quotation, and samples.`,
  floating: `Hello ${brandInfo.shortName}, I am interested in your commercial carpet solutions. Could you help me with a project quote?`,
  contact: `Hello ${brandInfo.shortName}, I am preparing a commercial carpet project. I can share area, timeline, and floor plan for a quick quote.`,
};
