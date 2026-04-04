'use client'

import { useState, useEffect } from 'react'
import { isAfterHours } from '@/lib/availability'

/**
 * Returns whether the current Eastern Time is after-hours (6 PM – 8 AM ET).
 * Returns null during SSR/initial render to avoid hydration mismatches;
 * components should default to "24/7" messaging when null.
 */
export function useAvailability(): boolean | null {
  const [afterHours, setAfterHours] = useState<boolean | null>(null)

  useEffect(() => {
    setAfterHours(isAfterHours())

    // Re-check every 60 s so pages open near the 6 PM / 8 AM boundary update automatically
    const interval = setInterval(() => setAfterHours(isAfterHours()), 60_000)
    return () => clearInterval(interval)
  }, [])

  return afterHours
}
