const VISITOR_STORAGE_KEY = "vishome_visitor_id";
const SESSION_STORAGE_KEY = "vishome_session_id";

export type VisitorIdentity = {
  visitorId: string;
  sessionId: string;
  visitorLabel: string;
};

function createId(prefix: string) {
  const value = typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : Array.from(crypto.getRandomValues(new Uint8Array(16)))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");

  return `${prefix}_${value.replace(/-/g, "")}`;
}

function getOrCreate(storage: Storage, key: string, prefix: string) {
  const existing = storage.getItem(key);
  if (existing) return existing;

  const value = createId(prefix);
  storage.setItem(key, value);
  return value;
}

export function getVisitorIdentity(): VisitorIdentity {
  if (typeof window === "undefined") {
    return { visitorId: "", sessionId: "", visitorLabel: "" };
  }

  try {
    const visitorId = getOrCreate(window.localStorage, VISITOR_STORAGE_KEY, "vhv");
    const sessionId = getOrCreate(window.sessionStorage, SESSION_STORAGE_KEY, "vhs");
    return {
      visitorId,
      sessionId,
      visitorLabel: `VH-${visitorId.slice(-8).toUpperCase()}`,
    };
  } catch {
    const visitorId = createId("vhv");
    const sessionId = createId("vhs");
    return {
      visitorId,
      sessionId,
      visitorLabel: `VH-${visitorId.slice(-8).toUpperCase()}`,
    };
  }
}

export function syncClarityIdentity(pageId: string) {
  const identity = getVisitorIdentity();
  if (typeof window === "undefined") return identity;

  const clarity = (window as Window & { clarity?: (...args: unknown[]) => void }).clarity;
  if (typeof clarity === "function") {
    clarity("identify", identity.visitorId, identity.sessionId, pageId, identity.visitorLabel);
    clarity("set", "vishome_visitor_label", identity.visitorLabel);
    clarity("set", "vishome_session_id", identity.sessionId);
  }

  return identity;
}
