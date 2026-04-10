/**
 * GET /api/reviews/status
 *
 * Public diagnostic endpoint — no auth required.
 * Tests the Google Business Profile API OAuth flow and Supabase connection.
 * Env vars are reported as booleans only — values are never echoed.
 */

import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'edge'

interface StatusReport {
  env: {
    GOOGLE_OAUTH_CLIENT_ID: boolean
    GOOGLE_OAUTH_CLIENT_SECRET: boolean
    GOOGLE_REFRESH_TOKEN: boolean
    GOOGLE_LOCATION_NAME: boolean
    SUPABASE_URL: boolean
    SUPABASE_SERVICE_ROLE_KEY: boolean
  }
  oauth: {
    accessToken: boolean
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
  const locationName = process.env.GOOGLE_LOCATION_NAME

  const report: StatusReport = {
    env: {
      GOOGLE_OAUTH_CLIENT_ID:     !!process.env.GOOGLE_OAUTH_CLIENT_ID,
      GOOGLE_OAUTH_CLIENT_SECRET: !!process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      GOOGLE_REFRESH_TOKEN:       !!process.env.GOOGLE_REFRESH_TOKEN,
      GOOGLE_LOCATION_NAME:       !!locationName,
      SUPABASE_URL:               !!(process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL),
      SUPABASE_SERVICE_ROLE_KEY:  !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    },
    oauth:        { accessToken: false, error: null },
    googleReviews: null,
    supabase:     { tableExists: false, rowCount: null, error: null },
  }

  // ── Step 1: Exchange refresh token for access token ──────────────────────────

  let accessToken: string | null = null

  if (
    process.env.GOOGLE_OAUTH_CLIENT_ID &&
    process.env.GOOGLE_OAUTH_CLIENT_SECRET &&
    process.env.GOOGLE_REFRESH_TOKEN
  ) {
    try {
      const res = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id:     process.env.GOOGLE_OAUTH_CLIENT_ID,
          client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
          refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
          grant_type:    'refresh_token',
        }),
      })
      if (!res.ok) {
        const err = await res.text()
        report.oauth.error = `Token exchange failed (${res.status}): ${err}`
      } else {
        const data = await res.json() as { access_token: string }
        accessToken = data.access_token
        report.oauth.accessToken = true
      }
    } catch (e) {
      report.oauth.error = `Token exchange threw: ${String(e)}`
    }
  } else {
    report.oauth.error = 'OAuth env vars missing'
  }

  // ── Step 2: Fetch reviews from Business Profile API ──────────────────────────

  if (accessToken && locationName) {
    try {
      const res = await fetch(
        `https://mybusiness.googleapis.com/v4/${locationName}/reviews?orderBy=updateTime+desc`,
        { headers: { Authorization: `Bearer ${accessToken}` } },
      )
      if (!res.ok) {
        const err = await res.text()
        report.googleReviews = {
          ok: false, totalFetched: 0, fiveStarCount: 0,
          error: `Business Profile API (${res.status}): ${err}`,
        }
      } else {
        const data = await res.json() as {
          reviews?: { starRating: string }[]
        }
        const reviews = data.reviews ?? []
        report.googleReviews = {
          ok: true,
          totalFetched: reviews.length,
          fiveStarCount: reviews.filter((r) => r.starRating === 'FIVE').length,
          error: null,
        }
      }
    } catch (e) {
      report.googleReviews = {
        ok: false, totalFetched: 0, fiveStarCount: 0,
        error: `Business Profile API threw: ${String(e)}`,
      }
    }
  }

  // ── Step 3: Check Supabase table ────────────────────────────────────────────

  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (supabaseUrl && supabaseKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey)
      const { count, error } = await supabase
        .from('google_reviews')
        .select('*', { count: 'exact', head: true })
      if (error) {
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
