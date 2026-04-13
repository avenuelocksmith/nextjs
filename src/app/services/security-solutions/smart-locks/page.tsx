import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Zap } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS, SECURITY_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Smart Lock Installation in Brooklyn, NY — August, Schlage, Yale & More | Avenue Locksmith',
  description: 'Smart lock installation in Brooklyn, NY. August, Schlage Encode, Yale Assure. App control, guest codes, auto-lock. Renter-friendly options with no drilling. Call (347) 386-7164.',
  path: '/services/security-solutions/smart-locks/',
})

const FAQS = [
  {
    question: 'I am a renter in Brooklyn — can I install a smart lock without drilling or modifying my door?',
    answer: 'Yes. The August Smart Lock Pro is specifically designed for renters — it attaches over the interior of your existing deadbolt thumb-turn using a mounting adapter. The exterior of your door is completely unchanged, the keyhole still works, and when you move out you uninstall it and take it with you. No drilling, no holes, nothing your landlord can see from outside. It takes about 10 minutes to install.',
  },
  {
    question: 'Do smart locks work reliably in Brooklyn winters?',
    answer: 'Battery-powered smart locks work down to about -4°F (-20°C), which is well within Brooklyn winter range. The main cold-weather concern is battery life — cold drains batteries faster. We recommend lithium batteries (not alkaline) for winter performance and keeping a spare set. All smart locks we install include low-battery notifications before they fail. One common problem in very cold weather: the door itself expanding slightly and binding on the frame, which is a door alignment issue rather than a lock issue.',
  },
  {
    question: 'I manage an Airbnb in Brooklyn — what smart lock do you recommend for short-term rentals?',
    answer: 'For Airbnb and short-term rentals, we recommend Schlage Encode or Yale Assure with keypad. These allow you to generate unique guest codes that expire automatically at checkout — no app required for the guest, no physical key handoff needed, and each stay has a different code. Both integrate with Airbnb, VRBO, and property management software for automatic code generation. The guest just punches in their code.',
  },
  {
    question: 'Is my smart lock secure against hacking?',
    answer: 'Quality smart locks from established brands (August, Schlage, Yale) use AES-128 or AES-256 encryption for Bluetooth and Z-Wave communications. These have not been compromised in the real world — your network router and phone are far more vulnerable. The practical risk with smart locks is not hacking: it is a low phone battery, a Wi-Fi outage, or a dead lock battery. All of these have physical key backups. The physical security of the lock itself (ANSI Grade 1) is the same as non-smart deadbolts.',
  },
  {
    question: 'Can I keep a physical key option alongside the smart lock?',
    answer: 'Yes — almost all smart locks retain a physical key cylinder as backup. August Smart Lock Pro keeps your existing key cylinder entirely (it installs over the interior). Schlage Encode, Yale Assure, and Kwikset Halo all include a physical key backup. We strongly recommend keeping at least one physical key copy stored somewhere accessible — phone batteries die, apps have outages, and backups matter.',
  },
]

const BRANDS = [
  { brand: 'August Smart Lock Pro', type: 'Interior overlay', best: 'Renters, no-drill installation', key: 'Keeps existing exterior hardware & keyhole' },
  { brand: 'Schlage Encode', type: 'Full deadbolt replacement', best: 'Airbnb, ANSI Grade 1 security', key: 'WiFi built-in, no hub required' },
  { brand: 'Yale Assure', type: 'Full deadbolt replacement', best: 'Clean aesthetics, homeowners', key: 'Multiple connectivity options, touchscreen' },
  { brand: 'Kwikset Halo', type: 'Full deadbolt replacement', best: 'Value option, reliable', key: 'Built-in WiFi, app control' },
  { brand: 'Level Lock', type: 'Interior cylinder only', best: 'Invisible installation, aesthetics', key: 'No visible change to door exterior' },
]

