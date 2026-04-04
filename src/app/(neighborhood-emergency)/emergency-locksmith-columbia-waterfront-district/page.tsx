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
  title: 'Emergency Locksmith Columbia Waterfront District — 30-Min | Avenue Locksmith',
  description: 'Emergency locksmith in Columbia Waterfront District, Brooklyn. Apartment & home lockouts, 24/7. 15–25 minute arrival. Call (347) 386-7164 now.',
  path: '/emergency-locksmith-columbia-waterfront-district/',
})

const FAQS = [
  { question: 'Do you serve the Columbia Waterfront District for emergency lockouts?', answer: 'Yes — we serve the Columbia Waterfront District including Columbia Street, Coffey Street, and the surrounding waterfront blocks. We arrive within 15–25 minutes for emergency lockouts.' },
  { question: 'What types of door locks are common in Columbia Waterfront District buildings?', answer: 'The neighborhood has a mix of older residential row houses and converted industrial buildings, similar to Red Hook. We see antique mortise locks in the older residential stock alongside modern deadbolts in newer renovations. We carry tools for all of them.' },
  { question: 'Is there any extra charge for emergency locksmith service in this neighborhood?', answer: 'No — same price throughout Brooklyn regardless of neighborhood. Emergency lockout starts at $75–$125, fully quoted before work begins. No hidden fees.' },
  { question: 'Can you also rekey my apartment after the lockout?', answer: 'Yes — if you need to rekey (especially if keys are lost or you suspect others have copies), we carry rekeying equipment on every service van and can rekey immediately after opening your door.' },
]

export default function EmergencyLocksmithColumbiaWaterfrontPage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({ title: 'Emergency Locksmith Columbia Waterfront District — 30-Min | Avenue Locksmith', description: 'Emergency locksmith in Columbia Waterfront District, Brooklyn. Apartment & home lockouts, 24/7. 15–25 minute arrival. Call (347) 386-7164 now.', url: '/emergency-locksmith-columbia-waterfront-district/' })} />
      <JsonLd data={getServiceSchema({ name: 'Emergency Locksmith — Columbia Waterfront District', description: 'Emergency locksmith in Columbia Waterfront District, Brooklyn. 15–25 minute response for home and apartment lockouts.', url: '/emergency-locksmith-columbia-waterfront-district/', serviceType: 'Emergency Lockout Service', brands: LOCK_BRANDS })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Emergency Locksmith Columbia Waterfront District', url: '/emergency-locksmith-columbia-waterfront-district/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Emergency Locksmith Columbia Waterfront' }]} />
      <HeroSection h1="Emergency Locksmith in Columbia Waterfront District — 15–25 Min Response" subheadline="Locked out of your Columbia Waterfront District apartment or home? We arrive within 15–25 minutes, 24/7. Non-destructive entry, no after-hours surcharge." variant="emergency" showTrustBar ctaLabel="Call Now — Fast Response" />
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">The Columbia Waterfront District sits along the western edge of Brooklyn between Red Hook and Carroll Gardens — a quiet residential enclave with a mix of converted industrial buildings and traditional Brooklyn row houses. We serve this neighborhood as part of our South Brooklyn waterfront coverage and maintain the same 15–25 minute response guarantee that applies throughout the borough.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Apartment & home lockouts', 'Converted industrial building entry', 'Row house & brownstone locks', 'Non-destructive entry always first', '24/7 — same price always', 'Licensed & insured locksmith'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2"><AlertTriangle size={17} className="text-amber-600 mt-0.5 shrink-0" /><p className="text-amber-800 text-sm leading-relaxed"><strong>Scam Warning:</strong> Get a full price quote before any work begins. If the locksmith changes the price after arrival, do not pay. Avenue Locksmith gives you the full price before any tools come out.</p></div>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Columbia Waterfront District Lockout FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Locked Out in Columbia Waterfront? Call Now.</h2>
          <p className="text-white/80 mb-8">15–25 minute response. Licensed & insured. No hidden fees.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-12 py-6 rounded-xl text-2xl transition-colors shadow-2xl"><Phone size={30} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
