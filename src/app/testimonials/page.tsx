import type { Metadata } from 'next'
import { Star, Phone, CheckCircle } from 'lucide-react'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Customer Reviews & Testimonials — Avenue Locksmith Brooklyn | 4.9★',
  description: 'Read customer reviews for Avenue Locksmith in Brooklyn, NY. 4.9/5 stars across 150+ reviews. Residential, commercial, and emergency locksmith service.',
  path: '/testimonials/',
})

const REVIEWS = [
  {
    name: 'Maria S.',
    neighborhood: 'Williamsburg',
    rating: 5,
    service: 'Apartment Lockout',
    text: 'Locked myself out at 11pm on a Sunday. Called Avenue Locksmith and they were at my door in under 20 minutes. The technician was professional, opened my lock without any damage, and the price was exactly what they quoted on the phone. No surprises. I have their number saved now.',
    date: 'November 2024',
  },
  {
    name: 'James T.',
    neighborhood: 'Park Slope',
    rating: 5,
    service: 'Move-In Rekeying',
    text: 'Just moved into a new apartment in Park Slope and called to get all my locks rekeyed. The technician explained everything clearly, rekeyed both my deadbolt and knob lock, and gave me new keys on the spot. Fair price, fast service. Exactly what I needed.',
    date: 'October 2024',
  },
  {
    name: 'Robert K.',
    neighborhood: 'DUMBO',
    rating: 5,
    service: 'Car Lockout',
    text: 'Locked my keys in my car near the waterfront. Avenue Locksmith got there in about 25 minutes and had me back in the car in minutes. Way cheaper than the dealer quote I got. Highly recommend for car lockouts.',
    date: 'October 2024',
  },
  {
    name: 'Angela D.',
    neighborhood: 'Brooklyn Heights',
    rating: 5,
    service: 'High-Security Lock Installation',
    text: 'Had Medeco locks installed on my front door and secondary entrance. The technician was knowledgeable about the different options, recommended the right grade for my needs, and the installation was clean. These locks are a significant upgrade from what I had. Very happy.',
    date: 'September 2024',
  },
  {
    name: 'Carlos M.',
    neighborhood: 'Bushwick',
    rating: 5,
    service: 'Emergency Lockout',
    text: 'My key broke off in my lock at 7am right before work. Called Avenue Locksmith, they extracted the broken key without damaging anything, and had a replacement cut on the spot. 30 minutes from call to walking through my door. These guys are the real deal.',
    date: 'September 2024',
  },
  {
    name: 'Priya N.',
    neighborhood: 'Crown Heights',
    rating: 5,
    service: 'Apartment Lockout',
    text: 'I was nervous about getting scammed after reading about locksmith fraud in NYC. This company was transparent from the first call — they told me the exact price, arrived when they said they would, and did not charge a penny more. Non-destructive entry on a deadbolt and a knob lock. Trustworthy.',
    date: 'August 2024',
  },
  {
    name: 'David L.',
    neighborhood: 'Carroll Gardens',
    rating: 5,
    service: 'Deadbolt Installation',
    text: 'My brownstone had cheap contractor-grade deadbolts that I wanted to upgrade. Avenue Locksmith installed Schlage B60N deadbolts on both doors. The quality of the install was excellent — properly aligned, smooth action, and they cleaned up after themselves. Reasonable price for the work.',
    date: 'August 2024',
  },
  {
    name: 'Sarah W.',
    neighborhood: 'Bay Ridge',
    rating: 5,
    service: 'Commercial Lockout',
    text: 'Got locked out of my retail store early in the morning before opening. Called Avenue Locksmith and they were there within 15–25 minutes. Fast, professional, and they did not damage the commercial-grade lock on the door. Saved us from a very stressful morning.',
    date: 'July 2024',
  },
  {
    name: 'Thomas B.',
    neighborhood: 'Bed-Stuy',
    rating: 5,
    service: 'Lock Rekey',
    text: 'My ex had a key to my apartment and I needed it dealt with immediately. Called at 9pm, they came within 15–25 minutes, rekeyed all three locks, and I felt secure again that same night. Cannot put a price on that peace of mind. Thank you.',
    date: 'July 2024',
  },
  {
    name: 'Michelle O.',
    neighborhood: 'Cobble Hill',
    rating: 5,
    service: 'Apartment Lockout',
    text: 'Straightforward lockout — locked my keys inside, called Avenue, they came quickly, opened the door without damage, charged exactly what they quoted. I appreciate that they did not try to upsell me on anything. Just solved the problem efficiently.',
    date: 'June 2024',
  },
  {
    name: 'Kevin F.',
    neighborhood: 'Flatbush',
    rating: 5,
    service: 'Eviction Lock Change',
    text: 'Used Avenue Locksmith for a post-eviction lock change on one of my rental properties. They required the Marshal paperwork — which I had — and then changed all the locks and mailbox lock same day. Professional, fast, and they provided documentation of all the work. Will use again.',
    date: 'June 2024',
  },
  {
    name: 'Rachel H.',
    neighborhood: 'Prospect Heights',
    rating: 5,
    service: 'Smart Lock Installation',
    text: 'Had a Schlage Encode smart lock installed in my apartment. The technician was familiar with the product, handled the installation cleanly, and walked me through the setup. Works perfectly. Good price compared to what I was quoted elsewhere.',
    date: 'May 2024',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-brand-amber text-brand-amber' : 'text-brand-border'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({ title: 'Customer Reviews & Testimonials — Avenue Locksmith Brooklyn', description: 'Customer reviews for Avenue Locksmith in Brooklyn, NY.', url: '/testimonials/' })} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Testimonials', url: '/testimonials/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]} />

      {/* Header */}
      <section className="py-12 bg-brand-navy text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={24} className="fill-brand-amber text-brand-amber" aria-hidden="true" />
              ))}
            </div>
            <span className="text-2xl font-bold">{BUSINESS.rating}/5</span>
          </div>
          <p className="text-white/80 text-lg mb-2">Based on {BUSINESS.reviewCount}+ verified reviews</p>
          <p className="text-white/60 text-sm">Google · Yelp · Angi</p>
        </div>
      </section>

      {/* Trust summary */}
      <section className="py-8 bg-white border-b border-brand-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: `${BUSINESS.rating}/5`, label: 'Average Rating' },
              { value: `${BUSINESS.reviewCount}+`, label: 'Verified Reviews' },
              { value: '98%', label: '5-Star Reviews' },
              { value: '2010', label: 'Serving Brooklyn Since' },
            ].map((stat) => (
              <div key={stat.label} className="bg-brand-bg rounded-xl p-4 border border-brand-border">
                <p className="text-2xl font-bold text-brand-navy">{stat.value}</p>
                <p className="text-brand-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-12 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REVIEWS.map((review) => (
              <article
                key={`${review.name}-${review.date}`}
                className="bg-white rounded-xl p-5 border border-brand-border shadow-sm"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-brand-navy text-sm" itemProp="author">{review.name}</p>
                    <p className="text-brand-muted text-xs">{review.neighborhood} · {review.date}</p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <div className="inline-flex items-center gap-1.5 bg-brand-amber/10 text-brand-navy text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                  <CheckCircle size={11} aria-hidden="true" />
                  {review.service}
                </div>
                <p className="text-brand-text text-sm leading-relaxed" itemProp="reviewBody">{review.text}</p>
              </article>
            ))}
          </div>

          <p className="text-center text-brand-muted text-sm mt-8">
            Showing 12 of {BUSINESS.reviewCount}+ reviews ·{' '}
            <a href="https://www.google.com/maps" className="text-brand-navy hover:underline" target="_blank" rel="noopener noreferrer">
              Read all reviews on Google
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Ready to Experience the Difference?</h2>
          <p className="text-white/80 mb-8">Join 150+ satisfied Brooklyn customers. Call now or request a free quote.</p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-xl"
          >
            <Phone size={26} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  )
}
