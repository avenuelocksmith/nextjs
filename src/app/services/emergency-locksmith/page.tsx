import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, AlertTriangle, Clock, Shield, MapPin } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/schema'
import { buildServiceMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildServiceMetadata({
  serviceName: '24/7 Emergency Locksmith',
  path: '/services/emergency-locksmith/',
  customTitle: '24/7 Emergency Locksmith in Brooklyn, NY — 15–30 Min Response | Avenue Locksmith',
  customDescription: 'Emergency locksmith in Brooklyn, NY. Real person answers 24/7. 15–25 minute response. Home, car & business lockouts. Upfront price before we start. Call (347) 386-7164.',
})

const FAQS = [
  {
    question: 'I called a locksmith and they quoted $35 on the phone but want $400 at the door — what do I do?',
    answer: 'Refuse to pay and end the job before work starts. This is the most common locksmith scam in NYC — advertise a low price, then claim your lock is "high-security" or needs "special tools" once they arrive. A legitimate locksmith gives you the complete price before touching anything. Call Avenue Locksmith at (347) 386-7164 — we quote the full price on the phone and that is what you pay.',
  },
  {
    question: 'My front door deadbolt is frozen in winter and I cannot get in — is that a locksmith job?',
    answer: 'Yes. Frozen cylinders are a common Brooklyn winter emergency. Do NOT use hot water — thermal shock can crack the cylinder. We carry graphite spray and de-icing lubricant on every truck. In most cases we can thaw and free the cylinder in under 10 minutes without any drilling or replacement. If the cylinder is cracked from previous forced attempts, we carry replacement cylinders for same-visit swap.',
  },
  {
    question: 'I was robbed — the lock is broken and my door will not close. Can you come tonight?',
    answer: 'Yes, this is exactly the type of emergency we prioritize. A broken door after a burglary is a safety emergency. We respond 24/7, will replace the destroyed lock hardware, reinforce the strike plate if it was kicked in, and get your door securing properly before we leave. We also provide a written incident report documenting what was installed — required by most insurance carriers for claims.',
  },
  {
    question: 'Can you open my door without drilling? I do not want to replace the lock.',
    answer: 'In the vast majority of cases — yes. Our first approach is always non-destructive entry: lock picking or bypass techniques that open the door without damaging the lock. Drilling is only used when a lock is seized, broken internally, or physically blocking non-destructive methods. If we recommend drilling, we explain why before we do it. We never drill unnecessarily — replacement hardware costs us time and you money.',
  },
  {
    question: 'What information do I need to have ready when I call for an emergency locksmith in Brooklyn?',
    answer: 'Have your exact address and cross street ready (not just the street — cross streets speed up GPS navigation significantly). Have a photo ID and something showing you live or work there (lease, utility bill, business card). For a car lockout, have the vehicle registration or insurance card. Being ready with ID gets the job done faster — we verify identity before opening any door.',
  },
]

const WHAT_TO_DO_STEPS = [
  { step: '1', title: 'Stay somewhere safe and visible', body: 'Move to a well-lit area — a lobby, diner, or pharmacy nearby. Do not stand on an empty street.' },
  { step: '2', title: 'Call us directly', body: 'Call (347) 386-7164. A real person answers — not a voicemail or call center. We dispatch immediately.' },
  { step: '3', title: 'Get the price confirmed', body: 'We quote the full price on the phone before dispatching. Hold us to that quote when we arrive.' },
  { step: '4', title: 'Have ID ready', body: 'Driver\'s license + any proof of address (lease, mail, utility bill). This speeds up the job.' },
  { step: '5', title: 'We arrive and open your door', body: 'Non-destructive entry in almost all cases. We test the door before we leave.' },
]

export default function EmergencyLocksmithPage() {
  const canonicalUrl = `${BUSINESS.url}/services/emergency-locksmith/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: '24/7 Emergency Locksmith in Brooklyn',
    description: '24/7 emergency locksmith in Brooklyn, NY. Home, car, and business lockouts with 15–25 minute response. Non-destructive entry. Licensed & insured. Upfront pricing.',
    url: canonicalUrl,
    serviceType: 'Emergency Lockout Service',
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: BUSINESS.phone,
      availableLanguage: 'English',
    },
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
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
        { name: 'Emergency Locksmith', url: '/services/emergency-locksmith/' },
      ])} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Emergency Locksmith' },
      ]} />

      <HeroSection
        h1="24/7 Emergency Locksmith in Brooklyn — 15–30 Min Response"
        subheadline="Locked out right now? A real person answers this phone every time. We give you the full price before we dispatch, and we arrive in 15–25 minutes."
        variant="emergency"
        showTrustBar
        ctaLabel="Call Now — We Answer 24/7"
      />

      {/* Urgent phone bar */}
      <div className="bg-red-600 py-4 text-center">
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center gap-3 text-white font-bold text-xl"
          aria-label={`Call emergency locksmith at ${BUSINESS.phone}`}
        >
          <Phone size={24} aria-hidden="true" />
          <span>{BUSINESS.phone}</span>
          <span className="text-red-200 text-sm font-normal ml-1">— Tap to call now</span>
        </a>
      </div>

      {/* Step-by-step: what to do right now */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">
            What to Do Right Now If You Are Locked Out
          </h2>
          <p className="text-brand-muted mb-8 leading-relaxed">
            Follow these five steps. Most Brooklyn lockouts are resolved in under 45 minutes total from the moment you call.
          </p>
          <div className="space-y-4">
            {WHAT_TO_DO_STEPS.map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-brand-amber text-brand-navy font-bold rounded-full flex items-center justify-center shrink-0 text-sm">
                  {s.step}
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm mb-0.5">{s.title}</p>
                  <p className="text-brand-muted text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency services list */}
      <section className="py-12 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-2">
            Emergency Situations We Handle 24/7
          </h2>
          <p className="text-brand-muted mb-6 text-sm">
            Every situation below is dispatched immediately — day or night, weekday or holiday.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Apartment & house lockout',
              'Car lockout — all makes and models',
              'Office & business lockout',
              'Broken key stuck in lock',
              'Burglary repair — door & frame',
              'Emergency lock change after break-in',
              'Frozen door lock in winter',
              'Lock damaged or won\'t turn',
              'Lost all keys — emergency rekey',
              'Landlord illegal lockout assistance',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-brand-border">
                <CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" />
                <span className="text-brand-text text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why we are different */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">
            Why Brooklyn Residents Call Avenue Locksmith for Emergencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: 'Technicians Stationed in Brooklyn', body: 'We are not a call center that dispatches from wherever. Our technicians are based throughout Brooklyn — response times are real, not marketing numbers.' },
              { icon: Phone, title: 'Real Person Answers Every Call', body: 'At 3am on Christmas. At 6am on Sunday. A real Avenue Locksmith dispatcher answers and dispatches immediately — no voicemail queue.' },
              { icon: Shield, title: 'Price Locked Before Dispatch', body: 'We give you the complete price on the phone. If the job is more complex on arrival, we discuss it before doing additional work. The phone price is the floor, not a teaser.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-5 bg-brand-bg rounded-xl border border-brand-border">
                <item.icon size={28} className="text-brand-amber mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-bold text-brand-navy mb-2 text-sm">{item.title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-scam warning */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle size={22} className="text-amber-600 mt-0.5 shrink-0" aria-hidden="true" />
              <h2 className="text-lg font-bold text-amber-900">
                NYC Locksmith Scam Warning — Read Before You Call Anyone
              </h2>
            </div>
            <p className="text-amber-800 mb-4 text-sm leading-relaxed">
              The NYC Department of Consumer and Worker Protection has documented hundreds of complaints against fake locksmith operations. The pattern is always the same: extremely low phone quotes ($19–$35), then $300–$600+ bills once your door is open. Here is how to avoid it:
            </p>
            <ul className="space-y-2">
              {[
                'Demand the complete price BEFORE they begin — not an estimate, not a range, the actual total.',
                'Ask for their NYC DCWP locksmith license number and verify it at nyc.gov/dcwp.',
                'Google the company name + address. Scam operations have no real location.',
                'If you feel pressured or the price changes at the door — end the job and call the police if needed.',
                'Avenue Locksmith license number is available on request. Our address is 973 E 55th St, Brooklyn, NY.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-0.5 shrink-0">•</span>
                  <span className="text-amber-800 text-xs leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Emergency Locksmith FAQ — Real Questions, Honest Answers" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Residential Lockout Service', href: '/services/lockout-service/residential-lockout-service-avenue-locks/' },
              { label: 'Car Lockout Service', href: '/services/lockout-service/auto-lockout-service-avenue-locks/' },
              { label: 'Commercial Lockout Service', href: '/services/lockout-service/commercial-lockout-service-avenue-locks/' },
              { label: '24-Hour Locksmith in Brooklyn', href: '/24-hour-locksmith-in-brooklyn-ny/' },
              { label: 'Lock Change After Break-In', href: '/services/lock-change/' },
              { label: 'All Services', href: '/services/' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-brand-navy text-sm font-medium hover:text-brand-amber transition-colors">
                <span className="text-brand-amber">→</span>{link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods served */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={16} className="text-brand-amber" aria-hidden="true" />
            <h3 className="text-sm font-bold text-brand-navy">Emergency Service Available in All Brooklyn Neighborhoods</h3>
          </div>
          <p className="text-brand-muted text-xs mb-3">Including: Park Slope, Williamsburg, DUMBO, Brooklyn Heights, Flatbush, Bay Ridge, Bed-Stuy, Crown Heights, Bushwick, Sunset Park, and all 49 Brooklyn neighborhoods.</p>
          <Link href="/locksmith-near-me/" className="text-brand-amber text-sm font-medium hover:underline">
            Find your neighborhood →
          </Link>
        </div>
      </section>

      <section className="py-16 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Locked Out in Brooklyn? Call Right Now.</h2>
          <p className="text-white/80 mb-8 text-lg">
            Available 24 hours, 365 days a year. 15–25 minute arrival. Price quoted before dispatch.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-12 py-6 rounded-xl text-2xl transition-colors shadow-2xl"
          >
            <Phone size={30} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
          <p className="text-white/50 text-sm mt-5">
            Licensed &amp; Insured · NYC DCWP Licensed · No Surprise Charges
          </p>
        </div>
      </section>
    </>
  )
}
