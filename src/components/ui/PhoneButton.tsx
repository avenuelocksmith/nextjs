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

const variants = {
  primary: 'bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold shadow-lg hover:shadow-xl',
  secondary: 'bg-brand-navy hover:bg-brand-navy/90 text-white font-bold shadow-lg hover:shadow-xl',
  outline: 'border-2 border-brand-amber text-brand-amber hover:bg-brand-amber hover:text-brand-navy font-bold',
  ghost: 'text-brand-amber hover:text-brand-orange font-bold underline',
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
  return (
    <a
      href={BUSINESS.phoneHref}
      className={cn(
        'inline-flex items-center justify-center rounded-lg transition-all duration-200 tap-target',
        variants[variant],
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
