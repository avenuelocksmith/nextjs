-- Google Reviews accumulation table
-- Run this in: Supabase Dashboard → SQL Editor (project: ygmcfstjnrzizuncbdkj)
--
-- Strategy: on each ISR cycle, fresh reviews are upserted here (keyed by author_url).
-- Over time the table grows, giving us more than the 5 Google API returns at once.

CREATE TABLE IF NOT EXISTS google_reviews (
  id              TEXT PRIMARY KEY,        -- author_url from Google (unique per reviewer)
  author_name     TEXT NOT NULL,
  rating          SMALLINT NOT NULL,
  text            TEXT NOT NULL,
  review_time     BIGINT NOT NULL,         -- Unix timestamp from Google
  relative_time   TEXT,                    -- e.g. "a month ago" from Google
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_google_reviews_rating ON google_reviews (rating);
CREATE INDEX IF NOT EXISTS idx_google_reviews_time   ON google_reviews (review_time DESC);
