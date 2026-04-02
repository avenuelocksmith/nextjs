import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, ArrowRight } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { PricingGuideSection } from '@/components/sections/PricingGuideSection'
import { AboutCredentialsSection } from '@/components/sections/AboutCredentialsSection'
import { BlogResourcesSection } from '@/components/sections/BlogResourcesSection'
import { SecurityTipsSection } from '@/components/sections/SecurityTipsSection'
import { ScamAlertSection } from '@/components/sections/ScamAlertSection'
import { MapEmbed } from '@/components/ui/MapEmbed'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/schema'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: `24/7 Locksmith in Brooklyn, NY — ${BUSINESS.name} | ${BUSINESS.phone}`,
  description: `Licensed & insured locksmith in Brooklyn, NY. Emergency lockout response in 15–25 minutes. Residential, commercial & auto locksmith services. Honest pricing, no hidden fees. Call ${BUSINESS.phone}.`,
  alternates: { canonical: `${BUSINESS.url}/` },
  openGraph: {
    title: `24/7 Locksmith in Brooklyn, NY — ${BUSINESS.name}`,
    description: `Licensed & insured locksmith serving Brooklyn, Queens & Manhattan. Emergency response in 15–25 min. Call ${BUSINESS.phone}.`,
    url: `${BUSINESS.url}/`,
  },
}

const HOME_FAQS = [
  {
    question: 'How fast can you reach me after I call?',
    answer:
      'For emergency lockout calls in Brooklyn, we guarantee arrival within 15–25 minutes. Our technicians are stationed throughout the borough — not dispatched from a single location — so most of the time we arrive faster than that. When you call, we give you a real ETA based on your exact location.',
  },
  {
    question: 'Are you licensed and insured in New York?',
    answer:
      'Yes. Avenue Locksmith holds a New York City DCWP (Department of Consumer & Worker Protection) Locksmith License and is fully bonded and insured. Every technician on our team carries their credentials and liability coverage on every job. Ask to see the license before we start — we encourage it.',
  },
  {
    question: 'How much does a locksmith cost in Brooklyn, NY?',
    answer:
      'Our pricing is transparent and confirmed before any work begins. Emergency lockout service typically runs $75–$125. Lock rekeying is $50–$100 per lock. Standard lock replacement starts at $125–$250. Deadbolt installation with ANSI Grade 1 hardware starts at $150. All prices are for labor plus standard hardware — no hidden trip fees added at the door.',
  },
  {
    question: 'What is the difference between rekeying and replacing a lock?',
    answer:
      'Rekeying changes the internal pin configuration so your current key no longer works — a new key is cut to match the new pins. The lock hardware stays in place. Replacing a lock means installing entirely new hardware. Rekeying is the right choice in most situations (especially after moving into a new place) because it costs significantly less and provides the same security benefit as a full replacement.',
  },
  {
    question: 'Do you work on cars as well as homes and businesses?',
    answer:
      'Yes. We handle automotive locksmith work including car lockouts, transponder key cutting and programming, key fob replacement, and ignition repair for most domestic and foreign makes and models. We typically cost a fraction of what a dealership charges for the same service.',
  },
  {
    question: 'Do you offer same-day appointments for non-emergencies?',
    answer:
      'Absolutely. For non-urgent work like deadbolt installation, lock upgrades, smart lock setup, or key duplication, we schedule same-day and next-day appointments. Submit a free quote request online or call us to check availability.',
  },
  {
    question: 'How do I know I\'m not hiring a scam locksmith?',
    answer:
      'NYC has a documented problem with fraudulent locksmith operators who advertise $15–$35 prices and then charge hundreds more at the door. With Avenue Locksmith, you get a licensed technician in a branded vehicle who quotes the full price before touching your lock. You can verify our NYC DCWP license before any work begins. We have a real address at 973 E 55th St, Brooklyn — look us up.',
  },
  {
    question: 'What neighborhoods and boroughs do you serve?',
    answer:
      'We serve all Brooklyn neighborhoods — from Park Slope and Williamsburg to Bay Ridge, Flatbush, Crown Heights, and beyond. We also cover Queens, Manhattan, and Staten Island. Call us with your address and we\'ll give you a specific ETA.',
  },
]

