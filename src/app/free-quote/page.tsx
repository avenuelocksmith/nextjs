import type { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'
import { QuoteForm } from '@/components/sections/QuoteForm'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Get a Free Locksmith Quote — Brooklyn, NY | Avenue Locksmith',
  description: 'Get a free, no-obligation locksmith quote in Brooklyn. Upfront pricing, no hidden fees. Call (347) 386-7164 or submit the form — we respond within the hour.',
  path: '/free-quote/',
})

const PROMISES = [
  'Upfront pricing — full quote before work begins',
  'No hidden fees, no bait-and-switch pricing',
  'Response within 1 hour for quote requests',
  'Same price 24/7 — no after-hours surcharge',
  'Licensed & insured — NYC DCWP licensed',
  'No obligation to proceed after receiving a quote',
]

export default function FreeQuotePage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({ title: 'Get a Free Locksmith Quote', description: 'Get a free locksmith quote in Brooklyn, NY from Avenue Locksmith.', url: '/free-quote/' })} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Free Quote', url: '/free-quote/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Free Quote' }]} />

      <section className="py-12 bg-brand-navy text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-4">Get a Free Locksmith Quote</h1>
          <p className="text-white/80 text-lg mb-8">
            No obligation. We&apos;ll respond within the hour with a complete upfront price — no surprises when we arrive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-8 py-4 rounded-xl text-xl transition-colors shadow-xl"
            >
              <Phone size={24} aria-hidden="true" />
              {BUSINESS.phone}
            </a>
            <span className="text-white/50 text-sm">or fill out the form below</span>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-brand-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PROMISES.map((promise) => (
              <div key={promise} className="flex items-center gap-2.5">
                <CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" />
                <span className="text-brand-text text-sm">{promise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm />
    </>
  )
}
