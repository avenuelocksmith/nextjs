import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, AlertTriangle, Key } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildServiceMetadata } from '@/lib/seo'
import { BUSINESS, LOCK_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildServiceMetadata({
  serviceName: 'Key Duplication',
  path: '/services/key-duplication/',
  customTitle: 'Key Duplication in Brooklyn, NY — Standard, High-Security & Restricted Keys | Avenue Locksmith',
  customDescription: 'Key duplication in Brooklyn, NY. Standard house keys, restricted high-security keys, and car key cutting. Why hardware store copies fail — and how we do it right. Call (347) 386-7164.',
})

const FAQS = [
  {
    question: 'Why did the key I copied at a hardware store not work?',
    answer: 'Hardware store key machines use worn blanks and optical tracers that follow the profile of your original key — but your original key may itself be worn. A worn key cuts a worn copy. Additionally, hardware stores stock a limited range of blanks and often substitute a "close enough" blank that is slightly off. A professional locksmith uses a dedicated code cutter calibrated to the lock manufacturer\'s original specifications, not to the profile of your worn key. We cut to spec, not to your worn original.',
  },
  {
    question: 'What are restricted keys and can you duplicate them?',
    answer: 'Restricted keys — used in Medeco, Mul-T-Lock, Abloy, and Schlage Primus systems — have a patented keyway profile that licensed locksmiths are authorized to cut but hardware stores are not. The system works like this: the manufacturer licenses the keyway to authorized dealers, and each key is tied to an owner authorization card. We can duplicate restricted keys with the original key and your authorization card. If you do not have the authorization card (usually given when the lock was first installed), we may be able to contact the original supplier to verify ownership.',
  },
  {
    question: 'My landlord says I cannot make copies of my apartment key — is that legal in NYC?',
    answer: 'This is a common lease provision. Under New York Real Property Law, landlords can include lease clauses prohibiting key duplication, and many leases require that any copies be made only by the landlord\'s authorized locksmith. If your lease contains this language, violating it could technically be a lease breach. That said, NYC Administrative Code §27-2043 also gives tenants certain rights around their own security. If you are unsure whether your specific lease allows duplication, check the lease language directly.',
  },
  {
    question: 'Can you cut a key without the original?',
    answer: 'Yes — we can cut a key from the lock itself (impressioning or decoding the lock cylinder) or from the lock\'s manufacturer code if you have the key code (usually stamped on the original key or in documentation provided when the lock was first installed). Key-by-code is the most accurate method and produces a factory-spec key. This is more expensive than copying an existing key but is useful for lost keys or situations where the existing copy is too worn to copy accurately.',
  },
  {
    question: 'How much does key duplication cost in Brooklyn?',
    answer: 'Standard house and apartment keys: $5–$10 per copy. Medeco and Mul-T-Lock restricted keys: $25–$65 per copy (includes authorization verification). Abloy disc detainer keys: $35–$75. Basic (non-transponder) car key cutting: $10–$25 blade cut only. Transponder car key programming is a separate service — see our Auto Locksmith page for car key pricing.',
  },
]

const KEY_TYPES = [
  { type: 'Standard residential keys', brands: 'Schlage, Kwikset, Weiser, Yale, Corbin', price: '$5–$10', note: 'Same-day, in-stock blanks' },
  { type: 'Office & commercial keys', brands: 'Arrow, Corbin Russwin, Sargent, Best', price: '$8–$15', note: 'Professional-grade cuts' },
  { type: 'Padlock keys', brands: 'Master Lock, American Lock, Abus', price: '$5–$10', note: 'Standard and rekeyable' },
  { type: 'Mailbox cam lock keys', brands: 'CompX, Olympus, CCL', price: '$8–$12', note: 'Apartment mailbox specialists' },
  { type: 'Restricted / high-security', brands: 'Medeco, Mul-T-Lock, Abloy', price: '$25–$75', note: 'Authorization card required' },
  { type: 'Basic car key blade', brands: 'All major makes', price: '$10–$25', note: 'Physical cut only; chip programming separate' },
]

export default function KeyDuplicationPage() {
  const canonicalUrl = `${BUSINESS.url}/services/key-duplication/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Key Duplication in Brooklyn, NY',
    description: 'Professional key duplication in Brooklyn, NY. Standard house keys, restricted high-security key duplication, and car key cutting. Calibrated machines, not worn hardware store copies.',
    url: canonicalUrl,
    serviceType: 'Key Duplication',
    provider: {
      '@type': 'Locksmith',
      '@id': BUSINESS.entityId,
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: BUSINESS.url,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        postalCode: BUSINESS.address.zip,
        addressCountry: 'US',
      },
    },
    areaServed: { '@type': 'City', name: 'Brooklyn', sameAs: 'https://en.wikipedia.org/wiki/Brooklyn' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      priceRange: '$5–$75',
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
        { name: 'Key Duplication', url: '/services/key-duplication/' },
      ])} />
      <JsonLd data={getServiceSchema({ name: 'Key Duplication', description: 'Professional key duplication in Brooklyn, NY. Standard house keys, restricted high-security key duplication, and car key cutting. Calibrated machines, not worn hardware store copies.', url: '/services/key-duplication/', serviceType: 'Key Duplication', brands: LOCK_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Key Duplication in Brooklyn, NY — Standard, High-Security & Restricted Keys | Avenue Locksmith', description: 'Key duplication in Brooklyn, NY. Standard house keys, restricted high-security keys, and car key cutting. Why hardware store copies fail — and how we do it right. Call (347) 386-7164.', url: '/services/key-duplication/' })} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Key Duplication' },
      ]} />

      <HeroSection
        h1="Key Duplication in Brooklyn, NY — Standard, High-Security & Restricted Keys"
        subheadline="Professional key cutting — not the worn-blank guesswork of a hardware store. We cut to manufacturer specification, handle restricted keyways, and come to you."
        variant="service"
        showTrustBar
      />

      {/* Why hardware store keys fail — unique angle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            Why Hardware Store Key Copies Often Do Not Work
          </h2>
          <p className="text-brand-text leading-relaxed mb-4">
            The self-service key machines at hardware stores use an optical tracer that copies the exact profile of the key you insert. If your original key is worn — which most keys are after a few years of use — the machine cuts a copy of a worn key. That copy works poorly, and copies of the copy work even worse.
          </p>
          <p className="text-brand-text leading-relaxed mb-6">
            Professional locksmiths use code-based cutting machines calibrated to the original manufacturer&apos;s depth and spacing specifications. We cut to the lock specification, not to your worn key. The result is a copy that works as well as a new key from the manufacturer.
          </p>

          <div className="bg-brand-bg rounded-xl border border-brand-border p-5 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-brand-navy mb-1">The restricted key exception</p>
                <p className="text-brand-text text-sm leading-relaxed">
                  Medeco, Mul-T-Lock, and Abloy keys use patented keyway profiles that hardware stores are not licensed to cut — by design. These keys are a security feature: they cannot be duplicated without authorization. If you have a high-security lock and need spare keys, you must go to an authorized dealer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-5">Key Types & Pricing</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="text-left p-3 rounded-tl-lg">Key Type</th>
                  <th className="text-left p-3">Common Brands</th>
                  <th className="text-left p-3">Price</th>
                  <th className="text-left p-3 rounded-tr-lg">Notes</th>
                </tr>
              </thead>
              <tbody>
                {KEY_TYPES.map((k, i) => (
                  <tr key={k.type} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-bg'}>
                    <td className="p-3 font-medium text-brand-navy">{k.type}</td>
                    <td className="p-3 text-brand-muted text-xs">{k.brands}</td>
                    <td className="p-3 font-bold text-brand-navy">{k.price}</td>
                    <td className="p-3 text-brand-muted text-xs">{k.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-brand-muted text-xs mt-3">Bulk pricing available for landlords needing 10+ copies. We come to your building for sets of 20+.</p>
        </div>
      </section>

      {/* What we cut */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-brand-navy mb-5">Key Services Available</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Key copy from original', body: 'Fastest method — bring your original key' },
              { label: 'Key-by-code', body: 'Cut from manufacturer code when original is lost or too worn' },
              { label: 'Impressioning', body: 'Cut from the lock cylinder without any original key' },
              { label: 'Restricted key duplication', body: 'High-security keys with authorization card' },
              { label: 'Bulk key sets', body: 'Multiple identical copies for landlords and property managers' },
              { label: 'Mobile key cutting', body: 'We come to your building — van-mounted cutting machine' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 bg-brand-bg rounded-xl p-4 border border-brand-border">
                <Key size={14} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-brand-navy text-sm">{item.label}</p>
                  <p className="text-brand-muted text-xs">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Key Duplication FAQ — Brooklyn Key Cutting Questions" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Lock Rekeying', href: '/services/lock-rekey/' },
              { label: 'Auto Locksmith — Car Key Programming', href: '/services/auto-locksmith/' },
              { label: 'High-Security Lock Installation', href: '/services/security-solutions/high-security-locks/' },
              { label: 'Mailbox Lock Replacement', href: '/services/mailbox-lock/' },
              { label: 'New Tenant Lock Change', href: '/services/new-tenant-lock-change/' },
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
        title="Need Keys Cut in Brooklyn?"
        subtitle="Tell us how many copies and the key type — we come to you."
      />
    </>
  )
}
