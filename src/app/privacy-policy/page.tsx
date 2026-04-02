import type { Metadata } from 'next'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy | Avenue Locksmith',
  description: 'Privacy policy for Avenue Locksmith. How we collect, use, and protect your personal information when you use our website or locksmith services.',
  path: '/privacy-policy/',
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({ title: 'Privacy Policy', description: 'Privacy policy for Avenue Locksmith.', url: '/privacy-policy/' })} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy-policy/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-brand-navy mb-2">Privacy Policy</h1>
          <p className="text-brand-muted text-sm mb-8">Last updated: January 1, 2025</p>

          <div className="prose prose-lg max-w-none text-brand-text space-y-6">
            <p>Avenue Locksmith ("{BUSINESS.name}") operates {BUSINESS.url} and provides locksmith services in Brooklyn, NY. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us for services.</p>

            <h2 className="text-xl font-bold text-brand-navy">Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul className="space-y-2 pl-4">
              <li><strong>Contact information</strong> — name, phone number, and email address when you contact us via phone, our contact form, or other means</li>
              <li><strong>Service information</strong> — address and service details when you request locksmith services</li>
              <li><strong>Usage data</strong> — pages visited, time on site, and referring pages collected automatically via analytics software</li>
              <li><strong>Device information</strong> — browser type, operating system, and IP address collected automatically</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-navy">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="space-y-2 pl-4">
              <li>Provide, operate, and maintain our locksmith services</li>
              <li>Respond to your inquiries and fulfill service requests</li>
              <li>Send confirmations, receipts, and service-related communications</li>
              <li>Improve our website and services</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-navy">Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:</p>
            <ul className="space-y-2 pl-4">
              <li>With service providers who assist in our operations (e.g., website hosting, analytics) under confidentiality agreements</li>
              <li>When required by law or to protect the rights, property, or safety of Avenue Locksmith, our customers, or others</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-navy">Cookies and Analytics</h2>
            <p>Our website may use cookies and similar tracking technologies to improve your browsing experience and collect usage data. We use Google Analytics to understand how visitors interact with our site. You can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.</p>

            <h2 className="text-xl font-bold text-brand-navy">Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-xl font-bold text-brand-navy">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="space-y-2 pl-4">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information (subject to legal obligations)</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-navy">Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>

            <h2 className="text-xl font-bold text-brand-navy">Children&apos;s Privacy</h2>
            <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn we have collected such information, we will delete it promptly.</p>

            <h2 className="text-xl font-bold text-brand-navy">Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. Your continued use of our website after changes constitutes acceptance of the updated policy.</p>

            <h2 className="text-xl font-bold text-brand-navy">Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
            <div className="bg-brand-bg rounded-xl p-4 border border-brand-border not-prose">
              <p className="text-brand-text text-sm"><strong>{BUSINESS.name}</strong><br />{BUSINESS.address.full}<br />Phone: <a href={BUSINESS.phoneHref} className="text-brand-navy hover:underline">{BUSINESS.phone}</a><br />Email: <a href={`mailto:${BUSINESS.email}`} className="text-brand-navy hover:underline">{BUSINESS.email}</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
