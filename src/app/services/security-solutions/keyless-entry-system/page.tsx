import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Key } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS, SECURITY_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Keyless Entry Systems in Brooklyn, NY — Keypad Locks & Code Entry | Avenue Locksmith',
  description: 'Keyless entry system installation in Brooklyn, NY. Keypad door locks, multiple user codes, automatic code expiry. Perfect for rentals, Airbnb, and offices. Call (347) 386-7164.',
  path: '/services/security-solutions/keyless-entry-system/',
})

const FAQS = [
  {
    question: 'I manage several Brooklyn rental units — how does a keyless system change my workflow?',
    answer: 'The biggest change is eliminating physical key management. Currently your workflow probably includes: cutting keys for new tenants, hoping they return them at move-out, occasionally rekeying when keys go missing, and periodic lockout calls. With a keypad lock, your workflow becomes: generate a new code for the incoming tenant, text it to them, delete the previous tenant\'s code. No key cutting, no rekeying, no lockout calls because they forgot their key. You can also set a maintenance code for your super that you can audit or delete any time.',
  },
  {
    question: 'What happens if the keypad battery dies and I cannot enter my apartment?',
    answer: 'We configure backup access for every installation — this is non-negotiable. Standard keypad deadbolts include a physical key cylinder as backup. Electronic keypad locks also have a low-battery warning that activates at around 20% power and gives you several weeks of remaining use. For keypad locks without a key cylinder (less common), most have a 9V battery terminal on the outside where you can touch a fresh battery to power the unit long enough to enter and replace the batteries. We walk you through the backup procedure during installation.',
  },
  {
    question: 'Can I have different codes for different people?',
    answer: 'Yes — most keypad locks support 10–100 user codes depending on the model. You can have separate codes for each adult in your household, a cleaning service code that only works on Thursdays, a dog walker code, and a guest code that expires when they leave. Deleting any single code does not affect other codes. More sophisticated systems (like Schlage Encode or Yale via app) let you set time-based restrictions per code — for example, the cleaning service code only works from 10 AM–4 PM on weekdays.',
  },
  {
    question: 'How is a keyless entry system different from a smart lock?',
    answer: 'Keyless entry describes any lock that does not require a physical key — it includes keypad locks, RFID fob systems, and smart locks. Smart locks specifically connect to your phone via Bluetooth or WiFi for remote management and additional features like remote unlocking. A keypad-only deadbolt (like a basic Schlage Camelot keypad) is a keyless entry system but not a smart lock — it has no app, no remote access, but is simpler and does not require a smartphone or Wi-Fi to function reliably. For rental properties without consistent Wi-Fi, a keypad-only system is often more reliable.',
  },
  {
    question: 'Is a keypad lock as secure as a traditional deadbolt?',
    answer: 'Yes — quality keypad deadbolts like Schlage B-series are ANSI Grade 1 rated, the same as the best traditional deadbolts. The electronic component adds the convenience features; the physical security (bolt strength, anti-drill, anti-pick) is equivalent to a non-electronic Grade 1 lock. A 4–6 digit code on a quality keypad is not easily guessed by shoulder-surfing or brute force. Wear patterns on frequently used digits can sometimes reveal the code — easily solved by periodically changing the code.',
  },
]

