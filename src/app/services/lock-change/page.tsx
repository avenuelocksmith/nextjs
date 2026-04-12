import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Shield } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildServiceMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildServiceMetadata({
  serviceName: 'Lock Change',
  path: '/services/lock-change/',
  customTitle: 'Lock Change in Brooklyn, NY — Full Replacement Any Lock | Avenue Locksmith',
  customDescription: 'Lock change service in Brooklyn, NY. Full lock replacement — any brand, any door. After break-in, worn locks, security upgrades. ANSI Grade 1 & 2 options. Call (347) 386-7164.',
})

const FAQS = [
  {
    question: 'What is the difference between ANSI Grade 1, Grade 2, and Grade 3 deadbolts?',
    answer: 'ANSI/BHMA grading is the industry standard for lock durability and security. Grade 1 (commercial) withstands 250,000 cycles, a 10-pound door slam, and significant forced entry attempts — recommended for all Brooklyn apartment exterior doors. Grade 2 (residential heavy duty) withstands 150,000 cycles — suitable for interior or secondary doors. Grade 3 (residential) withstands 75,000 cycles — builder-grade hardware often shipped with new apartments, adequate but not optimal. We always recommend Grade 1 for exterior doors.',
  },
  {
    question: 'My lock was kicked in during a break-in — what needs replacing?',
    answer: 'Almost certainly more than just the lock. A kicked-in door typically damages the strike plate (the metal plate on the door frame where the bolt inserts), the door frame itself (the wood splits when struck), and sometimes the door edge. Replacing only the lock without repairing the frame and strike plate leaves the same kick-in vulnerability. We replace the lock, install a reinforced 3-inch-screw strike plate, and assess the door frame — all in one visit.',
  },
  {
    question: 'Can I upgrade my lock myself or should I use a locksmith?',
    answer: 'You can DIY a like-for-like replacement if the new lock has the same backset and bore size as the old one and your door has no unusual requirements. However, common DIY problems include: misaligned strike plates (deadbolt doesn\'t retract fully), incorrect backset leading to a lock that sticks, and improperly seated deadbolt bolts. A misaligned lock is a security vulnerability. For exterior doors, a 30-minute professional installation is worth it — we test everything before we leave.',
  },
  {
    question: 'My Brooklyn apartment has a door that was professionally installed 20 years ago — is the lock still safe?',
    answer: 'Depends on the brand and how it has been maintained. A 20-year-old Schlage B60N that was lubricated occasionally may be perfectly fine. A 20-year-old builder-grade lock that has never been serviced and is visibly worn is a liability. Signs you should replace: key requires force to turn, deadbolt does not fully extend, visible wear marks on the keyhole surround, or the bolt wobbles. We inspect and give an honest assessment.',
  },
  {
    question: 'Does changing my lock affect my renters insurance or homeowners insurance?',
    answer: 'Many insurance policies specify "deadbolt locks on all exterior doors" as a requirement, and some premium discounts require ANSI Grade 1. Upgrading your lock hardware may qualify you for a discount — contact your insurer and ask what they require. We provide a dated receipt showing the brand, model, and ANSI grade of everything installed, which is what insurers typically need for documentation.',
  },
]

const LOCK_BRANDS = [
  { brand: 'Schlage', grade: 'Grade 1', notes: 'Best value for most Brooklyn apartments' },
  { brand: 'Medeco', grade: 'Grade 1', notes: 'High-security, restricted key, pick-resistant' },
  { brand: 'Mul-T-Lock', grade: 'Grade 1', notes: 'Israeli engineering, patent-protected keyway' },
  { brand: 'Kwikset', grade: 'Grade 1–2', notes: 'Affordable, SmartKey re-keying technology' },
  { brand: 'Abloy', grade: 'Grade 1', notes: 'Disc detainer — no pins to pick or bump' },
  { brand: 'Yale', grade: 'Grade 1–2', notes: 'Smart lock & traditional lines' },
]

