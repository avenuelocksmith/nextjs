import type { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Lockout Service in Brooklyn, NY — Home, Car & Business | Avenue Locksmith',
  description: 'Lockout service in Brooklyn, NY. Home lockouts, car lockouts, and business lockouts. 15–25 minute response, 24/7. Licensed & insured. Call (347) 386-7164.',
  path: '/lockout-service-in-brooklyn-ny/',
})

const FAQS = [
  { question: 'How quickly can you reach me for a lockout in Brooklyn?', answer: 'We arrive within 15–25 minutes for all lockout calls throughout Brooklyn — home, car, or business — 24 hours a day, 7 days a week.' },
  { question: 'Do you handle car lockouts as well as home and business lockouts?', answer: 'Yes — we handle all three. Home and apartment lockouts, car lockouts for all makes and models, and commercial/office lockouts. One call covers whatever type of lockout you are dealing with.' },
  { question: 'Will you damage my lock or door to get me in?', answer: 'No. Non-destructive entry is always our first approach. We use professional lock picking and bypass techniques. Destructive entry (drilling) is only used when a lock is jammed or severely damaged and no other option exists — we always tell you before doing so.' },
  { question: 'How much does lockout service cost in Brooklyn?', answer: 'Home and business lockouts start at $75–$125. Car lockouts start at $65–$100. We always provide a full price quote before starting any work — no surprise charges.' },
]

export default function LockoutServiceBkPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Lockout Service', description: 'Home, car, and business lockout service in Brooklyn, NY. 15–25 minute response, 24/7.', url: '/lockout-service-in-brooklyn-ny/', serviceType: 'Lockout Service' })} />
      <JsonLd data={getWebPageSchema({ title: 'Lockout Service in Brooklyn, NY — Home, Car & Business | Avenue Locksmith', description: 'Lockout service in Brooklyn, NY. Home lockouts, car lockouts, and business lockouts. 15–25 minute response, 24/7. Licensed & insured. Call (347) 386-7164.', url: '/lockout-service-in-brooklyn-ny/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Lockout Service Brooklyn', url: '/lockout-service-in-brooklyn-ny/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Lockout Service Brooklyn' }]} />
      <HeroSection h1="Lockout Service in Brooklyn, NY — Home, Car & Business" subheadline="Locked out? We handle home, apartment, car, and business lockouts throughout Brooklyn. 15–25 minute arrival, 24/7 — same price at 3am as 3pm." variant="emergency" showTrustBar ctaLabel="Call Now — 15–25 Min Response" />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-brand-text text-lg leading-relaxed mb-8">Apartment door at midnight, car on Atlantic Avenue at 6am, or a retail shutter jammed fifteen minutes before opening — every type of Brooklyn lockout dispatches from the same team, and the same phone number reaches a real person on every call. Typical arrival is 15–25 minutes borough-wide, price quoted before the tech heads out.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'Home & Apartment Lockout', items: ['Apartment lockouts', 'House lockouts', 'Condo & co-op lockouts', 'Deadbolt & knob lock entry', 'Mortise lock entry', 'Non-destructive in all cases'] },
              { title: 'Car Lockout', items: ['All makes & models', 'Keys locked inside', 'Keys lost or broken', 'Trunk lockouts', 'Transponder key replacement', 'Slim jim & air wedge tools'] },
              { title: 'Business Lockout', items: ['Office & retail lockouts', 'Commercial door entry', 'Storage unit access', 'After-hours business lockout', 'Lock replacement on-site', 'Emergency lockout documentation'] },
            ].map((col) => (
              <div key={col.title} className="bg-brand-bg rounded-xl p-5 border border-brand-border">
                <h3 className="font-bold text-brand-navy mb-3 text-base">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Lockout Service FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Brooklyn lockout dispatch — home, car, or business</h2>
          <p className="text-white/80 mb-8">Home, car, or business — we arrive in 15–25 minutes, 24/7.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-12 py-6 rounded-xl text-2xl transition-colors shadow-2xl"><Phone size={30} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
