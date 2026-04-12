import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, AlertTriangle, FileText } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '@/lib/schema'
import { buildServiceMetadata } from '@/lib/seo'
import { LOCK_BRANDS } from '@/lib/constants'

export const metadata: Metadata = buildServiceMetadata({
  serviceName: 'Eviction Locksmith',
  path: '/services/eviction-locksmith/',
  customTitle: 'Eviction Locksmith in Brooklyn, NY — Post-Eviction Lock Change | Avenue Locksmith',
  customDescription: 'Post-eviction lock change for NYC landlords in Brooklyn. Legal evictions only — NY City Marshal paperwork required. Same-day service. Licensed & insured. Call (347) 386-7164.',
})

const FAQS = [
  {
    question: 'What paperwork do I need before you will change the locks after an eviction?',
    answer: 'We require the executed NYC Marshal\'s Warrant of Eviction or the signed Stipulation of Settlement (in cases where the tenant agreed to vacate by a specific date). We do not change occupied apartment locks without court documentation — this protects you from illegal lockout liability and protects us. Have the paperwork ready when you call and we can often come the same day the eviction is executed.',
  },
  {
    question: 'My tenant left voluntarily before the court date — do I still need the marshal paperwork?',
    answer: 'If the tenant has physically vacated the unit and surrendered the keys (ideally in writing), you can change the locks without court documentation. A signed key surrender or move-out confirmation letter is recommended. If there is any dispute about whether the tenant has vacated, get the court order first. The cost of an illegal lockout claim far exceeds the cost of waiting for paperwork.',
  },
  {
    question: 'How much does a post-eviction lock change cost in Brooklyn?',
    answer: 'A single-lock post-eviction rekey costs $65–$85. If the tenant damaged the lock or if you want to upgrade the hardware, a full replacement runs $95–$175 per lock. For multi-unit buildings where multiple units need changing, we offer building rate pricing — call for a quote. We always quote the full price before starting.',
  },
  {
    question: 'Can I be held liable if I change the locks before the marshal executes the eviction?',
    answer: 'Yes. Changing the locks before an eviction is legally executed — even if you have a court order — can constitute an illegal lockout under New York Real Property Law. The marshal must physically execute the eviction first. Only after the marshal has removed the tenant and the premises are legally returned to you can you change the locks. We never skip this sequence regardless of what a landlord tells us about their situation.',
  },
  {
    question: 'My tenant was evicted but left behind personal property — can I still change the locks?',
    answer: 'Yes. Once the eviction is legally executed, you can change the locks even if the tenant left belongings behind. The property handling is a separate legal matter governed by NYC abandoned property law — consult an attorney about your obligations. The locksmith work — securing your property — can proceed immediately after execution.',
  },
]

const STEPS = [
  { step: '1', title: 'Court issues Warrant of Eviction', body: 'After a Housing Court judgment. This is the legal authorization.' },
  { step: '2', title: 'NYC Marshal executes the eviction', body: 'The marshal removes the tenant and physically hands back the unit.' },
  { step: '3', title: 'You receive the executed paperwork', body: 'The marshal provides documentation that the eviction is complete.' },
  { step: '4', title: 'Call Avenue Locksmith', body: 'Call (347) 386-7164 with paperwork in hand. We come same day in most cases.' },
  { step: '5', title: 'We change the locks', body: 'Rekey or replace — your choice. New keys are yours immediately.' },
]

