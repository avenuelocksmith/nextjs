import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileStickyCTA } from '@/components/ui/MobileStickyCTA'
import { RecentCallTicker } from '@/components/ui/RecentCallTicker'
import { ExitIntentModal } from '@/components/ui/ExitIntentModal'
import { LiveChat } from '@/components/ui/LiveChat'
import { JsonLd } from '@/components/schema/JsonLd'
import { getLocalBusinessSchema, getOrganizationSchema } from '@/lib/schema'
import { BUSINESS } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: `24/7 Locksmith in Brooklyn, NY — ${BUSINESS.name} | ${BUSINESS.phone}`,
    template: `%s | ${BUSINESS.name} Brooklyn`,
  },
  description: `Brooklyn's trusted 24/7 locksmith. Licensed & insured. 15–25 minute emergency response. Residential, commercial & auto locksmith services. Call ${BUSINESS.phone}.`,
  openGraph: {
    siteName: BUSINESS.name,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg">
        <JsonLd data={getLocalBusinessSchema()} />
        <JsonLd data={getOrganizationSchema()} />
        <Header />
        <main className="flex-1 pb-16 md:pb-0" id="main-content">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
        <RecentCallTicker />
        <ExitIntentModal />
        <LiveChat />
      </body>
    </html>
  )
}
