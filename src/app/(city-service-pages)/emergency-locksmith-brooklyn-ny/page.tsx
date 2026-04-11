import type { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Emergency Locksmith Brooklyn NY — Broken Key & Burglary Repair | Avenue Locksmith',
  description: 'Emergency locksmith in Brooklyn, NY. Broken key extraction, burglary door repair, and emergency lock change. 15–25 minute response 24/7. Call (347) 386-7164.',
  path: '/emergency-locksmith-brooklyn-ny/',
})

const FAQS = [
  { question: 'Can you extract a broken key from a lock?', answer: 'Yes — broken key extraction is one of our most common emergency calls. We use professional extraction tools to remove the broken piece without damaging the lock cylinder in most cases.' },
  { question: 'My door was kicked in. Can you help right now?', answer: 'Yes. We provide emergency burglary repair — we secure your door immediately (temporary or permanent repair based on damage level), change the locks, and reinforce the frame if needed. We respond to burglary situations with the same 15–25 minute priority.' },
  { question: 'What is emergency rekeying?', answer: 'If you believe someone unauthorized has a key to your home — after a break-in, a stolen purse, or a domestic situation — emergency rekeying immediately invalidates all existing keys. It is one of the fastest security responses available.' },
  { question: 'Do you do burglary repairs at night?', answer: 'Yes — burglary repairs are treated as highest priority emergencies and are handled 24/7. A broken lock overnight is a security hole, not a next-morning problem, so these calls get dispatched ahead of routine lockouts.' },
]

export default function EmergencyLocksmithBkNYPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Emergency Locksmith — Broken Key & Burglary Repair', description: 'Emergency locksmith in Brooklyn, NY. Broken key extraction, burglary door repair, emergency lock change.', url: '/emergency-locksmith-brooklyn-ny/', serviceType: 'Emergency Locksmith' })} />
      <JsonLd data={getWebPageSchema({ title: 'Emergency Locksmith Brooklyn NY — Broken Key & Burglary Repair | Avenue Locksmith', description: 'Emergency locksmith in Brooklyn, NY. Broken key extraction, burglary door repair, and emergency lock change. 15–25 minute response 24/7. Call (347) 386-7164.', url: '/emergency-locksmith-brooklyn-ny/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Emergency Locksmith Brooklyn NY', url: '/emergency-locksmith-brooklyn-ny/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Emergency Locksmith Brooklyn NY' }]} />
      <HeroSection h1="Emergency Locksmith Brooklyn NY — Broken Key & Burglary Repair" subheadline="Key snapped in your lock? Home broken into? We handle emergency extractions, burglary repairs, and emergency lock changes in Brooklyn — 15–25 minute response, 24/7." variant="emergency" showTrustBar ctaLabel="Call Now — Emergency Response" />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-5">Emergency Locksmith Situations We Handle</h2>
          <div className="space-y-4 mb-6">
            {[
              { title: 'Broken Key Extraction', body: 'Key snapped inside the lock cylinder. We extract the broken piece with professional tools — usually without damaging the lock — and cut a replacement key on the spot.' },
              { title: 'Burglary Repair & Door Securing', body: 'After a break-in, we secure your door immediately, repair or replace damaged hardware, and rekey or replace all affected locks. Your home will be secure before we leave.' },
              { title: 'Emergency Rekeying', body: 'If someone has a key they should not have — stolen keys, domestic situation, break-in — we rekey immediately so all existing keys stop working.' },
              { title: 'Damaged Lock Repair', body: 'Frozen locks, jammed deadbolts, damaged cylinders after an attempted break-in. We diagnose and fix or replace as needed.' },
            ].map((item) => (
              <div key={item.title} className="bg-brand-bg rounded-xl p-4 border border-brand-border">
                <h3 className="font-bold text-brand-navy mb-1 flex items-center gap-2"><CheckCircle size={15} className="text-brand-amber shrink-0" aria-hidden="true" />{item.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Emergency Locksmith FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Emergency in Brooklyn? Call Right Now.</h2>
          <p className="text-white/80 mb-8">Broken key, burglary, locked out — we respond in 15–25 minutes, 24/7.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-12 py-6 rounded-xl text-2xl transition-colors shadow-2xl"><Phone size={30} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
