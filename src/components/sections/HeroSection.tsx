'use client'

import { PhoneButton } from '@/components/ui/PhoneButton'
import { TrustBar } from '@/components/ui/TrustBar'
import { LiveActivityBar } from '@/components/ui/LiveActivityBar'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useAvailability } from '@/hooks/useAvailability'

interface HeroSectionProps {
  h1: string
  subheadline?: string
  variant?: 'homepage' | 'service' | 'emergency' | 'neighborhood'
  className?: string
  showTrustBar?: boolean
  showLiveActivity?: boolean
  ctaLabel?: string
}

export function HeroSection({
  h1,
  subheadline,
  variant = 'service',
  className,
  showTrustBar = true,
  showLiveActivity = false,
  ctaLabel,
}: HeroSectionProps) {
  const isEmergency = variant === 'emergency'
  const isHomepage = variant === 'homepage'
  const afterHours = useAvailability()

  const emergencyBadgeText = afterHours === false
    ? 'Emergency Service — Available Now'
    : 'Emergency Service — We Answer 24/7'

  const defaultCtaLabel = isEmergency
    ? (afterHours === false ? 'Call Now — We\'re Open' : 'Call Now — We Answer 24/7')
    : 'Call (347) 386-7164'

  return (
    <section
      className={cn(
        'relative bg-brand-navy text-white',
        isHomepage ? 'py-16 md:py-24' : 'py-12 md:py-16',
        className
      )}
    >
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-[#0d1a2e] opacity-90" aria-hidden="true" />

      <div className="relative container mx-auto px-4 text-center">
        {isEmergency && (
          <div className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <span className="animate-pulse-slow w-2 h-2 bg-white rounded-full" aria-hidden="true" />
            {emergencyBadgeText}
          </div>
        )}

        <h1
          className={cn(
            'font-bold leading-tight mb-4 text-white',
            isHomepage
              ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
              : isEmergency
              ? 'text-2xl sm:text-3xl md:text-4xl'
              : 'text-2xl sm:text-3xl md:text-4xl'
          )}
        >
          {h1}
        </h1>

        {subheadline && (
          <p
            className={cn(
              'text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed',
              isHomepage ? 'text-lg md:text-xl' : 'text-base md:text-lg'
            )}
          >
            {subheadline}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <PhoneButton
            variant="primary"
            size={isHomepage ? 'xl' : 'lg'}
            label={ctaLabel ?? defaultCtaLabel}
          />
          {!isEmergency && (
            <Link
              href="/free-quote/"
              className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/40 text-white hover:border-white hover:bg-white/10 rounded-lg font-semibold text-base transition-all duration-200"
            >
              Get a Free Quote
            </Link>
          )}
        </div>

        {showLiveActivity && <LiveActivityBar />}

        {showTrustBar && (
          <div className="border-t border-white/10 pt-6 mt-6">
            <TrustBar variant="dark" />
          </div>
        )}
      </div>
    </section>
  )
}
