# Avenue Locksmith — Next.js Rebuild Master Plan
> **Business:** Avenue Locksmith | Brooklyn, NY | (347) 386-7164 | info@avenuelocks.com
> **Goal:** Full Next.js rebuild preserving every existing URL, all SEO rankings, and zero Google Search Console errors.
> **Date:** 2026-03-29

---

## Table of Contents
1. [Business Overview](#1-business-overview)
2. [Tech Stack](#2-tech-stack)
3. [Next.js Project Architecture](#3-nextjs-project-architecture)
4. [Complete URL Inventory & Route Mapping](#4-complete-url-inventory--route-mapping)
5. [Google Local Services SEO Strategy](#5-google-local-services-seo-strategy)
6. [Schema Markup Requirements](#6-schema-markup-requirements)
7. [Page Templates & Component Map](#7-page-templates--component-map)
8. [Ideal Customer Profiles (ICP) by Page Type](#8-ideal-customer-profiles-icp-by-page-type)
9. [Content Writing Guidelines](#9-content-writing-guidelines)
10. [Technical SEO Checklist](#10-technical-seo-checklist)
11. [Development Phases](#11-development-phases)
12. [Individual Page ICP Files Index](#12-individual-page-icp-files-index)
13. [Branding & Design System](#13-branding--design-system)
14. [New Pages to Add — Coverage Gaps](#14-new-pages-to-add--coverage-gaps)
15. [Internal Linking Strategy](#15-internal-linking-strategy)
16. [Google Business Profile & Local Citations](#16-google-business-profile--local-citations)
17. [Forms Strategy](#17-forms-strategy)
18. [Maintenance SOP](#18-maintenance-sop)

---

## 1. Business Overview

| Field | Details |
|---|---|
| **Business Name** | Avenue Locksmith |
| **DBA / Brand** | Avenue Locks |
| **Phone** | (347) 386-7164 |
| **Email** | info@avenuelocks.com |
| **Address** | 973 E 55th St, Brooklyn, NY |
| **Primary Market** | Brooklyn, NY |
| **Extended Markets** | Queens, Manhattan, Staten Island |
| **Rating** | 4.9/5 — 150+ Reviews |
| **Availability** | 24/7 Emergency |
| **Response Time** | Under 15-25 minutes |
| **Pricing Range** | $125–$700 |
| **Credentials** | Licensed, Bonded, Insured |

### Core Services
| Category | Services |
|---|---|
| **Residential** | Lock install, rekeying, smart locks, deadbolts, home lockout, key duplication |
| **Commercial** | Master key systems, access control, electronic entry, business lockout, safes |
| **Automotive** | Car lockout, key fob programming, transponder keys, ignition repair, trunk unlock |
| **Emergency** | 24/7 lockout, broken key extraction, burglary repair, emergency rekeying |
| **Eviction** | Legal eviction lock changes, NYC landlord compliance |
| **Security Solutions** | High-security locks, access control, CCTV, smart locks, keyless entry, biometric, reinforced doors |

### Trust Signals (Use on Every Page)
- 4.9/5 rating from 150+ verified customers
- Licensed, bonded & insured technicians
- 30-minute response guarantee
- 24/7 availability — 365 days a year
- 100% satisfaction guarantee
- No hidden fees — upfront transparent pricing
- New customers save 10%

---

## 2. Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| **Framework** | Next.js 14+ (App Router) | SSG/SSR, SEO-first, fast |
| **Language** | TypeScript | Type safety, maintainability |
| **Styling** | Tailwind CSS v3 | Utility-first, no arbitrary values |
| **UI Components** | shadcn/ui | Accessible, composable |
| **Animation** | Framer Motion | Micro-interactions |
| **Forms** | React Hook Form + Zod | Validation, contact/quote forms |
| **CMS** | Contentful or Sanity (headless) | Blog posts, easy client editing |
| **Analytics** | Google Analytics 4 + Google Tag Manager | GSC integration |
| **Error Tracking** | Sentry | Production monitoring |
| **Maps** | Google Maps Embed API | Local signals, service area maps |
| **Schema** | next-seo + manual JSON-LD | LocalBusiness, Service, FAQPage |
| **Sitemap** | next-sitemap | Auto-generated XML sitemaps |
| **Fonts** | next/font (Google Fonts) | CLS-safe font loading |
| **Images** | next/image | WebP, AVIF, lazy load |
| **Deployment** | Vercel | Edge CDN, preview deploys |

---

## 3. Next.js Project Architecture

```
avenuelocks.com/
├── src/
│   ├── app/
│   │   ├── layout.tsx                          # Root layout (header, footer, schema)
│   │   ├── page.tsx                            # Homepage /
│   │   ├── about/
│   │   │   └── page.tsx                        # /about/
│   │   ├── contact/
│   │   │   └── page.tsx                        # /contact/
│   │   ├── testimonials/
│   │   │   └── page.tsx                        # /testimonials/
│   │   ├── privacy-policy/
│   │   │   └── page.tsx                        # /privacy-policy/
│   │   ├── terms-of-service/
│   │   │   └── page.tsx                        # /terms-of-service/
│   │   ├── accessibility-statement/
│   │   │   └── page.tsx                        # /accessibility-statement/
│   │   │
│   │   ├── services/
│   │   │   ├── page.tsx                        # /services/
│   │   │   ├── residential-locksmith/
│   │   │   │   └── page.tsx                    # /services/residential-locksmith/
│   │   │   ├── commercial-locksmith/
│   │   │   │   └── page.tsx                    # /services/commercial-locksmith/
│   │   │   ├── auto-locksmith/
│   │   │   │   └── page.tsx                    # /services/auto-locksmith/
│   │   │   ├── emergency-locksmith/
│   │   │   │   └── page.tsx                    # /services/emergency-locksmith/
│   │   │   ├── eviction-locksmith/
│   │   │   │   └── page.tsx                    # /services/eviction-locksmith/
│   │   │   ├── lockout-service/
│   │   │   │   ├── page.tsx                    # /services/lockout-service/
│   │   │   │   ├── residential-lockout-service-avenue-locks/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── commercial-lockout-service-avenue-locks/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── auto-lockout-service-avenue-locks/
│   │   │   │       └── page.tsx
│   │   │   └── security-solutions/
│   │   │       ├── page.tsx                    # /services/security-solutions/
│   │   │       ├── high-security-locks/
│   │   │       │   └── page.tsx
│   │   │       ├── access-control-systems/
│   │   │       │   └── page.tsx
│   │   │       ├── cctv-installation/
│   │   │       │   └── page.tsx
│   │   │       ├── smart-locks/
│   │   │       │   └── page.tsx
│   │   │       ├── keyless-entry-system/
│   │   │       │   └── page.tsx
│   │   │       ├── biometric-access-system/
│   │   │       │   └── page.tsx
│   │   │       └── reinforced-door-frame-system/
│   │   │           └── page.tsx
│   │   │
│   │   ├── locksmith-near-me/
│   │   │   ├── page.tsx                        # /locksmith-near-me/
│   │   │   └── [neighborhood]/
│   │   │       └── page.tsx                    # Dynamic route for all 50+ neighborhoods
│   │   │
│   │   ├── (city-service-pages)/               # Route group — no URL segment
│   │   │   ├── 24-hour-locksmith-in-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── apartment-lockout-in-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── automotive-locksmith-in-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── automotive-locksmith-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── car-lockout-service-in-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── commercial-locksmith-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── emergency-locksmith-in-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── emergency-locksmith-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── eviction-locksmith-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── house-lockout-in-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── lockout-service-in-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── locksmith-services-in-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── mobile-locksmith-in-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   └── residential-locksmith-brooklyn-ny/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (neighborhood-emergency)/           # Route group — no URL segment
│   │   │   ├── emergency-locksmith-boerum-hill-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── emergency-locksmith-park-slope-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── emergency-locksmith-prospect-heights-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── emergency-locksmith-vinegar-hill-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── emergency-locksmith-williamsburg-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── emergency-locksmith-mill-basin-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── emergency-locksmith-dumbo-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── emergency-locksmith-columbia-waterfront-district-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── emergency-locksmith-cobble-hill-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   ├── emergency-locksmith-carroll-gardens-brooklyn-ny/
│   │   │   │   └── page.tsx
│   │   │   └── emergency-locksmith-brooklyn-heights-brooklyn-ny/
│   │   │       └── page.tsx
│   │   │
│   │   └── (blog)/
│   │       ├── residential-locksmith-services/
│   │       │   └── avenue-locks-residential-locksmith-service-in-new-york-city/
│   │       │       └── page.tsx
│   │       ├── general-locksmith-services/
│   │       │   └── what-to-look-for-in-a-reliable-locksmith-in-nyc/
│   │       │       └── page.tsx
│   │       └── category/
│   │           ├── residential-locksmith-services/
│   │           │   └── page.tsx
│   │           └── general-locksmith-services/
│   │               └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx                      # Sticky nav, phone CTA, mobile menu
│   │   │   ├── Footer.tsx                      # NAP, links, social, sitemap links
│   │   │   └── MobileNav.tsx
│   │   ├── ui/
│   │   │   ├── PhoneButton.tsx                 # tel: CTA button — used everywhere
│   │   │   ├── EmergencyCTABanner.tsx          # Floating "Call Now" bar
│   │   │   ├── TrustBar.tsx                    # Rating, licensed, insured, 30min
│   │   │   ├── ReviewCard.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   ├── MapEmbed.tsx                    # Google Maps service area
│   │   │   └── BreadcrumbNav.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx                 # Page hero with H1, CTA, trust signals
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── ServiceAreaSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── ContactFormSection.tsx
│   │   └── schema/
│   │       ├── LocalBusinessSchema.tsx         # JSON-LD for every page
│   │       ├── ServiceSchema.tsx
│   │       ├── FAQSchema.tsx
│   │       └── BreadcrumbSchema.tsx
│   │
│   ├── lib/
│   │   ├── neighborhoods.ts                    # All neighborhood data (slug, name, zip, borough)
│   │   ├── services.ts                         # All service data
│   │   ├── schema.ts                           # Schema generation helpers
│   │   ├── seo.ts                              # generateMetadata helpers
│   │   └── constants.ts                       # Phone, address, business info
│   │
│   └── types/
│       ├── neighborhood.ts
│       └── service.ts
│
├── public/
│   ├── robots.txt
│   └── images/
│
├── next.config.js
├── next-sitemap.config.js
└── tailwind.config.js
```

---

## 4. Complete URL Inventory & Route Mapping

### 4.1 Core Pages (7 pages)

| Current URL | Next.js Route File | Priority |
|---|---|---|
| `/` | `app/page.tsx` | 1.0 |
| `/about/` | `app/about/page.tsx` | 0.8 |
| `/contact/` | `app/contact/page.tsx` | 0.9 |
| `/testimonials/` | `app/testimonials/page.tsx` | 0.7 |
| `/privacy-policy/` | `app/privacy-policy/page.tsx` | 0.3 |
| `/terms-of-service/` | `app/terms-of-service/page.tsx` | 0.3 |
| `/accessibility-statement/` | `app/accessibility-statement/page.tsx` | 0.3 |

### 4.2 Service Pages (19 pages)

| Current URL | Next.js Route File | Priority |
|---|---|---|
| `/services/` | `app/services/page.tsx` | 0.9 |
| `/services/residential-locksmith/` | `app/services/residential-locksmith/page.tsx` | 0.9 |
| `/services/commercial-locksmith/` | `app/services/commercial-locksmith/page.tsx` | 0.9 |
| `/services/auto-locksmith/` | `app/services/auto-locksmith/page.tsx` | 0.9 |
| `/services/emergency-locksmith/` | `app/services/emergency-locksmith/page.tsx` | 1.0 |
| `/services/eviction-locksmith/` | `app/services/eviction-locksmith/page.tsx` | 0.8 |
| `/services/lockout-service/` | `app/services/lockout-service/page.tsx` | 0.9 |
| `/services/lockout-service/residential-lockout-service-avenue-locks/` | nested page.tsx | 0.8 |
| `/services/lockout-service/commercial-lockout-service-avenue-locks/` | nested page.tsx | 0.8 |
| `/services/lockout-service/auto-lockout-service-avenue-locks/` | nested page.tsx | 0.8 |
| `/services/security-solutions/` | `app/services/security-solutions/page.tsx` | 0.8 |
| `/services/security-solutions/high-security-locks/` | nested page.tsx | 0.7 |
| `/services/security-solutions/access-control-systems/` | nested page.tsx | 0.7 |
| `/services/security-solutions/cctv-installation/` | nested page.tsx | 0.7 |
| `/services/security-solutions/smart-locks/` | nested page.tsx | 0.7 |
| `/services/security-solutions/keyless-entry-system/` | nested page.tsx | 0.7 |
| `/services/security-solutions/biometric-access-system/` | nested page.tsx | 0.7 |
| `/services/security-solutions/reinforced-door-frame-system/` | nested page.tsx | 0.7 |

### 4.3 Neighborhood Pages (50 pages) — Dynamic Route

All served by `app/locksmith-near-me/[neighborhood]/page.tsx` with `generateStaticParams()`

| Slug | Neighborhood | ZIP(s) |
|---|---|---|
| `greenpoint-11222` | Greenpoint | 11222 |
| `park-slope-11215-11217` | Park Slope | 11215, 11217 |
| `williamsburg-11211-11249` | Williamsburg | 11211, 11249 |
| `bensonhurst-11214-11204` | Bensonhurst | 11214, 11204 |
| `clinton-hill-11205-11238` | Clinton Hill | 11205, 11238 |
| `georgetown-11234` | Georgetown | 11234 |
| `flatlands-11234` | Flatlands | 11234 |
| `gerritsen-beach-11229` | Gerritsen Beach | 11229 |
| `bergen-beach-11234` | Bergen Beach | 11234 |
| `mill-basin-11234` | Mill Basin | 11234 |
| `marine-park-11234` | Marine Park | 11234 |
| `coney-island-11224` | Coney Island | 11224 |
| `starrett-city-11239` | Starrett City | 11239 |
| `canarsie-11236` | Canarsie | 11236 |
| `new-lots-11207` | New Lots | 11207 |
| `cypress-hills-11208` | Cypress Hills | 11208 |
| `east-new-york-11207-11208` | East New York | 11207, 11208 |
| `brownsville-11212-11233` | Brownsville | 11212, 11233 |
| `homecrest-11229` | Homecrest | 11229 |
| `gravesend-11223` | Gravesend | 11223 |
| `brighton-beach-11235` | Brighton Beach | 11235 |
| `manhattan-beach-11235` | Manhattan Beach | 11235 |
| `sheepshead-bay-11235-11229` | Sheepshead Bay | 11235, 11229 |
| `borough-park-11219` | Borough Park | 11219 |
| `bath-beach-11214` | Bath Beach | 11214 |
| `dyker-heights-11228` | Dyker Heights | 11228 |
| `bay-ridge-11209` | Bay Ridge | 11209 |
| `fiske-terrace-11230` | Fiske Terrace | 11230 |
| `prospect-park-south-11226` | Prospect Park South | 11226 |
| `kensington-in-11218` | Kensington | 11218 |
| `ditmas-park-11226` | Ditmas Park | 11226 |
| `midwood-11230` | Midwood | 11230 |
| `east-flatbush-11203-11212-11226` | East Flatbush | 11203, 11212, 11226 |
| `flatbush-11226-11210` | Flatbush | 11226, 11210 |
| `sunset-park-11220-11232` | Sunset Park | 11220, 11232 |
| `windsor-terrace-11215-11218` | Windsor Terrace | 11215, 11218 |
| `south-slope-11215` | South Slope | 11215 |
| `boerum-hill-11217-11201` | Boerum Hill | 11217, 11201 |
| `cobble-hill-11201` | Cobble Hill | 11201 |
| `red-hook-11231` | Red Hook | 11231 |
| `carroll-gardens-11231` | Carroll Gardens | 11231 |
| `gowanus-11215-11217` | Gowanus | 11215, 11217 |
| `weeksville-11213` | Weeksville | 11213 |
| `ocean-hill-11233` | Ocean Hill | 11233 |
| `fort-greene-11205-11217` | Fort Greene | 11205, 11217 |
| `bedford-stuyvesant-11216-11221-11233` | Bedford-Stuyvesant | 11216, 11221, 11233 |
| `prospect-heights-11238-11217` | Prospect Heights | 11238, 11217 |
| `east-williamsburg-11206-11211-11237` | East Williamsburg | 11206, 11211, 11237 |
| `crown-heights-11213-11216-11225-11233` | Crown Heights | 11213, 11216, 11225, 11233 |

Plus the parent: `/locksmith-near-me/` → `app/locksmith-near-me/page.tsx`

### 4.4 City-Level Service Pages (14 pages)

All served as individual static routes in `app/(city-service-pages)/`:

| URL | Template Type |
|---|---|
| `/24-hour-locksmith-in-brooklyn-ny/` | Emergency / 24hr |
| `/apartment-lockout-in-brooklyn-ny/` | Lockout — Residential |
| `/automotive-locksmith-in-brooklyn-ny/` | Auto service |
| `/automotive-locksmith-brooklyn-ny/` | Auto service (variant) |
| `/car-lockout-service-in-brooklyn-ny/` | Auto lockout |
| `/commercial-locksmith-brooklyn-ny/` | Commercial |
| `/emergency-locksmith-in-brooklyn-ny/` | Emergency |
| `/emergency-locksmith-brooklyn-ny/` | Emergency (variant) |
| `/eviction-locksmith-brooklyn-ny/` | Eviction |
| `/house-lockout-in-brooklyn-ny/` | Residential lockout |
| `/lockout-service-in-brooklyn-ny/` | General lockout |
| `/locksmith-services-in-brooklyn-ny/` | General services |
| `/mobile-locksmith-in-brooklyn-ny/` | Mobile locksmith |
| `/residential-locksmith-brooklyn-ny/` | Residential |

### 4.5 Neighborhood Emergency Pages (11 pages)

All served as individual static routes in `app/(neighborhood-emergency)/`:

| URL | Neighborhood |
|---|---|
| `/emergency-locksmith-boerum-hill-brooklyn-ny/` | Boerum Hill |
| `/emergency-locksmith-park-slope-brooklyn-ny/` | Park Slope |
| `/emergency-locksmith-prospect-heights-brooklyn-ny/` | Prospect Heights |
| `/emergency-locksmith-vinegar-hill-brooklyn-ny/` | Vinegar Hill |
| `/emergency-locksmith-williamsburg-brooklyn-ny/` | Williamsburg |
| `/emergency-locksmith-mill-basin-brooklyn-ny/` | Mill Basin |
| `/emergency-locksmith-dumbo-brooklyn-ny/` | DUMBO |
| `/emergency-locksmith-columbia-waterfront-district-brooklyn-ny/` | Columbia Waterfront District |
| `/emergency-locksmith-cobble-hill-brooklyn-ny/` | Cobble Hill |
| `/emergency-locksmith-carroll-gardens-brooklyn-ny/` | Carroll Gardens |
| `/emergency-locksmith-brooklyn-heights-brooklyn-ny/` | Brooklyn Heights |

### 4.6 Blog / Post Pages (2 posts, 2 categories)

| URL | Type |
|---|---|
| `/residential-locksmith-services/avenue-locks-residential-locksmith-service-in-new-york-city/` | Blog Post |
| `/general-locksmith-services/what-to-look-for-in-a-reliable-locksmith-in-nyc/` | Blog Post |
| `/category/residential-locksmith-services/` | Blog Category |
| `/category/general-locksmith-services/` | Blog Category |

---

## 5. Google Local Services SEO Strategy

### 5.1 Google's E-E-A-T for Local Service Businesses

Every page must demonstrate:

| Signal | Implementation |
|---|---|
| **Experience** | Mention years serving Brooklyn/NYC, real job examples |
| **Expertise** | License numbers, certifications, specialized equipment mentioned |
| **Authoritativeness** | Reviews, directory listings, press mentions |
| **Trustworthiness** | NAP consistency, license badge, guarantee, no hidden fees |

### 5.2 Local SEO Page Requirements

**Every page must include:**
- NAP (Name, Address, Phone) in footer — identical format across all pages
- `LocalBusiness` JSON-LD schema with `@type: "Locksmith"`
- Geo-coordinates in schema (40.6292° N, 73.9442° W — 973 E 55th St, Brooklyn)
- Service area explicitly stated in content
- Google Maps embed showing service area
- Internal links to related neighborhood pages
- Breadcrumb navigation with `BreadcrumbList` schema

### 5.3 Keyword Intent Strategy

| Page Type | Primary Intent | Keyword Focus |
|---|---|---|
| Homepage | Navigational + Commercial | "locksmith brooklyn ny", "avenue locksmith" |
| Service pages | Informational + Commercial | "residential locksmith brooklyn", "commercial locksmith nyc" |
| Emergency pages | Transactional (urgent) | "emergency locksmith now brooklyn", "locked out brooklyn" |
| Neighborhood pages | Transactional + Local | "locksmith near me [neighborhood]", "locksmith [zip code]" |
| City-service pages | Transactional | "locksmith in brooklyn ny", "car lockout brooklyn" |
| Blog posts | Informational | "how to find a reliable locksmith nyc" |

### 5.4 Google Local Services Ads (LSA) Compliance

- Phone number must be prominently displayed above the fold on every page
- Business hours must be consistent (24/7)
- Service categories must match Google's locksmith service taxonomy
- Address must match Google Business Profile exactly

---

## 6. Schema Markup Requirements

### 6.1 Global Schema (Root Layout)

```json
{
  "@context": "https://schema.org",
  "@type": "Locksmith",
  "@id": "https://www.avenuelocks.com/#business",
  "name": "Avenue Locksmith",
  "alternateName": "Avenue Locks",
  "url": "https://www.avenuelocks.com",
  "logo": "https://www.avenuelocks.com/logo.png",
  "image": "https://www.avenuelocks.com/og-image.jpg",
  "description": "24/7 licensed and insured locksmith services in Brooklyn, NY. Residential, commercial, automotive, and emergency locksmith services for all NYC boroughs.",
  "telephone": "+13473867164",
  "email": "info@avenuelocks.com",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "973 E 55th St",
    "addressLocality": "Brooklyn",
    "addressRegion": "NY",
    "postalCode": "11234",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.6292,
    "longitude": -73.9442
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5"
  },
  "areaServed": [
    "Brooklyn, NY", "Queens, NY", "Manhattan, NY", "Staten Island, NY"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Locksmith Services"
  }
}
```

### 6.2 Service Schema (Service Pages)
Each service page gets a `Service` schema with `provider`, `areaServed`, `serviceType`, and `offers`.

### 6.3 FAQPage Schema
All service pages, neighborhood pages, and city-service pages must include `FAQPage` schema with 5–7 Q&A pairs.

### 6.4 BreadcrumbList Schema
All pages below root level get `BreadcrumbList` schema matching visible breadcrumb navigation.

### 6.5 Review Schema
Testimonials page gets `Review` + `AggregateRating` schema. Featured reviews on other pages use inline `Review` markup.

---

## 7. Page Templates & Component Map

### Template A: Homepage
**Sections (in order):**
1. `HeroSection` — H1, phone CTA, 30-min guarantee, trust badges
2. `TrustBar` — rating, licensed, insured, 24/7
3. `ServicesGrid` — 9 service cards with icons
4. `WhyChooseUs` — 3 pillars: speed, expertise, affordability
5. `TestimonialsSection` — 3 reviews + aggregate rating
6. `ServiceAreaSection` — map + neighborhood grid
7. `FAQSection` — 5 general FAQs
8. `ContactFormSection` — quote form + phone

### Template B: Core Service Page
**Sections (in order):**
1. `HeroSection` — Service-specific H1, phone CTA
2. `TrustBar`
3. Service description — What we do, how we do it
4. Sub-services list with icons
5. `WhyChooseUs` — specific to service type
6. Pricing transparency section ($125–$700 range)
7. `TestimonialsSection` — service-specific reviews
8. `ServiceAreaSection`
9. `FAQSection` — 7 service-specific FAQs
10. `ContactFormSection`

### Template C: Neighborhood Page (/locksmith-near-me/[neighborhood]/)
**Sections (in order):**
1. `HeroSection` — "[Neighborhood] Locksmith — Fast Response"
2. `TrustBar`
3. Neighborhood intro — local context, streets, landmarks
4. Services available in that neighborhood
5. Response time to that neighborhood
6. `TestimonialsSection`
7. Related neighborhoods (internal links)
8. `FAQSection` — neighborhood-specific FAQs
9. `MapEmbed` — zoomed into neighborhood
10. `ContactFormSection`

### Template D: City-Service Page
**Sections (in order):**
1. `HeroSection` — "[Service] in Brooklyn, NY"
2. `TrustBar`
3. Service overview for Brooklyn
4. Process — how it works (3–4 steps)
5. Pricing section
6. `TestimonialsSection`
7. Coverage — link to neighborhoods
8. `FAQSection`
9. `ContactFormSection`

### Template E: Emergency Neighborhood Page
**Sections (in order):**
1. `EmergencyCTABanner` — "CALL NOW — We're On The Way"
2. `HeroSection` — urgent language, H1
3. `TrustBar`
4. Emergency process — 3 steps, response time
5. Services covered in emergency
6. `TestimonialsSection`
7. `FAQSection` — emergency-specific FAQs
8. `MapEmbed`
9. `ContactFormSection`

### Template F: Blog Post
**Sections (in order):**
1. Breadcrumb
2. Article header — H1, author, date, category, reading time
3. Featured image
4. Table of contents
5. Article body — with H2/H3 hierarchy
6. Related services CTA sidebar/inline
7. Author bio
8. Related posts
9. Bottom CTA — "Need a Locksmith Now?"

---

## 8. Ideal Customer Profiles (ICP) by Page Type

> Full individual ICP files are in `/icp/` folder. Below is the summary per category.

### ICP-01: Homepage Visitor
- **Who**: First-time visitor, general research or urgent need
- **Mix**: 40% emergency lockout, 30% comparison shopping, 30% referral
- **Device**: 70% mobile (emergency = near 100% mobile)
- **Pain**: Locked out, needs trustworthy local locksmith fast
- **Decision driver**: Reviews, response time, phone number visible above fold
- **Content tone**: Urgent-yet-calm, trustworthy, local

### ICP-02: Residential Locksmith Seeker
- **Who**: Brooklyn homeowner or renter (25–55 years old)
- **Situation**: Lost keys, moving into new apartment, wants security upgrade
- **Pain**: Doesn't know who to trust, fears being overcharged
- **Decision driver**: Licensed/insured, pricing transparency, proximity
- **Content tone**: Helpful, expert advisor, friendly neighbor

### ICP-03: Commercial / Business Owner
- **Who**: Small business owner, property manager, office manager in Brooklyn/NYC
- **Situation**: Office lockout, needs master key system, access control upgrade
- **Pain**: Business downtime, employee access management, break-in recovery
- **Decision driver**: Credentials, commercial experience, speed, B2B reliability
- **Content tone**: Professional, ROI-focused, compliance-aware

### ICP-04: Emergency Lockout (Urgent)
- **Who**: Anyone — locked out RIGHT NOW
- **Device**: Almost exclusively mobile
- **Situation**: Locked out of home, car, or office — stressed, time-sensitive
- **Pain**: Need help immediately, afraid of scams
- **Decision driver**: Phone number, response time, "can you come now?"
- **Content tone**: Calm reassurance, fast action, no fluff

### ICP-05: Automotive Locksmith Seeker
- **Who**: Car owner in Brooklyn/NYC (25–50 years old)
- **Situation**: Keys locked in car, broken key fob, lost transponder key
- **Pain**: Stuck on street, late for work/appointment
- **Decision driver**: How fast, does he know my car brand, pricing
- **Content tone**: Technical competence + speed

### ICP-06: Neighborhood Resident
- **Who**: Hyper-local searcher — "locksmith near me" + neighborhood name
- **Situation**: Non-emergency or moderate urgency, wants LOCAL provider
- **Pain**: Doesn't want someone from far away, wants trusted neighborhood business
- **Decision driver**: Mentions their neighborhood, local reviews, response time
- **Content tone**: Neighborhood-native language, local landmarks, community feel

### ICP-07: Security Upgrade Buyer
- **Who**: Homeowner or business owner proactively improving security
- **Timeline**: Not urgent — researching 1–4 weeks
- **Situation**: Recent break-in nearby, moving, renovation, wants smart tech
- **Pain**: Overwhelmed by options, needs expert guidance
- **Decision driver**: Education, expertise, options presented clearly, pricing ranges
- **Content tone**: Educational, consultative, product-informed

### ICP-08: Landlord / Property Manager (Eviction)
- **Who**: Brooklyn landlord or property manager
- **Situation**: Completed legal eviction, needs lock changed
- **Pain**: Legal compliance, tenant re-entry prevention, urgency
- **Decision driver**: Knows NYC eviction laws, fast, discreet
- **Content tone**: Legal-aware, professional, NYC-specific

---

## 9. Content Writing Guidelines

### 9.1 Google's Guidelines for Local Service Business Content

**DO:**
- Write for the person, not the algorithm — answer their exact question
- Lead every page with the most important information (inverted pyramid)
- Use the specific neighborhood, borough, ZIP code in content naturally
- Address pain points before selling services
- Include specific local details (street names, landmarks, commute context)
- Use "you" and "your" to speak directly to the reader
- Include process transparency (what happens when you call us)
- Cite specific credentials, license types, and service guarantees
- Keep paragraphs to 2–3 sentences max for mobile readability

**DON'T:**
- Keyword stuff — never repeat "locksmith brooklyn" more than naturally warranted
- Use generic filler content duplicated across pages
- Make unverifiable claims ("best locksmith in NYC") without citation
- Use passive voice — active voice builds trust
- Use industry jargon without explanation
- Write walls of text — use headers, bullets, numbered lists

### 9.2 Page-Level Content Structure (Every Service/Location Page)

```
H1: [Primary Keyword] — Action-Oriented (e.g., "Emergency Locksmith in Williamsburg, Brooklyn")
  ↓
Opening paragraph (40–60 words): Pain point → solution → call to action
  ↓
H2: Our [Service] Services in [Location]
  → Bullet list of specific services
  ↓
H2: How It Works (3 steps)
  → Step 1: Call us / Step 2: We arrive in X min / Step 3: Problem solved
  ↓
H2: Why Brooklyn Residents Choose Avenue Locksmith
  → Trust signals, credentials, local expertise
  ↓
H2: Serving [Location] and Surrounding Areas
  → Mention nearby neighborhoods + internal links
  ↓
H2: Frequently Asked Questions
  → 5–7 questions that real customers ask
  ↓
H2: Contact Us / Get Help Now
  → Form + phone number
```

### 9.3 Tone Guide

| Situation | Tone | Example |
|---|---|---|
| Emergency pages | Calm urgency | "We're on our way. Call now and our locksmith will be there in 30 minutes." |
| Service pages | Expert advisor | "Rekeying is often the smarter choice — here's when we recommend it." |
| Neighborhood pages | Local neighbor | "Whether you're in the heart of Williamsburg or near the Bushwick border..." |
| Security solutions | Consultative | "Not all smart locks work the same way. We'll help you pick the right fit." |
| Eviction | Legal-aware professional | "We understand NYC housing laws and carry out every lock change in compliance." |

### 9.4 Word Count Targets

| Page Type | Target Word Count |
|---|---|
| Homepage | 800–1,200 words |
| Core service pages | 700–1,000 words |
| Neighborhood pages | 500–800 words |
| City-service pages | 600–900 words |
| Emergency neighborhood pages | 400–600 words |
| Blog posts | 1,000–2,000 words |

---

## 10. Technical SEO Checklist

### URL & Redirects
- [ ] All existing URLs preserved exactly (trailing slash consistent)
- [ ] 301 redirects configured in `next.config.js` for any changed URLs
- [ ] `www` vs non-`www` canonical handled — canonical = `https://www.avenuelocks.com/`
- [ ] No duplicate content — `/emergency-locksmith-brooklyn-ny/` and `/emergency-locksmith-in-brooklyn-ny/` should each have unique content or one canonicalizes to the other

### Metadata (Per Page)
- [ ] Unique `<title>` tag — format: `[Primary Keyword] | Avenue Locksmith Brooklyn`
- [ ] Unique `<meta name="description">` — 150–160 characters, includes phone or CTA
- [ ] `<link rel="canonical">` on every page
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- [ ] Twitter Card tags

### Performance (Core Web Vitals)
- [ ] LCP < 2.5s — hero images preloaded with `priority` prop on `next/image`
- [ ] CLS < 0.1 — explicit width/height on all images, no layout shifts
- [ ] FID < 100ms — no blocking scripts in `<head>`
- [ ] Fonts loaded via `next/font` — no FOUT
- [ ] Phone number tel: links work on mobile

### Sitemaps & Crawlability
- [ ] `next-sitemap` generates XML sitemaps matching all current sitemap URLs
- [ ] Sitemap submitted to Google Search Console
- [ ] `robots.txt` allows all crawlers, blocks `/api/` routes
- [ ] Breadcrumb navigation on all pages below root

### GSC Zero-Error Requirements
- [ ] No 404s — every existing URL returns 200 or proper 301
- [ ] No soft 404s — neighborhood pages have unique content, not empty shells
- [ ] No duplicate title tags
- [ ] No duplicate meta descriptions
- [ ] No missing meta descriptions
- [ ] No mobile usability issues (touch targets ≥ 48px)
- [ ] All images have `alt` text
- [ ] Structured data validates in Rich Results Test

---

## 11. Development Phases

### Phase 1 — Foundation (Week 1–2)
- [ ] Next.js 14 project setup with TypeScript, Tailwind, shadcn/ui
- [ ] `constants.ts` — all business data (phone, address, coordinates)
- [ ] `neighborhoods.ts` — all 50 neighborhood data objects
- [ ] Root layout with Header, Footer, global schema
- [ ] `PhoneButton`, `TrustBar`, `EmergencyCTABanner` components
- [ ] `next-sitemap` configuration

### Phase 2 — Core Pages (Week 2–3)
- [ ] Homepage (Template A)
- [ ] About page
- [ ] Contact page with form
- [ ] Testimonials page
- [ ] Services hub page

### Phase 3 — Service Pages (Week 3–4)
- [ ] All 5 primary service pages (Template B)
- [ ] All 3 lockout sub-pages
- [ ] All 7 security solution sub-pages
- [ ] Schema markup for all service pages

### Phase 4 — Location Pages (Week 4–5)
- [ ] `/locksmith-near-me/` hub page
- [ ] Dynamic `[neighborhood]` template with `generateStaticParams()`
- [ ] All 14 city-level service pages (Template D)
- [ ] All 11 neighborhood emergency pages (Template E)

### Phase 5 — Blog & Categories (Week 5)
- [ ] Blog post template (Template F)
- [ ] Both existing blog posts migrated
- [ ] Both category pages
- [ ] CMS integration (Contentful/Sanity)

### Phase 6 — SEO & Technical QA (Week 6)
- [ ] All schema validated in Rich Results Test
- [ ] GSC crawl — zero errors
- [ ] All 301 redirects verified
- [ ] Lighthouse audit: 90+ on all pages
- [ ] Mobile usability audit
- [ ] Cross-browser testing

### Phase 7 — Launch
- [ ] DNS cutover to Vercel
- [ ] Google Search Console property verified
- [ ] New sitemap submitted to GSC
- [ ] Monitor for crawl errors for 2 weeks post-launch

---

## 12. Individual Page ICP Files Index

> Each ICP file in `/icp/` guides content writing for that page type.

| File | Covers |
|---|---|
| [icp/homepage.md](icp/homepage.md) | Homepage |
| [icp/about.md](icp/about.md) | About page |
| [icp/contact.md](icp/contact.md) | Contact page |
| [icp/testimonials.md](icp/testimonials.md) | Testimonials page |
| [icp/service-residential.md](icp/service-residential.md) | Residential locksmith |
| [icp/service-commercial.md](icp/service-commercial.md) | Commercial locksmith |
| [icp/service-auto.md](icp/service-auto.md) | Auto locksmith |
| [icp/service-emergency.md](icp/service-emergency.md) | Emergency locksmith |
| [icp/service-eviction.md](icp/service-eviction.md) | Eviction locksmith |
| [icp/service-lockout.md](icp/service-lockout.md) | Lockout service hub + sub-pages |
| [icp/service-security-solutions.md](icp/service-security-solutions.md) | Security solutions hub + sub-pages |
| [icp/neighborhood-pages.md](icp/neighborhood-pages.md) | All /locksmith-near-me/[neighborhood]/ pages |
| [icp/city-service-pages.md](icp/city-service-pages.md) | All Brooklyn city-level service pages |
| [icp/emergency-neighborhood-pages.md](icp/emergency-neighborhood-pages.md) | All /emergency-locksmith-[neighborhood]-brooklyn-ny/ pages |
| [icp/blog-posts.md](icp/blog-posts.md) | Blog posts + category pages |
| [icp/new-service-pages.md](icp/new-service-pages.md) | All new pages being added (lock rekey, key duplication, etc.) |

---

## 13. Branding & Design System

> These tokens must be configured in `tailwind.config.js` and used consistently throughout.

### Color Palette

| Role | Name | Hex | Tailwind Config Key | Usage |
|---|---|---|---|---|
| **Primary Brand** | Deep Navy Blue | `#1A2B4A` | `brand-navy` | Header bg, H1/H2 headings, trust anchors |
| **Accent / CTA** | Vibrant Amber/Gold | `#F5A623` | `brand-amber` | ALL phone numbers, all CTA buttons, urgency badges |
| **Secondary Accent** | Safety Orange | `#E8640C` | `brand-orange` | Hover states, emergency banners, "Available 24/7" badges |
| **Background** | Warm Off-White | `#F8F7F4` | `brand-bg` | Page backgrounds, card backgrounds |
| **Surface** | Pure White | `#FFFFFF` | `white` | Card interiors, form backgrounds |
| **Text Primary** | Charcoal | `#1C1C1E` | `brand-text` | Body text, paragraphs |
| **Text Secondary** | Medium Gray | `#6B7280` | `brand-muted` | Subtitles, meta text, breadcrumbs |
| **Border** | Light Gray | `#E5E7EB` | `brand-border` | Card borders, section dividers |
| **Success** | Forest Green | `#16A34A` | `brand-success` | Checkmarks, "verified", availability indicators |
| **Trust** | Steel Blue | `#2563EB` | `brand-trust` | Secondary buttons, links, "Learn More" CTAs |

**Color Rules:**
- Every phone number displayed on the page uses Amber `#F5A623` — it draws the eye
- Header background is always Navy `#1A2B4A` — communicates security/professionalism
- Do NOT use red — signals danger, increases anxiety for emergency visitors
- Do NOT use pure black backgrounds — use Navy instead
- Max 3 colors per section

```js
// tailwind.config.js — extend colors
colors: {
  'brand-navy':   '#1A2B4A',
  'brand-amber':  '#F5A623',
  'brand-orange': '#E8640C',
  'brand-bg':     '#F8F7F4',
  'brand-text':   '#1C1C1E',
  'brand-muted':  '#6B7280',
  'brand-border': '#E5E7EB',
  'brand-success':'#16A34A',
  'brand-trust':  '#2563EB',
}
```

### Typography System

| Role | Font | Weight | Desktop Size | Mobile Size |
|---|---|---|---|---|
| H1 | Montserrat | 700 | 48px / lh 1.15 | 32px |
| H2 | Montserrat | 700 | 36px / lh 1.2 | 26px |
| H3 | Montserrat | 600 | 28px / lh 1.25 | 22px |
| H4–H6 | Montserrat | 600 | 22px / lh 1.3 | 18px |
| Body | Inter | 400 | 17px / lh 1.7 | 16px |
| Body Bold | Inter | 600 | 17px | 16px |
| CTA Button | Montserrat | 700 | 16–18px | 16px |
| Caption/Small | Inter | 400 | 14px | 13px |

```js
// tailwind.config.js — extend fontFamily
fontFamily: {
  heading: ['Montserrat', 'sans-serif'],
  body:    ['Inter', 'sans-serif'],
}
```

Load via `next/font/google`:
```ts
import { Montserrat, Inter } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '600'] })
```

### Logo
- Shield or keyhole icon in Amber `#F5A623` on Navy `#1A2B4A` background
- SVG format — scalable, tiny file size
- White version (`logo-white.svg`) for use on dark/navy backgrounds
- Wordmark: "Avenue Locksmith" with optional tagline "Brooklyn's Trusted Locksmiths"

### Mobile Sticky Bottom Bar
Critical conversion element — displayed only on mobile (`md:hidden`), sticky to bottom of viewport:

```tsx
// components/ui/MobileStickyBar.tsx
// Two buttons side by side:
// Left: "📞 Call Now: (347) 386-7164" → tel: link (brand-amber background)
// Right: "Get Free Quote" → /free-quote/ (brand-navy background)
```

This single component can significantly increase phone call conversions on mobile — do not skip it.

---

## 14. New Pages to Add — Coverage Gaps

These pages do not currently exist but represent real search volume and business opportunities. Add them as part of the rebuild.

### Immediate Priority — High Search Volume

| New URL | Target Keyword | Why It Matters |
|---|---|---|
| `/services/lock-rekey/` | "lock rekey brooklyn" | "Rekey" is searched separately from "lock change" — high homeowner/landlord volume |
| `/services/lock-change/` | "lock change brooklyn" | High-volume, distinct intent from rekey |
| `/services/key-duplication/` | "key duplication brooklyn" | Simple service, very high search volume, walk-in + emergency adjacent |
| `/services/deadbolt-installation/` | "deadbolt installation brooklyn" | High-volume security upgrade search |
| `/services/safe-locksmith/` | "safe locksmith brooklyn", "safe opening brooklyn" | Significant niche, high ticket value |
| `/services/mailbox-lock/` | "mailbox lock brooklyn", "mailbox locksmith brooklyn" | NYC-specific high-volume — apartment buildings everywhere |
| `/free-quote/` | "free locksmith quote brooklyn" | Dedicated conversion page for price-sensitive searchers |
| `/new-tenant-lock-change/` | "lock change new apartment brooklyn", "move in lock change brooklyn" | HUGE NYC-specific term — every new tenant in a rental-heavy city |

### Secondary Priority — Build Over Time

| New URL | Target Keyword | Why It Matters |
|---|---|---|
| `/services/intercom-installation/` | "intercom installation brooklyn" | Many older NYC buildings need intercom replacement — upsell to access control |
| `/services/garage-door-locks/` | "garage door lock brooklyn" | Niche but high value |
| `/services/window-locks/` | "window lock installation brooklyn" | NYC apartment security concern |
| `/services/master-key-system/` | "master key system brooklyn" | Property managers search this specific term |
| `/services/car-key-replacement/` | "car key replacement brooklyn" | Distinct from auto lockout — different customer intent (lost key vs. locked out) |
| `/services/lock-repair/` | "lock repair brooklyn" | Broken/damaged lock — different from replacement |

### New Neighborhood Pages to Add

These Brooklyn neighborhoods have search volume but NO `/locksmith-near-me/` coverage page yet. Note: some have emergency pages but not full neighborhood pages.

| New URL | Neighborhood | Note |
|---|---|---|
| `/locksmith-near-me/dumbo-11201/` | DUMBO | Has emergency page — needs full neighborhood page |
| `/locksmith-near-me/brooklyn-heights-11201/` | Brooklyn Heights | Has emergency page — needs full neighborhood page |
| `/locksmith-near-me/vinegar-hill-11201/` | Vinegar Hill | Has emergency page — needs full neighborhood page |
| `/locksmith-near-me/columbia-street-waterfront-district-11231/` | Columbia Waterfront | Has emergency page — needs full neighborhood page |
| `/locksmith-near-me/downtown-brooklyn-11201/` | Downtown Brooklyn | No coverage at all |
| `/locksmith-near-me/bushwick-11221-11237/` | Bushwick | No coverage — large, high-density neighborhood |
| `/locksmith-near-me/flatbush-av-corridor-11225/` | Flatbush Ave Corridor | No coverage |

### Updated Next.js Architecture for New Pages

Add to `app/(city-service-pages)/` route group:
```
free-quote/
  └── page.tsx
new-tenant-lock-change/
  └── page.tsx
```

Add to `app/services/` folder:
```
lock-rekey/            └── page.tsx
lock-change/           └── page.tsx
key-duplication/       └── page.tsx
deadbolt-installation/ └── page.tsx
safe-locksmith/        └── page.tsx
mailbox-lock/          └── page.tsx
intercom-installation/ └── page.tsx
garage-door-locks/     └── page.tsx
window-locks/          └── page.tsx
master-key-system/     └── page.tsx
car-key-replacement/   └── page.tsx
lock-repair/           └── page.tsx
```

### Updated Phase 3 (Service Pages) to include new pages
New pages are lower priority than existing pages but should be built within the same phase or in a Phase 3b sprint.

---

## 15. Internal Linking Strategy

### The Purpose
Internal links serve two purposes:
1. Help Google discover and understand the relationship between pages
2. Route visitors to the most relevant page for their specific need

### Rules for Every Page

1. **No orphan pages** — Every page must be linked to from at least 3 other pages
2. **Service pages → sub-service pages** — Every service hub links to all its sub-pages
3. **Neighborhood pages → 4–6 adjacent neighborhoods** — Creates a geographic mesh
4. **All neighborhood pages → relevant service pages** — Emergency, residential, or commercial based on neighborhood character
5. **Homepage → every major category** — Services, neighborhoods, about, contact
6. **Use descriptive anchor text** — "emergency locksmith Park Slope" not "click here"
7. **Vary anchor text** — Never link with the exact same anchor text from two different pages to the same destination
8. **City-level pages → neighborhood pages** — Each city-level page links to 3–5 specific neighborhoods
9. **Blog posts → 3–5 internal links** — Must link to at least one service page and one neighborhood page

### Primary Internal Link Hubs (Pages That Receive the Most Links)

| Hub Page | Linked From |
|---|---|
| `/services/emergency-locksmith/` | Homepage, all neighborhood pages, all city landing pages |
| `/locksmith-near-me/` | Homepage, footer, all city landing pages |
| `/services/` | Homepage, header nav, footer |
| `/contact/` | Every page (footer + CTA section) |
| `/testimonials/` | Homepage, About, all service pages |
| `/free-quote/` | All service pages (secondary CTA), MobileStickyBar |

### Footer Link Strategy
Footer renders on every page — footer links are the most distributed internal links on the site.

**Footer must include:**
- 7 most important service pages (including emergency at top)
- 6 most important neighborhood pages (rotate based on traffic)
- Contact page
- Free Quote page
- Legal pages
- `sitemap.xml` link (helps crawlers and users find the full sitemap)

### `ItemList` Schema on Hub Pages
Hub pages (Services hub, Locksmith Near Me hub, Security Solutions hub) must include `ItemList` schema listing all child pages with their URLs. This helps Google understand the site hierarchy.

### Keyword Cannibalization Prevention
Each page targets a DISTINCT primary keyword. Two pages should not compete for the same primary keyword.

**Problem pair example:**
- `/services/emergency-locksmith/` → targets "emergency locksmith brooklyn"
- `/emergency-locksmith-brooklyn-ny/` → targets "emergency locksmith brooklyn ny"

These can coexist ONLY if content is meaningfully different (service detail page vs. city landing page with different angles). If they would produce duplicate content, 301 redirect the lower-traffic URL to the stronger one.

**Check all duplicate pairs in GSC before launch:**
- `/automotive-locksmith-in-brooklyn-ny/` vs `/automotive-locksmith-brooklyn-ny/`
- `/emergency-locksmith-in-brooklyn-ny/` vs `/emergency-locksmith-brooklyn-ny/`
- `/residential-locksmith-brooklyn-ny/` vs `/services/residential-locksmith/`
- `/lockout-service-in-brooklyn-ny/` vs `/services/lockout-service/`

---

## 16. Google Business Profile & Local Citations

### Google Business Profile (GBP) — Must Match Website Exactly

| Field | Value |
|---|---|
| **Business Name** | Avenue Locksmith *(exact — no keyword stuffing)* |
| **Primary Category** | Locksmith |
| **Secondary Category** | Security System Installer |
| **Phone** | (347) 386-7164 *(must match website exactly)* |
| **Website** | https://www.avenuelocks.com *(with www)* |
| **Hours** | Open 24 hours, 7 days a week |
| **Service Area** | Add all Brooklyn neighborhoods individually |
| **Description** | 750 characters, includes primary keywords naturally |

**GBP Actions After Launch:**
- Upload 10+ real photos: technician at work, service van, before/after lock work, tools
- List every service from the services menu
- Post weekly Google Posts (promotions, tips, service highlights)
- After every job: send customer a direct link to leave a Google Review
- Respond to every review (positive and negative) within 48 hours
- **Never offer incentives for reviews** — violates Google TOS

### NAP Consistency — Critical
The business name, address/service area, and phone number must be IDENTICAL across every platform:
- Website (every page footer)
- Google Business Profile
- Yelp
- BBB (Better Business Bureau)
- All directory listings

Even small variations ("Ave Locksmith" vs "Avenue Locksmith", or "(347)" vs "347-") can hurt local rankings.

### Local Citation Directories (Submit for Free)
| Directory | Priority |
|---|---|
| Google Business Profile | Already done — keep updated |
| Bing Places for Business | High |
| Apple Maps Connect | High |
| Yelp | High |
| Better Business Bureau | High |
| Facebook Business | High |
| Angi (Angie's List) | Medium |
| HomeAdvisor | Medium |
| Thumbtack | Medium |
| Houzz | Low |
| Porch | Low |

---

## 17. Forms Strategy

Three form types are needed across the site. In Next.js, these are Server Actions (no PHP — use `action=` on `<form>` pointing to a Server Action, or an API route).

### Form 1: Contact Form (`/contact/`)
Fields: Name*, Phone*, Email, Service Type (dropdown), Message
→ Sends email to info@avenuelocks.com via transactional email (Resend or SendGrid)
→ On success: show inline success message with "For immediate help, call (347) 386-7164"

### Form 2: Free Quote Form (`/free-quote/`)
More detailed than contact form.
Fields: Name*, Phone*, Email, Service Type* (detailed dropdown), Address/Neighborhood, Urgency (ASAP / Today / This Week / Just Planning), Message
→ Quote submissions receive higher priority in inbox
→ Dedicated `/free-quote/` page — also accessible via "Get Free Quote" CTA in MobileStickyBar

### Form 3: Callback Request (Modal/Sidebar on Service & Neighborhood Pages)
Minimal — low friction, high conversion.
Fields: Name*, Phone*, Best Time to Call (Morning / Afternoon / Evening / Anytime)
→ Triggered by "Request a Callback" button
→ Appears as a modal overlay or slide-in panel — does NOT require page navigation
→ Subject line in email: "Callback Request — [Name] — [Phone]"

### Form Implementation Notes
- All forms: honeypot field (hidden input `name="website_url"` — bots fill it in, humans don't)
- Phone field: `type="tel"` — shows numeric keypad on mobile
- CSRF protection via Next.js Server Action token
- On error: inline error message — NOT a redirect
- On success: inline success message — NOT a redirect (maintain page context)
- "For emergencies, please call us directly" note on all non-emergency form pages

### Email Provider
Use **Resend** (resend.com) or **SendGrid** for transactional email — Next.js `nodemailer` + `resend` SDK is the standard pattern. Do NOT rely on basic `mail()` equivalent — use a proper transactional email service for deliverability.

---

## 18. Maintenance SOP

### Weekly
- Check Google Search Console for new errors or crawl issues
- Post a new Google Business Profile post
- Respond to any new reviews (target: within 48 hours)

### Monthly
- Review top 10 pages in GA4 for traffic changes
- Check for broken links (use Screaming Frog or Ahrefs)
- Refresh/improve FAQs on top-performing pages based on new customer questions
- Update `next-sitemap` configuration if new pages were added
- Resubmit sitemap to GSC if major changes were made

### Adding a New Page (Procedure)
1. Create the page file in the correct `app/` subdirectory
2. Set `generateMetadata()` — unique title, description, canonical
3. Add inline JSON-LD schema specific to the page
4. Add internal links TO this page from at least 3 existing pages
5. Add the URL to `next-sitemap.config.js` if it needs custom priority/changefreq
6. Submit the new URL for indexing in Google Search Console

### Emergency Content Updates (Phone Number, Address, Hours)
Because the layout is in `app/layout.tsx` and a shared `constants.ts` file, any business info change is a one-line edit in `lib/constants.ts`:

```ts
// lib/constants.ts — single source of truth
export const BUSINESS = {
  name: 'Avenue Locksmith',
  phone: '(347) 386-7164',
  phoneRaw: '3473867164',
  email: 'info@avenuelocks.com',
  address: '973 E 55th St, Brooklyn, NY 11234',
  lat: 40.6292,
  lng: -73.9442,
} as const
```

Changing the phone number here updates it on every page instantly — no manual find/replace across 127 files.

### Content Tone Reminders (Appendix)

**Voice:** Professional but approachable. Think: the most knowledgeable neighbor you have who also happens to be a licensed locksmith.

| Page Type | Tone |
|---|---|
| Emergency | Calm, reassuring, direct — "We're on our way." |
| Residential | Friendly, helpful, educational |
| Commercial | Professional, efficiency-focused |
| Security Solutions | Informative, expert-led, consultative |
| Neighborhood | Local, familiar, personalized |
| Eviction | Legal-aware, professional, discreet |

**Words to USE:** fast, reliable, licensed, insured, upfront pricing, no hidden fees, Brooklyn, local, experienced, 24/7, available now, trusted, professional

**Words to AVOID:**
- "cheap" → use "affordable" or "competitive pricing"
- "best in New York" → unverifiable claim, Google flags as E-E-A-T red flag
- "guaranteed cheapest" → same issue
- "free" → only use if you actually offer it

---

## 19. Additional Schema Types (Supplement to Section 6)

These schema types were missing from the initial schema section and must be implemented:

### `ItemList` — Hub Pages
Used on: Services hub, Locksmith Near Me hub, Security Solutions hub, Blog category pages
```json
{
  "@type": "ItemList",
  "name": "Locksmith Services",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "url": "https://www.avenuelocks.com/services/emergency-locksmith/" },
    { "@type": "ListItem", "position": 2, "url": "https://www.avenuelocks.com/services/residential-locksmith/" }
  ]
}
```

### `BlogPosting` — Blog Posts
```json
{
  "@type": "BlogPosting",
  "headline": "[Post Title]",
  "author": { "@type": "Organization", "name": "Avenue Locksmith", "@id": "https://www.avenuelocks.com/#business" },
  "publisher": { "@type": "Organization", "name": "Avenue Locksmith", "@id": "https://www.avenuelocks.com/#business" },
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "url": "[Post URL]"
}
```

### `WebPage` — Legal Pages
```json
{
  "@type": "WebPage",
  "name": "Privacy Policy — Avenue Locksmith",
  "url": "https://www.avenuelocks.com/privacy-policy/",
  "isPartOf": { "@id": "https://www.avenuelocks.com/#website" }
}
```

### `GeoCoordinates` on Neighborhood Pages
Add `geo` to the `Service` schema on every neighborhood page:
```json
"areaServed": {
  "@type": "Place",
  "name": "Park Slope",
  "address": {
    "@type": "PostalAddress",
    "postalCode": "11215",
    "addressLocality": "Brooklyn",
    "addressRegion": "NY",
    "addressCountry": "US"
  }
}
```

### `Person` — About Page (when team photos added)
```json
{
  "@type": "Person",
  "name": "[Technician Name]",
  "jobTitle": "Licensed Locksmith",
  "worksFor": { "@id": "https://www.avenuelocks.com/#business" }
}
```

### `@id` Pattern — Connect Schemas Across Pages
Use `"@id": "https://www.avenuelocks.com/#business"` as a reference in all Service and other schemas so Google understands every page is part of the same entity. This is already added to the global LocalBusiness schema in Section 6.

---

*End of Master Plan — Avenue Locksmith Next.js Rebuild*
*Version 2.0 — Updated with gaps from old HTML/PHP plan*
