import type { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS, AUTO_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Auto Locksmith Brooklyn NY — Key Programming & Transponder Keys | Avenue Locksmith',
  description: 'Auto locksmith in Brooklyn, NY specializing in key programming & transponder keys. Toyota, Honda, BMW, Ford & more. Up to 80% less than dealers. Call (347) 386-7164.',
  path: '/automotive-locksmith-brooklyn-ny/',
})

const FAQS = [
  { question: 'What is a transponder key and why does it cost more?', answer: 'A transponder key contains a microchip that communicates with your car\'s immobilizer system. The car will not start without the correct chip signal. Programming this chip requires specialized equipment and is why transponder keys cost more than basic key cuts — but we still charge 60–80% less than dealerships.' },
  { question: 'Can you program keys for push-to-start vehicles?', answer: 'Yes — we program smart keys and proximity fobs for most push-to-start vehicles. These are the most complex and expensive key types, but we offer significant savings over dealer pricing.' },
  { question: 'Do you carry key blanks for my car?', answer: 'We carry blanks for most common makes and models on our service vehicles. Call with your year, make, and model and we will confirm we can help and give you an upfront price.' },
  { question: 'What if I have zero keys left — can you still make one?', answer: 'Yes. If you have no working key, we can create a new key from scratch using your VIN and proof of ownership. This is called a key creation or key cutting from scratch.' },
]

export default function AutomotiveLocksmithBkNYPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Auto Locksmith Key Programming', description: 'Auto locksmith in Brooklyn, NY. Key programming, transponder keys, smart keys. All makes & models. Up to 80% less than dealers.', url: '/automotive-locksmith-brooklyn-ny/', serviceType: 'Automotive Key Programming', brands: AUTO_BRANDS })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Auto Locksmith Brooklyn NY', url: '/automotive-locksmith-brooklyn-ny/' }])} />
      <JsonLd data={getWebPageSchema({ title: 'Auto Locksmith Brooklyn NY — Key Programming & Transponder Keys | Avenue Locksmith', description: 'Auto locksmith in Brooklyn, NY specializing in key programming & transponder keys. Toyota, Honda, BMW, Ford & more. Up to 80% less than dealers. Call (347) 386-7164.', url: '/automotive-locksmith-brooklyn-ny/' })} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Auto Locksmith Brooklyn NY' }]} />
      <HeroSection h1="Auto Locksmith Brooklyn, NY — Key Programming & Transponder Keys" subheadline="Need a new car key programmed in Brooklyn? We program transponder keys, smart keys, and key fobs for most makes and models — at a fraction of dealership cost." variant="service" showTrustBar />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-5">Car Key Programming in Brooklyn</h2>
          <p className="text-brand-text leading-relaxed mb-5">Modern vehicles require electronically programmed keys — the physical cut alone is not enough. The key must be programmed to your car's specific immobilizer to allow the engine to start. We carry OBD programming equipment for most domestic and foreign makes and models.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Transponder key cutting & programming', 'Smart key / proximity fob programming', 'Push-to-start remote programming', 'Key fob battery replacement & sync', 'Duplicate spare key programming', 'Key creation from VIN (zero keys)', 'Remote head key programming', 'All major makes & models supported'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
          <div className="bg-brand-bg rounded-xl border border-brand-border p-5">
            <h3 className="font-bold text-brand-navy mb-2">Car Makes We Program</h3>
            <div className="flex flex-wrap gap-2">
              {['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Hyundai', 'Kia', 'Nissan', 'Jeep', 'Audi', 'Volkswagen', 'Subaru', 'Dodge'].map((m) => (
                <span key={m} className="bg-white border border-brand-border rounded-full px-3 py-1 text-sm text-brand-text">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Car Key Programming FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Need Car Key Programming in Brooklyn?</h2>
          <p className="text-white/80 mb-8">We come to you. Mobile key programming across all Brooklyn neighborhoods.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl"><Phone size={26} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
      <ContactFormSection />
    </>
  )
}
