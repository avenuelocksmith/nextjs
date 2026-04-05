'use client'

import { PhoneButton } from '@/components/ui/PhoneButton'
import { TrustBar } from '@/components/ui/TrustBar'
import { LiveActivityBar } from '@/components/ui/LiveActivityBar'
import { HeroVisitorStrip } from '@/components/ui/HeroVisitorStrip'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Star, Shield, Clock, Phone, Award } from 'lucide-react'
import { useAvailability } from '@/hooks/useAvailability'
import { useVisitorType } from '@/hooks/useVisitorType'
import { BUSINESS } from '@/lib/constants'

interface HeroSectionProps {
  h1: string
  subheadline?: string
  variant?: 'homepage' | 'service' | 'emergency' | 'neighborhood'
  className?: string
  showTrustBar?: boolean
  showLiveActivity?: boolean
  ctaLabel?: string
}

function TrustClusterCard({ afterHours }: { afterHours: boolean | null }) {
  const items = [
    {
      icon: Star,
      label: `${BUSINESS.rating} / 5 Stars`,
      sub: `${BUSINESS.reviewCount}+ verified reviews`,
      fill: true,
    },
    {
      icon: Clock,
      label: '15–25 Min Response',
      sub: 'Emergency guarantee',
      fill: false,
    },
    {
      icon: Shield,
      label: 'Licensed & Insured',
      sub: 'NYC DCWP certified',
      fill: false,
    },
    {
      icon: Award,
      label: `${new Date().getFullYear() - 2010}+ Years Serving Brooklyn`,
      sub: 'Trusted since 2010',
      fill: false,
    },
    {
      icon: Phone,
      label: afterHours === false ? 'Open Right Now' : 'Available 24/7',
      sub: '365 days a year',
      fill: false,
    },
  ]

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 space-y-3.5">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <div key={item.label} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-amber/20 flex items-center justify-center flex-shrink-0">
              <Icon
                size={17}
                className={cn('text-brand-amber', item.fill && 'fill-brand-amber')}
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">{item.label}</p>
              <p className="text-white/55 text-xs leading-tight mt-0.5">{item.sub}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
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
  const { visitorType } = useVisitorType()
  const visitorStripVisible = isHomepage && visitorType === 'returning'

  const emergencyBadgeText = afterHours === false
    ? 'Emergency Service — Available Now'
    : 'Emergency Service — We Answer 24/7'

  const defaultCtaLabel = isEmergency
    ? (afterHours === false ? 'Call Now — We\'re Open' : 'Call Now — We Answer 24/7')
    : 'Call (347) 386-7164'

  return (
    <>
      <section
        className={cn(
          'relative text-white overflow-hidden',
          isHomepage
            ? (visitorStripVisible ? 'py-4 md:py-10' : 'py-8 md:py-16')
            : 'py-5 md:py-10',
          className
        )}
        style={{ background: 'linear-gradient(135deg, #111827 0%, #1a2535 60%, #1f2d40 100%)' }}
      >
        {/* Subtle dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-4">
          {isHomepage && <HeroVisitorStrip />}

          {isEmergency && (
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 bg-brand-emergency/90 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                <span className="animate-pulse-slow w-2 h-2 bg-white rounded-full" aria-hidden="true" />
                {emergencyBadgeText}
              </div>
            </div>
          )}

          {/* Homepage: split layout on desktop */}
          {isHomepage ? (
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              {/* Left: text + CTAs */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="font-bold leading-tight mb-4 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
                  {h1}
                </h1>

                {subheadline && (
                  <p className="text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6 text-lg md:text-xl">
                    {subheadline}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 mb-8 lg:mb-0">
                  <PhoneButton
                    variant="primary"
                    size="xl"
                    label={ctaLabel ?? defaultCtaLabel}
                  />
                  <Link
                    href="/free-quote/"
                    className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/30 text-white hover:border-white/70 hover:bg-white/10 rounded-xl font-semibold text-base transition-all duration-200"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>

              {/* Right: trust cluster card */}
              <div className="lg:w-72 xl:w-80 mt-8 lg:mt-0 flex-shrink-0">
                <TrustClusterCard afterHours={afterHours} />
              </div>
            </div>
          ) : (
            /* Non-homepage: centered layout */
            <div className="text-center">
              <h1
                className={cn(
                  'font-bold leading-tight mb-4 text-white tracking-tight',
                  isEmergency
                    ? 'text-2xl sm:text-3xl md:text-4xl'
                    : 'text-2xl sm:text-3xl md:text-4xl'
                )}
              >
                {h1}
              </h1>

              {subheadline && (
                <p className="text-white/80 max-w-2xl mx-auto leading-relaxed mb-8 text-base md:text-lg">
                  {subheadline}
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                <PhoneButton
                  variant="primary"
                  size="lg"
                  label={ctaLabel ?? defaultCtaLabel}
                />
                {!isEmergency && (
                  <Link
                    href="/free-quote/"
                    className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/30 text-white hover:border-white/70 hover:bg-white/10 rounded-xl font-semibold text-base transition-all duration-200"
                  >
                    Get a Free Quote
                  </Link>
                )}
              </div>
            </div>
          )}

          {showLiveActivity && <LiveActivityBar />}
        </div>
      </section>

      {showTrustBar && (
        <div className="bg-brand-slate py-4">
          <div className="container mx-auto px-4">
            <TrustBar />
          </div>
        </div>
      )}
    </>
  )
}
