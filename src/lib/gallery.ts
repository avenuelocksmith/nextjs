/**
 * GALLERY REGISTRY
 *
 * How to add a new project photo:
 * 1. Drop the image into /public/gallery/{category}/ (JPEG, WebP, or PNG)
 * 2. Add an entry to GALLERY_ITEMS below
 *
 * Image naming convention (no spaces, hyphens only):
 *   deadbolt-install-park-slope-11215-11217-01.webp
 *   car-key-programming-bay-ridge-11209-02.webp
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
 *
 * NOTE ON IMAGES: The current set of images in /public/gallery/ are
 * auto-generated solid-color placeholders — they exist so that the
 * contextual gallery, schema, and layout work can be validated before
 * real photos are provided. Replace them one-for-one with real
 * locksmith job photos (same filename, same dimensions).
 */

export type GalleryCategoryValue =
  | 'residential'
  | 'commercial'
  | 'auto'
  | 'emergency'
  | 'security'
  | 'eviction'

export interface GalleryItem {
  /** Filename inside /public/gallery/ — may include category subdirectory */
  filename: string
  /** Display title shown in overlay and lightbox */
  title: string
  /** Alt text for screen readers */
  alt: string
  /** Primary category — drives filter pills and contextual fetching */
  category: GalleryCategoryValue
  /** Secondary tags — optional detail tags for cross-linking */
  tags: string[]
  /** Neighborhood slug (from src/lib/neighborhoods.ts) this image is associated with */
  neighborhood?: string
  /** Contextual sort weight; higher is shown first */
  priority: number
  /** ISO date (YYYY-MM-DD) the job was completed — used for sort tiebreaker */
  dateCompleted: string
  /** Service page slug to cross-link from the lightbox */
  service?: string
  /** Groups a before/after pair. Both entries share the same projectId. */
  projectId?: string
  /** Marks which side of a before/after pair this image is. */
  beforeAfter?: 'before' | 'after'
  /** Intrinsic width/height in pixels — required for ImageObject schema */
  width: number
  height: number
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
 * Gallery registry. Every file listed here must exist in /public/gallery/.
 *
 * Placeholder image set (auto-generated) — swap filenames in place when real
 * photos are provided. Before/after projects share a projectId.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  // ── Residential ──────────────────────────────────────────────
  {
    filename: 'residential/deadbolt-install-park-slope-11215-11217-01.webp',
    title: 'Grade 1 Deadbolt Install — Park Slope',
    alt: 'New ANSI Grade 1 deadbolt installed on a Park Slope brownstone door',
    category: 'residential',
    tags: ['deadbolt', 'lock-change'],
    neighborhood: 'park-slope-11215-11217',
    priority: 95,
    dateCompleted: '2025-09-12',
    service: 'deadbolt-installation',
    width: 1200,
    height: 1200,
  },
  {
    filename: 'residential/lock-rekey-williamsburg-11211-11249-01.webp',
    title: 'Move-in Rekey — Williamsburg',
    alt: 'Schlage cylinder rekey completed for a Williamsburg apartment move-in',
    category: 'residential',
    tags: ['lock-rekey'],
    neighborhood: 'williamsburg-11211-11249',
    priority: 90,
    dateCompleted: '2025-09-22',
    service: 'lock-rekey',
    width: 1200,
    height: 1200,
  },
  {
    filename: 'residential/smart-lock-retrofit-brooklyn-heights-11201-01.webp',
    title: 'August Smart Lock Retrofit — Brooklyn Heights',
    alt: 'August smart lock retrofit over an existing deadbolt on a Brooklyn Heights apartment door',
    category: 'residential',
    tags: ['smart-lock', 'security'],
    neighborhood: 'brooklyn-heights-11201',
    priority: 88,
    dateCompleted: '2025-08-30',
    service: 'residential-locksmith',
    width: 1200,
    height: 1200,
  },
  {
    filename: 'residential/mortise-lock-repair-cobble-hill-11201-01.webp',
    title: 'Mortise Lock Repair — Cobble Hill',
    alt: 'Antique mortise lock repair on a Cobble Hill brownstone front door',
    category: 'residential',
    tags: ['lock-change', 'deadbolt'],
    neighborhood: 'cobble-hill-11201',
    priority: 82,
    dateCompleted: '2025-09-05',
    service: 'lock-change',
    width: 1200,
    height: 1200,
  },
  {
    filename: 'residential/mailbox-lock-bay-ridge-11209-01.webp',
    title: 'Apartment Mailbox Lock — Bay Ridge',
    alt: 'Replacement apartment mailbox lock installed in a Bay Ridge building',
    category: 'residential',
    tags: ['mailbox'],
    neighborhood: 'bay-ridge-11209',
    priority: 70,
    dateCompleted: '2025-07-18',
    service: 'mailbox-lock',
    width: 1200,
    height: 1200,
  },

