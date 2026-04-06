/**
 * Returns true if the current Eastern Time is outside business hours:
 * after-hours = 6 PM (18:00) to 8 AM (08:00) ET
 */
export function isAfterHours(): boolean {
  const hour = parseInt(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      hour: 'numeric',
      hour12: false,
    }).format(new Date()),
    10
  )
  return hour >= 18 || hour < 8
}

/**
 * Replaces "24/7" in a string with "Open Now" during business hours (8 AM–6 PM ET).
 * Returns the string unchanged when afterHours is true or null (SSR/initial render).
 *
 * Usage in components:
 *   replace247(text, afterHours)
 *   // null → no change (SSR safe fallback shows 24/7)
 *   // true  → no change (after-hours, show 24/7)
 *   // false → replaces 24/7 with "Open Now" (business hours)
 */
export function replace247(text: string, afterHours: boolean | null): string {
  if (afterHours !== false) return text
  return text.replace(/24\/7/g, 'Open Now')
}
