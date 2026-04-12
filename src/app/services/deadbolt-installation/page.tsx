import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildServiceMetadata } from '@/lib/seo'
import { BUSINESS, LOCK_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildServiceMetadata({
  serviceName: 'Deadbolt Installation',
  path: '/services/deadbolt-installation/',
  customTitle: 'Deadbolt Installation in Brooklyn, NY — Grade 1 Deadbolts & Frame Reinforcement | Avenue Locksmith',
  customDescription: 'Deadbolt installation in Brooklyn, NY. ANSI Grade 1 deadbolts — Schlage, Kwikset, Medeco. Door frame reinforcement included. Most break-ins are frame failures, not lock failures. Call (347) 386-7164.',
})

const FAQS = [
  {
    question: 'My door was just kicked in even though I had a deadbolt — how did that happen?',
    answer: 'This is the most common question after a break-in with a deadbolt in place. The deadbolt itself almost certainly held — the door frame split around it. In most Brooklyn apartment buildings, the strike plate (the metal piece in the frame that the bolt extends into) is held by two short 3/4" screws that only penetrate the door stop, not the structural frame. One kick generates enough force to split that wood. Installing a heavy-duty strike plate with 3" screws — screws that reach into the door\'s structural framing — turns a one-kick entry into a serious forced-entry attempt.',
  },
  {
    question: 'What is the difference between a single-cylinder and double-cylinder deadbolt?',
    answer: 'Single-cylinder deadbolts use a key outside, thumb-turn inside — the standard for most apartments. Double-cylinder deadbolts require a key on both sides. Double-cylinder adds security against reach-through attacks on glass-panel doors (someone breaking a glass pane to turn the thumb-turn) but creates a fire safety risk. If you cannot find your key in an emergency, you cannot exit. NYC fire code has specific provisions about this. We advise double-cylinder only when there is a specific architectural reason and only when a key is kept near the door at all times.',
  },
  {
    question: 'What ANSI grade deadbolt do you recommend for a Brooklyn apartment?',
    answer: 'ANSI Grade 1 for all exterior doors — no exceptions. Most Brooklyn apartments come with Grade 2 or Grade 3 builder hardware installed to reduce construction costs. Upgrading to a Schlage B60N (Grade 1, around $60 in hardware) is the best security value you can buy. Grade 1 deadbolts withstand 250,000 operating cycles and significantly more force than Grade 2 or Grade 3. Pair it with a reinforced strike plate and 3" screws, and you have a combination that defeats most forced-entry attempts.',
  },
  {
    question: 'Can a deadbolt be installed in a door that does not already have one?',
    answer: 'Yes. We drill a new 2-1/8" bore hole and a 1" latch hole (standard backset is 2-3/8" or 2-3/4" — we measure first). On wooden doors, this is a 30–40 minute job. Steel doors and reinforced fire doors require carbide bits and more time. Pre-war Brooklyn apartment doors often have non-standard dimensions from decades of repairs — we account for this. We do not start drilling without measuring and confirming fit.',
  },
  {
    question: 'How much does deadbolt installation cost in Brooklyn?',
    answer: 'A complete deadbolt installation — hardware, labor, and a reinforced strike plate — runs $125–$250 for Schlage or Kwikset Grade 1. Medeco and Mul-T-Lock high-security deadbolts run $200–$400 installed. Adding door frame reinforcement (the steel wrapping system) adds $75–$150. We quote everything upfront. If you supply your own lock, labor only starts at $75.',
  },
]

const INSTALLATION_TYPES = [
  { label: 'Deadbolt replacement', desc: 'Swap out an existing deadbolt for a Grade 1 upgrade — 20–30 minutes' },
  { label: 'New deadbolt installation', desc: 'Door with no existing deadbolt — we drill and fit, 40–60 minutes' },
  { label: 'Strike plate reinforcement', desc: 'Heavy-duty plate with 3" screws — the single highest-value upgrade' },
  { label: 'Door frame reinforcement', desc: 'Steel wrap system — stops kick-ins regardless of lock quality' },
  { label: 'Double cylinder installation', desc: 'Key both sides — for glass-panel doors with specific security needs' },
  { label: 'High-security deadbolt', desc: 'Medeco, Mul-T-Lock, Abloy — restricted keys, drill and pick resistant' },
]

export default function DeadboltInstallationPage() {
  const canonicalUrl = `${BUSINESS.url}/services/deadbolt-installation/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Deadbolt Installation in Brooklyn, NY',
    description: 'Professional deadbolt installation in Brooklyn, NY. ANSI Grade 1 deadbolts with door frame reinforcement. Schlage, Kwikset, Medeco. Same-day service. Licensed & insured.',
    url: canonicalUrl,
    serviceType: 'Deadbolt Installation',
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
      priceRange: '$125–$400',
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
        { name: 'Deadbolt Installation', url: '/services/deadbolt-installation/' },
      ])} />
      <JsonLd data={getServiceSchema({ name: 'Deadbolt Installation', description: 'Professional deadbolt installation in Brooklyn, NY. ANSI Grade 1 deadbolts with door frame reinforcement. Schlage, Kwikset, Medeco. Same-day service. Licensed & insured.', url: '/services/deadbolt-installation/', serviceType: 'Deadbolt Installation', brands: LOCK_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Deadbolt Installation in Brooklyn, NY — Grade 1 Deadbolts & Frame Reinforcement | Avenue Locksmith', description: 'Deadbolt installation in Brooklyn, NY. ANSI Grade 1 deadbolts — Schlage, Kwikset, Medeco. Door frame reinforcement included. Most break-ins are frame failures, not lock failures. Call (347) 386-7164.', url: '/services/deadbolt-installation/' })} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Deadbolt Installation' },
      ]} />

      <HeroSection
        h1="Deadbolt Installation in Brooklyn, NY — Grade 1 Hardware & Frame Reinforcement"
        subheadline="A deadbolt in a weak frame is a false sense of security. We install ANSI Grade 1 deadbolts and reinforce the door frame — the combination that actually stops kick-ins."
        variant="service"
        showTrustBar
      />

      {/* The frame failure problem — unique angle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            The Real Reason Doors Get Kicked In — It Is Not the Lock
          </h2>
          <p className="text-brand-text leading-relaxed mb-4">
            Studies of residential burglaries consistently show the same finding: most forced entries happen at the door frame, not the lock. A burglar kicks the door near the knob or deadbolt, splitting the wooden frame around the strike plate. The deadbolt itself is often intact — still bolted into a piece of wood that is now dangling from the doorway.
          </p>
          <p className="text-brand-text leading-relaxed mb-6">
            In Brooklyn&apos;s older housing stock — pre-war buildings, brownstones, and converted row houses — door frames are often original construction from the early 1900s. The wood is aged, the strike plate is held by two short screws, and the frame offers little resistance to a determined kick.
          </p>

          <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle size={20} className="text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-amber-900 mb-1">What this means for your installation</p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  A Grade 1 deadbolt installed in a standard frame is better than a Grade 3 deadbolt — but the weak link is still the frame. We always include a reinforced strike plate with 3-inch screws in every deadbolt installation. For older buildings or post-break-in situations, we recommend the full door frame reinforcement system.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INSTALLATION_TYPES.map((item) => (
              <div key={item.label} className="flex items-start gap-3 bg-brand-bg rounded-xl p-4 border border-brand-border">
                <CheckCircle size={15} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-brand-navy text-sm">{item.label}</p>
                  <p className="text-brand-muted text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANSI grade table */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-5">ANSI Grade 1 vs Grade 2 vs Grade 3 — What You Need to Know</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {[
              { grade: 'Grade 3', label: 'Builder-Grade', cycles: '75,000 cycles', screws: '500 lb door slam resistance', color: 'border-red-200 bg-red-50', badge: 'bg-red-100 text-red-700', msg: 'Ships in most new construction' },
              { grade: 'Grade 2', label: 'Residential', cycles: '150,000 cycles', screws: '250,000 cycle tested', color: 'border-yellow-200 bg-yellow-50', badge: 'bg-yellow-100 text-yellow-700', msg: 'Acceptable for secondary doors' },
              { grade: 'Grade 1', label: 'Commercial', cycles: '250,000 cycles', screws: '10 lb door slam, max resistance', color: 'border-green-200 bg-green-50', badge: 'bg-green-100 text-green-700', msg: 'Our recommendation for all exterior doors' },
            ].map((g) => (
              <div key={g.grade} className={`rounded-xl p-5 border-2 ${g.color}`}>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${g.badge}`}>{g.grade}</span>
                <p className="font-bold text-brand-navy mt-2">{g.label}</p>
                <p className="text-brand-muted text-xs mt-2">{g.cycles}</p>
                <p className="text-brand-muted text-xs mt-1 font-medium">{g.msg}</p>
              </div>
            ))}
          </div>
          <p className="text-brand-muted text-xs">Cost difference between Grade 3 and Grade 1 hardware: approximately $30–$60. The security difference is substantial.</p>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Deadbolt Installation FAQ — Brooklyn Door Security" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Reinforced Door Frame System', href: '/services/security-solutions/reinforced-door-frame-system/' },
              { label: 'High-Security Lock Upgrade', href: '/services/security-solutions/high-security-locks/' },
              { label: 'Lock Change (Full Replacement)', href: '/services/lock-change/' },
              { label: 'Lock Rekeying', href: '/services/lock-rekey/' },
              { label: 'Residential Locksmith', href: '/services/residential-locksmith/' },
              { label: 'All Services', href: '/services/' },
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
          <h2 className="text-3xl font-bold mb-3">Install a Grade 1 Deadbolt in Brooklyn Today</h2>
          <p className="text-white/80 mb-8">Same-day service. We stock Schlage, Kwikset, and Medeco — hardware arrives with us.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl">
            <Phone size={26} aria-hidden="true" />{BUSINESS.phone}
          </a>
        </div>
      </section>

      <ContactFormSection
        title="Get a Deadbolt Installation Quote"
        subtitle="Tell us your door type and we'll recommend the right hardware and frame protection."
      />
    </>
  )
}
