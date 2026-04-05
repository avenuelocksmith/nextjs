'use client'

import { Star, Shield, Clock, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BUSINESS } from '@/lib/constants'
import { useAvailability } from '@/hooks/useAvailability'

interface TrustBarProps {
  className?: string
}

export function TrustBar({ className }: TrustBarProps) {
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
          <div key={item.label} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-amber/20 flex items-center justify-center flex-shrink-0">
              <Icon size={16} className="text-brand-amber" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight text-white">
                {item.label}
              </p>
              <p className="text-xs leading-tight text-white/60">
                {item.sublabel}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