  // ── Commercial ───────────────────────────────────────────────
  {
    filename: 'commercial/master-key-system-dumbo-11201-01.webp',
    title: 'Master Key System — DUMBO Office',
    alt: 'Commercial master key system pinned for a DUMBO office building',
    category: 'commercial',
    tags: ['lock-change'],
    neighborhood: 'dumbo-11201',
    priority: 92,
    dateCompleted: '2025-09-18',
    service: 'commercial-locksmith',
    width: 1200,
    height: 1200,
  },
  {
    filename: 'commercial/access-control-sunset-park-11220-11232-01.webp',
    title: 'Access Control Panel — Sunset Park Retail',
    alt: 'Keypad access control panel installed at a Sunset Park retail storefront',
    category: 'commercial',
    tags: ['access-control', 'security'],
    neighborhood: 'sunset-park-11220-11232',
    priority: 85,
    dateCompleted: '2025-08-22',
    service: 'security-solutions',
    width: 1200,
    height: 1200,
  },
  {
    filename: 'commercial/storefront-deadbolt-bed-stuy-11216-11221-11233-01.webp',
    title: 'Storefront Deadbolt — Bed-Stuy',
    alt: 'Commercial storefront deadbolt replacement on a Bedford-Stuyvesant retail door',
    category: 'commercial',
    tags: ['deadbolt', 'lock-change'],
    neighborhood: 'bedford-stuyvesant-11216-11221-11233',
    priority: 78,
    dateCompleted: '2025-07-10',
    service: 'commercial-locksmith',
    width: 1200,
    height: 1200,
  },

  // ── Auto ─────────────────────────────────────────────────────
  {
    filename: 'auto/transponder-key-program-flatbush-11226-11210-01.webp',
    title: 'Transponder Key Program — Flatbush',
    alt: 'Avenue Locksmith technician programming a transponder car key in Flatbush',
    category: 'auto',
    tags: ['car-key'],
    neighborhood: 'flatbush-11226-11210',
    priority: 85,
    dateCompleted: '2025-09-27',
    service: 'auto-locksmith',
    width: 1200,
    height: 1200,
  },
  {
    filename: 'auto/car-lockout-crown-heights-11213-11216-11225-11233-01.webp',
    title: 'Car Lockout — Crown Heights',
    alt: 'Avenue Locksmith opening a locked car door in Crown Heights',
    category: 'auto',
    tags: ['lockout', 'car-key'],
    neighborhood: 'crown-heights-11213-11216-11225-11233',
    priority: 80,
    dateCompleted: '2025-09-03',
    service: 'auto-locksmith',
    width: 1200,
    height: 1200,
  },
  {
    filename: 'auto/ignition-cylinder-bushwick-11221-01.webp',
    title: 'Ignition Cylinder Replacement — Bushwick',
    alt: 'Ignition cylinder replacement on a vehicle parked in Bushwick',
    category: 'auto',
    tags: ['car-key'],
    neighborhood: 'bushwick-11221',
    priority: 72,
    dateCompleted: '2025-08-14',
    service: 'auto-locksmith',
    width: 1200,
    height: 1200,
  },

