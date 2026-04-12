'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react'
import { BUSINESS, FOOTER_SERVICE_LINKS, FOOTER_LOCATION_LINKS } from '@/lib/constants'
import { useAvailability } from '@/hooks/useAvailability'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const afterHours = useAvailability()

  return (
    <footer className="bg-brand-charcoal text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand + Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4" aria-label="Avenue Locksmith — Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gallery/avenue-locksmith-logo.svg"
                alt=""
                width={44}
                height={44}
                className="w-11 h-11"
                aria-hidden="true"
              />
              <span className="text-2xl font-bold text-white tracking-tight">
                Avenue <span className="text-brand-amber">Locksmith</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm mb-5 leading-relaxed">
              Brooklyn&apos;s trusted 24/7 locksmith. Licensed, bonded &amp; insured.
              Typical 15–25 minute emergency response across all five NYC boroughs.
            </p>
            <div className="flex items-center gap-1.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-brand-amber fill-brand-amber" aria-hidden="true" />
              ))}
              <span className="text-sm text-white/80 ml-1">
                {BUSINESS.rating}/5 ({BUSINESS.reviewCount}+ reviews)
              </span>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 text-brand-amber hover:text-white transition-colors font-semibold"
              >
                <Phone size={15} aria-hidden="true" />
                <span>{BUSINESS.phone}</span>
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Mail size={15} aria-hidden="true" />
                <span>{BUSINESS.email}</span>
              </a>
              <div className="flex items-start gap-2 text-white/70">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Mobile service — Brooklyn &amp; all NYC boroughs</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Clock size={15} aria-hidden="true" />
                <span>{afterHours === false ? 'Open Now — 365 Days a Year' : 'Open 24/7 — 365 days a year'}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Our Services</h3>
            <ul className="space-y-2" role="list">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-brand-amber text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Service Areas</h3>
            <ul className="space-y-2" role="list">
              {FOOTER_LOCATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-brand-amber text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Emergency CTA */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              {afterHours === false ? 'Emergency Service' : '24/7 Emergency'}
            </h3>
            <div className="bg-white/10 rounded-xl p-5">
              <p className="text-white/90 text-sm mb-4 leading-relaxed">
                Locked out? Car key lost? Security breach? We respond in 15–25 minutes — any time, any day.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 btn-gradient-amber text-brand-charcoal font-bold px-5 py-3 rounded-xl transition-all text-sm w-full"
              >
                <Phone size={16} aria-hidden="true" />
                <span>Call {BUSINESS.phone}</span>
              </a>
              <Link
                href="/free-quote/"
                className="flex items-center justify-center mt-2 text-white/70 hover:text-white text-sm transition-colors underline underline-offset-2"
              >
                Get a free quote →
              </Link>
            </div>

            <div className="mt-6 space-y-2 text-sm">
              <h3 className="font-bold text-white text-sm uppercase tracking-wide mb-3">Quick Links</h3>
              <Link href="/about/" className="block text-white/70 hover:text-brand-amber transition-colors">About Us</Link>
              <Link href="/testimonials/" className="block text-white/70 hover:text-brand-amber transition-colors">Testimonials</Link>
              <Link href="/contact/" className="block text-white/70 hover:text-brand-amber transition-colors">Contact</Link>
              <Link href="/free-quote/" className="block text-white/70 hover:text-brand-amber transition-colors">Free Quote</Link>
              <Link href="/new-tenant-lock-change/" className="block text-white/70 hover:text-brand-amber transition-colors">New Tenant Lock Change</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {currentYear} {BUSINESS.name}. All rights reserved. Licensed Locksmith — Brooklyn, NY</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service/" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/accessibility-statement/" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
