import { NextRequest, NextResponse } from 'next/server'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

export const runtime = 'edge'

const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024 // 10 MB per image
const MAX_IMAGES = 3

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySupabaseClient = SupabaseClient<any, any, any>

function getSupabase(): AnySupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) throw new Error('Supabase env vars not configured')
  return createClient(url, key)
}

async function uploadImage(
  supabase: AnySupabaseClient,
  file: File,
  index: number
): Promise<string> {
  const ext = file.name.split('.').pop() ?? 'jpg'
  const path = `quotes/${Date.now()}-${index}.${ext}`

  const { error } = await supabase.storage
    .from('quote-images')
    .upload(path, file, { contentType: file.type, upsert: false })

  if (error) throw new Error(`Image upload failed: ${error.message}`)

  const { data } = supabase.storage.from('quote-images').getPublicUrl(path)
  return data.publicUrl
}

async function sendTelegram(
  phone: string,
  address: string,
  comment: string,
  imageUrls: string[]
): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) throw new Error('Telegram env vars not configured')

  const base = `https://api.telegram.org/bot${token}`
  const caption =
    `<b>📋 New Quote Request — Avenue Locksmith</b>\n\n` +
    `📞 <b>Phone:</b> ${phone}\n` +
    `📍 <b>Address:</b> ${address}\n` +
    `💬 <b>Issue:</b>\n${comment}`

  if (imageUrls.length > 0) {
    const media = imageUrls.map((url, i) => ({
      type: 'photo',
      media: url,
      ...(i === 0 ? { caption, parse_mode: 'HTML' } : {}),
    }))

    const res = await fetch(`${base}/sendMediaGroup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, media }),
    })

    if (!res.ok) {
      const err = await res.text()
      throw new Error(`Telegram sendMediaGroup failed: ${err}`)
    }
  } else {
    const res = await fetch(`${base}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: caption, parse_mode: 'HTML' }),
    })

    if (!res.ok) {
      const err = await res.text()
      throw new Error(`Telegram sendMessage failed: ${err}`)
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') ?? ''
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json({ success: false, error: 'Invalid request format' }, { status: 400 })
    }

    const formData = await request.formData()

    const phone = (formData.get('phone') as string | null)?.trim() ?? ''
    const address = (formData.get('address') as string | null)?.trim() ?? ''
    const comment = (formData.get('comment') as string | null)?.trim() ?? ''

    if (!phone || phone.length < 7) {
      return NextResponse.json({ success: false, error: 'Valid phone number is required' }, { status: 400 })
    }
    if (!address || address.length < 5) {
      return NextResponse.json({ success: false, error: 'Address is required' }, { status: 400 })
    }
    // comment is optional

    const imageFiles: File[] = []
    for (let i = 0; i < MAX_IMAGES; i++) {
      const file = formData.get(`image_${i}`)
      if (file && file instanceof File && file.size > 0) {
        if (!ALLOWED_MIME_TYPES.includes(file.type)) {
          return NextResponse.json({ success: false, error: `File ${i + 1} must be a JPEG, PNG, or WebP image` }, { status: 400 })
        }
        if (file.size > MAX_FILE_SIZE_BYTES) {
          return NextResponse.json({ success: false, error: `File ${i + 1} exceeds the 10 MB size limit` }, { status: 400 })
        }
        imageFiles.push(file)
      }
    }

    const supabase = getSupabase()

    // Upload images in parallel
    const imageUrls = await Promise.all(
      imageFiles.map((file, i) => uploadImage(supabase, file, i))
    )

    // Save quote to database
    const { error: dbError } = await supabase.from('quotes').insert({
      phone,
      address,
      comment,
      image_urls: imageUrls,
    })

    if (dbError) {
      console.error('[Quote DB Error]', dbError.message)
      return NextResponse.json({ success: false, error: 'Failed to save quote' }, { status: 500 })
    }

    // Notify via Telegram (non-blocking failure — quote is already saved)
    try {
      await sendTelegram(phone, address, comment, imageUrls)
    } catch (telegramErr) {
      console.error('[Telegram Error]', telegramErr)
      // Quote saved, notification failed — still return success
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[Quote API Error]', err)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
