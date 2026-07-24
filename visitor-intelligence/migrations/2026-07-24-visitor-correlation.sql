ALTER TABLE visits ADD COLUMN visitor_id TEXT;
ALTER TABLE visits ADD COLUMN session_id TEXT;
ALTER TABLE visits ADD COLUMN visitor_label TEXT;
ALTER TABLE visits ADD COLUMN network_type TEXT DEFAULT 'unknown';
ALTER TABLE visits ADD COLUMN company_confidence TEXT DEFAULT 'low';
ALTER TABLE visits ADD COLUMN company_candidate INTEGER DEFAULT 0;
ALTER TABLE visits ADD COLUMN internal_visit INTEGER DEFAULT 0;
ALTER TABLE visits ADD COLUMN classification_reason TEXT;
ALTER TABLE visits ADD COLUMN utm_source TEXT;
ALTER TABLE visits ADD COLUMN utm_medium TEXT;
ALTER TABLE visits ADD COLUMN utm_campaign TEXT;
ALTER TABLE visits ADD COLUMN utm_term TEXT;
ALTER TABLE visits ADD COLUMN gclid TEXT;
ALTER TABLE visits ADD COLUMN product_interest TEXT;
ALTER TABLE visits ADD COLUMN intent_score INTEGER DEFAULT 0;
ALTER TABLE visits ADD COLUMN intent_grade TEXT DEFAULT 'C';
ALTER TABLE visits ADD COLUMN intent_reasons TEXT;

CREATE INDEX IF NOT EXISTS idx_visits_visitor_id ON visits(visitor_id);
CREATE INDEX IF NOT EXISTS idx_visits_session_id ON visits(session_id);
CREATE INDEX IF NOT EXISTS idx_visits_network_type ON visits(network_type);
CREATE INDEX IF NOT EXISTS idx_visits_company_confidence ON visits(company_confidence);
CREATE INDEX IF NOT EXISTS idx_visits_intent_grade ON visits(intent_grade);
CREATE INDEX IF NOT EXISTS idx_visits_internal ON visits(internal_visit);

ALTER TABLE leads ADD COLUMN visitor_id TEXT;
ALTER TABLE leads ADD COLUMN session_id TEXT;
ALTER TABLE leads ADD COLUMN visitor_label TEXT;

CREATE INDEX IF NOT EXISTS idx_leads_visitor_id ON leads(visitor_id);
CREATE INDEX IF NOT EXISTS idx_leads_session_id ON leads(session_id);
