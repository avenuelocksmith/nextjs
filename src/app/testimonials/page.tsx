import type { Metadata } from 'next'
import { Star, Phone, CheckCircle, ExternalLink } from 'lucide-react'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import {
  getBreadcrumbSchema,
  getWebPageSchema,
  getAggregateRatingSchema,
  getReviewSchema,
} from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { REVIEWS, GOOGLE_REVIEWS_URL } from '@/lib/reviews'

export const metadata: Metadata = buildMetadata({
  title: `Customer Reviews & Testimonials — Avenue Locksmith Brooklyn | ${BUSINESS.rating}★`,
  description: `Read verified customer reviews for Avenue Locksmith in Brooklyn, NY. ${BUSINESS.rating}/5 stars across ${BUSINESS.reviewCount}+ Google reviews. Residential, commercial, and emergency locksmith service.`,
  path: '/testimonials/',
})

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
  const hasReviews = REVIEWS.length > 0

  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          title: 'Customer Reviews & Testimonials — Avenue Locksmith Brooklyn',
          description: `Verified customer reviews for Avenue Locksmith in Brooklyn, NY. ${BUSINESS.rating}/5 across ${BUSINESS.reviewCount}+ Google reviews.`,
          url: '/testimonials/',
        })}
      />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Testimonials', url: '/testimonials/' },
        ])}
      />
      <JsonLd
        data={getAggregateRatingSchema({
          value: BUSINESS.rating,
          count: BUSINESS.reviewCount,
        })}
      />
      {hasReviews &&
        REVIEWS.map((r) => (
          <JsonLd
            key={r.id}
            data={getReviewSchema({
              authorName: r.author,
              reviewBody: r.body,
              ratingValue: r.rating,
              datePublished: r.datePublished,
            })}
          />
        ))}

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
          <p className="text-white/80 text-lg mb-2">
            Based on {BUSINESS.reviewCount}+ verified Google reviews
          </p>
          <p className="text-white/60 text-sm">
            Avenue Locksmith is a NYC DCWP-licensed Brooklyn locksmith. Every review below links back to a
            real Google profile — we do not publish testimonials we cannot verify.
          </p>
        </div>
      </section>

      {/* Trust summary */}
      <section className="py-8 bg-white border-b border-brand-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: `${BUSINESS.rating}/5`, label: 'Average Rating' },
              { value: `${BUSINESS.reviewCount}+`, label: 'Verified Reviews' },
              { value: 'Google', label: 'Single Source of Truth' },
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

      {hasReviews ? (
        /* Reviews grid — only rendered when reviews.ts has real entries */
        <section className="py-12 bg-brand-bg">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {REVIEWS.map((review) => (
                <article
                  key={review.id}
                  className="bg-white rounded-xl p-5 border border-brand-border shadow-sm"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-bold text-brand-navy text-sm" itemProp="author">
                        {review.author}
                      </p>
                      <p className="text-brand-muted text-xs">
                        {review.neighborhood ? `${review.neighborhood} · ` : ''}
                        {review.datePublished}
                      </p>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  {review.service && (
                    <div className="inline-flex items-center gap-1.5 bg-brand-amber/10 text-brand-navy text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                      <CheckCircle size={11} aria-hidden="true" />
                      {review.service}
                    </div>
                  )}
                  <p className="text-brand-text text-sm leading-relaxed" itemProp="reviewBody">
                    {review.body}
                  </p>
                  {review.url && (
                    <a
                      href={review.url}
                      className="mt-3 inline-flex items-center gap-1 text-brand-navy text-xs font-semibold hover:text-brand-amber transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on {review.source === 'google' ? 'Google' : review.source} <ExternalLink size={10} />
                    </a>
                  )}
                </article>
              ))}
            </div>

            <p className="text-center text-brand-muted text-sm mt-8">
              Showing {REVIEWS.length} of {BUSINESS.reviewCount}+ reviews ·{' '}
              <a
                href={GOOGLE_REVIEWS_URL}
                className="text-brand-navy hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read all reviews on Google
              </a>
            </p>
          </div>
        </section>
      ) : (
        /* Empty-state — GMB is the live source of truth until real review data is wired in */
        <section className="py-14 bg-brand-bg">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-brand-border shadow-sm text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
                Read every review on our Google Business Profile
              </h2>
              <p className="text-brand-text leading-relaxed mb-6 max-w-xl mx-auto">
                We route customers to Google instead of re-posting screenshots. Google verifies each
                reviewer is a real person, timestamps each entry, and keeps the feedback uneditable
                — so the rating you see is the rating we actually earned.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-6 py-3 rounded-xl transition-colors shadow-md"
                >
                  Read our Google reviews
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy font-semibold px-6 py-3 rounded-xl hover:bg-brand-navy hover:text-white transition-colors"
                >
                  Leave a review
                </a>
              </div>
              <p className="text-brand-muted text-xs mt-6">
                Already a customer? Your feedback helps other Brooklyn residents find a licensed,
                non-scam locksmith.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA — call now */}
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">
            Call our Brooklyn team direct — same technician, same price, 24/7
          </h2>
          <p className="text-white/80 mb-8">
            One number, one licensed Brooklyn team. No call-center middleman, no surprise invoice.
          </p>
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
