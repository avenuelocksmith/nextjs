import type { Metadata } from 'next'
import { Star, Phone, CheckCircle } from 'lucide-react'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getBreadcrumbSchema, getWebPageSchema, getReviewsSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { getGoogleReviews } from '@/lib/reviews'
import type { GoogleReview } from '@/lib/reviews'

export const revalidate = 3600 // ISR: freshen reviews every hour

export const metadata: Metadata = buildMetadata({
  title: 'Customer Reviews & Testimonials — Avenue Locksmith Brooklyn | 4.9★',
  description:
    'Read real customer reviews for Avenue Locksmith in Brooklyn, NY. 4.9/5 stars across 150+ Google reviews. Residential, commercial, and emergency locksmith service.',
  path: '/testimonials/',
})

// ─── Google "G" logo ─────────────────────────────────────────────────────────

function GoogleLogo({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-label="Google"
      role="img"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

// ─── Reviewer avatar ─────────────────────────────────────────────────────────

const AVATAR_COLORS = [
  'bg-blue-500', 'bg-emerald-500', 'bg-violet-500', 'bg-rose-500',
  'bg-amber-500', 'bg-cyan-500', 'bg-indigo-500', 'bg-teal-500',
]

function ReviewerAvatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase()
  const colorClass =
    AVATAR_COLORS[
      name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % AVATAR_COLORS.length
    ]
  return (
    <div
      className={`flex items-center justify-center w-10 h-10 rounded-full text-white text-sm font-bold shrink-0 ${colorClass}`}
      aria-hidden="true"
    >
      {initial}
    </div>
  )
}

// ─── Individual review card ──────────────────────────────────────────────────

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article
      className="bg-white rounded-xl p-5 border border-brand-border shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
      itemScope
      itemType="https://schema.org/Review"
    >
      {/* Stars + Google badge */}
      <div className="flex items-center justify-between mb-3">
        <div
          className="flex items-center gap-0.5"
          aria-label="5 out of 5 stars"
          itemProp="reviewRating"
          itemScope
          itemType="https://schema.org/Rating"
        >
          <meta itemProp="ratingValue" content="5" />
          <meta itemProp="bestRating" content="5" />
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} className="fill-brand-amber text-brand-amber" aria-hidden="true" />
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <GoogleLogo size={14} />
          <span className="text-xs text-brand-muted font-medium">Google</span>
        </div>
      </div>

      {/* Review text */}
      <p
        className="text-brand-text text-sm leading-relaxed italic flex-1 mb-4"
        itemProp="reviewBody"
      >
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Reviewer + time */}
      <footer className="mt-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ReviewerAvatar name={review.authorName} />
            <div>
              <p
                className="font-bold text-brand-navy text-sm leading-tight"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <span itemProp="name">{review.authorName}</span>
              </p>
              {review.relativeTime && (
                <p className="text-xs text-brand-muted mt-0.5">{review.relativeTime}</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-2 ml-[3.25rem]">
          <CheckCircle size={11} className="text-emerald-500 shrink-0" aria-hidden="true" />
          <span className="text-xs text-brand-muted">Verified Google Review</span>
        </div>
      </footer>
    </article>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function TestimonialsPage() {
  const reviews = await getGoogleReviews()

  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          title: 'Customer Reviews & Testimonials — Avenue Locksmith Brooklyn',
          description: 'Real customer reviews for Avenue Locksmith in Brooklyn, NY.',
          url: '/testimonials/',
        })}
      />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Testimonials', url: '/testimonials/' },
        ])}
      />
      {reviews.length > 0 && <JsonLd data={getReviewsSchema(reviews)} />}

      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]} />

      {/* ── Hero ── */}
      <section className="py-12 bg-brand-navy text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <GoogleLogo size={22} />
            <span className="text-white/70 text-sm font-medium tracking-wide uppercase">
              Google Reviews
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">What Our Customers Say</h1>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={24} className="fill-brand-amber text-brand-amber" aria-hidden="true" />
              ))}
            </div>
            <span className="text-2xl font-bold">{BUSINESS.rating}/5</span>
          </div>
          <p className="text-white/70 text-base">
            Based on {BUSINESS.reviewCount}+ verified Google reviews
          </p>
        </div>
      </section>

      {/* ── Trust stats bar ── */}
      <section className="py-8 bg-white border-b border-brand-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: `${BUSINESS.rating}/5`, label: 'Average Rating' },
              { value: `${BUSINESS.reviewCount}+`, label: 'Google Reviews' },
              { value: '98%', label: '5-Star Reviews' },
              { value: BUSINESS.founded, label: 'Serving Brooklyn Since' },
            ].map((stat) => (
              <div key={stat.label} className="bg-brand-bg rounded-xl p-4 border border-brand-border">
                <p className="text-2xl font-bold text-brand-navy">{stat.value}</p>
                <p className="text-brand-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews grid ── */}
      <section className="py-12 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-5xl">
          {reviews.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>

              <div className="text-center mt-8 flex flex-col items-center gap-2">
                <p className="text-brand-muted text-sm">
                  Showing {reviews.length} 5-star Google reviews
                </p>
                <a
                  href="https://www.google.com/maps/?cid=17316828625487224031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-brand-navy hover:underline font-medium"
                >
                  <GoogleLogo size={14} />
                  Read all reviews on Google Maps
                </a>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={28} className="fill-brand-amber text-brand-amber" />
                ))}
              </div>
              <p className="text-brand-charcoal font-semibold text-lg mb-2">
                {BUSINESS.rating}/5 — {BUSINESS.reviewCount}+ Verified Reviews
              </p>
              <p className="text-brand-muted text-sm mb-6">
                Our reviews are loading. In the meantime, visit us on Google Maps.
              </p>
              <a
                href="https://www.google.com/maps/?cid=17316828625487224031"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-brand-border text-brand-navy font-semibold px-6 py-3 rounded-xl hover:shadow-md transition-shadow text-sm"
              >
                <GoogleLogo size={16} />
                View Our Google Reviews
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Ready to Experience the Difference?</h2>
          <p className="text-white/80 mb-8">
            Join {BUSINESS.reviewCount}+ satisfied Brooklyn customers. Call now for fast, honest locksmith service.
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
