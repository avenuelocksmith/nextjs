import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Key } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildServiceMetadata } from '@/lib/seo'
import { BUSINESS, LOCK_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildServiceMetadata({
  serviceName: 'Lock Rekeying',
  path: '/services/lock-rekey/',
  customTitle: 'Lock Rekeying in Brooklyn, NY — From $65 | Avenue Locksmith',
  customDescription: 'Lock rekeying in Brooklyn, NY. Change your locks without replacing them — from $65. Move-in, lost keys, roommate change. Same-day service. Call (347) 386-7164.',
})

const FAQS = [
  {
    question: 'How does rekeying work — exactly what do you change inside the lock?',
    answer: 'A pin tumbler lock (the most common type in NYC apartments) has a series of spring-loaded pin stacks inside the cylinder. Each stack has a key pin and a driver pin. Rekeying replaces only the key pins with a new set cut to different heights. Your original key no longer lifts the pins to the shear line; the new key does. The lock body, deadbolt mechanism, and exterior hardware are untouched.',
  },
  {
    question: 'The five situations where you must rekey immediately',
    answer: '(1) You moved into a new apartment or house — prior occupants may have copies. (2) You lost a key or had one stolen. (3) A roommate moved out and you want their key to stop working. (4) You ended a relationship with someone who had your key. (5) Your building recently had a common-area security incident. In all five, rekeying is the fastest and cheapest fix.',
  },
  {
    question: 'Can all locks be rekeyed, or only certain types?',
    answer: 'Most residential pin tumbler locks can be rekeyed — Schlage, Kwikset, Weiser, and most commercial-brand cylinders are all rekeyable. Some exceptions: very old or damaged cylinders with worn pins that cannot hold new cuts reliably (replacement is better), and certain electronic smart locks that use a different mechanism. Wafer locks (common on filing cabinets and cheap furniture) are replaced, not rekeyed. We inspect before confirming.',
  },
  {
    question: 'How many keys can I get cut when you rekey?',
    answer: 'As many as you need. We cut keys on-site using the van-mounted key machine immediately after rekeying. Standard key cuts are $5–$10 each. High-security restricted-keyway cuts (Medeco, Mul-T-Lock) are $25–$65 each. Most customers get 2–4 copies. We recommend at least one backup stored somewhere other than your key ring.',
  },
  {
    question: 'I have four locks in my apartment — can they all be rekeyed to the same key?',
    answer: 'Yes. Keying multiple locks alike (so one key opens all of them) is standard and typically included in the per-lock rekeying price. We repin all cylinders to the same combination. You can also choose to key some locks differently — for example, deadbolt and door knob alike but mailbox lock separate.',
  },
]

const WHEN_TO_REKEY = [
  { title: 'Move into a new rental', body: 'Most important security step for any new tenant — costs less than one month\'s renters insurance.' },
  { title: 'Lost or stolen keys', body: 'If your keys are gone and your address is on your keychain, rekey the same day.' },
  { title: 'Roommate moves out', body: 'Avoid the awkward key-return conversation — just rekey and issue new keys.' },
  { title: 'Buy a home', body: 'Previous owners, realtors, contractors — all had copies. Start fresh.' },
  { title: 'New tenant moves in', body: 'For landlords — must rekey between every tenancy.' },
]

export default function LockRekeyPage() {
  const canonicalUrl = `${BUSINESS.url}/services/lock-rekey/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Lock Rekeying in Brooklyn, NY',
    description: 'Professional lock rekeying in Brooklyn, NY. Change internal pin configuration so old keys stop working. Move-in, lost keys, tenant changeover. From $65 per lock. Same-day service.',
    url: canonicalUrl,
    serviceType: 'Lock Rekeying',
    provider: {
      '@type': 'Locksmith',
      '@id': BUSINESS.entityId,
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: BUSINESS.url,
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        addressCountry: 'US',
      },
    },
    areaServed: { '@type': 'City', name: 'Brooklyn', sameAs: 'https://en.wikipedia.org/wiki/Brooklyn' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '65',
      priceRange: '$65–$120',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services/' },
        { name: 'Lock Rekeying', url: '/services/lock-rekey/' },
      ])} />
      <JsonLd data={getServiceSchema({ name: 'Lock Rekeying', description: 'Professional lock rekeying in Brooklyn, NY. Change internal pin configuration so old keys stop working. Move-in, lost keys, tenant changeover. From $65 per lock. Same-day service.', url: '/services/lock-rekey/', serviceType: 'Lock Rekeying', brands: LOCK_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Lock Rekeying in Brooklyn, NY — From $65 | Avenue Locksmith', description: 'Lock rekeying in Brooklyn, NY. Change your locks without replacing them — from $65. Move-in, lost keys, roommate change. Same-day service. Call (347) 386-7164.', url: '/services/lock-rekey/' })} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Lock Rekeying' },
      ]} />

      <HeroSection
        h1="Lock Rekeying in Brooklyn, NY — From $65"
        subheadline="Same lock, new key — in 20 minutes. The fastest way to invalidate old keys and take control of who can enter your home or office."
        variant="service"
        showTrustBar
      />

      {/* Rekey vs Replace explanation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            Rekeying vs. Replacing — When Does Each Make Sense?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-brand-success/10 border-2 border-brand-success rounded-xl p-5">
              <h3 className="font-bold text-brand-navy mb-3 flex items-center gap-2">
                <CheckCircle size={16} className="text-brand-success" aria-hidden="true" />
                Rekey — right when:
              </h3>
              <ul className="space-y-2">
                {['Lock is in good working condition','You want the same lock, new key','Moving in, roommate leaving, lost key','Budget-conscious — costs $65–$85','Quick — 20 minutes per lock'].map((i) => (
                  <li key={i} className="text-brand-text text-xs flex gap-2">
                    <span className="text-brand-success shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-amber/10 border-2 border-brand-amber rounded-xl p-5">
              <h3 className="font-bold text-brand-navy mb-3 flex items-center gap-2">
                <Key size={16} className="text-brand-amber" aria-hidden="true" />
                Replace — right when:
              </h3>
              <ul className="space-y-2">
                {['Lock is damaged, worn, or stiff','After a break-in or forced entry','Upgrading to a higher security grade','Lock brand change desired','Cylinder is too worn to hold new pins'].map((i) => (
                  <li key={i} className="text-brand-text text-xs flex gap-2">
                    <span className="text-brand-amber shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-brand-muted text-sm">
            Not sure which you need? We inspect the lock on arrival and give an honest recommendation before starting any work.
          </p>
        </div>
      </section>

      {/* When to rekey */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">5 Times You Should Rekey Your Lock</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHEN_TO_REKEY.map((item, i) => (
              <div key={item.title} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-brand-border">
                <div className="w-7 h-7 bg-brand-navy text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm mb-0.5">{item.title}</p>
                  <p className="text-brand-muted text-xs leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Rekeying Pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Single lock rekey', price: '$65–$85', note: 'Includes new pins + keys cut' },
              { label: 'Two locks (keyed alike)', price: '$110–$140', note: 'Same key opens both' },
              { label: 'Full apartment (3–4 locks)', price: '$160–$220', note: 'All locks, all keys' },
            ].map((p) => (
              <div key={p.label} className="bg-brand-bg rounded-xl p-5 border border-brand-border text-center">
                <p className="text-brand-muted text-xs mb-1">{p.label}</p>
                <p className="text-2xl font-bold text-brand-navy mb-1">{p.price}</p>
                <p className="text-brand-muted text-xs">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="text-brand-muted text-xs mt-3 text-center">Full price quoted on the phone before dispatch. High-security restricted-keyway cylinders priced separately.</p>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Lock Rekeying FAQ" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'New Tenant Lock Change', href: '/services/new-tenant-lock-change/' },
              { label: 'Lock Change (Full Replacement)', href: '/services/lock-change/' },
              { label: 'Deadbolt Installation', href: '/services/deadbolt-installation/' },
              { label: 'Residential Locksmith', href: '/services/residential-locksmith/' },
              { label: 'Key Duplication', href: '/services/key-duplication/' },
              { label: 'All Services', href: '/services/' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-brand-navy text-sm font-medium hover:text-brand-amber transition-colors">
                <ArrowRight size={14} className="text-brand-amber shrink-0" aria-hidden="true" />{link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection
        title="Schedule a Rekeying Appointment"
        subtitle="Same-day service available throughout Brooklyn. Fill out the form or call directly."
      />
    </>
  )
}
