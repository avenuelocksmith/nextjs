'use client'

import { useState, useCallback } from 'react'
import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps'
import { NEIGHBORHOODS } from '@/lib/neighborhoods'
import { BUSINESS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface ServiceAreaMapProps {
  className?: string
  height?: string
}

const MAP_ID = 'avenue-locksmith-service-area'
const BROOKLYN_CENTER = { lat: 40.6501, lng: -73.9496 }

export function ServiceAreaMap({ className, height = '450px' }: ServiceAreaMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const handleMarkerClick = useCallback((slug: string) => {
    setSelectedId((prev) => (prev === slug ? null : slug))
  }, [])

  const selected = selectedId ? NEIGHBORHOODS.find((n) => n.slug === selectedId) : null

  return (
    <div
      className={cn('rounded-xl overflow-hidden border border-brand-border', className)}
      style={{ height }}
    >
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={BROOKLYN_CENTER}
          defaultZoom={12}
          gestureHandling="cooperative"
          disableDefaultUI={false}
          mapId={MAP_ID}
          style={{ width: '100%', height: '100%' }}
        >
          {NEIGHBORHOODS.map((n) => (
            <AdvancedMarker
              key={n.slug}
              position={{ lat: n.lat, lng: n.lng }}
              title={n.name}
              onClick={() => handleMarkerClick(n.slug)}
            />
          ))}

          {selected && (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => setSelectedId(null)}
            >
              <div style={{ padding: '4px 0', maxWidth: 220 }}>
                <p style={{ fontWeight: 700, fontSize: 14, margin: '0 0 4px' }}>
                  {selected.name}, Brooklyn
                </p>
                <p style={{ fontSize: 12, color: '#6B7280', margin: '0 0 6px' }}>
                  ZIP: {selected.zip}
                </p>
                <a
                  href={`/locksmith-near-me/${selected.slug}`}
                  style={{ fontSize: 12, color: '#2563EB', textDecoration: 'underline' }}
                >
                  View service area
                </a>
                <br />
                <a
                  href={BUSINESS.phoneHref}
                  style={{ fontSize: 13, fontWeight: 600, color: '#111827', marginTop: 6, display: 'inline-block' }}
                >
                  Call {BUSINESS.phone}
                </a>
              </div>
            </InfoWindow>
          )}
        </Map>
      </APIProvider>
    </div>
  )
}
