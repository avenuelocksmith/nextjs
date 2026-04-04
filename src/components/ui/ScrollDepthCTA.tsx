'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, Phone, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BUSINESS } from '@/lib/constants'
import { useVisitorType } from '@/hooks/useVisitorType'
import Link from 'next/link'

const SESSION_KEY = 'av_scroll_cta_dismissed'
const SCROLL_THRESHOLD = 0.6

export function ScrollDepthCTA() {
  const { visitorType } = useVisitorType()
  const [visible, setVisible] = useState(false)

  const checkScroll = useCallback(() => {
    const scrolled = window.scrollY + window.innerHeight
    const total = document.documentElement.scrollHeight
    if (scrolled / total >= SCROLL_THRESHOLD) {
      setVisible(true)
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  useEffect(() => {
    if (visitorType === 'unknown') return
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return
    } catch {}

    window.addEventListener('scroll', checkScroll, { passive: true })
    return () => window.removeEventListener('scroll', checkScroll)
  }, [visitorType, checkScroll])

  function dismiss() {
    setVisible(false)
    try { sessionStorage.setItem(SESSION_KEY, '1') } catch {}
  }

  const isReturning = visitorType === 'returning'

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-16 md:bottom-0 left-0 right-0 z-40 flex justify-center px-4 pb-4 pointer-events-none"
        >
          <div className="bg-brand-navy text-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4 max-w-lg w-full pointer-events-auto border border-white/10">
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm leading-snug">
                {isReturning
                  ? 'Ready to book? Our team is standing by.'
                  : 'Still exploring? Get a free quote — no obligation.'}
              </p>
              <p className="text-white/60 text-xs mt-0.5">
                {isReturning
                  ? '15–25 min response · Available 24/7'
                  : 'Upfront pricing · Licensed & insured'}
              </p>
            </div>
            {isReturning ? (
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 bg-brand-amber text-brand-navy font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-brand-orange transition-colors shrink-0"
              >
                <Phone size={15} aria-hidden="true" />
                Call Now
              </a>
            ) : (
              <Link
                href="/free-quote/"
                className="inline-flex items-center gap-2 bg-brand-amber text-brand-navy font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-brand-orange transition-colors shrink-0"
              >
                <FileText size={15} aria-hidden="true" />
                Free Quote
              </Link>
            )}
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="text-white/40 hover:text-white transition-colors shrink-0"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
