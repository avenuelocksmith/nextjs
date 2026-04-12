'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0 }}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
            background: '#f8f9fa',
          }}
        >
          <div style={{ maxWidth: '480px' }}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
              Something Went Wrong
            </h1>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              We hit an unexpected error. You can try again or call us directly
              at <a href="tel:+13473867164" style={{ color: '#d97706', fontWeight: 600 }}>(347) 386-7164</a> for
              immediate service.
            </p>
            <button
              onClick={reset}
              style={{
                background: '#111827',
                color: '#fff',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
