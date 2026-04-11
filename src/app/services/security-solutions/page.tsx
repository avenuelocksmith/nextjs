import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Shield, Lock, Eye, Cpu, Fingerprint, DoorOpen, Zap } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { getBeforeAfterPairs } from '@/lib/gallery'
import { buildServiceMetadata } from '@/lib/seo'
import { BUSINESS, SECURITY_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildServiceMetadata({
  serviceName: 'Security Solutions',
  path: '/services/security-solutions/',
  customTitle: 'Security Solutions in Brooklyn, NY — Locks, Access Control & CCTV | Avenue Locksmith',
  customDescription: 'Complete security solutions in Brooklyn, NY — high-security locks, access control systems, CCTV, smart locks, biometric entry, and reinforced doors. Call (347) 386-7164.',
})

const SECURITY_SERVICES = [
  { icon: Lock, label: 'High-Security Locks', href: '/services/security-solutions/high-security-locks/', desc: 'Medeco, Mul-T-Lock, Schlage — pick-resistant and drill-resistant.' },
  { icon: Cpu, label: 'Access Control Systems', href: '/services/security-solutions/access-control-systems/', desc: 'Keycard, fob, and cloud-based entry management for businesses.' },
  { icon: Eye, label: 'CCTV Installation', href: '/services/security-solutions/cctv-installation/', desc: 'HD and 4K security cameras — indoor, outdoor, and remote viewing.' },
  { icon: Zap, label: 'Smart Locks', href: '/services/security-solutions/smart-locks/', desc: 'August, Schlage Encode, Yale — app control and voice assistant compatible.' },
  { icon: Shield, label: 'Keyless Entry Systems', href: '/services/security-solutions/keyless-entry-system/', desc: 'Keypad locks and code-entry systems — ideal for rentals and Airbnb.' },
  { icon: Fingerprint, label: 'Biometric Access', href: '/services/security-solutions/biometric-access-system/', desc: 'Fingerprint and facial recognition entry for high-security applications.' },
  { icon: DoorOpen, label: 'Reinforced Door Frames', href: '/services/security-solutions/reinforced-door-frame-system/', desc: 'Kick-in prevention, steel strike plates, and door jamb reinforcement.' },
]

const FAQS = [
  {
    question: 'How do I know what security upgrade is right for my property?',
    answer: 'We offer free security consultations. A licensed technician assesses your property — door types, existing lock grades, access patterns, and risk factors — and recommends solutions that match your security needs and budget.',
  },
  {
    question: 'Do you install security solutions for both homes and businesses?',
    answer: 'Yes. We design and install solutions for residential properties (apartments, brownstones, condos) and commercial properties (offices, retail, warehouses, medical facilities). The appropriate solution varies significantly by property type.',
  },
  {
    question: 'What is the most cost-effective security upgrade for a Brooklyn apartment?',
    answer: 'For most apartments, upgrading to an ANSI Grade 1 deadbolt (Schlage B60N or similar) combined with a door reinforcement kit is the highest-value security upgrade. It addresses the most common break-in methods — lock picking, bumping, and door kick-ins — for under $200.',
  },
  {
    question: 'How long does a security system installation take?',
    answer: 'A single lock upgrade takes 30–60 minutes. A full access control system installation for a small office takes half a day. CCTV installation varies based on the number of cameras and cabling requirements. We provide a time estimate with every quote.',
  },
]

export default function SecuritySolutionsPage() {
  const securityPair = getBeforeAfterPairs({ category: 'security' })[0]

  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Security Solutions', description: 'Complete security solutions in Brooklyn, NY — high-security locks, access control systems, CCTV, smart locks, biometric entry, and reinforced door frames. Licensed & insured.', url: '/services/security-solutions/', serviceType: 'Security Solutions', brands: SECURITY_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Security Solutions in Brooklyn, NY — Locks, Access Control & CCTV | Avenue Locksmith', description: 'Complete security solutions in Brooklyn, NY — high-security locks, access control systems, CCTV, smart locks, biometric entry, and reinforced doors. Call (347) 386-7164.', url: '/services/security-solutions/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services/' }, { name: 'Security Solutions', url: '/services/security-solutions/' }])} />

      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }, { label: 'Security Solutions' }]} />

      <HeroSection
        h1="Security Solutions in Brooklyn, NY — Locks, Access Control & CCTV"
        subheadline="Comprehensive security upgrades for Brooklyn homes and businesses — from high-security lock installations to full access control and CCTV systems."
        variant="service"
        showTrustBar
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">
            Comprehensive Security for Brooklyn Properties
          </h2>
          <p className="text-brand-text text-lg leading-relaxed mb-5">
            Modern security is not just about locks. A complete security approach addresses your physical barriers (locks, door frames), access management (who can enter and when), visibility (cameras and monitoring), and convenience (smart locks, keyless entry). Avenue Locksmith designs and installs all of these layers for both residential and commercial properties.
          </p>
          <p className="text-brand-text leading-relaxed">
            Most Brooklyn properties — particularly older apartment buildings and brownstones — were built with builder-grade locks that offer minimal protection against modern attack methods like lock picking, bump keys, and door kick-ins. A targeted upgrade can dramatically improve your security at a fraction of what people assume it costs.
          </p>
        </div>
      </section>

      <section className="py-12 bg-brand-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3 text-center">Security Services We Offer</h2>
          <p className="text-brand-muted text-center mb-10 max-w-xl mx-auto">Click any service for detailed information and pricing.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {SECURITY_SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className="bg-white rounded-xl p-5 border border-brand-border hover:border-brand-amber hover:shadow-md transition-all group flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-amber transition-colors">
                  <s.icon size={20} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm mb-1">{s.label}</p>
                  <p className="text-brand-muted text-xs leading-relaxed">{s.desc}</p>
                  <span className="text-brand-amber text-xs font-semibold mt-1.5 inline-block">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Before/after upgrade showcase */}
      {securityPair && (
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-brand-amber uppercase tracking-wider mb-2">
                Grade 3 → Grade 1 Upgrade
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
                What a real lock upgrade looks like
              </h2>
              <p className="text-brand-muted text-sm md:text-base max-w-xl mx-auto">
                Drag the slider to compare a builder-grade entry knob with the ANSI Grade 1 deadbolt installation we performed on the same door.
              </p>
            </div>
            <BeforeAfterSlider
              beforeSrc={`/gallery/${securityPair.before.filename}`}
              afterSrc={`/gallery/${securityPair.after.filename}`}
              alt={securityPair.after.alt}
              caption={`ANSI Grade 1 deadbolt upgrade · Completed ${securityPair.after.dateCompleted}`}
            />
          </div>
        </section>
      )}

      <GallerySection
        title="Recent Security Upgrades"
        subtitle="High-security deadbolts, CCTV installations, and smart-lock retrofits completed across Brooklyn."
        category="security"
        maxItems={6}
        showFilters={false}
      />

      <FAQSection faqs={FAQS} title="Security Solutions FAQ" />

      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Book a walk-through — Brooklyn security assessments by a licensed tech</h2>
          <p className="text-white/80 mb-8 text-lg">Free on-site consultation. A DCWP-licensed tech walks your doors, windows, and access points and emails a written security plan.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl">
            <Phone size={26} aria-hidden="true" />{BUSINESS.phone}
          </a>
        </div>
      </section>

      <ContactFormSection title="Request a Security Consultation" subtitle="Tell us about your property and we'll recommend the right solution." />
    </>
  )
}
