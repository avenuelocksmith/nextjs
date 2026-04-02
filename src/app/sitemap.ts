import type { MetadataRoute } from 'next'
import { BUSINESS } from '@/lib/constants'
import { NEIGHBORHOODS } from '@/lib/neighborhoods'

const BASE = BUSINESS.url

function url(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly'): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Neighborhood dynamic pages
  const neighborhoodPages = NEIGHBORHOODS.map((n) =>
    url(`/locksmith-near-me/${n.slug}/`, 0.75, 'monthly')
  )

  return [
    // ── Tier 1: Homepage ─────────────────────────────────────────
    url('/', 1.0, 'daily'),

    // ── Tier 2: Core service hubs ─────────────────────────────────
    url('/services/', 0.9, 'weekly'),
    url('/services/residential-locksmith/', 0.9, 'weekly'),
    url('/services/commercial-locksmith/', 0.9, 'weekly'),
    url('/services/auto-locksmith/', 0.9, 'weekly'),
    url('/services/emergency-locksmith/', 0.9, 'weekly'),
    url('/services/eviction-locksmith/', 0.9, 'weekly'),
    url('/services/security-solutions/', 0.85, 'weekly'),
    url('/services/lockout-service/', 0.85, 'weekly'),
    url('/locksmith-near-me/', 0.85, 'weekly'),
    url('/about/', 0.8, 'monthly'),
    url('/contact/', 0.8, 'weekly'),

    // ── Tier 3: City-level money pages ────────────────────────────
    url('/24-hour-locksmith-in-brooklyn-ny/', 0.9, 'weekly'),
    url('/apartment-lockout-in-brooklyn-ny/', 0.85, 'weekly'),
    url('/automotive-locksmith-brooklyn-ny/', 0.85, 'weekly'),
    url('/automotive-locksmith-in-brooklyn-ny/', 0.85, 'weekly'),
    url('/car-lockout-service-in-brooklyn-ny/', 0.85, 'weekly'),
    url('/commercial-locksmith-brooklyn-ny/', 0.85, 'weekly'),
    url('/emergency-locksmith-brooklyn-ny/', 0.9, 'weekly'),
    url('/emergency-locksmith-in-brooklyn-ny/', 0.9, 'weekly'),
    url('/eviction-locksmith-brooklyn-ny/', 0.85, 'weekly'),
    url('/house-lockout-in-brooklyn-ny/', 0.85, 'weekly'),
    url('/lockout-service-in-brooklyn-ny/', 0.85, 'weekly'),
    url('/locksmith-services-in-brooklyn-ny/', 0.85, 'weekly'),
    url('/mobile-locksmith-in-brooklyn-ny/', 0.8, 'weekly'),
    url('/residential-locksmith-brooklyn-ny/', 0.85, 'weekly'),

    // ── Tier 4: Service sub-pages ─────────────────────────────────
    url('/services/lock-rekey/', 0.8, 'monthly'),
    url('/services/lock-change/', 0.8, 'monthly'),
    url('/services/key-duplication/', 0.75, 'monthly'),
    url('/services/deadbolt-installation/', 0.8, 'monthly'),
    url('/services/safe-locksmith/', 0.75, 'monthly'),
    url('/services/mailbox-lock/', 0.7, 'monthly'),
    url('/services/new-tenant-lock-change/', 0.8, 'monthly'),
    url('/services/lockout-service/residential-lockout-service-avenue-locks/', 0.75, 'monthly'),
    url('/services/lockout-service/commercial-lockout-service-avenue-locks/', 0.75, 'monthly'),
    url('/services/lockout-service/auto-lockout-service-avenue-locks/', 0.75, 'monthly'),
    url('/services/security-solutions/high-security-locks/', 0.75, 'monthly'),
    url('/services/security-solutions/access-control-systems/', 0.75, 'monthly'),
    url('/services/security-solutions/cctv-installation/', 0.7, 'monthly'),
    url('/services/security-solutions/smart-locks/', 0.75, 'monthly'),
    url('/services/security-solutions/keyless-entry-system/', 0.7, 'monthly'),
    url('/services/security-solutions/biometric-access-system/', 0.65, 'monthly'),
    url('/services/security-solutions/reinforced-door-frame-system/', 0.7, 'monthly'),

    // ── Tier 5: Neighborhood emergency pages ─────────────────────
    url('/emergency-locksmith-boerum-hill/', 0.75, 'monthly'),
    url('/emergency-locksmith-brooklyn-heights/', 0.75, 'monthly'),
    url('/emergency-locksmith-carroll-gardens/', 0.75, 'monthly'),
    url('/emergency-locksmith-cobble-hill/', 0.75, 'monthly'),
    url('/emergency-locksmith-columbia-waterfront-district/', 0.7, 'monthly'),
    url('/emergency-locksmith-dumbo/', 0.75, 'monthly'),
    url('/emergency-locksmith-mill-basin/', 0.7, 'monthly'),
    url('/emergency-locksmith-park-slope/', 0.75, 'monthly'),
    url('/emergency-locksmith-prospect-heights/', 0.75, 'monthly'),
    url('/emergency-locksmith-vinegar-hill/', 0.7, 'monthly'),
    url('/emergency-locksmith-williamsburg/', 0.75, 'monthly'),

    // ── Tier 6: Dynamic neighborhood pages ───────────────────────
    ...neighborhoodPages,

    // ── Tier 7: Blog ─────────────────────────────────────────────
    url('/residential-locksmith-services/', 0.65, 'weekly'),
    url('/residential-locksmith-services/avenue-locks-residential-locksmith-service-in-new-york-city/', 0.6, 'monthly'),
    url('/general-locksmith-services/what-to-look-for-in-a-reliable-locksmith-in-nyc/', 0.6, 'monthly'),
    url('/category/residential-locksmith-services/', 0.55, 'weekly'),
    url('/category/general-locksmith-services/', 0.55, 'weekly'),

    // ── Tier 8: Conversion pages ──────────────────────────────────
    url('/testimonials/', 0.7, 'monthly'),
    url('/free-quote/', 0.75, 'weekly'),

    // ── Tier 9: Static pages ─────────────────────────────────────
    url('/privacy-policy/', 0.3, 'yearly'),
    url('/terms-of-service/', 0.3, 'yearly'),
    url('/accessibility-statement/', 0.3, 'yearly'),
  ]
}
