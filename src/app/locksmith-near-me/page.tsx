import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, CheckCircle, ArrowRight } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { MapEmbed } from '@/components/ui/MapEmbed'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getBreadcrumbSchema, getFAQSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { NEIGHBORHOODS } from '@/lib/neighborhoods'

export const metadata: Metadata = buildMetadata({
  title: 'Locksmith Near Me in Brooklyn, NY — All Neighborhoods | Avenue Locksmith',
  description:
    'Local locksmith near you in Brooklyn, NY. Serving all 49 Brooklyn neighborhoods 24/7. 15–25 min emergency response. Licensed & insured. Find your neighborhood or call (347) 386-7164.',
  path: '/locksmith-near-me/',
})

const FAQS = [
  {
    question: 'How do I find a trustworthy locksmith near me in Brooklyn?',
    answer:
      'Look for a locksmith with a verified Brooklyn address, Google reviews tied to that address, and an upfront price commitment before any work begins. Avoid companies that quote $35–$50 on the phone — that is a known bait-and-switch tactic common in NYC. Avenue Locksmith is located at 973 E 55th St, Brooklyn, NY 11234. We give you the full price before touching your lock.',
  },
  {
    question: 'What is the difference between rekeying and replacing a lock?',
    answer:
      'Rekeying changes the internal pin configuration inside your existing lock cylinder so old keys no longer work — same lock hardware, new key combination. It costs $65–$85 per lock. Lock replacement swaps the entire lock for new hardware, which is necessary when the lock is damaged, worn, or you want to upgrade the security grade. Replacement runs $95–$175 installed. If your lock is in good working condition, rekeying is almost always the right call.',
  },
  {
    question: 'How fast does Avenue Locksmith respond to emergencies in Brooklyn?',
    answer:
      'Our technicians are stationed throughout Brooklyn, not dispatched from a regional hub. For most Brooklyn neighborhoods, we arrive within 15–25 minutes. Some outer areas like Gerritsen Beach or Bergen Beach may take 25–40 minutes. When you call (347) 386-7164, our dispatcher will give you an honest estimated arrival time based on current technician locations.',
  },
  {
    question: 'Does NYC law allow tenants to change their apartment locks?',
    answer:
      'Yes. Under NYC Administrative Code §27-2043, tenants have the right to change their own apartment door lock without the landlord\'s permission. The only requirement is that you provide the landlord a copy of the new key within 30 days. Lease clauses prohibiting lock changes are unenforceable under this law. We rekey your lock and cut the landlord copy on the spot.',
  },
  {
    question: 'What should I do right now if I am locked out of my Brooklyn apartment?',
    answer:
      'Call (347) 386-7164. Have your ID and proof of address ready (lease, utility bill, or mail to the address). Stay somewhere safe and well-lit while you wait. Do not attempt to break in through windows — it is dangerous and usually causes more damage than a locksmith call costs. We verify your identity on arrival and use non-destructive entry techniques in nearly all cases.',
  },
  {
    question: 'How much does emergency lockout service cost in Brooklyn?',
    answer:
      'Emergency lockout service starts at $75–$125 for a standard residential door. Commercial lockouts and automotive lockouts are priced similarly. We give you the exact total price before work begins — no hidden fees, no emergency surcharge added at the door. If the phone quote and the door quote do not match without explanation, send the technician away.',
  },
  {
    question: 'Can a Brooklyn locksmith open a car lockout?',
    answer:
      'Yes. We handle automotive lockouts for most domestic and foreign vehicles throughout Brooklyn. We use non-damaging slim jim and air wedge techniques — no broken windows. Car lockout service starts at $75. We handle residential, commercial, and automotive lockouts from the same dispatch.',
  },
]

// Group neighborhoods alphabetically for display
const ALPHA_GROUPS: Record<string, typeof NEIGHBORHOODS> = {}
for (const n of NEIGHBORHOODS) {
  const letter = n.name[0].toUpperCase()
  if (!ALPHA_GROUPS[letter]) ALPHA_GROUPS[letter] = []
  ALPHA_GROUPS[letter].push(n)
}
const sortedLetters = Object.keys(ALPHA_GROUPS).sort()

