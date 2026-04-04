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
  title: 'Emergency Locksmith Brooklyn Heights — 15–25 Min Response | Avenue Locksmith',
  description: 'Emergency locksmith in Brooklyn Heights. Townhouse & apartment lockouts, 24/7. 15–25 minute arrival. Licensed & insured. Call (347) 386-7164 now.',
  path: '/emergency-locksmith-brooklyn-heights/',
})

const FAQS = [
  { question: 'How quickly can you reach Brooklyn Heights for an emergency lockout?', answer: 'We arrive within 15–25 minutes for emergency lockouts throughout Brooklyn Heights — Montague Street, Remsen Street, Hicks Street, Pierrepont Street, and all adjacent blocks.' },
  { question: 'Brooklyn Heights has very old brownstones and townhouses. Can you work with historic door hardware?', answer: 'Yes — Brooklyn Heights has some of the oldest residential buildings in Brooklyn, and we regularly work with antique mortise locks, original rim cylinder locks, and other period hardware. We carry the tools to open these without damage.' },
  { question: 'Do you work with high-security locks like Medeco or Mul-T-Lock?', answer: 'Yes — high-security locks are common in Brooklyn Heights and we carry bypass tools for most high-security cylinders. In some cases, drilling may be necessary on advanced cylinders, but we always discuss this before proceeding.' },
  { question: 'Is there an extra charge for Brooklyn Heights given the neighborhood?', answer: 'No — same flat rate throughout all of Brooklyn. Emergency lockout service starts at $75–$125, quoted in full before we begin any work. No neighborhood surcharges.' },
]

export default function EmergencyLocksmithBrooklynHeightsPage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({ title: 'Emergency Locksmith Brooklyn Heights — 15–25 Min Response | Avenue Locksmith', description: 'Emergency locksmith in Brooklyn Heights. Townhouse & apartment lockouts, 24/7. 15–25 minute arrival. Licensed & insured. Call (347) 386-7164 now.', url: '/emergency-locksmith-brooklyn-heights/' })} />
      <JsonLd data={getServiceSchema({ name: 'Emergency Locksmith — Brooklyn Heights', description: 'Emergency locksmith in Brooklyn Heights. 15–25 minute response for townhouse and apartment lockouts.', url: '/emergency-locksmith-brooklyn-heights/', serviceType: 'Emergency Lockout Service', brands: LOCK_BRANDS })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Emergency Locksmith Brooklyn Heights', url: '/emergency-locksmith-brooklyn-heights/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Emergency Locksmith Brooklyn Heights' }]} />
      <HeroSection h1="Emergency Locksmith in Brooklyn Heights — 15–25 minute response" subheadline="Locked out of your Brooklyn Heights townhouse or apartment? We arrive within 15–25 minutes and open any door — from antique mortise locks to modern high-security deadbolts — without damage." variant="emergency" showTrustBar ctaLabel="Call Now — Fast Response" />
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">Brooklyn Heights is one of New York's oldest and most architecturally significant neighborhoods — a National Historic District with townhouses dating to the early 19th century. The door hardware in this neighborhood ranges from original antique mortise locks to modern high-security cylinders installed by security-conscious residents. Our technicians are trained to work with the full spectrum and carry tools for all of it.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Historic townhouse & brownstone entry', 'Antique mortise & rim cylinder locks', 'High-security deadbolt entry', 'Non-destructive entry always first', '24/7 — no after-hours charge', 'Licensed & insured locksmith'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2"><AlertTriangle size={17} className="text-amber-600 mt-0.5 shrink-0" /><p className="text-amber-800 text-sm leading-relaxed"><strong>NYC Locksmith Scam Warning:</strong> High-security locks are sometimes used by scam locksmiths as an excuse to charge dramatically more on-site. Always get a full written quote before work begins. If the price changes after arrival, do not pay.</p></div>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Brooklyn Heights Lockout FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Locked Out in Brooklyn Heights? Call Now.</h2>
          <p className="text-white/80 mb-8">15–25 minute response. Historic hardware specialists. No hidden fees.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-12 py-6 rounded-xl text-2xl transition-colors shadow-2xl"><Phone size={30} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
