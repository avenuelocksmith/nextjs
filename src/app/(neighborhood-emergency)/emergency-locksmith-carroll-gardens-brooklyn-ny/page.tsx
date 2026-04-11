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
  title: 'Emergency Locksmith Carroll Gardens — 15–25 Min Response | Avenue Locksmith',
  description: 'Emergency locksmith in Carroll Gardens, Brooklyn. Brownstone & apartment lockouts, 24/7. 15–25 minute arrival. Licensed & insured. Call (347) 386-7164.',
  path: '/emergency-locksmith-carroll-gardens-brooklyn-ny/',
})

const FAQS = [
  { question: 'How fast can you reach Carroll Gardens for a lockout?', answer: 'We arrive within 15–25 minutes for emergency lockouts throughout Carroll Gardens — Smith Street, Court Street, and all the side streets. We dispatch from within Brooklyn for fast response.' },
  { question: 'My Carroll Gardens row house has both a deadbolt and an old knob lock. Can you open both?', answer: 'Yes — we open each lock independently. If the deadbolt is the only one engaged, we pick only the deadbolt. If both locks are engaged, we open both. We quote both upfront before starting.' },
  { question: 'Is the price the same for a lockout at 2am in Carroll Gardens?', answer: 'Yes — no after-hours surcharge ever. Emergency lockout starts at $75–$125, fully quoted before we begin. Same price at any hour, any day of the week.' },
  { question: 'Can you help me if my garage door entry into my home is locked as well?', answer: 'For interior garage-to-home doors (deadbolts or knob locks), yes — we can open these just like any other residential lock. For garage door mechanisms themselves, we handle manual deadbolt-style locks on side access doors.' },
]

export default function EmergencyLocksmithCarrollGardensPage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({ title: 'Emergency Locksmith Carroll Gardens — 15–25 Min Response | Avenue Locksmith', description: 'Emergency locksmith in Carroll Gardens, Brooklyn. Brownstone & apartment lockouts, 24/7. 15–25 minute arrival. Licensed & insured. Call (347) 386-7164.', url: '/emergency-locksmith-carroll-gardens-brooklyn-ny/' })} />
      <JsonLd data={getServiceSchema({ name: 'Emergency Locksmith — Carroll Gardens', description: 'Emergency locksmith in Carroll Gardens, Brooklyn. 15–25 minute response for brownstone and apartment lockouts.', url: '/emergency-locksmith-carroll-gardens-brooklyn-ny/', serviceType: 'Emergency Lockout Service', brands: LOCK_BRANDS })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Emergency Locksmith Carroll Gardens', url: '/emergency-locksmith-carroll-gardens-brooklyn-ny/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Emergency Locksmith Carroll Gardens' }]} />
      <HeroSection h1="Emergency Locksmith in Carroll Gardens — 15–25 minute response" subheadline="Locked out of your Carroll Gardens brownstone or apartment? We arrive in 15–25 minutes, open your door without damage, and charge the same rate at any hour." variant="emergency" showTrustBar ctaLabel="Call Now — We Answer 24/7" />
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">Carroll Gardens is known for its deep front gardens, landmark brownstones, and a strong neighborhood identity. It is also home to some of Brooklyn's most varied door hardware — from antique mortise locks in the block's oldest row houses to modern Medeco high-security deadbolts in renovated units. We work throughout this neighborhood regularly and know what to expect on every block.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Brownstone & row house lockouts', 'Mortise & modern deadbolt entry', 'Apartment & condo lockouts', 'Non-destructive entry always first', '24/7 — same price at any hour', 'Licensed & insured locksmith'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2"><AlertTriangle size={17} className="text-amber-600 mt-0.5 shrink-0" /><p className="text-amber-800 text-sm leading-relaxed"><strong>Protect Yourself:</strong> A legitimate locksmith gives you the full price before any work begins. If the price increases after arrival, do not allow work to continue. Avenue Locksmith always quotes completely upfront.</p></div>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Carroll Gardens Lockout FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Carroll Gardens lockout dispatch — one call, on the way</h2>
          <p className="text-white/80 mb-8">15–25 minute arrival. Non-destructive. No hidden fees.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-12 py-6 rounded-xl text-2xl transition-colors shadow-2xl"><Phone size={30} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
