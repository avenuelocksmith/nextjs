import type { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Commercial Locksmith Brooklyn NY — Business Security Services | Avenue Locksmith',
  description: 'Commercial locksmith in Brooklyn, NY. Business lockouts, master key systems, access control. Minimal disruption. Licensed & insured. Call (347) 386-7164.',
  path: '/commercial-locksmith-brooklyn-ny/',
})

const FAQS = [
  { question: 'What commercial locksmith services do you offer in Brooklyn?', answer: 'Business lockouts, master key system design and installation, access control (keycard, fob, cloud-based), office rekeying, high-security commercial locks, safe installation, and multi-tenant building rekeying.' },
  { question: 'Can you work after business hours?', answer: 'Yes — we schedule commercial jobs evenings, early mornings, and weekends to minimize disruption to your operations.' },
  { question: 'Do you serve small businesses as well as large offices?', answer: 'We serve businesses of all sizes — from a 2-person retail shop to a 200-person office building. The security needs vary but our approach is the same: assess, recommend, and implement with minimal disruption.' },
  { question: 'Do you provide invoices for commercial work?', answer: 'Yes — detailed invoices for all commercial work. Property management companies can set up accounts with priority dispatch and direct billing.' },
]

export default function CommercialLocksmithBkPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Commercial Locksmith', description: 'Commercial locksmith services in Brooklyn, NY. Business lockouts, master key systems, access control.', url: '/commercial-locksmith-brooklyn-ny/', serviceType: 'Commercial Locksmith' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Commercial Locksmith Brooklyn NY', url: '/commercial-locksmith-brooklyn-ny/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Commercial Locksmith Brooklyn NY' }]} />
      <HeroSection h1="Commercial Locksmith Brooklyn, NY — Business Security Services" subheadline="From business lockouts to master key systems and access control — we serve Brooklyn businesses with professional, licensed commercial locksmith services. Minimal disruption guaranteed." variant="service" showTrustBar />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">Brooklyn businesses trust Avenue Locksmith for commercial security work because we understand the difference between a panicking business owner locked out at 7am and a planned after-hours office rekey. Both get fast, professional service — but the approach is different. We assess first, recommend second, and execute with as little disruption to your operations as possible.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Business lockout — 15–25 Min Response', 'Master key system design & installation', 'Keycard & access control systems', 'Office rekeying — full or partial', 'High-security commercial locks', 'Safe installation & combination service', 'After-hours & weekend scheduling', 'Invoices & property manager accounts'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Commercial Locksmith FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Need a Commercial Locksmith in Brooklyn?</h2>
          <p className="text-white/80 mb-8">Call for a free consultation or emergency dispatch.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl"><Phone size={26} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
      <ContactFormSection />
    </>
  )
}
