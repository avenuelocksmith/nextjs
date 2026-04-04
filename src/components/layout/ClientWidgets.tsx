'use client'

import dynamic from 'next/dynamic'

// ssr: false is only valid inside a Client Component — hence this file exists.
// layout.tsx (Server Component) imports these two wrappers instead of the
// individual components directly.

const WelcomeBackBar = dynamic(
  () => import('@/components/ui/WelcomeBackBar').then(m => ({ default: m.WelcomeBackBar })),
  { ssr: false }
)
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
const ScrollDepthCTA = dynamic(
  () => import('@/components/ui/ScrollDepthCTA').then(m => ({ default: m.ScrollDepthCTA })),
  { ssr: false }
)

/** Renders between <Header> and <main> */
export function ClientTopWidgets() {
  return <WelcomeBackBar />
}

/** Renders after <Footer> */
export function ClientBottomWidgets() {
  return (
    <>
      <MobileStickyCTA />
      <RecentCallTicker />
      <ExitIntentModal />
      <LiveChat />
      <ScrollDepthCTA />
    </>
  )
}
