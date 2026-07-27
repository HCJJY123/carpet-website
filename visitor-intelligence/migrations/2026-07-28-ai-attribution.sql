ALTER TABLE visits ADD COLUMN traffic_channel TEXT;
ALTER TABLE visits ADD COLUMN ai_source TEXT;

ALTER TABLE leads ADD COLUMN traffic_channel TEXT;
ALTER TABLE leads ADD COLUMN ai_source TEXT;

CREATE INDEX IF NOT EXISTS idx_visits_traffic_channel ON visits(traffic_channel);
CREATE INDEX IF NOT EXISTS idx_visits_ai_source ON visits(ai_source);
CREATE INDEX IF NOT EXISTS idx_leads_traffic_channel ON leads(traffic_channel);
CREATE INDEX IF NOT EXISTS idx_leads_ai_source ON leads(ai_source);
