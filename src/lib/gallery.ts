/**
 * GALLERY REGISTRY
 *
 * How to add a new project photo:
 * 1. Drop the image into /public/gallery/ (JPEG, WebP, or PNG)
 * 2. Add an entry to GALLERY_ITEMS below
 *
 * Image naming convention (no spaces, hyphens only):
 *   residential-lock-change-brooklyn-01.jpg
 *   auto-car-key-programming-02.webp
 *
 * Tags drive filtering AND cross-page display.
 * Use at least one category tag + optional detail tags.
 *
 * Category tags (used for filter buttons):
 *   residential | commercial | auto | emergency | security | eviction
 *
 * Detail tags (used for service page cross-linking):
 *   lock-change | lock-rekey | deadbolt | smart-lock | access-control
 *   car-key | lockout | mailbox | safe | cctv
 */

export interface GalleryItem {
  /** Filename inside /public/gallery/ */
  filename: string
  /** Display title shown in overlay and lightbox */
  title: string
  /** Alt text for screen readers */
  alt: string
  /** Tags for filtering and cross-linking. Include at least one category tag. */
  tags: string[]
  /**
   * Optional: service page slug this image should appear on.
   * Matches /services/[slug]/
   * e.g. 'lock-change', 'deadbolt-installation', 'auto-locksmith'
   */
  service?: string
}

export const GALLERY_CATEGORIES = [
  { label: 'All Projects', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Auto / Car Key', value: 'auto' },
  { label: 'Emergency', value: 'emergency' },
  { label: 'Security Upgrades', value: 'security' },
  { label: 'Eviction', value: 'eviction' },
] as const

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]['value']

/**
 * Add your project photos here.
 * Images must exist in /public/gallery/
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    filename: 'residential-lock-change-brooklyn-01.jpg',
    title: 'Residential Lock Change — Park Slope',
    alt: 'New Schlage deadbolt installed on Brooklyn apartment door',
    tags: ['residential', 'lock-change'],
    service: 'lock-change',
  },
  {
    filename: 'apartment-lock-rekey-williamsburg-01.jpg',
    title: 'Apartment Rekey — Williamsburg',
    alt: 'Lock rekey service for Williamsburg apartment move-in',
    tags: ['residential', 'lock-rekey'],
    service: 'lock-rekey',
  },
  {
    filename: 'deadbolt-installation-brooklyn-heights-01.jpg',
    title: 'ANSI Grade 1 Deadbolt — Brooklyn Heights',
    alt: 'ANSI Grade 1 Schlage deadbolt installed on brownstone door',
    tags: ['residential', 'deadbolt'],
    service: 'deadbolt-installation',
  },
  {
    filename: 'smart-lock-installation-park-slope-01.jpg',
    title: 'Smart Lock Installation — Park Slope',
    alt: 'August smart lock installed on Park Slope apartment',
    tags: ['residential', 'security', 'smart-lock'],
    service: 'residential-locksmith',
  },
  {
    filename: 'commercial-master-key-system-01.jpg',
    title: 'Master Key System — Office Building',
    alt: 'Commercial master key system installed for Brooklyn office building',
    tags: ['commercial'],
    service: 'commercial-locksmith',
  },
  {
    filename: 'commercial-access-control-01.jpg',
    title: 'Access Control Installation — Retail',
    alt: 'Electronic access control system installed for Brooklyn retail storefront',
    tags: ['commercial', 'security', 'access-control'],
    service: 'security-solutions',
  },
  {
    filename: 'auto-car-key-programming-01.jpg',
    title: 'Transponder Key Programming',
    alt: 'Car transponder key being programmed by Avenue Locksmith technician',
    tags: ['auto', 'car-key'],
    service: 'auto-locksmith',
  },
  {
    filename: 'auto-car-lockout-service-01.jpg',
    title: 'Car Lockout — Brooklyn',
    alt: 'Avenue Locksmith opening locked car door in Brooklyn',
    tags: ['auto', 'emergency', 'lockout'],
    service: 'auto-locksmith',
  },
  {
    filename: 'emergency-home-lockout-bedstuy-01.jpg',
    title: 'Emergency Home Lockout — Bed-Stuy',
    alt: 'Emergency residential lockout service in Bed-Stuy Brooklyn',
    tags: ['emergency', 'residential', 'lockout'],
    service: 'emergency-locksmith',
  },
  {
    filename: 'high-security-lock-medeco-01.jpg',
    title: 'High-Security Medeco Lock Install',
    alt: 'Medeco high-security deadbolt installed on Brooklyn residential door',
    tags: ['security', 'residential'],
    service: 'security-solutions',
  },
  {
    filename: 'mailbox-lock-replacement-01.jpg',
    title: 'Mailbox Lock Replacement',
    alt: 'New mailbox lock installed in Brooklyn apartment building',
    tags: ['residential'],
    service: 'mailbox-lock',
  },
  {
    filename: 'eviction-lock-change-brooklyn-01.jpg',
    title: 'Post-Eviction Lock Change',
    alt: 'Legal eviction lock change carried out with NYC Marshal paperwork',
    tags: ['eviction', 'commercial'],
    service: 'eviction-locksmith',
  },
]

/** Returns all items matching a category tag (or all items when tag is 'all') */
export function getGalleryByTag(tag: string): GalleryItem[] {
  if (tag === 'all') return GALLERY_ITEMS
  return GALLERY_ITEMS.filter((item) => item.tags.includes(tag))
}

/** Returns items for a specific service page slug */
export function getGalleryByService(slug: string): GalleryItem[] {
  return GALLERY_ITEMS.filter(
    (item) => item.service === slug || item.tags.includes(slug)
  )
}
