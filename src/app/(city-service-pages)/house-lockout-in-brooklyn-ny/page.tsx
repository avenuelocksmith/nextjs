import type { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { Term247 } from '@/components/ui/Term247'

export const metadata: Metadata = buildMetadata({
  title: 'House Lockout in Brooklyn, NY — Fast Non-Destructive Entry | Avenue Locksmith',
  description: 'Locked out of your house or apartment in Brooklyn? Fast non-destructive entry. 15–25 Min Response. Licensed & insured. Available 24/7. Call (347) 386-7164.',
  path: '/house-lockout-in-brooklyn-ny/',
})

const FAQS = [
  { question: 'How fast can you arrive for a home lockout in Brooklyn?', answer: 'We arrive within 15–25 minutes for home lockouts anywhere in Brooklyn, any time of day or night.' },
  { question: 'What type of entry technique do you use?', answer: 'We primarily use lock picking — manipulating the pins to open the lock without a key. For some situations we use bypass or shimming tools. We always start with the least invasive method and proceed from there.' },
  { question: 'My front door has both a deadbolt and a knob lock. Can you open both?', answer: 'Yes — we can open both independently. If only the deadbolt is engaged, we pick only the deadbolt. If both are engaged, we open both.' },
  { question: 'How much does a house lockout cost in Brooklyn?', answer: 'Home lockout service starts at $75–$125. We always quote the full price when you call and confirm before starting.' },
]

export default function HouseLockoutPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'House Lockout Service', description: 'House lockout service in Brooklyn, NY. Non-destructive entry. 15–25 minute response.', url: '/house-lockout-in-brooklyn-ny/', serviceType: 'Residential Lockout Service' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'House Lockout Brooklyn', url: '/house-lockout-in-brooklyn-ny/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'House Lockout Brooklyn' }]} />
      <HeroSection h1="House Lockout Service in Brooklyn, NY — Home Entry Specialists" subheadline="Locked out of your house or apartment in Brooklyn? We arrive in 15–25 minutes and open your door without damage using professional non-destructive techniques." variant="emergency" showTrustBar ctaLabel="Call Now — 15–25 Min Response" />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">Home lockouts are our most common call. From apartments in Williamsburg to brownstones in Park Slope to single-family homes in Bay Ridge — we have opened every type of Brooklyn door, with every type of lock configuration. Our technicians carry tools for standard pin tumbler deadbolts, mortise locks, and electronic keypad locks.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Apartment lockouts', 'Single-family home lockouts', 'Brownstone lockouts', 'Condo & co-op lockouts', 'Deadbolt & knob lock entry', 'Mortise lock entry', 'Non-destructive in almost all cases'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
            <div className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">Available <Term247 /> — no extra night charge</span></div>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="House Lockout FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Locked Out of Your Brooklyn Home?</h2>
          <p className="text-white/80 mb-8">Call now — 15–25 minute response, 24/7.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl"><Phone size={26} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
