import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, ArrowRight } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { ServicesDeepDiveSection } from '@/components/sections/ServicesDeepDiveSection'
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
  description: `Licensed & insured locksmith in Brooklyn, NY. 15–25 min emergency response. Residential, commercial & auto locksmith services. NYC DCWP licensed, ALOA member, BBB accredited. Upfront pricing. Call ${BUSINESS.phone}.`,
  alternates: { canonical: `${BUSINESS.url}/` },
  openGraph: {
    title: `24/7 Locksmith in Brooklyn, NY — ${BUSINESS.name}`,
    description: `NYC DCWP licensed locksmith in Brooklyn. Emergency response in 15–25 min. Residential, commercial & auto. No hidden fees. Call ${BUSINESS.phone}.`,
    url: `${BUSINESS.url}/`,
  },
}

const HOME_FAQS = [
  {
    question: 'How fast can you reach me after I call?',
    answer:
      'For emergency lockout calls anywhere in Brooklyn, we aim to arrive within 15–25 minutes. Our technicians are positioned throughout the borough — not dispatched from one central location. When you call, we give you a specific ETA based on your address. Most of the time we beat the estimate.',
  },
  {
    question: 'Are you licensed and insured in New York?',
    answer:
      'Yes. Avenue Locksmith holds an active NYC DCWP (Department of Consumer & Worker Protection) Locksmith License — the city-issued credential required to legally operate as a locksmith in the five boroughs. We\'re also fully bonded, carry liability insurance, and are a member of ALOA (Associated Locksmiths of America). Ask for our license number when we arrive — we encourage verification before work starts.',
  },
  {
    question: 'How much does a locksmith cost in Brooklyn, NY?',
    answer:
      'Our standard pricing: emergency lockouts run $85–$145, lock rekeying is $55–$95 per lock, lock replacement starts at $130, and deadbolt installation (ANSI Grade 1) starts at $150. There\'s no separate service call fee added at the door — the price quoted on the phone covers the complete job. We always confirm the full cost before touching anything.',
  },
  {
    question: 'What is the difference between rekeying and replacing a lock?',
    answer:
      'Rekeying changes the internal pin configuration inside the existing lock cylinder so old keys no longer work. Your hardware stays — only the pins and keys change. Lock replacement means swapping out the entire lock with new hardware. Rekeying is right for 80% of situations (new move-in, lost key, security reset) and costs significantly less. Replacement makes sense when the lock is worn, damaged, or you want to upgrade the security grade.',
  },
  {
    question: 'Do you work on cars as well as homes and businesses?',
    answer:
      'Yes. We handle car lockouts, transponder key cutting and programming, key fob replacement, ignition repair, and broken key extraction for most domestic and foreign makes and models. We come to your location and typically charge 40–60% less than dealer pricing for the same service.',
  },
  {
    question: 'Can you make a new car key if I\'ve lost the only one I had?',
    answer:
      'In most cases, yes. We can cut and program a replacement key on-site for most vehicles without needing the original. The process and cost vary by vehicle — some modern cars require a dealer-specific security procedure, but for the majority of makes and models we handle this completely on-site. Call us with your year, make, and model for an accurate answer and quote.',
  },
  {
    question: 'Will you drill my lock during a lockout?',
    answer:
      'Drilling is a last resort, not a first move. Most residential locks can be opened non-destructively using proper picking or bypass techniques. We attempt non-destructive entry on every lockout call. If drilling is genuinely the only viable option — due to a severely damaged lock or a pick-resistant high-security cylinder — we tell you before we do it and explain why.',
  },
  {
    question: 'Do you offer same-day service for non-emergencies?',
    answer:
      'Yes. For scheduled work — deadbolt installation, lock upgrades, smart lock setup, master key systems, access control — we offer same-day and next-day appointments across Brooklyn. Call us or submit a quote request and we\'ll confirm availability.',
  },
  {
    question: 'What is a master key system and does my building need one?',
    answer:
      'A master key system is a keying arrangement where one key (the master) opens all locks in the system, while individual tenant keys each open only their assigned lock. It\'s standard for apartment buildings, offices, and commercial properties with multiple access points. Done correctly, it eliminates the chaos of carrying separate keys for every unit. Done poorly, it creates security gaps. We design and install these systems properly.',
  },
  {
    question: 'Do you handle post-eviction lock changes for landlords?',
    answer:
      'Yes. We provide legal eviction lock change services for NYC landlords and property managers. We understand the marshal eviction process and the paperwork requirements under NYC law. Call us when the marshal executes the order and we\'ll be there promptly to change the locks on your schedule.',
  },
  {
    question: 'How do I know I\'m not calling a scam locksmith?',
    answer:
      'NYC has a documented locksmith fraud problem — unlicensed operators advertise $15–$35 prices and charge hundreds more at the door. With Avenue Locksmith, you get a DCWP-licensed technician in a marked vehicle who quotes the complete price before starting. Our address at 973 E 55th St, Brooklyn is on file with the city. You can verify our DCWP license at nyc.gov/consumers before we arrive. We have 150+ verified reviews, an ALOA membership, and BBB accreditation — all independently verifiable.',
  },
  {
    question: 'What neighborhoods and boroughs do you serve?',
    answer:
      'We serve all Brooklyn neighborhoods — Park Slope, Williamsburg, DUMBO, Brooklyn Heights, Flatbush, Bay Ridge, Bed-Stuy, Crown Heights, Bushwick, Sunset Park, Greenpoint, Cobble Hill, Carroll Gardens, Red Hook, Canarsie, Bensonhurst, Brighton Beach, Coney Island, Sheepshead Bay, Midwood, Borough Park, and more. We also cover Queens, Manhattan, and Staten Island. Call with your address for an accurate ETA.',
  },
]

