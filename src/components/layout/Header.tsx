'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown, Home, Building, Car, Zap, Key, Shield, Lock, Cpu, Eye, Fingerprint, DoorOpen, RefreshCw, ArrowLeftRight, ShieldCheck, Copy, Archive, Mail, UserCheck, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BUSINESS, NAV_LINKS, AREAS_MEGA_MENU } from '@/lib/constants'
import { useAvailability } from '@/hooks/useAvailability'
import { LiveActivityBar } from '@/components/ui/LiveActivityBar'

const MEGA_MENU = [
  {
    heading: 'Core Services',
    items: [
      { label: 'Residential Locksmith', href: '/services/residential-locksmith/', icon: Home, desc: 'Home lockouts, lock installs & rekeying' },
      { label: 'Commercial Locksmith', href: '/services/commercial-locksmith/', icon: Building, desc: 'Master keys, access control, office security' },
      { label: 'Auto Locksmith', href: '/services/auto-locksmith/', icon: Car, desc: 'Car lockouts, key fob & transponder keys' },
      { label: 'Emergency Locksmith', href: '/services/emergency-locksmith/', icon: Zap, desc: '24/7 — typical 15–25 minute arrival' },
      { label: 'Eviction Locksmith', href: '/services/eviction-locksmith/', icon: Key, desc: 'Legal lock changes for NYC landlords' },
      { label: 'Lockout Service', href: '/services/lockout-service/', icon: DoorOpen, desc: 'Home, car & business lockouts' },
    ],
  },
  {
    heading: 'Specialized Services',
    items: [
      { label: 'Lock Rekeying', href: '/services/lock-rekey/', icon: RefreshCw, desc: 'Old keys stop working, lock stays' },
      { label: 'Lock Change', href: '/services/lock-change/', icon: ArrowLeftRight, desc: 'Full hardware replacement, any brand' },
      { label: 'Deadbolt Installation', href: '/services/deadbolt-installation/', icon: ShieldCheck, desc: 'ANSI Grade 1 & Grade 2 deadbolts' },
      { label: 'Key Duplication', href: '/services/key-duplication/', icon: Copy, desc: 'House, office & high-security keys' },
      { label: 'Safe Locksmith', href: '/services/safe-locksmith/', icon: Archive, desc: 'Safe opening, combo change & install' },
      { label: 'Mailbox Lock', href: '/services/mailbox-lock/', icon: Mail, desc: 'Apartment mailbox replacement' },
      { label: 'New Tenant Lock Change', href: '/services/new-tenant-lock-change/', icon: UserCheck, desc: 'Move-in security — most popular' },
    ],
  },
  {
    heading: 'Security Solutions',
    items: [
      { label: 'High-Security Locks', href: '/services/security-solutions/high-security-locks/', icon: Lock, desc: 'Medeco, Mul-T-Lock — pick & drill resistant' },
      { label: 'Access Control', href: '/services/security-solutions/access-control-systems/', icon: Cpu, desc: 'Keycard, fob & cloud-based entry' },
      { label: 'CCTV Installation', href: '/services/security-solutions/cctv-installation/', icon: Eye, desc: 'HD & 4K security cameras' },
      { label: 'Smart Locks', href: '/services/security-solutions/smart-locks/', icon: Shield, desc: 'August, Yale, Schlage — app control' },
      { label: 'Keyless Entry', href: '/services/security-solutions/keyless-entry-system/', icon: Key, desc: 'Keypad locks for rentals & Airbnb' },
      { label: 'Biometric Access', href: '/services/security-solutions/biometric-access-system/', icon: Fingerprint, desc: 'Fingerprint & facial recognition entry' },
      { label: 'Door Reinforcement', href: '/services/security-solutions/reinforced-door-frame-system/', icon: DoorOpen, desc: 'Kick-in prevention & door jamb armor' },
    ],
  },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const areasCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const afterHours = useAvailability()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function openMega() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    // Only one mega-menu open at a time
    if (areasCloseTimer.current) clearTimeout(areasCloseTimer.current)
    setAreasOpen(false)
    setMegaOpen(true)
  }

  function closeMega() {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120)
  }

  function openAreas() {
    if (areasCloseTimer.current) clearTimeout(areasCloseTimer.current)
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMegaOpen(false)
    setAreasOpen(true)
  }

  function closeAreas() {
    areasCloseTimer.current = setTimeout(() => setAreasOpen(false), 120)
  }

  function closeMobileMenu() {
    setMobileOpen(false)
    setMobileServicesOpen(false)
    setMobileAreasOpen(false)
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-all duration-200',
        scrolled
          ? 'bg-brand-charcoal/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-brand-charcoal shadow-lg'
      )}
    >
      {/* Amber top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-brand-amber/0 via-brand-amber to-brand-amber/0" aria-hidden="true" />

      {/* Top bar — live dispatch activity */}
      <div className="bg-brand-charcoal border-b border-white/10 min-h-[28px]">
        <LiveActivityBar variant="header" />
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 py-3" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Avenue Locksmith — Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gallery/avenue-locksmith-logo.svg"
              alt=""
              width={40}
              height={40}
              className="w-9 h-9 md:w-10 md:h-10"
              aria-hidden="true"
            />
            <span className="text-2xl font-bold text-white tracking-tight">
              Avenue <span className="text-brand-amber">Locksmith</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6" role="list">
            {NAV_LINKS.map((link) => {
              if (link.label === 'Services') {
                return (
                  <li
                    key={link.href}
                    className="relative"
                    onMouseEnter={openMega}
                    onMouseLeave={closeMega}
                  >
                    <button
                      aria-haspopup="true"
                      aria-expanded={megaOpen}
                      className={cn(
                        'flex items-center gap-1 text-sm font-medium transition-colors',
                        megaOpen ? 'text-brand-amber' : 'text-white/80 hover:text-brand-amber'
                      )}
                    >
                      Services
                      <ChevronDown
                        size={14}
                        className={cn('transition-transform duration-200', megaOpen && 'rotate-180')}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Mega menu panel */}
                    {megaOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[780px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-3 gap-6"
                        role="menu"
                        onMouseEnter={openMega}
                        onMouseLeave={closeMega}
                      >
                        {/* Arrow */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />

                        {MEGA_MENU.map((col) => (
                          <div key={col.heading}>
                            <p className="text-xs font-bold text-brand-amber uppercase tracking-wider mb-3 px-1">
                              {col.heading}
                            </p>
                            <ul className="space-y-0.5" role="list">
                              {col.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    role="menuitem"
                                    onClick={() => setMegaOpen(false)}
                                    className="flex items-start gap-2.5 px-2 py-2 rounded-lg hover:bg-gray-50 group transition-colors"
                                  >
                                    <item.icon
                                      size={15}
                                      className="text-brand-amber shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                                      aria-hidden="true"
                                    />
                                    <div>
                                      <p className="text-sm font-semibold text-brand-charcoal leading-tight group-hover:text-brand-amber transition-colors">
                                        {item.label}
                                      </p>
                                      <p className="text-xs text-brand-muted leading-snug mt-0.5">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            {col.heading === 'Core Services' && (
                              <Link
                                href="/services/"
                                onClick={() => setMegaOpen(false)}
                                className="inline-flex items-center gap-1 mt-3 px-2 text-xs font-bold text-brand-amber hover:underline"
                              >
                                View all services →
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                )
              }

              if (link.label === 'Service Areas') {
                return (
                  <li
                    key={link.href}
                    className="relative"
                    onMouseEnter={openAreas}
                    onMouseLeave={closeAreas}
                  >
                    <button
                      aria-haspopup="true"
                      aria-expanded={areasOpen}
                      className={cn(
                        'flex items-center gap-1 text-sm font-medium transition-colors',
                        areasOpen ? 'text-brand-amber' : 'text-white/80 hover:text-brand-amber'
                      )}
                    >
                      Service Areas
                      <ChevronDown
                        size={14}
                        className={cn('transition-transform duration-200', areasOpen && 'rotate-180')}
                        aria-hidden="true"
                      />
                    </button>

                    {areasOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[760px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-3 gap-6"
                        role="menu"
                        onMouseEnter={openAreas}
                        onMouseLeave={closeAreas}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />

                        {AREAS_MEGA_MENU.map((col) => (
                          <div key={col.heading}>
                            <p className="text-xs font-bold text-brand-amber uppercase tracking-wider mb-3 px-1">
                              {col.heading}
                            </p>
                            <ul className="space-y-0.5" role="list">
                              {col.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    role="menuitem"
                                    onClick={() => setAreasOpen(false)}
                                    className="flex items-start gap-2.5 px-2 py-2 rounded-lg hover:bg-gray-50 group transition-colors"
                                  >
                                    <MapPin
                                      size={14}
                                      className="text-brand-amber shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                                      aria-hidden="true"
                                    />
                                    <div>
                                      <p className="text-sm font-semibold text-brand-charcoal leading-tight group-hover:text-brand-amber transition-colors">
                                        {item.label}
                                      </p>
                                      <p className="text-xs text-brand-muted leading-snug mt-0.5">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            {col.heading === 'North Brooklyn' && (
                              <Link
                                href="/locksmith-near-me/"
                                onClick={() => setAreasOpen(false)}
                                className="inline-flex items-center gap-1 mt-3 px-2 text-xs font-bold text-brand-amber hover:underline"
                              >
                                View all neighborhoods →
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                )
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-brand-amber text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <a
            href={BUSINESS.phoneHref}
            className="hidden md:flex items-center gap-2 btn-gradient-amber text-brand-charcoal font-bold px-5 py-2.5 rounded-xl transition-all text-sm"
            aria-label={`Call now at ${BUSINESS.phone}`}
          >
            <Phone size={16} aria-hidden="true" />
            <span>{afterHours === false ? 'Call Now — Open Now' : 'Call Now — 24/7'}</span>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 tap-target"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            mobileOpen ? 'max-h-[calc(100vh-120px)] overflow-y-auto opacity-100 pt-4' : 'max-h-0 opacity-0'
          )}
        >
          <ul className="flex flex-col gap-1 pb-4" role="list">
            {NAV_LINKS.map((link) => {
              if (link.label === 'Services') {
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-3 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium tap-target"
                      aria-expanded={mobileServicesOpen}
                    >
                      <span>Services</span>
                      <ChevronDown
                        size={16}
                        className={cn('transition-transform duration-200', mobileServicesOpen && 'rotate-180')}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        mobileServicesOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                      )}
                    >
                      <div className="pl-3 pt-1 pb-2 space-y-3">
                        {MEGA_MENU.map((col) => (
                          <div key={col.heading}>
                            <p className="text-[10px] font-bold text-brand-amber uppercase tracking-wider px-3 py-1">
                              {col.heading}
                            </p>
                            <ul role="list">
                              {col.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-2 px-3 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm tap-target"
                                  >
                                    <item.icon size={13} className="text-brand-amber shrink-0" aria-hidden="true" />
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Link
                          href="/services/"
                          onClick={closeMobileMenu}
                          className="flex items-center px-3 py-3 text-brand-amber font-bold text-sm hover:underline tap-target"
                        >
                          View all services →
                        </Link>
                      </div>
                    </div>
                  </li>
                )
              }

              if (link.label === 'Service Areas') {
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                      className="w-full flex items-center justify-between px-3 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium tap-target"
                      aria-expanded={mobileAreasOpen}
                    >
                      <span>Service Areas</span>
                      <ChevronDown
                        size={16}
                        className={cn('transition-transform duration-200', mobileAreasOpen && 'rotate-180')}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        mobileAreasOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                      )}
                    >
                      <div className="pl-3 pt-1 pb-2 space-y-3">
                        {AREAS_MEGA_MENU.map((col) => (
                          <div key={col.heading}>
                            <p className="text-[10px] font-bold text-brand-amber uppercase tracking-wider px-3 py-1">
                              {col.heading}
                            </p>
                            <ul role="list">
                              {col.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-2 px-3 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm tap-target"
                                  >
                                    <MapPin size={13} className="text-brand-amber shrink-0" aria-hidden="true" />
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Link
                          href="/locksmith-near-me/"
                          onClick={closeMobileMenu}
                          className="flex items-center px-3 py-3 text-brand-amber font-bold text-sm hover:underline tap-target"
                        >
                          View all neighborhoods →
                        </Link>
                      </div>
                    </div>
                  </li>
                )
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center px-3 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium tap-target"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}

            <li className="pt-2">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 btn-gradient-amber text-brand-charcoal font-bold px-5 py-3 rounded-xl transition-all tap-target"
              >
                <Phone size={18} aria-hidden="true" />
                <span className="whitespace-nowrap">Call {BUSINESS.phone}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