export default function SmartLocksPage() {
  const canonicalUrl = `${BUSINESS.url}/services/security-solutions/smart-locks/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Smart Lock Installation in Brooklyn, NY',
    description: 'Smart lock installation in Brooklyn, NY. August, Schlage Encode, Yale Assure, Kwikset Halo. App control, keypad codes, guest access, auto-lock. Renter-friendly no-drill options.',
    url: canonicalUrl,
    serviceType: 'Smart Lock Installation',
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
      priceRange: '$150–$400',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={getServiceSchema({ name: 'Smart Lock Installation', description: 'Smart lock installation in Brooklyn, NY. August, Schlage Encode, Yale Assure, Kwikset Halo. App control, keypad codes, guest access, auto-lock. Renter-friendly no-drill options.', url: '/services/security-solutions/smart-locks/', serviceType: 'Smart Lock Installation', brands: SECURITY_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Smart Lock Installation in Brooklyn, NY — August, Schlage, Yale & More | Avenue Locksmith', description: 'Smart lock installation in Brooklyn, NY. August, Schlage Encode, Yale Assure. App control, guest codes, auto-lock. Renter-friendly options with no drilling. Call (347) 386-7164.', url: '/services/security-solutions/smart-locks/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services/' },
        { name: 'Security Solutions', url: '/services/security-solutions/' },
        { name: 'Smart Locks', url: '/services/security-solutions/smart-locks/' },
      ])} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Security Solutions', href: '/services/security-solutions/' },
        { label: 'Smart Locks' },
      ]} />

      <HeroSection
        h1="Smart Lock Installation in Brooklyn, NY — August, Schlage, Yale & More"
        subheadline="Renter-friendly no-drill options. Airbnb guest codes that expire automatically. App control from anywhere. We supply, install, and configure smart locks across Brooklyn."
        variant="service"
        showTrustBar
      />

      {/* Renter + Airbnb focus — unique angle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            Smart Locks for Brooklyn&apos;s Rental Market
          </h2>
          <p className="text-brand-text leading-relaxed mb-6">
            Brooklyn is a rental market. Smart locks solve real problems that matter here specifically: renters who cannot modify their door hardware, Airbnb hosts managing keys remotely, landlords dealing with lost key calls from tenants, and families who need to let in children or cleaners without cutting physical keys.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { who: 'Renters', solution: 'August Smart Lock Pro — installs over existing thumb-turn, no modifications', icon: Zap },
              { who: 'Airbnb Hosts', solution: 'Schlage Encode — unique codes per guest, auto-expire at checkout', icon: Zap },
              { who: 'Landlords', solution: 'Any smart lock with master code — tenant gets their code, you keep master', icon: Zap },
            ].map((item) => (
              <div key={item.who} className="bg-brand-bg rounded-xl p-4 border border-brand-border">
                <p className="font-bold text-brand-navy mb-1 text-sm">{item.who}</p>
                <p className="text-brand-muted text-xs leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>

          <h3 className="font-bold text-brand-navy mb-4 text-lg">Features We Configure</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              'App-based remote locking and unlocking',
              'Multiple unique PIN codes per user',
              'Temporary guest codes that expire automatically',
              'Voice control (Alexa, Google Assistant, Siri)',
              'Auto-lock after set time delay',
              'Entry history and access logs',
              'Low battery notifications',
              'Integration with smart home systems',
            ].map((f) => (
              <div key={f} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-brand-amber shrink-0" aria-hidden="true" />
                <span className="text-sm text-brand-text">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand comparison */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-brand-navy mb-5">Smart Lock Brands We Install</h2>
          <div className="space-y-3">
            {BRANDS.map((b) => (
              <div key={b.brand} className="bg-white rounded-xl p-4 border border-brand-border">
                <p className="font-bold text-brand-navy mb-1">{b.brand}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 text-xs text-brand-muted">
                  <div><span className="font-medium text-brand-navy">Type:</span> {b.type}</div>
                  <div><span className="font-medium text-brand-navy">Best for:</span> {b.best}</div>
                  <div className="text-brand-amber font-medium">{b.key}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Smart Lock FAQ — Brooklyn Renter & Landlord Questions" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Keyless Entry Systems', href: '/services/security-solutions/keyless-entry-system/' },
              { label: 'Access Control Systems', href: '/services/security-solutions/access-control-systems/' },
              { label: 'Deadbolt Installation', href: '/services/deadbolt-installation/' },
              { label: 'New Tenant Lock Change', href: '/services/new-tenant-lock-change/' },
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

      <ContactFormSection
        title="Install a Smart Lock in Your Brooklyn Home"
        subtitle="We supply, install, and configure — you just use it."
      />
    </>
  )
}