  // ── Emergency ────────────────────────────────────────────────
  {
    filename: 'emergency/home-lockout-prospect-heights-11238-01.webp',
    title: 'Apartment Lockout — Prospect Heights',
    alt: 'Emergency apartment lockout opened without damage in Prospect Heights',
    category: 'emergency',
    tags: ['lockout'],
    neighborhood: 'prospect-heights-11238',
    priority: 92,
    dateCompleted: '2025-10-02',
    service: 'emergency-locksmith',
    width: 1200,
    height: 1200,
  },
  {
    filename: 'emergency/broken-key-extraction-carroll-gardens-11231-01.webp',
    title: 'Broken Key Extraction — Carroll Gardens',
    alt: 'Broken key extracted from a Carroll Gardens apartment deadbolt',
    category: 'emergency',
    tags: ['lockout'],
    neighborhood: 'carroll-gardens-11231',
    priority: 86,
    dateCompleted: '2025-09-10',
    service: 'emergency-locksmith',
    width: 1200,
    height: 1200,
  },

  // ── Before / after pair: kicked-in-door repair in Bed-Stuy ──
  {
    filename: 'emergency/kicked-door-frame-repair-bed-stuy-before-01.webp',
    title: 'Kicked-in Door Frame — Before',
    alt: 'Splintered door frame after an attempted break-in at a Bed-Stuy apartment',
    category: 'emergency',
    tags: ['lockout', 'deadbolt'],
    neighborhood: 'bedford-stuyvesant-11216-11221-11233',
    priority: 75,
    dateCompleted: '2025-08-28',
    service: 'emergency-locksmith',
    projectId: 'bed-stuy-kicked-door-frame-2025-08',
    beforeAfter: 'before',
    width: 1200,
    height: 1200,
  },
  {
    filename: 'emergency/kicked-door-frame-repair-bed-stuy-after-01.webp',
    title: 'Kicked-in Door Frame — After',
    alt: 'Reinforced strike plate and new Grade 1 deadbolt after repairing the Bed-Stuy door frame',
    category: 'emergency',
    tags: ['lockout', 'deadbolt', 'security'],
    neighborhood: 'bedford-stuyvesant-11216-11221-11233',
    priority: 75,
    dateCompleted: '2025-08-28',
    service: 'emergency-locksmith',
    projectId: 'bed-stuy-kicked-door-frame-2025-08',
    beforeAfter: 'after',
    width: 1200,
    height: 1200,
  },

  // ── Security ─────────────────────────────────────────────────
  {
    filename: 'security/high-security-medeco-windsor-terrace-11215-01.webp',
    title: 'High-Security Medeco — Windsor Terrace',
    alt: 'Medeco high-security deadbolt installed on a Windsor Terrace apartment door',
    category: 'security',
    tags: ['deadbolt', 'security'],
    neighborhood: 'windsor-terrace-11215',
    priority: 88,
    dateCompleted: '2025-09-08',
    service: 'security-solutions',
    width: 1200,
    height: 1200,
  },
  {
    filename: 'security/cctv-install-greenpoint-11222-01.webp',
    title: 'CCTV Camera Install — Greenpoint',
    alt: 'IP camera installed over a Greenpoint business entrance',
    category: 'security',
    tags: ['cctv', 'security'],
    neighborhood: 'greenpoint-11222',
    priority: 80,
    dateCompleted: '2025-08-02',
    service: 'security-solutions',
    width: 1200,
    height: 1200,
  },

