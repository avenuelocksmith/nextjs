import { Shield, Clock, DollarSign, Star, Award, ThumbsUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const reasons = [
  {
    icon: Clock,
    title: '15–25 minute response',
    description: 'We guarantee arrival within 15–25 minutes for emergency lockout calls in Brooklyn. Most jobs we arrive even faster.',
  },
  {
    icon: Shield,
    title: 'Licensed, Bonded & Insured',
    description: 'Every technician is fully licensed and insured. Avenue Locksmith holds a NYC DCWP Locksmith License. You get real professionals, not call-center dispatches.',
  },
  {
    icon: DollarSign,
    title: 'Upfront, Honest Pricing',
    description: 'We quote the price before we start the job. No hidden fees, no surprise charges. What we say is what you pay.',
  },
  {
    icon: Star,
    title: '4.9/5 Stars — 150+ Reviews',
    description: 'Our rating speaks for itself. Brooklyn residents have trusted us with their homes, cars, and businesses for over a decade.',
  },
  {
    icon: Award,
    title: 'No Locksmith Scams',
    description: 'NYC has a documented locksmith scam problem. We\'re a real local business with a real address — not a bait-and-switch operation.',
  },
  {
    icon: ThumbsUp,
    title: '100% Satisfaction Guarantee',
    description: 'If you\'re not satisfied with our work, we\'ll make it right. No questions asked. That\'s our promise to every customer.',
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
    <section
      className={cn('py-14 md:py-20 text-white', className)}
      style={{ background: 'linear-gradient(135deg, #111827 0%, #1a2535 100%)' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Not all locksmiths are the same. Here&apos;s why thousands of Brooklyn residents call Avenue Locksmith first.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="group flex gap-4 p-6 rounded-xl bg-brand-slate border border-white/10 hover:border-brand-amber/40 hover:bg-[#263347] transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-amber/15 group-hover:bg-brand-amber/25 transition-colors flex items-center justify-center">
                  <Icon size={20} className="text-brand-amber" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{reason.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
