import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { cn } from '@/lib/utils'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  className?: string
  title?: string
}

export function FAQSection({
  faqs,
  className,
  title = 'Frequently Asked Questions',
}: FAQSectionProps) {
  return (
    <section className={cn('py-12 md:py-16 bg-brand-bg', className)}>
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8 text-center">{title}</h2>
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  )
}
