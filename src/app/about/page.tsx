import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, Shield, Clock, Star, MapPin, CheckCircle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { getGoogleReviews } from '@/lib/reviews'

export const metadata: Metadata = buildMetadata({
  title: 'About Avenue Locksmith — Brooklyn\'s Licensed & Trusted Locksmith',
  description:
    'Learn about Avenue Locksmith — Brooklyn\'s trusted, licensed, bonded, and insured local locksmith serving NYC since 2010. Real people, real service, 4.9/5 rating.',
  path: '/about/',
})

const CREDENTIALS = [
  {
    icon: Shield,
    label: 'Licensed, Bonded & Insured',
    detail: 'NYC DCWP licensed. Every technician carries full liability coverage.',
  },
  {
    icon: Star,
    label: '4.9/5 Star Rating',
    detail: `${BUSINESS.reviewCount}+ verified customer reviews across Google and other platforms.`,
  },
  {
    icon: Clock,
    label: '15–25 minute emergency response',
    detail: 'We are Brooklyn-based — not a national call center routing to unknown contractors.',
  },
  {
    icon: MapPin,
    label: 'Serving Brooklyn Since 2010',
    detail: 'Over a decade of experience in residential, commercial, and automotive locksmith work.',
  },
]

const DIFFERENTIATORS = [
  {
    title: 'Not a Franchise or Call Center',
    body:
      'Many "locksmith companies" in NYC are national aggregators that take your call and dispatch an unknown contractor. When you call Avenue Locksmith, an Avenue Locksmith technician shows up — someone we trained, vetted, and stand behind.',
  },
  {
    title: 'Transparent Pricing, Always',
    body:
      'We quote the full price before we begin any work. No hidden trip fees, no surprise charges after the job is done. You know the cost upfront — period.',
  },
  {
    title: 'Genuine Local Accountability',
    body:
      'We live and work in the same communities we serve. Our reputation is built on word-of-mouth from Brooklyn neighbors. That accountability drives everything we do.',
  },
  {
    title: 'Every Technician Is Vetted',
    body:
      'Every Avenue Locksmith technician is thoroughly background-checked, trained, and certified before entering a customer\'s home or business. You will never wonder who is at your door.',
  },
]

export const revalidate = 3600