const ALL_NEIGHBORHOODS = [
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
  { name: 'Greenpoint', href: '/locksmith-near-me/greenpoint/' },
  { name: 'Red Hook', href: '/locksmith-near-me/red-hook/' },
  { name: 'Canarsie', href: '/locksmith-near-me/canarsie/' },
  { name: 'Bensonhurst', href: '/locksmith-near-me/bensonhurst/' },
  { name: 'Brighton Beach', href: '/locksmith-near-me/brighton-beach/' },
  { name: 'Coney Island', href: '/locksmith-near-me/coney-island/' },
  { name: 'Sheepshead Bay', href: '/locksmith-near-me/sheepshead-bay/' },
  { name: 'Midwood', href: '/locksmith-near-me/midwood/' },
  { name: 'Borough Park', href: '/locksmith-near-me/borough-park/' },
  { name: 'Prospect Heights', href: '/locksmith-near-me/prospect-heights/' },
  { name: 'Fort Greene', href: '/locksmith-near-me/fort-greene/' },
  { name: 'Clinton Hill', href: '/locksmith-near-me/clinton-hill/' },
]

const SPECIALIZED_SERVICES = [
  { name: 'Lock Rekeying', href: '/services/lock-rekey/' },
  { name: 'Lock Change', href: '/services/lock-change/' },
  { name: 'Deadbolt Installation', href: '/services/deadbolt-installation/' },
  { name: 'Key Duplication', href: '/services/key-duplication/' },
  { name: 'Safe Locksmith', href: '/services/safe-locksmith/' },
  { name: 'Mailbox Lock', href: '/services/mailbox-lock/' },
  { name: 'New Tenant Lock Change', href: '/services/new-tenant-lock-change/' },
  { name: 'Eviction Locksmith', href: '/services/eviction-locksmith/' },
  { name: 'Access Control', href: '/services/security-solutions/access-control/' },
  { name: 'Smart Locks', href: '/services/security-solutions/smart-locks/' },
  { name: 'CCTV Installation', href: '/services/security-solutions/cctv/' },
  { name: 'High-Security Locks', href: '/services/security-solutions/high-security-locks/' },
  { name: 'Door Reinforcement', href: '/services/security-solutions/door-reinforcement/' },
  { name: 'Keyless Entry', href: '/services/security-solutions/keyless-entry/' },
  { name: 'Biometric Access', href: '/services/security-solutions/biometric-access/' },
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
        subheadline="NYC DCWP licensed, ALOA member, BBB accredited. Emergency response in 15–25 minutes — any time, any borough. One call, a licensed technician at your door."
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

      {/* ── Services Overview Grid ───────────────────────────────────── */}
      <ServicesGrid
        title="Complete Locksmith Services for Brooklyn & NYC"
        subtitle="Residential lockouts, commercial security systems, automotive key programming — one licensed team handles everything. Upfront pricing on every job."
      />

      {/* ── Specialized Services pill links ──────────────────────────── */}
      <div className="bg-white border-t border-brand-border py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-semibold text-brand-muted uppercase tracking-wider mb-4">
            Every Service We Offer
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

      {/* ── Services Deep Dive ───────────────────────────────────────── */}
      <ServicesDeepDiveSection />

      {/* ── Why Choose Us ────────────────────────────────────────────── */}
      <WhyChooseUs title="Why Brooklyn Trusts Avenue Locksmith" />

      {/* ── About & Credentials (EEAT) ───────────────────────────────── */}
      <AboutCredentialsSection />

      {/* ── Pricing Guide ────────────────────────────────────────────── */}
      <PricingGuideSection />

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <TestimonialsSection
        title="Real Jobs. Real Customers. Real Brooklyn."
        maxItems={6}
      />

      {/* ── Scam Alert ───────────────────────────────────────────────── */}
      <ScamAlertSection />

      {/* ── Gallery ──────────────────────────────────────────────────── */}
      <GallerySection
        title="Recent Work Across Brooklyn"
        subtitle="Real jobs completed by our team — residential, commercial, automotive, and security installations. Click any photo to view full size."
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
              Serving All of Brooklyn & Greater NYC
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto">
              Technicians based throughout Brooklyn for fast response to every neighborhood — from Greenpoint to Coney Island. We also cover Queens, Manhattan, and Staten Island.
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
                Brooklyn Neighborhoods We Cover
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 mb-5">
                {ALL_NEIGHBORHOODS.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className="text-sm text-brand-text hover:text-brand-amber transition-colors py-1 px-2 rounded hover:bg-brand-amber/10"
                  >
                    {n.name}
                  </Link>
                ))}
              </div>

              <div className="bg-white border border-brand-border rounded-xl p-4 mb-5 text-sm text-brand-muted leading-relaxed">
                <p className="font-semibold text-brand-navy mb-1">Need a locksmith near you?</p>
                <p>
                  We cover all of Brooklyn — from{' '}
                  <Link href="/locksmith-near-me/park-slope/" className="text-brand-navy hover:text-brand-amber font-medium">Park Slope</Link>{' '}
                  and{' '}
                  <Link href="/locksmith-near-me/williamsburg/" className="text-brand-navy hover:text-brand-amber font-medium">Williamsburg</Link>{' '}
                  to{' '}
                  <Link href="/locksmith-near-me/bay-ridge/" className="text-brand-navy hover:text-brand-amber font-medium">Bay Ridge</Link>{' '}
                  and{' '}
                  <Link href="/locksmith-near-me/coney-island/" className="text-brand-navy hover:text-brand-amber font-medium">Coney Island</Link>.
                  For <Link href="/emergency-locksmith-in-brooklyn-ny/" className="text-brand-navy hover:text-brand-amber font-medium">emergency locksmith service in Brooklyn</Link> or a{' '}
                  <Link href="/24-hour-locksmith-in-brooklyn-ny/" className="text-brand-navy hover:text-brand-amber font-medium">24-hour locksmith</Link>,
                  call us any time — day, night, weekend, or holiday.
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
        title="Frequently Asked Questions"
      />

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Need a Locksmith in Brooklyn Right Now?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Available every hour of every day. One call and a licensed Avenue Locksmith technician is on their way — typically within 15–25 minutes anywhere in Brooklyn.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl mb-4"
          >
            <Phone size={26} aria-hidden="true" />
            <span>{BUSINESS.phone}</span>
          </a>
          <p className="text-white/60 text-sm">
            24/7 · NYC DCWP Licensed · ALOA Member · 15–25 Min Response · No Hidden Fees · 90-Day Warranty
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            {[
              { label: 'Emergency Locksmith', href: '/services/emergency-locksmith/' },
              { label: 'Residential', href: '/services/residential-locksmith/' },
              { label: 'Commercial', href: '/services/commercial-locksmith/' },
              { label: 'Auto Locksmith', href: '/services/auto-locksmith/' },
              { label: 'Eviction Services', href: '/services/eviction-locksmith/' },
              { label: 'Security Solutions', href: '/services/security-solutions/' },
              { label: 'Free Quote', href: '/free-quote/' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-brand-amber transition-colors underline underline-offset-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote Form ───────────────────────────────────────────────── */}
      <ContactFormSection
        title="Get a Free Quote — No Obligation"
        subtitle="Not an emergency? Tell us what you need and we'll confirm the exact price and availability within the hour."
      />
    </>
  )
}
