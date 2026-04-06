'use client'

import { PhoneButton } from '@/components/ui/PhoneButton'
import { TrustBar } from '@/components/ui/TrustBar'
import { LiveActivityBar } from '@/components/ui/LiveActivityBar'
import { HeroVisitorStrip } from '@/components/ui/HeroVisitorStrip'
import { HeroTrustLogos } from '@/components/ui/HeroTrustLogos'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Phone, CheckCircle, Loader2 } from 'lucide-react'
import { useAvailability } from '@/hooks/useAvailability'
import { useVisitorType } from '@/hooks/useVisitorType'
import { BUSINESS } from '@/lib/constants'
import { useState } from 'react'

interface HeroSectionProps {
  h1: string
  subheadline?: string
  variant?: 'homepage' | 'service' | 'emergency' | 'neighborhood'
  className?: string
  showTrustBar?: boolean
  showLiveActivity?: boolean
  ctaLabel?: string
}

function CallbackRequestCard() {
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!phone.trim()) return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phone.trim() }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Request failed')
      }
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      {status === 'success' ? (
        <div className="flex flex-col items-center text-center gap-3 py-4">
          <CheckCircle size={40} className="text-brand-amber" aria-hidden="true" />
          <p className="text-brand-charcoal font-bold text-lg leading-tight">We&apos;ll call you back!</p>
          <p className="text-brand-muted text-sm">
            Our team will reach out to you shortly. For urgent issues, call us now.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 btn-gradient-amber text-brand-charcoal font-bold text-sm px-5 py-2.5 rounded-xl mt-1"
          >
            <Phone size={14} aria-hidden="true" />
            Call Now
          </a>
        </div>
      ) : (
        <>
          <p className="text-brand-charcoal font-bold text-base leading-tight mb-1">
            Request a Callback
          </p>
          <p className="text-brand-muted text-xs mb-4">
            Leave your number — we&apos;ll call you within 5 minutes.
          </p>
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="callback-phone" className="sr-only">
              Your phone number
            </label>
            <input
              id="callback-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(347) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              disabled={status === 'loading'}
              className="w-full bg-brand-bg border border-brand-border text-brand-charcoal placeholder:text-brand-muted rounded-xl px-4 py-3 text-sm mb-3 outline-none focus:border-brand-amber focus:bg-white transition-colors disabled:opacity-60"
            />
            {status === 'error' && (
              <p className="text-red-500 text-xs mb-2">{errorMsg}</p>
            )}
            <button
              type="submit"
              disabled={status === 'loading' || !phone.trim()}
              className="w-full btn-gradient-amber text-brand-charcoal font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={15} className="animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  <Phone size={14} aria-hidden="true" />
                  Call Me Back
                </>
              )}
            </button>
          </form>
          <p className="text-brand-muted text-xs text-center mt-3">
            Or call directly: <a href={BUSINESS.phoneHref} className="text-brand-charcoal/60 hover:text-brand-amber transition-colors">{BUSINESS.phone}</a>
          </p>
        </>
      )}
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
            ? (visitorStripVisible ? 'py-6 md:py-12' : 'py-12 md:py-24')
            : 'py-6 md:py-12',
          className
        )}
        style={{ background: 'linear-gradient(180deg, #111827 0%, #141d2b 100%)' }}
      >
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
                <h1 className="font-bold leading-[1.08] mb-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
                  {h1}
                </h1>

                {subheadline && (
                  <p className="text-white/65 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 text-lg md:text-xl">
                    {subheadline}
                  </p>
                )}

                <div className="[&>div]:justify-center [&>div]:lg:justify-start">
                  <HeroTrustLogos />
                </div>

                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
                  <PhoneButton
                    variant="primary"
                    size="xl"
                    label={ctaLabel ?? defaultCtaLabel}
                  />
                  <Link
                    href="/free-quote/"
                    className="inline-flex items-center justify-center px-7 py-3.5 border border-white/25 text-white/80 hover:border-white/55 hover:text-white rounded-xl font-semibold text-base transition-all duration-200"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>

              {/* Right: callback request form */}
              <div className="lg:w-72 xl:w-80 mt-10 lg:mt-0 flex-shrink-0">
                <CallbackRequestCard />
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
                    className="inline-flex items-center justify-center px-7 py-3.5 border border-white/25 text-white/80 hover:border-white/55 hover:text-white rounded-xl font-semibold text-base transition-all duration-200"
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
