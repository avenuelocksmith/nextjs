import { cn } from '@/lib/utils'

interface MapEmbedProps {
  query?: string
  lat?: number
  lng?: number
  zoom?: number
  className?: string
  height?: string
  title?: string
}

export function MapEmbed({
  query,
  lat,
  lng,
  zoom = 14,
  className,
  height = '400px',
  title = 'Avenue Locksmith Service Area — Brooklyn, NY',
}: MapEmbedProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''

  let src: string
  if (lat !== undefined && lng !== undefined) {
    src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}&zoom=${zoom}`
  } else {
    const searchQuery = query ?? 'Avenue Locksmith, Brooklyn, NY'
    const encodedQuery = encodeURIComponent(searchQuery)
    src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedQuery}&zoom=${zoom}`
  }

  return (
    <div
      className={cn('rounded-xl overflow-hidden border border-brand-border', className)}
      style={{ height }}
    >
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
        title={title}
        aria-label={title}
      />
    </div>
  )
}
