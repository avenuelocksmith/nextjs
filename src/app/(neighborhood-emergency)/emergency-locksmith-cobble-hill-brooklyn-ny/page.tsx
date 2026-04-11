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
  title: 'Emergency Locksmith Cobble Hill — 15–25 Min Response | Avenue Locksmith',
  description: 'Emergency locksmith in Cobble Hill, Brooklyn. Apartment & brownstone lockouts, 24/7. 15–25 minute arrival. Licensed & insured. Call (347) 386-7164.',
  path: '/emergency-locksmith-cobble-hill-brooklyn-ny/',
})

const FAQS = [
  { question: 'How quickly can you reach Cobble Hill for a lockout?', answer: 'We arrive within 15–25 minutes throughout Cobble Hill — Clinton Street, Henry Street, and all adjacent blocks. Our South Brooklyn coverage means we are rarely far from this neighborhood.' },
  { question: 'My Cobble Hill brownstone has an old mortise lock. Can you open it without damage?', answer: 'Yes — mortise locks are among the most common locks in Cobble Hill\'s historic brownstones and we carry the correct tools to open them without damage. Non-destructive entry is always our first and preferred approach.' },
  { question: 'Can I get my lock rekeyed after the lockout in Cobble Hill?', answer: 'Yes — we carry rekeying kits on every service van. If your keys are lost or you want to change who can access your home, we rekey on-site immediately after the lockout. This is strongly recommended if your keys are missing.' },
  { question: 'What if I am locked out of both my apartment and my mailbox?', answer: 'We can open both. Mailbox lock entry and replacement is a separate service we offer during the same visit. Ask about it when you call — it is usually a quick add-on.' },
]

export default function EmergencyLocksmithCobbleHillPage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({ title: 'Emergency Locksmith Cobble Hill — 15–25 Min Response | Avenue Locksmith', description: 'Emergency locksmith in Cobble Hill, Brooklyn. Apartment & brownstone lockouts, 24/7. 15–25 minute arrival. Licensed & insured. Call (347) 386-7164.', url: '/emergency-locksmith-cobble-hill-brooklyn-ny/' })} />
      <JsonLd data={getServiceSchema({ name: 'Emergency Locksmith — Cobble Hill', description: 'Emergency locksmith in Cobble Hill, Brooklyn. 15–25 minute response for brownstone and apartment lockouts.', url: '/emergency-locksmith-cobble-hill-brooklyn-ny/', serviceType: 'Emergency Lockout Service', brands: LOCK_BRANDS })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Emergency Locksmith Cobble Hill', url: '/emergency-locksmith-cobble-hill-brooklyn-ny/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Emergency Locksmith Cobble Hill' }]} />
      <HeroSection h1="Emergency Locksmith in Cobble Hill — 15–25 minute response" subheadline="Locked out of your Cobble Hill brownstone or apartment? We arrive within 15–25 minutes, open any door without damage, and are available 24/7 with no after-hours fees." variant="emergency" showTrustBar ctaLabel="Call Now — On Our Way" />
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">Cobble Hill's landmarked brownstone blocks and Federal-style row houses are some of the most beautiful in Brooklyn — and some of the most lock-diverse. Older buildings along Clinton and Henry Streets often have original mortise locks alongside added modern deadbolts. We know how to read these configurations and open them efficiently without causing any damage to historic door hardware.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Brownstone & historic door entry', 'Mortise & rim cylinder locks', 'Modern deadbolt & apartment locks', 'Non-destructive entry always first', '24/7 — no extra night charge', 'Licensed & insured locksmith'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2"><AlertTriangle size={17} className="text-amber-600 mt-0.5 shrink-0" /><p className="text-amber-800 text-sm leading-relaxed"><strong>NYC Locksmith Scam Warning:</strong> Always demand a written price before work begins. If the price changes after arrival, send them away and call another locksmith. Avenue Locksmith always quotes the complete price first.</p></div>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Cobble Hill Lockout FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Cobble Hill lockout dispatch — brownstone or new-build, same response</h2>
          <p className="text-white/80 mb-8">15–25 minutes. Non-destructive entry. No hidden fees.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-12 py-6 rounded-xl text-2xl transition-colors shadow-2xl"><Phone size={30} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
