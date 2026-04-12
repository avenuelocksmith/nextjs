import type { Metadata } from 'next'
import { Phone, CheckCircle, AlertTriangle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Emergency Locksmith in Brooklyn, NY — 24/7 | Avenue Locksmith',
  description: 'Emergency locksmith in Brooklyn, NY. Available 24/7 with 15–25 minute arrival. Licensed & insured. No hidden fees. Call (347) 386-7164 right now.',
  path: '/emergency-locksmith-in-brooklyn-ny/',
})

const FAQS = [
  { question: 'How fast is your emergency response in Brooklyn?', answer: 'We arrive within 15–25 minutes for all emergency calls anywhere in Brooklyn — homes, cars, and businesses. In many neighborhoods we arrive in 15–20 minutes.' },
  { question: 'Is there an extra charge for emergency or after-hours calls?', answer: 'No. Emergency lockout service is the same price at 3am as at 3pm. We never charge after-hours surcharges. Emergency lockout starts at $75–$125 — quoted before we start.' },
  { question: 'How do I know you are a legitimate locksmith and not a scam?', answer: 'Ask for our DCWP license number before work begins, ask for a written price quote before any tools come out, and verify our Google reviews. Avenue Locksmith holds a NYC DCWP Locksmith License and is fully bonded and insured.' },
  { question: 'What emergency services do you handle?', answer: 'Home lockout, car lockout, business lockout, broken key extraction, emergency lock change after break-in, and burglary door repair. All 24/7.' },
]

export default function EmergencyLocksmithInBrooklynPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Emergency Locksmith', description: '24/7 emergency locksmith in Brooklyn, NY. Home, car, and business lockouts with 15–25 minute response.', url: '/emergency-locksmith-in-brooklyn-ny/', serviceType: 'Emergency Lockout Service' })} />
      <JsonLd data={getWebPageSchema({ title: 'Emergency Locksmith in Brooklyn, NY — 24/7 | Avenue Locksmith', description: 'Emergency locksmith in Brooklyn, NY. Available 24/7 with 15–25 minute arrival. Licensed & insured. No hidden fees. Call (347) 386-7164 right now.', url: '/emergency-locksmith-in-brooklyn-ny/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Emergency Locksmith Brooklyn', url: '/emergency-locksmith-in-brooklyn-ny/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Emergency Locksmith Brooklyn' }]} />
      <HeroSection h1="Emergency Locksmith in Brooklyn, NY — 24/7 Rapid Response" subheadline="Locked out? We answer every call 24 hours a day and arrive within 15–25 minutes. No after-hours surcharge. Licensed & insured." variant="emergency" showTrustBar ctaLabel="Call Now — We Answer 24/7" />
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">Apartment at 2am, car on Atlantic Avenue at 6am, storefront before opening — Avenue Locksmith handles all three from the same Brooklyn team. The typical 15–25 minute arrival window holds on weekends, holidays, and overnight, and the invoice at 3am matches the invoice at 3pm: no after-hours multiplier, no trip surcharge, no &ldquo;high-security&rdquo; upcharge invented on your front step.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Home & apartment lockout', 'Car lockout — all makes', 'Business & office lockout', 'Broken key extraction', 'Emergency lock change', 'Burglary door repair', 'Typical 15–25 min arrival', 'No after-hours surcharge'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2"><AlertTriangle size={17} className="text-amber-600 mt-0.5 shrink-0" /><p className="text-amber-800 text-sm leading-relaxed"><strong>NYC Locksmith Scam Warning:</strong> Demand an upfront price before work begins. A legitimate locksmith quotes you completely before starting. If the price jumps after arrival, send them away.</p></div>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Emergency Locksmith FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Emergency Locksmith in Brooklyn — Call Now</h2>
          <p className="text-white/80 mb-8">15–25 minute response. Licensed & insured. No hidden fees.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-12 py-6 rounded-xl text-2xl transition-colors shadow-2xl"><Phone size={30} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
