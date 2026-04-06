import type { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { Term247 } from '@/components/ui/Term247'

export const metadata: Metadata = buildMetadata({
  title: 'Car Lockout Service in Brooklyn, NY — 15–25 Min Response | Avenue Locksmith',
  description: 'Locked out of your car in Brooklyn? 15–25 minute car lockout response. No damage entry. All makes & models. 24/7. Call (347) 386-7164.',
  path: '/car-lockout-service-in-brooklyn-ny/',
})

const FAQS = [
  { question: 'How do you open my car without damaging it?', answer: 'We use professional air wedge and long reach tool kits to create a small gap in the door seal and manipulate the interior controls without touching the paint or damaging the seal. Slim jim tools are used for older vehicles without electronic controls.' },
  { question: 'How fast for a car lockout in Brooklyn?', answer: '15–25 minutes. We have technicians throughout Brooklyn and treat car lockouts as priority calls.' },
  { question: 'What if my keys are in the trunk?', answer: 'We can open the trunk directly (via the trunk lock or interior release) or open the door first to access the interior trunk release. Both are standard car lockout procedures.' },
  { question: 'Do you charge extra at night?', answer: 'No after-hours surcharges — same price at any hour. Emergency car lockout starts at $75–$125.' },
]

export default function CarLockoutPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Car Lockout Service', description: 'Car lockout service in Brooklyn, NY. 15–25 minute response, no-damage entry, all makes and models.', url: '/car-lockout-service-in-brooklyn-ny/', serviceType: 'Auto Lockout Service' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Car Lockout Brooklyn', url: '/car-lockout-service-in-brooklyn-ny/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Car Lockout Service Brooklyn' }]} />
      <HeroSection h1="Car Lockout Service in Brooklyn, NY — Locked Out of Your Car?" subheadline="Keys locked in the car? Locked keys in trunk? We arrive in 15–25 minutes, open your car without damage, and get you back on the road. Available 24/7." variant="emergency" showTrustBar ctaLabel="Call Now — 15–25 Min Response" />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">Car lockouts happen everywhere in Brooklyn — parking lots, driveways, street parking. We respond across all neighborhoods with professional, non-damage entry tools. Our technicians are trained on all common vehicle types including sedans, SUVs, trucks, and vans.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Keys locked inside the car', 'Keys locked in the trunk', 'Lost car keys', 'Key broken in door lock', 'Locked out of your rental car', 'No damage entry — professional tools', '15–25 Min Response — all Brooklyn', '24/7 — including nights & holidays'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Car Lockout FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Locked Out of Your Car in Brooklyn?</h2>
          <p className="text-white/80 mb-8">15–25 minute response guaranteed. Available <Term247 />.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl"><Phone size={26} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
