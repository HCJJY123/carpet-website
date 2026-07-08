"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { trackInteractionConversion } from "@/lib/tracking";

export default function ThankYouPage() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const success = sessionStorage.getItem("vishome_form_success");
    if (!success) {
      router.replace("/contact");
      return;
    }

    setAllowed(true);
  }, [router]);

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
