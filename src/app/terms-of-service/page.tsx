import type { Metadata } from 'next'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service | Avenue Locksmith',
  description: 'Terms of service for Avenue Locksmith. Terms governing use of our website and locksmith services in Brooklyn, NY.',
  path: '/terms-of-service/',
})

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({ title: 'Terms of Service', description: 'Terms of service for Avenue Locksmith.', url: '/terms-of-service/' })} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Terms of Service', url: '/terms-of-service/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]} />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-brand-navy mb-2">Terms of Service</h1>
          <p className="text-brand-muted text-sm mb-8">Last updated: January 1, 2025</p>

          <div className="prose prose-lg max-w-none text-brand-text space-y-6">
            <p>Please read these Terms of Service carefully before using the Avenue Locksmith website or engaging our locksmith services. By accessing our website or using our services, you agree to be bound by these terms.</p>

            <h2 className="text-xl font-bold text-brand-navy">Services</h2>
            <p>Avenue Locksmith provides professional locksmith services in Brooklyn, NY and surrounding areas. Our services include residential lockouts, commercial lockouts, automotive lockouts, lock rekeying, lock replacement, key cutting, and related security services.</p>
            <p>All services are performed by licensed and insured technicians. We reserve the right to decline any service request at our discretion.</p>

            <h2 className="text-xl font-bold text-brand-navy">Pricing and Payment</h2>
            <ul className="space-y-2 pl-4">
              <li>All prices are quoted before work begins. We do not begin any service until the customer has agreed to the quoted price.</li>
              <li>Quoted prices are inclusive of labor for the service described. Additional parts (replacement locks, keys) are itemized separately.</li>
              <li>Payment is due upon completion of service. We accept cash, major credit cards, and debit cards.</li>
              <li>Prices may vary based on lock type, complexity, and required materials, which will be assessed and communicated before work begins.</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-navy">Authorization</h2>
            <p>By requesting locksmith services, you represent and warrant that:</p>
            <ul className="space-y-2 pl-4">
              <li>You are the owner of the property or vehicle, or have explicit authorization from the owner to request locksmith services</li>
              <li>You have a legitimate need for the services requested</li>
              <li>You will provide valid identification upon request by our technicians</li>
            </ul>
            <p>Avenue Locksmith reserves the right to require proof of ownership or authorization before performing any service. We will not perform services when there is reasonable cause to believe authorization is absent.</p>

            <h2 className="text-xl font-bold text-brand-navy">Limitation of Liability</h2>
            <p>Avenue Locksmith will perform services with reasonable skill and care. However, our liability for any claim arising from our services is limited to the amount paid for the specific service giving rise to the claim.</p>
            <p>We are not liable for pre-existing damage to locks, doors, vehicles, or property that we are asked to open. We will inform you of any pre-existing damage before beginning work.</p>
            <p>In no event shall Avenue Locksmith be liable for indirect, incidental, special, or consequential damages arising from our services or website use.</p>

            <h2 className="text-xl font-bold text-brand-navy">Website Use</h2>
            <p>Our website is provided for informational purposes and to facilitate service requests. You agree not to:</p>
            <ul className="space-y-2 pl-4">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of our website or systems</li>
              <li>Transmit any malicious code or interfere with website functionality</li>
              <li>Reproduce, redistribute, or republish our content without written permission</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-navy">Intellectual Property</h2>
            <p>All content on this website, including text, images, logos, and graphics, is the property of Avenue Locksmith and protected by applicable intellectual property laws. You may not reproduce or distribute content without our written permission.</p>

            <h2 className="text-xl font-bold text-brand-navy">Governing Law</h2>
            <p>These Terms of Service are governed by the laws of the State of New York. Any disputes shall be resolved in the courts of Kings County, New York.</p>

            <h2 className="text-xl font-bold text-brand-navy">Changes to Terms</h2>
            <p>We may modify these Terms of Service at any time. Continued use of our website or services after changes constitutes acceptance of the modified terms.</p>

            <h2 className="text-xl font-bold text-brand-navy">Contact</h2>
            <div className="bg-brand-bg rounded-xl p-4 border border-brand-border not-prose">
              <p className="text-brand-text text-sm"><strong>{BUSINESS.name}</strong><br />{BUSINESS.address.full}<br />Phone: <a href={BUSINESS.phoneHref} className="text-brand-navy hover:underline">{BUSINESS.phone}</a><br />Email: <a href={`mailto:${BUSINESS.email}`} className="text-brand-navy hover:underline">{BUSINESS.email}</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
