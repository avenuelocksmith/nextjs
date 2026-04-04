'use client'

import { useState, useEffect } from 'react'
import { Users, Wrench, Zap } from 'lucide-react'

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

interface Counts {
  techs: number
  inProgress: number
  dispatched: number
}

// Counts only generated client-side to avoid SSR/hydration mismatch
export function LiveActivityBar() {
  const [counts, setCounts] = useState<Counts | null>(null)

  useEffect(() => {
    setCounts({
      techs: rand(2, 5),
      inProgress: rand(3, 7),
      dispatched: rand(1, 3),
    })
  }, [])

  if (!counts) return null

  const techsLow = counts.techs <= 2

  return (
    <div className="mt-6 flex flex-col items-center gap-3">
      {/* Live status bar */}
      <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3">
        {/* Live indicator */}
        <span className="flex items-center gap-1.5 text-green-400 text-xs font-bold uppercase tracking-wider">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          Live
        </span>

        <span className="w-px h-4 bg-white/20 hidden sm:block" aria-hidden="true" />

        {/* Technicians available */}
        <span className="flex items-center gap-1.5 text-sm">
          <Users size={14} className={techsLow ? 'text-amber-400' : 'text-green-400'} aria-hidden="true" />
          <span className="font-bold text-white tabular-nums">{counts.techs}</span>
          <span className="text-white/70">techs available</span>
        </span>

        <span className="w-px h-4 bg-white/20 hidden sm:block" aria-hidden="true" />

        {/* Jobs in progress */}
        <span className="flex items-center gap-1.5 text-sm">
          <Wrench size={14} className="text-blue-400" aria-hidden="true" />
          <span className="font-bold text-white tabular-nums">{counts.inProgress}</span>
          <span className="text-white/70">jobs active</span>
        </span>

        <span className="w-px h-4 bg-white/20 hidden sm:block" aria-hidden="true" />

        {/* Dispatched */}
        <span className="flex items-center gap-1.5 text-sm">
          <Zap size={14} className="text-brand-amber" aria-hidden="true" />
          <span className="font-bold text-white tabular-nums">{counts.dispatched}</span>
          <span className="text-white/70">dispatched now</span>
        </span>
      </div>

      {/* Urgency nudge when availability is low */}
      {techsLow && (
        <p className="text-amber-400 text-xs font-semibold animate-pulse">
          ⚡ Limited availability — call now to secure a technician
        </p>
      )}
    </div>
  )
}
