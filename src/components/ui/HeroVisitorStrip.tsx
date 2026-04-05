'use client'

import { Phone, Zap } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { useVisitorType } from '@/hooks/useVisitorType'

export function HeroVisitorStrip() {
  const { visitorType } = useVisitorType()

  if (visitorType === 'unknown') return <div aria-hidden="true" />

  if (visitorType === 'returning') {
    return (
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 mb-6 w-full max-w-lg mx-auto">
        <div className="flex items-center gap-2">
          <Zap size={16} className="text-brand-amber shrink-0" aria-hidden="true" />
          <span className="text-white/90 text-sm font-medium">
            You&apos;ve visited before — ready to resolve your lock issue?
          </span>
        </div>
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center gap-1.5 bg-brand-amber text-brand-navy font-bold text-sm px-4 py-1.5 rounded-lg hover:bg-brand-orange transition-colors shrink-0"
        >
          <Phone size={13} aria-hidden="true" />
          Call Now
        </a>
      </div>
    )
  }

  return null
}
