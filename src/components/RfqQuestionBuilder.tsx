"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const source = "/blog/commercial-carpet-sourcing-directory";
const draftKey = "VCARPETS_sourcing_question_draft";
const fieldClass = "w-full rounded-sm border border-border bg-white px-4 py-3 text-base text-primary focus:border-accent focus:outline-none";

export default function RfqQuestionBuilder() {
  const router = useRouter();
  const [buyer, setBuyer] = useState("Distributor");
  const [product, setProduct] = useState("Carpet Tiles");
  const [area, setArea] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [requirements, setRequirements] = useState("");
  const message = `We are a ${buyer.toLowerCase()} sourcing ${product.toLowerCase()}${area.trim() ? ` for approximately ${area.trim()} of floor area` : ""}${destination.trim() ? ` for a project in ${destination.trim()}` : ""}. ${date.trim() ? `Our required date is ${date.trim()}. ` : ""}${requirements.trim() ? `Technical requirements: ${requirements.trim()}. ` : ""}Please recommend a suitable construction and advise the project-specific MOQ, sample options, lead time and quotation terms.`;

  function useQuestion() {
    try {
      window.sessionStorage.setItem(draftKey, JSON.stringify({ source, message }));
      router.push(`/contact?source=${encodeURIComponent(source)}#quote-form`);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = message;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      router.push(`/contact?source=${encodeURIComponent(source)}#quote-form`);
    }
  }

  return (
    <section className="mt-12 rounded-xl border border-border bg-surface p-5 md:p-8" aria-labelledby="rfq-question-heading">
      <h2 id="rfq-question-heading" className="text-2xl font-black text-primary md:text-3xl">Build a Better Carpet Sourcing Question</h2>
      <p className="mt-3 text-muted">This is an RFQ drafting aid, not a chatbot. Your details stay in this browser tab until you submit the contact form.</p>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-primary">I am a
          <select className={fieldClass} value={buyer} onChange={(event) => setBuyer(event.target.value)}>{["Distributor", "Contractor", "Hotel Buyer", "Designer", "Project Owner", "Other Buyer"].map((value) => <option key={value}>{value}</option>)}</select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-primary">I need
          <select className={fieldClass} value={product} onChange={(event) => setProduct(event.target.value)}>{["Carpet Tiles", "Hotel Carpet", "Broadloom", "Printed Carpet", "Sisal", "Event Carpet", "Unsure"].map((value) => <option key={value}>{value}</option>)}</select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-primary">Project area
          <input className={fieldClass} maxLength={80} value={area} onChange={(event) => setArea(event.target.value)} placeholder="e.g. 2,000 sqm" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-primary">Destination
          <input className={fieldClass} maxLength={80} value={destination} onChange={(event) => setDestination(event.target.value)} placeholder="Country / city" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-primary">Required date
          <input className={fieldClass} maxLength={80} value={date} onChange={(event) => setDate(event.target.value)} placeholder="Target date, if known" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-primary">Technical requirements
          <input className={fieldClass} maxLength={240} value={requirements} onChange={(event) => setRequirements(event.target.value)} placeholder="Backing, test method or color, if known" />
        </label>
      </div>
      <div className="mt-6 rounded-sm border border-border bg-white p-5" aria-live="polite"><p className="text-xs font-bold uppercase tracking-wider text-muted">Your draft question</p><p className="mt-3 break-words leading-7 text-primary">{message}</p></div>
      <button type="button" onClick={useQuestion} className="mt-6 min-h-12 rounded-sm bg-accent px-6 py-3 text-sm font-bold text-white hover:bg-primary">Use This in My RFQ</button>
    </section>
  );
}
