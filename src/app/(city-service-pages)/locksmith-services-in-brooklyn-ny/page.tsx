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
  title: 'Locksmith Services in Brooklyn, NY — Full-Service | Avenue Locksmith',
  description: 'Full-service locksmith in Brooklyn, NY. Residential, commercial, and auto locksmith services. Licensed & insured. 24/7 emergency response. Call (347) 386-7164.',
  path: '/locksmith-services-in-brooklyn-ny/',
})

const FAQS = [
  { question: 'What locksmith services do you offer in Brooklyn?', answer: 'We offer residential locksmith services (lockouts, rekeying, lock changes, deadbolt installation), commercial locksmith services (business lockouts, master key systems, access control), automotive locksmith services (car lockouts, key cutting, transponder programming), and emergency services 24/7.' },
  { question: 'Are you licensed and insured in New York?', answer: 'Yes — Avenue Locksmith holds a NYC DCWP Locksmith License and is fully bonded and insured. We are happy to provide our license number before work begins. Always ask any locksmith for their DCWP license number — it is a legal requirement for locksmiths operating in New York City.' },
  { question: 'How do I know I am getting a fair price?', answer: 'We always quote a complete price before any work begins. There are no hidden fees, no after-hours surcharges, and no trip charges. If you receive a quote on the phone, that is the price you pay.' },
  { question: 'Do you serve all Brooklyn neighborhoods?', answer: 'Yes — we serve all Brooklyn neighborhoods from Williamsburg to Bay Ridge, Bushwick to Sheepshead Bay. We maintain a 15–25 minute response time throughout the borough.' },
]

const SERVICES = [
  { title: 'Residential', items: ['Home & apartment lockouts', 'Lock rekeying & replacement', 'Deadbolt installation', 'New tenant lock change', 'Mailbox locks'] },
  { title: 'Commercial', items: ['Business lockouts', 'Master key systems', 'Access control installation', 'Office rekeying', 'High-security locks'] },
  { title: 'Automotive', items: ['Car lockouts — all makes', 'Spare key cutting', 'Transponder programming', 'Broken key extraction', 'Smart key replacement'] },
  { title: 'Emergency', items: ['24/7 lockout response', 'Burglary door repair', 'Broken key extraction', 'Emergency lock change', 'Post-break-in rekeying'] },
]

export default function LocksmithServicesBkPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Locksmith Services', description: 'Full-service locksmith in Brooklyn, NY. Residential, commercial, and automotive locksmith services.', url: '/locksmith-services-in-brooklyn-ny/', serviceType: 'Locksmith' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Locksmith Services Brooklyn', url: '/locksmith-services-in-brooklyn-ny/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Locksmith Services Brooklyn' }]} />
      <HeroSection h1="Locksmith Services in Brooklyn, NY — Residential, Commercial & Auto" subheadline="Full-service locksmith covering all of Brooklyn. Home lockouts, car lockouts, business security, lock changes, key cutting, and more. Licensed & insured. Available 24/7." variant="service" showTrustBar />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-brand-text text-lg leading-relaxed mb-8">Avenue Locksmith has served Brooklyn residents, businesses, and drivers for years. From a midnight apartment lockout in Bed-Stuy to a master key system installation for a Park Slope property manager — we cover the full range of locksmith needs with one crew, one number, and one standard of service.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="bg-brand-bg rounded-xl p-5 border border-brand-border">
                <h3 className="font-bold text-brand-navy mb-3 text-base">{svc.title} Services</h3>
                <ul className="space-y-2">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Locksmith Services FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Need a Locksmith in Brooklyn?</h2>
          <p className="text-white/80 mb-8">Emergency or planned service — one number handles it all.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl"><Phone size={26} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
      <ContactFormSection />
    </>
  )
}
