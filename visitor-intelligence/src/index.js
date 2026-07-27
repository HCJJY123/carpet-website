const DEFAULT_ALLOWED_ORIGINS = [
  "https://www.vishomecarpet.com",
  "https://vishomecarpet.com",
];

const ISP_NETWORK = new RegExp([
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
].join("|"), "i");

const CLOUD_NETWORK = new RegExp([
  "amazon|aws|google llc|google cloud|microsoft|azure|oracle cloud|alibaba|tencent|huawei cloud",
  "digitalocean|linode|akamai|fastly|cloudflare|ovh|hetzner|vultr|contabo|leaseweb|scaleway",
  "godaddy|namecheap|hostgator|bluehost|siteground|wp engine|squarespace|wix|shopify|vercel|netlify",
  "hosting|datacenter|data ?center|colocation|dedicated server|vpn|proxy|tor exit|hurricane electric",
].join("|"), "i");

const AUTOMATION_NETWORK = new RegExp([
  "facebook|meta platforms|bytedance|semrush|ahrefs|majestic|censys|shodan|palo alto|zscaler",
].join("|"), "i");

const BOT_UA = /bot|crawl|spider|slurp|headless|lighthouse|pingdom|uptime|monitor|preview|curl|wget|python-requests|axios/i;

const worker = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/lead") {
      return recordLead(request, env);
    }

    const allowedOrigins = parseList(env.ALLOWED_ORIGINS, DEFAULT_ALLOWED_ORIGINS);
    if (request.method === "POST" && url.pathname === "/visit") {
      return recordProxiedVisit(request, env, allowedOrigins);
    }

    const origin = request.headers.get("Origin") || "";
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
      landing_page, referrer, traffic_channel, ai_source,
      utm_source, utm_medium, utm_campaign, utm_term,
      utm_content, gclid, fbclid, lead_score, lead_grade, lead_score_reasons,
      session_product_views, session_max_engaged_seconds, session_section_views,
      visitor_id, session_id, visitor_label
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
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
    safeText(lead.traffic_channel, 100),
    safeText(lead.ai_source, 160),
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
    safeInteger(lead.session_section_views, 0, 1000),
    safeText(lead.visitor_id, 80),
    safeText(lead.session_id, 80),
    safeText(lead.visitor_label, 32)
  ).run();

  return Response.json(
    { ok: true, lead_id: leadId },
    { status: 201, headers: { "Cache-Control": "no-store" } }
  );
}

