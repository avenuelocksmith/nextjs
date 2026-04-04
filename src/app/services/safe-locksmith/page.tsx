import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Shield, AlertTriangle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildServiceMetadata } from '@/lib/seo'
import { BUSINESS, LOCK_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildServiceMetadata({
  serviceName: 'Safe Locksmith',
  path: '/services/safe-locksmith/',
  customTitle: 'Safe Locksmith in Brooklyn, NY — Safe Opening, Combination Reset & Installation | Avenue Locksmith',
  customDescription: 'Safe locksmith in Brooklyn, NY. Locked out of your safe? Non-destructive opening first, always. SentrySafe, Fort Knox, AMSEC. Combination reset & new installation. Call (347) 386-7164.',
})

const FAQS = [
  {
    question: 'My safe is locked and I do not remember the combination — what are my options?',
    answer: 'There are three approaches, in order of preference: (1) Override code — most electronic safes have a manufacturer override code that resets the unit. You will need the model number and, for some brands, proof of purchase. We can help you navigate this process. (2) Manipulation — for dial combination safes, a skilled safe technician can often open the safe by listening to and feeling the movement of the internal components, without any damage. This takes 30 minutes to several hours depending on complexity. (3) Drilling — a last resort. We drill a small hole at a specific point to access the relocker mechanism. This opens the safe but damages it. We always try non-destructive methods first and inform you before drilling.',
  },
  {
    question: 'What is the difference between a fire safe and a burglar safe — and which do I have?',
    answer: 'Most consumer safes sold at big-box stores (SentrySafe, First Alert) are fire safes rated for a specific temperature for a specific time period (e.g., UL Class 350 for 1 hour means the interior stays below 350°F for one hour). They are designed to protect paper documents from fire — they typically have thin steel walls and are easy to open with basic tools. Burglar safes (UL Residential Security Containers) are tested against attack and have much thicker steel, hardened bolt work, and anti-drill plates. Most consumer safes are fire-rated but NOT burglar-rated. Check the UL label on your safe.',
  },
  {
    question: 'I bought a used safe or moved into an apartment with a safe and do not have the combination — can you open it?',
    answer: 'Yes. This is a common situation — safes are often sold or left behind without documentation. We open safes without the combination regularly. The method depends on the safe type: electronic safes may have a factory reset option, dial safes can often be manipulated, and older simple-mechanism safes may have known default combinations. Bring us the brand, model number, and any documentation you have and we can advise the fastest approach before you pay.',
  },
  {
    question: 'Can you bolt a safe down so it cannot be carried out of my apartment?',
    answer: 'Yes — bolting a safe to the floor is one of the most effective security upgrades for a free-standing safe. Most residential burglaries are smash-and-grab operations; a safe that can be carried out is a safe that will be carried out. We bolt safes to wood floors, concrete, and tile. Floor anchoring is often included with new safe installation — ask when booking.',
  },
  {
    question: 'How much does safe opening cost in Brooklyn?',
    answer: 'Non-destructive safe opening (manipulation or override) starts at $150–$350 depending on the safe type and complexity. Electronic override for a consumer safe is typically the lower end. Manipulation of a high-security safe can run $300–$500+. Drilling starts at $150 for simple safes but can be higher for high-security units because the process is more involved. We always give a quote before work begins — and if we cannot open it non-destructively, we explain the drilling option and cost before proceeding.',
  },
]

const SAFE_SERVICES = [
  { label: 'Non-destructive safe opening', detail: 'Manipulation, override codes, and bypass methods — no damage first' },
  { label: 'Safe drilling (last resort)', detail: 'When non-destructive fails — we explain before we drill' },
  { label: 'Combination reset / change', detail: 'New owner, forgotten combo, post-opening reset' },
  { label: 'Electronic keypad service', detail: 'Dead battery, faulty keypad, code lockout recovery' },
  { label: 'Safe installation & anchoring', detail: 'Floor safes, wall safes, free-standing — bolted and secured' },
  { label: 'Safe relocation', detail: 'Between rooms, floors, or to a new address' },
  { label: 'Safe repair', detail: 'Broken bolts, damaged handle, stuck mechanism' },
  { label: 'Biometric safe service', detail: 'Fingerprint reader issues, backup code access' },
]

const SAFE_BRANDS = ['SentrySafe', 'First Alert', 'Fort Knox', 'Liberty Safe', 'Stack-On', 'Cannon Safe', 'AMSEC', 'Gardall', 'Honeywell', 'Barska', 'Mesa Safe']

export default function SafeLocksmithPage() {
  const canonicalUrl = `${BUSINESS.url}/services/safe-locksmith/`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Safe Locksmith in Brooklyn, NY',
    description: 'Safe locksmith services in Brooklyn, NY. Non-destructive safe opening, combination reset, installation, and relocation. SentrySafe, Fort Knox, AMSEC, Liberty Safe. Licensed & insured.',
    url: canonicalUrl,
    serviceType: 'Safe Locksmith',
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
      priceRange: '$150–$500',
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
        { name: 'Safe Locksmith', url: '/services/safe-locksmith/' },
      ])} />
      <JsonLd data={getServiceSchema({ name: 'Safe Locksmith Services', description: 'Safe locksmith services in Brooklyn, NY. Non-destructive safe opening, combination reset, installation, and relocation. SentrySafe, Fort Knox, AMSEC, Liberty Safe. Licensed & insured.', url: '/services/safe-locksmith/', serviceType: 'Safe Locksmith', brands: LOCK_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Safe Locksmith in Brooklyn, NY — Safe Opening, Combination Reset & Installation | Avenue Locksmith', description: 'Safe locksmith in Brooklyn, NY. Locked out of your safe? Non-destructive opening first, always. SentrySafe, Fort Knox, AMSEC. Combination reset & new installation. Call (347) 386-7164.', url: '/services/safe-locksmith/' })} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Safe Locksmith' },
      ]} />

      <HeroSection
        h1="Safe Locksmith in Brooklyn, NY — Opening, Combination Reset & Installation"
        subheadline="Locked out of your safe? We attempt non-destructive opening first — always. Electronic override, manipulation, and drilling as a last resort. Same-day service."
        variant="service"
        showTrustBar
      />

      {/* Consumer safe misconception — unique angle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            What Your Safe Actually Protects Against — The Fire vs. Burglary Distinction
          </h2>
          <p className="text-brand-text leading-relaxed mb-4">
            Most people assume their home safe protects against both fire and burglary. The reality depends on which type you have. The majority of consumer safes sold at Costco, Target, and hardware stores are UL fire-rated — they are designed to keep the interior below a specific temperature for a specific time period. They are not burglar-resistant. A determined person with basic tools can open many consumer fire safes in minutes.
          </p>
          <p className="text-brand-text leading-relaxed mb-6">
            True burglar-rated safes are certified to UL Residential Security Container (RSC) or TL-15/TL-30 standards, which require physical attack testing. These safes have significantly thicker steel, hardened bolt work, and anti-drill plates. If you need burglary protection, look for UL RSC certification — not just a fire rating.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5">
              <h3 className="font-bold text-amber-900 mb-2">Fire Safe (most consumer safes)</h3>
              <ul className="space-y-1.5">
                {['Protects paper from fire at a rated temperature', 'Thin steel walls — easily attacked', 'Lower cost: $50–$400', 'SentrySafe, First Alert, Honeywell'].map((i) => (
                  <li key={i} className="text-amber-800 text-xs flex gap-1.5 items-start">
                    <span className="shrink-0 mt-0.5">•</span>{i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-5">
              <h3 className="font-bold text-green-900 mb-2">Burglar Safe (RSC or TL-rated)</h3>
              <ul className="space-y-1.5">
                {['UL RSC or TL-15/TL-30 certified', 'Heavy steel, hardened components, anti-drill', 'Higher cost: $300–$3,000+', 'AMSEC, Fort Knox, Liberty, Gardall'].map((i) => (
                  <li key={i} className="text-green-800 text-xs flex gap-1.5 items-start">
                    <span className="shrink-0 mt-0.5">•</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-brand-bg rounded-xl border border-brand-border p-4">
            <div className="flex items-start gap-3">
              <Shield size={16} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-brand-text text-sm">If you are storing firearms, significant cash, or irreplaceable items, discuss your needs with us before purchasing. We can recommend the right safe for your specific situation and install it properly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-5">Safe Services We Provide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SAFE_SERVICES.map((s) => (
              <div key={s.label} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-brand-border">
                <CheckCircle size={15} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-brand-navy text-sm">{s.label}</p>
                  <p className="text-brand-muted text-xs">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-brand-navy mb-4">Safe Brands We Service</h2>
          <div className="flex flex-wrap gap-2">
            {SAFE_BRANDS.map((b) => (
              <span key={b} className="bg-brand-bg border border-brand-border rounded-full px-3 py-1.5 text-sm text-brand-text">{b}</span>
            ))}
            <span className="bg-brand-bg border border-brand-border rounded-full px-3 py-1.5 text-sm text-brand-muted">+ most others</span>
          </div>
          <p className="text-brand-muted text-xs mt-4">
            We also advise on and install new safes. If you are not sure which safe is right for your needs, call us — we can help you understand the UL ratings and what they actually mean for your situation.
          </p>
        </div>
      </section>

      {/* Warning about DIY */}
      <section className="py-8 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} className="text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-red-900 mb-1">Do not attempt to open your safe with a drill</p>
                <p className="text-red-800 text-sm leading-relaxed">
                  Drilling a safe incorrectly can trigger the relocker mechanism — a security feature that engages additional bolts when the safe is attacked, making it significantly harder to open even for professionals. If you are considering drilling, call us first. We can often open it non-destructively if the relocker has not been triggered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Safe Locksmith FAQ — Opening, Combination & Installation Questions" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Commercial Locksmith', href: '/services/commercial-locksmith/' },
              { label: 'High-Security Lock Installation', href: '/services/security-solutions/high-security-locks/' },
              { label: 'Access Control Systems', href: '/services/security-solutions/access-control-systems/' },
              { label: 'Security Solutions Overview', href: '/services/security-solutions/' },
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
          <h2 className="text-3xl font-bold mb-3">Locked Out of Your Safe in Brooklyn?</h2>
          <p className="text-white/80 mb-8">We attempt non-destructive opening first, always. Call before you drill.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl">
            <Phone size={26} aria-hidden="true" />{BUSINESS.phone}
          </a>
        </div>
      </section>

      <ContactFormSection
        title="Schedule Safe Service"
        subtitle="Tell us your safe brand, model, and the situation — we'll advise the best approach."
      />
    </>
  )
}
