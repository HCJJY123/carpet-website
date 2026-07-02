import { brandInfo } from "@/lib/data";

export function getWhatsAppBusinessUrl(message: string) {
  const phoneNumber = brandInfo.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappBusinessMessages = {
  header: `Hello Zara, I am interested in your commercial carpet solutions. Could you help me with a project quote?`,
  floating: `Hello Zara, I am interested in your commercial carpet solutions. Could you help me with a project quote?`,
  contact: `Hello Zara, I am interested in your commercial carpet solutions. Could you help me with a project quote?`,
};