const TOP_NEIGHBORHOODS = [
  { name: 'Park Slope', href: '/locksmith-near-me/park-slope/' },
  { name: 'Williamsburg', href: '/locksmith-near-me/williamsburg/' },
  { name: 'DUMBO', href: '/locksmith-near-me/dumbo/' },
  { name: 'Brooklyn Heights', href: '/locksmith-near-me/brooklyn-heights/' },
  { name: 'Flatbush', href: '/locksmith-near-me/flatbush/' },
  { name: 'Bay Ridge', href: '/locksmith-near-me/bay-ridge/' },
  { name: 'Bed-Stuy', href: '/locksmith-near-me/bedford-stuyvesant/' },
  { name: 'Crown Heights', href: '/locksmith-near-me/crown-heights/' },
  { name: 'Bushwick', href: '/locksmith-near-me/bushwick/' },
  { name: 'Sunset Park', href: '/locksmith-near-me/sunset-park/' },
  { name: 'Cobble Hill', href: '/locksmith-near-me/cobble-hill/' },
  { name: 'Carroll Gardens', href: '/locksmith-near-me/carroll-gardens/' },
]

const SPECIALIZED_SERVICES = [
  { name: 'Lock Rekeying', href: '/services/lock-rekey/' },
  { name: 'Lock Change', href: '/services/lock-change/' },
  { name: 'Deadbolt Installation', href: '/services/deadbolt-installation/' },
  { name: 'Key Duplication', href: '/services/key-duplication/' },
  { name: 'Safe Locksmith', href: '/services/safe-locksmith/' },
  { name: 'Mailbox Lock', href: '/services/mailbox-lock/' },
  { name: 'New Tenant Lock Change', href: '/services/new-tenant-lock-change/' },
  { name: 'Access Control', href: '/services/security-solutions/access-control/' },
  { name: 'Smart Locks', href: '/services/security-solutions/smart-locks/' },
  { name: 'CCTV Installation', href: '/services/security-solutions/cctv/' },
  { name: 'High-Security Locks', href: '/services/security-solutions/high-security-locks/' },
  { name: 'Door Reinforcement', href: '/services/security-solutions/door-reinforcement/' },
]

