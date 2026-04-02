import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, AlertTriangle, Mail } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/schema'
import { buildServiceMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildServiceMetadata({
  serviceName: 'Mailbox Lock Replacement',
  path: '/services/mailbox-lock/',
  customTitle: 'Mailbox Lock Replacement in Brooklyn, NY — Lost Key & Building Mailboxes | Avenue Locksmith',
  customDescription: 'Mailbox lock replacement in Brooklyn, NY. Lost mailbox key, broken cam lock, building-wide rekey. Identity theft risk from unsecured mailboxes — same-day service. Call (347) 386-7164.',
})

const FAQS = [
  {
    question: 'Someone got into my mailbox — is that just a lost key issue or a bigger security problem?',
    answer: 'Mailbox theft in NYC is more serious than most people realize. Mail theft is a federal crime, but more importantly, your mailbox contains a steady stream of sensitive documents: bank statements, credit card offers (which can be used to open accounts in your name), government correspondence, prescription medications, and checks. A compromised mailbox is often the first step in identity theft. If you believe someone accessed your mailbox without authorization, report it to USPS Postal Inspection Service (1-877-876-2455) and replace the lock immediately.',
  },
  {
    question: 'What is the difference between a USPS cluster box and a building mailbox that you can replace?',
    answer: 'USPS Cluster Box Units (CBUs) — the standard blue or grey metal cluster mailboxes common in newer construction — are USPS property. The USPS controls the master door lock; individual tenant compartment issues go through USPS directly. Building mailbox banks — the older lobby-mounted wooden or metal rows common in Brooklyn apartment buildings — are building property. The individual cam locks in these mailboxes are the building owner\'s responsibility and can be replaced by a locksmith. Call your super to confirm which type you have.',
  },
  {
    question: 'Can you replace just one mailbox lock in a building, or does the whole bank need to be done?',
    answer: 'We can replace a single mailbox cam lock — no need to touch the other units. We carry a range of standard cam lock sizes (typically 3/4" and 7/8" face diameters are most common in Brooklyn building mailboxes). We open the lock with a pick or extraction tool, remove the cam lock, and install a matching replacement with new keys. Time: under 15 minutes for a single replacement.',
  },
  {
    question: 'As a landlord, when should I replace all mailbox locks?',
    answer: 'Every time a tenant turns over. Former tenants have their key and may have made copies. Mailbox lock replacement should be part of your standard unit turnover checklist — along with apartment lock rekeying. We offer building-rate pricing for landlords doing multiple units in a single visit. Call for volume quotes.',
  },
  {
    question: 'How much does mailbox lock replacement cost in Brooklyn?',
    answer: 'A single mailbox cam lock replacement is $45–$75 including the new lock and two keys. We charge a service call fee for a single lock but waive it when bundled with apartment rekeying or any other lock work in the same visit. Building-wide replacements (5+ units) start at $35 per lock. Call for a quote based on your unit count.',
  },
]

export default function MailboxLockPage() {
  const canonicalUrl = `${BUSINESS.url}/services/mailbox-lock/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Mailbox Lock Replacement in Brooklyn, NY',
    description: 'Mailbox lock replacement in Brooklyn, NY. Individual cam lock replacement for tenants and building-wide rekey for landlords. Protects against mail theft and identity theft. Same-day service.',
    url: canonicalUrl,
    serviceType: 'Mailbox Lock Service',
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
      priceRange: '$45–$200',
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
        { name: 'Mailbox Lock', url: '/services/mailbox-lock/' },
      ])} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Mailbox Lock Replacement' },
      ]} />

      <HeroSection
        h1="Mailbox Lock Replacement in Brooklyn, NY — Lost Key & Building-Wide Rekey"
        subheadline="An unsecured mailbox is an identity theft risk. Lost key, broken cam lock, or full building rekey — same-day service for tenants and landlords across Brooklyn."
        variant="service"
        showTrustBar
      />

      {/* Mail theft context — unique angle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            Why Your Mailbox Lock Matters More Than You Think
          </h2>
          <p className="text-brand-text leading-relaxed mb-4">
            Most people think of mailbox security as a minor convenience issue. It is not. Your apartment mailbox receives a continuous stream of documents that are goldmines for identity thieves: bank statements, tax documents, insurance correspondence, pre-approved credit card offers, replacement debit cards, and sometimes prescription medications.
          </p>
          <p className="text-brand-text leading-relaxed mb-6">
            Mail theft is a federal offense under 18 U.S.C. § 1708, but prosecution requires catching the person in the act. The more practical protection is a functioning lock. In Brooklyn apartment buildings, mailbox cam locks are often decades old — prone to picking, worn enough to open with any similar key, or simply broken. Replacing the lock is a $45–$75 investment that closes a significant vulnerability.
          </p>

          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} className="text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-red-900 mb-1">If you suspect mailbox tampering</p>
                <p className="text-red-800 text-sm leading-relaxed">
                  Contact USPS Postal Inspection Service at 1-877-876-2455 and file a report. Place a mail hold through USPS if you are traveling. Then call us to replace the lock — report the incident to establish a record.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Lost mailbox key', detail: 'Replace lock and get two new keys — $45–$75' },
              { label: 'Broken or seized cam lock', detail: 'Extraction and replacement — same visit' },
              { label: 'Building-wide rekey (tenant turnover)', detail: 'Volume pricing — call for quote' },
              { label: 'Post-eviction mailbox change', detail: 'Former tenant\'s key stopped — same day' },
              { label: 'New tenant move-in package', detail: 'Bundle with apartment rekeying for best value' },
              { label: 'Upgrade to high-security cam lock', detail: 'Harder-to-pick replacements available' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 bg-brand-bg rounded-xl p-4 border border-brand-border">
                <Mail size={14} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-brand-navy text-sm">{item.label}</p>
                  <p className="text-brand-muted text-xs">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landlord section */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-brand-navy mb-4">For Brooklyn Landlords & Building Managers</h2>
          <div className="bg-white rounded-xl border border-brand-border p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-brand-navy mb-2 text-sm">What we offer:</h3>
                <ul className="space-y-1.5">
                  {[
                    'Single-unit mailbox replacement at tenant request',
                    'Building-wide rekey between tenancies',
                    'Volume pricing — 5+ locks',
                    'Written receipt for every lock changed',
                    'Coordination with building super',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-brand-text">
                      <CheckCircle size={12} className="text-brand-amber shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-navy mb-2 text-sm">When to replace:</h3>
                <ul className="space-y-1.5">
                  {[
                    'Every tenant turnover — always',
                    'Post-eviction (before new tenancy)',
                    'Lock is visibly worn or easy to open',
                    'Tenant reports mailbox tampering',
                    'Lost key — no copies available',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-brand-text">
                      <CheckCircle size={12} className="text-brand-amber shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Mailbox Lock FAQ — Brooklyn Tenants & Landlords" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'New Tenant Lock Change', href: '/services/new-tenant-lock-change/' },
              { label: 'Eviction Locksmith', href: '/services/eviction-locksmith/' },
              { label: 'Lock Rekeying', href: '/services/lock-rekey/' },
              { label: 'Key Duplication', href: '/services/key-duplication/' },
              { label: 'Residential Locksmith', href: '/services/residential-locksmith/' },
              { label: 'All Services', href: '/services/' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-brand-navy text-sm font-medium hover:text-brand-amber transition-colors">
                <ArrowRight size={14} className="text-brand-amber shrink-0" aria-hidden="true" />{link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Need a Mailbox Lock Replaced in Brooklyn?</h2>
          <p className="text-white/80 mb-8">Same-day and next-day service. Quick job — under 15 minutes per lock.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl">
            <Phone size={26} aria-hidden="true" />{BUSINESS.phone}
          </a>
        </div>
      </section>

      <ContactFormSection
        title="Schedule Mailbox Lock Service"
        subtitle="Single lock or building-wide — we quote before we start."
      />
    </>
  )
}
