import Link from 'next/link'
import { ArrowRight, Lock, Key, Home, Building2, Car } from 'lucide-react'
import { cn } from '@/lib/utils'

const SECURITY_TIPS = [
  {
    icon: Home,
    category: 'Home Security',
    tip: 'Rekey every time you move in',
    body: 'Previous tenants, landlords, contractors, or past owners may still have working copies of your current key. Rekeying costs $50–$100 per lock and ensures you\'re the only person who can get in. It\'s the single highest-value security step for any new move-in.',
    href: '/services/lock-rekey/',
    linkLabel: 'Learn about rekeying',
  },
  {
    icon: Lock,
    category: 'Door Hardware',
    tip: 'Upgrade to ANSI Grade 1 deadbolts',
    body: 'The grade-3 deadbolts that come standard on most apartments offer minimal resistance to forced entry. ANSI Grade 1 deadbolts — the commercial standard — can withstand ten times the force. Brands like Schlage B60N or Medeco deadbolts are our most common residential upgrade.',
    href: '/services/deadbolt-installation/',
    linkLabel: 'Deadbolt installation',
  },
  {
    icon: Key,
    category: 'Key Control',
    tip: 'Restrict key duplication with patented keys',
    body: 'Standard keys can be copied at any hardware store. Patented key systems (like Medeco or Mul-T-Lock) require authorization for duplication — meaning only you can get copies made. This matters for rentals, offices, and any property where multiple people have had key access.',
    href: '/services/security-solutions/high-security-locks/',
    linkLabel: 'High-security locks',
  },
  {
    icon: Building2,
    category: 'Commercial Security',
    tip: 'Use a master key system for multi-unit buildings',
    body: 'A well-designed master key system lets a property manager open all units while each tenant\'s key only opens their own door. Done right, it eliminates the chaos of managing dozens of separate keys — and makes post-eviction or turnover lock changes straightforward.',
    href: '/services/commercial-locksmith/',
    linkLabel: 'Commercial locksmith services',
  },
  {
    icon: Car,
    category: 'Vehicle Security',
    tip: 'Never leave a spare key under your car',
    body: 'Magnetic hide-a-key boxes are well-known to car thieves — they check wheel wells and bumpers routinely. If you need a spare car key, get a proper duplicate made and keep it in a secure location. Transponder keys and smart key fobs also provide better protection than traditional mechanical cuts.',
    href: '/services/auto-locksmith/',
    linkLabel: 'Auto locksmith services',
  },
  {
    icon: Home,
    category: 'Smart Home',
    tip: 'Smart locks add convenience, not necessarily more security',
    body: 'Bluetooth and Wi-Fi enabled smart locks are convenient, but their security depends heavily on the underlying deadbolt hardware. A smart lock on a hollow door with a weak frame offers poor protection regardless of its app features. We always assess the full door system before recommending smart lock upgrades.',
    href: '/services/security-solutions/smart-locks/',
    linkLabel: 'Smart lock installation',
  },
]

interface SecurityTipsSectionProps {
  className?: string
}

export function SecurityTipsSection({ className }: SecurityTipsSectionProps) {
  return (
    <section className={cn('py-14 md:py-20 bg-brand-bg', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-amber font-semibold text-sm uppercase tracking-wider mb-2">
            Expert Advice
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">
            Practical Home &amp; Business Security Tips
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Advice from locksmiths who work in Brooklyn every day — not marketing copy. These are the recommendations we give customers face-to-face.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECURITY_TIPS.map((tip) => {
            const Icon = tip.icon
            return (
              <div
                key={tip.tip}
                className="bg-white rounded-xl border border-brand-border p-6 flex flex-col hover:border-brand-amber/40 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-brand-amber/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-brand-amber" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-brand-navy/50 uppercase tracking-wide">
                    {tip.category}
                  </span>
                </div>

                <h3 className="font-bold text-brand-navy mb-2 leading-snug">{tip.tip}</h3>
                <p className="text-brand-muted text-sm leading-relaxed flex-1 mb-4">{tip.body}</p>

                <Link
                  href={tip.href}
                  className="inline-flex items-center gap-1 text-brand-navy font-semibold text-sm hover:text-brand-amber transition-colors mt-auto"
                >
                  {tip.linkLabel} <ArrowRight size={13} />
                </Link>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/residential-locksmith-services/"
            className="inline-flex items-center gap-1.5 text-brand-navy border border-brand-navy rounded-lg px-5 py-3 text-sm font-semibold hover:bg-brand-navy hover:text-white transition-colors"
          >
            More Security Guides <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
