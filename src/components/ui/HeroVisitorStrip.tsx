'use client'

import { Phone, Zap } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { useVisitorType } from '@/hooks/useVisitorType'

export function HeroVisitorStrip() {
  const { visitorType } = useVisitorType()

  if (visitorType === 'unknown') return <div aria-hidden="true" />

  if (visitorType === 'returning') {
    return (
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3 border-l-2 border-brand-amber pl-4 mb-6 max-w-lg mx-auto lg:mx-0">
        <div className="flex items-center gap-2">
          <Zap size={16} className="text-brand-amber shrink-0" aria-hidden="true" />
          <span className="text-white/90 text-sm font-medium">
            You&apos;ve visited before — ready to resolve your lock issue?
          </span>
        </div>
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center gap-1.5 border border-brand-amber text-brand-amber font-bold text-sm px-4 py-1.5 rounded-lg hover:bg-brand-amber hover:text-brand-charcoal transition-colors shrink-0"
        >
          <Phone size={13} aria-hidden="true" />
          Call Now
        </a>
      </div>
    )
  }

  return null
}
