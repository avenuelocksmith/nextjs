import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Building, Key, Shield, Clock } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildServiceMetadata } from '@/lib/seo'
import { BUSINESS, LOCK_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildServiceMetadata({
  serviceName: 'Commercial Locksmith',
  path: '/services/commercial-locksmith/',
  customTitle: 'Commercial Locksmith in Brooklyn, NY — Business & Office Security | Avenue Locksmith',
  customDescription: 'Commercial locksmith services in Brooklyn, NY. Master key systems, access control, business lockouts, storefront locks. Minimize downtime. Licensed & insured. Call (347) 386-7164.',
})

const FAQS = [
  {
    question: 'An employee was terminated today — how do I secure my Brooklyn office without rekeying every lock?',
    answer: 'This is one of the most common commercial calls we receive. Your options: (1) rekey the specific locks the employee had access to — fastest and cheapest, (2) if your building uses a master key system, we can remove the departed employee\'s key from the hierarchy without touching other keys, (3) if you have a keypad or smart lock system, simply delete their code. We recommend same-day service for terminations involving any sensitive access — call (347) 386-7164 and we prioritize these.',
  },
  {
    question: 'What is a master key system and does my Brooklyn business need one?',
    answer: 'A master key system is a pinned lock hierarchy where one master key opens every lock, department keys open groups of locks, and individual keys open only specific locks. It eliminates the need for employees to carry multiple keys. Most Brooklyn businesses with 3+ employees and multiple secured areas benefit from a master key system. We design, pin, and install them for offices, restaurants, retail, and multi-unit buildings. Setup takes 1–2 days depending on the number of locks.',
  },
  {
    question: 'Our office was broken into overnight — what do we do first?',
    answer: 'Call 911 and preserve the scene for the police report (your insurance will require it). Then call us at (347) 386-7164. We respond to commercial break-in emergencies 24/7. We will replace destroyed hardware, reinforce door frames, provide a written incident report for insurance, and if needed, install temporary security while permanent hardware is ordered. Do not delay — an unsecured commercial property is a liability.',
  },
  {
    question: 'Can you install an access control system that lets me see who enters and when?',
    answer: 'Yes. Commercial access control systems — keycard, key fob, PIN, or app-based — log every entry event with a timestamp and credential ID. If an incident occurs, you have a complete audit trail. We install cloud-based systems (Kisi, Brivo, Salto) that you manage from a web dashboard or phone app. Add or revoke access instantly without touching the physical hardware.',
  },
  {
    question: 'My Brooklyn storefront has a roll-down gate and a glass door — how do I secure both properly?',
    answer: 'Roll-down gates: we install hardened closed-shackle padlocks on a through-bolted hasp — the padlock size matters less than the hasp quality. Glass doors: a commercial mortise lock or grade 1 rim cylinder with a double-cylinder deadbolt (key both sides) on glass-panel doors prevents reach-through unlocking. We assess your specific storefront and recommend the combination that balances security with daily operational ease.',
  },
]

const COMMERCIAL_SERVICES = [
  { label: 'Business lockout — after hours', detail: '24/7 response, minimize downtime' },
  { label: 'Master key system design & install', detail: 'Hierarchy for offices, retail, warehouses' },
  { label: 'Access control installation', detail: 'Keycard, fob, PIN, smartphone entry' },
  { label: 'Storefront & retail lock service', detail: 'Mortise locks, rim cylinders, panic bars' },
  { label: 'Post-break-in security repair', detail: 'Emergency lock replacement + frame repair' },
  { label: 'Employee credential management', detail: 'Add/revoke access, termination service' },
  { label: 'Panic bar (exit device) installation', detail: 'Code-compliant emergency egress' },
  { label: 'Safe installation & service', detail: 'Office safes, combination changes' },
]

export default function CommercialLocksmithPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Commercial Locksmith Services', description: 'Commercial locksmith services in Brooklyn, NY. Master key systems, access control, business lockouts, storefront security, and post-break-in emergency repair. Licensed & insured.', url: '/services/commercial-locksmith/', serviceType: 'Commercial Locksmith', brands: LOCK_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Commercial Locksmith in Brooklyn, NY — Business & Office Security | Avenue Locksmith', description: 'Commercial locksmith services in Brooklyn, NY. Master key systems, access control, business lockouts, storefront locks. Minimize downtime. Licensed & insured. Call (347) 386-7164.', url: '/services/commercial-locksmith/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services/' },
        { name: 'Commercial Locksmith', url: '/services/commercial-locksmith/' },
      ])} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Commercial Locksmith' },
      ]} />

      <HeroSection
        h1="Commercial Locksmith in Brooklyn, NY — Business & Office Security"
        subheadline="Master key systems, access control, post-break-in repair, and 24/7 business lockout response. We minimize downtime and maximize security for Brooklyn businesses."
        variant="service"
        showTrustBar
      />

      {/* Business-focused intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            Commercial Lock Security Is a Business Liability Issue
          </h2>
          <p className="text-brand-text leading-relaxed mb-4">
            A residential lockout is an inconvenience. A commercial lockout — at 7am when your staff cannot get in, or at 2am after a break-in — is a business continuity emergency with direct financial impact. Avenue Locksmith treats commercial calls with the urgency they deserve.
          </p>
          <p className="text-brand-text leading-relaxed mb-6">
            We work with Brooklyn restaurants, retail shops, offices, warehouses, medical practices, and multi-unit buildings. Whether you need a master key system designed from scratch or an employee credential revoked within the hour, we respond the same day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Clock, title: '24/7 Business Lockout', body: 'Commercial emergencies do not wait for business hours. Neither do we.' },
              { icon: Key, title: 'Master Key Systems', body: 'One key hierarchy for your entire facility — we design, pin, and install.' },
              { icon: Shield, title: 'Access Control', body: 'Audit trails, instant credential revocation, remote management.' },
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

      {/* Services */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Commercial Locksmith Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COMMERCIAL_SERVICES.map((s) => (
              <div key={s.label} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-brand-border">
                <Building size={15} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-brand-navy text-sm">{s.label}</p>
                  <p className="text-brand-muted text-xs">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business types served */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">
            Types of Brooklyn Businesses We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              'Restaurants & Bars',
              'Retail Stores',
              'Offices & Co-working',
              'Warehouses & Storage',
              'Medical & Dental Offices',
              'Multi-unit Buildings',
              'Schools & Nonprofits',
              'Hotels & Hospitality',
              'Auto Shops & Garages',
            ].map((type) => (
              <div key={type} className="flex items-center gap-2 bg-brand-bg rounded-lg p-3 border border-brand-border">
                <CheckCircle size={14} className="text-brand-amber shrink-0" aria-hidden="true" />
                <span className="text-brand-text text-xs font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Commercial Locksmith FAQ — Business Owner Questions" />

      {/* Internal links */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-4">Related Commercial Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Access Control Systems', href: '/services/security-solutions/access-control-systems/' },
              { label: 'High-Security Lock Installation', href: '/services/security-solutions/high-security-locks/' },
              { label: 'Commercial Lockout Service', href: '/services/lockout-service/commercial-lockout-service-avenue-locks/' },
              { label: 'Eviction Locksmith (NYC Landlords)', href: '/services/eviction-locksmith/' },
              { label: 'CCTV Installation Brooklyn', href: '/services/security-solutions/cctv-installation/' },
              { label: 'All Security Solutions', href: '/services/security-solutions/' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-brand-navy text-sm font-medium hover:text-brand-amber transition-colors">
                <ArrowRight size={14} className="text-brand-amber shrink-0" aria-hidden="true" />{link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection
        title="Get a Commercial Locksmith Quote"
        subtitle="Describe your business security needs and we will respond within the hour with a full quote."
      />
    </>
  )
}
