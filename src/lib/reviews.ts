/**
 * REVIEWS REGISTRY
 *
 * ─── DO NOT FABRICATE REVIEWS ───────────────────────────────────────────
 *
 * This file intentionally exports an EMPTY array. Until we wire up a data
 * source (Google My Business API, a manual GMB export, or a reviewed-and-
 * signed off customer submission flow), the site shows the live GMB widget
 * as the single source of truth and the `AggregateRating` schema is driven
 * by BUSINESS.rating / BUSINESS.reviewCount in constants.ts.
 *
 * When real review data is available:
 *   1. Populate `REVIEWS` below. Every entry must be a real customer whose
 *      review was publicly posted on Google or Yelp (never text you made up).
 *   2. Keep `source`, `datePublished`, and ideally `id` populated so we can
 *      reconcile against the source feed.
 *   3. `service` / `neighborhood` let ReviewsStrip filter contextually on
 *      service and neighborhood pages.
 */

export type ReviewSource = 'google' | 'yelp' | 'bbb' | 'angi'

export interface Review {
  /** Stable ID (GMB review ID, Yelp ID, or internal UUID) */
  id: string
  /** Reviewer display name as published on the source platform */
  author: string
  /** Whole-star rating, 1–5 */
  rating: 1 | 2 | 3 | 4 | 5
  /** Full review text as published */
  body: string
  /** ISO 8601 date the review was published (YYYY-MM-DD) */
  datePublished: string
  /** Platform the review was sourced from */
  source: ReviewSource
  /** Service slug for contextual filtering (e.g. 'emergency-locksmith') */
  service?: string
  /** Neighborhood slug for contextual filtering */
  neighborhood?: string
  /** Public URL back to the review on the source platform, if available */
  url?: string
}

// TODO: populate from Google My Business API or manual GMB export.
// Do NOT fabricate entries.
export const REVIEWS: Review[] = []

/** Filter REVIEWS by service slug and/or neighborhood slug. */
export function getReviews(opts?: {
  service?: string
  neighborhood?: string
  maxItems?: number
}): Review[] {
  const { service, neighborhood, maxItems } = opts ?? {}
  let out = REVIEWS
  if (service) out = out.filter((r) => r.service === service)
  if (neighborhood) out = out.filter((r) => r.neighborhood === neighborhood)
  // Newest first
  out = [...out].sort((a, b) => b.datePublished.localeCompare(a.datePublished))
  if (typeof maxItems === 'number') out = out.slice(0, maxItems)
  return out
}

/**
 * Write-a-review URL for Avenue Locksmith's Google Business Profile.
 * This is the public share URL listed in BUSINESS.sameAs — it deep-links
 * into the profile where a signed-in Google user can leave a review.
 */
export const GOOGLE_REVIEWS_URL =
  'https://share.google/lOGOEkHsc8g7bG1BL'
