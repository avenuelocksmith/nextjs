import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Shield } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS, SECURITY_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'High-Security Locks in Brooklyn, NY — Medeco, Mul-T-Lock, Abloy | Avenue Locksmith',
  description: 'High-security lock installation in Brooklyn, NY. Medeco, Mul-T-Lock, Abloy Protec2, Schlage Primus. Pick-resistant, drill-resistant, bump-proof, restricted keys. Call (347) 386-7164.',
  path: '/services/security-solutions/high-security-locks/',
})

const FAQS = [
  {
    question: 'What specific attacks does a high-security lock defeat that a standard Grade 1 lock does not?',
    answer: 'A standard ANSI Grade 1 lock (like Schlage B60N) is well-built and resists casual attacks. High-security locks add protection against: (1) Lock picking — security pin configurations (spools, serrated pins) in Medeco, Mul-T-Lock, and Abloy defeat standard pick sets and pick guns. (2) Bump key attacks — security pins also defeat bump keys, which work by exploiting the predictable spring behavior of standard pin stacks. (3) Key duplication — restricted keyways with patent protection mean keys cannot be duplicated at hardware stores without your authorization card. (4) Drill attacks — hardened steel anti-drill pins and plates stop power tool attacks at the cylinder.',
  },
  {
    question: 'Is Medeco worth the price over Schlage for a Brooklyn apartment?',
    answer: 'Medeco is significantly more expensive ($180–$350 for hardware alone vs. $50–$80 for Schlage B60N). For most Brooklyn apartments, Schlage B60N Grade 1 paired with door frame reinforcement is the more cost-effective security upgrade. Medeco makes sense when: you live in a high-crime area with documented break-in attempts via lock picking, you want the restricted key system to control who can duplicate your keys, or your building has had specific security incidents. Medeco is exceptional hardware — but the frame failure problem (where burglars kick the door rather than picking the lock) is not solved by upgrading the lock alone.',
  },
  {
    question: 'How does Mul-T-Lock differ from Medeco?',
    answer: 'Both are high-security locks but with different engineering approaches. Medeco uses an angled key cut and rotating pins to defeat picking — the keyway is also restricted. Mul-T-Lock uses a telescoping pin-within-a-pin mechanism that is particularly pick-resistant and also uses a restricted keyway. Both offer excellent security. Mul-T-Lock tends to be slightly more affordable and is popular in commercial settings and with building managers. Medeco is more widely known in residential high-security applications in the US.',
  },
  {
    question: 'What is Abloy Protec2 and when should I choose it over Medeco or Mul-T-Lock?',
    answer: 'Abloy Protec2 uses a disc detainer mechanism rather than pin tumbler — the lock cylinder contains rotating discs that align only when the correct key is inserted. There are zero pins to pick or springs to manipulate. This makes it virtually immune to any picking attack that works on pin tumbler locks. It is also drill-resistant and has an exceptional restricted key system. Abloy is the right choice for the highest-security applications — when you want the lock that cannot be picked by any known technique. It is more expensive than Medeco and Mul-T-Lock.',
  },
  {
    question: 'Do high-security locks require special door preparation?',
    answer: 'Most high-security deadbolts are designed to standard ANSI dimensions and replace existing deadbolts without additional drilling, assuming your door already has a standard 2-1/8" bore. We measure and confirm fit before installation. Pre-war Brooklyn doors sometimes have non-standard preparations from decades of previous lock changes — we assess these on arrival. Reinforcing the strike plate and door frame is always recommended regardless of which lock you choose.',
  },
]

const BRANDS = [
  { brand: 'Medeco', mechanism: 'Angled cuts + rotating pins', restriction: 'Patent-protected keyway', price: '$180–$350 hardware', note: 'US market leader in high-security' },
  { brand: 'Mul-T-Lock', mechanism: 'Telescoping pin-in-pin', restriction: 'Patent-protected keyway', price: '$120–$280 hardware', note: 'Popular in commercial & Israeli-engineered' },
  { brand: 'Abloy Protec2', mechanism: 'Disc detainer (no pins)', restriction: 'Laser-cut restricted keys', price: '$200–$400 hardware', note: 'No pick-based attack possible' },
  { brand: 'Schlage Primus', mechanism: 'Additional sidebar + standard pins', restriction: 'Restricted Primus keyway', price: '$100–$180 hardware', note: 'More affordable high-security option' },
  { brand: 'ASSA Abloy', mechanism: 'Multiple cylinder options', restriction: 'Controlled key systems', price: '$150–$350 hardware', note: 'Commercial-grade, wide product line' },
]

