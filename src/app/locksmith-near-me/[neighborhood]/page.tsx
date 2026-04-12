import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin, Shield, Clock, Star } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { ReviewsStrip } from '@/components/sections/ReviewsStrip'
import { MapEmbed } from '@/components/ui/MapEmbed'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { buildNeighborhoodMetadata } from '@/lib/seo'
import { getBreadcrumbSchema, getFAQSchema, getWebPageSchema } from '@/lib/schema'
import { BUSINESS } from '@/lib/constants'
import { NEIGHBORHOODS } from '@/lib/neighborhoods'

export async function generateStaticParams() {
  return NEIGHBORHOODS.map((n) => ({ neighborhood: n.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ neighborhood: string }>
}): Promise<Metadata> {
  const { neighborhood } = await params
  const n = NEIGHBORHOODS.find((x) => x.slug === neighborhood)
  if (!n) return {}
  return buildNeighborhoodMetadata({
    neighborhoodName: n.name,
    zip: n.zip,
    path: `/locksmith-near-me/${n.slug}/`,
  })
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ neighborhood: string }>
}) {
  const { neighborhood } = await params
  const n = NEIGHBORHOODS.find((x) => x.slug === neighborhood)
  if (!n) notFound()

  const canonicalUrl = `${BUSINESS.url}/locksmith-near-me/${n.slug}/`

  // Nearby neighborhoods with valid slugs only
  const nearbyWithSlugs = n.nearbyNeighborhoods
    .map((nb) => NEIGHBORHOODS.find((x) => x.name === nb))
    .filter((x): x is (typeof NEIGHBORHOODS)[number] => x !== undefined)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: `Locksmith in ${n.name}, Brooklyn NY`,
    description: `Professional locksmith services in ${n.name}, Brooklyn NY ${n.zip}. Emergency lockout response in 15–25 minutes. Lock rekeying, deadbolt installation, smart locks. Licensed, bonded & insured. Available 24/7.`,
    url: canonicalUrl,
    serviceType: 'Locksmith',
    areaServed: {
      '@type': 'Place',
      name: `${n.name}, Brooklyn, NY ${n.zip}`,
    },
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: BUSINESS.rating,
        reviewCount: BUSINESS.reviewCount,
        bestRating: 5,
      },
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      priceRange: '$65–$350',
      availability: 'https://schema.org/InStock',
    },
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locksmith Near Me', url: '/locksmith-near-me/' },
    { name: n.name, url: `/locksmith-near-me/${n.slug}/` },
  ])

  const faqSchema = getFAQSchema(n.faqs)

  return (
    <>
      <JsonLd data={getWebPageSchema({
        title: `Locksmith Near Me in ${n.name}, Brooklyn — 15–25 Min Response | Avenue Locksmith`,
        description: `Emergency locksmith near you in ${n.name}, Brooklyn. 15–25 minute response, 24/7. Licensed & insured. Call (347) 386-7164.`,
        url: `/locksmith-near-me/${n.slug}/`,
      })} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <BreadcrumbNav
        items={[
          { label: 'Home', href: '/' },
          { label: 'Locksmith Near Me', href: '/locksmith-near-me/' },
          { label: n.name },
        ]}
      />

      <HeroSection
        h1={`Locksmith in ${n.name}, Brooklyn NY ${n.zip}`}
        subheadline={`Licensed & insured locksmith serving ${n.name} and all of Brooklyn. 15–25 minute emergency response — available 24/7, 365 days a year.`}
        variant="neighborhood"
        showTrustBar
        showLiveActivity
      />

      {/* Unique local intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            Your Local Locksmith in {n.name} ({n.zip})
          </h2>
          <p className="text-brand-text text-lg leading-relaxed mb-5">{n.localContext}</p>
          <p className="text-brand-text leading-relaxed mb-6">
            Calls from {n.name} route straight to our Flatlands shop — no offshore dispatcher,
            no subcontracted ride-share driver pretending to be a locksmith. Our techs drive
            Brooklyn routes daily and know the block-level quirks of {n.name} ({n.zip}): which
            building types take mortise cylinders, which ones run Grade 1 deadbolts, and which
            curbside sections cost you five extra minutes in a loading zone. Every tech is a
            direct employee, NYC DCWP licensed, and carries photo ID you can verify before any
            work begins.
          </p>

          {/* Trust signals row */}
          <div className="grid grid-cols-3 gap-4 mb-8 bg-brand-bg rounded-xl p-5 border border-brand-border">
            <div className="text-center">
              <Star size={20} className="text-brand-amber mx-auto mb-1" aria-hidden="true" />
              <p className="font-bold text-brand-navy text-sm">{BUSINESS.rating}/5 Stars</p>
              <p className="text-brand-muted text-xs">{BUSINESS.reviewCount}+ Reviews</p>
            </div>
            <div className="text-center">
              <Clock size={20} className="text-brand-amber mx-auto mb-1" aria-hidden="true" />
              <p className="font-bold text-brand-navy text-sm">15–30 Min</p>
              <p className="text-brand-muted text-xs">Response Time</p>
            </div>
            <div className="text-center">
              <Shield size={20} className="text-brand-amber mx-auto mb-1" aria-hidden="true" />
              <p className="font-bold text-brand-navy text-sm">Licensed & Insured</p>
              <p className="text-brand-muted text-xs">Bonded in NY</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Emergency lockout — home, car & business',
              'Lock rekeying & full lock replacement',
              'Deadbolt installation & upgrades',
              'New tenant lock change',
              'Key duplication — all types',
              'Free upfront quote — no hidden fees',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircle size={17} className="text-brand-amber shrink-0" aria-hidden="true" />
                <span className="text-brand-text text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-2 text-center">
            Services We Provide in {n.name}
          </h2>
          <p className="text-brand-muted text-center text-sm mb-6 max-w-xl mx-auto">
            From a 2am lockout to a full security upgrade, our technicians handle it all in {n.name} and surrounding {n.borough} neighborhoods.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Emergency Lockout', href: '/services/emergency-locksmith/', desc: '24/7 — 15–25 min response' },
              { label: 'Residential Locksmith', href: '/services/residential-locksmith/', desc: 'Home & apartment locks' },
              { label: 'Lock Rekeying', href: '/services/lock-rekey/', desc: 'Affordable key change' },
              { label: 'New Tenant Lock Change', href: '/services/new-tenant-lock-change/', desc: 'Move-in security' },
              { label: 'Deadbolt Installation', href: '/services/deadbolt-installation/', desc: 'Grade 1 upgrades' },
              { label: 'Commercial Locksmith', href: '/services/commercial-locksmith/', desc: 'Business & office' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-xl p-4 border border-brand-border hover:border-brand-amber hover:shadow-md transition-all"
              >
                <p className="font-bold text-brand-navy text-sm mb-0.5">{s.label}</p>
                <p className="text-brand-muted text-xs">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-3 text-center">
            Serving {n.name}, Brooklyn
          </h2>
          <p className="text-brand-muted text-sm text-center mb-6 max-w-lg mx-auto">
            Our technicians are stationed throughout Brooklyn — including near {n.name} — for the fastest possible response.
          </p>
          <MapEmbed height="380px" title={`Avenue Locksmith — ${n.name} Brooklyn`} />
        </div>
      </section>

      {/* FAQ — unique per neighborhood from neighborhoods.ts */}
      <FAQSection
        faqs={n.faqs}
        title={`Common Questions About Locksmith Service in ${n.name}`}
      />

      {/* Contextual reviews strip — falls back to GMB CTA while reviews.ts is empty */}
      <ReviewsStrip
        neighborhood={n.slug}
        title={`What ${n.name} customers say on Google`}
      />

      {/* Nearby neighborhoods */}
      {nearbyWithSlugs.length > 0 && (
        <section className="py-10 bg-brand-bg">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-lg font-bold text-brand-navy mb-2 flex items-center gap-2">
              <MapPin size={18} className="text-brand-amber" aria-hidden="true" />
              Also Serving Neighborhoods Near {n.name}
            </h3>
            <p className="text-brand-muted text-sm mb-4">
              We cover all of Brooklyn — explore locksmith services in nearby areas:
            </p>
            <div className="flex flex-wrap gap-2">
              {nearbyWithSlugs.map((nb) => (
                <Link
                  key={nb.slug}
                  href={`/locksmith-near-me/${nb.slug}/`}
                  className="px-3 py-1.5 bg-white border border-brand-border rounded-full text-sm text-brand-text hover:border-brand-amber hover:text-brand-navy transition-colors"
                >
                  Locksmith in {nb.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal links — no orphan pages */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-lg font-bold text-brand-navy mb-4">Related Services &amp; Resources</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: '24-Hour Emergency Locksmith in Brooklyn', href: '/24-hour-locksmith-in-brooklyn-ny/' },
              { label: 'Emergency Locksmith in Brooklyn', href: '/emergency-locksmith-in-brooklyn-ny/' },
              { label: 'All Brooklyn Neighborhoods', href: '/locksmith-near-me/' },
              { label: 'Locksmith Services Overview', href: '/services/' },
              { label: 'Get a Free Quote', href: '/free-quote/' },
              { label: 'Customer Reviews', href: '/testimonials/' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-brand-navy text-sm font-medium hover:text-brand-amber transition-colors"
              >
                <span className="text-brand-amber">→</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">
            {n.name} dispatch — tech en route in 15–25 minutes
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            One call reaches a licensed Brooklyn technician already staged within {n.borough}.
            Price locked on the phone, 24/7, 365 days a year.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl"
          >
            <Phone size={26} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
          <p className="text-white/50 text-sm mt-5">
            Available 24/7 · Licensed &amp; Insured · No Hidden Fees
          </p>
        </div>
      </section>

      <ContactFormSection
        title={`Request Service in ${n.name}`}
        subtitle="Not an emergency? Fill out the form and we'll confirm your appointment within the hour."
      />
    </>
  )
}
