import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'edge'

const callbackSchema = z.object({
  phone: z.string().min(7).max(20),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { phone } = callbackSchema.parse(body)

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      console.error('[Callback] Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID')
      return NextResponse.json({ success: false, error: 'Server misconfiguration' }, { status: 500 })
    }

    const text = `📞 *Callback Request*\nPhone: ${phone}\nTime: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET\nSource: ${request.headers.get('referer') || 'direct'}`

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('[Callback] Telegram error:', err)
      return NextResponse.json({ success: false, error: 'Notification failed' }, { status: 502 })
    }

    console.log('[Callback] Sent to Telegram:', phone)
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: 'Invalid phone number' }, { status: 400 })
    }
    console.error('[Callback Error]', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