  // ── Before / after pair: Grade 1 deadbolt upgrade in Park Slope ──
  {
    filename: 'security/grade-1-deadbolt-upgrade-park-slope-before-01.webp',
    title: 'Grade 3 Entry Knob — Before',
    alt: 'Old Grade 3 knob-only entry lock on a Park Slope apartment door before upgrade',
    category: 'security',
    tags: ['deadbolt', 'lock-change'],
    neighborhood: 'park-slope-11215-11217',
    priority: 83,
    dateCompleted: '2025-09-12',
    service: 'security-solutions',
    projectId: 'park-slope-grade-1-upgrade-2025-09',
    beforeAfter: 'before',
    width: 1200,
    height: 1200,
  },
  {
    filename: 'security/grade-1-deadbolt-upgrade-park-slope-after-01.webp',
    title: 'Grade 1 Deadbolt — After',
    alt: 'New ANSI Grade 1 deadbolt installed above the existing knob on a Park Slope apartment door',
    category: 'security',
    tags: ['deadbolt', 'security'],
    neighborhood: 'park-slope-11215-11217',
    priority: 83,
    dateCompleted: '2025-09-12',
    service: 'security-solutions',
    projectId: 'park-slope-grade-1-upgrade-2025-09',
    beforeAfter: 'after',
    width: 1200,
    height: 1200,
  },

  // ── Eviction ─────────────────────────────────────────────────
  {
    filename: 'eviction/post-eviction-lock-change-east-new-york-11207-01.webp',
    title: 'Post-Eviction Lock Change — East New York',
    alt: 'NYC Marshal post-eviction lock change performed in East New York',
    category: 'eviction',
    tags: ['lock-change'],
    neighborhood: 'east-new-york-11207-11208',
    priority: 70,
    dateCompleted: '2025-07-24',
    service: 'eviction-locksmith',
    width: 1200,
    height: 1200,
  },
  {
    filename: 'eviction/marshal-warrant-lock-change-brownsville-11212-01.webp',
    title: 'Marshal Warrant Lock Change — Brownsville',
    alt: 'Marshal warrant lock change with property recovery paperwork in Brownsville',
    category: 'eviction',
    tags: ['lock-change'],
    neighborhood: 'brownsville-11212',
    priority: 65,
    dateCompleted: '2025-06-30',
    service: 'eviction-locksmith',
    width: 1200,
    height: 1200,
  },

  // ── Real job photos ─────────────────────────────────────────
  {
    filename: 'commercial/lever-trim-medeco-cylinder-brooklyn-01.webp',
    title: 'Commercial Lever Trim with Medeco Cylinder',
    alt: 'Satin nickel commercial lever trim with brass Medeco high-security cylinder installed on a Brooklyn office door',
    category: 'commercial',
    tags: ['lock-change', 'security'],
    priority: 93,
    dateCompleted: '2026-04-10',
    service: 'commercial-locksmith',
    width: 960,
    height: 1280,
  },
  {
    filename: 'residential/brass-mortise-lock-rekey-brooklyn-01.webp',
    title: 'Brass Mortise Lock Rekey — Brooklyn',
    alt: 'Brass knob mortise lock with key inserted after rekeying service on a Brooklyn apartment door',
    category: 'residential',
    tags: ['lock-rekey', 'lock-change'],
    priority: 86,
    dateCompleted: '2026-04-08',
    service: 'lock-rekey',
    width: 960,
    height: 1280,
  },
  {
    filename: 'auto/hyundai-kona-key-fob-programming-brooklyn-01.webp',
    title: 'Hyundai Kona Key Fob Programming',
    alt: 'Avenue Locksmith technician holding a programmed Hyundai Kona smart key fob next to the vehicle',
    category: 'auto',
    tags: ['car-key'],
    priority: 91,
    dateCompleted: '2026-04-12',
    service: 'auto-locksmith',
    width: 960,
    height: 1280,
  },
  {
    filename: 'residential/brass-mortise-knob-lock-brooklyn-01.webp',
    title: 'Brass Mortise Knob Lock Service — Brooklyn',
    alt: 'Close-up of a serviced brass knob mortise lock on a Brooklyn apartment door',
    category: 'residential',
    tags: ['lock-change', 'deadbolt'],
    priority: 80,
    dateCompleted: '2026-04-08',
    service: 'residential-locksmith',
    width: 960,
    height: 1280,
  },
  {
    filename: 'security/schlage-keypad-deadbolt-handleset-brooklyn-01.webp',
    title: 'Schlage Keypad Deadbolt & Handleset Install',
    alt: 'Schlage touchscreen keypad deadbolt with matching handleset installed on a Brooklyn front door',
    category: 'security',
    tags: ['smart-lock', 'deadbolt', 'security'],
    priority: 90,
    dateCompleted: '2026-04-15',
    service: 'residential-locksmith',
    width: 960,
    height: 1280,
  },
]

