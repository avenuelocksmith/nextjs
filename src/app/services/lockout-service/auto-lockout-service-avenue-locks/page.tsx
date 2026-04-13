import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Car, AlertTriangle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS, AUTO_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Auto Lockout Service in Brooklyn, NY — Car Lockout Specialists | Avenue Locksmith',
  description: 'Locked out of your car in Brooklyn? 15–25 Min Response. All makes & models. Non-destructive slim jim entry. Alternate-side parking emergency? Call us first. (347) 386-7164.',
  path: '/services/lockout-service/auto-lockout-service-avenue-locks/',
})

const FAQS = [
  {
    question: 'I am locked out of my car during alternate-side parking and the street sweeper is coming — how fast can you get to me?',
    answer: 'Alternate-side parking emergencies are exactly why we emphasize response time. Call (347) 386-7164 immediately, tell the dispatcher it is an alternate-side situation, and give us your exact cross streets. We route the nearest available technician and typically arrive in 15–25 minutes in Brooklyn. While you wait, you cannot legally move your car — but a locksmith opening the door does not count as you driving. We handle these situations regularly.',
  },
  {
    question: 'My keys are in the car with the engine running and a child inside — what do I do?',
    answer: 'If a child or pet is in a running car and you cannot get in: call 911 immediately — this is an emergency. Fire and police departments can open vehicles quickly for life-safety situations. Also call us simultaneously at (347) 386-7164 — we will dispatch immediately and are often faster than fire department response for non-life-threatening but urgent situations. For a running car with no occupants: call us, do not break the window.',
  },
  {
    question: 'Will you scratch my car or damage the door seal getting me in?',
    answer: 'No. We use professional slim jim tools and air wedge kits designed specifically for non-destructive vehicle entry. These tools have been refined over decades to avoid scratching paint, damaging seals, or triggering airbags. The window film or rubber seals around your door are safe. Damage-free entry is the professional standard — the "break a window" approach is what amateur rescuers do, not trained locksmiths.',
  },
  {
    question: 'I locked my keys in the trunk — can you help with that?',
    answer: 'Yes. Trunk lockouts have two solutions: access through the rear seat fold-down (if your car has this feature) or direct trunk release. For vehicles with a mechanical trunk release inside the passenger compartment, we open the door first and use the interior release. For vehicles without interior release, we use a long-reach tool through the door gap to access the trunk release. We rarely need to go at the trunk lock directly.',
  },
  {
    question: 'I am parked in a Brooklyn parking garage and locked my keys in the car — do you service parking garages?',
    answer: 'Yes. We service car lockouts in street parking, driveways, outdoor lots, and enclosed parking garages across Brooklyn. For parking garage situations, give us the garage name and address. Many garages will let us in to service a customer vehicle — call the garage attendant to let them know we are coming so there is no delay at the entrance.',
  },
]

const SITUATIONS = [
  { label: 'Keys locked inside the car', detail: 'Most common — slim jim or air wedge entry' },
  { label: 'Keys in trunk', detail: 'Fold-down seat access or long-reach tool' },
  { label: 'Keys locked in with engine running', detail: 'Priority dispatch — call immediately' },
  { label: 'Broken key in door lock', detail: 'Extraction + replacement key cutting' },
  { label: 'Locked out in parking garage', detail: 'We service all Brooklyn garages and lots' },
  { label: 'Alternate-side parking emergency', detail: 'We know how critical timing is' },
]

const MAKES = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Hyundai', 'Kia', 'Nissan', 'Jeep', 'Subaru', 'Audi', 'Volkswagen', 'Mazda', 'Lexus']

