'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  /** Accessible description of the compared pair */
  alt: string
  caption?: string
  /** Optional labels for each side — default "Before" / "After" */
  beforeLabel?: string
  afterLabel?: string
  /** Aspect ratio class — defaults to 4:3 */
  aspectClass?: string
}

const BLUR =
  'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='

/**
 * BeforeAfterSlider — lightweight draggable divider comparing two images.
 * No external dependencies. Supports mouse, touch, and keyboard (←/→ ±5%, Home/End snap).
 */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
  caption,
  beforeLabel = 'Before',
  afterLabel = 'After',
  aspectClass = 'aspect-[4/3]',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50) // percentage
  const containerRef = useRef<HTMLDivElement | null>(null)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, pct)))
  }, [])

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      draggingRef.current = true
      ;(e.target as Element).setPointerCapture?.(e.pointerId)
      updateFromClientX(e.clientX)
    },
    [updateFromClientX]
  )

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current) return
      updateFromClientX(e.clientX)
    },
    [updateFromClientX]
  )

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false
    ;(e.target as Element).releasePointerCapture?.(e.pointerId)
  }, [])

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setPosition((p) => Math.max(0, p - 5))
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      setPosition((p) => Math.min(100, p + 5))
    } else if (e.key === 'Home') {
      e.preventDefault()
      setPosition(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setPosition(100)
    }
  }, [])

  return (
    <figure className="w-full">
      <div
        ref={containerRef}
        className={`relative w-full ${aspectClass} overflow-hidden rounded-xl border border-brand-border bg-brand-bg select-none touch-none`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Before — full size, underneath */}
        <Image
          src={beforeSrc}
          alt={`${alt} — before`}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          placeholder="blur"
          blurDataURL={BLUR}
          priority={false}
        />

        {/* Before label */}
        <span className="absolute top-3 left-3 bg-brand-charcoal/85 text-white text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full pointer-events-none">
          {beforeLabel}
        </span>

        {/* After — clipped */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          aria-hidden="true"
        >
          <Image
            src={afterSrc}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            placeholder="blur"
            blurDataURL={BLUR}
            priority={false}
          />
        </div>

        {/* After label */}
        <span className="absolute top-3 right-3 bg-brand-amber text-brand-charcoal text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full pointer-events-none">
          {afterLabel}
        </span>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.25)] pointer-events-none"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
          aria-hidden="true"
        />

        {/* Draggable handle */}
        <div
          role="slider"
          tabIndex={0}
          aria-label={`Reveal ${afterLabel.toLowerCase()} image — drag to compare`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% ${afterLabel.toLowerCase()}`}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full border-2 border-brand-amber shadow-lg flex items-center justify-center cursor-ew-resize focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber focus-visible:ring-offset-2"
          style={{ left: `${position}%` }}
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-brand-charcoal"
            aria-hidden="true"
          >
            <path d="M9 6l-6 6 6 6" />
            <path d="M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      {caption && (
        <figcaption className="text-xs text-brand-muted mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