export default function HighSecurityLocksPage() {
  const canonicalUrl = `${BUSINESS.url}/services/security-solutions/high-security-locks/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'High-Security Lock Installation in Brooklyn, NY',
    description: 'High-security lock installation in Brooklyn, NY. Medeco, Mul-T-Lock, Abloy Protec2, Schlage Primus. Pick-resistant, drill-resistant, bump-proof, with restricted key systems.',
    url: canonicalUrl,
    serviceType: 'High-Security Lock Installation',
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
      priceRange: '$200–$600',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={getServiceSchema({ name: 'High-Security Lock Installation', description: 'High-security lock installation in Brooklyn, NY. Medeco, Mul-T-Lock, Abloy Protec2, Schlage Primus. Pick-resistant, drill-resistant, bump-proof, with restricted key systems.', url: '/services/security-solutions/high-security-locks/', serviceType: 'High-Security Lock Installation', brands: SECURITY_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'High-Security Locks in Brooklyn, NY — Medeco, Mul-T-Lock, Abloy | Avenue Locksmith', description: 'High-security lock installation in Brooklyn, NY. Medeco, Mul-T-Lock, Abloy Protec2, Schlage Primus. Pick-resistant, drill-resistant, bump-proof, restricted keys. Call (347) 386-7164.', url: '/services/security-solutions/high-security-locks/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services/' },
        { name: 'Security Solutions', url: '/services/security-solutions/' },
        { name: 'High-Security Locks', url: '/services/security-solutions/high-security-locks/' },
      ])} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Security Solutions', href: '/services/security-solutions/' },
        { label: 'High-Security Locks' },
      ]} />

      <HeroSection
        h1="High-Security Locks in Brooklyn, NY — Medeco, Mul-T-Lock & Abloy"
        subheadline="Standard locks resist casual attacks. High-security locks resist trained attackers with picks, bump keys, and drill bits — plus restrict who can copy your keys."
        variant="service"
        showTrustBar
      />

      {/* Attack method comparison — unique angle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            What Standard Locks Resist — and What They Do Not
          </h2>
          <p className="text-brand-text leading-relaxed mb-6">
            Most forced entries do not use lock picking — they kick the door. For that attack, door frame reinforcement matters more than the lock. But for targeted attacks by experienced burglars who want to enter without evidence of forced entry, high-security locks matter significantly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { attack: 'Door kick', standard: 'Frame fails, not the lock', highsec: 'Lock is irrelevant — frame is the issue', note: 'Frame reinforcement solves this' },
              { attack: 'Lock picking', standard: 'Moderate resistance', highsec: 'Security pins defeat standard picks', note: 'High-security wins here' },
              { attack: 'Bump key', standard: 'Vulnerable', highsec: 'Security pins also defeat bumping', note: 'High-security wins here' },
              { attack: 'Drill attack', standard: 'Some resistance', highsec: 'Hardened anti-drill components', note: 'High-security wins here' },
              { attack: 'Key duplication', standard: 'Anyone can copy at hardware store', highsec: 'Restricted keyway — authorization required', note: 'High-security wins here' },
            ].map((a) => (
              <div key={a.attack} className="bg-brand-bg rounded-xl p-4 border border-brand-border">
                <p className="font-bold text-brand-navy text-sm mb-2">{a.attack}</p>
                <p className="text-xs text-red-700 mb-1"><span className="font-medium">Standard:</span> {a.standard}</p>
                <p className="text-xs text-green-700"><span className="font-medium">High-security:</span> {a.highsec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand comparison */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-5">High-Security Lock Brands We Install</h2>
          <div className="space-y-3">
            {BRANDS.map((b) => (
              <div key={b.brand} className="bg-white rounded-xl p-4 border border-brand-border">
                <div className="flex items-center gap-3 mb-2">
                  <Shield size={14} className="text-brand-amber" aria-hidden="true" />
                  <p className="font-bold text-brand-navy">{b.brand}</p>
                  <span className="text-brand-amber text-xs font-medium">{b.price}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-brand-muted">
                  <div><span className="font-medium text-brand-navy">Mechanism:</span> {b.mechanism}</div>
                  <div><span className="font-medium text-brand-navy">Key control:</span> {b.restriction}</div>
                  <div className="font-medium text-brand-navy">{b.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="High-Security Lock FAQ — Technical Questions Answered" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Reinforced Door Frame System', href: '/services/security-solutions/reinforced-door-frame-system/' },
              { label: 'Deadbolt Installation', href: '/services/deadbolt-installation/' },
              { label: 'Lock Change (Full Replacement)', href: '/services/lock-change/' },
              { label: 'Access Control Systems', href: '/services/security-solutions/access-control-systems/' },
              { label: 'All Security Solutions', href: '/services/security-solutions/' },
              { label: 'Commercial Locksmith', href: '/services/commercial-locksmith/' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-brand-navy text-sm font-medium hover:text-brand-amber transition-colors">
                <ArrowRight size={14} className="text-brand-amber shrink-0" aria-hidden="true" />{link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection
        title="Get a High-Security Lock Consultation"
        subtitle="Tell us about your door and security concerns — we'll recommend the right brand."
      />
    </>
  )
}
