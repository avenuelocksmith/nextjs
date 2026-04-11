'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Send, CheckCircle, ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ServiceOption {
  value: string
  label: string
  hint: string
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { value: 'Emergency Lockout', label: 'Emergency Lockout', hint: 'Locked out right now' },
  { value: 'Residential Locksmith', label: 'Residential', hint: 'Home locks & deadbolts' },
  { value: 'Commercial Locksmith', label: 'Commercial', hint: 'Office, shop, building' },
  { value: 'Automotive Locksmith', label: 'Automotive', hint: 'Car keys & lockouts' },
  { value: 'Lock Rekey', label: 'Lock Rekey', hint: 'Same lock, new key' },
  { value: 'Lock Change / Installation', label: 'Lock Change', hint: 'Install new hardware' },
  { value: 'Deadbolt Installation', label: 'Deadbolt Install', hint: 'Add or upgrade deadbolt' },
  { value: 'Smart Lock / Access Control', label: 'Smart Lock', hint: 'Keyless, keypad, app' },
  { value: 'Safe Locksmith', label: 'Safe Locksmith', hint: 'Open or repair safe' },
  { value: 'Eviction Locksmith', label: 'Eviction', hint: 'Court-ordered lockout' },
  { value: 'Key Duplication', label: 'Key Duplication', hint: 'Cut a copy' },
  { value: 'Mailbox Lock', label: 'Mailbox Lock', hint: 'Building mailbox' },
  { value: 'Other', label: 'Other / Not sure', hint: 'Describe below' },
]

interface ContactFormSectionProps {
  className?: string
  title?: string
  subtitle?: string
  compact?: boolean
  multiStep?: boolean
}

