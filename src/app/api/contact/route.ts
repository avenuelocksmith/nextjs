import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'edge'

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional().or(z.literal('')),
  category: z.string().min(1),
  service: z.string().min(1),
  message: z.string().optional(),
  pageRef: z.string().optional(),
})

async function sendToTelegram(
  data: z.infer<typeof contactSchema>,
  source: string
): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) throw new Error('Telegram not configured')

  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
  })

  const pageLabel = data.pageRef || source || 'direct'

  const text =
    `<b>📋 New Contact Form Lead — Avenue Locksmith</b>\n\n` +
    `👤 <b>Name:</b> ${data.name}\n` +
    `📞 <b>Phone:</b> ${data.phone}\n` +
    (data.email ? `📧 <b>Email:</b> ${data.email}\n` : '') +
    `🏷 <b>Category:</b> ${data.category}\n` +
    `🔧 <b>Service:</b> ${data.service}\n` +
    (data.message ? `💬 <b>Message:</b> ${data.message}\n` : '') +
    `\n🕐 <b>Time:</b> ${timestamp} ET\n` +
    `📄 <b>Page:</b> ${pageLabel}`

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
    const data = contactSchema.parse(body)
    const source = request.headers.get('referer') || 'direct'

    // Log submission server-side (visible in Vercel/server logs)
    console.log('[Contact Form Submission]', {
      timestamp: new Date().toISOString(),
      name: data.name,
      phone: data.phone,
      email: data.email || '(not provided)',
      category: data.category,
      service: data.service,
      message: data.message || '(none)',
      pageRef: data.pageRef || source,
    })

    // Send to Telegram (non-blocking — don't fail the request if Telegram is down)
    try {
      await sendToTelegram(data, source)
    } catch (err) {
      console.error('[Contact Form] Telegram send failed:', err)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid form data' },
        { status: 400 }
      )
    }
    console.error('[Contact Form Error]', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
