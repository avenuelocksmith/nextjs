import Link from 'next/link'
import { ArrowRight, BookOpen, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

const BLOG_POSTS = [
  {
    title: 'Rekeying vs. Replacing Locks: Which One Do You Actually Need?',
    excerpt:
      'Most locksmiths won\'t tell you this, but rekeying is the right call for 80% of situations — and it costs a fraction of a full lock replacement. Here\'s how to know which one fits your situation.',
    category: 'Residential Security',
    readTime: '5 min read',
    href: '/residential-locksmith-services/rekeying-vs-replacing-locks/',
    tag: 'Popular',
  },
  {
    title: 'How to Spot a Locksmith Scam Before It Happens to You',
    excerpt:
      'NYC has a well-documented locksmith scam problem. Learn the red flags — like $15 advertised prices and unmarked vans — so you can avoid overcharging, unnecessary lock drilling, and bait-and-switch tactics.',
    category: 'Consumer Safety',
    readTime: '6 min read',
    href: '/residential-locksmith-services/how-to-spot-locksmith-scams/',
    tag: 'Must-Read',
  },
  {
    title: 'Deadbolt Grades Explained: What ANSI Grade 1, 2, and 3 Actually Mean',
    excerpt:
      'Your front door lock has a grade stamped on the box — but most people have no idea what it means for their security. This guide breaks it down in plain language and tells you which grade is right for a Brooklyn apartment.',
    category: 'Lock Security',
    readTime: '4 min read',
    href: '/residential-locksmith-services/deadbolt-grades-explained/',
  },
]

interface BlogResourcesSectionProps {
  className?: string
}

export function BlogResourcesSection({ className }: BlogResourcesSectionProps) {
  return (
    <section className={cn('py-14 md:py-20 bg-white', className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-brand-amber font-semibold text-sm uppercase tracking-wider mb-2">
              Locksmith Knowledge
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
              Security Guides From Our Team
            </h2>
            <p className="text-brand-muted max-w-xl">
              Practical advice written by working locksmiths — not content farms. Know your options before you call anyone.
            </p>
          </div>
          <Link
            href="/residential-locksmith-services/"
            className="inline-flex items-center gap-1.5 text-brand-navy font-semibold text-sm hover:text-brand-amber transition-colors flex-shrink-0"
          >
            View all guides <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.href}
              className="bg-brand-bg border border-brand-border rounded-xl overflow-hidden hover:border-brand-amber/50 hover:shadow-md transition-all group flex flex-col"
            >
              {/* Category bar */}
              <div className="px-5 pt-5 pb-0 flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide">
                  {post.category}
                </span>
                {post.tag && (
                  <span className="text-xs font-bold bg-brand-amber/15 text-brand-navy px-2.5 py-1 rounded-full">
                    {post.tag}
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-brand-navy text-base leading-snug mb-2 group-hover:text-brand-amber transition-colors">
                  <Link href={post.href}>{post.title}</Link>
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed flex-1 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-brand-border">
                  <span className="flex items-center gap-1.5 text-xs text-brand-muted">
                    <Clock size={12} aria-hidden="true" />
                    {post.readTime}
                  </span>
                  <Link
                    href={post.href}
                    className="flex items-center gap-1 text-brand-amber font-semibold text-xs hover:gap-2 transition-all"
                  >
                    Read <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-10 flex items-center justify-center gap-3 text-brand-muted text-sm">
          <BookOpen size={15} aria-hidden="true" />
          <span>All guides are written by licensed locksmiths with hands-on field experience.</span>
        </div>
      </div>
    </section>
  )
}
