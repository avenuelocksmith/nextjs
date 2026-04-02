import type { Metadata } from 'next'
import { Phone, CheckCircle, AlertTriangle } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Emergency Locksmith DUMBO — 15–25 Min Response | Avenue Locksmith',
  description: 'Emergency locksmith in DUMBO, Brooklyn. Loft & apartment lockouts, 24/7. 15–25 minute arrival. Licensed & insured. Call (347) 386-7164 now.',
  path: '/emergency-locksmith-dumbo/',
})

const FAQS = [
  { question: 'How fast can you reach DUMBO for an emergency lockout?', answer: 'We arrive within 15–25 minutes for emergency lockouts throughout DUMBO — Washington Street, Water Street, Jay Street, and the surrounding waterfront blocks.' },
  { question: 'DUMBO has many converted loft buildings. Can you open heavy commercial-style doors?', answer: 'Yes — DUMBO\'s converted warehouse and factory buildings often have heavier commercial-grade door hardware. We carry tools for both commercial and residential door configurations and handle loft entry regularly.' },
  { question: 'My DUMBO building uses a key fob for the main entrance. What should I do?', answer: 'For key fob main entrance lockouts, contact your building management or super first as fob access typically requires administrative override. For lockout from your individual apartment door (physical lock), call us directly and we will open it.' },
  { question: 'Do you handle car lockouts in DUMBO?', answer: 'Yes — vehicle lockouts near the Manhattan Bridge, on Old Fulton Street, or anywhere in DUMBO are handled with the same 15–25 minute response.' },
]

export default function EmergencyLocksmithDumboPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Emergency Locksmith — DUMBO', description: 'Emergency locksmith in DUMBO, Brooklyn. 15–25 minute response for loft and apartment lockouts.', url: '/emergency-locksmith-dumbo/', serviceType: 'Emergency Lockout Service' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Emergency Locksmith DUMBO', url: '/emergency-locksmith-dumbo/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Emergency Locksmith DUMBO' }]} />
      <HeroSection h1="Emergency Locksmith in DUMBO — 15–25 minute response" subheadline="Locked out of your DUMBO loft or apartment? We arrive within 15–25 minutes, any time. Non-destructive entry, no after-hours surcharge. Licensed & insured." variant="emergency" showTrustBar ctaLabel="Call Now — Fast Response" />
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">DUMBO's converted industrial loft buildings present some of the most distinctive door configurations in Brooklyn — heavy steel doors, oversized commercial-grade deadbolts, and older mortise lock systems are common throughout the neighborhood's landmark warehouse buildings. We work with all of them. Our technicians have experience with DUMBO's unique housing stock and carry the tools to open it without damage.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Loft & converted warehouse entry', 'Heavy commercial-grade door locks', 'Modern apartment deadbolts', 'Non-destructive entry always first', '24/7 — no after-hours charge', 'Licensed & insured locksmith'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2"><AlertTriangle size={17} className="text-amber-600 mt-0.5 shrink-0" /><p className="text-amber-800 text-sm leading-relaxed"><strong>Avoid Locksmith Scams:</strong> Request a written price quote before tools come out. If the locksmith refuses or the price jumps after arrival, send them away. Avenue Locksmith always quotes the full price first.</p></div>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="DUMBO Lockout FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Locked Out in DUMBO? Call Right Now.</h2>
          <p className="text-white/80 mb-8">15–25 minute response. No damage. No hidden fees.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-12 py-6 rounded-xl text-2xl transition-colors shadow-2xl"><Phone size={30} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
