import { BUSINESS } from './constants'

// Global LocalBusiness schema — included on every page via root layout
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Locksmith'],
    '@id': BUSINESS.entityId,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: BUSINESS.founded,
    description: BUSINESS.description,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: BUSINESS.currenciesAccepted,
    paymentAccepted: BUSINESS.paymentAccepted,
    hasMap: BUSINESS.mapUrl,
    sameAs: [...BUSINESS.sameAs],
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: {
        '@type': 'Country',
        name: 'US',
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.coordinates.lat,
      longitude: BUSINESS.coordinates.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    areaServed: BUSINESS.serviceArea.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    serviceArea: {
      '@type': 'GeoCircle',
      name: `${BUSINESS.name} service area`,
      geoRadius: '20000',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS.coordinates.lat,
        longitude: BUSINESS.coordinates.lng,
      },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      '@id': `${BUSINESS.url}/contact/`,
      contactType: 'customer service',
      telephone: BUSINESS.phone,
      areaServed: ['US-NY'],
      availableLanguage: ['English'],
    },
    hasCredential: BUSINESS.credentials.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c,
    })),
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential Locksmith Services',
          description: 'Comprehensive locksmith services for homes in Brooklyn and NYC, including lockout solutions, repairs, and installations.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Emergency Residential Lockout Service',
          description: 'Fast response for residential lockouts, available 24 hours a day, 7 days a week in Brooklyn and NYC.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lock Change Service',
          description: 'Replacement of existing locks with new, high-quality locks for residential properties.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lock Repair Service',
          description: 'Repair of damaged or malfunctioning locks for homes in Brooklyn and NYC.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lock Installation Services',
          description: 'Professional installation of new locks for residential doors.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential Lockout Service',
          description: 'Quick and reliable service to regain access to homes during lockouts.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lock Re-Keying',
          description: 'Re-keying existing locks to work with new keys for enhanced security.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Locksmith Services',
          description: 'Locksmith services for businesses, including lockouts, installations, and security systems.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Emergency Commercial Lockout Service',
          description: '24/7 emergency lockout assistance for businesses in Brooklyn and NYC.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Lockout Service',
          description: 'Fast lockout solutions for commercial properties in Brooklyn and NYC.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Master Key Systems',
          description: 'Design and installation of master key systems for commercial properties.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Broken Key Extraction',
          description: 'Removal of broken keys from locks in residential and commercial settings.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Car Lockout Services',
          description: 'Automotive locksmith services for vehicle lockouts in Brooklyn and NYC.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Transponder Key Programming',
          description: 'Programming of transponder keys and key fobs for most vehicle makes and models.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Key Fob Replacement',
          description: 'Replacement and programming of key fobs for all major vehicle brands.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24 Hour Locksmith Service',
          description: 'Round-the-clock locksmith services for all types of lock-related needs in Brooklyn and NYC.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Emergency Services',
          description: 'Immediate response for all emergency locksmith needs, available 24/7 across Brooklyn and NYC.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Eviction Lock Change',
          description: 'Legal eviction lock changes for NYC landlords with proper marshal documentation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Deadbolt Installation',
          description: 'Professional deadbolt installation for enhanced residential and commercial door security.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Safe Opening & Installation',
          description: 'Professional safe opening, combination changes, and new safe installation services.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'High-Security Lock Installation',
          description: 'Installation of pick-resistant, bump-resistant high-security locks for maximum protection.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Access Control Systems',
          description: 'Design and installation of electronic access control systems for businesses and residences.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CCTV Installation',
          description: 'Professional CCTV and security camera system installation for properties in Brooklyn and NYC.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Smart Lock Installation',
          description: 'Installation of smart locks with app control, keypad, and fob entry for modern homes and offices.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Keyless Entry Systems',
          description: 'Installation of keypad and keyless entry systems for convenient, secure access.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Biometric Access Systems',
          description: 'Fingerprint and biometric access control installation for high-security applications.',
        },
      },
    ],
  }
}

// Organization schema — included globally alongside LocalBusiness
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BUSINESS.url}#Organization`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    sameAs: [...BUSINESS.sameAs],
  }
}

export function getServiceSchema({
  name,
  description,
  url,
  serviceType,
  brands,
}: {
  name: string
  description: string
  url: string
  serviceType: string
  brands?: readonly string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BUSINESS.url}${url}`,
    serviceType,
    provider: {
      '@type': 'Locksmith',
      '@id': BUSINESS.entityId,
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        postalCode: BUSINESS.address.zip,
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Brooklyn',
      sameAs: 'https://en.wikipedia.org/wiki/Brooklyn',
    },
    ...(brands && brands.length > 0
      ? { brand: brands.map((b) => ({ '@type': 'Brand', name: b })) }
      : {}),
  }
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BUSINESS.url}${item.url}`,
    })),
  }
}

export function getWebPageSchema({
  title,
  description,
  url,
}: {
  title: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${BUSINESS.url}${url}#webpage`,
    name: title,
    url: `${BUSINESS.url}${url}`,
    inLanguage: 'en-US',
    description,
    reviewedBy: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
  }
}

export function getArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = 'Avenue Locksmith Team',
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  authorName?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${BUSINESS.url}${url}`,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      '@id': BUSINESS.entityId,
      name: BUSINESS.name,
      logo: {
        '@type': 'ImageObject',
        url: BUSINESS.logo,
      },
    },
  }
}

export function getHowToSchema({
  name,
  description,
  totalTime,
  steps,
}: {
  name: string
  description: string
  totalTime?: string
  steps: { name: string; text: string; url?: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url ? { url: `${BUSINESS.url}${s.url}` } : {}),
    })),
  }
}