export default function AutoLockoutPage() {
  const canonicalUrl = `${BUSINESS.url}/services/lockout-service/auto-lockout-service-avenue-locks/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Auto Lockout Service in Brooklyn, NY',
    description: 'Car lockout service in Brooklyn, NY. All makes and models. Non-destructive slim jim entry. Alternate-side parking emergencies. 15–25 minute response, available 24/7.',
    url: canonicalUrl,
    serviceType: 'Auto Lockout Service',
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
        { name: 'Auto Lockout', url: '/services/lockout-service/auto-lockout-service-avenue-locks/' },
      ])} />
      <JsonLd data={getServiceSchema({ name: 'Auto Lockout Service', description: 'Car lockout service in Brooklyn, NY. All makes and models. Non-destructive slim jim entry. Alternate-side parking emergencies. 15–25 minute response, available 24/7.', url: '/services/lockout-service/auto-lockout-service-avenue-locks/', serviceType: 'Auto Lockout Service', brands: AUTO_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Auto Lockout Service in Brooklyn, NY — Car Lockout Specialists | Avenue Locksmith', description: 'Locked out of your car in Brooklyn? 15–25 Min Response. All makes & models. Non-destructive slim jim entry. Alternate-side parking emergency? Call us first. (347) 386-7164.', url: '/services/lockout-service/auto-lockout-service-avenue-locks/' })} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Lockout Service', href: '/services/lockout-service/' },
        { label: 'Auto Lockout' },
      ]} />

      <HeroSection
        h1="Auto Lockout Service in Brooklyn, NY — Car Lockout Specialists"
        subheadline="Keys locked in the car? Trunk locked? Alternate-side parking emergency? We arrive in 15–25 minutes, open without damage, and service all makes and models. 24/7."
        variant="emergency"
        showTrustBar
        ctaLabel="Call Now — 15–25 Min Response"
      />

      {/* NYC-specific context — unique angle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            Car Lockouts in Brooklyn — The NYC-Specific Situations
          </h2>
          <p className="text-brand-text leading-relaxed mb-4">
            Car lockouts in Brooklyn happen in situations that do not exist anywhere else: keys locked inside during alternate-side parking when the sweeper is four blocks away, key broken in the ignition in a Flatbush metered spot running out, locked out in an Atlantic Avenue parking garage with a car alarm going off.
          </p>
          <p className="text-brand-text leading-relaxed mb-6">
            We service all of these. Brooklyn-specific situations are our most common calls. We know the borough, we know the parking patterns, and we know how to find you in a garage on a side street.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {SITUATIONS.map((s) => (
              <div key={s.label} className="flex items-start gap-3 bg-brand-bg rounded-xl p-4 border border-brand-border">
                <Car size={14} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-brand-navy text-sm">{s.label}</p>
                  <p className="text-brand-muted text-xs">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} className="text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-amber-900 mb-1">Never break your car window to get in</p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Window repair costs $200–$500. A locksmith opens your car without damage in under 5 minutes. The window repair will cost more than the locksmith visit, and you still need the key situation resolved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Makes */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-brand-navy mb-4">Car Makes We Service</h2>
          <div className="flex flex-wrap gap-2">
            {MAKES.map((m) => (
              <span key={m} className="bg-white border border-brand-border rounded-full px-3 py-1.5 text-sm text-brand-text">{m}</span>
            ))}
            <span className="bg-white border border-brand-border rounded-full px-3 py-1.5 text-sm text-brand-muted">+ all others</span>
          </div>
          <p className="text-brand-muted text-xs mt-3">We carry tools for domestic and import vehicles, including older models and electric vehicles.</p>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Auto Lockout FAQ — Brooklyn Car Lockout Questions" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Auto Locksmith — Key Programming', href: '/services/auto-locksmith/' },
              { label: 'Emergency Locksmith — 24/7', href: '/services/emergency-locksmith/' },
              { label: 'Residential Lockout Service', href: '/services/lockout-service/residential-lockout-service-avenue-locks/' },
              { label: 'Commercial Lockout Service', href: '/services/lockout-service/commercial-lockout-service-avenue-locks/' },
              { label: 'Key Duplication', href: '/services/key-duplication/' },
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
          <h2 className="text-3xl font-bold mb-3">Brooklyn auto lockout dispatch — mobile to the vehicle</h2>
          <p className="text-white/80 mb-8">Call now — 15–25 minute response, all Brooklyn neighborhoods, 24/7. No damage entry.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl">
            <Phone size={26} aria-hidden="true" />{BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  )
}
