import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Eye, AlertTriangle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS, SECURITY_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'CCTV Installation in Brooklyn, NY — Security Camera Systems | Avenue Locksmith',
  description: 'Professional CCTV installation in Brooklyn, NY. HD & 4K, remote viewing, motion alerts. NYC recording laws explained. Hikvision & Dahua. Homes & businesses. Call (347) 386-7164.',
  path: '/services/security-solutions/cctv-installation/',
})

const FAQS = [
  {
    question: 'Can I legally record video in the common areas of my Brooklyn building?',
    answer: 'In New York, you can record video in areas where people do not have a reasonable expectation of privacy — building lobbies, hallways, stairwells, and exterior entries are generally permissible. You cannot record inside bathrooms, changing rooms, or private residential units (including through windows). For common areas, a visible notice that recording is in progress is best practice, though not legally required for non-audio recording. Audio recording in NY is governed by separate wiretapping statutes and requires consent of at least one party. Most CCTV systems record video only — enabling audio recording requires additional legal consideration.',
  },
  {
    question: 'What resolution do I actually need — 1080p vs 4K for a Brooklyn storefront?',
    answer: '4K is superior but requires more storage and higher-bandwidth cameras. For most Brooklyn storefronts: 1080p (2MP) cameras positioned correctly give you facial recognition quality at 10–15 feet and license plate detail at 20–30 feet. 4K cameras are worth it if you have a large open floor area where the same camera must cover significant distance, or if you specifically need to identify faces at 30+ feet. We match resolution to your actual coverage distances rather than defaulting to the most expensive option.',
  },
  {
    question: 'My Brooklyn apartment building has been broken into twice — where should cameras go?',
    answer: 'For multi-unit residential buildings: front entry (angled to capture faces, not just the top of heads), lobby interior (to capture anyone who tailgates), stairwell entrances (camera per floor is ideal but lobby and top floor minimum), mail room, and any exterior entry points. Camera placement is as important as camera quality — a high-resolution camera aimed at the ceiling captures nothing useful. We do a site walk before any installation to map coverage zones.',
  },
  {
    question: 'How long does footage stay stored and where?',
    answer: 'Storage duration depends on your setup. DVR/NVR systems with a 2TB hard drive at 1080p typically store 7–14 days of continuous footage for a 4-camera system. 4K systems use more storage per hour. We recommend a minimum of 30 days for commercial properties — insurance claims sometimes surface weeks after an incident. Cloud backup adds cost but protects against the hard drive being stolen or damaged (which happens specifically to prevent evidence retrieval). We configure both local and cloud storage for most commercial installations.',
  },
  {
    question: 'Can I see my cameras on my phone from anywhere?',
    answer: 'Yes — all systems we install include iOS and Android remote viewing apps. You can view live feeds, replay recorded footage, and receive motion alerts on your phone regardless of location. We configure everything during installation and confirm your remote access is working before we leave. The apps vary by brand — Hikvision uses iVMS-4500 and Hik-Connect; Dahua uses DMSS. We walk you through the app during installation.',
  },
]

const CAMERA_TYPES = [
  { type: 'Fixed dome cameras', use: 'Indoor lobbies, offices, retail' },
  { type: 'Bullet cameras', use: 'Outdoor entry points, parking areas' },
  { type: 'PTZ (pan-tilt-zoom)', use: 'Large areas requiring active monitoring' },
  { type: 'License plate recognition (LPR)', use: 'Parking lots, building entrances' },
  { type: 'Fisheye / 360° cameras', use: 'Single-camera coverage of open floors' },
  { type: 'Covert / discreet cameras', use: 'Retail loss prevention, specialized use' },
]

