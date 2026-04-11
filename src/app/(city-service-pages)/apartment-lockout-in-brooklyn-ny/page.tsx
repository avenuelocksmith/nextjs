import type { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS, LOCK_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Apartment Lockout in Brooklyn, NY — 15–25 Min Response | Avenue Locksmith',
  description: 'Locked out of your apartment in Brooklyn? Fast 15–25 minute response. Non-destructive entry. Available 24/7. Licensed & insured. Call (347) 386-7164.',
  path: '/apartment-lockout-in-brooklyn-ny/',
})

const FAQS = [
  { question: 'How fast can you arrive for an apartment lockout in Brooklyn?', answer: 'We arrive within 15–25 minutes for apartment lockouts anywhere in Brooklyn. In many neighborhoods — especially central Brooklyn — we are there in 15–20 minutes.' },
  { question: 'Will you damage my apartment door or lock?', answer: 'No — we use professional non-destructive entry techniques. Lock picking and bypass tools open the door without any damage in almost every case. Drilling is a last resort we rarely use.' },
  { question: 'What if I have a deadbolt and knob lock?', answer: 'Standard Brooklyn apartments typically have both a deadbolt and a knob/latch lock. We can open both. If only the deadbolt is engaged, we pick or bypass just the deadbolt without touching the knob lock.' },
  { question: 'Do I need to show proof that I live there?', answer: 'Yes — we ask for photo ID and something showing your address (mail, lease, or utility bill). This is standard practice for any legitimate locksmith and protects you as much as anyone.' },
]

export default function ApartmentLockoutPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Apartment Lockout Service', description: 'Apartment lockout service in Brooklyn, NY. 15–25 minute response, non-destructive entry. Available 24/7.', url: '/apartment-lockout-in-brooklyn-ny/', serviceType: 'Residential Lockout Service', brands: LOCK_BRANDS })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Apartment Lockout Brooklyn', url: '/apartment-lockout-in-brooklyn-ny/' }])} />
      <JsonLd data={getWebPageSchema({ title: 'Apartment Lockout in Brooklyn, NY — 15–25 Min Response | Avenue Locksmith', description: 'Locked out of your apartment in Brooklyn? Fast 15–25 minute response. Non-destructive entry. Available 24/7. Licensed & insured. Call (347) 386-7164.', url: '/apartment-lockout-in-brooklyn-ny/' })} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Apartment Lockout Brooklyn' }]} />
      <HeroSection h1="Apartment Lockout Service in Brooklyn, NY — Fast 30-Min Entry" subheadline="Locked out of your Brooklyn apartment? We arrive in 15–25 minutes, use non-destructive entry, and quote the price before we start — available 24/7." variant="emergency" showTrustBar ctaLabel="Call Now — 15–25 Min Response" />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-brand-text leading-relaxed mb-6">Brooklyn apartments range from pre-war walk-ups to new high-rise condos — each with different door configurations and lock types. Our technicians are experienced with all of them: standard pin tumbler deadbolts, mortise locks common in older buildings, and modern electronic locks in newer construction.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Walk-up apartment buildings', 'Brownstone & townhouse apartments', 'High-rise condo & co-op units', 'New construction apartments', 'Deadbolt + knob lock combinations', 'Mortise lock entries', 'All Brooklyn neighborhoods covered', 'No extra charge for night calls'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Apartment Lockout FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Brooklyn apartment lockout dispatch — every building type</h2>
          <p className="text-white/80 mb-8">Call now — 15–25 minute response, 24/7, all Brooklyn neighborhoods.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl"><Phone size={26} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
