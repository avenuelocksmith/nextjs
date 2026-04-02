import type { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Automotive Locksmith in Brooklyn, NY — Car Keys & Lockouts | Avenue Locksmith',
  description: 'Automotive locksmith in Brooklyn, NY. Car lockouts, key fob programming, transponder keys. All makes & models. 15–25 Min Response. Call (347) 386-7164.',
  path: '/automotive-locksmith-in-brooklyn-ny/',
})

const FAQS = [
  { question: 'What automotive locksmith services do you offer?', answer: 'Car lockout (keys locked inside), keys locked in trunk, key fob programming, transponder key cutting and programming, ignition repair, and broken key extraction from ignition or door lock.' },
  { question: 'Do you work on all car makes and models?', answer: 'We service most domestic and foreign vehicles including Toyota, Honda, Ford, Chevrolet, BMW, Mercedes-Benz, Hyundai, Kia, Nissan, Jeep, Subaru, Audi, Volkswagen, and many more.' },
  { question: 'How fast can you arrive for a car lockout in Brooklyn?', answer: '15–25 minutes from anywhere in Brooklyn. We are available 24/7.' },
  { question: 'Is it cheaper than the dealership for car keys?', answer: 'Significantly — typically 60–80% less than dealership prices. A transponder key that costs $300+ at a dealer costs $75–$150 with us.' },
]

export default function AutomotiveLocksmithBrooklynPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Automotive Locksmith', description: 'Automotive locksmith in Brooklyn, NY. Car lockouts, key fob programming, transponder keys. All makes & models.', url: '/automotive-locksmith-in-brooklyn-ny/', serviceType: 'Automotive Locksmith' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Automotive Locksmith Brooklyn', url: '/automotive-locksmith-in-brooklyn-ny/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Automotive Locksmith Brooklyn' }]} />
      <HeroSection h1="Automotive Locksmith in Brooklyn, NY — Car Keys & Lockouts" subheadline="Locked out of your car or need a new key? We serve all Brooklyn neighborhoods with 15–25 minute response for car lockouts and key programming at a fraction of dealership prices." variant="service" showTrustBar />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-brand-text leading-relaxed mb-6">From street parking lockouts on Atlantic Avenue to garage lockouts in Bay Ridge, Avenue Locksmith handles all automotive locksmith situations across Brooklyn. We carry key cutting and programming equipment for most makes and models on our service vehicles.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Car door lockout', 'Keys locked in trunk', 'Key fob programming', 'Transponder key cutting & programming', 'Smart key / push-to-start replacement', 'Ignition repair & replacement', 'Broken key extraction', 'Duplicate spare car key'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Automotive Locksmith FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Need an Auto Locksmith in Brooklyn?</h2>
          <p className="text-white/80 mb-8">15–25 minute response. Available 24/7. Up to 80% less than dealer prices.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl"><Phone size={26} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
      <ContactFormSection />
    </>
  )
}
