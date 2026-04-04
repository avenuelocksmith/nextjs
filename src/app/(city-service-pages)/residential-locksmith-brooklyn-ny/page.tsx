import type { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS, LOCK_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Residential Locksmith Brooklyn, NY — Apartments & Homes | Avenue Locksmith',
  description: 'Residential locksmith in Brooklyn, NY. Apartment lockouts, lock rekeying, deadbolt installation, and new tenant lock changes. Licensed & insured. Call (347) 386-7164.',
  path: '/residential-locksmith-brooklyn-ny/',
})

const FAQS = [
  { question: 'What residential locksmith services do you offer in Brooklyn?', answer: 'Apartment and house lockouts, lock rekeying, lock replacement and upgrade, deadbolt installation, new tenant lock change, mailbox lock replacement, and key duplication. All services are performed on-site.' },
  { question: 'I just moved into a Brooklyn apartment. Should I rekey?', answer: 'Yes — always. You have no way to know how many copies of your key exist from previous tenants. Rekeying costs $75–$150 and immediately renders all old keys useless. It is the single best security step you can take when moving in.' },
  { question: 'My landlord is responsible for locks. Can you still help me?', answer: 'Yes — you can hire a locksmith regardless of what your lease says about who pays for lock service. Many Brooklyn tenants pay out of pocket for rekeying and then seek reimbursement from their landlord. We can provide documentation for that process.' },
  { question: 'Can you upgrade my locks to something more secure?', answer: 'Yes — we install Medeco, Mul-T-Lock, and Schlage high-security deadbolts that are pick, drill, and bump resistant with restricted keyways. We also install reinforced strike plates for kick-in prevention — important for pre-war Brooklyn doors.' },
]

export default function ResidentialLocksmithBkPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Residential Locksmith', description: 'Residential locksmith in Brooklyn, NY. Apartment lockouts, rekeying, deadbolt installation, new tenant lock changes.', url: '/residential-locksmith-brooklyn-ny/', serviceType: 'Residential Locksmith', brands: LOCK_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Residential Locksmith Brooklyn, NY — Apartments & Homes | Avenue Locksmith', description: 'Residential locksmith in Brooklyn, NY. Apartment lockouts, lock rekeying, deadbolt installation, and new tenant lock changes. Licensed & insured. Call (347) 386-7164.', url: '/residential-locksmith-brooklyn-ny/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Residential Locksmith Brooklyn', url: '/residential-locksmith-brooklyn-ny/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Residential Locksmith Brooklyn' }]} />
      <HeroSection h1="Residential Locksmith in Brooklyn, NY — Apartments & Homes" subheadline="Apartment lockouts, rekeying, deadbolt upgrades, and new tenant lock changes throughout Brooklyn. Built for renters — the majority of Brooklyn households." variant="service" showTrustBar />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-brand-text text-lg leading-relaxed mb-8">Over 70% of Brooklyn households rent. Residential locksmith calls in Brooklyn are therefore overwhelmingly renter situations — move-in rekeying, lockouts, lease-end lock changes, and security upgrades for older pre-war door hardware. Avenue Locksmith understands the Brooklyn renter context: we know the difference between a pre-war rim cylinder and a modern deadbolt, and we stock hardware that works with existing Brooklyn door configurations.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              'Apartment & home lockouts — 15–25 Min Response',
              'Move-in rekeying — #1 security upgrade',
              'Full lock replacement & upgrade',
              'ANSI Grade 1 deadbolt installation',
              'High-security lock installation (Medeco, Mul-T-Lock)',
              'Reinforced strike plate & door frame',
              'Mailbox lock replacement',
              'New tenant lock change — landlords & tenants',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
          <div className="bg-brand-bg rounded-xl p-5 border border-brand-border">
            <h2 className="text-lg font-bold text-brand-navy mb-2">Why Brooklyn Renters Rekey on Move-In</h2>
            <p className="text-brand-text text-sm leading-relaxed">In a high-turnover rental market like Brooklyn, the previous tenant's keys — and any copies they made — are still out there after you move in. Rekeying changes the internal pin configuration of your existing lock so all previous keys stop working immediately. It costs far less than a full lock replacement and takes 15–25 minutes per lock.</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Residential Locksmith FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Brooklyn Residential Locksmith — Call or Book</h2>
          <p className="text-white/80 mb-8">Emergency lockout or planned service — we serve all Brooklyn neighborhoods.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl"><Phone size={26} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
      <ContactFormSection />
    </>
  )
}
