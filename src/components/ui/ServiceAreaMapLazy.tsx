'use client'

import dynamic from 'next/dynamic'
import { cn } from '@/lib/utils'

const ServiceAreaMapInner = dynamic(
  () => import('./ServiceAreaMap').then((m) => ({ default: m.ServiceAreaMap })),
  { ssr: false }
)

interface ServiceAreaMapLazyProps {
  className?: string
  height?: string
}

export function ServiceAreaMapLazy({ className, height = '450px' }: ServiceAreaMapLazyProps) {
  return (
    <div className={cn('rounded-xl overflow-hidden border border-brand-border', className)} style={{ height }}>
      <ServiceAreaMapInner className="" height="100%" />
    </div>
  )
}
