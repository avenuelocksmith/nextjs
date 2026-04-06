'use client'

import { useAvailability } from '@/hooks/useAvailability'

/**
 * Inline client component that renders "24/7" during after-hours (6 PM–8 AM ET)
 * and "Open Now" during business hours (8 AM–6 PM ET).
 *
 * Usage in JSX:
 *   <p>Available <Term247 /> — 365 days a year</p>
 *   <p>Call us <Term247 /></p>
 */
export function Term247() {
  const afterHours = useAvailability()
  return <>{afterHours === false ? 'Open Now' : '24/7'}</>
}
