import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Home, Building, Car, CheckCircle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/schema'
import { buildServiceMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { Term247 } from '@/components/ui/Term247'

export const metadata: Metadata = buildServiceMetadata({
  serviceName: 'Lockout Service',
  path: '/services/lockout-service/',
  customTitle: 'Lockout Service in Brooklyn, NY — Home, Car & Business | Avenue Locksmith',
  customDescription: '24/7 lockout service in Brooklyn, NY. Home, apartment, car & office lockouts. 15–25 minute response. Licensed & insured. No damage entry. Call (347) 386-7164.',
})

const LOCKOUT_TYPES = [
  {
    icon: Home,
    label: 'Residential Lockout',
    href: '/services/lockout-service/residential-lockout-service-avenue-locks/',
    desc: 'Locked out of your apartment or house? We arrive in 15–25 minutes and use non-destructive entry techniques to get you back in.',
  },
  {
    icon: Building,
    label: 'Commercial Lockout',
    href: '/services/lockout-service/commercial-lockout-service-avenue-locks/',
    desc: 'Business lockout? We minimize disruption and get your office, retail store, or warehouse open fast — any time of day.',
  },
  {
    icon: Car,
    label: 'Auto Lockout',
    href: '/services/lockout-service/auto-lockout-service-avenue-locks/',
    desc: 'Keys locked in the car? We open all makes and models without damage, any time, across Brooklyn.',
  },
]

const FAQS = [
  {
    question: 'How quickly can you arrive for a lockout in Brooklyn?',
    answer: 'We guarantee arrival within 15–25 minutes for lockout calls anywhere in Brooklyn. In most cases we are there in 15–20 minutes. We have technicians stationed throughout the borough.',
  },
  {
    question: 'Will you damage my lock or door to get me in?',
    answer: 'Almost never. Professional locksmiths use non-destructive entry techniques — lock picking, bypass tools, and shimming — that open the lock without damage. Drilling is a last resort reserved for rare situations like a severely jammed or broken lock.',
  },
  {
    question: 'Do you charge extra for nighttime or weekend lockouts?',
    answer: 'No after-hours surcharge. Our lockout pricing is consistent day or night, weekday or weekend. We quote the full price before we begin any work.',
  },
  {
    question: 'What do I need to prove I am locked out of my own property?',
    answer: 'For residential lockouts, we ask for a photo ID and something showing the address (mail, lease, utility bill). For car lockouts, we check the registration. This protects everyone — it is standard practice for any reputable locksmith.',
  },
]

export default function LockoutServicePage() {
  const canonicalUrl = `${BUSINESS.url}/services/lockout-service/`
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Lockout Service in Brooklyn, NY',
    description: '24/7 lockout service in Brooklyn, NY. Home, apartment, car, and business lockouts. 15–25 minute response. Licensed & insured.',
    url: canonicalUrl,
    serviceType: 'Lockout Service',
    provider: {
      '@type': 'Locksmith',
      '@id': BUSINESS.entityId,
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: BUSINESS.url,
    },
    areaServed: { '@type': 'City', name: 'Brooklyn', sameAs: 'https://en.wikipedia.org/wiki/Brooklyn' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      priceRange: '$75–$250',
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
        { name: 'Lockout Service', url: '/services/lockout-service/' },
      ])} />

      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }, { label: 'Lockout Service' }]} />

      <HeroSection
        h1="Lockout Service in Brooklyn, NY — Home, Car & Business Lockouts"
        subheadline="Available 24/7. We arrive in 15–25 minutes, quote the price upfront, and use non-destructive entry techniques to get you back in fast."
        variant="emergency"
        showTrustBar
        ctaLabel="Call Now — 15–25 Min Response"
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy mb-3 text-center">Choose Your Lockout Type</h2>
          <p className="text-brand-muted text-center mb-10 max-w-xl mx-auto">
            We handle all lockout types across Brooklyn — click below for type-specific information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCKOUT_TYPES.map((t) => (
              <Link key={t.href} href={t.href} className="bg-brand-bg rounded-xl p-6 border border-brand-border hover:border-brand-amber hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-amber transition-colors">
                  <t.icon size={24} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-brand-navy text-lg mb-2">{t.label}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{t.desc}</p>
                <span className="inline-block mt-3 text-brand-amber font-semibold text-sm">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Why Choose Avenue Locksmith for Lockouts?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Licensed, bonded & insured — NYC DCWP licensed',
              '15–25 minute arrival guarantee across Brooklyn',
              'Non-destructive entry — no unnecessary damage',
              'Upfront pricing before work begins',
              'No after-hours surcharges',
              'Real person answers every call',
              'Serving all Brooklyn neighborhoods 24/7',
              '4.9/5 rating from 150+ verified customers',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 bg-white rounded-lg p-3 border border-brand-border">
                <CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" />
                <span className="text-brand-text text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Lockout Service FAQ" />

      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Locked Out in Brooklyn? Call Now.</h2>
          <p className="text-white/80 mb-8 text-lg">15–25 minute response. Available <Term247 />, 365 days a year.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl">
            <Phone size={26} aria-hidden="true" />{BUSINESS.phone}
          </a>
        </div>
      </section>

      <ContactFormSection />
    </>
  )
}
