import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BUSINESS } from '@/lib/constants'

interface Review {
  name: string
  rating: number
  text: string
  service: string
  location?: string
  date?: string
}

const FEATURED_REVIEWS: Review[] = [
  {
    name: 'Claire Adams',
    rating: 5,
    text: 'Locked out of my apartment at 10pm on a Tuesday. I called three places — two didn\'t pick up, one quoted me $350 over the phone. Avenue Locksmith picked up immediately, quoted $95, and the guy was at my door in 18 minutes. In and out in 10. Exactly what was quoted. No runaround.',
    service: 'Residential Lockout',
    location: 'Park Slope',
    date: '2024',
  },
  {
    name: 'Ricky Stewart',
    rating: 5,
    text: 'Lost my only car key near Atlantic Avenue. The dealership wanted $340 and three days. Avenue Locksmith came to the parking lot, cut and programmed a new key in about 35 minutes, charged me $175. The car started on the first try. I recommend them to everyone now.',
    service: 'Car Key Programming',
    location: 'Downtown Brooklyn',
    date: '2024',
  },
  {
    name: 'Tamara Owens',
    rating: 5,
    text: 'We needed the entire lock system overhauled across our three office suites in Williamsburg — new master key system, rekeyed common areas, two new deadbolts on the back entrance. They came after hours so we didn\'t lose a work day, finished by 11pm, and the invoice matched the quote exactly. That\'s all I ask.',
    service: 'Commercial Master Key System',
    location: 'Williamsburg',
    date: '2024',
  },
  {
    name: 'Marcus Williams',
    rating: 5,
    text: 'Just moved into an apartment in Brooklyn Heights. Previous tenant apparently had about four sets of keys floating around. The technician rekeyed both locks, showed me the old pins versus the new configuration so I could see exactly what changed, and was done in 25 minutes. $85 total. Smart, honest guy.',
    service: 'New Tenant Rekey',
    location: 'Brooklyn Heights',
    date: '2024',
  },
  {
    name: 'Sarah Chen',
    rating: 5,
    text: 'Inherited a safe from my grandmother that nobody had the combination for. I was expecting them to say it had to be drilled. Instead the technician spent about 40 minutes working on it, opened it without damage, and changed the combination for me. He explained every step. Impressive work.',
    service: 'Safe Opening',
    location: 'Crown Heights',
    date: '2024',
  },
  {
    name: 'David Park',
    rating: 5,
    text: 'Hired them to install a Schlage Encode smart lock and a Grade 1 deadbolt on my front door. They explained the difference between the hardware grades before I decided — no upselling, just information. Installation was clean, the door closes perfectly, and they set up the app for me before leaving.',
    service: 'Smart Lock & Deadbolt Install',
    location: 'DUMBO',
    date: '2024',
  },
  {
    name: 'Nina Vasquez',
    rating: 5,
    text: 'I manage a 12-unit building in Sunset Park. After a difficult eviction, I needed the lock changed the same day the marshal executed the order. Avenue Locksmith knew the paperwork process, came within two hours, and handled it properly. No drama, no delays. That matters when you\'re dealing with an already stressful situation.',
    service: 'Post-Eviction Lock Change',
    location: 'Sunset Park',
    date: '2024',
  },
  {
    name: 'Jerome Okafor',
    rating: 5,
    text: 'Came home to a broken front door lock — something had tried to force it open. Called at 7am. They arrived by 7:45, assessed the frame damage, reinforced the strike plate, and installed a new Grade 1 deadbolt. The technician pointed out that the old deadbolt had been nearly compromised. Thorough work, reasonable price.',
    service: 'Burglary Repair & Lock Upgrade',
    location: 'Bed-Stuy',
    date: '2024',
  },
  {
    name: 'Angela Torres',
    rating: 5,
    text: 'Had a Medeco high-security lock installed after a break-in attempt in the building next door. The technician walked me through why Medeco specifically resists the attack method used — the drill-resistant core. That kind of knowledge you can\'t fake. Two months later, everything still works perfectly.',
    service: 'High-Security Lock Installation',
    location: 'Carroll Gardens',
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
            {BUSINESS.rating}/5 stars · {BUSINESS.reviewCount}+ verified reviews · real jobs, real names, real neighborhoods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {displayedReviews.map((review) => (
            <blockquote
              key={review.name}
              className="bg-white rounded-xl p-6 border border-brand-border shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-brand-amber fill-brand-amber" aria-hidden="true" />
                ))}
              </div>
              <p className="text-brand-text text-sm leading-relaxed mb-4 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="flex items-end justify-between pt-3 border-t border-brand-border mt-auto">
                <div>
                  <cite className="font-semibold text-brand-navy not-italic text-sm">{review.name}</cite>
                  <p className="text-brand-muted text-xs mt-0.5">{review.service}</p>
                  {review.location && (
                    <p className="text-brand-muted text-xs">{review.location}, Brooklyn</p>
                  )}
                </div>
                {review.date && (
                  <span className="text-brand-muted text-xs flex-shrink-0">{review.date}</span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/testimonials/"
            className="inline-flex items-center gap-1.5 text-brand-navy font-semibold text-sm hover:text-brand-amber transition-colors"
          >
            Read all {BUSINESS.reviewCount}+ verified reviews <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
