import type { NextConfig } from 'next'

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
]

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  // Redirect trailing-slash variants consistently
  trailingSlash: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.avenuelocks.com',
      },
      {
        // Supabase Storage — replace <project-ref> with your actual project ref
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    // Serve AVIF first (50% smaller than WebP), fall back to WebP
    formats: ['image/avif', 'image/webp'],
    // Cache optimised images for 1 year (default is 60 s — too short for static gallery)
    minimumCacheTTL: 31536000,
    // Breakpoints matched to the gallery grid (2→3→4 col) and hero images
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [64, 128, 256, 384, 512],
  },

  // Compress responses
  compress: true,

  // Generate ETags for caching
  generateEtags: true,

  // Power-by header removal
  poweredByHeader: false,
}

export default nextConfig
