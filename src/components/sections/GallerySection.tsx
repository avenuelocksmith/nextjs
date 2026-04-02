'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, ChevronLeft, ChevronRight, ArrowRight, ImageOff } from 'lucide-react'
import {
  GALLERY_ITEMS,
  GALLERY_CATEGORIES,
  getGalleryByService,
  type GalleryItem,
  type GalleryCategory,
} from '@/lib/gallery'

// Tiny 1×1 gray pixel — shown instantly while the real image loads (avoids layout shift)
const BLUR_PLACEHOLDER =
  'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='

interface GallerySectionProps {
  /** Limit how many items are shown (useful for homepage preview) */
  maxItems?: number
  /** When set, filters to items relevant to this service slug */
  serviceSlug?: string
  /** Show filter tabs (default: true, hidden when serviceSlug is set) */
  showFilters?: boolean
  /** Section heading */
  title?: string
  subtitle?: string
  /** Show "View All" link at bottom */
  showViewAll?: boolean
}

function GalleryCard({
  item,
  onClick,
  priority = false,
}: {
  item: GalleryItem
  onClick: () => void
  /** Pass true for the first ~4 cards visible above the fold */
  priority?: boolean
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <button
      onClick={onClick}
      className="group relative aspect-square w-full overflow-hidden rounded-xl bg-brand-bg border border-brand-border focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
      aria-label={`View project: ${item.title}`}
    >
      {imgError ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-brand-muted">
          <ImageOff size={28} aria-hidden="true" />
          <span className="text-xs">{item.title}</span>
        </div>
      ) : (
        <Image
          src={`/gallery/${item.filename}`}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) calc(50vw - 1rem), (max-width: 1024px) calc(33vw - 1rem), calc(25vw - 1rem)"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          quality={85}
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          onError={() => setImgError(true)}
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
        <p className="text-white font-bold text-sm leading-snug mb-2">{item.title}</p>
        <div className="flex flex-wrap gap-1">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold uppercase tracking-wide bg-brand-amber/90 text-brand-navy px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}

function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const item = items[index]
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    setImgError(false)
  }, [index])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Panel */}
      <div
        className="relative w-full max-w-3xl bg-brand-navy rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
        >
          <X size={18} aria-hidden="true" />
        </button>

        {/* Image */}
        <div className="relative aspect-video w-full bg-black">
          {imgError ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white/50">
              <ImageOff size={36} />
              <span className="text-sm">Image not yet available</span>
            </div>
          ) : (
            <Image
              src={`/gallery/${item.filename}`}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
              quality={85}
              loading="lazy"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              onError={() => setImgError(true)}
            />
          )}
        </div>

        {/* Info */}
        <div className="px-6 py-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-white font-bold text-base">{item.title}</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold uppercase tracking-wide bg-brand-amber/20 text-brand-amber px-2.5 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {item.service && (
            <Link
              href={`/services/${item.service}/`}
              className="shrink-0 text-xs font-semibold text-brand-amber hover:underline flex items-center gap-1 mt-1"
              onClick={onClose}
            >
              View Service <ArrowRight size={12} />
            </Link>
          )}
        </div>

        {/* Counter */}
        <p className="text-white/40 text-xs text-center pb-4">
          {index + 1} / {items.length}
        </p>
      </div>

      {/* Prev / Next */}
      {items.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/60 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/60 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </>
      )}
    </div>
  )
}

export function GallerySection({
  maxItems,
  serviceSlug,
  showFilters = true,
  title = 'Our Recent Projects',
  subtitle = 'A selection of locksmith jobs completed across Brooklyn and NYC.',
  showViewAll = false,
}: GallerySectionProps) {
  const [activeTag, setActiveTag] = useState<GalleryCategory>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const baseItems = serviceSlug
    ? getGalleryByService(serviceSlug)
    : GALLERY_ITEMS

  const filtered =
    serviceSlug || activeTag === 'all'
      ? baseItems
      : baseItems.filter((item) => item.tags.includes(activeTag))

  const displayed = maxItems ? filtered.slice(0, maxItems) : filtered

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const goPrev = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + displayed.length) % displayed.length : null)),
    [displayed.length]
  )
  const goNext = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % displayed.length : null)),
    [displayed.length]
  )

  const displayFilters = showFilters && !serviceSlug

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">{title}</h2>
          <p className="text-brand-muted max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Filter Pills */}
        {displayFilters && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveTag(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  activeTag === cat.value
                    ? 'bg-brand-navy text-white border-brand-navy'
                    : 'bg-white text-brand-navy border-brand-border hover:border-brand-navy hover:bg-brand-navy/5'
                }`}
              >
                {cat.label}
                {cat.value !== 'all' && (
                  <span className="ml-1.5 opacity-60 text-xs">
                    ({GALLERY_ITEMS.filter((i) => i.tags.includes(cat.value)).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        {displayed.length === 0 ? (
          <p className="text-center text-brand-muted py-16">No photos in this category yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {displayed.map((item, idx) => (
              <GalleryCard
                key={item.filename}
                item={item}
                onClick={() => openLightbox(idx)}
                priority={idx < 4}
              />
            ))}
          </div>
        )}

        {/* View All link */}
        {showViewAll && filtered.length > (maxItems ?? 0) && (
          <div className="text-center mt-10">
            <Link
              href="/gallery/"
              className="inline-flex items-center gap-2 bg-brand-navy text-white font-bold px-8 py-3.5 rounded-xl hover:bg-brand-amber hover:text-brand-navy transition-colors"
            >
              View All Projects <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={displayed}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  )
}
