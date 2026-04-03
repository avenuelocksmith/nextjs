import { Shield, Clock, DollarSign, Star, Award, ThumbsUp, UserCheck, Wrench } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const reasons = [
  {
    icon: Clock,
    title: '15–25 Minute Arrival',
    description:
      'Our technicians are spread across Brooklyn — not sitting at a single depot waiting to be dispatched. For emergency calls, most of our arrivals beat the 25-minute mark. You get a real ETA when you call, not "sometime soon."',
  },
  {
    icon: Shield,
    title: 'NYC DCWP Licensed, ALOA Member',
    description:
      'We hold an active New York City DCWP (Department of Consumer & Worker Protection) Locksmith License — the city-issued credential required to operate legally in the five boroughs. We\'re also a member of ALOA (Associated Locksmiths of America) and BBB accredited. Ask to verify any of these on the spot.',
  },
  {
    icon: UserCheck,
    title: 'Background-Checked Technicians',
    description:
      'Every Avenue Locksmith technician has passed a background check and carries their credentials on every job. We never dispatch unknown contractors from a third-party app. The person who shows up is someone we trained, vetted, and vouch for.',
  },
  {
    icon: DollarSign,
    title: 'Price Locked Before We Start',
    description:
      'We quote the full cost — labor and hardware — before touching your lock. No service call fee surprise at the end, no price that doubles once the job starts. What we say on the phone is what appears on the invoice.',
  },
  {
    icon: Star,
    title: '4.9/5 Stars Across 150+ Reviews',
    description:
      'Our rating reflects real jobs done for real Brooklyn residents and businesses — not a curated sample. Read the reviews: they\'re specific, they name the technician, and they mention the exact service. That\'s what verified looks like.',
  },
  {
    icon: Award,
    title: '90-Day Labor Warranty',
    description:
      'Every job we do is covered by a 90-day labor warranty. If something we installed or repaired develops a problem within 90 days, we come back and fix it. No arguments, no service call charge.',
  },
  {
    icon: Wrench,
    title: 'Non-Destructive First',
    description:
      'Drilling a lock is a last resort — not a first move. We attempt non-destructive entry on every lockout call. Most doors open without damaging the hardware. If drilling is genuinely necessary, we tell you before we do it.',
  },
  {
    icon: ThumbsUp,
    title: 'Real Local Business Since 2010',
    description:
      'We operate from Brooklyn. Our address is public, our license is verifiable, our trucks are marked. We\'re not a call center that forwards your request to whoever\'s available. NYC has a documented problem with locksmith scams — we built this company specifically to be the alternative.',
  },
]

interface WhyChooseUsProps {
  className?: string
  title?: string
}

export function WhyChooseUs({
  className,
  title = 'Why Brooklyn Residents Choose Avenue Locksmith',
}: WhyChooseUsProps) {
  return (
    <section className={cn('py-14 md:py-20 bg-white', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-brand-amber font-semibold text-sm uppercase tracking-wider mb-2">
            Our Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">{title}</h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            There are dozens of locksmiths in Brooklyn. Here&apos;s what separates the ones you can trust from the ones you can&apos;t — and where we stand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="flex flex-col gap-3 p-6 rounded-xl bg-brand-bg border border-brand-border hover:border-brand-amber/50 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-amber/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-brand-amber" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1.5 text-sm">{reason.title}</h3>
                  <p className="text-brand-muted text-xs leading-relaxed">{reason.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Credential badges strip */}
        <div className="mt-10 pt-8 border-t border-brand-border">
          <p className="text-center text-xs text-brand-muted font-semibold uppercase tracking-wider mb-4">
            Verified Credentials
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'NYC DCWP Licensed',
              'ALOA Member',
              'BBB Accredited',
              'Fully Bonded',
              'Fully Insured',
              'Background-Checked Techs',
              '90-Day Labor Warranty',
              'Serving Brooklyn Since 2010',
            ].map((badge) => (
              <span
                key={badge}
                className="text-xs font-semibold text-brand-navy bg-brand-bg border border-brand-border rounded-full px-3 py-1.5"
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="text-center text-xs text-brand-muted mt-4">
            Verify our NYC DCWP license at{' '}
            <span className="font-medium text-brand-navy">nyc.gov/consumers</span> before we start any work.{' '}
            <Link href="/about/" className="text-brand-amber hover:underline font-medium">
              Learn more about us →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
