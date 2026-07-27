import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 8_192;

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    return new URL(origin).host === request.nextUrl.host;
  } catch {
    return false;
  }
}

function clientIp(request: NextRequest) {
  const vercelForwarded = request.headers.get("x-vercel-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const forwarded = request.headers.get("x-forwarded-for");
  return (vercelForwarded || realIp || forwarded || "")
    .split(",")[0]
    .trim()
    .slice(0, 80);
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ ok: false, error: "Invalid origin" }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "Request too large" }, { status: 413 });
  }

  const raw = await request.text();
  if (!raw || raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  try {
    JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const publicWorkerUrl = process.env.NEXT_PUBLIC_VISITOR_BEACON_URL?.replace(/\/+$/, "");
  const ingestUrl = process.env.VISITOR_INGEST_URL || (publicWorkerUrl ? `${publicWorkerUrl}/visit` : "");
  const ingestSecret = process.env.LEAD_INGEST_SECRET;
  const ip = clientIp(request);

  if (!ingestUrl || !ingestSecret || !ip) {
    console.error("Visitor ingest is not configured");
    return NextResponse.json({ ok: false, error: "Ingest unavailable" }, { status: 503 });
  }

  try {
    const ingestResponse = await fetch(ingestUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ingestSecret}`,
        "Content-Type": "text/plain",
        "X-Visitor-IP": ip,
        "X-Visitor-Origin": request.headers.get("origin") || "",
        "X-Visitor-Country": request.headers.get("x-vercel-ip-country") || "",
        "X-Visitor-User-Agent": request.headers.get("user-agent") || "",
      },
      body: raw,
      cache: "no-store",
      signal: AbortSignal.timeout(8_000),
    });

    if (!ingestResponse.ok) {
      console.error("Visitor ingest failed", ingestResponse.status);
      return NextResponse.json({ ok: false, error: "Ingest failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("Visitor ingest failed", error);
    return NextResponse.json({ ok: false, error: "Ingest failed" }, { status: 502 });
  }

  return new NextResponse(null, {
    status: 204,
    headers: { "Cache-Control": "no-store" },
  });
}
