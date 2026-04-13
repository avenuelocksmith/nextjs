'use client'

import { Phone, RefreshCw } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="py-20 bg-brand-bg min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <p className="text-brand-amber text-5xl font-bold mb-4">Oops</p>
        <h1 className="text-3xl font-bold text-brand-navy mb-4">Something Went Wrong</h1>
        <p className="text-brand-muted text-lg mb-8">
          We hit an unexpected error. You can try again, or call us directly for
          immediate locksmith service — we&apos;re available 24/7.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-navy/90 transition-colors"
          >
            <RefreshCw size={18} aria-hidden="true" />
            Try Again
          </button>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-6 py-3 rounded-xl transition-colors"
          >
            <Phone size={18} aria-hidden="true" />
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
