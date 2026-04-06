/**
 * Google Reviews — server-side utility (edge-compatible)
 *
 * Strategy:
 *  1. Resolve the Google Place ID (env var or auto-discover via text search)
 *  2. Fetch up to 5 most-recent reviews from Google Places API
 *  3. Filter to 5-star only; never read profile_photo_url
 *  4. Upsert new reviews into Supabase `google_reviews` table (accumulates over time)
 *  5. Return ALL stored 5-star rows from Supabase, newest first
 *
 * ISR revalidation is controlled at the calling page (export const revalidate = 3600).
 * Cloudflare env vars: GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID (optional),
 *                      NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 */

import { createClient } from '@supabase/supabase-js'

export interface GoogleReview {
  id: string           // author_url (unique per Google reviewer)
  authorName: string
  rating: number
  text: string
  time: number         // Unix timestamp
  relativeTime: string // e.g. "a month ago"
}

// ─── Supabase client ────────────────────────────────────────────────────────

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) throw new Error('Supabase env vars not configured')
  return createClient(url, key)
}

// ─── Place ID resolution ─────────────────────────────────────────────────────

async function resolvePlaceId(apiKey: string): Promise<string | null> {
  // Prefer explicit env var (fastest, no extra API call)
  if (process.env.GOOGLE_PLACE_ID) return process.env.GOOGLE_PLACE_ID

  // Fall back: auto-discover via text search (costs 1 Find Place call)
  try {
    const input = encodeURIComponent('Avenue Locksmith 973 E 55th St Brooklyn NY')
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=place_id&key=${apiKey}`
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) return null
    const data = await res.json() as { candidates?: { place_id: string }[] }
    return data.candidates?.[0]?.place_id ?? null
  } catch {
    return null
  }
}

// ─── Google Places API fetch ─────────────────────────────────────────────────

interface PlacesReview {
  author_name: string
  author_url: string
  rating: number
  text: string
  time: number
  relative_time_description: string
}

async function fetchFromGoogle(placeId: string, apiKey: string): Promise<PlacesReview[]> {
  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${encodeURIComponent(placeId)}` +
    `&fields=reviews` +
    `&reviews_sort=newest` +
    `&key=${apiKey}`

  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) return []

  const data = await res.json() as { result?: { reviews?: PlacesReview[] } }
  return data.result?.reviews ?? []
}

// ─── Supabase upsert ─────────────────────────────────────────────────────────

async function upsertReviews(reviews: PlacesReview[]) {
  const supabase = getSupabase()
  const rows = reviews
    .filter((r) => r.rating === 5 && r.text?.trim())
    .map((r) => ({
      id: r.author_url,
      author_name: r.author_name,
      rating: r.rating,
      text: r.text.trim(),
      review_time: r.time,
      relative_time: r.relative_time_description,
    }))

  if (rows.length === 0) return

  await supabase
    .from('google_reviews')
    .upsert(rows, { onConflict: 'id', ignoreDuplicates: false })
}

// ─── Supabase read ───────────────────────────────────────────────────────────

async function readStoredReviews(): Promise<GoogleReview[]> {
  const supabase = getSupabase()
  const { data, error } = await supabase
    .from('google_reviews')
    .select('id, author_name, rating, text, review_time, relative_time')
    .eq('rating', 5)
    .order('review_time', { ascending: false })

  if (error || !data) return []

  return data.map((row) => ({
    id: row.id as string,
    authorName: row.author_name as string,
    rating: row.rating as number,
    text: row.text as string,
    time: row.review_time as number,
    relativeTime: (row.relative_time as string) ?? '',
  }))
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Returns all stored 5-star Google reviews, freshening the cache from the
 * Google Places API if credentials are configured.
 *
 * Safe to call in any Server Component or API route — never throws.
 */
export async function getGoogleReviews(): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY

  // If no API key, serve whatever is already in Supabase (or empty)
  if (!apiKey) {
    try {
      return await readStoredReviews()
    } catch {
      return []
    }
  }

  try {
    const placeId = await resolvePlaceId(apiKey)

    if (placeId) {
      const fresh = await fetchFromGoogle(placeId, apiKey)
      // Upsert silently — even if it fails, we still serve stored reviews
      await upsertReviews(fresh).catch(() => undefined)
    }
  } catch {
    // API call failed — fall through to serve stored reviews
  }

  try {
    return await readStoredReviews()
  } catch {
    return []
  }
}
