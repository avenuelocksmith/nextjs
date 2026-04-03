import Link from 'next/link'
import { Shield, Award, Users, MapPin, ArrowRight, CheckCircle, Star } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const CREDENTIALS = [
  {
    icon: Shield,
    label: 'NYC DCWP Licensed',
    detail:
      'Licensed by New York City\'s Department of Consumer & Worker Protection — the city agency that regulates all locksmith businesses in the five boroughs. Legally required to operate. Verifiable at nyc.gov/consumers.',
  },
  {
    icon: Award,
    label: 'ALOA Member & BBB Accredited',
    detail:
      'Active member of ALOA (Associated Locksmiths of America) — the national professional standards body for the locksmith industry. Also BBB accredited. Both memberships require ongoing compliance with professional conduct standards.',
  },
  {
    icon: Users,
    label: 'Background-Checked Technicians',
    detail:
      'Every technician has completed a background check and carries their credentials. We never dispatch unknown subcontractors. The person who shows up is an Avenue Locksmith employee we vetted, trained, and stand behind.',
  },
  {
    icon: MapPin,
    label: 'Brooklyn-Based Since 2010',
    detail:
      'We operate out of Brooklyn. Our address, license number, and ownership are all publicly documented. We\'re not a forwarding number that routes to whoever is available — our trucks are marked and our techs are local.',
  },
]

const STATS = [
  { value: '15+', label: 'Years in Brooklyn' },
  { value: '10,000+', label: 'Jobs Completed' },
  { value: '4.9/5', label: 'Star Rating' },
  { value: '150+', label: 'Verified Reviews' },
]

const CLIENT_TYPES = [
  'Brooklyn homeowners & renters',
  'Property management companies',
  'Retail & restaurant operators',
  'Schools & medical offices',
  'Office buildings & co-working spaces',
  'NYC landlords & building supers',
  'Automotive — all makes & models',
  'HOAs & multi-unit residential',
]

interface AboutCredentialsSectionProps {
  className?: string
}

export function AboutCredentialsSection({ className }: AboutCredentialsSectionProps) {
  return (
    <section className={cn('py-14 md:py-20 bg-white', className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
          {/* Left: Story */}
          <div>
            <span className="inline-block text-brand-amber font-semibold text-sm uppercase tracking-wider mb-2">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
              A Brooklyn Locksmith Built to Fix What Was Broken in the Industry
            </h2>
            <p className="text-brand-muted leading-relaxed mb-4">
              Avenue Locksmith opened in {BUSINESS.founded}. The owner — a licensed locksmith with years working on commercial security systems in Manhattan — had watched NYC residents get taken advantage of by the same pattern: low advertised prices, an unmarked van, and a final bill that was five times what was quoted over the phone.
            </p>
            <p className="text-brand-muted leading-relaxed mb-4">
              The DCWP has issued consumer alerts about locksmith fraud in New York for years. The BBB maintains active case files on it. It&apos;s a real, documented problem — and it works because people who are locked out at 2am don&apos;t have time to research who they&apos;re calling.
            </p>
            <p className="text-brand-muted leading-relaxed mb-4">
              The fix was simple in theory: show up when you say, quote the actual price upfront, send licensed technicians, and stand behind the work. Harder to execute consistently — but that&apos;s been the operating model here for fifteen years. It&apos;s why our reviews are specific and our repeat business is high.
            </p>
            <p className="text-brand-muted leading-relaxed mb-6">
              Today we handle everything from a Brooklyn Heights apartment lockout at midnight to a full access control installation for a Williamsburg office building. Residential, commercial, automotive — same team, same standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about/"
                className="inline-flex items-center gap-1.5 text-brand-navy font-semibold text-sm hover:text-brand-amber transition-colors"
              >
                Full company story <ArrowRight size={14} />
              </Link>
              <Link
                href="/testimonials/"
                className="inline-flex items-center gap-1.5 text-brand-navy font-semibold text-sm hover:text-brand-amber transition-colors"
              >
                {BUSINESS.reviewCount}+ customer reviews <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right: Stats + clients + license badge */}
          <div className="space-y-5">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-bg rounded-xl p-5 text-center border border-brand-border"
                >
                  <div className="text-3xl font-bold text-brand-navy mb-1">{stat.value}</div>
                  <div className="text-brand-muted text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Clients served */}
            <div className="bg-brand-bg border border-brand-border rounded-xl p-5">
              <p className="font-bold text-brand-navy text-sm mb-3 flex items-center gap-2">
                <Star size={14} className="text-brand-amber" aria-hidden="true" />
                Who We Work With
              </p>
              <div className="grid grid-cols-2 gap-y-1.5 gap-x-3">
                {CLIENT_TYPES.map((c) => (
                  <p key={c} className="text-xs text-brand-muted flex items-center gap-1.5">
                    <CheckCircle size={10} className="text-green-600 flex-shrink-0" aria-hidden="true" />
                    {c}
                  </p>
                ))}
              </div>
            </div>

            {/* License badge */}
            <div className="bg-brand-navy/5 border border-brand-navy/15 rounded-xl p-4 flex items-start gap-3">
              <Shield size={22} className="text-brand-navy flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-brand-navy text-sm">NYC DCWP Licensed · ALOA Member · BBB Accredited</p>
                <p className="text-brand-muted text-xs mt-1 leading-relaxed">
                  All three credentials are verifiable before we start work. Ask for our DCWP license number when we arrive — we encourage it. That&apos;s how you confirm you&apos;re dealing with a licensed locksmith and not an unlicensed operator.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CREDENTIALS.map((cred) => {
            const Icon = cred.icon
            return (
              <div
                key={cred.label}
                className="bg-brand-bg rounded-xl border border-brand-border p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-amber/10 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-brand-amber" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-brand-navy text-sm mb-1.5">{cred.label}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{cred.detail}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-brand-muted text-sm flex items-center justify-center gap-2">
            <CheckCircle size={14} className="text-green-600" aria-hidden="true" />
            All credentials verifiable on request — before any work begins.
          </p>
        </div>
      </div>
    </section>
  )
}
