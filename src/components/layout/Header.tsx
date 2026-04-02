'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown, Home, Building, Car, Zap, Key, Shield, Lock, Cpu, Eye, Fingerprint, DoorOpen, RefreshCw, ArrowLeftRight, ShieldCheck, Copy, Archive, Mail, UserCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BUSINESS, NAV_LINKS } from '@/lib/constants'

const MEGA_MENU = [
  {
    heading: 'Core Services',
    items: [
      { label: 'Residential Locksmith', href: '/services/residential-locksmith/', icon: Home, desc: 'Home lockouts, lock installs & rekeying' },
      { label: 'Commercial Locksmith', href: '/services/commercial-locksmith/', icon: Building, desc: 'Master keys, access control, office security' },
      { label: 'Auto Locksmith', href: '/services/auto-locksmith/', icon: Car, desc: 'Car lockouts, key fob & transponder keys' },
      { label: 'Emergency Locksmith', href: '/services/emergency-locksmith/', icon: Zap, desc: '24/7 — 15–25 minute arrival guaranteed' },
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
  const [megaOpen, setMegaOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function openMega() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }

  function closeMega() {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120)
  }

  function closeMobileMenu() {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 bg-brand-navy shadow-lg">
      {/* Top bar */}
      <div className="bg-brand-navy border-b border-white/10">
        <div className="container mx-auto px-4 py-1.5 flex items-center justify-between text-sm">
          <p className="text-white/70 text-xs hidden sm:block">
            Licensed, Bonded &amp; Insured — Brooklyn&apos;s Trusted Locksmith
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-1.5 text-brand-amber font-bold hover:text-white transition-colors ml-auto"
            aria-label={`Call us at ${BUSINESS.phone}`}
          >
            <Phone size={14} aria-hidden="true" />
            <span>{BUSINESS.phone}</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 py-3" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Avenue Locksmith — Home">
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
                                    className="flex items-start gap-2.5 px-2 py-2 rounded-lg hover:bg-brand-bg group transition-colors"
                                  >
                                    <item.icon
                                      size={15}
                                      className="text-brand-amber shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                                      aria-hidden="true"
                                    />
                                    <div>
                                      <p className="text-sm font-semibold text-brand-navy leading-tight group-hover:text-brand-amber transition-colors">
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
            className="hidden md:flex items-center gap-2 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
            aria-label={`Call now at ${BUSINESS.phone}`}
          >
            <Phone size={16} aria-hidden="true" />
            <span>Call Now — 24/7</span>
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
            mobileOpen ? 'max-h-[600px] opacity-100 pt-4' : 'max-h-0 opacity-0'
          )}
        >
          <ul className="flex flex-col gap-1 pb-4" role="list">
            {NAV_LINKS.map((link) => {
              if (link.label === 'Services') {
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
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
                                    className="flex items-center gap-2 px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm"
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
                          className="block px-3 py-2 text-brand-amber font-bold text-sm hover:underline"
                        >
                          View all services →
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
                    className="block px-3 py-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
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
                className="flex items-center justify-center gap-2 bg-brand-amber text-brand-navy font-bold px-5 py-3 rounded-lg transition-colors"
              >
                <Phone size={18} aria-hidden="true" />
                <span>Call {BUSINESS.phone}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
