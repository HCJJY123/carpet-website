import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/xlgkpkza";
const MAX_BODY_BYTES = 48_000;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT = 6;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
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
  "traffic_channel",
  "ai_source",
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
  "visitor_id",
  "session_id",
  "visitor_label",
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

function clientKey(request: NextRequest, email = "") {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwardedFor || request.headers.get("x-real-ip") || "unknown";
  return `${ip}:${email.toLowerCase() || "anonymous"}`;
}

function checkRateLimit(key: string) {
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { limited: false, retryAfter: 0 };
  }

  if (current.count >= RATE_LIMIT) {
    return { limited: true, retryAfter: Math.ceil((current.resetAt - now) / 1000) };
  }

  current.count += 1;
  return { limited: false, retryAfter: 0 };
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function deliverToFormspree(formData: FormData) {
  let lastError: unknown;

  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
        cache: "no-store",
        signal: AbortSignal.timeout(12_000),
      });

      if (formspreeResponse.ok) return true;
      lastError = new Error(`Form delivery failed with ${formspreeResponse.status}`);
    } catch (error) {
      lastError = error;
    }
  }

  console.error("Lead email delivery failed", lastError);
  return false;
}

async function archiveLead(lead: Record<string, string>) {
  const ingestUrl = process.env.LEAD_INGEST_URL;
  const ingestSecret = process.env.LEAD_INGEST_SECRET;

  if (!ingestUrl || !ingestSecret) return false;

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
    if (ingestResponse.ok) return true;
    console.error("Lead archive failed", ingestResponse.status);
  } catch (error) {
    console.error("Lead archive failed", error);
  }

  return false;
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

  const required = lead.form_name === "contact_project_quote"
    ? ["company", "email", "product", "quantity"]
    : ["name", "email", "country", "project_type", "product", "message"];
  if (required.some((field) => !lead[field])) {
    return NextResponse.json({ ok: false, error: "Please complete all required fields" }, { status: 400 });
  }

  if (!validEmail(lead.email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address" }, { status: 400 });
  }

  const rateLimit = checkRateLimit(clientKey(request, lead.email));
  if (rateLimit.limited) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfter) } }
    );
  }

  const leadId = crypto.randomUUID();
  lead.lead_id = leadId;
  lead.submitted_at = lead.submitted_at || new Date().toISOString();

  const formData = new FormData();
  Object.entries(lead).forEach(([key, value]) => formData.set(key, value));

  const [archived, delivered] = await Promise.all([
    archiveLead(lead),
    deliverToFormspree(formData),
  ]);

  if (!archived && !delivered) {
    return NextResponse.json({ ok: false, error: "Submission failed" }, { status: 502 });
  }

  return NextResponse.json(
    { ok: true, leadId, archived, delivered, status: delivered ? "delivered" : "archived_pending_email" },
    { headers: { "Cache-Control": "no-store" } }
  );
}
