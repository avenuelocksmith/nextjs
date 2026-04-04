import type { Metadata } from 'next'
import { Phone, CheckCircle, AlertTriangle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS, LOCK_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Emergency Locksmith Williamsburg — 15–25 Min Response | Avenue Locksmith',
  description: 'Emergency locksmith in Williamsburg, Brooklyn. Apartment lockouts, 24/7 response, 15–25 minute arrival. No after-hours fees. Licensed & insured. Call (347) 386-7164.',
  path: '/emergency-locksmith-williamsburg/',
})

const FAQS = [
  { question: 'How quickly can you reach Williamsburg for a lockout?', answer: 'We arrive within 15–25 minutes throughout Williamsburg — North Side, South Side, and East Williamsburg. High call volume from this neighborhood means we often dispatch from very close by.' },
  { question: 'My Williamsburg building has a key fob and a physical key lock. Can you help with both?', answer: 'Yes — we handle both physical key lockouts and access issues. For key fob systems, we can assess whether building management needs to be contacted or whether there is a physical backup lock we can open.' },
  { question: 'Do you charge extra for late-night lockouts in Williamsburg?', answer: 'No — we never charge after-hours surcharges. Whether you are locked out at 2am after a night out or 8am before work, the price is the same: $75–$125, quoted upfront.' },
  { question: 'My landlord is slow to respond. Can I hire you directly for a lockout?', answer: 'Absolutely — you do not need landlord permission to hire a locksmith for a lockout of your own unit. We open your door, you pay us directly, and you can sort out reimbursement with your landlord afterward.' },
]

export default function EmergencyLocksmithWilliamsburgPage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({ title: 'Emergency Locksmith Williamsburg — 15–25 Min Response | Avenue Locksmith', description: 'Emergency locksmith in Williamsburg, Brooklyn. Apartment lockouts, 24/7 response, 15–25 minute arrival. No after-hours fees. Licensed & insured. Call (347) 386-7164.', url: '/emergency-locksmith-williamsburg/' })} />
      <JsonLd data={getServiceSchema({ name: 'Emergency Locksmith — Williamsburg', description: 'Emergency locksmith in Williamsburg, Brooklyn. 15–25 minute response for apartment lockouts, 24/7.', url: '/emergency-locksmith-williamsburg/', serviceType: 'Emergency Lockout Service', brands: LOCK_BRANDS })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Emergency Locksmith Williamsburg', url: '/emergency-locksmith-williamsburg/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Emergency Locksmith Williamsburg' }]} />
      <HeroSection h1="Emergency Locksmith in Williamsburg — 15–25 minute response" subheadline="Locked out of your Williamsburg apartment? We arrive in 15–25 minutes, any time of day or night. No after-hours surcharge. Non-destructive entry. Licensed & insured." variant="emergency" showTrustBar ctaLabel="Call Now — We Answer 24/7" />
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">Williamsburg is one of our highest-volume neighborhoods — high residential density, a young transient renter population, and active nightlife all contribute to frequent lockout calls at all hours. We know the neighborhood: the converted warehouse lofts on Kent Avenue, the crowded apartment buildings on Bedford Avenue, the newer luxury towers near the waterfront. Every door type, every hour.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Apartment lockouts — all building types', 'Loft & converted warehouse entry', 'Non-destructive entry always first', '24/7 — no extra charge ever', 'On-site rekeying if keys are lost', 'Licensed & insured locksmith'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2"><AlertTriangle size={17} className="text-amber-600 mt-0.5 shrink-0" /><p className="text-amber-800 text-sm leading-relaxed"><strong>NYC Locksmith Scam Warning:</strong> Many scam locksmiths advertise low prices and then dramatically raise them on-site. Always get a full written quote before work starts. Avenue Locksmith quotes the full price before any tools come out.</p></div>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Williamsburg Lockout FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Locked Out in Williamsburg? Call Now.</h2>
          <p className="text-white/80 mb-8">15–25 minutes. Non-destructive. Same price 24/7.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-12 py-6 rounded-xl text-2xl transition-colors shadow-2xl"><Phone size={30} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
