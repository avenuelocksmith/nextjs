// Single source of truth for all Avenue Locksmith business data
// Update here → propagates to every page automatically

export const BUSINESS = {
  name: 'Avenue Locksmith',
  legalName: 'Avenue Locksmith',
  alternateName: 'Avenue Locks',
  phone: '(347) 386-7164',
  phoneRaw: '3473867164',
  phoneHref: 'tel:+13473867164',
  email: 'info@avenuelocks.com',
  address: {
    street: '',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11234',
    full: 'Brooklyn, NY 11234',
    display: 'Brooklyn, NY',
  },
  coordinates: {
    lat: 40.6292,
    lng: -73.9442,
  },
  url: 'https://www.avenuelocks.com',
  logo: 'https://www.avenuelocks.com/images/logo.png',
  rating: 4.9,
  reviewCount: 150,
  priceRange: '$125–$700',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Check',
  openingHours: '24/7',
  serviceArea: ['Brooklyn', 'Queens', 'Manhattan', 'Staten Island', 'The Bronx'],
  responseTime: '15-25 minutes',
  founded: '2010',
  entityId: 'https://www.avenuelocks.com/#business',
  description: 'Avenue Locksmith is a licensed and insured mobile locksmith company founded in 2010, serving all five NYC boroughs. We provide 24/7 residential, commercial, automotive, and emergency locksmith services including lockouts, lock repairs, replacements, and new lock installations with upfront pricing quoted by phone before dispatch.',
  mapUrl: 'https://maps.google.com/?q=Avenue+Locksmith+Brooklyn+NY',
  sameAs: [
    'https://www.tiktok.com/@avenue_locksmith_nyc',
    'https://x.com/Avenue_Locks',
    'https://www.pinterest.com/avenuelocksmith/',
    'https://www.linkedin.com/company/avenue-locksmith',
    'https://share.google/lOGOEkHsc8g7bG1BL',
  ],
  credentials: [
    'NYC DCWP Licensed Locksmith',
    'Bonded and Insured in New York State',
  ],
} as const

export const LOCK_BRANDS = [
  'Medeco', 'Mul-T-Lock', 'Schlage', 'Kwikset', 'Yale',
  'August', 'Alarm Lock', 'Master Lock', 'Abloy', 'Kaba',
] as const

export const AUTO_BRANDS = [
  'Toyota', 'Ford', 'Honda', 'Chevrolet', 'BMW',
  'Mercedes-Benz', 'Nissan', 'Hyundai', 'Kia', 'Volkswagen', 'Jeep', 'Dodge',
] as const

export const SECURITY_BRANDS = [
  'Medeco', 'Mul-T-Lock', 'HID Global', 'Honeywell',
  'Bosch', 'Hikvision', 'Schlage', 'Allegion', 'Sielox',
] as const

export const TRUST_SIGNALS = [
  { label: '4.9/5 Stars', sublabel: '150+ Reviews', icon: 'star' },
  { label: 'Licensed & Insured', sublabel: 'Bonded in NY', icon: 'shield' },
  { label: '15–25 Min Response', sublabel: 'Emergency Service', icon: 'clock' },
  { label: '24/7 Available', sublabel: '365 Days a Year', icon: 'phone' },
] as const

export const SERVICES = [
  {
    slug: 'residential-locksmith',
    name: 'Residential Locksmith',
    href: '/services/residential-locksmith/',
    description: 'Home lockouts, lock installation, rekeying, smart locks, and deadbolt upgrades.',
    icon: 'home',
  },
  {
    slug: 'commercial-locksmith',
    name: 'Commercial Locksmith',
    href: '/services/commercial-locksmith/',
    description: 'Master key systems, access control, business lockouts, and office security.',
    icon: 'building',
  },
  {
    slug: 'auto-locksmith',
    name: 'Auto Locksmith',
    href: '/services/auto-locksmith/',
    description: 'Car lockouts, key fob programming, transponder keys, and ignition repair.',
    icon: 'car',
  },
  {
    slug: 'emergency-locksmith',
    name: 'Emergency Locksmith',
    href: '/services/emergency-locksmith/',
    description: '24/7 emergency lockout response — home, car, or business. 15–25 minute arrival.',
    icon: 'zap',
  },
  {
    slug: 'eviction-locksmith',
    name: 'Eviction Locksmith',
    href: '/services/eviction-locksmith/',
    description: 'Legal eviction lock changes for NYC landlords. Marshal paperwork required.',
    icon: 'key',
  },
  {
    slug: 'security-solutions',
    name: 'Security Solutions',
    href: '/services/security-solutions/',
    description: 'High-security locks, access control, CCTV, smart locks, and biometric entry.',
    icon: 'shield-check',
  },
] as const

export const NAV_LINKS = [
  { label: 'Services', href: '/services/' },
  { label: 'Service Areas', href: '/locksmith-near-me/' },
  { label: 'About', href: '/about/' },
  { label: 'Testimonials', href: '/testimonials/' },
  { label: 'Blog', href: '/residential-locksmith-services/' },
  { label: 'Contact', href: '/contact/' },
] as const

