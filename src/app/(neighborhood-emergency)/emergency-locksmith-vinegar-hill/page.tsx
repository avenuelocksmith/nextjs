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
  title: 'Emergency Locksmith Vinegar Hill — 15–25 Min Response | Avenue Locksmith',
  description: 'Emergency locksmith in Vinegar Hill, Brooklyn. Locked out of your home? 15–25 minute response, 24/7. Licensed & insured. Call (347) 386-7164 now.',
  path: '/emergency-locksmith-vinegar-hill/',
})

const FAQS = [
  { question: 'Do you serve Vinegar Hill for emergency lockouts?', answer: 'Yes — Vinegar Hill is within our regular service area. We arrive within 15–25 minutes for emergency lockouts on Bridge Street, Hudson Avenue, and all surrounding streets.' },
  { question: 'Vinegar Hill has many old townhouses. Do you work with antique door hardware?', answer: 'Yes — older hardware including antique mortise locks, original rim cylinders, and period-appropriate deadbolts are part of our regular work in North Brooklyn\'s historic neighborhoods. We carry tools for all of them.' },
  { question: 'Is there a minimum charge for lockouts in Vinegar Hill?', answer: 'Emergency lockout service starts at $75–$125, quoted in full before we begin. No minimum beyond the quoted price, no after-hours surcharges.' },
  { question: 'Can you help with a car lockout in Vinegar Hill as well?', answer: 'Yes — we handle vehicle lockouts with the same 15–25 minute response. If you are locked out of your car near the Navy Yard or anywhere in Vinegar Hill, we respond immediately.' },
]

export default function EmergencyLocksmithVinegarHillPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({ name: 'Emergency Locksmith — Vinegar Hill', description: 'Emergency locksmith in Vinegar Hill, Brooklyn. 15–25 minute response for home and apartment lockouts.', url: '/emergency-locksmith-vinegar-hill/', serviceType: 'Emergency Lockout Service' })} />
      <JsonLd data={getFAQSchema(FAQS)} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Emergency Locksmith Vinegar Hill', url: '/emergency-locksmith-vinegar-hill/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Emergency Locksmith Vinegar Hill' }]} />
      <HeroSection h1="Emergency Locksmith in Vinegar Hill — 15–25 minute response" subheadline="Locked out of your Vinegar Hill home or apartment? Fast non-destructive entry 24/7. No after-hours surcharge. Licensed & insured." variant="emergency" showTrustBar ctaLabel="Call Now — Fast Response" />
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-brand-text text-lg leading-relaxed mb-6">Vinegar Hill is one of Brooklyn's smallest and most historically distinct neighborhoods — a quiet enclave of 19th-century Federal-style row houses tucked between DUMBO and the Brooklyn Navy Yard. The older housing stock means older door hardware, and our technicians carry the tools to work with it. We serve this neighborhood as part of our North Brooklyn coverage alongside DUMBO, Brooklyn Heights, and the surrounding areas.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Home & apartment lockouts', 'Antique & historic door hardware', 'Non-destructive entry always first', '24/7 coverage — same price always', 'Car lockouts — same response', 'Licensed & insured locksmith'].map((item) => (
              <div key={item} className="flex items-center gap-2.5"><CheckCircle size={16} className="text-brand-amber shrink-0" aria-hidden="true" /><span className="text-brand-text text-sm">{item}</span></div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2"><AlertTriangle size={17} className="text-amber-600 mt-0.5 shrink-0" /><p className="text-amber-800 text-sm leading-relaxed"><strong>Locksmith Scam Warning:</strong> Always get a firm price before any work begins. If the quote changes after arrival, do not allow work to proceed. Avenue Locksmith provides firm, upfront quotes on every call.</p></div>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Vinegar Hill Lockout FAQ" />
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Locked Out in Vinegar Hill? Call Now.</h2>
          <p className="text-white/80 mb-8">15–25 minute response. No damage. Licensed & insured.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-12 py-6 rounded-xl text-2xl transition-colors shadow-2xl"><Phone size={30} aria-hidden="true" />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  )
}
