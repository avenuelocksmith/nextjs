import { Star, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getReviews, GOOGLE_REVIEWS_URL } from '@/lib/reviews'
import { BUSINESS } from '@/lib/constants'

interface ReviewsStripProps {
  className?: string
  /** Filter reviews by service slug (e.g. 'emergency-locksmith') */
  service?: string
  /** Filter reviews by neighborhood slug (e.g. 'park-slope-11215-11217') */
  neighborhood?: string
  /** Max number of review cards to show when data exists. Defaults to 3. */
  maxItems?: number
  /** Optional heading above the strip */
  title?: string
}

/**
 * Contextual reviews strip — drops into service and neighborhood pages.
 *
 * Renders filtered review cards when `src/lib/reviews.ts` has data. While the
 * registry is empty, it renders a single "Read our Google reviews →" CTA
 * pointing to the live Google Business Profile (our single source of truth).
 */
export function ReviewsStrip({
  className,
  service,
  neighborhood,
  maxItems = 3,
  title,
}: ReviewsStripProps) {
  const filtered = getReviews({ service, neighborhood, maxItems })
  const hasReviews = filtered.length > 0

  return (
    <section className={cn('py-10 md:py-14 bg-white', className)}>
      <div className="container mx-auto px-4 max-w-5xl">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center">
            {title}
          </h2>
        )}

        {hasReviews ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filtered.map((r) => (
                <article
                  key={r.id}
                  className="bg-brand-bg rounded-xl p-5 border border-brand-border"
                >
                  <div className="flex items-center gap-0.5 mb-2">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-brand-amber text-brand-amber"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-brand-text text-sm leading-relaxed mb-3 italic">
                    &ldquo;{r.body}&rdquo;
                  </p>
                  <footer className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-brand-navy">{r.author}</span>
                    <span className="text-brand-muted">{r.datePublished}</span>
                  </footer>
                </article>
              ))}
            </div>
            <div className="text-center mt-6">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-navy font-semibold text-sm hover:text-brand-amber transition-colors"
              >
                Read all {BUSINESS.reviewCount}+ Google reviews
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
          </>
        ) : (
          <div className="bg-brand-bg rounded-2xl p-6 md:p-8 border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5" aria-label={`${BUSINESS.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-brand-amber text-brand-amber"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-brand-navy">
                  {BUSINESS.rating}/5 · {BUSINESS.reviewCount}+ Google reviews
                </p>
                <p className="text-brand-muted text-xs">
                  Verified reviews on our Google Business Profile — we don&apos;t re-post testimonials.
                </p>
              </div>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shrink-0"
            >
              Read our Google reviews
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
