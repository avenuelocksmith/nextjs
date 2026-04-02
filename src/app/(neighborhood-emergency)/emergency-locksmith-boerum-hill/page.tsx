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
  title: 'Emergency Locksmith Boerum Hill — 15–25 Min Response | Avenue Locksmith',
  description: 'Emergency locksmith in Boerum Hill, Brooklyn. Locked out of your apartment or home? 15–25 minute response, 24/7. Licensed & insured. Call (347) 386-7164 now.',
  path: '/emergency-locksmith-boerum-hill/',
})

const FAQS = [
  { question: 'How fast can you reach Boerum Hill for an emergency lockout?', answer: 'We arrive within 15–25 minutes for emergency lockouts throughout Boerum Hill. In many cases we reach Atlantic Avenue and the surrounding blocks in 15–20 minutes.' },
  { question: 'Is there an extra charge for late-night lockouts in Boerum Hill?', answer: 'No — we charge the same rate at midnight as at noon. Emergency lockout starts at $75–$125, quoted before we start any work.' },
  { question: 'Can you open my Boerum Hill apartment without damaging the door?', answer: 'Yes. Non-destructive entry is always our first approach. We use professional lock picking techniques to open your door without damage. Destructive entry is only ever used as a last resort and we always discuss it with you first.' },
  { question: 'I lost my keys. Should I rekey after a lockout?', answer: 'If your keys are lost (not just misplaced inside), we strongly recommend rekeying on the spot. We carry rekeying tools and can change your lock configuration immediately after opening your door — usually for $50–$75 added to the lockout service.' },
]

export default function EmergencyLocksmithBoerumHillPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Emergency Locksmith — Boerum Hill', description: 'Emergency locksmith in Boerum Hill, Brooklyn. 15–25 minute response for apartment and home lockouts.', url: '/emergency-locksmith-boerum-hill/', serviceType: 'Emergency Lockout Service' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Emergency Locksmith Boerum Hill', url: '/emergency-locksmith-boerum-hill/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Emergency Locksmith Boerum Hill' }]} />
      <HeroSection h1="Emergency Locksmith in Boerum Hill — 15–25 minute response" subheadline="Locked out of your Boerum Hill apartment? We arrive within 15–25 minutes, open your door without damage, and are available 24 hours a day with no after-hours surcharge." variant="emergency" showTrustBar ctaLabel="Call Now — We're On Our Way" />
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">Boerum Hill's mix of converted brownstones, pre-war co-ops, and newer construction means we encounter a wide variety of door hardware on every block — from antique mortise locks in the older buildings along Dean Street to modern Schlage deadbolts in newer rentals near Atlantic Terminal. Our technicians are equipped for all of them.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Apartment lockout — all lock types', 'Brownstone & pre-war entry', 'Non-destructive entry always first', '24/7 — no after-hours charge', 'On-site rekeying after lockout', 'Licensed & insured locksmith'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2"><AlertTriangle size={17} className="text-amber-600 mt-0.5 shrink-0" /><p className="text-amber-800 text-sm leading-relaxed"><strong>Avoid Locksmith Scams:</strong> Demand a full price quote before any work begins. If a locksmith refuses to quote upfront or the price jumps after arrival, send them away. Avenue Locksmith always provides written quotes before starting.</p></div>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Boerum Hill Lockout FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Locked Out in Boerum Hill? Call Now.</h2>
          <p className="text-white/80 mb-8">15–25 minute response. Licensed & insured. No hidden fees.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-12 py-6 rounded-xl text-2xl transition-colors shadow-2xl"><Phone size={30} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
