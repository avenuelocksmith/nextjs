import Link from 'next/link'
import { Home, Building2, Car, Zap, Key, ShieldCheck, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  building: Building2,
  car: Car,
  zap: Zap,
  key: Key,
  'shield-check': ShieldCheck,
}

interface ServicesGridProps {
  className?: string
  title?: string
  subtitle?: string
  compact?: boolean
}

export function ServicesGrid({
  className,
  title = 'Locksmith Services in Brooklyn, NY',
  subtitle = 'From emergency lockouts to full security system installations, we cover every lock and key need — residential, commercial, and automotive.',
  compact = false,
}: ServicesGridProps) {
  return (
    <section className={cn('py-14 md:py-20 bg-brand-bg', className)}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">{title}</h2>
            )}
            {subtitle && (
              <p className="text-brand-muted max-w-2xl mx-auto text-base md:text-lg">{subtitle}</p>
            )}
          </div>
        )}

        <div className={cn(
          'grid gap-5',
          compact
            ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        )}>
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] ?? Key
            return (
              <Link
                key={service.slug}
                href={service.href}
                className={cn(
                  'group bg-white rounded-xl border border-brand-border hover:border-brand-amber hover:shadow-lg transition-all duration-200 flex flex-col',
                  compact ? 'p-4 items-center text-center' : 'p-6'
                )}
                aria-label={`Learn about ${service.name}`}
              >
                <div className={cn(
                  'rounded-lg bg-brand-amber/10 group-hover:bg-brand-amber/20 transition-colors',
                  compact ? 'p-3 mb-3 w-12 h-12 flex items-center justify-center' : 'p-3 w-12 h-12 flex items-center justify-center mb-4'
                )}>
                  <Icon size={22} className="text-brand-amber" aria-hidden="true" />
                </div>

                <h3 className={cn(
                  'font-bold text-brand-navy group-hover:text-brand-amber transition-colors',
                  compact ? 'text-sm' : 'text-lg mb-2'
                )}>
                  {service.name}
                </h3>

                {!compact && (
                  <>
                    <p className="text-brand-muted text-sm leading-relaxed flex-1 mb-4">
                      {service.description}
                    </p>
                    <span className="flex items-center gap-1 text-brand-amber text-sm font-semibold mt-auto">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
