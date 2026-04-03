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
