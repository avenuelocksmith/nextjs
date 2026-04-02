import Link from 'next/link'
import { Shield, Award, Users, MapPin, ArrowRight, CheckCircle } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const CREDENTIALS = [
  {
    icon: Shield,
    label: 'NYC DCWP Licensed',
    detail: 'Licensed by New York City\'s Department of Consumer & Worker Protection — the city agency that regulates and licenses all locksmith businesses operating in the five boroughs.',
  },
  {
    icon: Award,
    label: 'Fully Bonded & Insured',
    detail: 'Every technician carries liability insurance. If anything goes wrong on your property during a job, you\'re covered. This is non-negotiable for us.',
  },
  {
    icon: Users,
    label: 'In-House Technicians Only',
    detail: 'We never subcontract to unknown third parties. Every person who shows up is a trained, vetted Avenue Locksmith employee — not a random contractor from a dispatch app.',
  },
  {
    icon: MapPin,
    label: 'Brooklyn-Based Since 2010',
    detail: 'We operate out of Brooklyn and always have. Our technicians live in the neighborhoods they serve. That\'s accountability you don\'t get from a national chain.',
  },
]

const STATS = [
  { value: '15+', label: 'Years Serving Brooklyn' },
  { value: '10,000+', label: 'Jobs Completed' },
  { value: '4.9/5', label: 'Average Star Rating' },
  { value: '150+', label: 'Verified Reviews' },
]

interface AboutCredentialsSectionProps {
  className?: string
}

export function AboutCredentialsSection({ className }: AboutCredentialsSectionProps) {
  return (
    <section className={cn('py-14 md:py-20 bg-white', className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
          {/* Left: Story */}
          <div>
            <span className="inline-block text-brand-amber font-semibold text-sm uppercase tracking-wider mb-2">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
              Brooklyn&apos;s Locksmith — Not a Call Center
            </h2>
            <p className="text-brand-muted leading-relaxed mb-4">
              Avenue Locksmith was founded in Brooklyn in {BUSINESS.founded}. Back then, the owner — a licensed locksmith who had spent years working for commercial security companies in Manhattan — was tired of watching NYC residents get taken advantage of by bait-and-switch locksmith operations that advertised low prices and then charged hundreds more at the door.
            </p>
            <p className="text-brand-muted leading-relaxed mb-4">
              The idea behind Avenue Locksmith was straightforward: hire only trained, vetted technicians, quote honestly before every job, and actually show up when you say you will. More than fifteen years later, that&apos;s still how we operate.
            </p>
            <p className="text-brand-muted leading-relaxed mb-6">
              Today we handle residential lockouts in Park Slope, access control systems for Williamsburg businesses, automotive key programming in Bay Ridge, and everything in between — still with the same commitment to honest pricing and real accountability.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about/"
                className="inline-flex items-center gap-1.5 text-brand-navy font-semibold text-sm hover:text-brand-amber transition-colors"
              >
                Read our full story <ArrowRight size={14} />
              </Link>
              <span className="text-brand-border">|</span>
              <Link
                href="/testimonials/"
                className="inline-flex items-center gap-1.5 text-brand-navy font-semibold text-sm hover:text-brand-amber transition-colors"
              >
                See {BUSINESS.reviewCount}+ reviews <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right: Stats + credentials */}
          <div>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
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

            {/* License badge */}
            <div className="bg-brand-navy/5 border border-brand-navy/15 rounded-xl p-4 flex items-start gap-3">
              <Shield size={22} className="text-brand-navy flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-brand-navy text-sm">NYC DCWP Licensed Locksmith</p>
                <p className="text-brand-muted text-xs mt-0.5">
                  Fully licensed by the NYC Department of Consumer &amp; Worker Protection. Ask for our license number when we arrive — we encourage it. It&apos;s how you verify you&apos;re getting a legitimate locksmith.
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

        {/* Verification callout */}
        <div className="mt-8 text-center">
          <p className="text-brand-muted text-sm flex items-center justify-center gap-2">
            <CheckCircle size={14} className="text-green-600" aria-hidden="true" />
            All credentials available on request. We welcome verification before any work begins.
          </p>
        </div>
      </div>
    </section>
  )
}
