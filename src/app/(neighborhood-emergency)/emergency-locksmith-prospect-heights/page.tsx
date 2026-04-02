import type { Metadata } from 'next'
import { Phone, CheckCircle, AlertTriangle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Emergency Locksmith Prospect Heights — 15–25 Min Response | Avenue Locksmith',
  description: 'Emergency locksmith in Prospect Heights, Brooklyn. Apartment & home lockouts. 15–25 minute arrival, 24/7. Licensed & insured. Call (347) 386-7164 now.',
  path: '/emergency-locksmith-prospect-heights/',
})

const FAQS = [
  { question: 'How fast can you reach Prospect Heights for an emergency lockout?', answer: 'We arrive within 15–25 minutes throughout Prospect Heights — Washington Avenue, Vanderbilt Avenue, and adjacent blocks. In many cases we arrive in 15–20 minutes.' },
  { question: 'My Prospect Heights building has multiple locks on one door. Can you open all of them?', answer: 'Yes — we can open multiple lock configurations including deadbolt-plus-knob setups and double-deadbolt doors. We assess each lock individually and use the least invasive method for each.' },
  { question: 'Do you charge extra for emergency calls in Prospect Heights?', answer: 'No — same price 24 hours a day, 7 days a week. Emergency lockout starts at $75–$125, fully quoted before work begins.' },
  { question: 'Can you help me get back into my car in Prospect Heights as well?', answer: 'Yes — we handle car lockouts as well as home and apartment lockouts. If you are locked out near Prospect Park or on any Prospect Heights street, we respond to vehicle lockouts with the same 15–25 minute priority.' },
]

export default function EmergencyLocksmithProspectHeightsPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Emergency Locksmith — Prospect Heights', description: 'Emergency locksmith in Prospect Heights, Brooklyn. 15–25 minute response for apartment and home lockouts.', url: '/emergency-locksmith-prospect-heights/', serviceType: 'Emergency Lockout Service' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Emergency Locksmith Prospect Heights', url: '/emergency-locksmith-prospect-heights/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Emergency Locksmith Prospect Heights' }]} />
      <HeroSection h1="Emergency Locksmith in Prospect Heights — 15–25 minute response" subheadline="Locked out of your Prospect Heights apartment? Fast non-destructive entry, 24 hours a day. No after-hours surcharge. Licensed & insured." variant="emergency" showTrustBar ctaLabel="Call Now — 30-Min Arrival" />
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">Prospect Heights sits at the intersection of Brooklyn's old and new housing stock — converted brownstones and limestone buildings on the southern blocks give way to newer rentals toward the Grand Army Plaza and Barclays Center corridor. We work with both: antique mortise locks and modern multi-point systems. One call gets you in no matter what's on your door.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Apartment lockouts — all lock types', 'Car lockouts — same response time', 'Non-destructive entry always first', '24/7 — same price at any hour', 'On-site rekeying if keys are lost', 'Licensed & insured locksmith'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2"><AlertTriangle size={17} className="text-amber-600 mt-0.5 shrink-0" /><p className="text-amber-800 text-sm leading-relaxed"><strong>Protect Yourself:</strong> Ask for a written price quote before any locksmith begins work. A legitimate locksmith quotes upfront — if the price changes after they arrive, do not proceed.</p></div>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Prospect Heights Lockout FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Locked Out in Prospect Heights?</h2>
          <p className="text-white/80 mb-8">Call now — 15–25 minute arrival, 24/7, no hidden fees.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-12 py-6 rounded-xl text-2xl transition-colors shadow-2xl"><Phone size={30} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
