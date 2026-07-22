"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { getAttributionForEvent } from "@/lib/attribution";
import { trackAnalyticsEvent, trackLeadConversion } from "@/lib/tracking";

type LeadCaptureFormProps = {
  formName: string;
  productDefault?: string;
  projectTypeDefault?: string;
  submitLabel: string;
  introText?: string;
};

export default function LeadCaptureForm({
  formName,
  productDefault = "",
  projectTypeDefault = "",
  submitLabel,
  introText,
}: LeadCaptureFormProps) {
  const router = useRouter();
  const formStarted = useRef(false);
  const [state, setState] = useState({
    submitting: false,
    error: null as string | null,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ submitting: true, error: null });

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("form_name", formName);
    formData.set("page_url", window.location.href);
    formData.set("page_path", window.location.pathname);
    formData.set("submitted_at", new Date().toISOString());
    formData.set("privacy_policy", "Acknowledged at submission");

    Object.entries(getAttributionForEvent()).forEach(([key, value]) => {
      if (value) formData.set(key, value);
    });

    try {
      const response = await fetch("https://formspree.io/f/xlgkpkza", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      trackLeadConversion({
        formName,
        product: String(formData.get("product") || ""),
        quantity: String(formData.get("quantity") || ""),
        country: String(formData.get("country") || ""),
      });

      sessionStorage.setItem(
        "vishome_form_success",
        JSON.stringify({
          token: Date.now(),
          formName,
          name: String(formData.get("name") || ""),
          product: String(formData.get("product") || ""),
          quantity: String(formData.get("quantity") || ""),
          country: String(formData.get("country") || ""),
        })
      );

      router.push("/thank-you");
    } catch {
      setState({
        submitting: false,
        error: "Oops! There was a problem with the submission. Please try again.",
      });
    }
  }

  function handleFormStart() {
    if (formStarted.current) return;
    formStarted.current = true;
    trackAnalyticsEvent("form_start", {
      form_name: formName,
      product: productDefault,
      page_path: window.location.pathname,
    });
  }

  return (
    <form onSubmit={handleSubmit} onFocusCapture={handleFormStart} className="space-y-6 rounded-2xl border border-border bg-surface p-5 shadow-sm md:space-y-8 md:p-12">
      <input name="_gotcha" type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {introText ? <p className="text-sm leading-relaxed text-muted">{introText}</p> : null}
      {state.error ? <p className="text-red-600 font-bold text-center text-sm" role="alert" aria-live="polite">{state.error}</p> : null}

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Name *</label>
          <input name="name" type="text" required autoComplete="name" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Email *</label>
          <input name="email" type="email" required autoComplete="email" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="john@company.com" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">WhatsApp</label>
          <input name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="+1 000 000 0000" />
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Country / Region *</label>
          <input name="country" type="text" required autoComplete="country-name" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="United States, UK, etc." />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Project Type *</label>
          <input name="project_type" type="text" required defaultValue={projectTypeDefault} className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="Hotel, office, retail, public area..." />
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Product Type *</label>
          <input name="product" type="text" required defaultValue={productDefault} className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="Carpet tiles, hotel carpet, sisal carpet..." />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Quantity / Area</label>
          <input name="quantity" type="text" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="e.g. 500 SQM" />
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Delivery Time</label>
          <input name="delivery_time" type="text" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="Target shipment or installation date" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Need Samples?</label>
          <select name="need_samples" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all">
            <option value="Not specified">Not specified</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Sample Box</label>
          <Link href="/request-sample-box" className="flex min-h-[56px] items-center justify-center border border-border bg-white px-5 py-4 text-center text-[10px] font-black uppercase tracking-[0.16em] text-primary transition-all hover:border-primary hover:bg-surface">
            Request Commercial Carpet Sample Box
          </Link>
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Message *</label>
        <textarea name="message" rows={6} required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all resize-none" placeholder="Tell us your project area, delivery country, timeline, design needs, or sample request..." />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-fox-orange w-full py-5 text-sm tracking-[0.16em] hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50 md:py-6 md:text-base md:tracking-[0.4em]"
      >
        {state.submitting ? "SENDING INQUIRY..." : submitLabel}
      </button>
      <p className="text-center text-xs leading-relaxed text-muted">
        By submitting, you acknowledge our{" "}
        <Link href="/privacy-policy" className="font-bold text-primary underline underline-offset-2">
          Privacy Policy
        </Link>{" "}
        and agree that our export team may contact you about this request.
      </p>
    </form>
  );
}
