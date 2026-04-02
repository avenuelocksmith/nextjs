'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'

export function MobileStickyCTA() {
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    // Pulse every 8 seconds to draw attention
    const interval = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 1200)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-navy border-t border-brand-navy/20 shadow-2xl">
      <div className="flex divide-x divide-white/20">
        <a
          href={BUSINESS.phoneHref}
          className="relative flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold text-base active:bg-brand-navy/80 transition-colors overflow-hidden"
          aria-label={`Call Avenue Locksmith at ${BUSINESS.phone}`}
        >
          {/* Pulse ring */}
          {pulse && (
            <span
              className="absolute inset-0 rounded-none animate-ping bg-white/10"
              aria-hidden="true"
            />
          )}
          <Phone
            size={20}
            aria-hidden="true"
            className={pulse ? 'scale-110 transition-transform duration-200' : 'transition-transform duration-200'}
          />
          <span>Call Now</span>
        </a>
        <Link
          href="/free-quote/"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-amber text-brand-navy font-bold text-base active:bg-brand-orange transition-colors"
          aria-label="Get a free quote"
        >
          <MessageSquare size={20} aria-hidden="true" />
          <span>Free Quote</span>
        </Link>
      </div>
    </div>
  )
}
