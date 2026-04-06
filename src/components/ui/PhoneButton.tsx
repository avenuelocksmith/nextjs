'use client'

import { Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BUSINESS } from '@/lib/constants'

interface PhoneButtonProps {
  className?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  label?: string
  showIcon?: boolean
}

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-base gap-2',
  lg: 'px-7 py-3.5 text-lg gap-2',
  xl: 'px-8 py-4 text-xl gap-2.5',
}

const iconSizes = {
  sm: 14,
  md: 18,
  lg: 20,
  xl: 24,
}

export function PhoneButton({
  className,
  variant = 'primary',
  size = 'lg',
  label,
  showIcon = true,
}: PhoneButtonProps) {
  const isPrimary = variant === 'primary'
  const isXL = size === 'xl'

  const variantClass = isPrimary
    ? cn(
        'btn-gradient-amber text-brand-charcoal font-bold rounded-xl',
      )
    : variant === 'secondary'
    ? 'bg-brand-charcoal border-2 border-brand-amber/40 hover:border-brand-amber text-white font-bold rounded-xl shadow-lg hover:shadow-xl'
    : variant === 'outline'
    ? 'border-2 border-brand-amber text-brand-amber hover:bg-brand-amber hover:text-brand-charcoal font-bold rounded-xl'
    : 'text-brand-amber hover:text-brand-orange font-bold underline'

  return (
    <a
      href={BUSINESS.phoneHref}
      className={cn(
        'inline-flex items-center justify-center transition-all duration-200 tap-target',
        variantClass,
        sizes[size],
        className
      )}
      aria-label={`Call Avenue Locksmith at ${BUSINESS.phone}`}
    >
      {showIcon && <Phone size={iconSizes[size]} aria-hidden="true" />}
      <span>{label ?? BUSINESS.phone}</span>
    </a>
  )
}
