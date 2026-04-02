import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Shield, AlertTriangle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Reinforced Door Frame Installation in Brooklyn, NY — Kick-In Prevention | Avenue Locksmith',
  description: 'Door frame reinforcement in Brooklyn, NY. Stop kick-in attacks — the most common break-in method. Steel strike plates, door jamb armor. Pre-war buildings especially vulnerable. Call (347) 386-7164.',
  path: '/services/security-solutions/reinforced-door-frame-system/',
})

const FAQS = [
  {
    question: 'My door has a Grade 1 deadbolt — why would it still get kicked in?',
    answer: 'The deadbolt held. The frame did not. This is what happens in nearly every residential kick-in: the bolt extends into the strike plate, the strike plate is held by two 3/4" screws that only penetrate the door stop (the thin strip of molding), and a single kick generates enough force to split the wood around the screws. The deadbolt is intact — still attached to a piece of frame that is now hanging from the door. A Grade 1 deadbolt with a standard strike plate has not solved the kick-in problem. Only reinforcing the frame does.',
  },
  {
    question: 'How does door frame reinforcement actually work?',
    answer: 'There are two layers of protection: (1) Heavy-duty strike plate with 3-inch screws — the screws bypass the door stop and penetrate into the structural framing of the wall, distributing force across a much wider area. This alone significantly improves kick resistance. (2) Door frame reinforcement systems (like Door Armor Max) wrap the existing door frame in steel, distributing force along the entire length of the frame. Combined with a Grade 1 deadbolt, this combination makes a kick-in attempt take many more blows and generate significant noise — defeating the typical hit-and-run break-in approach.',
  },
  {
    question: 'My Brooklyn apartment has a pre-war door frame — is the reinforcement still possible?',
    answer: 'Pre-war frames are actually where reinforcement matters most. Original 1910s–1940s construction in Brooklyn uses aged wood that offers less resistance than newer construction, and many frames have been patched, painted over, and weakened by decades of use. The good news: steel reinforcement systems work over existing frames and do not require replacement. We assess the frame condition on arrival — if the wood is too deteriorated for proper screw purchase, we may recommend more extensive repair, but in most cases a standard reinforcement installation works.',
  },
  {
    question: 'Is door frame reinforcement worth it for a renter?',
    answer: 'Yes — and it is allowed under NYC tenant law. You can improve your own security as long as you restore the apartment to its original condition when you leave (or negotiate to leave the improvement). A reinforced strike plate with 3-inch screws fills the same screw holes as the original plate. A steel frame wrap can be removed and the minimal fastener holes patched. The security improvement is substantial and the install is reversible. Some landlords actually appreciate tenants who improve building security.',
  },
  {
    question: 'Does door reinforcement require replacing the door itself?',
    answer: 'In most cases, no. We reinforce the existing door frame — the frame stays in place, the door stays in place. Door Armor Max and similar systems add steel over your existing frame. If the door itself is hollow-core, has a weak edge where the lock engages, or shows kick damage, we may recommend door edge reinforcement or door replacement — but the frame can always be reinforced independently.',
  },
]

const COMPONENTS = [
  { label: 'Grade 1 deadbolt', detail: 'The lock itself — 250,000 cycle tested' },
  { label: 'Reinforced strike plate', detail: 'Steel plate with 3" screws into structural framing' },
  { label: 'Door frame wrap (Armor Max)', detail: 'Steel sleeve over existing frame — full-length protection' },
  { label: 'Door edge guard', detail: 'Steel reinforcement at the lock bore — prevents door edge splitting' },
  { label: 'Hinge bolts', detail: 'Steel pins on hinge side prevent hinge-side pry attacks' },
  { label: 'Door sweep reinforcement', detail: 'Bottom gap protection — also improves weather sealing' },
]

