/**
 * POST /api/reviews/refresh
 *
 * Manually triggers a fresh Google Places API fetch + Supabase upsert.
 * Useful after replying to a new review or for a scheduled ping.
 *
 * Protected by the REVIEW_REFRESH_SECRET env var (set in Cloudflare).
 * Pass the secret in the Authorization header:
 *   Authorization: Bearer <REVIEW_REFRESH_SECRET>
 *
 * Returns: { success: true, count: number }
 */

import { NextRequest, NextResponse } from 'next/server'
import { getGoogleReviews } from '@/lib/reviews'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  const secret = process.env.REVIEW_REFRESH_SECRET
  if (secret) {
    const auth = req.headers.get('authorization') ?? ''
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  const reviews = await getGoogleReviews()
  return NextResponse.json({ success: true, count: reviews.length })
}
