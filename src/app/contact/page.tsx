import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Avenue Locksmith — Brooklyn, NY | (347) 386-7164',
  description: 'Contact Avenue Locksmith in Brooklyn. Call (347) 386-7164 for immediate locksmith service, or use the form for a free quote. Licensed & insured. 24/7 emergency response.',
  path: '/contact/',
})

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Phone',
    value: BUSINESS.phone,
    href: BUSINESS.phoneHref,
    sublabel: 'Call or text — 24/7',
  },
  {
    icon: Mail,
    label: 'Email',
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    sublabel: 'Response within 1 hour',
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: 'All of Brooklyn, NY',
    href: '/locksmith-near-me/',
    sublabel: '15–25 Min Response throughout the borough',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: '24 Hours / 7 Days',
    href: null,
    sublabel: 'Emergency response always available',
  },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({ title: 'Contact Avenue Locksmith', description: 'Contact Avenue Locksmith in Brooklyn, NY.', url: '/contact/' })} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

      {/* Hero */}
      <section className="py-12 bg-brand-navy text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Avenue Locksmith</h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">For immediate locksmith service, call us directly — we answer 24 hours a day. For non-urgent requests, use the form below and we respond within the hour.</p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-2xl transition-colors shadow-2xl"
          >
            <Phone size={28} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
          <p className="text-white/60 text-sm mt-3">Licensed & Insured · No After-Hours Surcharge · 15–25 minute response</p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-10 bg-white border-b border-brand-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="bg-brand-bg rounded-xl p-5 border border-brand-border text-center">
                <item.icon size={24} className="text-brand-amber mx-auto mb-2" aria-hidden="true" />
                <p className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="font-bold text-brand-navy hover:text-brand-amber transition-colors text-sm block mb-1">{item.value}</a>
                ) : (
                  <p className="font-bold text-brand-navy text-sm mb-1">{item.value}</p>
                )}
                <p className="text-brand-muted text-xs">{item.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <ContactFormSection
        title="Send Us a Message"
        subtitle="Describe your situation and we'll respond within the hour with an upfront price. No obligation, no hidden fees."
      />

      {/* Map + address */}
      <section className="py-10 bg-brand-bg border-t border-brand-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Serving All of NYC</h2>
              <p className="text-brand-text leading-relaxed mb-4">Avenue Locksmith is a mobile locksmith service covering all five NYC boroughs. We do not have a walk-in location — all services are performed at your home, vehicle, or business.</p>
              <div className="space-y-2 text-sm text-brand-text">
                <p><strong>Service Area:</strong> Brooklyn, Queens, Manhattan, Staten Island &amp; the Bronx</p>
                <p><strong>Response Time:</strong> Typically 15–25 minutes in Brooklyn</p>
                <p><strong>Hours:</strong> 24/7 · 365 days a year</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-brand-border shadow-sm h-64 bg-brand-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48440.67947442523!2d-74.03282!3d40.6501897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Avenue Locksmith service area — Brooklyn, NY"
                aria-label="Map showing Avenue Locksmith service area in Brooklyn, NY"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