export const FOOTER_SERVICE_LINKS = [
  { label: 'Residential Locksmith', href: '/services/residential-locksmith/' },
  { label: 'Commercial Locksmith', href: '/services/commercial-locksmith/' },
  { label: 'Auto Locksmith', href: '/services/auto-locksmith/' },
  { label: 'Emergency Locksmith', href: '/services/emergency-locksmith/' },
  { label: 'Eviction Locksmith', href: '/services/eviction-locksmith/' },
  { label: 'Security Solutions', href: '/services/security-solutions/' },
  { label: 'Lock Rekey', href: '/services/lock-rekey/' },
  { label: 'Lock Change', href: '/services/lock-change/' },
  { label: 'Deadbolt Installation', href: '/services/deadbolt-installation/' },
  { label: 'Safe Locksmith', href: '/services/safe-locksmith/' },
] as const

// Service Areas mega-menu — sourced from NEIGHBORHOODS with ZIP-suffixed slugs.
// Three columns mirror the geographic split Brooklyn residents think in.
export const AREAS_MEGA_MENU = [
  {
    heading: 'North Brooklyn',
    items: [
      { label: 'Williamsburg', href: '/locksmith-near-me/williamsburg-11211-11249/', desc: 'Bedford Ave, Metropolitan Ave corridors' },
      { label: 'Greenpoint', href: '/locksmith-near-me/greenpoint-11222/', desc: 'Manhattan Ave, industrial lofts' },
      { label: 'Bushwick', href: '/locksmith-near-me/bushwick-11221/', desc: 'Myrtle Ave, Wyckoff Ave buildings' },
      { label: 'DUMBO', href: '/locksmith-near-me/dumbo-11201/', desc: 'Waterfront lofts + converted factories' },
      { label: 'Downtown Brooklyn', href: '/locksmith-near-me/downtown-brooklyn-11201/', desc: 'High-rise condos, Metro Tech' },
      { label: 'Brooklyn Heights', href: '/locksmith-near-me/brooklyn-heights-11201/', desc: 'Pre-war co-ops, historic brownstones' },
      { label: 'Fort Greene', href: '/locksmith-near-me/fort-greene-11205-11217/', desc: 'DeKalb Ave brownstones' },
      { label: 'Clinton Hill', href: '/locksmith-near-me/clinton-hill-11205-11238/', desc: 'Lafayette Ave pre-war co-ops' },
    ],
  },
  {
    heading: 'Central & South',
    items: [
      { label: 'Park Slope', href: '/locksmith-near-me/park-slope-11215-11217/', desc: 'Limestone row houses, 5th/7th Ave' },
      { label: 'Prospect Heights', href: '/locksmith-near-me/prospect-heights-11238-11217/', desc: 'Vanderbilt Ave, Washington Ave' },
      { label: 'Crown Heights', href: '/locksmith-near-me/crown-heights-11213-11216-11225-11233/', desc: 'Eastern Parkway, Franklin Ave' },
      { label: 'Bedford-Stuyvesant', href: '/locksmith-near-me/bedford-stuyvesant-11216-11221-11233/', desc: 'Nostrand Ave, Tompkins Ave' },
      { label: 'Flatbush', href: '/locksmith-near-me/flatbush-11226-11210/', desc: 'Church Ave, Cortelyou Rd co-ops' },
      { label: 'Kensington', href: '/locksmith-near-me/kensington-in-11218/', desc: 'Church Ave, Ocean Pkwy' },
      { label: 'Windsor Terrace', href: '/locksmith-near-me/windsor-terrace-11215-11218/', desc: 'Prospect Park SW side streets' },
    ],
  },
  {
    heading: 'Shore & East',
    items: [
      { label: 'Bay Ridge', href: '/locksmith-near-me/bay-ridge-11209/', desc: '3rd Ave, Shore Rd single-family' },
      { label: 'Sheepshead Bay', href: '/locksmith-near-me/sheepshead-bay-11235-11229/', desc: 'Ocean Ave, Emmons Ave' },
      { label: 'Marine Park', href: '/locksmith-near-me/marine-park-11234/', desc: 'Avenue U, single-family homes' },
      { label: 'Flatlands', href: '/locksmith-near-me/flatlands-11234/', desc: 'Kings Hwy, residential corridor' },
      { label: 'Mill Basin', href: '/locksmith-near-me/mill-basin-11234/', desc: 'Avenue N waterfront homes' },
      { label: 'Canarsie', href: '/locksmith-near-me/canarsie-11236/', desc: 'Rockaway Pkwy, Flatlands Ave' },
      { label: 'Gerritsen Beach', href: '/locksmith-near-me/gerritsen-beach-11229/', desc: 'Plumb Beach Channel cottages' },
    ],
  },
] as const

export const FOOTER_LOCATION_LINKS = [
  { label: 'Locksmith Near Me', href: '/locksmith-near-me/' },
  { label: 'Park Slope', href: '/locksmith-near-me/park-slope-11215-11217/' },
  { label: 'Williamsburg', href: '/locksmith-near-me/williamsburg-11211-11249/' },
  { label: 'DUMBO', href: '/locksmith-near-me/dumbo-11201/' },
  { label: 'Brooklyn Heights', href: '/locksmith-near-me/brooklyn-heights-11201/' },
  { label: 'Flatbush', href: '/locksmith-near-me/flatbush-11226-11210/' },
  { label: 'Bay Ridge', href: '/locksmith-near-me/bay-ridge-11209/' },
  { label: 'Bed-Stuy', href: '/locksmith-near-me/bedford-stuyvesant-11216-11221-11233/' },
  { label: '24-Hour Brooklyn', href: '/24-hour-locksmith-in-brooklyn-ny/' },
  { label: 'Emergency Brooklyn', href: '/emergency-locksmith-in-brooklyn-ny/' },
] as const
