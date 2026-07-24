CREATE TABLE IF NOT EXISTS visits (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  day         TEXT NOT NULL,
  ip_hash     TEXT NOT NULL,
  visitor_id  TEXT,
  session_id  TEXT,
  visitor_label TEXT,
  asn         TEXT,
  org         TEXT NOT NULL,
  domain      TEXT,
  country     TEXT,
  network_type TEXT DEFAULT 'unknown',
  company_confidence TEXT DEFAULT 'low',
  company_candidate INTEGER DEFAULT 0,
  internal_visit INTEGER DEFAULT 0,
  classification_reason TEXT,
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
  utm_source  TEXT,
  utm_medium  TEXT,
  utm_campaign TEXT,
  utm_term    TEXT,
  gclid       TEXT,
  product_interest TEXT,
  intent_score INTEGER DEFAULT 0,
  intent_grade TEXT DEFAULT 'C',
  intent_reasons TEXT,
  ts          TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_visits_day ON visits(day);
CREATE INDEX IF NOT EXISTS idx_visits_org ON visits(org);
CREATE INDEX IF NOT EXISTS idx_visits_domain ON visits(domain);
CREATE INDEX IF NOT EXISTS idx_visits_site ON visits(site);
CREATE INDEX IF NOT EXISTS idx_visits_path ON visits(path);
CREATE INDEX IF NOT EXISTS idx_visits_ts ON visits(ts);
CREATE INDEX IF NOT EXISTS idx_visits_visitor_id ON visits(visitor_id);
CREATE INDEX IF NOT EXISTS idx_visits_session_id ON visits(session_id);
CREATE INDEX IF NOT EXISTS idx_visits_network_type ON visits(network_type);
CREATE INDEX IF NOT EXISTS idx_visits_company_confidence ON visits(company_confidence);
CREATE INDEX IF NOT EXISTS idx_visits_intent_grade ON visits(intent_grade);
CREATE INDEX IF NOT EXISTS idx_visits_internal ON visits(internal_visit);

CREATE TABLE IF NOT EXISTS blocklist (
  org     TEXT PRIMARY KEY,
  note    TEXT,
  added   TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS leads (
  id                          INTEGER PRIMARY KEY AUTOINCREMENT,
  lead_id                     TEXT NOT NULL UNIQUE,
  submitted_at                TEXT NOT NULL,
  form_name                   TEXT,
  language                    TEXT,
  name                        TEXT,
  company                     TEXT,
  email                       TEXT,
  whatsapp                    TEXT,
  country                     TEXT,
  project_type                TEXT,
  product                     TEXT,
  quantity                    TEXT,
  delivery_time               TEXT,
  project_stage               TEXT,
  purchase_timeframe          TEXT,
  need_samples                TEXT,
  dap_destination             TEXT,
  message                     TEXT,
  page_url                    TEXT,
  page_path                   TEXT,
  landing_page                TEXT,
  referrer                    TEXT,
  utm_source                  TEXT,
  utm_medium                  TEXT,
  utm_campaign                TEXT,
  utm_term                    TEXT,
  utm_content                 TEXT,
  gclid                       TEXT,
  fbclid                      TEXT,
  lead_score                  INTEGER DEFAULT 0,
  lead_grade                  TEXT DEFAULT 'C',
  lead_score_reasons          TEXT,
  session_product_views       INTEGER DEFAULT 0,
  session_max_engaged_seconds INTEGER DEFAULT 0,
  session_section_views       INTEGER DEFAULT 0,
  visitor_id                  TEXT,
  session_id                  TEXT,
  visitor_label               TEXT,
  lead_status                 TEXT DEFAULT 'new',
  qualified_at                TEXT,
  conversion_value            REAL,
  conversion_currency         TEXT DEFAULT 'USD',
  google_ads_uploaded_at      TEXT,
  next_follow_up_at           TEXT,
  sales_notes                 TEXT,
  created_at                  TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at                  TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_leads_submitted_at ON leads(submitted_at);
CREATE INDEX IF NOT EXISTS idx_leads_grade ON leads(lead_grade);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(lead_status);
CREATE INDEX IF NOT EXISTS idx_leads_gclid ON leads(gclid);
CREATE INDEX IF NOT EXISTS idx_leads_google_ads_uploaded ON leads(google_ads_uploaded_at);
CREATE INDEX IF NOT EXISTS idx_leads_visitor_id ON leads(visitor_id);
CREATE INDEX IF NOT EXISTS idx_leads_session_id ON leads(session_id);
