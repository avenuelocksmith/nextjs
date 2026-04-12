import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Home, Key, Shield } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildServiceMetadata } from '@/lib/seo'
import { LOCK_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildServiceMetadata({
  serviceName: 'Residential Locksmith',
  path: '/services/residential-locksmith/',
  customTitle: 'Residential Locksmith in Brooklyn, NY — Apartments & Homes | Avenue Locksmith',
  customDescription: 'Residential locksmith services in Brooklyn, NY. Move-in rekeying, deadbolt installation, smart locks, apartment lockouts. NYC tenant rights respected. Call (347) 386-7164.',
})

const FAQS = [
  {
    question: 'My lease says I cannot change my apartment lock — can my landlord actually enforce that in NYC?',
    answer: 'No. NYC Administrative Code §27-2043 gives every tenant the right to change their own apartment door lock, regardless of what the lease says. The lease clause is unenforceable. Your only obligation is to provide the landlord a copy of the new key within 30 days. We rekey your lock and cut the landlord copy on the spot at no extra charge.',
  },
  {
    question: 'I just moved into a Brooklyn apartment — do I really need to change the locks?',
    answer: 'Yes, always. You have no way of knowing how many copies of the previous tenant\'s key exist. Former roommates, ex-partners, building staff, Airbnb guests, the landlord\'s handyman — any of them may have a copy. Rekeying costs $65–$85 per lock and takes 20 minutes. It is the single cheapest home security investment you can make.',
  },
  {
    question: 'What is the strongest deadbolt I can put on my Brooklyn apartment door?',
    answer: 'For apartment doors, the Medeco Maxum and Mul-T-Lock MT5+ are the highest-rated residential deadbolts available. Both are ANSI Grade 1, pick-resistant, bump-resistant, and use restricted keyways so keys cannot be copied without authorization. For most Brooklyn renters, a Schlage B60N (Grade 1, under $100) is excellent value. We recommend based on your door type and door frame condition — a great lock on a weak frame still fails.',
  },
  {
    question: 'My building super has a master key that opens my apartment — can I stop that?',
    answer: 'In NYC, building supers and landlords are permitted to have key access to your unit for emergencies and inspections (with proper notice under Real Property Law). You cannot legally block this access. However, you can install a secondary lock — like a door bar or chain — for nighttime use that gives you a physical layer while you are home. For concerns about unauthorized entry, document everything and consult a tenant attorney.',
  },
  {
    question: 'I am a landlord — what is the right process for changing locks between tenants?',
    answer: 'Between tenants, you must rekey or replace the lock before the new tenant takes possession — this is both good practice and required by many NYC leases. We do same-day landlord rekeying throughout Brooklyn. If the tenant has not vacated, do not change the lock — that is an illegal lockout and can result in civil liability and criminal charges. Wait for legal possession, then call us.',
  },
]

const SERVICES = [
  { label: 'Apartment & house lockout', detail: 'Non-destructive entry, 15–25 min response' },
  { label: 'Move-in lock rekeying', detail: 'Invalidates all previous keys, from $65' },
  { label: 'Full lock replacement', detail: 'Any brand, any door type' },
  { label: 'Deadbolt installation', detail: 'ANSI Grade 1 recommended for NYC apartments' },
  { label: 'Smart lock installation', detail: 'August, Schlage Encode, Yale — app + code access' },
  { label: 'Key duplication', detail: 'Standard and high-security key copies' },
  { label: 'Broken key extraction', detail: 'Remove fragment, inspect, rekey' },
  { label: 'Master key systems', detail: 'For landlords managing multi-unit buildings' },
]

export default function ResidentialLocksmithPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Residential Locksmith Services', description: 'Full residential locksmith services in Brooklyn, NY. Apartment lockouts, move-in rekeying, deadbolt installation, smart locks, and key duplication. Licensed & insured. NYC tenant rights respected.', url: '/services/residential-locksmith/', serviceType: 'Residential Locksmith', brands: LOCK_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Residential Locksmith in Brooklyn, NY — Apartments & Homes | Avenue Locksmith', description: 'Residential locksmith services in Brooklyn, NY. Move-in rekeying, deadbolt installation, smart locks, apartment lockouts. NYC tenant rights respected. Call (347) 386-7164.', url: '/services/residential-locksmith/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services/' },
        { name: 'Residential Locksmith', url: '/services/residential-locksmith/' },
      ])} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Residential Locksmith' },
      ]} />

      <HeroSection
        h1="Residential Locksmith in Brooklyn, NY — Apartments & Homes"
        subheadline="NYC tenant rights respected. Move-in rekeying, lockouts, deadbolt upgrades, and smart lock installations for Brooklyn apartments, brownstones, and single-family homes."
        variant="service"
        showTrustBar
      />

      {/* NYC renter context — unique to this page */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            Locksmith Services Built for Brooklyn Renters & Homeowners
          </h2>
          <p className="text-brand-text leading-relaxed mb-4">
            Over 70% of Brooklyn residents rent — which means the most common call we get is not &ldquo;install a new lock&rdquo; but &ldquo;I just moved in and I need to change the key.&rdquo; We know NYC tenant law, we know Brooklyn building types from pre-war brownstones to new glass towers, and we work around your schedule.
          </p>
          <p className="text-brand-text leading-relaxed mb-6">
            For homeowners — single-family homes in Bay Ridge, multi-family brownstones in Bed-Stuy, or co-ops in Brooklyn Heights — we bring the same expertise to master key systems, security upgrades, and period-appropriate hardware for historic properties.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Home, title: 'Apartments & Rentals', body: 'Move-in rekeying, tenant rights, no-damage smart lock installs.' },
              { icon: Key, title: 'Brownstones & Townhouses', body: 'Mortise lock service, master key systems, period hardware.' },
              { icon: Shield, title: 'Co-ops & Condos', body: 'Board-approved work, COI provided, Grade 1 upgrades.' },
            ].map((item) => (
              <div key={item.title} className="bg-brand-bg rounded-xl p-5 border border-brand-border">
                <item.icon size={20} className="text-brand-amber mb-2" aria-hidden="true" />
                <h3 className="font-bold text-brand-navy text-sm mb-1">{item.title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Residential Locksmith Services We Provide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SERVICES.map((s) => (
              <div key={s.label} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-brand-border">
                <CheckCircle size={16} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-brand-navy text-sm">{s.label}</p>
                  <p className="text-brand-muted text-xs">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing guide */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Residential Locksmith Pricing Guide</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="text-left p-3 rounded-tl-lg">Service</th>
                  <th className="text-left p-3">Price Range</th>
                  <th className="text-left p-3 rounded-tr-lg">Typical Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: 'Apartment lockout', price: '$75–$125', time: '15–25 min' },
                  { service: 'Lock rekeying (per lock)', price: '$65–$85', time: '20 min' },
                  { service: 'Lock replacement (installed)', price: '$95–$175', time: '30–45 min' },
                  { service: 'Smart lock installation', price: '$120–$250', time: '45–60 min' },
                  { service: 'Deadbolt installation', price: '$95–$175', time: '30–45 min' },
                  { service: 'Key duplication', price: '$5–$85', time: '10 min' },
                  { service: 'Broken key extraction', price: '$65–$95', time: '20–30 min' },
                ].map((row, i) => (
                  <tr key={row.service} className={i % 2 === 0 ? 'bg-brand-bg' : 'bg-white'}>
                    <td className="p-3 text-brand-navy font-medium">{row.service}</td>
                    <td className="p-3 text-brand-text">{row.price}</td>
                    <td className="p-3 text-brand-muted">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-brand-muted text-xs mt-3">All prices are full installed cost. Quoted exactly before work begins — no surprises.</p>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Residential Locksmith FAQ — NYC Tenant & Homeowner Questions" />

      <TestimonialsSection title="What Brooklyn Residents Say" maxItems={3} />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Lock Rekeying — Change Keys, Keep Lock', href: '/services/lock-rekey/' },
              { label: 'New Tenant Lock Change', href: '/services/new-tenant-lock-change/' },
              { label: 'Deadbolt Installation', href: '/services/deadbolt-installation/' },
              { label: 'Smart Lock Installation', href: '/services/security-solutions/smart-locks/' },
              { label: 'Emergency Lockout Service', href: '/services/emergency-locksmith/' },
              { label: 'Find Your Neighborhood', href: '/locksmith-near-me/' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-brand-navy text-sm font-medium hover:text-brand-amber transition-colors">
                <ArrowRight size={14} className="text-brand-amber shrink-0" aria-hidden="true" />{link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection
        title="Schedule Residential Locksmith Service"
        subtitle="Same-day appointments available throughout Brooklyn. Fill out the form or call directly."
      />
    </>
  )
}
