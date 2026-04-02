export interface ChatOption {
  label: string
  value: string
  next: string
}

export interface FlowNode {
  bot: string
  options?: ChatOption[]
  input?: { placeholder: string; type: 'text' | 'tel' }
  nextAfterInput?: string
  isEnd?: boolean
}

export const FLOW: Record<string, FlowNode> = {
  welcome: {
    bot: "Hi! I'm the Avenue Locksmith assistant. How can I help you today?",
    options: [
      { label: '🔑 I\'m locked out right now', value: 'Locked out', next: 'lockout_type' },
      { label: '💰 Get a price quote', value: 'Price quote', next: 'quote_service' },
      { label: '🔒 Services & pricing info', value: 'Services info', next: 'service_list' },
      { label: '❓ Ask a question', value: 'Ask a question', next: 'ask_input' },
    ],
  },

  // --- Lockout path ---
  lockout_type: {
    bot: 'What are you locked out of?',
    options: [
      { label: '🏠 Home or apartment', value: 'Home lockout', next: 'lockout_urgent' },
      { label: '🚗 Car or vehicle', value: 'Car lockout', next: 'lockout_urgent' },
      { label: '🏢 Office or business', value: 'Business lockout', next: 'lockout_urgent' },
    ],
  },
  lockout_urgent: {
    bot: 'We can be there in 15–25 minutes, 24/7 — same price day or night, no surcharge. To dispatch a technician, share your number below.',
    options: [
      { label: '📞 Leave my number', value: 'Leave number', next: 'phone_collect' },
      { label: '💬 I have questions first', value: 'Questions first', next: 'welcome' },
    ],
  },

  // --- Quote path ---
  quote_service: {
    bot: 'Which service do you need a quote for?',
    options: [
      { label: 'Lock rekey', value: 'Lock rekey quote', next: 'quote_ready' },
      { label: 'Lock change / install', value: 'Lock change quote', next: 'quote_ready' },
      { label: 'Deadbolt installation', value: 'Deadbolt quote', next: 'quote_ready' },
      { label: 'Smart lock / access control', value: 'Smart lock quote', next: 'quote_ready' },
      { label: 'Emergency lockout', value: 'Emergency lockout quote', next: 'quote_ready' },
      { label: 'Something else', value: 'Other service', next: 'quote_ready' },
    ],
  },
  quote_ready: {
    bot: 'We quote the full price upfront before any work starts — no surprises. Leave your number and we\'ll call with an accurate quote in minutes.',
    options: [
      { label: '📞 Leave my number', value: 'Leave number for quote', next: 'phone_collect' },
    ],
  },

  // --- Services info path ---
  service_list: {
    bot: 'Which service would you like to know more about?',
    options: [
      { label: 'Residential locksmith', value: 'Residential info', next: 'info_residential' },
      { label: 'Commercial locksmith', value: 'Commercial info', next: 'info_commercial' },
      { label: 'Auto locksmith', value: 'Auto info', next: 'info_auto' },
      { label: 'Emergency locksmith', value: 'Emergency info', next: 'info_emergency' },
      { label: 'Lock rekey vs. lock change', value: 'Rekey vs change', next: 'info_rekey' },
      { label: 'Security upgrades & CCTV', value: 'Security info', next: 'info_security' },
    ],
  },
  info_residential: {
    bot: 'Residential services: home & apartment lockouts, lock rekeying ($65–$85, ~20 min), lock change ($95–$200+), deadbolt installation, smart locks, mailbox locks, and new tenant lock changes. All 24/7 with upfront pricing.',
    options: [
      { label: '📞 Book a service', value: 'Book residential', next: 'phone_collect' },
      { label: '← Back', value: 'Back', next: 'service_list' },
    ],
  },
  info_commercial: {
    bot: 'Commercial services: business lockouts, master key systems, access control installation, office rekeying, high-security locks, and CCTV. We serve offices, retail, warehouses, and medical facilities.',
    options: [
      { label: '📞 Book a service', value: 'Book commercial', next: 'phone_collect' },
      { label: '← Back', value: 'Back', next: 'service_list' },
    ],
  },
  info_auto: {
    bot: 'Auto services: car lockouts for all makes & models (no damage), spare key cutting, transponder key programming, key fob replacement, and broken key extraction. 24/7 across Brooklyn.',
    options: [
      { label: '📞 Book a service', value: 'Book auto', next: 'phone_collect' },
      { label: '← Back', value: 'Back', next: 'service_list' },
    ],
  },
  info_emergency: {
    bot: '24/7 emergency service with 15–25 minute arrival anywhere in Brooklyn. Same price day or night — zero after-hours surcharge. Covers home, car, and business lockouts.',
    options: [
      { label: '📞 Dispatch now', value: 'Dispatch emergency', next: 'phone_collect' },
      { label: '← Back', value: 'Back', next: 'service_list' },
    ],
  },
  info_rekey: {
    bot: 'Rekeying ($65–$85, ~20 min) changes the internal pins so old keys stop working — same lock, new key. Lock change ($95–$200+) replaces all hardware. Rekey when the lock is in good shape; replace if it\'s damaged or you\'re upgrading security grade.',
    options: [
      { label: '📞 Book now', value: 'Book rekey or change', next: 'phone_collect' },
      { label: '← Back', value: 'Back', next: 'service_list' },
    ],
  },
  info_security: {
    bot: 'Security upgrades: high-security locks (Medeco, Mul-T-Lock), access control, CCTV installation, smart locks, keyless entry, biometric access, and door frame reinforcement. Free consultation available.',
    options: [
      { label: '📞 Book a consultation', value: 'Book security consult', next: 'phone_collect' },
      { label: '← Back', value: 'Back', next: 'service_list' },
    ],
  },

  // --- Free-text question path (AI handles response) ---
  ask_input: {
    bot: 'Go ahead — type your question and I\'ll answer based on our services.',
    input: { placeholder: 'Type your question…', type: 'text' },
    nextAfterInput: '__ai__', // special — handled in component
  },

  // --- Phone collection ---
  phone_collect: {
    bot: 'What\'s the best number to reach you? A technician will call back within minutes.',
    input: { placeholder: 'e.g. (347) 555-1234', type: 'tel' },
    nextAfterInput: 'confirmed',
  },

  // --- End ---
  confirmed: {
    bot: `✅ Got it! We've received your info and a technician will reach out shortly. For immediate help call us directly at ${
      // value injected at runtime via BUSINESS.phone
      '(347) 386-7164'
    }.`,
    isEnd: true,
  },
  fallback: {
    bot: "That's a great question — I want to make sure you get an accurate answer. One of our team members will follow up with you directly. Want to leave your number?",
    options: [
      { label: '📞 Yes, call me back', value: 'Call me back', next: 'phone_collect' },
      { label: '← Back to menu', value: 'Back', next: 'welcome' },
    ],
  },
}
