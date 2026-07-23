const DEFAULT_ALLOWED_ORIGINS = [
  "https://www.vishomecarpet.com",
  "https://vishomecarpet.com",
];

const NOISE = new RegExp([
  "telecom|telekom|telefonica|telenor|telia|telstra|telus|t-mobile|tmobile",
  "comcast|charter|spectrum|cox communi|centurylink|frontier|windstream|altice|optimum",
  "verizon|at&t|att internet|sprint|us cellular|lumen",
  "vodafone|orange s\\.a|orange polska|bt group|british telecom|virgin media|sky uk|sky broadband",
  "talktalk|plusnet|ee limited|three uk|liberty global|unitymedia|1&1|united internet",
  "rogers|bell canada|shaw commun|videotron|cogeco|eastlink",
  "optus|tpg telecom|iinet|aussie broadband|spark new zealand|vocus|2degrees",
  "jio|bharti airtel|bsnl|reliance|idea cellular",
  "chinanet|china unicom|china mobile|china telecom|cnc group",
  "broadband|cablecom|cable ?one|wireless|cellular|mobil|isp\\b|internet service",
  "fibre|fiber to the|dsl|residential|home network|consumer",
  "amazon|aws|google llc|google cloud|microsoft|azure|oracle cloud|alibaba|tencent|huawei cloud",
  "digitalocean|linode|akamai|fastly|cloudflare|ovh|hetzner|vultr|contabo|leaseweb|scaleway",
  "godaddy|namecheap|hostgator|bluehost|siteground|wp engine|squarespace|wix|shopify|vercel|netlify",
  "hosting|datacenter|data ?center|colocation|dedicated server|vpn|proxy|tor exit|hurricane electric",
  "facebook|meta platforms|bytedance|semrush|ahrefs|majestic|censys|shodan|palo alto|zscaler",
].join("|"), "i");

const BOT_UA = /bot|crawl|spider|slurp|headless|lighthouse|pingdom|uptime|monitor|preview|curl|wget|python-requests|axios/i;

const worker = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/lead") {
      return recordLead(request, env);
    }

    const origin = request.headers.get("Origin") || "";
    const allowedOrigins = parseList(env.ALLOWED_ORIGINS, DEFAULT_ALLOWED_ORIGINS);
    const allowedOrigin = allowedOrigins.includes(origin) ? origin : "";
    const cors = buildCorsHeaders(allowedOrigin);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: allowedOrigin ? 204 : 403, headers: cors });
    }

    if (request.method === "GET") {
      return Response.json({ ok: true, service: "vishome-visitor-intelligence" }, { headers: cors });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: cors });
    }

    if (!allowedOrigin) {
      return new Response(null, { status: 204 });
    }

    ctx.waitUntil(recordVisit(request, env, allowedOrigins).catch(() => {}));
    return new Response(null, { status: 204, headers: cors });
  },
};

export default worker;