/** Returns items for a specific service page slug */
export function getGalleryByService(slug: string): GalleryItem[] {
  return GALLERY_ITEMS.filter(
    (item) => item.service === slug || item.tags.includes(slug)
  )
}

function sortByPriorityThenDate(a: GalleryItem, b: GalleryItem): number {
  if (b.priority !== a.priority) return b.priority - a.priority
  return b.dateCompleted.localeCompare(a.dateCompleted)
}

/**
 * Returns a contextually-selected set of gallery items, applying a cascade:
 *   1. Exact serviceSlug matches
 *   2. Category matches
 *   3. Neighborhood matches
 *   4. Featured fill from the overall registry, sorted by priority, then date
 *
 * Results are deduplicated and capped at `maxImages`.
 */
export function getContextualGallery(opts: {
  category?: GalleryCategoryValue
  neighborhood?: string
  serviceSlug?: string
  maxImages?: number
}): GalleryItem[] {
  const { category, neighborhood, serviceSlug, maxImages = 8 } = opts
  const seen = new Set<string>()
  const out: GalleryItem[] = []

  const push = (item: GalleryItem) => {
    if (seen.has(item.filename)) return
    seen.add(item.filename)
    out.push(item)
  }

  if (serviceSlug) {
    GALLERY_ITEMS.filter((i) => i.service === serviceSlug)
      .sort(sortByPriorityThenDate)
      .forEach(push)
  }

  if (out.length < maxImages && category) {
    GALLERY_ITEMS.filter((i) => i.category === category)
      .sort(sortByPriorityThenDate)
      .forEach(push)
  }

  if (out.length < maxImages && neighborhood) {
    GALLERY_ITEMS.filter((i) => i.neighborhood === neighborhood)
      .sort(sortByPriorityThenDate)
      .forEach(push)
  }

  if (out.length < maxImages) {
    GALLERY_ITEMS.slice()
      .sort(sortByPriorityThenDate)
      .forEach(push)
  }

  return out.slice(0, maxImages)
}

/**
 * Returns an array of before/after pairs, each as a tuple `[before, after]`.
 * Pairs are grouped by `projectId`. Unpaired (`beforeAfter` set but missing
 * counterpart) items are skipped.
 */
export function getBeforeAfterPairs(opts?: {
  category?: GalleryCategoryValue
  serviceSlug?: string
  neighborhood?: string
}): Array<{ before: GalleryItem; after: GalleryItem }> {
  const byProject = new Map<string, { before?: GalleryItem; after?: GalleryItem }>()
  for (const item of GALLERY_ITEMS) {
    if (!item.projectId || !item.beforeAfter) continue
    if (opts?.category && item.category !== opts.category) continue
    if (opts?.serviceSlug && item.service !== opts.serviceSlug) continue
    if (opts?.neighborhood && item.neighborhood !== opts.neighborhood) continue
    const entry = byProject.get(item.projectId) ?? {}
    entry[item.beforeAfter] = item
    byProject.set(item.projectId, entry)
  }
  return Array.from(byProject.values())
    .filter((pair): pair is { before: GalleryItem; after: GalleryItem } => !!pair.before && !!pair.after)
    .sort((a, b) => sortByPriorityThenDate(a.after, b.after))
}
