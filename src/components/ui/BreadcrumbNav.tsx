import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
  className?: string
}

export function BreadcrumbNav({ items, className }: BreadcrumbNavProps) {
  // Strip any caller-supplied Home item to avoid duplicates when the component prepends one
  const filteredItems = items[0]?.label === 'Home' ? items.slice(1) : items
  const allItems = [{ label: 'Home', href: '/' }, ...filteredItems]

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center flex-wrap gap-1 text-sm text-brand-muted', className)}
    >
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1
        return (
          <span key={`${index}-${item.label}`} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight size={14} className="text-brand-border" aria-hidden="true" />
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-brand-amber transition-colors"
              >
                {index === 0 ? (
                  <span className="flex items-center gap-1">
                    <Home size={14} aria-hidden="true" />
                    <span className="sr-only">Home</span>
                  </span>
                ) : (
                  item.label
                )}
              </Link>
            ) : (
              <span
                className={cn(isLast ? 'text-brand-text font-medium' : 'text-brand-muted')}
                aria-current={isLast ? 'page' : undefined}
              >
                {index === 0 ? (
                  <Home size={14} aria-hidden="true" />
                ) : (
                  item.label
                )}
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
