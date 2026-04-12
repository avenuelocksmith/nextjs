import { Phone, Truck, CheckCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Step {
  num: string
  title: string
  body: string
  icon: LucideIcon
}

interface HowItWorksProps {
  className?: string
  title?: string
  subtitle?: string
  steps?: Step[]
}

const DEFAULT_STEPS: Step[] = [
  {
    num: '01',
    title: 'Call or text us',
    body: 'One licensed Brooklyn locksmith answers — not a call center. You get a flat quote and an ETA before the tech heads out.',
    icon: Phone,
  },
  {
    num: '02',
    title: 'Tech arrives in 15–25 min',
    body: 'The nearest Brooklyn tech rolls out with the right tools for your lock already on the truck. No callbacks for parts.',
    icon: Truck,
  },
  {
    num: '03',
    title: 'Job done, you pay after',
    body: 'Non-destructive entry first. Drilling is the last resort. Written invoice and warranty card in hand before any money changes hands.',
    icon: CheckCircle2,
  },
]

export function HowItWorks({
  className,
  title = 'How a Brooklyn locksmith call actually runs',
  subtitle = 'Three steps, one number, one team. No referral hops, no surprise fees.',
  steps = DEFAULT_STEPS,
}: HowItWorksProps) {
  return (
    <section className={cn('py-14 md:py-20 bg-brand-bg', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-fluid-h2 font-bold text-brand-charcoal mb-3">
            {title}
          </h2>
          <p className="text-brand-muted text-base md:text-lg">{subtitle}</p>
        </div>

        <ol
          role="list"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto"
        >
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <li
                key={step.num}
                className="relative overflow-hidden bg-white rounded-xl border border-brand-border shadow-sm p-6 flex flex-col"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-4 font-heading font-extrabold text-brand-amber/20 text-6xl leading-none pointer-events-none select-none"
                >
                  {step.num}
                </span>

                <div className="relative rounded-lg bg-gradient-to-br from-amber-400/20 to-amber-600/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon
                    size={22}
                    className="text-brand-amber"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="relative text-lg font-bold text-brand-charcoal mb-2 pr-14">
                  {step.title}
                </h3>
                <p className="relative text-brand-muted text-sm leading-relaxed">
                  {step.body}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
