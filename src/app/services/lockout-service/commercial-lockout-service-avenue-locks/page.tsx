import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Building, Clock } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS, LOCK_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Commercial Lockout Service in Brooklyn, NY — Business & Office Lockouts | Avenue Locksmith',
  description: 'Locked out of your office, store, or warehouse in Brooklyn? 15–25 Min Response, 24/7. Minimize downtime. Discreet service. Invoices provided. Call (347) 386-7164.',
  path: '/services/lockout-service/commercial-lockout-service-avenue-locks/',
})

const FAQS = [
  {
    question: 'I am locked out of my business at 5 AM before the morning shift — how fast can you get here?',
    answer: 'This is one of our highest-priority call types. Call (347) 386-7164 and tell the dispatcher it is a commercial lockout before opening — we will route the nearest available technician immediately. Typical response in Brooklyn is 15–25 minutes. Every minute a storefront stays closed with a crew standing on the sidewalk is revenue lost, so we dispatch the nearest tech before finishing the intake call.',
  },
  {
    question: 'My restaurant just started service and the manager is locked out of the office where the safe is — can you come while we are open?',
    answer: 'Yes. We work in occupied commercial environments regularly — restaurants, retail stores, medical offices. We are discreet, work quickly, and do not create a scene. We will access the specific locked area without disrupting your operation. Call us and describe the exact lock situation so we bring the right tools.',
  },
  {
    question: 'An employee returned their key fob but not their door key — how do I secure the office without rekeying everything?',
    answer: 'If you are on a master key system, we can often repin just the specific cylinder the departed employee had access to, without touching any other locks in the system. If your office uses electronic access control, we just delete their credential — no locksmith needed. For traditional lock systems without a master key hierarchy, we rekey the specific doors they had access to. Call us to assess your setup.',
  },
  {
    question: 'My Brooklyn storefront was broken into overnight — what do I do about the lock?',
    answer: 'Call 911 first and preserve the scene for the police report (your insurance will require it). Then call us. We respond to commercial break-in emergencies and will replace destroyed hardware, reinforce damaged frames, provide a written incident report with hardware details for your insurer, and if needed, install temporary security measures while permanent hardware is ordered. Do not leave the space unsecured.',
  },
  {
    question: 'Can you provide an invoice for commercial lockout service for my business expenses?',
    answer: 'Yes. We provide detailed invoices showing service type, hardware installed (brand, model), labor, and date. For property management companies and businesses with recurring needs, we can set up account billing. All commercial work documentation is formatted to meet standard insurance and expense reporting requirements.',
  },
]

const BUSINESS_TYPES = [
  'Restaurants & bars',
  'Retail stores',
  'Offices & co-working spaces',
  'Warehouses & storage',
  'Medical & dental offices',
  'Auto shops & garages',
  'Schools & nonprofits',
  'Hotels & short-term rentals',
]

export default function CommercialLockoutPage() {
  const canonicalUrl = `${BUSINESS.url}/services/lockout-service/commercial-lockout-service-avenue-locks/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Commercial Lockout Service in Brooklyn, NY',
    description: 'Business and office lockout service in Brooklyn, NY. 15–25 minute response, 24/7. Offices, retail, restaurants, warehouses. Minimal disruption. Invoices provided. Licensed & insured.',
    url: canonicalUrl,
    serviceType: 'Commercial Lockout Service',
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
      priceRange: '$95–$250',
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
        { name: 'Lockout Service', url: '/services/lockout-service/' },
        { name: 'Commercial Lockout', url: '/services/lockout-service/commercial-lockout-service-avenue-locks/' },
      ])} />
      <JsonLd data={getServiceSchema({ name: 'Commercial Lockout Service', description: 'Business and office lockout service in Brooklyn, NY. 15–25 minute response, 24/7. Offices, retail, restaurants, warehouses. Minimal disruption. Invoices provided. Licensed & insured.', url: '/services/lockout-service/commercial-lockout-service-avenue-locks/', serviceType: 'Commercial Lockout Service', brands: LOCK_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Commercial Lockout Service in Brooklyn, NY — Business & Office Lockouts | Avenue Locksmith', description: 'Locked out of your office, store, or warehouse in Brooklyn? 15–25 Min Response, 24/7. Minimize downtime. Discreet service. Invoices provided. Call (347) 386-7164.', url: '/services/lockout-service/commercial-lockout-service-avenue-locks/' })} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Lockout Service', href: '/services/lockout-service/' },
        { label: 'Commercial Lockout' },
      ]} />

      <HeroSection
        h1="Commercial Lockout Service in Brooklyn, NY — Business & Office Lockouts"
        subheadline="Locked out of your office, store, or warehouse? We arrive in 15–25 minutes, work discreetly, and get you back in operation fast. Available 24/7. Invoice provided."
        variant="service"
        showTrustBar
      />

      {/* Downtime framing — unique angle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            A Commercial Lockout Is a Business Continuity Event
          </h2>
          <p className="text-brand-text leading-relaxed mb-4">
            A residential lockout is an inconvenience. A commercial lockout — especially at opening time with staff arriving, or in the middle of service — has direct financial impact. Every hour a restaurant cannot open, every shift that cannot access inventory, every client appointment that gets cancelled represents real money.
          </p>
          <p className="text-brand-text leading-relaxed mb-6">
            Avenue Locksmith treats commercial lockouts with the urgency they deserve. We prioritize these calls, dispatch the nearest available technician, and work efficiently. We also operate discreetly — no unnecessary trucks blocking your entrance, no scene that affects your customers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              { label: '24/7 response — nights, weekends, holidays', icon: Clock },
              { label: '15–25 minute arrival throughout Brooklyn', icon: Building },
              { label: 'Discreet — minimal disruption to your operation', icon: CheckCircle },
              { label: 'Non-destructive entry techniques', icon: CheckCircle },
              { label: 'Upfront pricing, invoices provided', icon: CheckCircle },
              { label: 'Post-lockout security assessment available', icon: CheckCircle },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 bg-brand-bg rounded-lg p-3 border border-brand-border">
                <item.icon size={15} className="text-brand-amber shrink-0" aria-hidden="true" />
                <span className="text-brand-text text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          <h3 className="font-bold text-brand-navy mb-3">Business Types We Serve</h3>
          <div className="flex flex-wrap gap-2">
            {BUSINESS_TYPES.map((b) => (
              <span key={b} className="bg-brand-bg border border-brand-border rounded-full px-3 py-1.5 text-xs text-brand-text">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Commercial Lockout FAQ — Brooklyn Business Owner Questions" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Commercial Locksmith — Full Service', href: '/services/commercial-locksmith/' },
              { label: 'Emergency Locksmith — 24/7', href: '/services/emergency-locksmith/' },
              { label: 'Access Control Systems', href: '/services/security-solutions/access-control-systems/' },
              { label: 'Residential Lockout Service', href: '/services/lockout-service/residential-lockout-service-avenue-locks/' },
              { label: 'Master Key Systems', href: '/services/commercial-locksmith/' },
              { label: 'All Lockout Services', href: '/services/lockout-service/' },
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
          <h2 className="text-3xl font-bold mb-3">Commercial dispatch — every minute a storefront stays closed is revenue lost</h2>
          <p className="text-white/80 mb-8">Call the Brooklyn shop directly. 15–25 minute arrival, itemized invoice on the spot for insurance and accounting.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl">
            <Phone size={26} aria-hidden="true" />{BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  )
}
