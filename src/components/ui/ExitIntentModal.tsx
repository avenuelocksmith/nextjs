'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, Phone, Clock, Shield, Star, Zap } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { useVisitorType } from '@/hooks/useVisitorType'
import Link from 'next/link'

const SESSION_KEY = 'exit_modal_shown'

export function ExitIntentModal() {
  const [open, setOpen] = useState(false)
  const { visitorType } = useVisitorType()

  const dismiss = useCallback(() => {
    setOpen(false)
    try { sessionStorage.setItem(SESSION_KEY, '1') } catch {}
  }, [])

  useEffect(() => {
    // Only desktop, only once per session
    if (window.innerWidth < 768) return
    try { if (sessionStorage.getItem(SESSION_KEY)) return } catch {}

    let triggered = false

    function handleMouseLeave(e: MouseEvent) {
      // Fires when cursor exits through the top of the viewport
      if (triggered || e.clientY > 20) return
      triggered = true
      setOpen(true)
    }

    // Small delay so it doesn't fire on initial scroll-to-top
    const t = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 3000)

    return () => {
      clearTimeout(t)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') dismiss() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, dismiss])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1.5 bg-brand-amber w-full" />

        <div className="p-8">
          {/* Close */}
          <button
            onClick={dismiss}
            aria-label="Close"
            className="absolute top-4 right-4 text-brand-muted hover:text-brand-amber transition-colors"
          >
            <X size={20} />
          </button>

          {visitorType === 'returning' ? (
            <>
              {/* Returning visitor content */}
              <p className="text-xs font-bold text-brand-amber uppercase tracking-widest mb-2">
                Welcome back
              </p>
              <h2 id="exit-modal-title" className="text-2xl font-bold text-brand-charcoal mb-2 leading-tight">
                Still need a locksmith?
              </h2>
              <p className="text-brand-muted text-sm mb-6">
                We&apos;re ready when you are — 24/7 emergency service, no hidden fees. Our team remembers every customer.
              </p>
              <ul className="space-y-2 mb-7">
                {[
                  { icon: Zap, text: 'Technician dispatched in minutes' },
                  { icon: Shield, text: 'No hidden fees — price locked upfront' },
                  { icon: Clock, text: '24/7 service, same price day or night' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5 text-sm text-brand-text">
                    <Icon size={15} className="text-brand-amber shrink-0" aria-hidden="true" />
                    {text}
                  </li>
                ))}
              </ul>
              <a
                href={BUSINESS.phoneHref}
                onClick={dismiss}
                className="flex items-center justify-center gap-3 w-full bg-brand-amber hover:bg-brand-orange text-brand-charcoal font-bold py-4 rounded-xl text-lg transition-colors shadow-md"
              >
                <Phone size={20} aria-hidden="true" />
                Call Now — We&apos;re Available
              </a>
              <Link
                href="/free-quote/"
                onClick={dismiss}
                className="block w-full text-center text-sm text-brand-charcoal font-medium mt-3 hover:text-brand-amber transition-colors"
              >
                Get a free quote instead →
              </Link>
              <button
                onClick={dismiss}
                className="w-full text-center text-xs text-brand-muted mt-3 hover:text-brand-amber transition-colors"
              >
                No thanks, I&apos;ll keep looking
              </button>
            </>
          ) : (
            <>
              {/* New visitor content */}
              <p className="text-xs font-bold text-brand-amber uppercase tracking-widest mb-2">
                Before you go
              </p>
              <h2 id="exit-modal-title" className="text-2xl font-bold text-brand-charcoal mb-2 leading-tight">
                Not sure about us?
              </h2>
              <p className="text-brand-muted text-sm mb-6">
                We&apos;re available right now. One call and a technician is on the way in 15–25 minutes — no waiting, no voicemail.
              </p>
              <ul className="space-y-2 mb-7">
                {[
                  { icon: Star, text: `${BUSINESS.rating}★ rating from ${BUSINESS.reviewCount}+ customers` },
                  { icon: Shield, text: 'Licensed & insured since 2010' },
                  { icon: Clock, text: `${BUSINESS.responseTime} average response time` },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5 text-sm text-brand-text">
                    <Icon size={15} className="text-brand-amber shrink-0" aria-hidden="true" />
                    {text}
                  </li>
                ))}
              </ul>
              <a
                href={BUSINESS.phoneHref}
                onClick={dismiss}
                className="flex items-center justify-center gap-3 w-full bg-brand-amber hover:bg-brand-orange text-brand-charcoal font-bold py-4 rounded-xl text-lg transition-colors shadow-md"
              >
                <Phone size={20} aria-hidden="true" />
                {BUSINESS.phone}
              </a>
              <button
                onClick={dismiss}
                className="w-full text-center text-xs text-brand-muted mt-4 hover:text-brand-amber transition-colors"
              >
                No thanks, I&apos;ll keep looking
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
