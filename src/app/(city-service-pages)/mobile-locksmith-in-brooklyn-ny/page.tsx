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
  title: 'Mobile Locksmith in Brooklyn, NY — We Come to You | Avenue Locksmith',
  description: 'Mobile locksmith in Brooklyn, NY. We come to your home, car, or business. Fully equipped service van. 15–25 minute response, 24/7. Call (347) 386-7164.',
  path: '/mobile-locksmith-in-brooklyn-ny/',
})

const FAQS = [
  { question: 'What does "mobile locksmith" mean?', answer: 'A mobile locksmith comes to your location with all tools and equipment needed to complete the job on-site. Our service van carries key cutting machines, lock pick sets, replacement hardware, and key programming equipment — no need to bring anything to a shop.' },
  { question: 'Do you have a physical shop location?', answer: 'We are a fully mobile locksmith serving all of Brooklyn from our equipped service vans. Every service we offer is completed on-site at your location — home, vehicle, or business.' },
  { question: 'Can you cut and program car keys on-site?', answer: 'Yes — our mobile units carry key cutting equipment and transponder programming tools for most makes and models. We can cut and program most replacement car keys at your location without towing your vehicle to a dealer.' },
  { question: 'How fast can you reach me anywhere in Brooklyn?', answer: 'We maintain a 15–25 minute response time throughout Brooklyn. We dispatch from multiple points in the borough to minimize travel time regardless of where you are.' },
]

export default function MobileLocksmithBkPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Mobile Locksmith', description: 'Mobile locksmith service in Brooklyn, NY. We come to your location — home, car, or business.', url: '/mobile-locksmith-in-brooklyn-ny/', serviceType: 'Mobile Locksmith' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mobile Locksmith Brooklyn', url: '/mobile-locksmith-in-brooklyn-ny/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Mobile Locksmith Brooklyn' }]} />
      <HeroSection h1="Mobile Locksmith in Brooklyn, NY — We Come to You" subheadline="Fully equipped mobile locksmith serving all of Brooklyn. No shop visit needed — we bring all tools to your home, car, or business and complete every service on-site." variant="service" showTrustBar />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-brand-text text-lg leading-relaxed mb-8">Every Avenue Locksmith technician operates from a fully equipped service van. We carry lock pick sets, key cutting machines, transponder programming equipment, replacement locks, and rekeying tools — everything needed to complete virtually any job at your location. In Brooklyn, that means no waiting for a shop to open and no towing your car across the borough.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              'On-site home & apartment lockout service',
              'Mobile car key cutting & programming',
              'On-site lock rekeying & replacement',
              'Mobile deadbolt installation',
              'Business lockout & lock change on-site',
              'Broken key extraction at your location',
              'Full key duplication — cuts made on-site',
              'All services performed at your address',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
          <div className="bg-brand-bg rounded-xl p-6 border border-brand-border">
            <h2 className="text-xl font-bold text-brand-navy mb-2">Fully Equipped — No Shop Needed</h2>
            <p className="text-brand-text text-sm leading-relaxed">Our service vans carry professional Ilco and Silca key cutting machines, HPC and Lishi pick sets, Autel and Advanced Diagnostics key programming tools, and a full stock of Grade 1 replacement hardware. What takes a dealer two days and a tow truck, we complete in 30 minutes at your location.</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Mobile Locksmith FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Mobile Locksmith in Brooklyn — We Come to You</h2>
          <p className="text-white/80 mb-8">15–25 minute response. Fully equipped. 24/7 availability.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl"><Phone size={26} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
      <ContactFormSection />
    </>
  )
}
