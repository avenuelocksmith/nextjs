/**
 * Google Reviews — server-side utility (edge-compatible)
 *
 * Uses Google Business Profile API (OAuth) — works for Service Area
 * Businesses (SABs) which don't have accessible Place IDs via the
 * standard Places API.
 *
 * Required Cloudflare env vars:
 *   GOOGLE_OAUTH_CLIENT_ID
 *   GOOGLE_OAUTH_CLIENT_SECRET
 *   GOOGLE_REFRESH_TOKEN
 *   GOOGLE_LOCATION_NAME  — e.g. "accounts/123456/locations/789012"
 *   SUPABASE_URL          — (or NEXT_PUBLIC_SUPABASE_URL)
 *   SUPABASE_SERVICE_ROLE_KEY
 */

import { createClient } from '@supabase/supabase-js'

export interface GoogleReview {
  id: string
  authorName: string
  rating: number
  text: string
  time: number         // Unix timestamp
  relativeTime: string // e.g. "3 months ago"
}

// ─── Supabase client ────────────────────────────────────────────────────────

function getSupabase() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) throw new Error('Supabase env vars not configured')
  return createClient(url, key)
}

// ─── Google OAuth token exchange ─────────────────────────────────────────────

async function getAccessToken(): Promise<string> {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
      client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Token exchange failed (${res.status}): ${err}`)
  }
  const data = await res.json() as { access_token: string }
  return data.access_token
}

// ─── Google Business Profile API ────────────────────────────────────────────

interface BizProfileReview {
  name: string  // e.g. "accounts/x/locations/y/reviews/z"
  reviewer: { displayName: string; isAnonymous?: boolean }
  starRating: 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE'
  comment?: string
  createTime: string  // ISO 8601
  updateTime: string
}

const STAR: Record<string, number> = {
  ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5,
}

async function fetchFromBusinessProfile(): Promise<BizProfileReview[]> {
  const locationName = process.env.GOOGLE_LOCATION_NAME
  if (!locationName) throw new Error('GOOGLE_LOCATION_NAME not configured')

  const accessToken = await getAccessToken()

  const res = await fetch(
    `https://mybusiness.googleapis.com/v4/${locationName}/reviews?orderBy=updateTime+desc`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  )
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Business Profile API (${res.status}): ${err}`)
  }

  const data = await res.json() as { reviews?: BizProfileReview[] }
  return data.reviews ?? []
}

function relativeTime(iso: string): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000)
  if (days < 1)  return 'today'
  if (days < 2)  return 'a day ago'
  if (days < 7)  return `${days} days ago`
  const weeks = Math.floor(days / 7)
  if (weeks < 5) return weeks === 1 ? 'a week ago' : `${weeks} weeks ago`
  const months = Math.floor(days / 30)
  if (months < 12) return months === 1 ? 'a month ago' : `${months} months ago`
  const years = Math.floor(days / 365)
  return years === 1 ? 'a year ago' : `${years} years ago`
}

// ─── Supabase upsert ─────────────────────────────────────────────────────────

async function upsertReviews(reviews: BizProfileReview[]) {
  const supabase = getSupabase()

  const rows = reviews
    .filter((r) => STAR[r.starRating] === 5 && r.comment?.trim())
    .map((r) => ({
      id: r.name,   // unique: "accounts/x/locations/y/reviews/z"
      author_name: r.reviewer.displayName,
      rating: 5,
      text: r.comment!.trim(),
      review_time: Math.floor(new Date(r.createTime).getTime() / 1000),
      relative_time: relativeTime(r.createTime),
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
    id:           row.id as string,
    authorName:   row.author_name as string,
    rating:       row.rating as number,
    text:         row.text as string,
    time:         row.review_time as number,
    relativeTime: (row.relative_time as string) ?? '',
  }))
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Returns all stored 5-star Google reviews.
 * When OAuth env vars are present, fetches fresh reviews from the
 * Google Business Profile API and upserts them into Supabase first.
 * Never throws — falls back to stored reviews on any error.
 */
export async function getGoogleReviews(): Promise<GoogleReview[]> {
  const hasOAuth =
    process.env.GOOGLE_OAUTH_CLIENT_ID &&
    process.env.GOOGLE_OAUTH_CLIENT_SECRET &&
    process.env.GOOGLE_REFRESH_TOKEN &&
    process.env.GOOGLE_LOCATION_NAME

  if (hasOAuth) {
    try {
      const fresh = await fetchFromBusinessProfile()
      await upsertReviews(fresh).catch(() => undefined)
    } catch {
      // Fall through to serve whatever is already in Supabase
    }
  }

  try {
    return await readStoredReviews()
  } catch {
    return []
  }
}
