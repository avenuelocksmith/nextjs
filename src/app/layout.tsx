import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import dynamic from 'next/dynamic'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/schema/JsonLd'
import { getLocalBusinessSchema, getOrganizationSchema } from '@/lib/schema'
import { BUSINESS } from '@/lib/constants'
import { VisitorTypeProvider } from '@/context/VisitorTypeContext'

// Non-critical UI components — deferred so they don't block initial paint
const MobileStickyCTA = dynamic(
  () => import('@/components/ui/MobileStickyCTA').then(m => ({ default: m.MobileStickyCTA })),
  { ssr: false }
)
const RecentCallTicker = dynamic(
  () => import('@/components/ui/RecentCallTicker').then(m => ({ default: m.RecentCallTicker })),
  { ssr: false }
)
const ExitIntentModal = dynamic(
  () => import('@/components/ui/ExitIntentModal').then(m => ({ default: m.ExitIntentModal })),
  { ssr: false }
)
const LiveChat = dynamic(
  () => import('@/components/ui/LiveChat').then(m => ({ default: m.LiveChat })),
  { ssr: false }
)
const WelcomeBackBar = dynamic(
  () => import('@/components/ui/WelcomeBackBar').then(m => ({ default: m.WelcomeBackBar })),
  { ssr: false }
)
const ScrollDepthCTA = dynamic(
  () => import('@/components/ui/ScrollDepthCTA').then(m => ({ default: m.ScrollDepthCTA })),
  { ssr: false }
)

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
        <VisitorTypeProvider>
          <Header />
          <WelcomeBackBar />
          <main className="flex-1 pb-16 md:pb-0" id="main-content">
            {children}
          </main>
          <Footer />
          <MobileStickyCTA />
          <RecentCallTicker />
          <ExitIntentModal />
          <LiveChat />
          <ScrollDepthCTA />
        </VisitorTypeProvider>
      </body>
    </html>
  )
}
