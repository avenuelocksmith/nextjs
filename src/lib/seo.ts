import type { Metadata } from 'next'
import { BUSINESS } from './constants'

const BASE_URL = BUSINESS.url
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-default.jpg`

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
}: {
  title: string
  description: string
  path: string
  ogImage?: string
  noIndex?: boolean
}): Metadata {
  const url = `${BASE_URL}${path}`

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      images: [
        {
          url: ogImage ?? DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage ?? DEFAULT_OG_IMAGE],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  }
}

export function buildServiceMetadata({
  serviceName,
  location = 'Brooklyn, NY',
  path,
  customTitle,
  customDescription,
}: {
  serviceName: string
  location?: string
  path: string
  customTitle?: string
  customDescription?: string
}): Metadata {
  const title =
    customTitle ??
    `${serviceName} in ${location} | ${BUSINESS.name}`
  const description =
    customDescription ??
    `Professional ${serviceName.toLowerCase()} in ${location}. Licensed & insured. 24/7 emergency service. 15–25 minute response. Call ${BUSINESS.phone}.`

  return buildMetadata({ title, description, path })
}

export function buildNeighborhoodMetadata({
  neighborhoodName,
  zip,
  path,
}: {
  neighborhoodName: string
  zip: string
  path: string
}): Metadata {
  return buildMetadata({
    title: `Locksmith in ${neighborhoodName}, Brooklyn NY ${zip} | ${BUSINESS.name}`,
    description: `Fast, local locksmith in ${neighborhoodName}, Brooklyn (${zip}). Emergency lockout, lock change & rekeying. Licensed & insured. 15–25 Min Response. Call ${BUSINESS.phone}.`,
    path,
  })
}
