import { ShieldCheck, Shield, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeroTrustBadgesProps {
  variant?: 'light' | 'dark'
  className?: string
}

const BADGES = [
  { icon: ShieldCheck, label: 'LICENSED', sub: 'NYC DCWP' },
  { icon: Shield, label: 'INSURED', sub: 'Bonded NY' },
  { icon: Clock, label: '24/7', sub: 'Dispatch' },
] as const

/**
 * Compact honest trust badge row. Meant for directly under the hero CTA.
 * Three static badges — no fabricated counts, no countdowns.
 * light variant: for dark hero backgrounds (white text, amber icon).
 * dark variant:  for white/light section backgrounds (charcoal text, amber icon).
 */
export function HeroTrustBadges({ variant = 'light', className }: HeroTrustBadgesProps) {
  const isLight = variant === 'light'
  return (
    <ul
      role="list"
      className={cn(
        'flex flex-wrap items-center gap-x-5 gap-y-2',
        className
      )}
    >
      {BADGES.map(({ icon: Icon, label, sub }) => (
        <li
          key={label}
          className={cn(
            'flex items-center gap-2 whitespace-nowrap',
            isLight ? 'text-white/90' : 'text-brand-charcoal'
          )}
        >
          <Icon
            size={16}
            className="text-brand-amber shrink-0"
            aria-hidden="true"
          />
          <span className="text-xs font-extrabold uppercase tracking-wider">
            {label}
          </span>
          <span
            className={cn(
              'text-xs font-medium',
              isLight ? 'text-white/55' : 'text-brand-muted'
            )}
          >
            · {sub}
          </span>
        </li>
      ))}
    </ul>
  )
}
