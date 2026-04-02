import type { Metadata } from 'next'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Locksmith Blog — Guides & Tips for Brooklyn Residents | Avenue Locksmith',
  description: 'Locksmith articles, security guides, and tips from Avenue Locksmith in Brooklyn. Learn about lock rekeying, apartment security, finding a reliable locksmith in NYC, and more.',
  path: '/residential-locksmith-services/',
})

const FEATURED_ARTICLES = [
  {
    category: 'Residential Locksmith',
    categoryHref: '/category/residential-locksmith-services/',
    title: 'Avenue Locks Residential Locksmith Service in New York City',
    excerpt: 'Complete guide to residential locksmith services in NYC — what to expect for lockouts, rekeying, deadbolt upgrades, and security improvements for Brooklyn renters and homeowners.',
    href: '/residential-locksmith-services/avenue-locks-residential-locksmith-service-in-new-york-city/',
    date: 'January 2025',
    readTime: '8 min read',
  },
  {
    category: 'General Locksmith',
    categoryHref: '/category/general-locksmith-services/',
    title: 'What to Look for in a Reliable Locksmith in NYC',
    excerpt: 'How to find a trustworthy locksmith in New York City — NYC licensing requirements, scam warning signs, what questions to ask before work begins, and how to verify credentials.',
    href: '/general-locksmith-services/what-to-look-for-in-a-reliable-locksmith-in-nyc/',
    date: 'January 2025',
    readTime: '7 min read',
  },
]

const CATEGORIES = [
  {
    title: 'Residential Locksmith Services',
    description: 'Guides for Brooklyn renters and homeowners — rekeying, lock upgrades, move-in security, apartment lockouts.',
    href: '/category/residential-locksmith-services/',
    count: 1,
  },
  {
    title: 'General Locksmith Services',
    description: 'Consumer advice — how to find a trustworthy locksmith, avoid scams, understand pricing, and protect your home.',
    href: '/category/general-locksmith-services/',
    count: 1,
  },
]

export default function BlogHubPage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({ title: 'Locksmith Blog — Guides & Tips for Brooklyn Residents', description: 'Locksmith articles, security guides, and tips from Avenue Locksmith.', url: '/residential-locksmith-services/' })} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/residential-locksmith-services/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />

      <section className="py-12 bg-brand-navy text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen size={28} className="text-brand-amber" aria-hidden="true" />
            <span className="text-brand-amber font-semibold uppercase tracking-wider text-sm">Avenue Locksmith Blog</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Locksmith Guides & Security Tips</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Practical guides on home security, lock maintenance, finding a reliable locksmith in NYC, and understanding your options as a Brooklyn renter or homeowner.</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-brand-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-lg font-bold text-brand-navy mb-4">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="bg-brand-bg rounded-xl p-5 border border-brand-border hover:border-brand-navy transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-brand-navy group-hover:text-brand-amber transition-colors text-sm">{cat.title}</h3>
                  <span className="text-xs text-brand-muted bg-brand-border rounded-full px-2 py-0.5">{cat.count} article{cat.count !== 1 ? 's' : ''}</span>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All articles */}
      <section className="py-12 bg-brand-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">All Articles</h2>
          <div className="space-y-6">
            {FEATURED_ARTICLES.map((article) => (
              <article key={article.href} className="bg-white rounded-xl p-6 border border-brand-border shadow-sm hover:border-brand-navy transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Link href={article.categoryHref} className="text-brand-amber text-xs font-semibold hover:underline">{article.category}</Link>
                  <span className="text-brand-border">·</span>
                  <span className="text-brand-muted text-xs">{article.date}</span>
                  <span className="text-brand-border">·</span>
                  <span className="text-brand-muted text-xs">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">
                  <Link href={article.href} className="hover:text-brand-amber transition-colors">{article.title}</Link>
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <Link href={article.href} className="inline-flex items-center gap-1.5 text-brand-navy text-sm font-semibold hover:text-brand-amber transition-colors">
                  Read article <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
