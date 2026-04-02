'use client'

import { useState, useRef, useCallback } from 'react'
import { Phone, MapPin, MessageSquare, ImagePlus, X, CheckCircle, Upload, Loader2 } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import Link from 'next/link'

const MAX_IMAGES = 3
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']
const MAX_SIZE_MB = 10

interface ImagePreview {
  file: File
  url: string
}

export function QuoteForm() {
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [comment, setComment] = useState('')
  const [images, setImages] = useState<ImagePreview[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const addImages = useCallback((files: FileList | File[]) => {
    const fileArray = Array.from(files)
    const newImages: ImagePreview[] = []
    const newErrors: string[] = []

    for (const file of fileArray) {
      if (images.length + newImages.length >= MAX_IMAGES) break

      if (!ACCEPTED_TYPES.includes(file.type)) {
        newErrors.push(`"${file.name}" is not a supported image format`)
        continue
      }
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        newErrors.push(`"${file.name}" exceeds the ${MAX_SIZE_MB} MB limit`)
        continue
      }

      newImages.push({ file, url: URL.createObjectURL(file) })
    }

    setErrors((prev) => ({
      ...prev,
      images: newErrors.length > 0 ? newErrors.join(' · ') : '',
    }))
    setImages((prev) => [...prev, ...newImages].slice(0, MAX_IMAGES))
  }, [images])

  function removeImage(index: number) {
    setImages((prev) => {
      URL.revokeObjectURL(prev[index].url)
      return prev.filter((_, i) => i !== index)
    })
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    addImages(e.dataTransfer.files)
  }

  function validate(): boolean {
    const errs: Record<string, string> = {}
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) {
      errs.phone = 'Please enter a valid phone number'
    }
    if (!address.trim() || address.trim().length < 5) {
      errs.address = 'Please enter your address'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    setSubmitError('')

    const formData = new FormData()
    formData.append('phone', phone.trim())
    formData.append('address', address.trim())
    formData.append('comment', comment.trim())
    images.forEach((img, i) => formData.append(`image_${i}`, img.file))

    try {
      const res = await fetch('/api/quote', { method: 'POST', body: formData })
      if (res.ok) {
        images.forEach((img) => URL.revokeObjectURL(img.url))
        setSubmitted(true)
      } else {
        const json = await res.json().catch(() => ({}))
        setSubmitError(json.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="py-16 px-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl border border-brand-border p-10 max-w-md w-full text-center shadow-sm">
          <CheckCircle size={56} className="text-green-500 mx-auto mb-5" />
          <h2 className="text-2xl font-bold text-brand-navy mb-2">Quote Request Sent!</h2>
          <p className="text-brand-muted mb-8">
            We received your request and will get back to you within the hour. For urgent needs, call us directly.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 bg-brand-amber text-brand-navy font-bold px-7 py-3.5 rounded-xl text-base transition-colors hover:bg-brand-orange"
          >
            <Phone size={18} />
            {BUSINESS.phone}
          </a>
          <p className="mt-6">
            <Link href="/" className="text-brand-amber text-sm font-semibold hover:underline">
              ← Back to home
            </Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <section className="py-12 md:py-16 bg-brand-bg">
      <div className="container mx-auto px-4 max-w-xl">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-2xl border border-brand-border p-6 md:p-8 shadow-sm space-y-5"
        >
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-brand-text mb-1.5">
              <span className="inline-flex items-center gap-1.5">
                <ImagePlus size={14} className="text-brand-amber" aria-hidden="true" />
                Photos{' '}
                <span className="font-normal text-brand-muted">(optional, up to {MAX_IMAGES})</span>
              </span>
            </label>

            {images.length < MAX_IMAGES && (
              <div
                role="button"
                tabIndex={0}
                aria-label="Upload images"
                onDrop={handleDrop}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onClick={() => fileInputRef.current?.click()}
                onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
                className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl p-6 cursor-pointer transition-colors ${
                  dragOver
                    ? 'border-brand-amber bg-amber-50'
                    : 'border-brand-border bg-brand-bg hover:border-brand-navy/30'
                }`}
              >
                <Upload size={24} className="text-brand-muted" aria-hidden="true" />
                <p className="text-sm text-brand-muted text-center">
                  <span className="font-semibold text-brand-navy">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-brand-muted">JPEG, PNG, WebP — max {MAX_SIZE_MB} MB each</p>
                <p className="text-xs text-brand-muted">
                  {images.length} / {MAX_IMAGES} uploaded
                </p>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept={ACCEPTED_TYPES.join(',')}
              multiple
              className="sr-only"
              aria-hidden="true"
              onChange={(e) => { if (e.target.files) addImages(e.target.files); e.target.value = '' }}
            />

            {errors.images && (
              <p role="alert" className="text-red-500 text-xs mt-1">{errors.images}</p>
            )}

            {images.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mt-3">
                {images.map((img, i) => (
                  <div key={img.url} className="relative aspect-square rounded-xl overflow-hidden border border-brand-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.url} alt={`Preview ${i + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      aria-label={`Remove image ${i + 1}`}
                      className="absolute top-1 right-1 w-6 h-6 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <X size={12} aria-hidden="true" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Phone + Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-brand-text mb-1.5">
                <span className="inline-flex items-center gap-1.5">
                  <Phone size={14} className="text-brand-amber" aria-hidden="true" />
                  Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                </span>
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(347) 000-0000"
                className={`w-full px-4 py-3 border rounded-xl text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy/20 ${
                  errors.phone ? 'border-red-400' : 'border-brand-border hover:border-brand-navy/30'
                }`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" role="alert" className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-brand-text mb-1.5">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-brand-amber" aria-hidden="true" />
                  Address <span className="text-red-500" aria-hidden="true">*</span>
                </span>
              </label>
              <input
                id="address"
                type="text"
                autoComplete="street-address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="123 Main St, Brooklyn, NY"
                className={`w-full px-4 py-3 border rounded-xl text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy/20 ${
                  errors.address ? 'border-red-400' : 'border-brand-border hover:border-brand-navy/30'
                }`}
                aria-invalid={!!errors.address}
                aria-describedby={errors.address ? 'address-error' : undefined}
              />
              {errors.address && (
                <p id="address-error" role="alert" className="text-red-500 text-xs mt-1">{errors.address}</p>
              )}
            </div>
          </div>

          {/* Comment — optional */}
          <div>
            <label htmlFor="comment" className="block text-sm font-semibold text-brand-text mb-1.5">
              <span className="inline-flex items-center gap-1.5">
                <MessageSquare size={14} className="text-brand-amber" aria-hidden="true" />
                Describe the Issue{' '}
                <span className="font-normal text-brand-muted">(optional)</span>
              </span>
            </label>
            <textarea
              id="comment"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="E.g. Lock is jammed, key broke inside, need a new deadbolt installed..."
              className="w-full px-4 py-3 border border-brand-border rounded-xl text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy/20 resize-none hover:border-brand-navy/30"
            />
          </div>

          {submitError && (
            <p role="alert" className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl p-3 text-center">
              {submitError}{' '}
              <a href={BUSINESS.phoneHref} className="font-semibold underline">Call us directly</a>.
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy/90 disabled:opacity-60 text-white font-bold px-6 py-4 rounded-xl text-base transition-colors"
          >
            {submitting ? (
              <>
                <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                Sending...
              </>
            ) : (
              'Submit Quote Request'
            )}
          </button>

          <p className="text-xs text-brand-muted text-center">
            No hidden fees. We respond within 1 hour. Your info is never shared.
          </p>
        </form>
      </div>
    </section>
  )
}
