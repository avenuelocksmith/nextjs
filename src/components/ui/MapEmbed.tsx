import { cn } from '@/lib/utils'

interface MapEmbedProps {
  query?: string
  className?: string
  height?: string
  title?: string
}

export function MapEmbed({
  query,
  className,
  height = '400px',
  title = 'Avenue Locksmith Service Area — Brooklyn, NY',
}: MapEmbedProps) {
  const searchQuery = query ?? 'Avenue Locksmith, Brooklyn, NY'
  const encodedQuery = encodeURIComponent(searchQuery)

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
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''}&q=${encodedQuery}&zoom=13`}
        title={title}
        aria-label={title}
      />
    </div>
  )
}