export function ContactFormSection({
  className,
  title = 'Get a Free Quote',
  subtitle = "Tell us what you need — we'll respond within the hour with an upfront price. No obligation.",
  compact = false,
  multiStep,
}: ContactFormSectionProps) {
  // Default: multi-step unless the caller opts into the legacy compact single-step form
  const useMultiStep = multiStep ?? !compact

  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    },
  })

  const values = watch()

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

  async function goToStep2() {
    const ok = await trigger(['service'])
    if (ok) setStep(2)
  }

  async function goToStep3() {
    const ok = await trigger(['name', 'phone', 'email'])
    if (ok) setStep(3)
  }

  // ---------- Success state ----------
  if (submitted) {
    return (
      <div className={cn('py-12 md:py-16 bg-white', className)}>
        <div className="container mx-auto px-4 max-w-xl text-center">
          <CheckCircle size={56} className="text-brand-success mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Message Received!</h2>
          <p className="text-brand-muted mb-6">
            We&apos;ll get back to you within the hour. For immediate service, call us directly.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 btn-gradient-amber text-brand-charcoal font-bold px-6 py-3 rounded-xl tap-target"
          >
            <Phone size={18} aria-hidden="true" />
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    )
  }

  // ---------- Legacy single-step form (compact or multiStep={false}) ----------
  if (!useMultiStep) {
    return (
      <section className={cn('py-12 md:py-16 bg-white', className)}>
        <div className={cn('container mx-auto px-4', compact ? 'max-w-xl' : 'max-w-3xl')}>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-2">{title}</h2>
            <p className="text-brand-muted">{subtitle}</p>
            <p className="text-sm text-brand-muted mt-2">
              For emergencies:{' '}
              <a href={BUSINESS.phoneHref} className="text-brand-amber font-semibold hover:underline">
                Call {BUSINESS.phone}
              </a>
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-4 bg-brand-bg p-6 md:p-8 rounded-xl border border-brand-border"
          >
            <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2')}>
              <div>
                <label htmlFor="name-single" className="block text-sm font-semibold text-brand-text mb-1">
                  Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="name-single"
                  type="text"
                  autoComplete="name"
                  {...register('name')}
                  placeholder="Your full name"
                  className={cn(
                    'w-full px-4 py-2.5 border rounded-lg text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-charcoal/30',
                    errors.name ? 'border-red-400' : 'border-brand-border hover:border-brand-charcoal/40'
                  )}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && (
                  <p role="alert" className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone-single" className="block text-sm font-semibold text-brand-text mb-1">
                  Phone <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="phone-single"
                  type="tel"
                  autoComplete="tel"
                  {...register('phone')}
                  placeholder="(347) 000-0000"
                  className={cn(
                    'w-full px-4 py-2.5 border rounded-lg text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-charcoal/30',
                    errors.phone ? 'border-red-400' : 'border-brand-border hover:border-brand-charcoal/40'
                  )}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                />
                {errors.phone && (
                  <p role="alert" className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="service-single" className="block text-sm font-semibold text-brand-text mb-1">
                Service Type <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <select
                id="service-single"
                {...register('service')}
                className={cn(
                  'w-full px-4 py-2.5 border rounded-lg text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-charcoal/30',
                  errors.service ? 'border-red-400' : 'border-brand-border hover:border-brand-charcoal/40'
                )}
                aria-invalid={errors.service ? 'true' : 'false'}
              >
                <option value="">Select a service...</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {errors.service && (
                <p role="alert" className="text-red-500 text-xs mt-1">{errors.service.message}</p>
              )}
            </div>

            {!compact && (
              <div>
                <label htmlFor="email-single" className="block text-sm font-semibold text-brand-text mb-1">
                  Email <span className="text-brand-muted text-xs font-normal">(optional)</span>
                </label>
                <input
                  id="email-single"
                  type="email"
                  autoComplete="email"
                  {...register('email')}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm bg-white hover:border-brand-charcoal/40 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-charcoal/30"
                />
              </div>
            )}

            <div>
              <label htmlFor="message-single" className="block text-sm font-semibold text-brand-text mb-1">
                Message <span className="text-brand-muted text-xs font-normal">(optional)</span>
              </label>
              <textarea
                id="message-single"
                rows={3}
                {...register('message')}
                placeholder="Describe your situation or any details that would help us..."
                className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm bg-white hover:border-brand-charcoal/40 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-charcoal/30 resize-none"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-brand-muted bg-brand-trust/5 border border-brand-trust/20 rounded-lg p-3">
              <span aria-hidden="true">🔒</span>
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
              className="w-full flex items-center justify-center gap-2 btn-gradient-amber disabled:opacity-60 text-brand-charcoal font-bold px-6 py-3.5 rounded-xl tap-target"
            >
              <Send size={18} aria-hidden="true" />
              <span>{submitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </section>
    )
  }

  // ---------- Multi-step form ----------
  const selectedService = values.service
  const progressSteps: Array<{ num: 1 | 2 | 3; label: string }> = [
    { num: 1, label: 'Service' },
    { num: 2, label: 'Contact' },
    { num: 3, label: 'Review' },
  ]

  return (
    <section className={cn('py-12 md:py-16 bg-white', className)}>
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-2">{title}</h2>
          <p className="text-brand-muted">{subtitle}</p>
          <p className="text-sm text-brand-muted mt-2">
            For emergencies:{' '}
            <a href={BUSINESS.phoneHref} className="text-brand-amber font-semibold hover:underline">
              Call {BUSINESS.phone}
            </a>
          </p>
        </div>

        {/* Progress indicator */}
        <ol
          aria-label="Form progress"
          className="flex items-center justify-between gap-2 mb-6 max-w-md mx-auto"
        >
          {progressSteps.map((s, i) => {
            const isDone = step > s.num
            const isActive = step === s.num
            return (
              <li key={s.num} className="flex items-center flex-1 last:flex-initial">
                <div
                  className={cn(
                    'flex items-center gap-2',
                    isActive && 'font-bold text-brand-charcoal',
                    !isActive && !isDone && 'text-brand-muted',
                    isDone && 'text-brand-charcoal'
                  )}
                >
                  <span
                    className={cn(
                      'flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold border-2 transition-colors',
                      isActive && 'bg-brand-amber border-brand-amber text-brand-charcoal',
                      isDone && 'bg-brand-charcoal border-brand-charcoal text-white',
                      !isActive && !isDone && 'bg-white border-brand-border text-brand-muted'
                    )}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    {isDone ? <Check size={14} aria-hidden="true" /> : s.num}
                  </span>
                  <span className="text-xs uppercase tracking-wider hidden sm:inline">{s.label}</span>
                </div>
                {i < progressSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      'h-0.5 flex-1 mx-2 transition-colors',
                      step > s.num ? 'bg-brand-charcoal' : 'bg-brand-border'
                    )}
                  />
                )}
              </li>
            )
          })}
        </ol>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="bg-brand-bg p-6 md:p-8 rounded-xl border border-brand-border"
        >
          {/* Step 1 — Service selection */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-1">
                  What do you need?
                </h3>
                <p className="text-sm text-brand-muted">
                  Pick the service that best describes your situation.
                </p>
              </div>

              {/* Hidden input keeps the field registered with RHF so trigger(['service']) works */}
              <input type="hidden" {...register('service')} />

              <div
                role="radiogroup"
                aria-label="Service type"
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {SERVICE_OPTIONS.map((opt) => {
                  const checked = selectedService === opt.value
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      role="radio"
                      aria-checked={checked}
                      onClick={() => {
                        setValue('service', opt.value, {
                          shouldValidate: true,
                          shouldTouch: true,
                        })
                      }}
                      className={cn(
                        'text-left p-4 rounded-lg border-2 transition-all tap-target',
                        checked
                          ? 'border-brand-amber bg-brand-amber/10 shadow-sm'
                          : 'border-brand-border bg-white hover:border-brand-charcoal/40'
                      )}
                    >
                      <div className="font-semibold text-brand-charcoal text-sm">{opt.label}</div>
                      <div className="text-xs text-brand-muted mt-0.5">{opt.hint}</div>
                    </button>
                  )
                })}
              </div>

              {errors.service && (
                <p role="alert" className="text-red-500 text-xs">{errors.service.message}</p>
              )}

              <div>
                <label htmlFor="message-step" className="block text-sm font-semibold text-brand-text mb-1">
                  Details <span className="text-brand-muted text-xs font-normal">(optional)</span>
                </label>
                <textarea
                  id="message-step"
                  rows={3}
                  {...register('message')}
                  placeholder="Anything that helps us quote accurately — door type, lock brand, timing..."
                  className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm bg-white hover:border-brand-charcoal/40 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-charcoal/30 resize-none"
                />
              </div>

              <button
                type="button"
                onClick={goToStep2}
                disabled={!selectedService}
                className="w-full flex items-center justify-center gap-2 btn-gradient-amber disabled:opacity-50 disabled:cursor-not-allowed text-brand-charcoal font-bold px-6 py-3.5 rounded-xl tap-target"
              >
                <span>Next</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          )}

          {/* Step 2 — Contact info */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-1">
                  How should we reach you?
                </h3>
                <p className="text-sm text-brand-muted">
                  We&apos;ll respond within the hour with an upfront quote.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name-step" className="block text-sm font-semibold text-brand-text mb-1">
                    Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name-step"
                    type="text"
                    autoComplete="name"
                    {...register('name')}
                    placeholder="Your full name"
                    className={cn(
                      'w-full px-4 py-2.5 border rounded-lg text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-charcoal/30',
                      errors.name ? 'border-red-400' : 'border-brand-border hover:border-brand-charcoal/40'
                    )}
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p role="alert" className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone-step" className="block text-sm font-semibold text-brand-text mb-1">
                    Phone <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone-step"
                    type="tel"
                    autoComplete="tel"
                    {...register('phone')}
                    placeholder="(347) 000-0000"
                    className={cn(
                      'w-full px-4 py-2.5 border rounded-lg text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-charcoal/30',
                      errors.phone ? 'border-red-400' : 'border-brand-border hover:border-brand-charcoal/40'
                    )}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                  />
                  {errors.phone && (
                    <p role="alert" className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email-step" className="block text-sm font-semibold text-brand-text mb-1">
                  Email <span className="text-brand-muted text-xs font-normal">(optional)</span>
                </label>
                <input
                  id="email-step"
                  type="email"
                  autoComplete="email"
                  {...register('email')}
                  placeholder="you@example.com"
                  className={cn(
                    'w-full px-4 py-2.5 border rounded-lg text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-charcoal/30',
                    errors.email ? 'border-red-400' : 'border-brand-border hover:border-brand-charcoal/40'
                  )}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <p role="alert" className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-brand-border hover:border-brand-charcoal text-brand-charcoal font-semibold px-6 py-3.5 rounded-xl tap-target transition-colors"
                >
                  <ArrowLeft size={18} aria-hidden="true" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={goToStep3}
                  className="flex-1 flex items-center justify-center gap-2 btn-gradient-amber text-brand-charcoal font-bold px-6 py-3.5 rounded-xl tap-target"
                >
                  <span>Next</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — Review & submit */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-1">
                  Review and submit
                </h3>
                <p className="text-sm text-brand-muted">
                  Double-check the details below, then send us your request.
                </p>
              </div>

              <dl className="bg-white rounded-lg border border-brand-border divide-y divide-brand-border">
                <div className="flex items-start justify-between p-4 gap-4">
                  <div className="flex-1 min-w-0">
                    <dt className="text-xs uppercase tracking-wider font-semibold text-brand-muted mb-1">
                      Service
                    </dt>
                    <dd className="text-sm font-semibold text-brand-charcoal">
                      {values.service || '—'}
                    </dd>
                    {values.message && (
                      <dd className="text-xs text-brand-muted mt-1 whitespace-pre-wrap">
                        {values.message}
                      </dd>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-semibold text-brand-amber hover:underline shrink-0"
                  >
                    Edit
                  </button>
                </div>
                <div className="flex items-start justify-between p-4 gap-4">
                  <div className="flex-1 min-w-0">
                    <dt className="text-xs uppercase tracking-wider font-semibold text-brand-muted mb-1">
                      Contact
                    </dt>
                    <dd className="text-sm font-semibold text-brand-charcoal">
                      {values.name || '—'}
                    </dd>
                    <dd className="text-xs text-brand-muted">{values.phone || '—'}</dd>
                    {values.email && (
                      <dd className="text-xs text-brand-muted">{values.email}</dd>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs font-semibold text-brand-amber hover:underline shrink-0"
                  >
                    Edit
                  </button>
                </div>
              </dl>

              <p className="text-xs text-brand-muted leading-relaxed">
                By submitting, you agree that {BUSINESS.name} may contact you about your request by
                phone, text, or email. No hidden fees — we&apos;ll respond within the hour with an
                upfront quote. Your info is never shared.
              </p>

              {submitError && (
                <p role="alert" className="text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-lg p-3">
                  Something went wrong. Please try again or{' '}
                  <a href={BUSINESS.phoneHref} className="font-semibold underline">call us directly</a>.
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-brand-border hover:border-brand-charcoal text-brand-charcoal font-semibold px-6 py-3.5 rounded-xl tap-target transition-colors"
                >
                  <ArrowLeft size={18} aria-hidden="true" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 flex items-center justify-center gap-2 btn-gradient-amber disabled:opacity-60 text-brand-charcoal font-bold px-6 py-3.5 rounded-xl tap-target"
                >
                  <Send size={18} aria-hidden="true" />
                  <span>{submitting ? 'Sending...' : 'Submit request'}</span>
                </button>
              </div>
            </div>
          )}
        </form>

        <p className="text-xs text-brand-muted text-center mt-4 flex items-center justify-center gap-2">
          <span aria-hidden="true">🔒</span>
          <span>No hidden fees · Upfront quote · Your info stays with us.</span>
        </p>
      </div>
    </section>
  )
}