export default function CCTVPage() {
  const canonicalUrl = `${BUSINESS.url}/services/security-solutions/cctv-installation/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'CCTV Installation in Brooklyn, NY',
    description: 'Professional security camera installation for Brooklyn homes and businesses. HD & 4K, remote viewing, motion alerts, cloud storage. Hikvision & Dahua authorized installer.',
    url: canonicalUrl,
    serviceType: 'CCTV Installation',
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
      priceRange: '$300–$3,000',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={getServiceSchema({ name: 'CCTV Installation', description: 'Professional security camera installation for Brooklyn homes and businesses. HD & 4K, remote viewing, motion alerts, cloud storage. Hikvision & Dahua authorized installer.', url: '/services/security-solutions/cctv-installation/', serviceType: 'CCTV Installation', brands: SECURITY_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'CCTV Installation in Brooklyn, NY — Security Camera Systems | Avenue Locksmith', description: 'Professional CCTV installation in Brooklyn, NY. HD & 4K, remote viewing, motion alerts. NYC recording laws explained. Hikvision & Dahua. Homes & businesses. Call (347) 386-7164.', url: '/services/security-solutions/cctv-installation/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services/' },
        { name: 'Security Solutions', url: '/services/security-solutions/' },
        { name: 'CCTV Installation', url: '/services/security-solutions/cctv-installation/' },
      ])} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Security Solutions', href: '/services/security-solutions/' },
        { label: 'CCTV Installation' },
      ]} />

      <HeroSection
        h1="CCTV Installation in Brooklyn, NY — Security Camera Systems"
        subheadline="Camera placement matters as much as camera quality. We design, supply, and install security camera systems for Brooklyn homes and businesses — with remote viewing and motion alerts configured before we leave."
        variant="service"
        showTrustBar
      />

      {/* NYC-specific legal context — unique angle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            What You Need to Know Before Installing Cameras in Brooklyn
          </h2>
          <p className="text-brand-text leading-relaxed mb-4">
            New York recording law is more permissive for video than for audio — you can record in public-facing areas of your property without notice, but enabling audio recording requires consideration of NY wiretapping statutes. Most building and business camera systems record video only, which is the right default.
          </p>
          <p className="text-brand-text leading-relaxed mb-6">
            Camera placement is often more important than camera resolution. A common mistake is mounting cameras too high — at ceiling level, they capture the tops of heads, not faces. Entry point cameras should be positioned 7–8 feet high, angled slightly down, pointed at chest-to-face level at the expected entry distance.
          </p>

          <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} className="text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-amber-900 mb-1">Placement before resolution</p>
                <p className="text-amber-800 text-sm">A 1080p camera positioned at the right angle captures better evidence than a 4K camera mounted too high or pointed at the wrong area. We do a site walk before recommending any system.</p>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-brand-navy mb-4">Camera Types We Install</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CAMERA_TYPES.map((c) => (
              <div key={c.type} className="flex items-start gap-3 bg-brand-bg rounded-xl p-3 border border-brand-border">
                <Eye size={14} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-brand-navy text-sm">{c.type}</p>
                  <p className="text-brand-muted text-xs">{c.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System features */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-brand-navy mb-5">What Every System We Install Includes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'HD (1080p) or 4K cameras as specified',
              'NVR/DVR recorder with hard drive',
              'Night vision — IR illumination',
              'Remote mobile viewing configured & tested',
              'Motion detection alerts to your phone',
              'Professional cabling and installation',
              'Cloud backup option available',
              'Walk-through training before we leave',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 bg-white rounded-lg p-3 border border-brand-border">
                <CheckCircle size={15} className="text-brand-amber shrink-0" aria-hidden="true" />
                <span className="text-brand-text text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <p className="text-brand-muted text-xs w-full mb-1 font-medium">Brands we install:</p>
            {['Hikvision', 'Dahua', 'Axis', 'Uniview'].map((b) => (
              <span key={b} className="bg-white border border-brand-border rounded-full px-3 py-1 text-sm font-medium text-brand-text">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="CCTV FAQ — Brooklyn Security Camera Questions" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Access Control Systems', href: '/services/security-solutions/access-control-systems/' },
              { label: 'Commercial Locksmith', href: '/services/commercial-locksmith/' },
              { label: 'Biometric Access Systems', href: '/services/security-solutions/biometric-access-system/' },
              { label: 'High-Security Locks', href: '/services/security-solutions/high-security-locks/' },
              { label: 'All Security Solutions', href: '/services/security-solutions/' },
              { label: 'Residential Locksmith', href: '/services/residential-locksmith/' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-brand-navy text-sm font-medium hover:text-brand-amber transition-colors">
                <ArrowRight size={14} className="text-brand-amber shrink-0" aria-hidden="true" />{link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection
        title="Get a CCTV Quote for Your Brooklyn Property"
        subtitle="Tell us the property type and number of cameras needed — we'll do a site assessment."
      />
    </>
  )
}