export default function EvictionLocksmithPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Eviction Locksmith Services', description: 'Post-eviction lock change for NYC landlords in Brooklyn. Legal evictions only — NY City Marshal paperwork required before work begins. Same-day service. Licensed & insured.', url: '/services/eviction-locksmith/', serviceType: 'Eviction Locksmith', brands: LOCK_BRANDS })} />
      <JsonLd data={getWebPageSchema({ title: 'Eviction Locksmith in Brooklyn, NY — Post-Eviction Lock Change | Avenue Locksmith', description: 'Post-eviction lock change for NYC landlords in Brooklyn. Legal evictions only — NY City Marshal paperwork required. Same-day service. Licensed & insured. Call (347) 386-7164.', url: '/services/eviction-locksmith/' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services/' },
        { name: 'Eviction Locksmith', url: '/services/eviction-locksmith/' },
      ])} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Eviction Locksmith' },
      ]} />

      <HeroSection
        h1="Eviction Locksmith in Brooklyn, NY — Post-Eviction Lock Change"
        subheadline="Post-eviction lock changes for Brooklyn landlords. Legal evictions only — we require executed marshal paperwork before any lock is changed. Same-day service."
        variant="service"
        showTrustBar
      />

      {/* Legal process focus — unique angle for this page */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">
            The Legal Process for Eviction Lock Changes in NYC
          </h2>
          <p className="text-brand-text leading-relaxed mb-4">
            In New York City, changing the locks on a tenant without a fully executed court order is an illegal lockout — a serious legal exposure for landlords. We work exclusively with Brooklyn landlords who have completed the full legal eviction process.
          </p>
          <p className="text-brand-text leading-relaxed mb-8">
            We require the executed NYC Marshal&apos;s Warrant of Eviction before beginning any lock change on an occupied or recently vacated unit. This is not bureaucracy — it protects you from costly illegal lockout claims.
          </p>

          <h3 className="text-lg font-bold text-brand-navy mb-4">The Five-Step Post-Eviction Process</h3>
          <div className="space-y-4">
            {STEPS.map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-brand-amber text-brand-navy font-bold rounded-full flex items-center justify-center shrink-0 text-sm">
                  {s.step}
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm mb-0.5">{s.title}</p>
                  <p className="text-brand-muted text-xs leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-brand-navy mb-5">What We Do After Eviction</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Lock rekeying (from $65)', detail: 'Old keys stop working, new keys for landlord' },
              { label: 'Full lock replacement', detail: 'When tenant damaged the hardware' },
              { label: 'Deadbolt upgrade', detail: 'Take the opportunity to improve security' },
              { label: 'Key cutting', detail: 'Multiple copies for new tenant & management' },
              { label: 'Mailbox lock change', detail: 'Often overlooked after evictions' },
              { label: 'Written receipt', detail: 'Documents what was installed and when — for insurance' },
            ].map((s) => (
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

      {/* Legal warning */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle size={20} className="text-red-600 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-bold text-red-900 mb-2">We Do Not Perform Illegal Lockouts</p>
                <p className="text-red-800 text-sm leading-relaxed">
                  Avenue Locksmith does not change locks on occupied apartments without executed court documentation. Landlords who ask us to &ldquo;just change it — they need to leave&rdquo; will be declined. An illegal lockout in NYC can result in damages of up to three months&apos; rent, attorney fees, and potential criminal liability. We protect you by requiring proper documentation before we start.
                </p>
                <p className="text-red-800 text-sm mt-2">
                  <strong>Need help with the eviction process?</strong> Contact the NYC Housing Court or a tenant/landlord attorney. We handle the lock — attorneys handle the law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} title="Eviction Locksmith FAQ — Brooklyn Landlord Questions" />

      {/* What you need to have ready */}
      <section className="py-10 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-3 bg-white rounded-xl p-5 border border-brand-border">
            <FileText size={20} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-bold text-brand-navy mb-2">What to Have Ready When You Call</h3>
              <ul className="space-y-1">
                {[
                  'Executed Warrant of Eviction (signed by the marshal after execution)',
                  'Property address and unit number',
                  'Your contact information as landlord or authorized agent',
                  'Confirmation that the unit is vacant and the tenant has been removed',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-text">
                    <CheckCircle size={13} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-base font-bold text-brand-navy mb-3">Related Services for Brooklyn Landlords</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'New Tenant Lock Change', href: '/services/new-tenant-lock-change/' },
              { label: 'Master Key Systems', href: '/services/commercial-locksmith/' },
              { label: 'Lock Rekeying', href: '/services/lock-rekey/' },
              { label: 'Mailbox Lock Replacement', href: '/services/mailbox-lock/' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-brand-navy text-sm font-medium hover:text-brand-amber transition-colors">
                <ArrowRight size={14} className="text-brand-amber shrink-0" aria-hidden="true" />{link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection
        title="Schedule Post-Eviction Lock Change"
        subtitle="Have your marshal paperwork ready. We come same day in most cases throughout Brooklyn."
      />
    </>
  )
}