async function recordLead(request, env) {
  const authorization = request.headers.get("Authorization") || "";
  if (!env.LEAD_INGEST_SECRET || authorization !== `Bearer ${env.LEAD_INGEST_SECRET}`) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const maxBodyBytes = 48_000;
  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (contentLength > maxBodyBytes) {
    return Response.json({ ok: false, error: "Request too large" }, { status: 413 });
  }

  const raw = await request.text();
  if (!raw || raw.length > maxBodyBytes) {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  let lead;
  try {
    lead = JSON.parse(raw);
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const leadId = safeText(lead.lead_id, 80);
  const submittedAt = safeText(lead.submitted_at, 40) || new Date().toISOString();
  if (!leadId || !safeText(lead.email, 320) || !safeText(lead.product, 500)) {
    return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const grade = ["A", "B", "C"].includes(lead.lead_grade) ? lead.lead_grade : "C";

  await env.DB.prepare(
    `INSERT INTO leads (
      lead_id, submitted_at, form_name, language, name, company, email, whatsapp,
      country, project_type, product, quantity, delivery_time, project_stage,
      purchase_timeframe, need_samples, dap_destination, message, page_url, page_path,
      landing_page, referrer, utm_source, utm_medium, utm_campaign, utm_term,
      utm_content, gclid, fbclid, lead_score, lead_grade, lead_score_reasons,
      session_product_views, session_max_engaged_seconds, session_section_views
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    leadId,
    submittedAt,
    safeText(lead.form_name, 160),
    safeText(lead.language, 20),
    safeText(lead.name, 200),
    safeText(lead.company, 300),
    safeText(lead.email, 320),
    safeText(lead.whatsapp, 100),
    safeText(lead.country, 160),
    safeText(lead.project_type, 300),
    safeText(lead.product, 500),
    safeText(lead.quantity, 160),
    safeText(lead.delivery_time, 200),
    safeText(lead.project_stage, 160),
    safeText(lead.purchase_timeframe, 100),
    safeText(lead.need_samples, 40),
    safeText(lead.dap_destination, 160),
    safeText(lead.message, 8000),
    safeText(lead.page_url, 1000),
    safeText(lead.page_path, 500),
    safeText(lead.landing_page, 1000),
    safeText(lead.referrer, 1000),
    safeText(lead.utm_source, 300),
    safeText(lead.utm_medium, 300),
    safeText(lead.utm_campaign, 500),
    safeText(lead.utm_term, 500),
    safeText(lead.utm_content, 500),
    safeText(lead.gclid, 500),
    safeText(lead.fbclid, 500),
    safeInteger(lead.lead_score, 0, 100),
    grade,
    safeText(lead.lead_score_reasons, 2000),
    safeInteger(lead.session_product_views, 0, 1000),
    safeInteger(lead.session_max_engaged_seconds, 0, 86400),
    safeInteger(lead.session_section_views, 0, 1000)
  ).run();

  return Response.json(
    { ok: true, lead_id: leadId },
    { status: 201, headers: { "Cache-Control": "no-store" } }
  );
}

async function recordVisit(request, env, allowedOrigins) {
  const origin = request.headers.get("Origin") || "";
  if (!allowedOrigins.includes(origin)) return;

  const userAgent = request.headers.get("User-Agent") || "";
  if (!userAgent || BOT_UA.test(userAgent)) return;

  const maxBodyBytes = clampNumber(env.MAX_BODY_BYTES, 512, 8192, 4096);
  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (contentLength > maxBodyBytes) return;

  const raw = await request.text();
  if (!raw || raw.length > maxBodyBytes) return;

  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return;
  }

  const duration = Math.min(Math.max(Number(body.dur) || 0, 0), 3600);
  const minDuration = clampNumber(env.MIN_DURATION_SECONDS, 1, 60, 5);
  if (duration < minDuration) return;

  const ip = request.headers.get("CF-Connecting-IP");
  if (!ip) return;

  const cf = request.cf || {};
  let org = cf.asOrganization || "";
  let asn = cf.asn ? `AS${cf.asn}` : "";
  let domain = "";
  let country = cf.country || "";

  const ipInfo = await getIpInfo(ip, env);
  if (ipInfo) {
    org = ipInfo.as_name || org;
    asn = ipInfo.asn || asn;
    domain = ipInfo.as_domain || "";
    country = ipInfo.country_code || ipInfo.country || country;
  }

  if (!org || NOISE.test(org)) return;

  const dropCountries = parseList(env.DROP_COUNTRIES, []);
  if (country && dropCountries.includes(country.toUpperCase())) return;

  const blocked = await env.DB.prepare("SELECT org FROM blocklist WHERE lower(org) = lower(?) LIMIT 1").bind(org).first();
  if (blocked) return;

  const salt = env.VISITOR_HASH_SALT || env.SALT || "";
  if (!salt) return;

  const ipHash = await sha256(`${ip}:${salt}`);

  await env.DB.prepare(
    `INSERT INTO visits (
      day, ip_hash, asn, org, domain, country, site, path, query, referrer,
      landing, event, language, timezone, screen, duration
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    new Date().toISOString().slice(0, 10),
    ipHash,
    safeText(asn, 32),
    safeText(org, 180),
    safeText(domain, 180),
    safeText(country, 8),
    safeText(body.site, 100),
    safeText(body.path, 300),
    safeText(body.query, 300),
    safeText(body.ref, 500),
    safeText(body.landing, 500),
    safeText(body.event || "page_exit", 40),
    safeText(body.lang, 40),
    safeText(body.tz, 80),
    safeText(body.screen, 40),
    duration
  ).run();
}

async function getIpInfo(ip, env) {
  const cacheKey = `ipinfo:${ip}`;
  const cached = await env.CACHE.get(cacheKey, "json");
  if (cached) return cached;

  if (!env.IPINFO_TOKEN) return null;

  const response = await fetch(`https://api.ipinfo.io/lite/${encodeURIComponent(ip)}?token=${env.IPINFO_TOKEN}`, {
    cf: { cacheTtl: 86400 },
  });
  if (!response.ok) return null;

  const data = await response.json();
  await env.CACHE.put(cacheKey, JSON.stringify(data), { expirationTtl: 2592000 });
  return data;
}

function buildCorsHeaders(origin) {
  const headers = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Cache-Control": "no-store",
  };

  if (origin) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Vary"] = "Origin";
  }

  return headers;
}

function parseList(value, fallback) {
  if (!value) return fallback;
  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(Math.max(parsed, min), max);
}

function safeText(value, maxLength) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function safeInteger(value, min, max) {
  const parsed = Math.round(Number(value) || 0);
  return Math.min(Math.max(parsed, min), max);
}

async function sha256(value) {
  const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("").slice(0, 32);
}
