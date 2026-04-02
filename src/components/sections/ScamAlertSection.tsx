import Link from 'next/link'
import { AlertTriangle, XCircle, CheckCircle, ArrowRight } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const RED_FLAGS = [
  'Prices advertised as "$15–$35" — no licensed locksmith can operate at those rates in NYC',
  'Unmarked vans with no vehicle branding or company identification',
  'Technician who refuses to show a license or identification before starting work',
  'Insistence on drilling the lock first without attempting to pick it',
  'Verbal quote that doubles or triples once the job is underway',
  'No physical address or local business presence — only a call-center phone number',
]

const GREEN_FLAGS = [
  'Clearly marked company vehicle with business name and phone number',
  'Technician presents their NYC DCWP license before touching your lock',
  'Written or verbal price quote confirmed before any work begins',
  'Attempts non-destructive entry methods before any drilling',
  'Local address you can look up — not just a toll-free number',
  'Consistent pricing that matches what was quoted over the phone',
]

interface ScamAlertSectionProps {
  className?: string
}

export function ScamAlertSection({ className }: ScamAlertSectionProps) {
  return (
    <section className={cn('py-14 md:py-20 bg-white', className)}>
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 font-semibold text-sm px-4 py-2 rounded-full mb-4">
            <AlertTriangle size={15} aria-hidden="true" />
            NYC Locksmith Scam Warning
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">
            Protect Yourself From Locksmith Fraud in NYC
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            New York City has a well-documented problem with fraudulent locksmith operators. The NYC Department of Consumer &amp; Worker Protection and the BBB have both issued formal warnings about this. Knowing the red flags takes less than two minutes and can save you hundreds of dollars.
          </p>
        </div>

        {/* Two columns: red flags vs green flags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Red flags */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <XCircle size={20} className="text-red-600" aria-hidden="true" />
              <h3 className="font-bold text-red-800">Warning Signs to Walk Away From</h3>
            </div>
            <ul className="space-y-3">
              {RED_FLAGS.map((flag) => (
                <li key={flag} className="flex items-start gap-2.5 text-sm text-red-700">
                  <XCircle size={14} className="flex-shrink-0 mt-0.5 text-red-500" aria-hidden="true" />
                  {flag}
                </li>
              ))}
            </ul>
          </div>

          {/* Green flags */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle size={20} className="text-green-700" aria-hidden="true" />
              <h3 className="font-bold text-green-800">Signs of a Legitimate Locksmith</h3>
            </div>
            <ul className="space-y-3">
              {GREEN_FLAGS.map((flag) => (
                <li key={flag} className="flex items-start gap-2.5 text-sm text-green-700">
                  <CheckCircle size={14} className="flex-shrink-0 mt-0.5 text-green-600" aria-hidden="true" />
                  {flag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* About Avenue Locksmith callout */}
        <div className="bg-brand-navy text-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-2">Avenue Locksmith Checks Every Box</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              We operate out of our Brooklyn location at {BUSINESS.address.full}. Our technicians drive clearly marked vehicles, carry their NYC DCWP license, and quote all prices before touching your lock. We&apos;ve been doing this since {BUSINESS.founded}.
            </p>
            <p className="text-white/70 text-xs">
              You can verify any NYC locksmith&apos;s license at nyc.gov/consumers. License verification is free and takes 30 seconds.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-6 py-3.5 rounded-xl transition-colors whitespace-nowrap"
            >
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/about/"
              className="inline-flex items-center justify-center gap-1.5 text-white/80 hover:text-white text-sm font-semibold transition-colors"
            >
              Learn more about us <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