export default function LockChangePage() {
  const canonicalUrl = `${BUSINESS.url}/services/lock-change/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Lock Change in Brooklyn, NY',
    description: 'Full lock replacement service in Brooklyn, NY. Any brand, any door type. After break-in, worn hardware, or security upgrades. ANSI Grade 1 & Grade 2 options. Licensed & insured.',
    url: canonicalUrl,
    serviceType: 'Lock Change',
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
      priceRange: '$95–$400',
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
        { name: 'Lock Change', url: '/services/lock-change/' },
      ])} />
      <JsonLd data={getWebPageSchema({ title: 'Lock Change in Brooklyn, NY — Full Replacement Any Lock | Avenue Locksmith', description: 'Lock change service in Brooklyn, NY. Full lock replacement — any brand, any door. After break-in, worn locks, security upgrades. ANSI Grade 1 & 2 options. Call (347) 386-7164.', url: '/services/lock-change/' })} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Lock Change' },
      ]} />

      <HeroSection
        h1="Lock Change in Brooklyn, NY — Full Replacement, Any Lock"
        subheadline="Replace worn, damaged, or low-grade locks with hardware that actually protects you. ANSI Grade 1 options installed in 30–45 minutes, with full price quoted before we start."
        variant="service"
        showTrustBar
      />

      {/* Security grade explainer — unique content angle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            Not All Locks Are Equal — Understanding ANSI Security Grades
          </h2>
          <p className="text-brand-text leading-relaxed mb-6">
            Most Brooklyn apartments are built with Grade 3 builder hardware — the cheapest locks that pass code. When you replace a lock, you have the opportunity to upgrade to Grade 1, the commercial standard. The cost difference is $30–$60 in materials. The security difference is substantial.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { grade: 'Grade 3', desc: 'Builder-grade', cycles: '75,000 cycles', who: 'What most apartments ship with', color: 'border-red-200 bg-red-50' },
              { grade: 'Grade 2', desc: 'Residential Heavy', cycles: '150,000 cycles', who: 'Interior doors, low-traffic', color: 'border-yellow-200 bg-yellow-50' },
              { grade: 'Grade 1', desc: 'Commercial Grade', cycles: '250,000 cycles', who: 'All exterior doors — our recommendation', color: 'border-green-200 bg-green-50' },
            ].map((g) => (
              <div key={g.grade} className={`rounded-xl p-5 border-2 ${g.color}`}>
                <p className="font-bold text-brand-navy text-lg">{g.grade}</p>
                <p className="text-brand-text font-medium text-sm">{g.desc}</p>
                <p className="text-brand-muted text-xs mt-2">{g.cycles}</p>
                <p className="text-brand-muted text-xs">{g.who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand comparison */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Lock Brands We Install in Brooklyn</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {LOCK_BRANDS.map((b) => (
              <div key={b.brand} className="bg-white rounded-xl p-4 border border-brand-border">
                <div className="flex items-center gap-2 mb-1">
                  <Shield size={14} className="text-brand-amber" aria-hidden="true" />
                  <p className="font-bold text-brand-navy text-sm">{b.brand}</p>
                  <span className="text-xs text-brand-amber font-medium">{b.grade}</span>
                </div>
                <p className="text-brand-muted text-xs">{b.notes}</p>
              </div>
            ))}
          </div>
          <p className="text-brand-muted text-xs mt-4">We stock common replacement locks on the truck. Special orders typically arrive next day.</p>
        </div>
      </section>

      {/* When to replace */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-5">When a Full Lock Change Is the Right Call</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'After a burglary or forced entry', body: 'Damaged lock bodies cannot be reliably rekeyed.' },
              { label: 'Lock is stiff, worn, or intermittent', body: 'A worn cylinder fails eventually — usually at the worst time.' },
              { label: 'You want to upgrade security grade', body: 'Move from Grade 3 to Grade 1 — the right upgrade path.' },
              { label: 'Lock is over 15–20 years old', body: 'Springs, pins, and mechanisms have finite service life.' },
              { label: 'Brand change for key consolidation', body: 'Switching all locks to one brand for a master key system.' },
              { label: 'The lock never worked well', body: 'Some locks were installed incorrectly. Replacement is cleaner than fixing a poor install.' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 bg-brand-bg rounded-xl p-4 border border-brand-border">
                <CheckCircle size={15} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-brand-navy text-sm">{item.label}</p>
                  <p className="text-brand-muted text-xs">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Lock Change FAQ — Everything You Need to Know" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Lock Rekeying (cheaper alternative)', href: '/services/lock-rekey/' },
              { label: 'Deadbolt Installation', href: '/services/deadbolt-installation/' },
              { label: 'High-Security Lock Upgrade', href: '/services/security-solutions/high-security-locks/' },
              { label: 'Reinforced Door Frame System', href: '/services/security-solutions/reinforced-door-frame-system/' },
              { label: 'New Tenant Lock Change', href: '/services/new-tenant-lock-change/' },
              { label: 'All Services', href: '/services/' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-brand-navy text-sm font-medium hover:text-brand-amber transition-colors">
                <ArrowRight size={14} className="text-brand-amber shrink-0" aria-hidden="true" />{link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection
        title="Get a Lock Change Quote"
        subtitle="Tell us your door type and we'll recommend the right hardware at the right price."
      />
    </>
  )
}
