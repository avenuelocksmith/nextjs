import { Phone, Wrench, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const STEPS = [
  {
    step: '01',
    icon: Phone,
    title: 'Call or Request a Quote',
    description:
      'Call us at any hour — a real Avenue Locksmith technician answers every call. No automated menus, no national call center. Tell us what you need and we\'ll give you an upfront price on the spot.',
    detail: 'Pricing quoted before any work begins',
  },
  {
    step: '02',
    icon: Wrench,
    title: 'We Arrive Fast',
    description:
      'Our locksmiths are stationed throughout Brooklyn, not waiting in a depot across town. For emergency calls we aim to arrive within 15–25 minutes. You\'ll get a real ETA when you call — not a vague "soon."',
    detail: '15–25 minute emergency response',
  },
  {
    step: '03',
    icon: CheckCircle,
    title: 'Job Done Right, Guaranteed',
    description:
      'Every job is completed by a vetted, licensed Avenue Locksmith technician. We clean up after ourselves, walk you through what we did, and stand behind our work with a satisfaction guarantee.',
    detail: '100% satisfaction guarantee',
  },
]

interface HowItWorksSectionProps {
  className?: string
}

export function HowItWorksSection({ className }: HowItWorksSectionProps) {
  return (
    <section className={cn('py-14 md:py-20 bg-white', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-amber font-semibold text-sm uppercase tracking-wider mb-2">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">
            Getting Help Is Straightforward
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-base md:text-lg">
            From your first call to a finished job — here&apos;s exactly what working with Avenue Locksmith looks like.
          </p>
        </div>

        <div className="relative">
          {/* Connector line for desktop */}
          <div
            className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-brand-amber/30 to-transparent"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="flex flex-col items-center text-center">
                  {/* Step number bubble */}
                  <div className="relative mb-5">
                    <div className="w-20 h-20 rounded-full bg-brand-navy flex items-center justify-center shadow-lg">
                      <Icon size={28} className="text-brand-amber" aria-hidden="true" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-brand-amber text-brand-navy text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-3 max-w-sm mx-auto">
                    {step.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-amber bg-brand-amber/10 px-3 py-1.5 rounded-full">
                    <CheckCircle size={12} aria-hidden="true" />
                    {step.detail}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 bg-brand-navy text-white font-bold px-8 py-4 rounded-xl text-base hover:bg-brand-navy/90 transition-colors shadow-md mr-3"
          >
            <Phone size={18} aria-hidden="true" />
            Call {BUSINESS.phone}
          </a>
          <Link
            href="/free-quote/"
            className="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy font-bold px-8 py-4 rounded-xl text-base hover:bg-brand-navy hover:text-white transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
