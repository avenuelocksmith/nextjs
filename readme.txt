================================================================================
AVENUE LOCKSMITH — PROJECT README
================================================================================

--------------------------------------------------------------------------------
1. QUOTE FORM (/free-quote/)
--------------------------------------------------------------------------------

Files:
  src/app/free-quote/page.tsx        — Server page (metadata, schema, hero, promises)
  src/components/sections/QuoteForm.tsx — Client form component
  src/app/api/quote/route.ts         — Edge API route

Form fields:
  - Up to 3 photos (drag-and-drop, JPEG/PNG/WebP, max 10MB each)
  - Phone number (required)
  - Address (required)
  - Describe the issue (optional)

API route behaviour:
  - Validates fields server-side
  - Uploads images to Supabase Storage bucket: quote-images
  - Saves record to Supabase table: quotes
  - Sends Telegram notification (sendMediaGroup with images, sendMessage without)

Supabase setup — run in SQL editor:

  create table quotes (
    id uuid primary key default gen_random_uuid(),
    phone text not null,
    address text not null,
    comment text not null,
    image_urls text[] default '{}',
    created_at timestamptz default now()
  );

  Storage → create bucket named "quote-images" → set to Public.

--------------------------------------------------------------------------------
2. LIVE CHAT (/api/chat)
--------------------------------------------------------------------------------

Files:
  src/components/ui/LiveChat.tsx     — Chat widget (client component, global)
  src/lib/chatFlow.ts                — Guided flow nodes and options
  src/app/api/chat/route.ts          — API: AI ask + Telegram submit (Node.js runtime)

How it works:
  - Multiple-choice guided flow (locked out / quote / services info / ask a question)
  - Free-text "Ask a question" path sends question to AI model
  - AI answers only from a fixed knowledge base (services, pricing, license, FAQs)
  - If AI cannot answer: politely defers and offers callback
  - Final step always collects phone number
  - Full conversation transcript + phone sent to Telegram on submission

AI model (current): Anthropic Claude Haiku (claude-haiku-4-5-20251001)

Switching AI provider — only src/app/api/chat/route.ts needs to change.
Replace the import and askClaude() function body. KNOWLEDGE prompt stays the same.

  Option A — OpenAI (GPT-4o mini):
    npm install openai
    import OpenAI from 'openai'
    model: 'gpt-4o-mini'
    Env var: OPENAI_API_KEY=sk-...

  Option B — Google Gemini (1.5 Flash, free tier):
    npm install @google/generative-ai
    import { GoogleGenerativeAI } from '@google/generative-ai'
    model: 'gemini-1.5-flash'
    Env var: GOOGLE_AI_API_KEY=...

  Option C — Groq / Llama 3 (recommended — fastest, free tier):
    npm install groq-sdk
    import Groq from 'groq-sdk'
    model: 'llama-3.1-8b-instant'
    Env var: GROQ_API_KEY=gsk_...

  In all cases the function signature and return shape stay identical:
    { answer: string, canAnswer: boolean }

--------------------------------------------------------------------------------
3. CRO COMPONENTS (global — loaded in layout.tsx)
--------------------------------------------------------------------------------

  LiveActivityBar   src/components/ui/LiveActivityBar.tsx
    - Shows on homepage and neighbourhood pages (showLiveActivity prop on HeroSection)
    - Randomises per page load: 2–5 techs available, 3–7 jobs active, 1–3 dispatched
    - Count-up animation on mount; amber urgency nudge when techs <= 2

  RecentCallTicker  src/components/ui/RecentCallTicker.tsx
    - Fires 3.5s after load, visible 5s, hides 4s, loops indefinitely
    - Randomly picks Brooklyn neighbourhood + service type + minutes ago
    - Bottom-left, above mobile sticky bar

  ExitIntentModal   src/components/ui/ExitIntentModal.tsx
    - Desktop only; fires when cursor exits through top of viewport
    - 3s minimum on page before can trigger
    - Shown once per session (sessionStorage key: exit_modal_shown)

  MobileStickyCTA   src/components/ui/MobileStickyCTA.tsx
    - Fixed bottom bar on mobile: Call Now | Free Quote
    - Call button pulses (ring animation + icon scale) every 8 seconds

  LiveChat          src/components/ui/LiveChat.tsx
    - Floating amber button, bottom-right, above mobile bar
    - Unread red dot appears after 12s if not opened
    - See section 2 above for full details

--------------------------------------------------------------------------------
4. ENVIRONMENT VARIABLES
--------------------------------------------------------------------------------

Add all of the following to Cloudflare Pages → Settings → Environment Variables:

  # Supabase (quote form)
  NEXT_PUBLIC_SUPABASE_URL=https://<your-project>.supabase.co
  SUPABASE_SERVICE_ROLE_KEY=<service role key from Supabase dashboard>

  # Telegram (quote form + live chat)
  TELEGRAM_BOT_TOKEN=<bot token from @BotFather>
  TELEGRAM_CHAT_ID=<your chat or group ID>

  # AI model (live chat)
  ANTHROPIC_API_KEY=sk-ant-...          ← current provider
  # OPENAI_API_KEY=sk-...              ← if switching to OpenAI
  # GOOGLE_AI_API_KEY=...             ← if switching to Gemini
  # GROQ_API_KEY=gsk_...              ← if switching to Groq

  # Optional
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<Google Maps embed key>
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<Google Search Console token>

--------------------------------------------------------------------------------
5. CLOUDFLARE PAGES BUILD SETTINGS
--------------------------------------------------------------------------------

  Framework preset : Next.js
  Build command    : npm run build
  Output directory : .next

  For full Cloudflare Pages compatibility:
    npm install @cloudflare/next-on-pages
    Build command: npx @cloudflare/next-on-pages

  Note: The chat API route uses runtime = 'nodejs'. Ensure your Cloudflare Pages
  plan supports Node.js compatibility mode (enable in Settings → Functions →
  Compatibility flags → nodejs_compat).

--------------------------------------------------------------------------------
6. FACTUAL NOTES (important for content accuracy)
--------------------------------------------------------------------------------

  - There is NO New York State locksmith licence.
    Licensing is city-level: NYC DCWP (Dept of Consumer and Worker Protection).
    All site content uses "NYC DCWP licensed" — do not revert to "NY State".

  - Emergency response time across the site is 15–25 minutes (not 30).

  - Opening hours schema uses opens: '00:00' / closes: '23:59' for 24/7 service.

================================================================================
