"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getAttributionForEvent } from "@/lib/attribution";
import { getFunnelSessionSignals, scoreLead } from "@/lib/funnel";
import { trackAnalyticsEvent, trackFormSubmitEmail, trackLeadConversion } from "@/lib/tracking";
import { getVisitorIdentity } from "@/lib/visitorIdentity";

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
  const fullFormRef = useRef<HTMLFormElement>(null);
  const primarySubmitRef = useRef<HTMLButtonElement>(null);
  const [fullFormVisible, setFullFormVisible] = useState(false);
  const [primarySubmitVisible, setPrimarySubmitVisible] = useState(false);
  const [state, setState] = useState({
    submitting: false,
    error: null as string | null,
  });

  useEffect(() => {
    if (variant !== "full") return;

    const form = fullFormRef.current;
    const primarySubmit = primarySubmitRef.current;
    if (!form || !primarySubmit) return;

    const formObserver = new IntersectionObserver(
      ([entry]) => setFullFormVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    const submitObserver = new IntersectionObserver(
      ([entry]) => setPrimarySubmitVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );

    formObserver.observe(form);
    submitObserver.observe(primarySubmit);

    return () => {
      formObserver.disconnect();
      submitObserver.disconnect();
    };
  }, [variant]);

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

    const identity = getVisitorIdentity();
    formData.set("visitor_id", identity.visitorId);
    formData.set("session_id", identity.sessionId);
    formData.set("visitor_label", identity.visitorLabel);

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

    trackFormSubmitEmail({
      formName,
      email: String(formData.get("email") || ""),
      pagePath: window.location.pathname,
      pageUrl: window.location.href,
      product: String(formData.get("product") || productDefault || ""),
      country: String(formData.get("country") || ""),
    });

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
    if (!field.name || lastInvalidField.current) return;
    lastInvalidField.current = field.name;
    window.setTimeout(() => {
      lastInvalidField.current = "";
    }, 0);
    const fieldLabel = field.name.replaceAll("_", " ");
    setState((current) => ({ ...current, error: `Please complete the ${fieldLabel} field.` }));
    trackAnalyticsEvent("form_validation_error", {
      form_name: formName,
      field_name: field.name,
      page_path: window.location.pathname,
    });
  }

  const fieldClass = "w-full rounded-sm border border-border bg-white px-4 py-3.5 text-base transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/10";
  const labelClass = "mb-2 block text-xs font-bold tracking-[0.02em] text-primary";
  const sampleOptions = Array.from(new Set([
    ...(productDefault && productDefault !== "Commercial carpet sample box" ? [productDefault] : []),
    "Carpet tile samples",
    "Hotel broadloom samples",
    "Mixed commercial carpet samples",
  ]));
  const showFloatingSubmit = variant === "full" && fullFormVisible && !primarySubmitVisible;

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
                  <span className="flex min-h-14 items-center justify-center rounded-sm border border-border bg-surface px-3 py-3 text-center text-[13px] font-bold leading-relaxed tracking-[0.02em] text-primary transition-colors peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white">
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
          className="flex min-h-14 w-full items-center justify-center rounded-sm bg-[#C8752A] px-5 py-4 text-center text-[13px] font-bold uppercase tracking-[0.06em] text-white shadow-sm transition-colors hover:bg-[#AD6424] disabled:cursor-not-allowed disabled:opacity-50"
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
    <form
      ref={fullFormRef}
      onSubmit={handleSubmit}
      onFocusCapture={handleFormStart}
      onInvalidCapture={handleInvalid}
      className="space-y-6 rounded-lg border border-border bg-surface p-5 shadow-sm md:space-y-7 md:p-10"
    >
      <input name="_gotcha" type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {introText ? <p className="text-sm leading-relaxed text-muted">{introText}</p> : null}
      {state.error ? <p className="text-red-600 font-bold text-center text-sm" role="alert" aria-live="polite">{state.error}</p> : null}

      <div className="border-b border-border pb-6 md:pb-7">
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#C8752A]">Quote Essentials</p>
          <p className="text-xs font-semibold text-muted">4 required details</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          <div>
            <label className={labelClass}>Company Name *</label>
            <input name="company" type="text" required autoComplete="organization" className={fieldClass} placeholder="Your company or organization" />
          </div>
          <div>
            <label className={labelClass}>Business Email *</label>
            <input name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="john@company.com" />
          </div>
          <div>
            <label className={labelClass}>Product Type *</label>
            <input name="product" type="text" required defaultValue={productDefault} className={fieldClass} placeholder="Carpet tiles, hotel carpet, sisal carpet..." />
          </div>
          <div>
            <label className={labelClass}>Quantity / Area *</label>
            <input name="quantity" type="text" required className={fieldClass} placeholder="e.g. 500 SQM" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-primary">Additional Project Details</p>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        <div>
          <label className={labelClass}>Name</label>
          <input name="name" type="text" autoComplete="name" className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label className={labelClass}>WhatsApp</label>
          <input name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" className={fieldClass} placeholder="+1 000 000 0000" />
        </div>
        <div>
          <label className={labelClass}>Country / Region</label>
          <input name="country" type="text" autoComplete="country-name" className={fieldClass} placeholder="United States, UK, etc." />
        </div>
        <div>
          <label className={labelClass}>Project Type</label>
          <input name="project_type" type="text" defaultValue={projectTypeDefault} className={fieldClass} placeholder="Hotel, office, retail, public area..." />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        <div>
          <label className={labelClass}>Purchase Stage</label>
          <select name="project_stage" defaultValue="Not specified" className={fieldClass}>
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
          <label className={labelClass}>Purchase Timeframe</label>
          <select name="purchase_timeframe" defaultValue="Not specified" className={fieldClass}>
            <option value="Not specified">Select expected timing (optional)</option>
            <option value="Within 30 days">Within 30 days</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="More than 6 months">More than 6 months</option>
            <option value="Not decided">Not decided</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        <div>
          <label className={labelClass}>Delivery Time</label>
          <input name="delivery_time" type="text" className={fieldClass} placeholder="Target shipment or installation date" />
        </div>
        <div>
          <label className={labelClass}>Need Samples?</label>
          <select name="need_samples" className={fieldClass}>
            <option value="Not specified">Not specified</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea name="message" rows={5} className={`${fieldClass} resize-none`} placeholder="Tell us your delivery timeline, design needs, or sample request..." />
      </div>

      <div>
        <p className={labelClass}>Sample Box</p>
        <Link href="/request-sample-box" className="flex min-h-[52px] items-center justify-center border border-border bg-white px-5 py-4 text-center text-[13px] font-bold uppercase tracking-[0.06em] text-primary transition-all hover:border-primary hover:bg-surface">
          Request Commercial Carpet Sample Box
        </Link>
      </div>

      <button
        ref={primarySubmitRef}
        type="submit"
        disabled={state.submitting}
        className="btn-fox-orange w-full py-5 text-sm tracking-[0.06em] hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50 md:py-6 md:text-base md:tracking-[0.08em]"
      >
        {state.submitting ? "SENDING INQUIRY..." : submitLabel}
      </button>
      <div className="flex items-start justify-center gap-2 text-center text-sm leading-relaxed text-primary">
        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#25D366] shadow-[0_0_0_4px_rgba(37,211,102,0.12)]" aria-hidden="true" />
        <p>
          <strong>Monitored 24/7.</strong> Your request goes directly to an export carpet specialist for a prompt, professional response.
        </p>
      </div>
      <p className="text-center text-xs leading-relaxed text-muted">
        By submitting, you acknowledge our{" "}
        <Link href="/privacy-policy" className="font-bold text-primary underline underline-offset-2">
          Privacy Policy
        </Link>{" "}
        and agree that our export team may contact you about this request.
      </p>

      {showFloatingSubmit ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[97] pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="container-fox">
            <div className="grid lg:grid-cols-3 lg:gap-16">
              <div className="lg:col-span-2">
                <div className="pointer-events-auto rounded-lg border border-[#C8752A]/25 bg-white/95 p-2 shadow-[0_12px_35px_rgba(16,42,67,0.22)] backdrop-blur">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="flex min-h-13 w-full items-center justify-center rounded-sm bg-[#C8752A] px-5 py-3.5 text-center text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#AD6424] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8752A] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:min-h-14 md:text-sm md:tracking-[0.08em]"
                  >
                    {state.submitting ? "SENDING INQUIRY..." : submitLabel}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </form>
  );
}
