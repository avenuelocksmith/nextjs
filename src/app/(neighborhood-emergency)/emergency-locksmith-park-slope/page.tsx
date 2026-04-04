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
  title: 'Emergency Locksmith Park Slope — 15–25 Min Response | Avenue Locksmith',
  description: 'Emergency locksmith in Park Slope, Brooklyn. Locked out of your brownstone or apartment? 15–25 minute response, 24/7. Licensed & insured. Call (347) 386-7164.',
  path: '/emergency-locksmith-park-slope/',
})

const FAQS = [
  { question: 'How quickly can you reach Park Slope for a lockout?', answer: 'We arrive within 15–25 minutes anywhere in Park Slope — 5th Avenue corridor, Prospect Park West, and all side streets. We dispatch from within Brooklyn to minimize travel time.' },
  { question: 'My Park Slope brownstone has old mortise locks. Can you open them?', answer: 'Yes — mortise locks are among the most common locks in Park Slope brownstones and we carry the tools to open them without damage. We work with antique hardware regularly throughout the neighborhood.' },
  { question: 'Is there any extra charge for Park Slope calls after midnight?', answer: 'No — same price at any hour. Emergency lockout service starts at $75–$125 and is quoted before we start work. No after-hours surcharges.' },
  { question: 'Can you duplicate keys for my Park Slope apartment on the same visit?', answer: 'Yes — we carry key cutting equipment on every service van. If you need spare keys cut after a lockout, we can do that in the same visit.' },
]

export default function EmergencyLocksmithParkSlopePage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({ title: 'Emergency Locksmith Park Slope — 15–25 Min Response | Avenue Locksmith', description: 'Emergency locksmith in Park Slope, Brooklyn. Locked out of your brownstone or apartment? 15–25 minute response, 24/7. Licensed & insured. Call (347) 386-7164.', url: '/emergency-locksmith-park-slope/' })} />
      <JsonLd data={getServiceSchema({ name: 'Emergency Locksmith — Park Slope', description: 'Emergency locksmith in Park Slope, Brooklyn. 15–25 minute response for brownstone and apartment lockouts.', url: '/emergency-locksmith-park-slope/', serviceType: 'Emergency Lockout Service', brands: LOCK_BRANDS })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Emergency Locksmith Park Slope', url: '/emergency-locksmith-park-slope/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Emergency Locksmith Park Slope' }]} />
      <HeroSection h1="Emergency Locksmith in Park Slope — 15–25 minute response" subheadline="Locked out of your Park Slope brownstone or apartment? We arrive in 15–25 minutes, open any door without damage, and are available 24/7 with no after-hours surcharge." variant="emergency" showTrustBar ctaLabel="Call Now — On Our Way" />
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">Park Slope is home to some of Brooklyn's most iconic brownstone architecture — and some of its oldest door hardware. We regularly work with antique mortise locks, original rim cylinder setups, and multi-lock configurations in the neighborhood's landmark buildings. Whether your door is 1890s or 2020s, we have the tools and experience to open it.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Brownstone & pre-war lock entry', 'Mortise & rim cylinder locks', 'Modern deadbolt & apartment entry', '24/7 — no extra night charge', 'On-site key cutting available', 'Licensed & insured locksmith'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2"><AlertTriangle size={17} className="text-amber-600 mt-0.5 shrink-0" /><p className="text-amber-800 text-sm leading-relaxed"><strong>NYC Locksmith Scam Warning:</strong> Always get a price quote before tools come out. If the price changes after arrival, do not pay and call another locksmith. Avenue Locksmith provides firm quotes before every job.</p></div>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Park Slope Lockout FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Locked Out in Park Slope? Call Right Now.</h2>
          <p className="text-white/80 mb-8">15–25 minute response. No damage. No hidden fees.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-12 py-6 rounded-xl text-2xl transition-colors shadow-2xl"><Phone size={30} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
