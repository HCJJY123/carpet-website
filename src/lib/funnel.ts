const FUNNEL_STORAGE_KEY = "vishome_funnel_session";

export type LeadGrade = "A" | "B" | "C";

export type FunnelSessionSignals = {
  productViewCount: number;
  maxEngagedSeconds: number;
  sectionViewCount: number;
};

type FunnelSession = FunnelSessionSignals & {
  productPaths: string[];
  viewedSections: string[];
  emittedEvents: string[];
};

export type LeadQualificationInput = {
  company: string;
  email: string;
  whatsapp: string;
  quantity: string;
  projectStage: string;
  purchaseTimeframe: string;
  needSamples: string;
};

export type LeadQualification = {
  score: number;
  grade: LeadGrade;
  qualified: boolean;
  reasons: string[];
};

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "yahoo.com",
  "icloud.com",
  "qq.com",
  "163.com",
  "126.com",
  "mail.ru",
  "yandex.ru",
  "proton.me",
  "protonmail.com",
]);

function emptySession(): FunnelSession {
  return {
    productPaths: [],
    viewedSections: [],
    emittedEvents: [],
    productViewCount: 0,
    maxEngagedSeconds: 0,
    sectionViewCount: 0,
  };
}

function readSession(): FunnelSession {
  if (typeof window === "undefined") return emptySession();

  try {
    const raw = window.sessionStorage.getItem(FUNNEL_STORAGE_KEY);
    if (!raw) return emptySession();
    return { ...emptySession(), ...(JSON.parse(raw) as Partial<FunnelSession>) };
  } catch {
    return emptySession();
  }
}

function writeSession(session: FunnelSession) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(FUNNEL_STORAGE_KEY, JSON.stringify(session));
  } catch {
    // Tracking must never block the purchase journey.
  }
}

export function getFunnelSessionSignals(): FunnelSessionSignals {
  const session = readSession();
  return {
    productViewCount: session.productPaths.length,
    maxEngagedSeconds: session.maxEngagedSeconds,
    sectionViewCount: session.viewedSections.length,
  };
}

export function recordProductView(path: string) {
  const session = readSession();
  const isNew = !session.productPaths.includes(path);
  if (isNew) session.productPaths.push(path);
  session.productViewCount = session.productPaths.length;
  writeSession(session);
  return { isNew, signals: getFunnelSessionSignals() };
}

export function recordEngagedSeconds(seconds: number) {
  const session = readSession();
  session.maxEngagedSeconds = Math.max(session.maxEngagedSeconds, seconds);
  writeSession(session);
  return getFunnelSessionSignals();
}

export function recordSectionView(sectionKey: string) {
  const session = readSession();
  const isNew = !session.viewedSections.includes(sectionKey);
  if (isNew) session.viewedSections.push(sectionKey);
  session.sectionViewCount = session.viewedSections.length;
  writeSession(session);
  return { isNew, signals: getFunnelSessionSignals() };
}

export function markFunnelEventOnce(eventKey: string) {
  const session = readSession();
  if (session.emittedEvents.includes(eventKey)) return false;
  session.emittedEvents.push(eventKey);
  writeSession(session);
  return true;
}

function quantityScore(quantity: string) {
  const normalized = quantity.replace(/,/g, "");
  const value = Number(normalized.match(/\d+(?:\.\d+)?/)?.[0] || 0);
  if (value >= 1000) return 20;
  if (value >= 500) return 18;
  if (value >= 200) return 15;
  if (value >= 100) return 10;
  if (value > 0) return 5;
  return 0;
}

function isBusinessEmail(email: string) {
  const domain = email.trim().toLowerCase().split("@")[1];
  return Boolean(domain && !FREE_EMAIL_DOMAINS.has(domain));
}

export function scoreLead(
  input: LeadQualificationInput,
  signals: FunnelSessionSignals = getFunnelSessionSignals()
): LeadQualification {
  let score = 0;
  const reasons: string[] = [];
  const add = (points: number, reason: string) => {
    if (!points) return;
    score += points;
    reasons.push(`${reason} (+${points})`);
  };

  add(input.company.trim() ? 15 : 0, "Company supplied");
  add(isBusinessEmail(input.email) ? 10 : 0, "Business email");
  add(input.whatsapp.trim() ? 5 : 0, "Direct contact supplied");
  add(quantityScore(input.quantity), "Project quantity");

  const stageScores: Record<string, number> = {
    "Ready to order": 25,
    "Requesting quotation": 20,
    "Sample evaluation": 15,
    "Tender / specification": 15,
    "Comparing suppliers": 10,
    "General research": 0,
  };
  add(stageScores[input.projectStage] || 0, `Stage: ${input.projectStage}`);

  const timeframeScores: Record<string, number> = {
    "Within 30 days": 20,
    "1-3 months": 15,
    "3-6 months": 8,
    "More than 6 months": 3,
    "Not decided": 0,
  };
  add(timeframeScores[input.purchaseTimeframe] || 0, `Timing: ${input.purchaseTimeframe}`);
  add(input.needSamples === "Yes" ? 5 : 0, "Sample requested");
  add(signals.productViewCount >= 3 ? 10 : signals.productViewCount >= 2 ? 6 : 0, "Product research depth");
  add(signals.sectionViewCount > 0 ? 5 : 0, "Procurement information viewed");
  add(signals.maxEngagedSeconds >= 60 ? 5 : signals.maxEngagedSeconds >= 30 ? 3 : 0, "Engaged visit");

  const cappedScore = Math.min(score, 100);
  const grade: LeadGrade = cappedScore >= 65 ? "A" : cappedScore >= 35 ? "B" : "C";
  return { score: cappedScore, grade, qualified: grade === "A", reasons };
}
