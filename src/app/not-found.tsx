import { Phone, Home, Search } from 'lucide-react'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'

export default function NotFound() {
  return (
    <section className="py-20 bg-brand-bg min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <p className="text-brand-amber text-6xl font-bold mb-4">404</p>
        <h1 className="text-3xl font-bold text-brand-navy mb-4">Page Not Found</h1>
        <p className="text-brand-muted text-lg mb-8">
          The page you are looking for does not exist or has been moved. If you need immediate locksmith service, call us directly — we&apos;re available 24/7.
        </p>

        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-8 py-4 rounded-xl text-xl transition-colors shadow-xl mb-8"
        >
          <Phone size={24} aria-hidden="true" />
          {BUSINESS.phone}
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-brand-navy text-white font-semibold px-5 py-3 rounded-xl hover:bg-brand-navy/90 transition-colors"
          >
            <Home size={18} aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            href="/services/"
            className="flex items-center justify-center gap-2 bg-white text-brand-navy border border-brand-border font-semibold px-5 py-3 rounded-xl hover:border-brand-navy transition-colors"
          >
            <Search size={18} aria-hidden="true" />
            Browse Services
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-border">
          <p className="text-brand-muted text-sm mb-3">Commonly visited pages:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: 'Emergency Locksmith', href: '/emergency-locksmith-in-brooklyn-ny/' },
              { label: 'House Lockout', href: '/house-lockout-in-brooklyn-ny/' },
              { label: 'Car Lockout', href: '/car-lockout-service-in-brooklyn-ny/' },
              { label: 'Lock Rekeying', href: '/services/lock-rekey/' },
              { label: 'Locksmith Near Me', href: '/locksmith-near-me/' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-navy text-sm hover:text-brand-amber hover:underline transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
