"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { getAttributionForEvent } from "@/lib/attribution";
import { getFunnelSessionSignals, scoreLead } from "@/lib/funnel";
import { trackAnalyticsEvent, trackLeadConversion } from "@/lib/tracking";

type LeadCaptureFormProps = {
  formName: string;
  productDefault?: string;
  projectTypeDefault?: string;
  submitLabel: string;
  introText?: string;
  variant?: "full" | "quick" | "sample";
};

export default function LeadCaptureForm({
  formName,
  productDefault = "",
  projectTypeDefault = "",
  submitLabel,
  introText,
  variant = "full",
}: LeadCaptureFormProps) {
  const router = useRouter();
  const formStarted = useRef(false);
  const lastInvalidField = useRef("");
  const [state, setState] = useState({
    submitting: false,
    error: null as string | null,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ submitting: true, error: null });

    const form = e.currentTarget;
    const formData = new FormData(form);
    if (!formData.get("project_stage")) formData.set("project_stage", "Not specified");
    if (!formData.get("purchase_timeframe")) formData.set("purchase_timeframe", "Not specified");
    if (!formData.get("need_samples")) formData.set("need_samples", variant === "sample" ? "Yes" : "Not specified");
    if (!formData.get("message")) {
      formData.set(
        "message",
        variant === "sample"
          ? "Please recommend suitable carpet samples and confirm courier cost, preparation time, and technical documents."
          : "Please recommend a suitable commercial carpet specification and send a project quotation."
      );
    }
    formData.set("form_name", formName);
    formData.set("page_url", window.location.href);
    formData.set("page_path", window.location.pathname);
    formData.set("submitted_at", new Date().toISOString());
    formData.set("privacy_policy", "Acknowledged at submission");

    Object.entries(getAttributionForEvent()).forEach(([key, value]) => {
      if (value) formData.set(key, value);
    });

    const signals = getFunnelSessionSignals();
    const qualification = scoreLead({
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      whatsapp: String(formData.get("whatsapp") || ""),
      quantity: String(formData.get("quantity") || ""),
      projectStage: String(formData.get("project_stage") || ""),
      purchaseTimeframe: String(formData.get("purchase_timeframe") || ""),
      needSamples: String(formData.get("need_samples") || ""),
    }, signals);
    formData.set("lead_score", String(qualification.score));
    formData.set("lead_grade", qualification.grade);
    formData.set("lead_score_reasons", qualification.reasons.join("; "));
    formData.set("session_product_views", String(signals.productViewCount));
    formData.set("session_max_engaged_seconds", String(signals.maxEngagedSeconds));
    formData.set("session_section_views", String(signals.sectionViewCount));

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || "Submission failed");
      }

      trackLeadConversion({
        formName,
        product: String(formData.get("product") || ""),
        quantity: String(formData.get("quantity") || ""),
        country: String(formData.get("country") || ""),
        company: String(formData.get("company") || ""),
        projectStage: String(formData.get("project_stage") || ""),
        purchaseTimeframe: String(formData.get("purchase_timeframe") || ""),
        needSamples: String(formData.get("need_samples") || ""),
        leadScore: qualification.score,
        leadGrade: qualification.grade,
        productViewCount: signals.productViewCount,
        maxEngagedSeconds: signals.maxEngagedSeconds,
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
    } catch (error) {
      setState({
        submitting: false,
        error: error instanceof Error && error.message !== "Submission failed"
          ? error.message
          : "We could not send the request. Please check the fields and try again.",
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

  function handleInvalid(event: React.FormEvent<HTMLFormElement>) {
    const field = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    if (!field.name || lastInvalidField.current === field.name) return;
    lastInvalidField.current = field.name;
    const fieldLabel = field.name.replaceAll("_", " ");
    setState((current) => ({ ...current, error: `Please complete the ${fieldLabel} field.` }));
    trackAnalyticsEvent("form_validation_error", {
      form_name: formName,
      field_name: field.name,
      page_path: window.location.pathname,
    });
  }

  const fieldClass = "w-full rounded-sm border border-border bg-white px-4 py-3.5 text-base transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/10";
  const labelClass = "mb-2 block text-[10px] font-black uppercase tracking-[0.16em] text-primary";
  const sampleOptions = Array.from(new Set([
    ...(productDefault && productDefault !== "Commercial carpet sample box" ? [productDefault] : []),
    "Carpet tile samples",
    "Hotel broadloom samples",
    "Mixed commercial carpet samples",
  ]));

  if (variant === "quick" || variant === "sample") {
    const isSample = variant === "sample";

    return (
      <form
        onSubmit={handleSubmit}
        onFocusCapture={handleFormStart}
        onInvalidCapture={handleInvalid}
        className="space-y-5 rounded-lg border border-border bg-white p-5 shadow-sm md:p-7"
      >
        <input name="_gotcha" type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <input name="project_type" type="hidden" value={projectTypeDefault || (isSample ? "Sample request" : "Commercial carpet project")} />
        <input name="need_samples" type="hidden" value={isSample ? "Yes" : "Not specified"} />
        {isSample ? <input name="project_stage" type="hidden" value="Sample evaluation" /> : null}
        {!isSample ? <input name="product" type="hidden" value={productDefault || "Commercial carpet tiles"} /> : null}

        {introText ? <p className="text-sm leading-relaxed text-muted">{introText}</p> : null}
        {state.error ? <p className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700" role="alert" aria-live="polite">{state.error}</p> : null}

        {isSample ? (
          <fieldset>
            <legend className={labelClass}>Choose Sample Type *</legend>
            <div className="grid gap-2 sm:grid-cols-3">
              {sampleOptions.map((option, index) => (
                <label key={option} className="cursor-pointer">
                  <input
                    className="peer sr-only"
                    type="radio"
                    name="product"
                    value={option}
                    defaultChecked={index === 0}
                    onChange={() => trackAnalyticsEvent("sample_type_selected", {
                      form_name: formName,
                      sample_type: option,
                      page_path: window.location.pathname,
                    })}
                  />
                  <span className="flex min-h-14 items-center justify-center rounded-sm border border-border bg-surface px-3 py-3 text-center text-[10px] font-black uppercase leading-relaxed tracking-[0.1em] text-primary transition-colors peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Name *</label>
            <input name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Your name" />
          </div>
          <div>
            <label className={labelClass}>Company</label>
            <input name="company" type="text" autoComplete="organization" className={fieldClass} placeholder="Company or organization" />
          </div>
          <div>
            <label className={labelClass}>Business Email *</label>
            <input name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="name@company.com" />
          </div>
          <div>
            <label className={labelClass}>Country / Region *</label>
            <input name="country" type="text" required autoComplete="country-name" className={fieldClass} placeholder="Delivery country" />
          </div>
          <div>
            <label className={labelClass}>WhatsApp</label>
            <input name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" className={fieldClass} placeholder="Include country code" />
          </div>
          <div>
            <label className={labelClass}>{isSample ? "Estimated Project Area" : "Quantity / Area"}</label>
            <input name="quantity" type="text" className={fieldClass} placeholder="e.g. 500 SQM" />
          </div>
        </div>

        {!isSample ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Purchase Stage</label>
              <select name="project_stage" defaultValue="Not specified" className={fieldClass}>
                <option value="Not specified">Select stage (optional)</option>
                <option value="Ready to order">Ready to order</option>
                <option value="Requesting quotation">Requesting quotation</option>
                <option value="Sample evaluation">Sample evaluation</option>
                <option value="Tender / specification">Tender / specification</option>
                <option value="Comparing suppliers">Comparing suppliers</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Purchase Timeframe</label>
              <select name="purchase_timeframe" defaultValue="Not specified" className={fieldClass}>
                <option value="Not specified">Select timing (optional)</option>
                <option value="Within 30 days">Within 30 days</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="More than 6 months">More than 6 months</option>
              </select>
            </div>
          </div>
        ) : null}

        <div>
          <label className={labelClass}>Project Notes</label>
          <textarea
            name="message"
            rows={3}
            className={`${fieldClass} resize-none`}
            defaultValue={isSample
              ? "Please recommend suitable samples and confirm courier options."
              : "Please recommend a suitable carpet tile and send price, MOQ, sample, and lead time."}
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="flex min-h-14 w-full items-center justify-center rounded-sm bg-[#C8752A] px-5 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-white shadow-sm transition-colors hover:bg-[#AD6424] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {state.submitting ? "SENDING..." : submitLabel}
        </button>
        <p className="text-center text-xs leading-relaxed text-muted">
          {isSample ? "We confirm sample availability, courier cost, and preparation time before dispatch. " : "The export team replies with pricing and specification guidance. "}
          <Link href="/privacy-policy" className="font-bold text-primary underline underline-offset-2">Privacy Policy</Link>
        </p>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocusCapture={handleFormStart} onInvalidCapture={handleInvalid} className="space-y-6 rounded-lg border border-border bg-surface p-5 shadow-sm md:space-y-8 md:p-10">
      <input name="_gotcha" type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {introText ? <p className="text-sm leading-relaxed text-muted">{introText}</p> : null}
      {state.error ? <p className="text-red-600 font-bold text-center text-sm" role="alert" aria-live="polite">{state.error}</p> : null}

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Name</label>
          <input name="name" type="text" autoComplete="name" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Company Name *</label>
          <input name="company" type="text" required autoComplete="organization" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="Your company or organization" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Email *</label>
          <input name="email" type="email" required autoComplete="email" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="john@company.com" />
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">WhatsApp</label>
          <input name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="+1 000 000 0000" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Country / Region</label>
          <input name="country" type="text" autoComplete="country-name" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="United States, UK, etc." />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Project Type</label>
          <input name="project_type" type="text" defaultValue={projectTypeDefault} className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="Hotel, office, retail, public area..." />
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Product Type *</label>
          <input name="product" type="text" required defaultValue={productDefault} className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="Carpet tiles, hotel carpet, sisal carpet..." />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Purchase Stage</label>
          <select name="project_stage" defaultValue="Not specified" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all">
            <option value="Not specified">Select your current stage (optional)</option>
            <option value="Ready to order">Ready to order</option>
            <option value="Requesting quotation">Requesting quotation</option>
            <option value="Sample evaluation">Sample evaluation</option>
            <option value="Tender / specification">Tender / specification</option>
            <option value="Comparing suppliers">Comparing suppliers</option>
            <option value="General research">General research</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Purchase Timeframe</label>
          <select name="purchase_timeframe" defaultValue="Not specified" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all">
            <option value="Not specified">Select expected timing (optional)</option>
            <option value="Within 30 days">Within 30 days</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="More than 6 months">More than 6 months</option>
            <option value="Not decided">Not decided</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Quantity / Area *</label>
          <input name="quantity" type="text" required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="e.g. 500 SQM" />
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
        <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Message</label>
        <textarea name="message" rows={6} className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all resize-none" placeholder="Tell us your project area, delivery country, timeline, design needs, or sample request..." />
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
