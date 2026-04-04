import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Shield } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildServiceMetadata } from '@/lib/seo'
import { BUSINESS, LOCK_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildServiceMetadata({
  serviceName: 'New Tenant Lock Change',
  path: '/services/new-tenant-lock-change/',
  customTitle: 'New Tenant Lock Change in Brooklyn, NY — Move-In Lock Service | Avenue Locksmith',
  customDescription: 'Moving into a Brooklyn apartment? Change your locks before you unpack. Same-day move-in lock service. Rekeying from $65. NYC tenant rights explained. Call (347) 386-7164.',
})

const CHECKLIST = [
  { item: 'Front door lock rekeyed or replaced', priority: 'Essential' },
  { item: 'Back door / secondary entry rekeyed', priority: 'Essential' },
  { item: 'Mailbox lock replaced', priority: 'Recommended' },
  { item: 'Deadbolt present & Grade 1 rated', priority: 'Recommended' },
  { item: 'Window locks functioning', priority: 'Check' },
  { item: 'Smart lock installed (optional upgrade)', priority: 'Optional' },
]

const FAQS = [
  {
    question: 'Does my landlord have to change the locks before I move in — is that a legal requirement?',
    answer: 'New York City Administrative Code §27-2043 requires landlords to provide new or re-keyed locks at the start of each new tenancy. In practice, many landlords skip this or do it themselves without a licensed locksmith. Whether they comply or not, you have the right to change your own locks (NYC Admin Code §27-2043(d)) and provide the landlord with a copy of the new key. Do not wait for the landlord — schedule the rekey yourself on move-in day.',
  },
  {
    question: 'Who else might have a key to my new Brooklyn apartment?',
    answer: 'The list is longer than most people think: the previous tenant, their roommates, ex-partners, the building super, maintenance workers, cleaning services, contractors who worked in the unit, possibly prior supers and property managers. Some buildings have master keys that were cut for previous management companies. The only way to be certain is to rekey — all of these keys immediately stop working.',
  },
  {
    question: 'Is rekeying or full lock replacement better for a new tenant?',
    answer: 'For most tenants, rekeying is the right call — it is faster, less expensive ($65 vs. $125+), and achieves the same result: all old keys stop working. Full replacement makes sense if the existing lock is damaged, worn, or a low-grade builder lock you want to upgrade. We assess the lock on arrival and give an honest recommendation.',
  },
  {
    question: 'Can I change my locks without the landlord knowing or without permission?',
    answer: 'Under NYC law, you can change your locks, but you must provide the landlord with a copy of the new key. If your lease includes a clause requiring landlord approval for lock changes, check whether that clause is enforceable under NYC tenant protections — many are not. The practical standard: change the lock, give the super a copy of the key, keep a record that you did so.',
  },
  {
    question: 'What if my apartment has multiple locks — do I need all of them rekeyed?',
    answer: 'At minimum, rekey every lock on your entry door — both the deadbolt and the knob lock. If there is a secondary entry (back door, fire escape door), rekey those too. We can rekey all locks to a single key so you only carry one — keying alike costs nothing extra. Mailbox lock is separate and highly recommended.',
  },
]

export default function NewTenantLockChangePage() {
  const canonicalUrl = `${BUSINESS.url}/services/new-tenant-lock-change/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'New Tenant Lock Change in Brooklyn, NY',
    description: 'Move-in lock change service for new Brooklyn tenants. Rekeying and full lock replacement for apartments. NYC tenant rights under Admin Code §27-2043. Same-day service.',
    url: canonicalUrl,
    serviceType: 'Residential Locksmith',
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
      priceRange: '$65–$350',
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
        { name: 'New Tenant Lock Change', url: '/services/new-tenant-lock-change/' },
      ])} />
      <JsonLd data={getServiceSchema({ name: 'New Tenant Lock Change', description: 'Move-in lock change service for new Brooklyn tenants. Rekeying and full lock replacement for apartments. NYC tenant rights under Admin Code §27-2043. Same-day service.', url: '/services/new-tenant-lock-change/', serviceType: 'Lock Change', brands: LOCK_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'New Tenant Lock Change in Brooklyn, NY — Move-In Lock Service | Avenue Locksmith', description: 'Moving into a Brooklyn apartment? Change your locks before you unpack. Same-day move-in lock service. Rekeying from $65. NYC tenant rights explained. Call (347) 386-7164.', url: '/services/new-tenant-lock-change/' })} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'New Tenant Lock Change' },
      ]} />

      <HeroSection
        h1="New Tenant Lock Change in Brooklyn, NY — Move In With Peace of Mind"
        subheadline="Who else has a key to your new apartment? Change your locks before you unpack. Brooklyn's most requested move-in service — same-day, starting at $65. NYC law is on your side."
        variant="service"
        showTrustBar
      />

      {/* NYC law angle — unique for this page */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            NYC Law Requires This — Most Landlords Skip It
          </h2>
          <p className="text-brand-text text-lg leading-relaxed mb-4">
            New York City Administrative Code §27-2043 requires landlords to provide new or re-keyed locks at the start of every new tenancy. It also gives tenants the explicit right to change their own locks and provide the landlord a copy of the new key.
          </p>
          <p className="text-brand-text leading-relaxed mb-5">
            In practice, many Brooklyn landlords hand over the previous tenant&apos;s keys without changing anything. Some change the locks themselves using cheap hardware. The safest approach: schedule a professional rekey yourself on move-in day or before.
          </p>
          <p className="text-brand-text leading-relaxed mb-6">
            Brooklyn is roughly 70% renters. The average apartment in a busy building has had 3–5 previous tenants — and any of them may still have copies.
          </p>

          <div className="bg-brand-bg rounded-xl border border-brand-border p-5">
            <div className="flex items-center gap-2 mb-4">
              <Shield size={20} className="text-brand-amber" aria-hidden="true" />
              <h3 className="font-bold text-brand-navy">Move-In Security Checklist</h3>
            </div>
            <div className="space-y-2">
              {CHECKLIST.map((c) => (
                <div key={c.item} className="flex items-center justify-between py-1.5 border-b border-brand-border last:border-0">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle size={15} className="text-brand-amber shrink-0" aria-hidden="true" />
                    <span className="text-brand-text text-sm">{c.item}</span>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${c.priority === 'Essential' ? 'bg-red-100 text-red-700' : c.priority === 'Recommended' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600'}`}>
                    {c.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-12 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Your Move-In Lock Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border-2 border-brand-amber p-5">
              <span className="bg-brand-amber text-brand-navy text-xs font-bold px-2.5 py-0.5 rounded-full">Most Popular</span>
              <h3 className="font-bold text-brand-navy text-lg mb-2 mt-3">Rekeying</h3>
              <p className="text-brand-text text-sm leading-relaxed mb-3">Old keys stop working. Same lock, new keys issued. Best when the existing lock is in good condition and you want the fastest, most affordable option.</p>
              <p className="font-bold text-brand-navy">$65–$85 per lock · 20 minutes</p>
              <Link href="/services/lock-rekey/" className="text-brand-amber text-sm hover:underline font-medium mt-1.5 inline-block">Learn more about rekeying →</Link>
            </div>
            <div className="bg-white rounded-xl border border-brand-border p-5">
              <h3 className="font-bold text-brand-navy text-lg mb-2">Full Lock Replacement</h3>
              <p className="text-brand-text text-sm leading-relaxed mb-3">Completely new hardware. Best when the lock is damaged, worn, or you want to upgrade to Grade 1 security from the builder-grade hardware that most apartments have.</p>
              <p className="font-bold text-brand-navy">$95–$175 per lock · 30–45 minutes</p>
              <Link href="/services/lock-change/" className="text-brand-amber text-sm hover:underline font-medium mt-1.5 inline-block">Learn more about lock change →</Link>
            </div>
          </div>
          <p className="text-sm text-brand-muted mt-4">
            Add mailbox lock replacement for $45–$75. No deadbolt? We install one — see{' '}
            <Link href="/services/deadbolt-installation/" className="text-brand-amber hover:underline">deadbolt installation</Link>.
          </p>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="New Tenant Lock Change FAQ — Brooklyn Move-In Questions" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Lock Rekeying — From $65', href: '/services/lock-rekey/' },
              { label: 'Lock Change (Full Replacement)', href: '/services/lock-change/' },
              { label: 'Mailbox Lock Replacement', href: '/services/mailbox-lock/' },
              { label: 'Deadbolt Installation', href: '/services/deadbolt-installation/' },
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
          <h2 className="text-3xl font-bold mb-3">Moving Into a Brooklyn Apartment?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Same-day move-in lock service available across all Brooklyn neighborhoods.
          </p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl">
            <Phone size={26} aria-hidden="true" />{BUSINESS.phone}
          </a>
          <p className="text-white/50 text-sm mt-5">Starting at $65 · Same-Day · Upfront Pricing</p>
        </div>
      </section>

      <ContactFormSection
        title="Schedule Your Move-In Lock Change"
        subtitle="Tell us your move-in date and we'll make it work."
      />
    </>
  )
}
