import type { Metadata } from 'next'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Accessibility Statement | Avenue Locksmith',
  description: 'Accessibility statement for Avenue Locksmith. Our commitment to making our website accessible to all users, including people with disabilities.',
  path: '/accessibility-statement/',
})

export default function AccessibilityStatementPage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({ title: 'Accessibility Statement', description: 'Accessibility statement for Avenue Locksmith.', url: '/accessibility-statement/' })} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Accessibility Statement', url: '/accessibility-statement/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Accessibility Statement' }]} />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-brand-navy mb-2">Accessibility Statement</h1>
          <p className="text-brand-muted text-sm mb-8">Last updated: January 1, 2025</p>

          <div className="prose prose-lg max-w-none text-brand-text space-y-6">
            <p>Avenue Locksmith is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.</p>

            <h2 className="text-xl font-bold text-brand-navy">Our Commitment</h2>
            <p>We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible to people with disabilities and more usable for all users.</p>

            <h2 className="text-xl font-bold text-brand-navy">Measures We Take</h2>
            <p>Avenue Locksmith takes the following measures to ensure accessibility of our website:</p>
            <ul className="space-y-2 pl-4">
              <li><strong>Semantic HTML</strong> — We use proper heading hierarchy, landmark regions, and semantic HTML elements throughout our site</li>
              <li><strong>Keyboard navigation</strong> — All interactive elements are accessible via keyboard without requiring a mouse</li>
              <li><strong>Color contrast</strong> — We maintain sufficient color contrast ratios between text and background colors</li>
              <li><strong>Alternative text</strong> — Images include descriptive alternative text for screen reader users</li>
              <li><strong>ARIA labels</strong> — We use ARIA attributes where necessary to provide additional context for assistive technologies</li>
              <li><strong>Responsive design</strong> — Our site is fully functional at various zoom levels and on all device sizes</li>
              <li><strong>Focus indicators</strong> — Visible focus indicators are provided for all interactive elements</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-navy">Known Limitations</h2>
            <p>While we strive for full accessibility, some content may not yet meet all WCAG 2.1 AA criteria. We are actively working to identify and address any gaps. Known areas we are working on include:</p>
            <ul className="space-y-2 pl-4">
              <li>Ensuring all third-party embedded content (maps, forms) meets accessibility standards</li>
              <li>Reviewing and improving mobile touch target sizes</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-navy">Compatibility</h2>
            <p>Our website is designed to be compatible with the following assistive technologies:</p>
            <ul className="space-y-2 pl-4">
              <li>Screen readers: NVDA, JAWS, VoiceOver (macOS and iOS), TalkBack (Android)</li>
              <li>Browser zoom up to 200%</li>
              <li>High contrast display modes</li>
              <li>Keyboard-only navigation</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-navy">Feedback and Contact</h2>
            <p>We welcome your feedback on the accessibility of our website. If you experience any accessibility barriers or have suggestions for improvement, please contact us:</p>
            <div className="bg-brand-bg rounded-xl p-4 border border-brand-border not-prose">
              <p className="text-brand-text text-sm"><strong>{BUSINESS.name}</strong><br />{BUSINESS.address.full}<br />Phone: <a href={BUSINESS.phoneHref} className="text-brand-navy hover:underline">{BUSINESS.phone}</a><br />Email: <a href={`mailto:${BUSINESS.email}`} className="text-brand-navy hover:underline">{BUSINESS.email}</a></p>
            </div>
            <p>We aim to respond to accessibility feedback within 5 business days. If you are unsatisfied with our response, you may contact the ADA National Network for guidance.</p>

            <h2 className="text-xl font-bold text-brand-navy">Formal Complaints</h2>
            <p>If you are dissatisfied with our response to an accessibility concern, you have the right to contact the U.S. Department of Justice Civil Rights Division at (800) 514-0301 (voice) or file a complaint at ada.gov.</p>

            <h2 className="text-xl font-bold text-brand-navy">Assessment Approach</h2>
            <p>Avenue Locksmith assesses the accessibility of our website through:</p>
            <ul className="space-y-2 pl-4">
              <li>Self-evaluation using automated accessibility testing tools</li>
              <li>Manual review of key user flows using keyboard navigation and screen readers</li>
              <li>Review of feedback from users with disabilities</li>
            </ul>
            <p>This statement was created on January 1, 2025.</p>
          </div>
        </div>
      </section>
    </>
  )
}
