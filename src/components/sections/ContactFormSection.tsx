'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Send, CheckCircle } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service type'),
  message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const SERVICE_OPTIONS = [
  'Emergency Lockout',
  'Residential Locksmith',
  'Commercial Locksmith',
  'Automotive Locksmith',
  'Lock Rekey',
  'Lock Change / Installation',
  'Deadbolt Installation',
  'Smart Lock / Access Control',
  'Safe Locksmith',
  'Eviction Locksmith',
  'Key Duplication',
  'Mailbox Lock',
  'Other',
]

interface ContactFormSectionProps {
  className?: string
  title?: string
  subtitle?: string
  compact?: boolean
}

export function ContactFormSection({
  className,
  title = 'Get a Free Quote',
  subtitle = 'Tell us what you need — we\'ll respond within the hour with an upfront price. No obligation.',
  compact = false,
}: ContactFormSectionProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    setSubmitting(true)
    setSubmitError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className={cn('py-12 md:py-16 bg-white', className)}>
        <div className="container mx-auto px-4 max-w-xl text-center">
          <CheckCircle size={56} className="text-brand-success mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-brand-navy mb-2">Message Received!</h2>
          <p className="text-brand-muted mb-6">
            We&apos;ll get back to you within the hour. For immediate service, call us directly.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 bg-brand-amber text-brand-navy font-bold px-6 py-3 rounded-lg"
          >
            <Phone size={18} />
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    )
  }

  return (
    <section className={cn('py-12 md:py-16 bg-white', className)}>
      <div className={cn('container mx-auto px-4', compact ? 'max-w-xl' : 'max-w-3xl')}>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">{title}</h2>
          <p className="text-brand-muted">{subtitle}</p>
          <p className="text-sm text-brand-muted mt-2">
            For emergencies:{' '}
            <a href={BUSINESS.phoneHref} className="text-brand-amber font-semibold hover:underline">
              Call {BUSINESS.phone}
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 bg-brand-bg p-6 md:p-8 rounded-xl border border-brand-border">
          <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2')}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-brand-text mb-1">
                Name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                {...register('name')}
                placeholder="Your full name"
                className={cn(
                  'w-full px-4 py-2.5 border rounded-lg text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy/30',
                  errors.name ? 'border-red-400' : 'border-brand-border hover:border-brand-navy/40'
                )}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-brand-text mb-1">
                Phone <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                {...register('phone')}
                placeholder="(347) 000-0000"
                className={cn(
                  'w-full px-4 py-2.5 border rounded-lg text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy/30',
                  errors.phone ? 'border-red-400' : 'border-brand-border hover:border-brand-navy/40'
                )}
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" role="alert" className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-brand-text mb-1">
              Service Type <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <select
              id="service"
              {...register('service')}
              className={cn(
                'w-full px-4 py-2.5 border rounded-lg text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy/30',
                errors.service ? 'border-red-400' : 'border-brand-border hover:border-brand-navy/40'
              )}
              aria-invalid={errors.service ? 'true' : 'false'}
            >
              <option value="">Select a service...</option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {errors.service && (
              <p role="alert" className="text-red-500 text-xs mt-1">{errors.service.message}</p>
            )}
          </div>

          {!compact && (
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-brand-text mb-1">
                Email <span className="text-brand-muted text-xs font-normal">(optional)</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                {...register('email')}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm bg-white hover:border-brand-navy/40 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy/30"
              />
            </div>
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-brand-text mb-1">
              Message <span className="text-brand-muted text-xs font-normal">(optional)</span>
            </label>
            <textarea
              id="message"
              rows={3}
              {...register('message')}
              placeholder="Describe your situation or any details that would help us..."
              className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm bg-white hover:border-brand-navy/40 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy/30 resize-none"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-brand-muted bg-brand-trust/5 border border-brand-trust/20 rounded-lg p-3">
            <span>🔒</span>
            <span>No hidden fees. We&apos;ll respond within 1 hour with an upfront quote. Your info is never shared.</span>
          </div>

          {submitError && (
            <p role="alert" className="text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-lg p-3">
              Something went wrong. Please try again or{' '}
              <a href={BUSINESS.phoneHref} className="font-semibold underline">call us directly</a>.
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy/90 disabled:opacity-60 text-white font-bold px-6 py-3.5 rounded-lg transition-colors tap-target"
          >
            <Send size={18} aria-hidden="true" />
            <span>{submitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </div>
    </section>
  )
}
