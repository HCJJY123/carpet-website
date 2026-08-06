"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { trackInteractionConversion } from "@/lib/tracking";
import { getContactBridgeUrl } from "@/lib/whatsapp";

interface FormSuccess {
  token?: number;
  formName?: string;
  name?: string;
  product?: string;
  quantity?: string;
  country?: string;
}

export default function ThankYouPage() {
  const router = useRouter();
  const [allowed] = useState(() => {
    if (typeof window === "undefined") return false;
    return Boolean(sessionStorage.getItem("vishome_form_success"));
  });
  const [formSuccess] = useState<FormSuccess>(() => {
    if (typeof window === "undefined") return {};
    const raw = sessionStorage.getItem("vishome_form_success");
    if (!raw) return {};
    try {
      return JSON.parse(raw) as FormSuccess;
    } catch {
      return {};
    }
  });

  useEffect(() => {
    if (!allowed) {
      router.replace("/contact");
    }
  }, [allowed, router]);

  useEffect(() => {
    if (!allowed) return;

    const successRaw = sessionStorage.getItem("vishome_form_success");
    if (!successRaw) return;

    let success: { token?: number; formName?: string } = {};
    try {
      success = JSON.parse(successRaw) as { token?: number; formName?: string };
    } catch {
      success = {};
    }

    const token = String(success.token || "");
    const trackedToken = sessionStorage.getItem("vishome_thank_you_tracked");
    if (trackedToken && trackedToken === token) return;

    trackInteractionConversion("thank_you_page_view", {
      form_name: success.formName || "unknown",
      page_path: window.location.pathname,
    });

    if (token) {
      sessionStorage.setItem("vishome_thank_you_tracked", token);
    }
  }, [allowed]);

  if (!allowed) {
    return null;
  }

  const followUpMessage = `Hello, I just submitted a project inquiry${
    formSuccess.name ? ` (${formSuccess.name})` : ""
  } on your website. I'd like to follow up on WhatsApp for a faster response.`;

  const whatsappFollowUpUrl = getContactBridgeUrl(followUpMessage, {
    placement: "thank_you_follow_up",
    product: formSuccess.product,
    quantity: formSuccess.quantity,
    country: formSuccess.country,
    intent: "post_form_follow_up",
    pagePath: "/thank-you",
  });

  return (
    <div className="min-h-screen bg-white">
      <section className="section-padding">
        <div className="container-fox max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl text-white">
            ✓
          </div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Inquiry Received</p>
          <h1 className="mb-6 text-4xl font-black uppercase leading-tight text-primary md:text-5xl">
            Thank You
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-muted">
            Your request has been sent successfully. Our team will review your project details and reply with quotation, sample options, lead time, and technical information.
          </p>

          <a
            href={whatsappFollowUpUrl}
            data-whatsapp-placement="thank_you_follow_up"
            data-whatsapp-product={formSuccess.product || ""}
            data-whatsapp-intent="post_form_follow_up"
            className="mb-6 inline-flex w-full items-center justify-center gap-3 rounded-sm bg-[#25D366] px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.766-1.653-2.063-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.128.571-.075 1.758-.717 2.009-1.412.25-.694.25-1.288.175-1.412-.075-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-2.578l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Continue on WhatsApp for a Faster Reply
          </a>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/products" className="flex min-h-12 items-center justify-center border border-border bg-surface px-5 py-4 text-center text-xs font-black uppercase tracking-[0.16em] text-primary transition-all hover:border-primary hover:bg-white">
              View Product Collections
            </Link>
            <Link href="/contact" className="flex min-h-12 items-center justify-center bg-primary px-5 py-4 text-center text-xs font-black uppercase tracking-[0.16em] text-white transition-all hover:bg-black">
              Submit Another Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
