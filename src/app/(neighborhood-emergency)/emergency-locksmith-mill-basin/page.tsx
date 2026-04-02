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
  title: 'Emergency Locksmith Mill Basin — 15–25 Min Response | Avenue Locksmith',
  description: 'Emergency locksmith in Mill Basin, Brooklyn. Home lockouts, 24/7 response. Licensed & insured. 15–25 minute arrival. Call (347) 386-7164 now.',
  path: '/emergency-locksmith-mill-basin/',
})

const FAQS = [
  { question: 'Do you serve Mill Basin for emergency lockouts?', answer: 'Yes — we serve Mill Basin and surrounding South Brooklyn neighborhoods including Bergen Beach, Marine Park, and Canarsie. We arrive within 15–25 minutes for emergency lockouts.' },
  { question: 'Mill Basin has many single-family homes. Do you work with residential home locks?', answer: 'Yes — single-family home lockouts including front door deadbolts, knob locks, and garage entry doors are among our most common residential calls. We carry tools for all residential lock configurations.' },
  { question: 'Is there a surcharge for emergency service in Mill Basin given the location?', answer: 'No — there are no distance or location surcharges. Same flat rate anywhere in Brooklyn: $75–$125 for home lockouts, quoted before we start.' },
  { question: 'Can you also handle car lockouts in Mill Basin?', answer: 'Yes — vehicle lockouts are handled with the same 15–25 minute response. If you are locked out of your car near Mill Basin Road or anywhere in the neighborhood, call us directly.' },
]

export default function EmergencyLocksmithMillBasinPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Emergency Locksmith — Mill Basin', description: 'Emergency locksmith in Mill Basin, Brooklyn. 15–25 minute response for home and apartment lockouts.', url: '/emergency-locksmith-mill-basin/', serviceType: 'Emergency Lockout Service' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Emergency Locksmith Mill Basin', url: '/emergency-locksmith-mill-basin/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Emergency Locksmith Mill Basin' }]} />
      <HeroSection h1="Emergency Locksmith in Mill Basin — 15–25 minute response" subheadline="Locked out of your Mill Basin home? We arrive within 15–25 minutes for emergency lockouts throughout South Brooklyn. 24/7, no surcharges, licensed & insured." variant="emergency" showTrustBar ctaLabel="Call Now — Fast Response" />
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">Mill Basin is primarily a single-family and two-family home neighborhood in South Brooklyn — which means home lockout calls here typically involve residential front door deadbolts and knob locks rather than the apartment configurations more common in North Brooklyn. Our technicians are fully equipped for residential home entry and carry replacement hardware for on-site lock changes if needed.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Single-family home lockouts', 'Two-family & residential entry', 'Deadbolt & knob lock opening', 'Non-destructive entry always first', '24/7 — no distance surcharge', 'Licensed & insured locksmith'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2"><AlertTriangle size={17} className="text-amber-600 mt-0.5 shrink-0" /><p className="text-amber-800 text-sm leading-relaxed"><strong>Protect Yourself from Scams:</strong> Get a full price quote before any locksmith begins work. Do not pay if the price changes after arrival. Avenue Locksmith quotes completely upfront — no surprises.</p></div>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Mill Basin Lockout FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Locked Out in Mill Basin? Call Now.</h2>
          <p className="text-white/80 mb-8">15–25 minute arrival. No hidden fees. Licensed & insured.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-12 py-6 rounded-xl text-2xl transition-colors shadow-2xl"><Phone size={30} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
