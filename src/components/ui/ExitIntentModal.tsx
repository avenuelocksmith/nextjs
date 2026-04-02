'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, Phone, Clock, Shield } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

const SESSION_KEY = 'exit_modal_shown'

export function ExitIntentModal() {
  const [open, setOpen] = useState(false)

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
            className="absolute top-4 right-4 text-brand-muted hover:text-brand-navy transition-colors"
          >
            <X size={20} />
          </button>

          {/* Headline */}
          <p className="text-xs font-bold text-brand-amber uppercase tracking-widest mb-2">
            Before you go
          </p>
          <h2 id="exit-modal-title" className="text-2xl font-bold text-brand-navy mb-2 leading-tight">
            Still need a locksmith?
          </h2>
          <p className="text-brand-muted text-sm mb-6">
            We&apos;re available right now. One call and a technician is on the way in 15–25 minutes — no waiting, no voicemail.
          </p>

          {/* Trust bullets */}
          <ul className="space-y-2 mb-7">
            {[
              { icon: Clock, text: '15–25 minute arrival — guaranteed' },
              { icon: Shield, text: 'NYC DCWP licensed & fully insured' },
              { icon: Phone, text: 'Upfront price before we start — no surprises' },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2.5 text-sm text-brand-text">
                <Icon size={15} className="text-brand-amber shrink-0" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={BUSINESS.phoneHref}
            onClick={dismiss}
            className="flex items-center justify-center gap-3 w-full bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold py-4 rounded-xl text-lg transition-colors shadow-md"
          >
            <Phone size={20} aria-hidden="true" />
            {BUSINESS.phone}
          </a>

          <button
            onClick={dismiss}
            className="w-full text-center text-xs text-brand-muted mt-4 hover:text-brand-navy transition-colors"
          >
            No thanks, I&apos;ll keep looking
          </button>
        </div>
      </div>
    </div>
  )
}
