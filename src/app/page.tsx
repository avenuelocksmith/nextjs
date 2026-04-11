import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, ArrowRight } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { HowACallRuns } from '@/components/sections/HowACallRuns'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import dynamic from 'next/dynamic'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { getBeforeAfterPairs } from '@/lib/gallery'
import { BUSINESS } from '@/lib/constants'

const ServicesGrid        = dynamic(() => import('@/components/sections/ServicesGrid').then(m => ({ default: m.ServicesGrid })))
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })))
const FAQSection          = dynamic(() => import('@/components/sections/FAQSection').then(m => ({ default: m.FAQSection })))
const ContactFormSection  = dynamic(() => import('@/components/sections/ContactFormSection').then(m => ({ default: m.ContactFormSection })))
const GallerySection      = dynamic(() => import('@/components/sections/GallerySection').then(m => ({ default: m.GallerySection })))
const MapEmbed            = dynamic(() => import('@/components/ui/MapEmbed').then(m => ({ default: m.MapEmbed })))

export const metadata: Metadata = {
  title: `24/7 Locksmith in Brooklyn, NY — ${BUSINESS.name} | ${BUSINESS.phone}`,
  description: `Licensed & insured locksmith in Brooklyn, NY. Emergency response in 15–25 minutes. Residential, commercial & auto locksmith services. Call ${BUSINESS.phone} now.`,
  alternates: { canonical: `${BUSINESS.url}/` },
  openGraph: {
    title: `24/7 Locksmith in Brooklyn, NY — ${BUSINESS.name}`,
    description: `Licensed & insured locksmith in Brooklyn, NY. Emergency response in 15–25 minutes. Call ${BUSINESS.phone}.`,
    url: `${BUSINESS.url}/`,
  },
}

const HOME_FAQS = [
  {
    question: 'How fast can you arrive after I call?',
    answer: 'We guarantee arrival within 15–25 minutes for emergency calls in Brooklyn. In most cases, we arrive even faster. We have technicians based throughout Brooklyn for rapid dispatch 24/7.',
  },
  {
    question: 'Are you licensed and insured in New York?',
    answer: 'Yes. Avenue Locksmith holds a NYC DCWP Locksmith License and is fully bonded and insured. Every technician on our team is trained and certified. You can verify our license number before we begin any work.',
  },
  {
    question: 'How much does a locksmith cost in Brooklyn?',
    answer: 'Our pricing is transparent and quoted upfront before we start. Emergency lockout service typically starts at $75–$125. Lock rekeying starts at $50–$100 per lock. Lock replacement starts at $125–$250. We always quote the full price before work begins — no hidden fees.',
  },
  {
    question: 'Do you work on cars as well as homes?',
    answer: 'Yes. We handle automotive locksmith services including car lockouts, key fob programming, transponder key cutting, and ignition repair for most makes and models at a fraction of dealership prices.',
  },
  {
    question: 'Do you offer same-day service for non-emergencies?',
    answer: 'Absolutely. For non-emergency jobs like lock upgrades, deadbolt installation, or key duplication, we offer same-day appointments. Call us or submit a quote request and we\'ll schedule at your convenience.',
  },
  {
    question: 'Do you serve neighborhoods outside Brooklyn?',
    answer: 'We primarily serve all Brooklyn neighborhoods, but we also cover Queens, Manhattan, and Staten Island. Call us with your location and we\'ll give you an accurate ETA.',
  },
]

const TOP_NEIGHBORHOODS = [
  { name: 'Park Slope', href: '/locksmith-near-me/park-slope-11215-11217/' },
  { name: 'Williamsburg', href: '/locksmith-near-me/williamsburg-11211-11249/' },
  { name: 'DUMBO', href: '/locksmith-near-me/dumbo-11201/' },
  { name: 'Brooklyn Heights', href: '/locksmith-near-me/brooklyn-heights-11201/' },
  { name: 'Flatbush', href: '/locksmith-near-me/flatbush-11226-11210/' },
  { name: 'Bay Ridge', href: '/locksmith-near-me/bay-ridge-11209/' },
  { name: 'Bed-Stuy', href: '/locksmith-near-me/bedford-stuyvesant-11216-11221-11233/' },
  { name: 'Crown Heights', href: '/locksmith-near-me/crown-heights-11213-11216-11225-11233/' },
  { name: 'Bushwick', href: '/locksmith-near-me/bushwick-11221/' },
  { name: 'Sunset Park', href: '/locksmith-near-me/sunset-park-11220-11232/' },
  { name: 'Cobble Hill', href: '/locksmith-near-me/cobble-hill-11201/' },
  { name: 'Carroll Gardens', href: '/locksmith-near-me/carroll-gardens-11231/' },
]

