ALTER TABLE visits ADD COLUMN ai_referrer_host TEXT;
ALTER TABLE visits ADD COLUMN ai_landing_path TEXT;

CREATE INDEX IF NOT EXISTS idx_visits_ai_source ON visits(ai_referred, ai_source);
CREATE INDEX IF NOT EXISTS idx_visits_ai_landing ON visits(ai_referred, ai_landing_path);
