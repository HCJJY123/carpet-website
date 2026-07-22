CREATE TABLE IF NOT EXISTS visits (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  day         TEXT NOT NULL,
  ip_hash     TEXT NOT NULL,
  asn         TEXT,
  org         TEXT NOT NULL,
  domain      TEXT,
  country     TEXT,
  site        TEXT,
  path        TEXT,
  query       TEXT,
  referrer    TEXT,
  landing     TEXT,
  event       TEXT,
  language    TEXT,
  timezone    TEXT,
  screen      TEXT,
  duration    INTEGER,
  ts          TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_visits_day ON visits(day);
CREATE INDEX IF NOT EXISTS idx_visits_org ON visits(org);
CREATE INDEX IF NOT EXISTS idx_visits_domain ON visits(domain);
CREATE INDEX IF NOT EXISTS idx_visits_site ON visits(site);
CREATE INDEX IF NOT EXISTS idx_visits_path ON visits(path);
CREATE INDEX IF NOT EXISTS idx_visits_ts ON visits(ts);

CREATE TABLE IF NOT EXISTS blocklist (
  org     TEXT PRIMARY KEY,
  note    TEXT,
  added   TEXT DEFAULT CURRENT_TIMESTAMP
);
