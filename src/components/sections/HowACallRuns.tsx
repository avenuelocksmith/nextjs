import { BUSINESS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface HowACallRunsProps {
  className?: string
}

const OPERATIONAL_FACTS = [
  {
    label: 'Dispatch',
    body: 'Our Brooklyn team handles every local call directly. No call-center middleman, no subcontractor bidding.',
  },
  {
    label: 'Entry method',
    body: 'Picks first, bump keys second, drill last — in that order. Most residential cylinders open in under five minutes without damage.',
  },
  {
    label: 'ID policy',
    body: 'The tech matches your job ticket against the callback number before any lock opens. Lease, utility bill, or driver\'s license confirms the rest.',
  },
  {
    label: 'Receipts',
    body: 'Written invoice plus warranty card handed over before payment. Every job carries a minimum 90-day hardware warranty in writing.',
  },
] as const

export function HowACallRuns({ className }: HowACallRunsProps) {
  return (
    <section className={cn('py-14 md:py-20 bg-white', className)}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Left editorial column — 3/5 on desktop */}
          <div className="md:col-span-3">
            <p className="text-brand-amber text-xs font-bold uppercase tracking-wider mb-3">
              What actually happens when you call
            </p>
            <h2 className="text-fluid-h2 font-bold text-brand-charcoal mb-5">
              One phone call, one licensed team, one tech on the way
            </h2>
            <div className="space-y-4 text-brand-text text-base md:text-lg leading-relaxed">
              <p>
                Most NYC locksmith phone numbers route to a national dispatch
                center that pockets a cut and forwards the job to whoever bids
                lowest that afternoon. That&apos;s why the price you&apos;re quoted on the
                phone rarely matches the price at the door.
              </p>
              <p>
                Avenue Locksmith works the opposite way. When you call, a
                licensed {BUSINESS.credentials[0]} answers directly — someone who
                knows what&apos;s on the truck and which tech
                is closest to your block. You get a flat quote on that call and
                the same flat quote at the door.
              </p>
              <p>
                {BUSINESS.name} has been operating in Brooklyn since {BUSINESS.founded}.
                We&apos;re {BUSINESS.credentials[1]}. The{' '}
                {BUSINESS.rating}-star average across {BUSINESS.reviewCount}+
                Google reviews is the live ledger — not a sticker we bought.
              </p>
            </div>
          </div>

          {/* Right operational aside — 2/5 on desktop */}
          <aside className="md:col-span-2 bg-brand-bg rounded-2xl border border-brand-border p-6 md:p-7">
            <p className="text-xs font-bold text-brand-amber uppercase tracking-wider mb-4">
              Operational standards
            </p>
            <dl className="space-y-4">
              {OPERATIONAL_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="pb-4 border-b border-brand-border last:border-0 last:pb-0"
                >
                  <dt className="text-sm font-bold text-brand-charcoal mb-1">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-brand-muted leading-relaxed">
                    {fact.body}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 pt-4 border-t border-brand-border text-xs text-brand-muted">
              Questions before you call? Phone{' '}
              <a
                href={BUSINESS.phoneHref}
                className="text-brand-amber font-bold hover:underline"
              >
                {BUSINESS.phone}
              </a>
              {' '}— the operator will answer them.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
