'use client'

import { useState, useEffect } from 'react'
import { X, Phone } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { useVisitorType } from '@/hooks/useVisitorType'
import Link from 'next/link'

const SESSION_KEY = 'av_wb_dismissed'

export function WelcomeBackBar() {
  const { isReturning } = useVisitorType()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!isReturning) return
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return
    } catch {}
    setVisible(true)
  }, [isReturning])

  function dismiss() {
    setVisible(false)
    try { sessionStorage.setItem(SESSION_KEY, '1') } catch {}
  }

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-out ${
        visible ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-brand-amber text-brand-navy text-sm font-medium px-4 py-0.5 flex items-center justify-center gap-3 flex-wrap">
        <span>
          Welcome back! 24/7 emergency service available right now.
        </span>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-1.5 bg-brand-navy text-white text-xs font-bold px-3 py-1 rounded-full hover:bg-brand-navy/80 transition-colors"
          >
            <Phone size={12} aria-hidden="true" />
            Call Now
          </a>
          <Link
            href="/free-quote/"
            className="inline-flex items-center gap-1.5 border border-brand-navy text-brand-navy text-xs font-bold px-3 py-1 rounded-full hover:bg-brand-navy/10 transition-colors"
          >
            Free Quote
          </Link>
        </div>
        <button
          onClick={dismiss}
          aria-label="Dismiss welcome bar"
          className="absolute right-3 text-brand-navy/60 hover:text-brand-navy transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