export default function LocksmithNearMePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locksmith Near Me', url: '/locksmith-near-me/' },
  ])

  const webPageSchema = getWebPageSchema({
    title: 'Locksmith Near Me in Brooklyn, NY — All Neighborhoods',
    description:
      'Local locksmith near you in Brooklyn, NY. Serving all 49 Brooklyn neighborhoods 24/7. 15–25 min emergency response. Licensed & insured.',
    url: '/locksmith-near-me/',
  })

  const faqSchema = getFAQSchema(FAQS)

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Locksmith Near Me' }]} />

      <HeroSection
        h1="Locksmith Near Me — Brooklyn, NY"
        subheadline="We cover every Brooklyn neighborhood with fast 15–25 minute emergency response. Find your neighborhood below or call now for immediate dispatch."
        variant="service"
        showTrustBar
      />

      {/* Why this page exists — unique editorial content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            A Real Brooklyn Locksmith — Not a Call Center
          </h2>
          <p className="text-brand-text leading-relaxed mb-4">
            When you search &ldquo;locksmith near me&rdquo; in Brooklyn, most results are national aggregators. They look local, but when you call, your job is dispatched to whoever is available — often a contractor from another borough with no accountability to the name you saw.
          </p>
          <p className="text-brand-text leading-relaxed mb-6">
            Avenue Locksmith is different. We are based at <strong>973 E 55th St, Brooklyn, NY 11234</strong>. Our technicians live and work in Brooklyn. When you call us, you get our dispatcher, our truck, our technician, and our price guarantee. We have served Brooklyn neighborhoods for over a decade — one job at a time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: '15–30 Min Response',
                body: 'Technicians stationed throughout Brooklyn — not dispatched from a regional hub.',
              },
              {
                title: 'Verified Technicians',
                body: 'Background-checked, licensed, and carries ID you can verify before work starts.',
              },
              {
                title: 'Transparent Pricing',
                body: 'Full price quoted before we touch your lock — not a low teaser with fees added at the door.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-brand-bg rounded-xl p-5 border border-brand-border">
                <CheckCircle size={18} className="text-brand-amber mb-2" aria-hidden="true" />
                <h3 className="font-bold text-brand-navy mb-1 text-sm">{item.title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood grid — grouped alphabetically */}
      <section className="py-14 md:py-20 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-brand-navy mb-3 text-center">
            Find Your Brooklyn Neighborhood
          </h2>
          <p className="text-brand-muted text-center mb-10 max-w-2xl mx-auto">
            Click your neighborhood for local response times, area-specific locksmith services, and answers to questions specific to where you live.
          </p>

          {sortedLetters.map((letter) => (
            <div key={letter} className="mb-6">
              <h3 className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-2 border-b border-brand-border pb-1">
                {letter}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {ALPHA_GROUPS[letter].map((n) => (
                  <Link
                    key={n.slug}
                    href={`/locksmith-near-me/${n.slug}/`}
                    className="flex items-center gap-2 p-3 bg-white hover:bg-brand-navy hover:text-white rounded-lg border border-brand-border hover:border-brand-navy transition-all group text-sm font-medium text-brand-text"
                  >
                    <MapPin
                      size={12}
                      className="text-brand-amber group-hover:text-brand-amber shrink-0"
                      aria-hidden="true"
                    />
                    <span className="truncate">{n.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-2 text-center">
            What We Do in Every Brooklyn Neighborhood
          </h2>
          <p className="text-brand-muted text-center text-sm mb-8 max-w-xl mx-auto">
            The same services, the same quality, the same pricing — wherever you are in Brooklyn.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                label: 'Emergency Lockout',
                href: '/services/emergency-locksmith/',
                desc: 'Home, car, and business lockouts. 15–25 min response, 24/7.',
              },
              {
                label: 'Lock Rekeying',
                href: '/services/lock-rekey/',
                desc: 'Change the key without changing the lock. From $65.',
              },
              {
                label: 'Deadbolt Installation',
                href: '/services/deadbolt-installation/',
                desc: 'Grade 1 deadbolts — the right hardware, installed right.',
              },
              {
                label: 'New Tenant Lock Change',
                href: '/services/new-tenant-lock-change/',
                desc: 'Move-in security — invalidate all previous keys.',
              },
              {
                label: 'Residential Locksmith',
                href: '/services/residential-locksmith/',
                desc: 'All home lock needs — apartments, brownstones, townhouses.',
              },
              {
                label: 'Commercial Locksmith',
                href: '/services/commercial-locksmith/',
                desc: 'Offices, storefronts, and master key systems.',
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-brand-bg rounded-xl p-4 border border-brand-border hover:border-brand-amber hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-1">
                  <p className="font-bold text-brand-navy text-sm">{s.label}</p>
                  <ArrowRight
                    size={14}
                    className="text-brand-muted group-hover:text-brand-amber transition-colors shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-brand-muted text-xs leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-14 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-3 text-center">
            Our Service Area — All of Brooklyn
          </h2>
          <p className="text-brand-muted text-center mb-8 max-w-xl mx-auto text-sm">
            Based in southeastern Brooklyn, we cover all 49 neighborhoods with the fastest response times in the borough.
          </p>
          <MapEmbed height="450px" title="Avenue Locksmith Service Area — Brooklyn, NY" />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={FAQS}
        title="Locksmith Near Me — Frequently Asked Questions"
      />

      {/* Related pages — no orphans */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-lg font-bold text-brand-navy mb-4">Related Services &amp; Resources</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: '24-Hour Locksmith in Brooklyn', href: '/24-hour-locksmith-in-brooklyn-ny/' },
              { label: 'Emergency Locksmith in Brooklyn', href: '/emergency-locksmith-in-brooklyn-ny/' },
              { label: 'Residential Locksmith Services', href: '/services/residential-locksmith/' },
              { label: 'Commercial Locksmith Services', href: '/services/commercial-locksmith/' },
              { label: 'Get a Free Quote', href: '/free-quote/' },
              { label: 'About Avenue Locksmith', href: '/about/' },
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

      {/* CTA */}
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Brooklyn neighborhood dispatch — 15–25 minutes, borough-wide
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Technicians staged across Brooklyn from the Flatlands shop. Price locked before the
            truck leaves. 24/7, 365 days a year.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl"
          >
            <Phone size={26} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
          <p className="text-white/50 text-sm mt-5">
            Licensed &amp; Insured · Upfront Pricing · No Hidden Fees
          </p>
        </div>
      </section>
    </>
  )
}
