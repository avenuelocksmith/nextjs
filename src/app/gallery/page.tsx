import type { Metadata } from 'next'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema'
import { GallerySection } from '@/components/sections/GallerySection'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Our Work — Locksmith Projects Gallery | Avenue Locksmith Brooklyn',
  description: `Browse real locksmith project photos from ${BUSINESS.name} — residential lock changes, commercial installs, car key programming, deadbolts, smart locks, and more across Brooklyn, NY.`,
  path: '/gallery/',
})

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({
        title: 'Locksmith Projects Gallery — Avenue Locksmith Brooklyn',
        description: 'Photos of completed locksmith projects across Brooklyn and NYC — residential, commercial, automotive, and security upgrades.',
        url: '/gallery/',
      })} />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Gallery', url: '/gallery/' },
      ])} />

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Gallery' },
      ]} />

      {/* Hero */}
      <div className="bg-brand-navy py-14 md:py-20 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-brand-amber text-sm font-semibold uppercase tracking-wider mb-3">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Gallery</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Real jobs completed by our licensed technicians across Brooklyn and NYC.
            Filter by service type to find relevant examples.
          </p>
        </div>
      </div>

      {/* Gallery with all filters */}
      <GallerySection
        title="All Projects"
        subtitle="Click any photo to view full size. Use the filters to browse by service type."
        showFilters
        showViewAll={false}
      />

      {/* CTA */}
      <section className="py-14 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-white/80 mb-6">
            Licensed & insured. Upfront pricing before any work begins. Available 24/7.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-xl"
          >
            {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  )
}
