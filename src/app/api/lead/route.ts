import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/xlgkpkza";
const MAX_BODY_BYTES = 48_000;
const ALLOWED_FIELDS = [
  "form_name",
  "language",
  "name",
  "company",
  "email",
  "whatsapp",
  "country",
  "project_type",
  "product",
  "quantity",
  "delivery_time",
  "project_stage",
  "purchase_timeframe",
  "need_samples",
  "dap_destination",
  "message",
  "page_url",
  "page_path",
  "landing_page",
  "referrer",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "lead_score",
  "lead_grade",
  "lead_score_reasons",
  "session_product_views",
  "session_max_engaged_seconds",
  "session_section_views",
  "privacy_policy",
] as const;

function text(value: unknown, maxLength = 5_000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    return new URL(origin).host === request.nextUrl.host;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ ok: false, error: "Invalid origin" }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "Request too large" }, { status: 413 });
  }

  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (text(raw._gotcha, 200)) {
    return NextResponse.json({ ok: true });
  }

  const lead: Record<string, string> = {};
  for (const field of ALLOWED_FIELDS) {
    lead[field] = text(raw[field], field === "message" ? 8_000 : 1_000);
  }

  const required = ["name", "email", "country", "project_type", "product", "message"];
  if (required.some((field) => !lead[field])) {
    return NextResponse.json({ ok: false, error: "Please complete all required fields" }, { status: 400 });
  }

  const leadId = crypto.randomUUID();
  lead.lead_id = leadId;
  lead.submitted_at = lead.submitted_at || new Date().toISOString();

  const formData = new FormData();
  Object.entries(lead).forEach(([key, value]) => formData.set(key, value));

  try {
    const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
      cache: "no-store",
      signal: AbortSignal.timeout(12_000),
    });

    if (!formspreeResponse.ok) {
      throw new Error(`Form delivery failed with ${formspreeResponse.status}`);
    }
  } catch (error) {
    console.error("Lead email delivery failed", error);
    return NextResponse.json({ ok: false, error: "Submission failed" }, { status: 502 });
  }

  const ingestUrl = process.env.LEAD_INGEST_URL;
  const ingestSecret = process.env.LEAD_INGEST_SECRET;
  let archived = false;

  if (ingestUrl && ingestSecret) {
    try {
      const ingestResponse = await fetch(ingestUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${ingestSecret}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lead),
        cache: "no-store",
        signal: AbortSignal.timeout(8_000),
      });
      archived = ingestResponse.ok;
      if (!archived) console.error("Lead archive failed", ingestResponse.status);
    } catch (error) {
      console.error("Lead archive failed", error);
    }
  }

  return NextResponse.json(
    { ok: true, leadId, archived },
    { headers: { "Cache-Control": "no-store" } }
  );
}
