import type { Metadata } from 'next'
import { Phone, CheckCircle, Clock } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { Term247 } from '@/components/ui/Term247'

export const metadata: Metadata = buildMetadata({
  title: '24-Hour Locksmith in Brooklyn, NY — Always Available | Avenue Locksmith',
  description: '24-hour locksmith in Brooklyn, NY. Available day and night, 365 days a year. Same pricing — no after-hours surcharges. Call (347) 386-7164 any time.',
  path: '/24-hour-locksmith-in-brooklyn-ny/',
})

const FAQS = [
  { question: 'Do you really answer at 3am?', answer: 'Yes — every time. When you call Avenue Locksmith at any hour, a real person answers and dispatches immediately. We do not have a separate after-hours line or answering service.' },
  { question: 'Do you charge extra for nighttime calls?', answer: 'No. Our pricing is the same at 3am as it is at 3pm. Emergency lockout service starts at $75–$125 regardless of time of day. We always quote the full price before starting work.' },
  { question: 'How fast is the 24-hour response in Brooklyn?', answer: 'We maintain the same 15–25 minute response guarantee around the clock. We have technicians stationed throughout Brooklyn so night calls receive the same response time as daytime calls.' },
  { question: 'What services are available 24 hours?', answer: 'All emergency services are available 24/7 — home lockouts, car lockouts, business lockouts, broken key extraction, and emergency lock changes after a break-in. Non-emergency scheduled services (lock upgrades, key duplication) can be booked at any time for same-day or next-day.' },
]

export default function TwentyFourHourPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: '24-Hour Locksmith', description: '24-hour locksmith service in Brooklyn, NY. Available around the clock, 365 days a year.', url: '/24-hour-locksmith-in-brooklyn-ny/', serviceType: '24-Hour Locksmith' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: '24-Hour Locksmith Brooklyn', url: '/24-hour-locksmith-in-brooklyn-ny/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: '24-Hour Locksmith Brooklyn' }]} />
      <HeroSection h1="24-Hour Locksmith in Brooklyn, NY — Always Available" subheadline="Locked out at midnight? 4am? Sunday morning? We answer every call, dispatch immediately, and arrive in 15–25 minutes — any time, any day." variant="emergency" showTrustBar ctaLabel="Call Now — We Answer 24/7" />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-5">24-Hour Service — What That Actually Means</h2>
          <p className="text-brand-text leading-relaxed mb-5">Many services claim to be available 24 hours but route after-hours calls to a voicemail or an answering service that schedules you for the next morning. At Avenue Locksmith, 24/7 means a live Avenue Locksmith person answers, dispatches a technician, and has someone at your door within 15–25 minutes — at 2pm or 2am.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Live person answers every call — no voicemail', '15–25 minute arrival guarantee around the clock', 'Same pricing day or night — no surcharges', 'Holidays and weekends treated as regular days', 'Serving all Brooklyn neighborhoods 24 hours'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
            <div className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">All emergency services available <Term247 /></span></div>
          </div>
          <div className="bg-brand-bg rounded-xl border border-brand-border p-5">
            <div className="flex items-center gap-2 mb-2"><Clock size={18} className="text-brand-amber" aria-hidden="true" /><h3 className="font-bold text-brand-navy">Our Hours</h3></div>
            <p className="text-brand-text text-lg font-bold">Open 24 hours · 7 days a week · 365 days a year</p>
            <p className="text-brand-muted text-sm mt-1">Including Thanksgiving, Christmas, New Year&apos;s, and all holidays.</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="24-Hour Locksmith FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Call Now — Any Time, Day or Night</h2>
          <p className="text-white/80 mb-8">A real person answers every call. 15–25 minute arrival guaranteed.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl"><Phone size={26} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
      <ContactFormSection />
    </>
  )
}