export default async function AboutPage() {
  const reviews = await getGoogleReviews()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about/' },
  ])

  const webPageSchema = getWebPageSchema({
    title: 'About Avenue Locksmith — Brooklyn\'s Licensed & Trusted Locksmith',
    description:
      'Avenue Locksmith is Brooklyn\'s trusted local locksmith. Licensed, bonded, and insured. Serving all NYC boroughs since 2010.',
    url: '/about/',
  })

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />

      <BreadcrumbNav
        items={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />

      <HeroSection
        h1="About Avenue Locksmith — Brooklyn's Local Locksmith Team"
        subheadline="We're not a franchise. We're not a call center. We're a Brooklyn-based team of licensed locksmiths serving our neighbors across NYC."
        variant="service"
        showTrustBar={false}
      />

      {/* Our Story */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Who We Are</h2>
          <div className="prose prose-lg max-w-none text-brand-text space-y-5">
            <p>
              Avenue Locksmith was founded in 2010 with a straightforward goal: give Brooklyn residents
              and business owners access to a locksmith they could genuinely trust. At the time, the
              market was dominated by national aggregators — companies that take your call, charge
              inflated prices, and send out whoever is available. We wanted to be different.
            </p>
            <p>
              We started with a single truck and a commitment to three things: showing up fast,
              charging a fair price quoted before the work begins, and doing the job right. That
              reputation spread through neighborhoods one satisfied customer at a time — from
              Park Slope to Bay Ridge, Williamsburg to Canarsie.
            </p>
            <p>
              Today, Avenue Locksmith serves all five NYC boroughs with a team of fully licensed,
              bonded, and insured locksmiths. We handle everything from apartment lockouts and
              deadbolt installations to commercial access control systems and automotive key
              programming. But our roots are here in Brooklyn, and that community-first mindset
              drives everything we do.
            </p>
            <p>
              Our mission is simple: make quality security accessible to every Brooklyn resident
              and business owner, at a price that is honest and transparent. No hidden fees.
              No bait-and-switch quotes. No strangers at your door.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-14 md:py-20 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3 text-center">
            What Makes Avenue Locksmith Different
          </h2>
          <p className="text-brand-muted text-center mb-10 max-w-2xl mx-auto">
            There are a lot of locksmiths in Brooklyn. Here is why our customers call us back — and
            refer us to their neighbors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-brand-border shadow-sm"
              >
                <h3 className="text-lg font-bold text-brand-navy mb-2 flex items-start gap-2">
                  <CheckCircle size={20} className="text-brand-amber mt-0.5 shrink-0" aria-hidden="true" />
                  {item.title}
                </h3>
                <p className="text-brand-text text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Meet Our Team</h2>
          <p className="text-brand-text text-lg leading-relaxed mb-6">
            Every Avenue Locksmith technician is thoroughly vetted and trained before entering a
            customer&apos;s home or business. Our team includes specialists in residential security,
            commercial access control, and automotive locksmithing — so whoever shows up has the
            right expertise for your specific situation.
          </p>
          <p className="text-brand-text text-lg leading-relaxed mb-6">
            We conduct background checks on all technicians and require ongoing training to keep pace
            with evolving lock technology — from traditional pin tumbler cylinders to the latest
            smart lock platforms. Our team holds current certifications and regularly attends
            professional locksmith association training.
          </p>
          <p className="text-brand-text text-lg leading-relaxed">
            When you call us, you will always speak to a real person at Avenue Locksmith — not a
            call center operator in another state. And the technician who arrives will be an
            Avenue Locksmith employee, not a subcontractor you have never met.
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-14 md:py-20 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3 text-center">
            Our Credentials &amp; Certifications
          </h2>
          <p className="text-brand-muted text-center mb-10 max-w-2xl mx-auto">
            We are fully credentialed — licensed by the NYC Department of Consumer and Worker Protection (DCWP), bonded, and insured.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.label}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-brand-border shadow-sm"
              >
                <cred.icon
                  size={28}
                  className="text-brand-amber shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-bold text-brand-navy text-base">{cred.label}</p>
                  <p className="text-brand-muted text-sm mt-0.5">{cred.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            Committed to Brooklyn and All of NYC
          </h2>
          <p className="text-brand-text text-lg leading-relaxed mb-5">
            Our home base is Brooklyn — {BUSINESS.address.full}. We serve all Brooklyn neighborhoods
            and extend coverage across Queens, Manhattan, and Staten Island. Because we are
            genuinely local, we know the fastest routes, the most common lock types in Brooklyn
            apartment buildings, and what it takes to respond in 15–25 minutes.
          </p>
          <p className="text-brand-text text-lg leading-relaxed mb-5">
            We serve all five boroughs:{' '}
            <strong>Brooklyn, Queens, Manhattan, Staten Island, and the Bronx</strong>. For
            emergencies anywhere in NYC, call us first — we will give you an honest ETA before
            you commit.
          </p>
          <p className="text-brand-text text-lg leading-relaxed">
            When you call Avenue Locksmith, an Avenue Locksmith technician shows up. Every time.
          </p>
        </div>
      </section>

      {/* Testimonials Snippet */}
      <TestimonialsSection
        title="What Our Customers Say About Us"
        reviews={reviews}
        maxItems={3}
      />
      <div className="text-center pb-10 -mt-4 bg-brand-bg">
        <Link
          href="/testimonials/"
          className="inline-flex items-center gap-1.5 text-brand-navy font-semibold hover:text-brand-amber transition-colors text-sm"
        >
          Read all {BUSINESS.reviewCount}+ customer reviews &rarr;
        </Link>
      </div>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Need a Locksmith? We&apos;re Here.
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Questions about our business? Call or email us — we are happy to talk. No pressure,
            no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              <Phone size={22} aria-hidden="true" />
              {BUSINESS.phone}
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors border border-white/30"
            >
              <Mail size={22} aria-hidden="true" />
              {BUSINESS.email}
            </a>
          </div>
          <p className="text-white/50 text-sm mt-6">
            Available 24/7 &mdash; 365 days a year &middot; {BUSINESS.address.display}
          </p>
        </div>
      </section>
    </>
  )
}
