import type { Metadata } from 'next'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Residential Locksmith Services — Articles & Guides | Avenue Locksmith',
  description: 'Articles and guides on residential locksmith services from Avenue Locksmith — lock rekeying, apartment security, move-in checklists, and more for Brooklyn renters and homeowners.',
  path: '/category/residential-locksmith-services/',
})

const ARTICLES = [
  {
    title: 'Avenue Locks Residential Locksmith Service in New York City',
    excerpt: 'Complete overview of residential locksmith services in NYC — lockouts, rekeying, deadbolt installation, and security upgrades for Brooklyn renters and homeowners.',
    href: '/residential-locksmith-services/avenue-locks-residential-locksmith-service-in-new-york-city/',
    date: 'January 2025',
    readTime: '8 min read',
  },
]

export default function ResidentialLocksmithCategoryPage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({ title: 'Residential Locksmith Services — Articles & Guides', description: 'Articles and guides on residential locksmith services from Avenue Locksmith.', url: '/category/residential-locksmith-services/' })} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Residential Locksmith Services', url: '/category/residential-locksmith-services/' }])} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Residential Locksmith Services' }]} />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-10">
            <p className="text-brand-amber text-sm font-semibold uppercase tracking-wider mb-2">Category</p>
            <h1 className="text-4xl font-bold text-brand-navy mb-3">Residential Locksmith Services</h1>
            <p className="text-brand-muted text-lg">Guides and articles for Brooklyn renters and homeowners on apartment security, lock rekeying, move-in checklists, and residential locksmith services.</p>
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
            <h2 className="text-lg font-bold text-brand-navy mb-4">Related Services</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Residential Locksmith', href: '/services/residential-locksmith/' },
                { label: 'Lock Rekeying', href: '/services/lock-rekey/' },
                { label: 'New Tenant Lock Change', href: '/services/new-tenant-lock-change/' },
                { label: 'Deadbolt Installation', href: '/services/deadbolt-installation/' },
                { label: 'House Lockout Service', href: '/house-lockout-in-brooklyn-ny/' },
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
