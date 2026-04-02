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
