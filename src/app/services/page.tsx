import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Home, Building, Car, Zap, Key, Shield, Phone } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { Term247 } from '@/components/ui/Term247'

export const metadata: Metadata = buildMetadata({
  title: 'Locksmith Services in Brooklyn, NY | Avenue Locksmith',
  description: 'Complete locksmith services in Brooklyn, NY — residential, commercial, automotive, emergency, eviction, and security solutions. Licensed & insured. Call (347) 386-7164.',
  path: '/services/',
})

const CORE_SERVICES = [
  {
    icon: Home,
    label: 'Residential Locksmith',
    href: '/services/residential-locksmith/',
    desc: 'Home lockouts, lock installation, rekeying, smart locks, and deadbolt upgrades for apartments and houses.',
  },
  {
    icon: Building,
    label: 'Commercial Locksmith',
    href: '/services/commercial-locksmith/',
    desc: 'Master key systems, access control, business lockouts, and office security solutions.',
  },
  {
    icon: Car,
    label: 'Auto Locksmith',
    href: '/services/auto-locksmith/',
    desc: 'Car lockouts, key fob programming, transponder keys, and ignition repair for all makes and models.',
  },
  {
    icon: Zap,
    label: 'Emergency Locksmith',
    href: '/services/emergency-locksmith/',
    desc: '24/7 emergency lockout response — home, car, or business. 15–25 minute arrival guaranteed.',
  },
  {
    icon: Key,
    label: 'Eviction Locksmith',
    href: '/services/eviction-locksmith/',
    desc: 'Legal eviction lock changes for NYC landlords. NY Marshal paperwork required.',
  },
  {
    icon: Shield,
    label: 'Security Solutions',
    href: '/services/security-solutions/',
    desc: 'High-security locks, access control systems, CCTV, smart locks, and biometric entry.',
  },
]

const ADDITIONAL_SERVICES = [
  { label: 'Lock Rekeying', href: '/services/lock-rekey/', desc: 'Change internal pins — old keys stop working' },
  { label: 'Lock Change', href: '/services/lock-change/', desc: 'Full lock replacement, any brand' },
  { label: 'Deadbolt Installation', href: '/services/deadbolt-installation/', desc: 'ANSI Grade 1 & Grade 2 deadbolts' },
  { label: 'Key Duplication', href: '/services/key-duplication/', desc: 'House, office & high-security keys' },
  { label: 'Safe Locksmith', href: '/services/safe-locksmith/', desc: 'Safe opening, combination change, installation' },
  { label: 'Mailbox Lock', href: '/services/mailbox-lock/', desc: 'Apartment mailbox lock replacement' },
  { label: 'New Tenant Lock Change', href: '/services/new-tenant-lock-change/', desc: 'Move-in security — most popular service' },
]

const FAQS = [
  {
    question: 'How do I know a Brooklyn locksmith is legitimate and not a bait-and-switch operation?',
    answer: 'Legitimate locksmiths in NYC must be licensed with the NYC Department of Consumer and Worker Protection (DCWP). Ask to see the license. Red flags: a price quoted at $15–$35 over the phone that becomes $200 on arrival, a van with no markings, a technician who cannot show credentials, and a price that suddenly changes when they are standing at your door. Avenue Locksmith technicians carry their DCWP license, quote the full price over the phone, and confirm it before touching anything.',
  },
  {
    question: 'What is the difference between rekeying and changing a lock?',
    answer: 'Rekeying changes the internal pin configuration of your existing lock so that old keys no longer work. Same lock, new key. It costs $65–$85 and takes 20 minutes. Changing the lock means completely replacing the hardware with a new deadbolt or knob lock. It costs $95–$200+ and takes 30–45 minutes. Rekeying is the right choice when your lock is in good condition. Replacement is right when the lock is damaged, worn, you want to upgrade security grade, or the lock brand does not match your other hardware.',
  },
  {
    question: 'How fast can you respond to a lockout in Brooklyn?',
    answer: 'For emergency lockouts (home, car, business), we guarantee arrival within 15–25 minutes anywhere in Brooklyn. In most cases we are there in 15–20 minutes. We operate 24/7 with no after-hours surcharge. For non-emergency work, we offer same-day appointments with a specific arrival window.',
  },
  {
    question: 'What neighborhoods in Brooklyn do you serve?',
    answer: 'We serve all 23 Brooklyn neighborhoods including Bay Ridge, Bensonhurst, Borough Park, Brighton Beach, Bushwick, Canarsie, Carroll Gardens, Crown Heights, DUMBO, Flatbush, Flatlands, Greenpoint, Park Slope, Red Hook, Sheepshead Bay, Sunset Park, Williamsburg, and all others. Same response time standards apply borough-wide.',
  },
]

export default function ServicesPage() {
  const canonicalUrl = `${BUSINESS.url}/services/`
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/' },
  ])
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: 'Locksmith Services in Brooklyn, NY | Avenue Locksmith',
    description: 'Complete locksmith services in Brooklyn, NY — residential, commercial, automotive, emergency, and security solutions. Licensed & insured. Call (347) 386-7164.',
    isPartOf: { '@id': `${BUSINESS.url}/#website` },
    breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={getFAQSchema(FAQS)} />

      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />

      <HeroSection
        h1="Locksmith Services in Brooklyn, NY — Full-Service Security Solutions"
        subheadline="From emergency lockouts to complete security upgrades — residential, commercial, and automotive locksmith services across all Brooklyn neighborhoods."
        variant="service"
        showTrustBar
      />

      {/* Core Services */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3 text-center">
            Our Core Locksmith Services
          </h2>
          <p className="text-brand-muted text-center mb-10 max-w-2xl mx-auto">
            Every service is delivered by licensed, bonded, and insured technicians with upfront pricing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-brand-bg rounded-xl p-6 border border-brand-border hover:border-brand-amber hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-amber transition-colors">
                    <s.icon size={20} className="text-white group-hover:text-brand-navy" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-brand-navy text-lg">{s.label}</h3>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-3">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-brand-amber font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-14 md:py-16 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3 text-center">
            Additional Services
          </h2>
          <p className="text-brand-muted text-center mb-8 max-w-xl mx-auto">
            Specialized services for every lock and security need.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ADDITIONAL_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-xl p-4 border border-brand-border hover:border-brand-amber hover:shadow-md transition-all flex items-start gap-3"
              >
                <CheckCircle size={18} className="text-brand-amber mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-bold text-brand-navy text-sm">{s.label}</p>
                  <p className="text-brand-muted text-xs mt-0.5">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection title="What Our Customers Say" maxItems={3} />

      <FAQSection faqs={FAQS} title="Frequently Asked Questions About Our Services" />

      <section className="py-14 md:py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Need a Locksmith in Brooklyn?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Call now for immediate service or a free quote. Available <Term247 />, 365 days a year.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl"
          >
            <Phone size={26} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
        </div>
      </section>

      <ContactFormSection
        title="Get a Free Quote — No Obligation"
        subtitle="Tell us what you need and we'll get back to you within the hour."
      />
    </>
  )
}
