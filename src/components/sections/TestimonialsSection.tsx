import { Star, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BUSINESS } from '@/lib/constants'
import { getReviews, GOOGLE_REVIEWS_URL, type Review } from '@/lib/reviews'

interface TestimonialsSectionProps {
  className?: string
  title?: string
  /** Optional override — if omitted, component reads from src/lib/reviews.ts */
  reviews?: Review[]
  maxItems?: number
  /** Optional contextual filter passed through to getReviews */
  service?: string
  /** Optional contextual filter passed through to getReviews */
  neighborhood?: string
}

export function TestimonialsSection({
  className,
  title = 'What Brooklyn Customers Say',
  reviews,
  maxItems = 6,
  service,
  neighborhood,
}: TestimonialsSectionProps) {
  const source = reviews ?? getReviews({ service, neighborhood, maxItems })
  const displayedReviews = source.slice(0, maxItems)
  const hasReviews = displayedReviews.length > 0

  return (
    <section className={cn('py-14 md:py-20 bg-brand-bg-alt', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="text-brand-amber fill-brand-amber" aria-hidden="true" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-2">{title}</h2>
          <p className="text-brand-muted">
            {BUSINESS.rating}/5 stars from {BUSINESS.reviewCount}+ verified Google reviews
          </p>
        </div>

        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {displayedReviews.map((review) => (
              <blockquote
                key={review.id}
                className="bg-white rounded-xl p-6 border border-brand-border shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-brand-amber fill-brand-amber" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-brand-text text-sm leading-relaxed mb-4 italic">
                  &ldquo;{review.body}&rdquo;
                </p>
                <footer className="flex items-center justify-between">
                  <div>
                    <cite className="font-semibold text-brand-charcoal not-italic text-sm">
                      {review.author}
                    </cite>
                    {review.service && (
                      <div className="mt-1">
                        <span className="inline-block bg-brand-amber/10 text-brand-orange text-xs px-2 py-0.5 rounded-full font-medium">
                          {review.service}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="text-brand-muted text-xs">{review.datePublished}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        ) : (
          /* Empty state — GMB widget is the single source of truth until reviews.ts is populated */
          <div className="mt-10 max-w-2xl mx-auto bg-white rounded-2xl p-8 border border-brand-border shadow-sm text-center">
            <p className="text-brand-text leading-relaxed mb-5">
              We publish every customer review on our Google Business Profile instead of hand-picking
              screenshots — so the rating you see is the rating we actually earned, verified by Google.
            </p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-amber hover:bg-brand-orange text-brand-charcoal font-bold px-6 py-3 rounded-xl transition-colors shadow-md"
            >
              Read our Google reviews
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