export default function HomePage() {
  const faqSchema = getFAQSchema(HOME_FAQS)
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Home', url: '/' }])
  const featuredPair = getBeforeAfterPairs()[0]

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={getWebPageSchema({ title: '24/7 Locksmith in Brooklyn, NY — Avenue Locksmith | (347) 386-7164', description: 'Licensed & insured locksmith in Brooklyn, NY. Emergency response in 15–25 minutes. Residential, commercial & auto locksmith services. Call (347) 386-7164 now.', url: '/' })} />

      {/* Hero */}
      <HeroSection
        h1="Brooklyn's Most Trusted 24/7 Locksmith Service"
        subheadline="Licensed & insured locksmiths serving all NYC boroughs. Call now — we arrive in 15–25 minutes, any time of day or night."
        variant="homepage"
      />

      {/* How It Works — 3-step mobile-first explainer */}
      <HowItWorks />

      {/* Services Grid */}
      <ServicesGrid
        title="Complete Locksmith Services for Brooklyn & NYC"
        subtitle="From emergency lockouts to full security system installations — residential, commercial, and automotive."
      />

      {/* How a call runs — editorial trust block (replaces Why-Choose-Us anti-pattern) */}
      <HowACallRuns />

      {/* Testimonials */}
      <TestimonialsSection
        title="What Our Customers Say"
        maxItems={3}
      />
      <div className="text-center pb-10 -mt-4 bg-brand-bg">
        <Link
          href="/testimonials/"
          className="inline-flex items-center gap-1.5 text-brand-charcoal font-semibold hover:text-brand-amber transition-colors text-sm"
        >
          See all {BUSINESS.reviewCount}+ reviews <ArrowRight size={14} />
        </Link>
      </div>

      {/* Featured before/after project */}
      {featuredPair && (
        <section className="py-14 md:py-20 bg-brand-bg">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-brand-amber uppercase tracking-wider mb-2">
                Project Spotlight
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-3">
                {featuredPair.after.title.replace(/ — After$/, '')}
              </h2>
              <p className="text-brand-muted text-sm md:text-base max-w-xl mx-auto">
                Drag the divider to see the same door before and after our technicians finished the job.
              </p>
            </div>
            <BeforeAfterSlider
              beforeSrc={`/gallery/${featuredPair.before.filename}`}
              afterSrc={`/gallery/${featuredPair.after.filename}`}
              alt={featuredPair.after.alt}
              caption={`${featuredPair.after.title.replace(/ — After$/, '')} · Completed ${featuredPair.after.dateCompleted}`}
            />
          </div>
        </section>
      )}

      {/* Gallery Preview */}
      <GallerySection
        title="Our Recent Work"
        subtitle="Real locksmith projects completed across Brooklyn and NYC — click any photo to view full size."
        maxItems={8}
        showFilters={false}
        showViewAll
      />

      {/* Service Area */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-3">
              Serving Brooklyn and All NYC Boroughs
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto">
              Our locksmiths are stationed throughout Brooklyn for rapid response. We also serve Queens, Manhattan, and Staten Island.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <MapEmbed
              height="400px"
              title="Avenue Locksmith Service Area — Brooklyn, NY"
            />
            <div>
              <h3 className="font-bold text-brand-charcoal text-lg mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-brand-amber" aria-hidden="true" />
                Brooklyn Neighborhoods We Serve
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                {TOP_NEIGHBORHOODS.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className="text-sm text-brand-text hover:text-brand-amber transition-colors py-1.5 px-2 rounded hover:bg-brand-amber/10"
                  >
                    {n.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/locksmith-near-me/"
                className="inline-flex items-center gap-1.5 text-brand-charcoal border border-brand-charcoal rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-brand-charcoal hover:text-white transition-colors"
              >
                See All Service Areas <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={HOME_FAQS}
        title="Frequently Asked Questions"
      />

      {/* Bottom CTA */}
      <section
        className="py-16 md:py-24 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0d1520 0%, #111827 50%, #1a2535 100%)' }}
      >
        {/* Radial amber glow behind button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <div className="w-96 h-96 bg-brand-amber/5 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Brooklyn locksmith dispatch — 24/7, straight from the shop at 973 E 55th St
          </h2>
          <p className="text-white/75 mb-8 text-lg">
            The same phone number reaches a licensed Brooklyn shop at 3am, 8pm, or Sunday morning.
            15–25 minute arrival across the borough, price locked before the truck leaves.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 animate-shimmer text-brand-charcoal font-bold px-10 py-5 rounded-xl text-xl mb-4 shadow-[0_4px_32px_rgba(245,158,11,0.4)]"
          >
            <Phone size={26} aria-hidden="true" />
            <span>{BUSINESS.phone}</span>
          </a>
          <p className="text-white/50 text-sm">
            Available 24/7 — 365 days a year · Licensed &amp; Insured · 15–25 Min Response Guarantee
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <ContactFormSection
        title="Get a Free Quote — No Obligation"
        subtitle="Not an emergency? Tell us what you need and we'll get back to you within the hour."
      />
    </>
  )
}
