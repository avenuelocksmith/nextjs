import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

export const runtime = 'nodejs'

const KNOWLEDGE = `
You are the virtual assistant for Avenue Locksmith, a licensed locksmith company serving Brooklyn, NY and all NYC boroughs.

BUSINESS FACTS:
- Name: Avenue Locksmith
- Phone: (347) 386-7164
- Address: 973 E 55th St, Brooklyn, NY 11234
- Hours: 24/7, 365 days a year
- License: NYC DCWP (Department of Consumer and Worker Protection) Locksmith License
- Bonded and fully insured
- Response time: 15–25 minutes for emergencies anywhere in Brooklyn
- No after-hours surcharges — same price 24/7
- Upfront pricing before any work begins — no hidden fees

SERVICE AREAS:
Brooklyn (all 49 neighborhoods), Queens, Manhattan, Staten Island. Primary focus is Brooklyn.

SERVICES & PRICING:
Residential:
- Home/apartment lockout: $75–$125
- Lock rekey: $65–$85 per lock (~20 min). Changes internal pins, old keys stop working, same lock kept.
- Lock change/replacement: $95–$200+ (~30–45 min). Full hardware replacement.
- Deadbolt installation (ANSI Grade 1 & 2): $125–$250
- Smart lock installation (August, Yale, Schlage Encode): $150–$350
- Mailbox lock replacement: $65–$95
- New tenant lock change: $75–$150 (most popular move-in service)
- Key duplication: $15–$45

Commercial:
- Business lockout: $95–$175
- Master key system: $200–$800+
- Access control installation: $300–$2,000+
- Office/commercial rekey: $65–$85 per lock
- High-security lock installation: $200–$500

Automotive:
- Car lockout: $75–$150
- Transponder key programming: $150–$350
- Key fob replacement: $100–$300
- Broken key extraction: $65–$95

Security Solutions:
- High-security locks (Medeco, Mul-T-Lock, Schlage): $200–$600
- Access control systems: $300–$2,000
- CCTV installation: $400–$3,000
- Smart locks: $150–$600
- Keyless entry systems: $125–$400
- Biometric access systems: $500–$3,000
- Door frame reinforcement: $175–$450

Emergency Locksmith:
- Available 24/7 — no extra charge for nights, weekends, or holidays
- 15–25 minute arrival guarantee across Brooklyn
- Covers home, car, and business lockouts

Eviction Locksmith:
- Legal lock changes for NYC landlords after lawful eviction
- Requires NY City Marshal paperwork with valid court warrant
- Self-help eviction is illegal in New York State

KEY FACTS:
- There is NO New York State locksmith license — licensing is at the NYC level (DCWP)
- NYC tenants have the right to change their own locks (NYC Admin Code §27-2043) but must give landlord a copy within 30 days
- Rekeying is recommended when the lock is in good condition; lock change when it's damaged, worn, or you want to upgrade
- Non-destructive entry is used for lockouts — drilling is a last resort
- All technicians are background-checked and carry DCWP license ID

WHAT YOU CANNOT DO:
- Schedule specific appointments (tell them to call)
- Provide exact price quotes (give ranges, say exact quote given on call)
- Make guarantees beyond what is listed above
`

async function askClaude(question: string): Promise<{ answer: string; canAnswer: boolean }> {
  const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  })

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 300,
    system: `${KNOWLEDGE}

INSTRUCTIONS:
- Answer ONLY based on the knowledge above about Avenue Locksmith.
- Keep answers concise (2–4 sentences max).
- If the question is clearly outside your knowledge, respond with exactly: CANNOT_ANSWER
- Do not make up prices, services, or policies not listed above.
- Be friendly, direct, and helpful.
- Do not repeat the question back to the user.`,
    messages: [{ role: 'user', content: question }],
  })

  const text = response.content[0].type === 'text' ? response.content[0].text.trim() : ''
  const canAnswer = text !== 'CANNOT_ANSWER' && text.length > 0

  return {
    answer: canAnswer
      ? text
      : "That's a great question — I want to make sure you get an accurate answer. One of our team members will follow up with you directly.",
    canAnswer,
  }
}

async function sendToTelegram(messages: { from: string; text: string }[], phone: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) throw new Error('Telegram not configured')

  const transcript = messages
    .map((m) => `${m.from === 'bot' ? '🤖' : '👤'} ${m.text}`)
    .join('\n')

  const text =
    `<b>💬 New Chat Lead — Avenue Locksmith</b>\n\n` +
    `📞 <b>Phone:</b> ${phone}\n\n` +
    `<b>Conversation:</b>\n${transcript}`

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
    }),
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (body.action === 'ask') {
      const { question } = body
      if (!question || typeof question !== 'string' || question.trim().length < 2) {
        return NextResponse.json({ error: 'Invalid question' }, { status: 400 })
      }
      const result = await askClaude(question.trim())
      return NextResponse.json(result)
    }

    if (body.action === 'submit') {
      const { messages, phone } = body
      if (!phone || !Array.isArray(messages)) {
        return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
      }
      await sendToTelegram(messages, phone)
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
  } catch (err) {
    console.error('[Chat API error]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
