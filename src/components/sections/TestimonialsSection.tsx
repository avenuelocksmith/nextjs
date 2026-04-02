import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BUSINESS } from '@/lib/constants'

interface Review {
  name: string
  rating: number
  text: string
  service: string
  date?: string
}

const FEATURED_REVIEWS: Review[] = [
  {
    name: 'Claire Adams',
    rating: 5,
    text: 'Prompt, professional service that got me out of a jam. I was locked out of my apartment at 10pm and they were there in 20 minutes. Highly recommended.',
    service: 'Residential Lockout',
    date: '2024',
  },
  {
    name: 'Ricky Stewart',
    rating: 5,
    text: 'Thanks to their quick response, I was back on the road in no time. Lost my car keys near Atlantic Avenue — they came out, programmed a new key, and the price was way less than the dealership quoted.',
    service: 'Automotive Locksmith',
    date: '2024',
  },
  {
    name: 'Tamara Owens',
    rating: 5,
    text: 'Their team managed the entire security overhaul for our offices seamlessly. New access control system, rekeyed all the locks, and they were done before we opened for business. Very professional.',
    service: 'Commercial Security',
    date: '2024',
  },
  {
    name: 'Marcus Williams',
    rating: 5,
    text: 'Just moved into a new apartment in Brooklyn Heights and called to get the locks rekeyed. They explained exactly what they were doing, showed me the old pins vs. new pins, and were done in 20 minutes. Great price too.',
    service: 'Lock Rekeying',
    date: '2024',
  },
  {
    name: 'Sarah Chen',
    rating: 5,
    text: 'I had an old safe I couldn\'t get into after inheriting it from my grandmother. They opened it without any damage and changed the combination for me. Really knowledgeable and honest guys.',
    service: 'Safe Opening',
    date: '2024',
  },
  {
    name: 'David Park',
    rating: 5,
    text: 'Installed a new smart lock and deadbolt for my front door. They walked me through the whole process, helped me set up the app, and everything works perfectly. No surprises on the price — exactly what they quoted.',
    service: 'Smart Lock Installation',
    date: '2024',
  },
]

interface TestimonialsSectionProps {
  className?: string
  title?: string
  reviews?: Review[]
  maxItems?: number
}

export function TestimonialsSection({
  className,
  title = 'What Brooklyn Customers Say',
  reviews = FEATURED_REVIEWS,
  maxItems = 6,
}: TestimonialsSectionProps) {
  const displayedReviews = reviews.slice(0, maxItems)

  return (
    <section className={cn('py-14 md:py-20 bg-brand-bg', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="text-brand-amber fill-brand-amber" aria-hidden="true" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">{title}</h2>
          <p className="text-brand-muted">
            {BUSINESS.rating}/5 stars from {BUSINESS.reviewCount}+ verified reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {displayedReviews.map((review) => (
            <blockquote
              key={review.name}
              className="bg-white rounded-xl p-6 border border-brand-border shadow-sm"
            >
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-brand-amber fill-brand-amber" aria-hidden="true" />
                ))}
              </div>
              <p className="text-brand-text text-sm leading-relaxed mb-4 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="flex items-center justify-between">
                <div>
                  <cite className="font-semibold text-brand-navy not-italic text-sm">{review.name}</cite>
                  <p className="text-brand-muted text-xs">{review.service}</p>
                </div>
                {review.date && (
                  <span className="text-brand-muted text-xs">{review.date}</span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
