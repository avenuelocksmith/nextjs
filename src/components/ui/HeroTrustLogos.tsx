'use client'

export function HeroTrustLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mb-6">
      {/* Google Reviews */}
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 py-1.5">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className="text-white text-xs font-semibold leading-tight">
          4.9★ <span className="text-white/70 font-normal">Google Reviews</span>
        </span>
      </div>

      {/* BBB Accredited */}
      <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-lg px-3 py-1.5">
        <svg viewBox="0 0 32 20" width="32" height="20" aria-hidden="true">
          <rect width="32" height="20" rx="2" fill="#006BB6"/>
          <text x="4" y="15" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="white">BBB</text>
        </svg>
        <span className="text-white/70 text-xs leading-tight">A+ Accredited</span>
      </div>

      {/* Visa */}
      <div className="inline-flex items-center bg-white/10 border border-white/15 rounded-lg px-3 py-2">
        <svg viewBox="0 0 50 16" width="42" height="14" aria-hidden="true">
          <text x="0" y="13" fontFamily="Arial" fontWeight="bold" fontSize="16" fontStyle="italic" fill="white" letterSpacing="-0.5">VISA</text>
        </svg>
      </div>

      {/* Mastercard */}
      <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-lg px-3 py-1.5">
        <svg viewBox="0 0 38 24" width="32" height="20" aria-hidden="true">
          <circle cx="14" cy="12" r="10" fill="#EB001B"/>
          <circle cx="24" cy="12" r="10" fill="#F79E1B" fillOpacity="0.9"/>
          <path d="M19 3.5a10 10 0 0 1 0 17A10 10 0 0 1 19 3.5z" fill="#FF5F00"/>
        </svg>
        <span className="text-white/70 text-xs leading-tight">Accepted</span>
      </div>
    </div>
  )
}
