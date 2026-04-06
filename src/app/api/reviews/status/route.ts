/**
 * GET /api/reviews/status
 *
 * Public diagnostic endpoint — no auth required.
 * Walks through every step of the getGoogleReviews() pipeline with full error
 * capture and returns a JSON report showing exactly where things fail.
 *
 * Does NOT echo API key values — env vars are reported as booleans only.
 */

import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'edge'

interface StatusReport {
  env: {
    GOOGLE_PLACES_API_KEY: boolean
    GOOGLE_PLACE_ID: boolean
    NEXT_PUBLIC_SUPABASE_URL: boolean
    SUPABASE_SERVICE_ROLE_KEY: boolean
  }
  placeId: {
    source: 'env' | 'phone_lookup' | 'text_query' | null
    value: string | null
    error: string | null
  }
  googleReviews: {
    ok: boolean
    totalFetched: number
    fiveStarCount: number
    error: string | null
  } | null
  supabase: {
    tableExists: boolean
    rowCount: number | null
    error: string | null
  }
}

export async function GET() {
  const report: StatusReport = {
    env: {
      GOOGLE_PLACES_API_KEY: !!process.env.GOOGLE_PLACES_API_KEY,
      GOOGLE_PLACE_ID: !!process.env.GOOGLE_PLACE_ID,
      NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      SUPABASE_SERVICE_ROLE_KEY: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    },
    placeId: { source: null, value: null, error: null },
    googleReviews: null,
    supabase: { tableExists: false, rowCount: null, error: null },
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY

  // ── Step 1: Resolve Place ID ────────────────────────────────────────────────

  if (apiKey) {
    if (process.env.GOOGLE_PLACE_ID) {
      report.placeId = { source: 'env', value: process.env.GOOGLE_PLACE_ID, error: null }
    } else {
      const base = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json'

      // Phone number lookup — reliable for Service Area Businesses (address hidden)
      try {
        const phone = encodeURIComponent('+13473867164')
        const res = await fetch(
          `${base}?input=${phone}&inputtype=phonenumber&fields=place_id&key=${apiKey}`,
          { cache: 'no-store' },
        )
        const data = await res.json() as {
          status?: string
          candidates?: { place_id: string }[]
          error_message?: string
        }
        const id = data.candidates?.[0]?.place_id ?? null
        if (id) {
          report.placeId = { source: 'phone_lookup', value: id, error: null }
        } else {
          report.placeId.error = `Phone lookup: ${data.status ?? 'unknown'}${data.error_message ? ' — ' + data.error_message : ''}`
        }
      } catch (e) {
        report.placeId.error = `Phone lookup threw: ${String(e)}`
      }

      // Name + city fallback
      if (!report.placeId.value) {
        try {
          const input = encodeURIComponent('Avenue Locksmith Brooklyn NY')
          const res = await fetch(
            `${base}?input=${input}&inputtype=textquery&fields=place_id&key=${apiKey}`,
            { cache: 'no-store' },
          )
          const data = await res.json() as {
            status?: string
            candidates?: { place_id: string }[]
            error_message?: string
          }
          const id = data.candidates?.[0]?.place_id ?? null
          report.placeId = {
            source: 'text_query',
            value: id,
            error: id
              ? null
              : `Text query: ${data.status ?? 'unknown'}${data.error_message ? ' — ' + data.error_message : ''}`,
          }
        } catch (e) {
          report.placeId.error =
            (report.placeId.error ? report.placeId.error + '; ' : '') +
            `Text query threw: ${String(e)}`
        }
      }
    }

    // ── Step 2: Fetch reviews from Google Places ──────────────────────────────

    if (report.placeId.value) {
      try {
        const url =
          `https://maps.googleapis.com/maps/api/place/details/json` +
          `?place_id=${encodeURIComponent(report.placeId.value)}` +
          `&fields=reviews` +
          `&reviews_sort=newest` +
          `&key=${apiKey}`
        const res = await fetch(url, { cache: 'no-store' })
        const data = await res.json() as {
          status?: string
          result?: { reviews?: { rating: number }[] }
          error_message?: string
        }
        if (!res.ok || data.status !== 'OK') {
          report.googleReviews = {
            ok: false,
            totalFetched: 0,
            fiveStarCount: 0,
            error: `Places Details: ${data.status ?? res.status}${data.error_message ? ' — ' + data.error_message : ''}`,
          }
        } else {
          const reviews = data.result?.reviews ?? []
          report.googleReviews = {
            ok: true,
            totalFetched: reviews.length,
            fiveStarCount: reviews.filter((r) => r.rating === 5).length,
            error: null,
          }
        }
      } catch (e) {
        report.googleReviews = {
          ok: false,
          totalFetched: 0,
          fiveStarCount: 0,
          error: `Places Details threw: ${String(e)}`,
        }
      }
    }
  }

  // ── Step 3: Check Supabase table ────────────────────────────────────────────

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (supabaseUrl && supabaseKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey)
      const { count, error } = await supabase
        .from('google_reviews')
        .select('*', { count: 'exact', head: true })
      if (error) {
        // PostgREST code 42P01 = "undefined_table" (migration not run)
        report.supabase = {
          tableExists: error.code !== '42P01',
          rowCount: null,
          error: `${error.code}: ${error.message}`,
        }
      } else {
        report.supabase = { tableExists: true, rowCount: count ?? 0, error: null }
      }
    } catch (e) {
      report.supabase = { tableExists: false, rowCount: null, error: `Supabase threw: ${String(e)}` }
    }
  } else {
    report.supabase = { tableExists: false, rowCount: null, error: 'Supabase env vars missing' }
  }

  return NextResponse.json(report)
}
