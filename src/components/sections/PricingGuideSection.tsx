import Link from 'next/link'
import { DollarSign, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const PRICING_ITEMS = [
  {
    service: 'Emergency Lockout',
    range: '$75 – $125',
    includes: ['Residential, commercial, or auto lockout', 'Any time — nights, weekends, holidays', 'Price quoted before we begin'],
    href: '/services/emergency-locksmith/',
  },
  {
    service: 'Lock Rekeying',
    range: '$50 – $100',
    includes: ['Per lock — no new hardware needed', 'Old keys stop working immediately', 'Common for new tenants & move-ins'],
    href: '/services/lock-rekey/',
    popular: true,
  },
  {
    service: 'Lock Replacement',
    range: '$125 – $250',
    includes: ['New deadbolt or knob lock installed', 'Schlage, Kwikset, Medeco brands available', 'Includes labor and standard hardware'],
    href: '/services/lock-change/',
  },
  {
    service: 'Deadbolt Installation',
    range: '$150 – $275',
    includes: ['ANSI Grade 1 deadbolts from $150', 'High-security Medeco/Mul-T-Lock from $250+', 'Door prep included if needed'],
    href: '/services/deadbolt-installation/',
  },
  {
    service: 'Car Key Programming',
    range: '$125 – $350',
    includes: ['Transponder key cutting & programming', 'Key fob replacement & sync', 'Most makes and models — fraction of dealer price'],
    href: '/services/auto-locksmith/',
  },
  {
    service: 'Smart Lock Installation',
    range: '$150 – $400',
    includes: ['App setup & configuration included', 'Schlage Encode, August, Yale available', 'Compatible deadbolt retrofit or new install'],
    href: '/services/security-solutions/smart-locks/',
  },
]

interface PricingGuideSectionProps {
  className?: string
}

export function PricingGuideSection({ className }: PricingGuideSectionProps) {
  return (
    <section className={cn('py-14 md:py-20 bg-brand-bg', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-amber font-semibold text-sm uppercase tracking-wider mb-2">
            No Surprises
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">
            Honest Locksmith Pricing in Brooklyn
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            We publish real price ranges so you know what to expect before you call. Every job is quoted upfront — what we quote is what you pay. No trip fees dropped on you at the door.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {PRICING_ITEMS.map((item) => (
            <div
              key={item.service}
              className={cn(
                'bg-white rounded-xl border p-6 flex flex-col relative',
                item.popular
                  ? 'border-brand-amber shadow-md'
                  : 'border-brand-border hover:border-brand-amber/50 transition-colors'
              )}
            >
              {item.popular && (
                <span className="absolute -top-3 left-4 bg-brand-amber text-brand-navy text-xs font-bold px-3 py-1 rounded-full">
                  Most Requested
                </span>
              )}

              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-brand-navy text-lg leading-tight pr-2">{item.service}</h3>
                <div className="flex-shrink-0 flex items-center gap-1 text-brand-amber font-bold text-base whitespace-nowrap">
                  <DollarSign size={15} aria-hidden="true" className="-mr-0.5" />
                  <span>{item.range.replace('$', '')}</span>
                </div>
              </div>

              <ul className="space-y-1.5 mb-4 flex-1">
                {item.includes.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-brand-muted">
                    <CheckCircle size={13} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href={item.href}
                className="flex items-center gap-1 text-brand-navy font-semibold text-sm hover:text-brand-amber transition-colors mt-auto"
              >
                Learn More <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>

        {/* Disclaimer + CTA */}
        <div className="bg-white border border-brand-border rounded-xl p-6 flex flex-col md:flex-row items-center gap-5 justify-between">
          <div className="text-sm text-brand-muted max-w-xl">
            <p className="font-semibold text-brand-navy mb-1">Prices vary based on hardware, lock grade, and job complexity.</p>
            <p>
              All prices shown are typical ranges for standard residential jobs in Brooklyn. Commercial work, high-security hardware, or after-hours surcharges may differ. We always confirm the exact total before starting — you are never obligated to proceed.
            </p>
          </div>
          <a
            href={BUSINESS.phoneHref}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-6 py-3.5 rounded-xl transition-colors shadow-sm whitespace-nowrap"
          >
            <Phone size={16} aria-hidden="true" />
            Get Your Exact Quote
          </a>
        </div>
      </div>
    </section>
  )
}
