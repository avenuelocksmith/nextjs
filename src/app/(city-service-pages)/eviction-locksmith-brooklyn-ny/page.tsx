import type { Metadata } from 'next'
import { Phone, CheckCircle, AlertTriangle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS, LOCK_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Eviction Locksmith Brooklyn NY — Legal Lock Changes for Landlords | Avenue Locksmith',
  description: 'Eviction locksmith in Brooklyn, NY. Legal post-eviction lock changes for landlords. NY Marshal paperwork required. Same-day service. Call (347) 386-7164.',
  path: '/eviction-locksmith-brooklyn-ny/',
})

const FAQS = [
  { question: 'What is required before you can change the locks after eviction?', answer: 'New York requires a court-issued warrant of eviction executed by a New York City Marshal. Self-help eviction (changing locks without legal authority) is illegal in NY. We only work after the legal eviction is fully complete.' },
  { question: 'How fast can you respond after the eviction is executed?', answer: 'We provide same-day service. Call us once the Marshal has completed the eviction and we will typically be there within 2–4 hours.' },
  { question: 'Do you serve property management companies?', answer: 'Yes — we work with individual landlords, property managers, and real estate management companies throughout Brooklyn. We can set up accounts with priority dispatch and direct billing.' },
  { question: 'What locks do you install after eviction?', answer: 'We rekey or fully replace all entry door locks and mailbox locks. We recommend replacement with new hardware to ensure all existing keys are definitively invalidated. We carry Grade 1 deadbolts in stock.' },
]

export default function EvictionLocksmithBkPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Eviction Locksmith', description: 'Legal post-eviction lock changes for Brooklyn landlords. NY Marshal paperwork required.', url: '/eviction-locksmith-brooklyn-ny/', serviceType: 'Eviction Locksmith', brands: LOCK_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Eviction Locksmith Brooklyn NY — Legal Lock Changes for Landlords | Avenue Locksmith', description: 'Eviction locksmith in Brooklyn, NY. Legal post-eviction lock changes for landlords. NY Marshal paperwork required. Same-day service. Call (347) 386-7164.', url: '/eviction-locksmith-brooklyn-ny/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Eviction Locksmith Brooklyn NY', url: '/eviction-locksmith-brooklyn-ny/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Eviction Locksmith Brooklyn NY' }]} />
      <HeroSection h1="Eviction Locksmith in Brooklyn, NY — Legal Lock Changes for Landlords" subheadline="Post-eviction lock change service for Brooklyn landlords and property managers. NY Marshal paperwork required. Same-day service available." variant="service" showTrustBar />
      <section className="py-10 bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-3"><AlertTriangle size={20} className="text-amber-600 mt-0.5 shrink-0" /><p className="text-amber-800 text-sm leading-relaxed"><strong>Legal Notice:</strong> Avenue Locksmith only changes locks after a lawful eviction executed by a New York City Marshal with a valid court-issued warrant. Self-help eviction is illegal in New York State.</p></div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">Brooklyn landlords call us after the legal eviction process is complete and they need the unit secured immediately. We arrive same-day, change all entry door locks and mailbox locks, and provide complete documentation of the work performed.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Post-eviction lock change — all entry doors', 'Mailbox lock replacement', 'Full lock replacement or rekeying', 'Same-day service throughout Brooklyn', 'Detailed documentation provided', 'Property manager accounts available', 'Licensed & insured — NY certified', 'Serving all Brooklyn landlords'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Eviction Locksmith FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Post-Eviction Lock Change in Brooklyn?</h2>
          <p className="text-white/80 mb-8">Same-day service. Have your paperwork ready when you call.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl"><Phone size={26} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
      <ContactFormSection />
    </>
  )
}
