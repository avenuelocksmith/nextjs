'use client'

import { Star, Shield, Clock, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BUSINESS } from '@/lib/constants'
import { useAvailability } from '@/hooks/useAvailability'

interface TrustBarProps {
  className?: string
  variant?: 'light' | 'dark'
}

export function TrustBar({ className, variant = 'light' }: TrustBarProps) {
  const isDark = variant === 'dark'
  const afterHours = useAvailability()

  const trustItems = [
    {
      icon: Star,
      label: `${BUSINESS.rating}/5 Stars`,
      sublabel: `${BUSINESS.reviewCount}+ Reviews`,
    },
    {
      icon: Shield,
      label: 'Licensed & Insured',
      sublabel: 'Bonded in NY',
    },
    {
      icon: Clock,
      label: '15–25 Min Response',
      sublabel: 'Emergency Guarantee',
    },
    {
      icon: Phone,
      label: afterHours === false ? 'Open Now' : '24/7 Available',
      sublabel: '365 Days a Year',
    },
  ]

  return (
    <div
      className={cn(
        'flex flex-wrap justify-center gap-x-8 gap-y-3',
        className
      )}
    >
      {trustItems.map((item) => {
        const Icon = item.icon
        return (
          <div key={item.label} className="flex items-center gap-2">
            <Icon
              size={18}
              className={isDark ? 'text-brand-amber' : 'text-brand-amber'}
              aria-hidden="true"
            />
            <div>
              <p className={cn('text-sm font-semibold leading-tight', isDark ? 'text-white' : 'text-brand-text')}>
                {item.label}
              </p>
              <p className={cn('text-xs leading-tight', isDark ? 'text-white/70' : 'text-brand-muted')}>
                {item.sublabel}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