export default function KeylessEntryPage() {
  const canonicalUrl = `${BUSINESS.url}/services/security-solutions/keyless-entry-system/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Keyless Entry Systems in Brooklyn, NY',
    description: 'Keyless entry system installation in Brooklyn, NY. Keypad door locks and code-entry systems for homes, rentals, and businesses. Multiple user codes, automatic expiry, physical key backup.',
    url: canonicalUrl,
    serviceType: 'Keyless Entry System',
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
      priceRange: '$125–$350',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={getServiceSchema({ name: 'Keyless Entry Systems', description: 'Keyless entry system installation in Brooklyn, NY. Keypad door locks and code-entry systems for homes, rentals, and businesses. Multiple user codes, automatic expiry, physical key backup.', url: '/services/security-solutions/keyless-entry-system/', serviceType: 'Keyless Entry Systems', brands: SECURITY_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Keyless Entry Systems in Brooklyn, NY — Keypad Locks & Code Entry | Avenue Locksmith', description: 'Keyless entry system installation in Brooklyn, NY. Keypad door locks, multiple user codes, automatic code expiry. Perfect for rentals, Airbnb, and offices. Call (347) 386-7164.', url: '/services/security-solutions/keyless-entry-system/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services/' },
        { name: 'Security Solutions', url: '/services/security-solutions/' },
        { name: 'Keyless Entry Systems', url: '/services/security-solutions/keyless-entry-system/' },
      ])} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Security Solutions', href: '/services/security-solutions/' },
        { label: 'Keyless Entry Systems' },
      ]} />

      <HeroSection
        h1="Keyless Entry Systems in Brooklyn, NY — Keypad Locks & Code Entry"
        subheadline="No keys to lose, no lockouts, no rekeying between tenants. Multiple user codes, time-based restrictions, and auto-expiry — installed same-day across Brooklyn."
        variant="service"
        showTrustBar
      />

      {/* Rental workflow — unique angle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            Why Brooklyn Landlords and Airbnb Hosts Switch to Keyless
          </h2>
          <p className="text-brand-text leading-relaxed mb-6">
            Physical key management for rental properties is a recurring operational headache: keys get lost, tenants lock themselves out at 2 AM, you rekey between tenants, you deal with spare key logistics for maintenance. Keyless entry does not eliminate all these problems — but it dramatically reduces them.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-brand-bg rounded-xl p-5 border border-brand-border">
              <h3 className="font-bold text-brand-navy mb-3 text-sm">With physical keys:</h3>
              <ul className="space-y-1.5">
                {['Lost key calls disrupt your schedule', 'Rekeying required between every tenancy', 'No record of who came and went', 'Spare key logistics for maintenance', 'Lockout emergencies at all hours'].map((i) => (
                  <li key={i} className="text-brand-muted text-xs flex gap-1.5 items-start">
                    <span className="text-red-400 shrink-0">✗</span>{i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h3 className="font-bold text-green-900 mb-3 text-sm">With keyless entry:</h3>
              <ul className="space-y-1.5">
                {['Tenant enters code — no lockout calls', 'Change code between tenants in 2 minutes', 'Entry log shows who came and when', 'Maintenance code with time restrictions', 'Guest codes for Airbnb expire automatically'].map((i) => (
                  <li key={i} className="text-green-800 text-xs flex gap-1.5 items-start">
                    <span className="text-green-600 shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="font-bold text-brand-navy mb-4">What We Install and Configure</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Keypad deadbolt (no WiFi needed)', body: 'Simple, reliable, ideal for rentals without consistent WiFi' },
              { label: 'Smart keypad (app + keypad)', body: 'Code entry + remote management from your phone' },
              { label: 'RFID fob system', body: 'Card or fob entry — common in offices and buildings' },
              { label: 'Keypad + physical key backup', body: 'Always configured — never fully locked out' },
              { label: 'Multiple user code programming', body: 'Up to 100 codes on supported models' },
              { label: 'Time-restricted access codes', body: 'Cleaning service only on scheduled days' },
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

      <FAQSection faqs={FAQS} title="Keyless Entry FAQ — Brooklyn Rental & Home Questions" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Smart Locks (App + Keypad)', href: '/services/security-solutions/smart-locks/' },
              { label: 'Access Control Systems', href: '/services/security-solutions/access-control-systems/' },
              { label: 'New Tenant Lock Change', href: '/services/new-tenant-lock-change/' },
              { label: 'Deadbolt Installation', href: '/services/deadbolt-installation/' },
              { label: 'All Security Solutions', href: '/services/security-solutions/' },
              { label: 'Residential Locksmith', href: '/services/residential-locksmith/' },
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
          <h2 className="text-3xl font-bold mb-3">Install Keyless Entry in Brooklyn</h2>
          <p className="text-white/80 mb-8">Same-day installation. We supply, install, and program — you just use it.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl">
            <Phone size={26} aria-hidden="true" />{BUSINESS.phone}
          </a>
        </div>
      </section>

      <ContactFormSection
        title="Get a Keyless Entry Quote"
        subtitle="Tell us your property type and number of doors — we'll recommend the right system."
      />
    </>
  )
}
