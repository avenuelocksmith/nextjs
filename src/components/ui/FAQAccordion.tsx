'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useAvailability } from '@/hooks/useAvailability'
import { replace247 } from '@/lib/availability'

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
  className?: string
}

export function FAQAccordion({ faqs, className }: FAQAccordionProps) {
  const afterHours = useAvailability()

  return (
    <Accordion multiple={false} className={className}>
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.question} value={`faq-${index}`}>
          <AccordionTrigger className="text-left font-semibold text-brand-text hover:text-brand-navy">
            {replace247(faq.question, afterHours)}
          </AccordionTrigger>
          <AccordionContent className="text-brand-muted leading-relaxed">
            {replace247(faq.answer, afterHours)}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
