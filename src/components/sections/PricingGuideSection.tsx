import Link from 'next/link'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const PRICING_ITEMS = [
  {
    service: 'Emergency Lockout',
    range: '$85 – $145',
    includes: [
      'Residential, commercial, or auto — any time',
      'Non-destructive entry attempted first',
      'No drilling unless genuinely necessary',
      'Price confirmed before work begins',
    ],
    href: '/services/emergency-locksmith/',
  },
  {
    service: 'Lock Rekeying',
    range: '$55 – $95',
    includes: [
      'Per lock — your existing hardware stays',
      'Old keys stop working immediately',
      'Schlage, Kwikset, Medeco, Mul-T-Lock',
      'Most common move-in service we do',
    ],
    href: '/services/lock-rekey/',
    popular: true,
  },
  {
    service: 'Lock Replacement',
    range: '$130 – $265',
    includes: [
      'New deadbolt or knob lock installed',
      'Schlage, Kwikset, Medeco available',
      'Hardware + labor included in quote',
      'Grade 1, 2, and 3 options available',
    ],
    href: '/services/lock-change/',
  },
  {
    service: 'Deadbolt Installation',
    range: '$150 – $300',
    includes: [
      'ANSI Grade 1 from $150 (residential standard)',
      'Medeco / Mul-T-Lock high-security from $275',
      'Door prep work included if needed',
      'Most installations under 45 minutes',
    ],
    href: '/services/deadbolt-installation/',
  },
  {
    service: 'Car Key Replacement',
    range: '$130 – $375',
    includes: [
      'Transponder key cut & programmed on-site',
      'Key fob replacement & synchronization',
      'Most makes & models — domestic and foreign',
      '40–60% less than dealer pricing typical',
    ],
    href: '/services/auto-locksmith/',
  },
  {
    service: 'Smart Lock Installation',
    range: '$160 – $420',
    includes: [
      'Schlage Encode, August, Yale available',
      'App setup and configuration included',
      'Full door assessment before hardware choice',
      'Keypad, Bluetooth, and Wi-Fi options',
    ],
    href: '/services/security-solutions/smart-locks/',
  },
  {
    service: 'Master Key System',
    range: '$275 – $850+',
    includes: [
      'Designed for multi-unit properties',
      'Each tenant key opens only their unit',
      'Management key opens all units',
      'Scalable — add units without full rekey',
    ],
    href: '/services/commercial-locksmith/',
  },
  {
    service: 'Safe Opening',
    range: '$150 – $500',
    includes: [
      'Non-destructive opening attempted first',
      'Combination change included after opening',
      'Home safes, office safes, fireproof models',
      'Deposit safe and floor safe experience',
    ],
    href: '/services/safe-locksmith/',
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
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">
            Honest Locksmith Pricing in Brooklyn, NY
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            We publish real price ranges so you know what to expect before you call. The final quote — labor and hardware combined — is confirmed before we touch anything. No service call fee added at the door. No price that changes once we&apos;re inside.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {PRICING_ITEMS.map((item) => (
            <div
              key={item.service}
              className={cn(
                'bg-white rounded-xl border p-5 flex flex-col relative',
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

              <div className="mb-3">
                <h3 className="font-bold text-brand-navy text-sm leading-tight mb-1">{item.service}</h3>
                <div className="text-brand-amber font-bold text-lg">{item.range}</div>
              </div>

              <ul className="space-y-1.5 mb-4 flex-1">
                {item.includes.map((point) => (
                  <li key={point} className="flex items-start gap-1.5 text-xs text-brand-muted">
                    <CheckCircle size={11} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href={item.href}
                className="flex items-center gap-1 text-brand-navy font-semibold text-xs hover:text-brand-amber transition-colors mt-auto"
              >
                Details <ArrowRight size={11} />
              </Link>
            </div>
          ))}
        </div>

        {/* Callout boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="bg-white border border-brand-border rounded-xl p-5">
            <h3 className="font-bold text-brand-navy text-sm mb-2">Car Key vs. Dealer Pricing</h3>
            <p className="text-brand-muted text-xs leading-relaxed">
              Dealerships routinely charge $250–$600+ for transponder key programming and key fob replacement. We come to your location, program the same key using the same equipment, and typically charge 40–60% less. No towing required, no appointment needed — we come to you.
            </p>
            <Link href="/services/auto-locksmith/" className="inline-flex items-center gap-1 text-brand-amber text-xs font-semibold mt-3 hover:gap-2 transition-all">
              Auto locksmith services <ArrowRight size={10} />
            </Link>
          </div>
          <div className="bg-white border border-brand-border rounded-xl p-5">
            <h3 className="font-bold text-brand-navy text-sm mb-2">No Hidden Service Call Fee</h3>
            <p className="text-brand-muted text-xs leading-relaxed">
              Some locksmith companies advertise a low service rate and add a "service call fee" of $65–$195 on arrival. We don&apos;t charge a separate service call fee. The price quoted on the phone is the price for the complete job — service and labor together.
            </p>
            <Link href="/free-quote/" className="inline-flex items-center gap-1 text-brand-amber text-xs font-semibold mt-3 hover:gap-2 transition-all">
              Get a free quote <ArrowRight size={10} />
            </Link>
          </div>
        </div>

        {/* Bottom disclaimer + CTA */}
        <div className="bg-white border border-brand-border rounded-xl p-6 flex flex-col md:flex-row items-center gap-5 justify-between">
          <div className="text-sm text-brand-muted max-w-xl">
            <p className="font-semibold text-brand-navy mb-1">Exact prices depend on hardware grade, lock brand, and job specifics.</p>
            <p>
              Ranges shown are typical for standard residential jobs in Brooklyn. Commercial work, after-hours calls, high-security hardware, or complex door prep may differ. You&apos;re always quoted the exact total before work begins — and you&apos;re never obligated to proceed.
            </p>
          </div>
          <a
            href={BUSINESS.phoneHref}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-6 py-3.5 rounded-xl transition-colors shadow-sm whitespace-nowrap"
          >
            <Phone size={16} aria-hidden="true" />
            Get Your Exact Price
          </a>
        </div>
      </div>
    </section>
  )
}