export default function ReinforcedDoorFramePage() {
  const canonicalUrl = `${BUSINESS.url}/services/security-solutions/reinforced-door-frame-system/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Reinforced Door Frame Installation in Brooklyn, NY',
    description: 'Door frame reinforcement in Brooklyn, NY. Steel strike plates with 3-inch screws, door jamb armor, and full-frame steel systems. Stops kick-in attacks. Pre-war and modern buildings.',
    url: canonicalUrl,
    serviceType: 'Door Frame Reinforcement',
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
      priceRange: '$175–$450',
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
        { name: 'Security Solutions', url: '/services/security-solutions/' },
        { name: 'Reinforced Door Frame', url: '/services/security-solutions/reinforced-door-frame-system/' },
      ])} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Security Solutions', href: '/services/security-solutions/' },
        { label: 'Reinforced Door Frame' },
      ]} />

      <HeroSection
        h1="Reinforced Door Frame Installation in Brooklyn, NY — Stop Kick-Ins"
        subheadline="Most break-ins in Brooklyn use a kick, not a lock pick. Your Grade 1 deadbolt will hold. Your door frame probably will not. We fix the frame."
        variant="service"
        showTrustBar
      />

      {/* Frame failure explanation — unique angle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            The Real Weak Point in Your Apartment Door
          </h2>
          <p className="text-brand-text leading-relaxed mb-4">
            A standard residential door frame — in Brooklyn as everywhere — consists of wood framing with a decorative trim (door stop) attached to the face. The strike plate, the piece of hardware that receives the deadbolt, is typically screwed into the door stop with two 3/4-inch screws. Those screws do not reach the structural framing behind the trim.
          </p>
          <p className="text-brand-text leading-relaxed mb-4">
            A kick near the lock generates 150–200 lbs of force at a specific point. Those two small screws fail. The door stop splits. The frame around the strike plate cracks. The door is open. This takes one to three kicks — 2–5 seconds.
          </p>
          <p className="text-brand-text leading-relaxed mb-6">
            In Brooklyn&apos;s pre-war housing stock, where door frames are original wood construction from 80–100 years ago and have been repaired and patched multiple times, frame resistance is particularly low. We see post-kick-in calls regularly from buildings in Bed-Stuy, Crown Heights, Flatbush, and Bushwick where well-maintained locks were bypassed entirely because the frames failed.
          </p>

          <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} className="text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-amber-900 mb-1">The fix is less expensive than you think</p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  A heavy-duty strike plate with 3-inch screws costs $20–$40 in hardware and takes 20 minutes to install. This single upgrade — the screws that bypass the door stop into the structural framing — is the highest-value security upgrade in this price range. A full door frame reinforcement system runs $175–$350 installed. For context, the cost of replacing a kicked-in door frame is $500–$1,500.
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-brand-navy mb-4">Reinforcement System Components</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COMPONENTS.map((item) => (
              <div key={item.label} className="flex items-start gap-3 bg-brand-bg rounded-xl p-4 border border-brand-border">
                <Shield size={14} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-brand-navy text-sm">{item.label}</p>
                  <p className="text-brand-muted text-xs">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full system combination */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-brand-navy mb-4">The Combination That Works</h2>
          <div className="bg-white rounded-xl border-2 border-brand-amber p-5">
            <p className="text-brand-text leading-relaxed text-sm mb-3">
              Maximum residential door security requires addressing both the lock and the frame. Upgrading only the lock leaves the frame vulnerability. Installing only frame reinforcement with a weak lock leaves the lock as the weak point.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              {[
                { component: 'ANSI Grade 1 deadbolt', result: 'Lock itself withstands attack' },
                { component: '3" screw strike plate', result: 'Frame at the bolt holds against kick' },
                { component: 'Steel frame wrap', result: 'Full-length protection — no weak point left' },
              ].map((item) => (
                <div key={item.component} className="text-center">
                  <div className="w-10 h-10 bg-brand-amber rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <p className="font-bold text-brand-navy text-xs">{item.component}</p>
                  <p className="text-brand-muted text-xs mt-1">{item.result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Door Frame Reinforcement FAQ — Brooklyn Home Security" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Deadbolt Installation', href: '/services/deadbolt-installation/' },
              { label: 'High-Security Locks', href: '/services/security-solutions/high-security-locks/' },
              { label: 'Lock Change (After Break-In)', href: '/services/lock-change/' },
              { label: 'Residential Locksmith', href: '/services/residential-locksmith/' },
              { label: 'All Security Solutions', href: '/services/security-solutions/' },
              { label: 'Emergency Locksmith', href: '/services/emergency-locksmith/' },
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
          <h2 className="text-3xl font-bold mb-3">Reinforce Your Brooklyn Door Frame</h2>
          <p className="text-white/80 mb-8">Free assessment — we look at your door and frame and recommend the right reinforcement.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl">
            <Phone size={26} aria-hidden="true" />{BUSINESS.phone}
          </a>
        </div>
      </section>

      <ContactFormSection
        title="Schedule a Door Security Assessment"
        subtitle="We evaluate your door, frame, and locks — and recommend exactly what needs upgrading."
      />
    </>
  )
}
