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
  }, [])

  return afterHours
}
