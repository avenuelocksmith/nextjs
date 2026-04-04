import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Fingerprint } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS, SECURITY_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Biometric Access Systems in Brooklyn, NY — Fingerprint & Facial Recognition | Avenue Locksmith',
  description: 'Biometric access system installation in Brooklyn, NY. Fingerprint scanners and facial recognition for high-security areas. HIPAA-relevant applications. NYC commercial specialists. Call (347) 386-7164.',
  path: '/services/security-solutions/biometric-access-system/',
})

const FAQS = [
  {
    question: 'When does biometric access make sense versus a keycard or PIN system?',
    answer: 'Biometric access makes sense when you need to guarantee that the specific person whose credential it is is the one entering — not someone who borrowed their card or knows their PIN. Cards can be shared, loaned, or stolen. PINs can be observed, shared, or guessed. A fingerprint cannot be delegated. The use cases where this matters: server rooms where accountability for every entry event is required, medical records areas where HIPAA breach liability is real, pharmaceutical storage, and executive offices where only specific individuals should ever have access. For general office entry, a keycard system is usually sufficient and much simpler to administer.',
  },
  {
    question: 'Are biometric systems subject to any specific NYC regulations?',
    answer: 'New York City Local Law 144 (effective July 2023) regulates biometric access control in commercial establishments that are open to the public. If your business collects biometric identifiers from customers or the public, you must post conspicuous notice. For purely internal employee access systems (server rooms, employee-only areas), different considerations apply. Medical facilities storing biometric data have HIPAA implications. We advise clients on the regulatory context for their specific use case — when we cannot answer with certainty, we refer you to appropriate legal counsel.',
  },
  {
    question: 'What happens if an employee\'s fingerprint is rejected — false negatives?',
    answer: 'Modern capacitive fingerprint scanners have false rejection rates typically under 0.1% per scan attempt. A fingerprint that registers as unrecognized is almost always due to a dry, wet, or injured finger. Most systems allow a second try automatically. All biometric installations we do include a backup access method — PIN, card, or physical key override — so a false rejection is an inconvenience, not a lockout. Systems for 10+ users also allow enrolling multiple fingers per person for increased reliability.',
  },
  {
    question: 'Can biometric data be hacked or extracted from the device?',
    answer: 'Quality biometric access systems do not store actual fingerprint images — they store a mathematical template derived from the fingerprint. This template cannot be reverse-engineered into a usable fingerprint. Data is typically stored locally on the device (not in the cloud) and encrypted. The practical attack vector for a biometric system is physical — someone forcing access, not extracting data remotely. For facilities requiring the highest data security, we install certified devices that meet FIPS 201 (Personal Identity Verification) standards.',
  },
  {
    question: 'How long does biometric system installation take?',
    answer: 'A single-door biometric lock installation takes 2–4 hours including device installation, enrollment of all users, and backup access configuration. Multi-door or enterprise systems take longer. User enrollment — scanning each authorized person\'s fingerprint into the system — is typically done in batches and takes 3–5 minutes per person. We can do enrollment on-site during a scheduled session or configure remote enrollment for distributed teams.',
  },
]

const USE_CASES = [
  { area: 'Server rooms & data centers', reason: 'Entry accountability, audit trail for compliance' },
  { area: 'Medical records areas', reason: 'HIPAA access control requirements' },
  { area: 'Pharmacy & controlled substances', reason: 'DEA and state pharmacy board compliance' },
  { area: 'Executive offices & board rooms', reason: 'Highest sensitivity — no credential delegation' },
  { area: 'Cash handling rooms', reason: 'Accountability for access to high-value areas' },
  { area: 'R&D and IP-sensitive areas', reason: 'Trade secret protection' },
  { area: 'High-security residential', reason: 'Luxury properties, high-net-worth clients' },
  { area: 'Firearms storage', reason: 'Access accountability and compliance' },
]

