import { brandInfo } from "@/lib/data";

export function getWhatsAppBusinessUrl(message: string) {
  const phoneNumber = brandInfo.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappBusinessMessages = {
  header: `Hello, I am interested in commercial carpet for a project. Please send me price, sample options, MOQ, lead time, and technical data sheet.`,
  floating: `Hello, I am interested in commercial carpet for a project. Please send me price, sample options, MOQ, lead time, and technical data sheet.`,
  contact: `Hello, I am interested in commercial carpet for a project. Please send me price, sample options, MOQ, lead time, and technical data sheet.`,
  sampleBox: `Hello, I would like to request a commercial carpet sample box. Please send me sample options, preparation time, courier options, MOQ, price, and technical data sheet.`,
};
