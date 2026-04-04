import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Cpu, Users } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS, SECURITY_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Access Control Systems in Brooklyn, NY — Keycard, Fob & Cloud Entry | Avenue Locksmith',
  description: 'Access control system installation in Brooklyn, NY. Keycard, key fob, PIN, cloud-managed entry. Audit trails, instant revocation, remote management. Kisi, Brivo, Salto. Call (347) 386-7164.',
  path: '/services/security-solutions/access-control-systems/',
})

const FAQS = [
  {
    question: 'We just fired an employee with building access — how fast can we revoke their access?',
    answer: 'With a cloud-based access control system (Kisi, Brivo, Salto), you revoke access in under 60 seconds from any browser or phone app. You log in, find the employee credential, and delete it. Their keycard or fob is immediately dead — no need to collect the card, change locks, or wait for a locksmith. This is the primary business case for electronic access control. For comparison, if you have a traditional key lock system and fire an employee today, you either hope they return the key or you rekey every lock they had access to.',
  },
  {
    question: 'What does an audit trail from an access control system actually tell you?',
    answer: 'Every access event — door opened, credential attempted, access denied — is logged with a timestamp and credential ID. For incident investigations: "who was in the building at 2 AM last Tuesday" becomes a one-minute query instead of a guessing exercise. For compliance: medical offices (HIPAA), law offices, and financial services businesses have specific requirements around access logging. For HR: if an employee claims they were in the office at a certain time, the access log is verifiable. We help clients understand what data the system collects and how to query it.',
  },
  {
    question: 'Is access control only for large businesses or can a 5-person startup use it?',
    answer: 'Small businesses are actually the fastest-growing access control segment. Cloud-based systems like Kisi start at under $50/month for a small number of doors. For a 5-person office, the benefits are immediate: no physical key management, remote access for deliveries or after-hours contractors, and instant credential changes when team members come and go. Setup takes half a day. You manage everything from a browser with no dedicated IT staff.',
  },
  {
    question: 'Can access control systems integrate with my existing door hardware?',
    answer: 'In many cases, yes. We retrofit existing door frames with electronic strike plates (fail-safe or fail-secure depending on your fire code requirement) or magnetic locks, keeping your existing door hardware. Some systems also integrate with existing intercom systems. We assess your doors and determine whether to retrofit or replace hardware — and we design around your fire egress requirements, which vary by building type.',
  },
  {
    question: 'What is the difference between cloud-based and on-premise access control?',
    answer: 'Cloud-based systems (Kisi, Brivo, Salto Space) store access data and credential management on the vendor\'s servers. You manage from any browser, get automatic software updates, and can grant temporary access remotely. The tradeoff: you depend on internet connectivity and the vendor\'s uptime. On-premise systems store data on a server at your location. You control the data completely, but need someone to manage the hardware. For most Brooklyn businesses, cloud-based is the right choice — the management simplicity far outweighs the control tradeoff.',
  },
]

const PLATFORMS = [
  { name: 'Kisi', type: 'Cloud-based', best: 'Small-medium businesses', feature: 'Mobile app entry, API integrations' },
  { name: 'Brivo', type: 'Cloud-based', best: 'Multi-site businesses', feature: 'Enterprise-grade, extensive reporting' },
  { name: 'Salto', type: 'Cloud & on-premise', best: 'Hotels & multi-unit buildings', feature: 'Wireless lock system, no wiring' },
  { name: 'LenelS2', type: 'On-premise / hybrid', best: 'Large commercial', feature: 'Full enterprise, video integration' },
]

