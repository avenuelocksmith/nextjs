import type { Metadata } from 'next'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'General Locksmith Services — Articles & Guides | Avenue Locksmith',
  description: 'Locksmith guides and consumer advice from Avenue Locksmith — how to find a reliable locksmith in NYC, scam warnings, pricing guides, and security tips for Brooklyn residents.',
  path: '/category/general-locksmith-services/',
})

const ARTICLES = [
  {
    title: 'What to Look for in a Reliable Locksmith in NYC',
    excerpt: 'How to find a trustworthy locksmith in New York City — NYC licensing requirements, scam warning signs, what questions to ask before work begins, and how to verify credentials.',
    href: '/general-locksmith-services/what-to-look-for-in-a-reliable-locksmith-in-nyc/',
    date: 'January 2025',
    readTime: '7 min read',
  },
]

export default function GeneralLocksmithCategoryPage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({ title: 'General Locksmith Services — Articles & Guides', description: 'Locksmith guides and consumer advice from Avenue Locksmith.', url: '/category/general-locksmith-services/' })} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'General Locksmith Services', url: '/category/general-locksmith-services/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'General Locksmith Services' }]} />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-10">
            <p className="text-brand-amber text-sm font-semibold uppercase tracking-wider mb-2">Category</p>
            <h1 className="text-4xl font-bold text-brand-navy mb-3">General Locksmith Services</h1>
            <p className="text-brand-muted text-lg">Consumer guides and locksmith advice for Brooklyn and NYC residents — how to find a reliable locksmith, avoid scams, understand pricing, and protect your home.</p>
          </header>
          <div className="space-y-6">
            {ARTICLES.map((article) => (
              <article key={article.href} className="bg-brand-bg rounded-xl p-6 border border-brand-border hover:border-brand-navy transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-brand-muted text-sm">{article.date}</span>
                  <span className="text-brand-border">·</span>
                  <span className="text-brand-muted text-sm">{article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-brand-navy mb-2">
                  <Link href={article.href} className="hover:text-brand-amber transition-colors">{article.title}</Link>
                </h2>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <Link href={article.href} className="inline-flex items-center gap-1.5 text-brand-navy text-sm font-semibold hover:text-brand-amber transition-colors">
                  Read article <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-brand-border">
            <h2 className="text-lg font-bold text-brand-navy mb-4">All Locksmith Services</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Emergency Locksmith', href: '/emergency-locksmith-in-brooklyn-ny/' },
                { label: 'Residential Locksmith', href: '/services/residential-locksmith/' },
                { label: 'Commercial Locksmith', href: '/services/commercial-locksmith/' },
                { label: 'Auto Locksmith', href: '/services/auto-locksmith/' },
                { label: 'All Services', href: '/services/' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="bg-brand-navy text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-brand-amber hover:text-brand-navy transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