async function recordProxiedVisit(request, env, allowedOrigins) {
  const authorization = request.headers.get("Authorization") || "";
  if (!env.LEAD_INGEST_SECRET || authorization !== `Bearer ${env.LEAD_INGEST_SECRET}`) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    await recordVisit(request, env, allowedOrigins, true);
    return new Response(null, { status: 204, headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Proxied visit ingest failed", error);
    return Response.json({ ok: false, error: "Ingest failed" }, { status: 500 });
  }
}

async function recordVisit(request, env, allowedOrigins, trustedProxy = false) {
  const origin = trustedProxy
    ? request.headers.get("X-Visitor-Origin") || ""
    : request.headers.get("Origin") || "";
  if (!allowedOrigins.includes(origin)) return;

  const userAgent = trustedProxy
    ? request.headers.get("X-Visitor-User-Agent") || ""
    : request.headers.get("User-Agent") || "";
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

  const duration = Math.min(Math.max(Number(body.dur) || 0, 0), 86400);
  const minDuration = clampNumber(env.MIN_DURATION_SECONDS, 1, 60, 5);
  if (duration < minDuration) return;

  const ip = trustedProxy
    ? request.headers.get("X-Visitor-IP")
    : request.headers.get("CF-Connecting-IP");
  if (!ip) return;

  const cf = request.cf || {};
  let org = cf.asOrganization || "";
  let asn = cf.asn ? `AS${cf.asn}` : "";
  let domain = "";
  let country = trustedProxy
    ? request.headers.get("X-Visitor-Country") || ""
    : cf.country || "";

  const ipInfo = await getIpInfo(ip, env);
  if (ipInfo) {
    org = ipInfo.as_name || org;
    asn = ipInfo.asn || asn;
    domain = ipInfo.as_domain || "";
    country = ipInfo.country_code || ipInfo.country || country;
  }

  org = safeText(org, 180) || "Unknown network";
  domain = safeText(domain, 180);
  const classification = classifyNetwork(org, domain);
  const internalCountries = parseList(env.INTERNAL_COUNTRIES || env.DROP_COUNTRIES, []);
  const internalVisit = country && internalCountries.includes(country.toUpperCase()) ? 1 : 0;

  if (org !== "Unknown network") {
    const blocked = await env.DB.prepare("SELECT org FROM blocklist WHERE lower(org) = lower(?) LIMIT 1").bind(org).first();
    if (blocked) return;
  }

  const salt = env.VISITOR_HASH_SALT || env.SALT || "";
  if (!salt) return;

  const ipHash = await sha256(`${ip}:${salt}`);
  const attribution = parseAttribution(body);
  const intent = scoreVisitIntent(body, duration, attribution);
  const productInterest = inferProductInterest(body.path, attribution.utmTerm);

  await env.DB.prepare(
    `INSERT INTO visits (
      day, ip_hash, visitor_id, session_id, visitor_label, asn, org, domain, country,
      network_type, company_confidence, company_candidate, internal_visit, classification_reason,
      site, path, query, referrer, landing, event, language, timezone, screen, duration,
      traffic_channel, ai_source, utm_source, utm_medium, utm_campaign, utm_term,
      utm_content, gclid, product_interest,
      intent_score, intent_grade, intent_reasons
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    new Date().toISOString().slice(0, 10),
    ipHash,
    safeText(body.visitor_id, 80),
    safeText(body.session_id, 80),
    safeText(body.visitor_label, 32),
    safeText(asn, 32),
    org,
    domain,
    safeText(country, 8),
    classification.networkType,
    classification.companyConfidence,
    classification.companyCandidate,
    internalVisit,
    classification.reason,
    safeText(body.site, 100),
    safeText(body.path, 300),
    safeText(body.query, 300),
    safeText(body.ref, 500),
    safeText(body.landing, 500),
    safeText(body.event || "page_exit", 40),
    safeText(body.lang, 40),
    safeText(body.tz, 80),
    safeText(body.screen, 40),
    duration,
    attribution.trafficChannel,
    attribution.aiSource,
    attribution.utmSource,
    attribution.utmMedium,
    attribution.utmCampaign,
    attribution.utmTerm,
    attribution.utmContent,
    attribution.gclid,
    productInterest,
    intent.score,
    intent.grade,
    intent.reasons.join("; ")
  ).run();
}

function classifyNetwork(org, domain) {
  const value = `${org} ${domain}`.trim();
  if (!value || org === "Unknown network") {
    return {
      networkType: "unknown",
      companyConfidence: "low",
      companyCandidate: 0,
      reason: "No organization data available",
    };
  }

  if (AUTOMATION_NETWORK.test(value)) {
    return {
      networkType: "automation",
      companyConfidence: "low",
      companyCandidate: 0,
      reason: "Automation, security, or marketing platform network",
    };
  }

  if (CLOUD_NETWORK.test(value)) {
    return {
      networkType: "cloud",
      companyConfidence: "low",
      companyCandidate: 0,
      reason: "Cloud, hosting, VPN, or data-center network",
    };
  }

  if (ISP_NETWORK.test(value)) {
    return {
      networkType: "isp",
      companyConfidence: "low",
      companyCandidate: 0,
      reason: "Consumer, mobile, or telecommunications network",
    };
  }

  return {
    networkType: "business",
    companyConfidence: domain ? "high" : "medium",
    companyCandidate: 1,
    reason: domain ? "Business organization with domain match" : "Business-like organization name without domain match",
  };
}

function parseAttribution(body) {
  const params = new URLSearchParams(String(body.query || "").replace(/^\?/, ""));
  return {
    trafficChannel: safeText(body.traffic_channel, 100),
    aiSource: safeText(body.ai_source, 160),
    utmSource: safeText(body.utm_source || params.get("utm_source"), 300),
    utmMedium: safeText(body.utm_medium || params.get("utm_medium"), 300),
    utmCampaign: safeText(body.utm_campaign || params.get("utm_campaign"), 500),
    utmTerm: safeText(body.utm_term || params.get("utm_term"), 500),
    utmContent: safeText(body.utm_content || params.get("utm_content"), 500),
    gclid: safeText(body.gclid || params.get("gclid"), 500),
  };
}

function scoreVisitIntent(body, duration, attribution) {
  const path = String(body.path || "").toLowerCase();
  const referrer = String(body.ref || "").toLowerCase();
  const searchIntent = `${attribution.utmTerm} ${path}`.toLowerCase();
  let score = Math.min(Math.round(duration / 15), 20);
  const reasons = duration >= 300 ? ["Long visit"] : [];

  const add = (points, reason) => {
    score += points;
    reasons.push(reason);
  };

  if (path.includes("/thank-you")) add(30, "Reached thank-you page");
  else if (path.includes("/contact")) add(22, "Viewed contact/quotation page");
  else if (path.includes("/request-sample-box")) add(20, "Viewed sample request page");
  else if (/\/products\/[^/]+\/[^/]+/.test(path)) add(12, "Viewed a specific product");
  else if (path.includes("/products/") || path.includes("commercial-carpet-tiles")) add(8, "Viewed a product category");
  else if (path.includes("/solutions") || path.includes("/projects")) add(5, "Viewed solution or project content");

  if (/google\.|bing\.|yahoo\./.test(referrer)) add(4, "Search-engine referral");
  if (attribution.trafficChannel === "ai_referral" || attribution.aiSource) add(5, "AI referral");
  if (attribution.gclid || attribution.utmMedium.toLowerCase() === "cpc") add(5, "Paid-search visit");
  if (/supplier|wholesale|price|manufacturer|distributor|from china|contract carpet|custom/.test(searchIntent)) {
    add(6, "Commercial purchase keyword");
  }

  score = Math.min(Math.max(Math.round(score), 0), 100);
  return {
    score,
    grade: score >= 35 ? "A" : score >= 18 ? "B" : "C",
    reasons: reasons.length ? reasons : ["General browsing"],
  };
}

function inferProductInterest(pathValue, termValue) {
  const value = `${pathValue || ""} ${termValue || ""}`.toLowerCase();
  if (value.includes("gold-mining")) return "Gold Mining Carpet Mat";
  if (value.includes("wool") || value.includes("sculpted")) return "Custom Wool Carpet";
  if (value.includes("wall-to-wall") || value.includes("hotel")) return "Hotel / Wall-to-Wall Carpet";
  if (value.includes("carpet-tile") || value.includes("carpet tile")) return "Commercial Carpet Tiles";
  if (value.includes("public-area")) return "Public Area Carpet";
  if (value.includes("request-sample")) return "Carpet Samples";
  if (value.includes("contact")) return "Project Quotation";
  if (value.includes("projects") || value.includes("case-")) return "Project Case Research";
  return "Commercial Carpet";
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
