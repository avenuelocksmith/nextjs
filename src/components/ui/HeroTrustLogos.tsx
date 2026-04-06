export function HeroTrustLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
      {/* Google Reviews */}
      <div className="inline-flex items-center gap-2">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className="text-white text-xs font-semibold leading-tight">
          4.9★ <span className="text-white/60 font-normal">Google Reviews</span>
        </span>
      </div>

      {/* BBB Accredited */}
      <div className="inline-flex items-center gap-1.5">
        <svg viewBox="0 0 32 20" width="32" height="20" aria-hidden="true">
          <rect width="32" height="20" rx="2" fill="#006BB6"/>
          <text x="4" y="15" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="white">BBB</text>
        </svg>
        <span className="text-white/60 text-xs leading-tight">A+ Accredited</span>
      </div>

      {/* Visa */}
      <div className="inline-flex items-center">
        <svg viewBox="0 0 50 16" width="42" height="14" aria-hidden="true">
          <text x="0" y="13" fontFamily="Arial" fontWeight="bold" fontSize="16" fontStyle="italic" fill="white" letterSpacing="-0.5">VISA</text>
        </svg>
      </div>

      {/* Mastercard */}
      <div className="inline-flex items-center gap-1.5">
        <svg viewBox="0 0 38 24" width="32" height="20" aria-hidden="true">
          <circle cx="14" cy="12" r="10" fill="#EB001B"/>
          <circle cx="24" cy="12" r="10" fill="#F79E1B" fillOpacity="0.9"/>
          <path d="M19 3.5a10 10 0 0 1 0 17A10 10 0 0 1 19 3.5z" fill="#FF5F00"/>
        </svg>
        <span className="text-white/60 text-xs leading-tight">Accepted</span>
      </div>

      {/* Apple Pay */}
      <div className="inline-flex items-center gap-1.5">
        <svg viewBox="0 0 814 1000" width="11" height="14" aria-hidden="true" fill="white">
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-150.3-81.2c-72.5-71.2-130.5-180.2-130.5-283.7 0-172 111.5-262.6 221.2-262.6 56.5 0 103.5 37.3 138.8 37.3 33.6 0 86.5-39.5 151.1-39.5 24.3 0 108.2 2.6 168.6 79.2zm-119.6-250.4c28.3-36.3 48.5-87.2 48.5-138.1 0-7.1-.6-14.3-1.9-20.1-45.5 1.7-99.8 30.4-132.5 72.4-25.4 31.4-49.2 81.6-49.2 133.3 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 40.8 0 89.1-27.1 119.6-66.9z"/>
        </svg>
        <span className="text-white text-xs font-semibold">Apple Pay</span>
      </div>

      {/* Zelle */}
      <div className="inline-flex items-center">
        <svg viewBox="0 0 54 18" width="46" height="16" aria-hidden="true">
          <text x="0" y="14" fontFamily="Arial" fontWeight="bold" fontSize="16" fill="#6D1ED4">Zelle</text>
        </svg>
      </div>
    </div>
  )
}
