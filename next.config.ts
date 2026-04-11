import type { NextConfig } from 'next'
import { NEIGHBORHOODS } from './src/lib/neighborhoods'

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
]

/**
 * Emergency-neighborhood routes that were renamed to add the `-brooklyn-ny` suffix.
 * Each entry maps the pre-rename base slug to the current folder under (neighborhood-emergency).
 */
const EMERGENCY_NEIGHBORHOOD_BASES = [
  'boerum-hill',
  'brooklyn-heights',
  'carroll-gardens',
  'cobble-hill',
  'columbia-waterfront-district',
  'dumbo',
  'mill-basin',
  'park-slope',
  'prospect-heights',
  'vinegar-hill',
  'williamsburg',
] as const

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  async redirects() {
    // Neighborhood legacy → ZIP-suffixed slug (e.g. /locksmith-near-me/park-slope → /locksmith-near-me/park-slope-11215-11217)
    const neighborhoodRedirects = NEIGHBORHOODS.filter((n) => n.legacySlug && n.legacySlug !== n.slug).flatMap((n) => [
      {
        source: `/locksmith-near-me/${n.legacySlug}`,
        destination: `/locksmith-near-me/${n.slug}/`,
        permanent: true,
      },
      {
        source: `/locksmith-near-me/${n.legacySlug}/`,
        destination: `/locksmith-near-me/${n.slug}/`,
        permanent: true,
      },
    ])

    // Emergency-neighborhood legacy → -brooklyn-ny suffix
    const emergencyRedirects = EMERGENCY_NEIGHBORHOOD_BASES.flatMap((base) => [
      {
        source: `/emergency-locksmith-${base}`,
        destination: `/emergency-locksmith-${base}-brooklyn-ny/`,
        permanent: true,
      },
      {
        source: `/emergency-locksmith-${base}/`,
        destination: `/emergency-locksmith-${base}-brooklyn-ny/`,
        permanent: true,
      },
    ])

    return [...neighborhoodRedirects, ...emergencyRedirects]
  },

  // Redirect trailing-slash variants consistently
  trailingSlash: false,

  images: {
    // Cloudflare Pages does not support server-side image optimisation (no sharp/Node.js).
    // Images are served as-is; Cloudflare's CDN handles caching and compression.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.avenuelocks.com',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },

  // Compress responses
  compress: true,

  // Generate ETags for caching
  generateEtags: true,

  // Power-by header removal
  poweredByHeader: false,
}

export default nextConfig
