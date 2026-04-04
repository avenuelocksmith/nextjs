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
    street: '973 E 55th St',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11234',
    full: '973 E 55th St, Brooklyn, NY 11234',
    display: '973 E 55th St, Brooklyn, NY',
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
  serviceArea: ['Brooklyn', 'Queens', 'Manhattan', 'Staten Island'],
  responseTime: '15-25 minutes',
  founded: '2010',
  entityId: 'https://www.avenuelocks.com/#business',
  description: 'Avenue Locksmith is a licensed and insured locksmith company founded in 2010, serving Brooklyn, Queens, Manhattan, and Staten Island. We provide 24/7 residential, commercial, automotive, and emergency locksmith services including lockouts, lock repairs, replacements, and new lock installations with transparent upfront pricing.',
  mapUrl: 'https://maps.google.com/?q=Avenue+Locksmith+973+E+55th+St+Brooklyn+NY+11234',
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

export const FOOTER_LOCATION_LINKS = [
  { label: 'Locksmith Near Me', href: '/locksmith-near-me/' },
  { label: 'Park Slope', href: '/locksmith-near-me/park-slope/' },
  { label: 'Williamsburg', href: '/locksmith-near-me/williamsburg/' },
  { label: 'DUMBO', href: '/locksmith-near-me/dumbo/' },
  { label: 'Brooklyn Heights', href: '/locksmith-near-me/brooklyn-heights/' },
  { label: 'Flatbush', href: '/locksmith-near-me/flatbush/' },
  { label: 'Bay Ridge', href: '/locksmith-near-me/bay-ridge/' },
  { label: 'Bed-Stuy', href: '/locksmith-near-me/bedford-stuyvesant/' },
  { label: '24-Hour Brooklyn', href: '/24-hour-locksmith-in-brooklyn-ny/' },
  { label: 'Emergency Brooklyn', href: '/emergency-locksmith-in-brooklyn-ny/' },
] as const
