"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getWhatsAppBusinessUrl } from "@/lib/whatsapp";

function isValidWhatsAppUrl(value: string | null) {
  if (!value) return false;

  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "wa.me";
  } catch {
    return false;
  }
}

function WhatsAppBridgePromptContent() {
  const searchParams = useSearchParams();
  const legacyWhatsapp = searchParams.get("whatsapp");
  const message = searchParams.get("wa_message")?.trim();
  const product = searchParams.get("product")?.trim();
  const whatsapp = isValidWhatsAppUrl(legacyWhatsapp)
    ? legacyWhatsapp
    : message
      ? getWhatsAppBusinessUrl(message, {
          placement: searchParams.get("placement") || "contact_bridge",
          product: product || undefined,
          intent: searchParams.get("intent") || "project_quote",
          pagePath: searchParams.get("source") || "/contact",
          country: searchParams.get("country") || undefined,
          quantity: searchParams.get("quantity") || undefined,
        })
      : null;

  if (!isValidWhatsAppUrl(whatsapp)) return null;

  return (
    <div className="mb-6 border border-[#25D366]/30 bg-[#F3FFF7] p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#168A42]">WhatsApp Inquiry Ready</p>
          <h2 className="mt-2 text-xl font-black uppercase text-primary">Continue on WhatsApp or Submit the Quote Form</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {product ? `${product} is prefilled for this inquiry. ` : ""}For the most accurate quote, submit the form below with quantity, destination, and email.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.open(whatsapp!, "_blank", "noopener,noreferrer")}
          data-whatsapp-placement="contact_bridge"
          data-whatsapp-product={product || undefined}
          data-whatsapp-intent={searchParams.get("intent") || "project_quote"}
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-sm bg-[#25D366] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-0.5 hover:bg-[#168A42]"
        >
          Open WhatsApp
        </button>
      </div>
    </div>
  );
}

export default function WhatsAppBridgePrompt() {
  return (
    <Suspense fallback={null}>
      <WhatsAppBridgePromptContent />
    </Suspense>
  );
}
