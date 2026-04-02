import { BUSINESS } from './constants'

// Global LocalBusiness schema — included on every page
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': BUSINESS.entityId,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: BUSINESS.currenciesAccepted,
    paymentAccepted: BUSINESS.paymentAccepted,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: 'US',
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Locksmith Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Locksmith' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Locksmith' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automotive Locksmith' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Lockout Service' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Eviction Locksmith' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Safe Opening & Installation' } },
      ],
    },
  }
}

export function getServiceSchema({
  name,
  description,
  url,
  serviceType,
}: {
  name: string
  description: string
  url: string
  serviceType: string
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
    name: title,
    description,
    url: `${BUSINESS.url}${url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
  }
}