export default function BiometricAccessPage() {
  const canonicalUrl = `${BUSINESS.url}/services/security-solutions/biometric-access-system/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Biometric Access Systems in Brooklyn, NY',
    description: 'Biometric access system installation in Brooklyn, NY. Fingerprint scanners and facial recognition for server rooms, medical facilities, and high-security areas. NYC Local Law 144 compliant.',
    url: canonicalUrl,
    serviceType: 'Biometric Access System',
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
      priceRange: '$500–$3,000',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={getServiceSchema({ name: 'Biometric Access Systems', description: 'Biometric access system installation in Brooklyn, NY. Fingerprint scanners and facial recognition for server rooms, medical facilities, and high-security areas. NYC Local Law 144 compliant.', url: '/services/security-solutions/biometric-access-system/', serviceType: 'Biometric Access Systems', brands: SECURITY_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Biometric Access Systems in Brooklyn, NY — Fingerprint & Facial Recognition | Avenue Locksmith', description: 'Biometric access system installation in Brooklyn, NY. Fingerprint scanners and facial recognition for high-security areas. HIPAA-relevant applications. NYC commercial specialists. Call (347) 386-7164.', url: '/services/security-solutions/biometric-access-system/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services/' },
        { name: 'Security Solutions', url: '/services/security-solutions/' },
        { name: 'Biometric Access Systems', url: '/services/security-solutions/biometric-access-system/' },
      ])} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Security Solutions', href: '/services/security-solutions/' },
        { label: 'Biometric Access Systems' },
      ]} />

      <HeroSection
        h1="Biometric Access Systems in Brooklyn, NY — Fingerprint & Facial Recognition"
        subheadline="The only access credential that cannot be shared, lent, or stolen. Fingerprint and facial recognition entry for Brooklyn businesses with high-accountability requirements."
        variant="service"
        showTrustBar
      />

      {/* When biometric is right — unique angle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            When Biometric Is the Right Choice — and When It Is Not
          </h2>
          <p className="text-brand-text leading-relaxed mb-4">
            Biometric access is the right choice when you need certainty that the specific authorized person is the one entering — not a card holder, not someone who knows a PIN. The credential cannot be delegated. Every entry event is attributed to a specific person with certainty.
          </p>
          <p className="text-brand-text leading-relaxed mb-6">
            Biometric is usually overkill for general office access. If your goal is to control who can enter the building (not track who specifically did), a keycard system is simpler, cheaper, and easier to administer. Reserve biometric for the highest-sensitivity areas.
          </p>

          <h3 className="font-bold text-brand-navy mb-4">Where Biometric Access Is Justified</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {USE_CASES.map((item) => (
              <div key={item.area} className="flex items-start gap-3 bg-brand-bg rounded-xl p-4 border border-brand-border">
                <Fingerprint size={14} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-brand-navy text-sm">{item.area}</p>
                  <p className="text-brand-muted text-xs">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System types */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-brand-navy mb-5">Biometric System Types We Install</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Fingerprint Scanners', body: 'Optical and capacitive sensors. Most common, fast, and accurate for up to 1,000+ users. Works in most environmental conditions.' },
              { title: 'Facial Recognition', body: 'Camera-based, hands-free entry. Ideal for high-traffic entry points where contact-free is preferred. Requires proper lighting.' },
              { title: 'Multi-Factor Systems', body: 'Biometric + PIN or biometric + card. The highest security configuration — two independent credentials required.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-4 border border-brand-border">
                <h3 className="font-bold text-brand-navy mb-1 text-sm">{item.title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-white rounded-xl border border-brand-border p-4">
            <p className="text-sm text-brand-text">
              <span className="font-bold text-brand-navy">NYC Local Law 144 note:</span> If your biometric system collects data from customers or the public (not just employees), posting conspicuous notice is required. We advise on compliance requirements for your specific installation.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Biometric Access FAQ — Technical & Compliance Questions" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Access Control Systems', href: '/services/security-solutions/access-control-systems/' },
              { label: 'CCTV Installation', href: '/services/security-solutions/cctv-installation/' },
              { label: 'Commercial Locksmith', href: '/services/commercial-locksmith/' },
              { label: 'High-Security Locks', href: '/services/security-solutions/high-security-locks/' },
              { label: 'All Security Solutions', href: '/services/security-solutions/' },
              { label: 'Smart Locks', href: '/services/security-solutions/smart-locks/' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-brand-navy text-sm font-medium hover:text-brand-amber transition-colors">
                <ArrowRight size={14} className="text-brand-amber shrink-0" aria-hidden="true" />{link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection
        title="Get a Biometric Access Consultation"
        subtitle="Describe the area and security requirement — we design the right system."
      />
    </>
  )
}
