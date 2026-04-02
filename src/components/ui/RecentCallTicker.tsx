'use client'

import { useState, useEffect, useRef } from 'react'
import { Phone } from 'lucide-react'

const NEIGHBORHOODS = [
  'Park Slope', 'Williamsburg', 'Bushwick', 'Crown Heights', 'Flatbush',
  'Bay Ridge', 'DUMBO', 'Brooklyn Heights', 'Bed-Stuy', 'Carroll Gardens',
  'Cobble Hill', 'Sunset Park', 'Greenpoint', 'Canarsie', 'Flatlands',
  'Sheepshead Bay', 'Borough Park', 'Bensonhurst', 'Red Hook', 'Prospect Heights',
]

const SERVICES = [
  'called about a lockout',
  'requested a lock rekey',
  'booked a deadbolt install',
  'called about a car lockout',
  'requested an emergency visit',
  'called about a lock change',
]

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomEntry() {
  return {
    neighborhood: NEIGHBORHOODS[randInt(0, NEIGHBORHOODS.length - 1)],
    service: SERVICES[randInt(0, SERVICES.length - 1)],
    minutes: randInt(2, 18),
  }
}

export function RecentCallTicker() {
  const [entry, setEntry] = useState<ReturnType<typeof randomEntry> | null>(null)
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function cycle() {
    // Hide → swap content → show
    setVisible(false)
    timerRef.current = setTimeout(() => {
      setEntry(randomEntry())
      setVisible(true)
      // Auto-hide after 5 s, then cycle again after 9 s gap
      timerRef.current = setTimeout(() => {
        setVisible(false)
        timerRef.current = setTimeout(cycle, 4000)
      }, 5000)
    }, 400)
  }

  useEffect(() => {
    // Initial delay so it doesn't fire immediately on load
    timerRef.current = setTimeout(cycle, 3500)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!entry) return null

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className={`
        fixed bottom-20 left-4 z-50 md:bottom-6
        transition-all duration-500 ease-in-out
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'}
      `}
    >
      <div className="flex items-center gap-2.5 bg-white border border-brand-border rounded-xl shadow-lg px-4 py-3 max-w-[280px]">
        {/* Green pulse dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-brand-navy leading-snug truncate">
            Someone in {entry.neighborhood}
          </p>
          <p className="text-xs text-brand-muted leading-snug">
            {entry.service} · {entry.minutes} min ago
          </p>
        </div>
        <Phone size={13} className="text-brand-amber shrink-0" aria-hidden="true" />
      </div>
    </div>
  )
}