export default function HomePage() {
  const faqSchema = getFAQSchema(HOME_FAQS)
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Home', url: '/' }])

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <HeroSection
        h1="Brooklyn's Most Trusted 24/7 Locksmith Service"
        subheadline="Licensed & insured locksmiths serving all NYC boroughs. One call and we're there — emergency response in 15–25 minutes, any time of day or night."
        variant="homepage"
        showTrustBar
        showLiveActivity
      />

      {/* ── Promo Banner ─────────────────────────────────────────────── */}
      <div className="bg-brand-amber text-brand-navy py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-sm md:text-base">
            New customers save 10% — mention this offer when you call{' '}
            <a href={BUSINESS.phoneHref} className="underline hover:no-underline">
              {BUSINESS.phone}
            </a>
          </p>
        </div>
      </div>

      {/* ── How It Works ─────────────────────────────────────────────── */}
      <HowItWorksSection />

      {/* ── Services Grid ────────────────────────────────────────────── */}
      <ServicesGrid
        title="Complete Locksmith Services for Brooklyn & NYC"
        subtitle="From emergency lockouts to full security system installations — residential, commercial, and automotive locksmith services with upfront pricing."
      />

      {/* ── Specialized Services quick links ─────────────────────────── */}
      <div className="bg-white border-t border-brand-border py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-semibold text-brand-muted uppercase tracking-wider mb-4">
            Specialized Services
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {SPECIALIZED_SERVICES.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="text-xs font-medium text-brand-navy bg-brand-bg border border-brand-border rounded-full px-3 py-1.5 hover:border-brand-amber hover:text-brand-amber transition-colors"
              >
                {svc.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ────────────────────────────────────────────── */}
      <WhyChooseUs title="Why Brooklyn Trusts Avenue Locksmith" />

      {/* ── About & Credentials (EEAT) ───────────────────────────────── */}
      <AboutCredentialsSection />

      {/* ── Pricing Guide ────────────────────────────────────────────── */}
      <PricingGuideSection />

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <TestimonialsSection
        title="What Our Customers Say"
        maxItems={6}
      />
      <div className="text-center pb-10 -mt-4 bg-brand-bg">
        <Link
          href="/testimonials/"
          className="inline-flex items-center gap-1.5 text-brand-navy font-semibold hover:text-brand-amber transition-colors text-sm"
        >
          See all {BUSINESS.reviewCount}+ verified reviews <ArrowRight size={14} />
        </Link>
      </div>

      {/* ── Scam Alert ───────────────────────────────────────────────── */}
      <ScamAlertSection />

      {/* ── Gallery Preview ──────────────────────────────────────────── */}
      <GallerySection
        title="Recent Work Across Brooklyn"
        subtitle="Real locksmith jobs completed across Brooklyn and NYC — residential, commercial, auto, and security installations."
        maxItems={8}
        showFilters={false}
        showViewAll
      />

      {/* ── Security Tips ────────────────────────────────────────────── */}
      <SecurityTipsSection />

      {/* ── Blog Resources ───────────────────────────────────────────── */}
      <BlogResourcesSection />

      {/* ── Service Area ─────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-brand-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-brand-amber font-semibold text-sm uppercase tracking-wider mb-2">
              Where We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">
              Serving Brooklyn and All NYC Boroughs
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto">
              Our locksmiths are stationed throughout Brooklyn for rapid response to every neighborhood. We also serve Queens, Manhattan, and Staten Island.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <MapEmbed
              height="420px"
              title="Avenue Locksmith Service Area — Brooklyn, NY"
            />
            <div>
              <h3 className="font-bold text-brand-navy text-lg mb-4 flex items-center gap-2">
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
              <div className="bg-white border border-brand-border rounded-xl p-4 mb-5 text-sm text-brand-muted">
                <p>
                  <span className="font-semibold text-brand-navy">Need a locksmith near you?</span> We cover all of Brooklyn — from{' '}
                  <Link href="/locksmith-near-me/park-slope/" className="text-brand-navy hover:text-brand-amber font-medium">Park Slope</Link>{' '}
                  and{' '}
                  <Link href="/locksmith-near-me/williamsburg/" className="text-brand-navy hover:text-brand-amber font-medium">Williamsburg</Link>{' '}
                  to{' '}
                  <Link href="/locksmith-near-me/bay-ridge/" className="text-brand-navy hover:text-brand-amber font-medium">Bay Ridge</Link>{' '}
                  and{' '}
                  <Link href="/locksmith-near-me/flatbush/" className="text-brand-navy hover:text-brand-amber font-medium">Flatbush</Link>.{' '}
                  For <Link href="/emergency-locksmith-in-brooklyn-ny/" className="text-brand-navy hover:text-brand-amber font-medium">emergency locksmith service</Link> or a{' '}
                  <Link href="/24-hour-locksmith-in-brooklyn-ny/" className="text-brand-navy hover:text-brand-amber font-medium">24-hour locksmith</Link> in Brooklyn, call us any time.
                </p>
              </div>
              <Link
                href="/locksmith-near-me/"
                className="inline-flex items-center gap-1.5 text-brand-navy border border-brand-navy rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-brand-navy hover:text-white transition-colors"
              >
                See All Service Areas <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <FAQSection
        faqs={HOME_FAQS}
        title="Frequently Asked Questions About Our Brooklyn Locksmith Services"
      />

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Need a Locksmith in Brooklyn Right Now?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Available 24 hours a day, every day of the year. One call and a licensed Avenue Locksmith technician will be on their way in minutes.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl mb-4"
          >
            <Phone size={26} aria-hidden="true" />
            <span>{BUSINESS.phone}</span>
          </a>
          <p className="text-white/60 text-sm">
            24/7 · Licensed &amp; Insured · 15–25 Min Emergency Response · No Hidden Fees
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/services/emergency-locksmith/" className="text-white/70 hover:text-brand-amber transition-colors underline underline-offset-2">
              Emergency Locksmith
            </Link>
            <Link href="/services/residential-locksmith/" className="text-white/70 hover:text-brand-amber transition-colors underline underline-offset-2">
              Residential Services
            </Link>
            <Link href="/services/commercial-locksmith/" className="text-white/70 hover:text-brand-amber transition-colors underline underline-offset-2">
              Commercial Services
            </Link>
            <Link href="/services/auto-locksmith/" className="text-white/70 hover:text-brand-amber transition-colors underline underline-offset-2">
              Auto Locksmith
            </Link>
            <Link href="/free-quote/" className="text-white/70 hover:text-brand-amber transition-colors underline underline-offset-2">
              Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quote Form ───────────────────────────────────────────────── */}
      <ContactFormSection
        title="Get a Free Quote — No Obligation"
        subtitle="Not an emergency? Describe your situation and we'll get back to you within the hour with an exact price."
      />
    </>
  )
}
