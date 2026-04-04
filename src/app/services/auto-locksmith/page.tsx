import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Car, Key, AlertTriangle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildServiceMetadata } from '@/lib/seo'
import { BUSINESS, AUTO_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildServiceMetadata({
  serviceName: 'Auto Locksmith',
  path: '/services/auto-locksmith/',
  customTitle: 'Auto Locksmith in Brooklyn, NY — Car Lockout & Key Services | Avenue Locksmith',
  customDescription: 'Auto locksmith in Brooklyn, NY. Car lockouts, transponder key programming, key fob replacement, broken key extraction. All makes & models. Call (347) 386-7164.',
})

const FAQS = [
  {
    question: 'Should I call a locksmith or AAA for a car lockout in Brooklyn?',
    answer: 'A locksmith is almost always faster and often cheaper. AAA dispatches through third-party contractors with unpredictable wait times — often 1–2 hours in NYC. We dispatch directly and arrive in 15–25 minutes. For AAA members, the lockout service credit is typically $50–$75; our car lockout service starts at $75. If speed matters (and it usually does in Brooklyn\'s parking situations), call us directly at (347) 386-7164.',
  },
  {
    question: 'My car key fob stopped working — is that a locksmith or a dealer job?',
    answer: 'Depends on the issue. If the fob battery is dead (most common), we replace it on the spot for under $10. If the fob needs to be reprogrammed to the car\'s immobilizer, we can handle that for most makes using professional OBD-II tools — significantly cheaper than a dealer visit. If the transponder chip inside the key is damaged, we can cut and program a new key. Dealer-only situations are rare but we will tell you honestly when that is the case.',
  },
  {
    question: 'I locked my keys in my car with the engine running — how fast can you get to me?',
    answer: 'This is a priority dispatch. Call (347) 386-7164 immediately and tell the dispatcher the engine is running. We will route the nearest available technician to you. Typical response in Brooklyn is 15–25 minutes. While you wait: stay near the vehicle, in a safe location. Do not call a tow truck — they will not open the door, they will tow the car.',
  },
  {
    question: 'Can you make a replacement key for my car without the original?',
    answer: 'Yes, for most vehicles. We cut and program transponder keys and key fobs by decoding the door lock or reading the car\'s OBD-II port. The process varies by make, model, and year — some newer vehicles (2018+) require dealer-level programming equipment. Call us with your year/make/model and we will tell you exactly what we can do and the cost before you book.',
  },
  {
    question: 'My car key broke off in the ignition — what happens now?',
    answer: 'Do not try to start the car with the broken portion still in the ignition — you can push the fragment deeper and damage the ignition cylinder. Call us. We extract broken ignition keys using specialized tools without removing the cylinder in most cases. If the ignition cylinder is damaged, we can replace it. This is a delicate job — the wrong approach here is expensive. We have done hundreds of these in Brooklyn.',
  },
]

const AUTO_SERVICES = [
  { label: 'Car lockout — all makes & models', detail: 'Non-damaging slim jim & air wedge entry' },
  { label: 'Key fob battery replacement', detail: 'On-site, all brands, under 10 minutes' },
  { label: 'Transponder key programming', detail: 'Most domestic & import vehicles' },
  { label: 'Broken key extraction', detail: 'Door lock & ignition cylinder' },
  { label: 'Replacement car key cutting', detail: 'Without the original, from code' },
  { label: 'Ignition cylinder replacement', detail: 'When extraction is not possible' },
  { label: 'Smart key / proximity fob service', detail: 'Programming & battery service' },
  { label: 'Trunk lockout', detail: 'Mechanical and electronic trunk release' },
]

export default function AutoLocksmithPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Auto Locksmith Services', description: 'Automotive locksmith services in Brooklyn, NY. Car lockouts, transponder key programming, key fob replacement, broken key extraction for all makes and models. 24/7 response.', url: '/services/auto-locksmith/', serviceType: 'Automotive Locksmith', brands: AUTO_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Auto Locksmith in Brooklyn, NY — Car Lockout & Key Services | Avenue Locksmith', description: 'Auto locksmith in Brooklyn, NY. Car lockouts, transponder key programming, key fob replacement, broken key extraction. All makes & models. Call (347) 386-7164.', url: '/services/auto-locksmith/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services/' },
        { name: 'Auto Locksmith', url: '/services/auto-locksmith/' },
      ])} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Auto Locksmith' },
      ]} />

      <HeroSection
        h1="Auto Locksmith in Brooklyn, NY — Car Lockout & Key Services"
        subheadline="Locked out of your car? Keys in the ignition? Lost your only key fob? We open, cut, and program for all makes and models — 24/7, 15–25 minute response."
        variant="service"
        showTrustBar
      />

      {/* Urgency + phone */}
      <div className="bg-brand-navy py-4">
        <div className="container mx-auto px-4 text-center">
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 text-white font-bold text-lg">
            <Phone size={22} aria-hidden="true" />
            <span>{BUSINESS.phone}</span>
            <span className="text-white/60 text-sm font-normal">— Car lockout? Call now</span>
          </a>
        </div>
      </div>

      {/* Why locksmith vs dealer vs AAA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            Locksmith vs. Dealer vs. AAA — Which Should You Call?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="text-left p-3 rounded-tl-lg">Option</th>
                  <th className="text-left p-3">Wait Time</th>
                  <th className="text-left p-3">Cost</th>
                  <th className="text-left p-3 rounded-tr-lg">What They Can Do</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { option: 'Avenue Locksmith', wait: '15–30 min', cost: '$75–$350', can: 'Lockout, key cutting, programming, extraction' },
                  { option: 'AAA', wait: '45–120 min', cost: '$0–$75 (with membership)', can: 'Lockout only (no key cutting/programming)' },
                  { option: 'Car Dealer', wait: 'Next business day', cost: '$200–$700+', can: 'Full key programming (OEM)', },
                  { option: 'Tow Truck', wait: '30–60 min', cost: '$100–$250', can: 'Tow only — cannot open your door' },
                ].map((row, i) => (
                  <tr key={row.option} className={i % 2 === 0 ? 'bg-brand-bg' : 'bg-white'}>
                    <td className="p-3 font-bold text-brand-navy">{row.option}</td>
                    <td className="p-3 text-brand-text">{row.wait}</td>
                    <td className="p-3 text-brand-text">{row.cost}</td>
                    <td className="p-3 text-brand-muted text-xs">{row.can}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Auto Locksmith Services We Provide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {AUTO_SERVICES.map((s) => (
              <div key={s.label} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-brand-border">
                <Car size={15} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-brand-navy text-sm">{s.label}</p>
                  <p className="text-brand-muted text-xs">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety warning */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle size={20} className="text-amber-600 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-bold text-amber-900 mb-2">Never break your own window to get in</p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Breaking a car window costs $200–$500 to repair, creates a safety hazard, and does not help with the underlying key situation. A locksmith can open your car door without damage in under 5 minutes using professional slim jim or air wedge tools. The window repair will cost far more than the locksmith visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Auto Locksmith FAQ — Car Key & Lockout Questions" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Car Lockout Service', href: '/services/lockout-service/auto-lockout-service-avenue-locks/' },
              { label: 'Emergency Locksmith — All Types', href: '/services/emergency-locksmith/' },
              { label: 'Key Duplication', href: '/services/key-duplication/' },
              { label: 'Lockout Service Overview', href: '/services/lockout-service/' },
              { label: 'All Services', href: '/services/' },
              { label: 'Contact Us', href: '/contact/' },
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
          <h2 className="text-3xl font-bold mb-3">Locked Out of Your Car in Brooklyn?</h2>
          <p className="text-white/80 mb-8">
            15–25 minute response. Available 24/7. We come to you — street, garage, or parking lot.
          </p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl">
            <Phone size={26} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  )
}