export default function AccessControlPage() {
  const canonicalUrl = `${BUSINESS.url}/services/security-solutions/access-control-systems/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Access Control Systems in Brooklyn, NY',
    description: 'Access control system installation in Brooklyn, NY. Keycard, fob, PIN, and cloud-managed entry for businesses and buildings. Audit trails, instant credential revocation, remote management.',
    url: canonicalUrl,
    serviceType: 'Access Control System',
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
      priceRange: '$500–$5,000',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={getServiceSchema({ name: 'Access Control Systems', description: 'Access control system installation in Brooklyn, NY. Keycard, fob, PIN, and cloud-managed entry for businesses and buildings. Audit trails, instant credential revocation, remote management.', url: '/services/security-solutions/access-control-systems/', serviceType: 'Access Control Systems', brands: SECURITY_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Access Control Systems in Brooklyn, NY — Keycard, Fob & Cloud Entry | Avenue Locksmith', description: 'Access control system installation in Brooklyn, NY. Keycard, key fob, PIN, cloud-managed entry. Audit trails, instant revocation, remote management. Kisi, Brivo, Salto. Call (347) 386-7164.', url: '/services/security-solutions/access-control-systems/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services/' },
        { name: 'Security Solutions', url: '/services/security-solutions/' },
        { name: 'Access Control Systems', url: '/services/security-solutions/access-control-systems/' },
      ])} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Security Solutions', href: '/services/security-solutions/' },
        { label: 'Access Control Systems' },
      ]} />

      <HeroSection
        h1="Access Control Systems in Brooklyn, NY — Keycard, Fob & Cloud Entry"
        subheadline="Physical keys cannot be revoked in 60 seconds. Access control systems can. Audit trails, remote management, and instant credential changes for Brooklyn businesses."
        variant="service"
        showTrustBar
      />

      {/* Employee lifecycle angle — unique */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            The Employee Access Problem — Why Physical Keys Fail Modern Businesses
          </h2>
          <p className="text-brand-text leading-relaxed mb-4">
            Every employee who has ever worked at your Brooklyn business and had a key is a potential ongoing security risk. Keys get copied. People forget to return them. A terminated employee who returns the key may have made a copy. You cannot know what you do not know.
          </p>
          <p className="text-brand-text leading-relaxed mb-6">
            Access control systems solve this at the source. When an employee starts, you create a credential. When they leave — voluntarily or not — you delete it in under a minute. No rekeying, no key collection, no uncertainty. Every entry is logged. If something goes wrong, you have a complete audit trail.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              { label: 'Instant credential revocation — 60 seconds', icon: Users },
              { label: 'Complete entry audit trail with timestamps', icon: CheckCircle },
              { label: 'Time-based access restrictions per employee', icon: CheckCircle },
              { label: 'Remote management from any browser', icon: Cpu },
              { label: 'Temporary access for contractors & visitors', icon: CheckCircle },
              { label: 'Multi-door & multi-site management', icon: CheckCircle },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 bg-brand-bg rounded-lg p-3 border border-brand-border">
                <item.icon size={15} className="text-brand-amber shrink-0" aria-hidden="true" />
                <span className="text-brand-text text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-brand-navy mb-5">Platforms We Install & Configure</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PLATFORMS.map((p) => (
              <div key={p.name} className="bg-white rounded-xl p-4 border border-brand-border">
                <p className="font-bold text-brand-navy mb-1">{p.name}</p>
                <p className="text-brand-muted text-xs mb-1"><span className="font-medium text-brand-navy">Type:</span> {p.type}</p>
                <p className="text-brand-muted text-xs mb-1"><span className="font-medium text-brand-navy">Best for:</span> {p.best}</p>
                <p className="text-brand-muted text-xs"><span className="font-medium text-brand-navy">Feature:</span> {p.feature}</p>
              </div>
            ))}
          </div>
          <p className="text-brand-muted text-xs mt-4">We can work with your existing hardware in many retrofit scenarios — we assess your doors before recommending a platform.</p>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Access Control FAQ — Brooklyn Business Questions" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Commercial Locksmith', href: '/services/commercial-locksmith/' },
              { label: 'CCTV Installation', href: '/services/security-solutions/cctv-installation/' },
              { label: 'Biometric Access Systems', href: '/services/security-solutions/biometric-access-system/' },
              { label: 'Smart Locks', href: '/services/security-solutions/smart-locks/' },
              { label: 'High-Security Locks', href: '/services/security-solutions/high-security-locks/' },
              { label: 'All Security Solutions', href: '/services/security-solutions/' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-brand-navy text-sm font-medium hover:text-brand-amber transition-colors">
                <ArrowRight size={14} className="text-brand-amber shrink-0" aria-hidden="true" />{link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection
        title="Get an Access Control Consultation"
        subtitle="Describe your business and how many doors need coverage — we'll design the right system."
      />
    </>
  )
}
