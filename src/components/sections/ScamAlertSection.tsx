import Link from 'next/link'
import { AlertTriangle, XCircle, CheckCircle, ArrowRight } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const RED_FLAGS = [
  '$15–$35 advertised price — no licensed NYC locksmith covers labor, insurance, and overhead at those rates. It\'s a bait price.',
  'Unmarked van with no visible company name, phone number, or branding on the vehicle.',
  'Technician who won\'t show a license or ID before starting — walk away immediately.',
  'Drilling the lock as the first move without attempting non-destructive entry.',
  'Phone quote of $75 that becomes $400+ once they\'re already at your door.',
  'No physical business address — just a call center number that appears in multiple city listings under different names.',
  'Pressure to decide immediately — "this price is only good right now."',
  'No written or verbal quote before work begins.',
]

const GREEN_FLAGS = [
  'Clearly marked company vehicle — name, phone number, and branding visible.',
  'Technician shows their NYC DCWP license number before touching your lock.',
  'Full price — labor and hardware — quoted before work begins.',
  'Non-destructive entry attempted before any drilling.',
  'Pricing that matches what was quoted on the phone — no additions at the door.',
  'Physical business address that appears in public records and on Google Maps.',
  'ALOA membership or BBB accreditation — verifiable online in seconds.',
  'No pressure — you can say no after seeing the quote with no fee charged.',
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
            Consumer Warning — NYC Locksmith Fraud
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">
            How to Avoid Getting Ripped Off by a Locksmith in NYC
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            The NYC Department of Consumer &amp; Worker Protection and the Better Business Bureau have both published formal warnings about fraudulent locksmith operators in New York City. The pattern is consistent: advertise an impossibly low price, show up in an unmarked van, and dramatically inflate the bill once they&apos;re inside. It works because people in lockout situations are stressed and pressed for time. Knowing the signs takes two minutes and can save you several hundred dollars.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Red flags */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <XCircle size={20} className="text-red-600 flex-shrink-0" aria-hidden="true" />
              <h3 className="font-bold text-red-800">Signs You Should Hang Up or Walk Away</h3>
            </div>
            <ul className="space-y-3">
              {RED_FLAGS.map((flag) => (
                <li key={flag} className="flex items-start gap-2.5 text-sm text-red-700">
                  <XCircle size={13} className="flex-shrink-0 mt-0.5 text-red-500" aria-hidden="true" />
                  {flag}
                </li>
              ))}
            </ul>
          </div>

          {/* Green flags */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle size={20} className="text-green-700 flex-shrink-0" aria-hidden="true" />
              <h3 className="font-bold text-green-800">Signs of a Legitimate, Licensed Locksmith</h3>
            </div>
            <ul className="space-y-3">
              {GREEN_FLAGS.map((flag) => (
                <li key={flag} className="flex items-start gap-2.5 text-sm text-green-700">
                  <CheckCircle size={13} className="flex-shrink-0 mt-0.5 text-green-600" aria-hidden="true" />
                  {flag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How to verify a locksmith in NYC */}
        <div className="bg-brand-bg border border-brand-border rounded-xl p-6 mb-6">
          <h3 className="font-bold text-brand-navy mb-3">How to Verify Any NYC Locksmith in 30 Seconds</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-amber text-brand-navy text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <p className="text-brand-muted text-sm">
                Go to <span className="font-semibold text-brand-navy">nyc.gov/consumers</span> and search the business name or license number under "Locksmith."
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-amber text-brand-navy text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <p className="text-brand-muted text-sm">
                Look up the company on Google Maps — verify a physical address with real reviews, not just a phone number.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-amber text-brand-navy text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <p className="text-brand-muted text-sm">
                Ask the technician to show their DCWP license card before any work starts. A legitimate locksmith carries it and won&apos;t hesitate.
              </p>
            </div>
          </div>
        </div>

        {/* Avenue Locksmith callout */}
        <div className="bg-brand-navy text-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-2">Avenue Locksmith — Everything Verifiable</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-2">
              Our Brooklyn address: <span className="font-semibold text-white">{BUSINESS.address.full}</span>. Our NYC DCWP license is active and verifiable. Our trucks are marked. Our technicians carry identification. We&apos;ve operated this way since {BUSINESS.founded} — not because it&apos;s required, but because it should be the standard.
            </p>
            <p className="text-white/70 text-xs">
              ALOA member · BBB Accredited · 90-day labor warranty on all work · {BUSINESS.reviewCount}+ verified reviews
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
              Verify our credentials <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
