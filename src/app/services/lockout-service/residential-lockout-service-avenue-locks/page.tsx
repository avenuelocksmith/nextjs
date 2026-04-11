import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Clock, Home } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS, LOCK_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Residential Lockout Service in Brooklyn, NY — Apartments & Houses | Avenue Locksmith',
  description: 'Locked out of your Brooklyn apartment or house? 15–25 Min Response, non-destructive entry, no hidden fees. What to do right now while you wait. Call (347) 386-7164.',
  path: '/services/lockout-service/residential-lockout-service-avenue-locks/',
})

const FAQS = [
  {
    question: 'I am locked out of my Brooklyn apartment — what should I do right now while I wait for a locksmith?',
    answer: 'First, try the obvious: check all other entry points (back door, fire escape with door access), ask a neighbor if they were given a spare key, contact your building super or management company (many buildings have emergency super lines). If you are in an unsafe location — street at night — move to a nearby business or lobby and call from there. Do not leave your door unlocked to re-enter if someone propped it open. Once you have called us, stay accessible by phone — sometimes we arrive faster than expected.',
  },
  {
    question: 'Does my landlord or super have a legal right to let me back into my own apartment?',
    answer: 'Your building super almost certainly has a master key and should be your first call. Many supers charge nothing or a nominal fee for emergency lockout assistance. If your super is unavailable and your management company is reachable, they may also have master key access or a preferred locksmith. Note: your landlord retaining a master key is legal in NYC. Some tenants are uncomfortable with this — if so, the solution after your lockout is to change your locks and provide the landlord a copy of the new key under §27-2043.',
  },
  {
    question: 'How do I know the locksmith is legitimate and not overcharging me?',
    answer: 'NYC has specific rules for locksmiths. A legitimate NYC locksmith must be licensed with the NYC Department of Consumer and Worker Protection (DCWP) and must give you a written price estimate before starting work. Ask to see the license. If the price quoted over the phone changes dramatically when they arrive, that is a red flag for a bait-and-switch operation. Avenue Locksmith technicians carry their DCWP credentials and quote the final price before touching the door.',
  },
  {
    question: 'How much does a residential lockout cost in Brooklyn?',
    answer: 'A standard residential lockout starts at $75–$125. Price varies based on lock type (standard deadbolt vs. high-security lock), time of day (our pricing is consistent — no after-hours surcharge), and whether any follow-up work like a rekey is needed. We quote the exact amount over the phone and confirm on arrival before work begins.',
  },
  {
    question: 'Can you get me in without damaging my lock or door?',
    answer: 'In nearly all cases, yes. We use professional non-destructive entry techniques — lock picking, bypass tools, and sometimes shimming — that open the door without damage. We only drill as an absolute last resort, and only after explaining the situation and cost to you first. Brooklyn apartment doors are generally manageable without drilling unless the lock is high-security or the cylinder is severely damaged.',
  },
]

const STEPS = [
  { step: '1', title: 'Call (347) 386-7164', body: 'Describe your situation, confirm your address, and get a price quote.' },
  { step: '2', title: 'Try building resources', body: 'Call your super while you wait — it may be faster and cheaper.' },
  { step: '3', title: 'Stay accessible', body: 'Pick a safe spot near the building and keep your phone on.' },
  { step: '4', title: 'We arrive in 15–25 min', body: 'Technician confirms price, opens door non-destructively.' },
  { step: '5', title: 'Consider a rekey', body: 'If you are locked out, others may have that same key — rekey same visit.' },
]

export default function ResidentialLockoutPage() {
  const canonicalUrl = `${BUSINESS.url}/services/lockout-service/residential-lockout-service-avenue-locks/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Residential Lockout Service in Brooklyn, NY',
    description: 'Home and apartment lockout service in Brooklyn, NY. Non-destructive entry, 15–25 minute response, upfront pricing. What to do while you wait. Licensed & insured.',
    url: canonicalUrl,
    serviceType: 'Residential Lockout Service',
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
      priceRange: '$75–$125',
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
        { name: 'Residential Lockout', url: '/services/lockout-service/residential-lockout-service-avenue-locks/' },
      ])} />
      <JsonLd data={getServiceSchema({ name: 'Residential Lockout Service', description: 'Home and apartment lockout service in Brooklyn, NY. Non-destructive entry, 15–25 minute response, upfront pricing. What to do while you wait. Licensed & insured.', url: '/services/lockout-service/residential-lockout-service-avenue-locks/', serviceType: 'Residential Lockout Service', brands: LOCK_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Residential Lockout Service in Brooklyn, NY — Apartments & Houses | Avenue Locksmith', description: 'Locked out of your Brooklyn apartment or house? 15–25 Min Response, non-destructive entry, no hidden fees. What to do right now while you wait. Call (347) 386-7164.', url: '/services/lockout-service/residential-lockout-service-avenue-locks/' })} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Lockout Service', href: '/services/lockout-service/' },
        { label: 'Residential Lockout' },
      ]} />

      <HeroSection
        h1="Residential Lockout Service in Brooklyn, NY — Apartments & Houses"
        subheadline="Locked out of your apartment or house? We arrive in 15–25 minutes, use non-destructive entry, and quote the price before we touch anything. 24/7."
        variant="emergency"
        showTrustBar
        ctaLabel="Call Now — 15–25 Min Response"
      />

      {/* What to do right now — unique angle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">What to Do Right Now — Step by Step</h2>
          <div className="space-y-4">
            {STEPS.map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-brand-amber text-brand-navy font-bold rounded-full flex items-center justify-center shrink-0 text-sm">
                  {s.step}
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm mb-0.5">{s.title}</p>
                  <p className="text-brand-muted text-xs leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-brand-navy mb-5">Why Brooklyn Residents Call Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: '15–25 minute arrival — all Brooklyn neighborhoods', icon: Clock },
              { label: 'Non-destructive entry — no door or lock damage', icon: Home },
              { label: 'Licensed & insured — DCWP registered', icon: CheckCircle },
              { label: 'Upfront price before work begins — no surprises', icon: CheckCircle },
              { label: 'No after-hours surcharge — same price 24/7', icon: CheckCircle },
              { label: 'Real person answers every call', icon: CheckCircle },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 bg-white rounded-lg p-3 border border-brand-border">
                <item.icon size={15} className="text-brand-amber shrink-0" aria-hidden="true" />
                <span className="text-brand-text text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Residential Lockout FAQ — What Brooklyn Residents Ask" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Emergency Locksmith — 24/7', href: '/services/emergency-locksmith/' },
              { label: 'Lock Rekeying After Lockout', href: '/services/lock-rekey/' },
              { label: 'Commercial Lockout Service', href: '/services/lockout-service/commercial-lockout-service-avenue-locks/' },
              { label: 'Auto Lockout Service', href: '/services/lockout-service/auto-lockout-service-avenue-locks/' },
              { label: 'New Tenant Lock Change', href: '/services/new-tenant-lock-change/' },
              { label: 'All Lockout Services', href: '/services/lockout-service/' },
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
          <h2 className="text-3xl font-bold mb-3">Brooklyn home lockout dispatch — picks out first, drills last</h2>
          <p className="text-white/80 mb-8">Call now — we will be there in 15–25 minutes. Available 24/7, 365 days.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl">
            <Phone size={26} aria-hidden="true" />{BUSINESS.phone}
          </a>
          <p className="text-white/50 text-sm mt-4">Licensed & Insured · Non-Destructive Entry · Upfront Pricing</p>
        </div>
      </section>
    </>
  )
}
