import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional().or(z.literal('')),
  service: z.string().min(1),
  message: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    // Log submission server-side (visible in Vercel/server logs)
    console.log('[Contact Form Submission]', {
      timestamp: new Date().toISOString(),
      name: data.name,
      phone: data.phone,
      email: data.email || '(not provided)',
      service: data.service,
      message: data.message || '(none)',
      source: request.headers.get('referer') || 'direct',
    })

    // ---------------------------------------------------------------
    // TODO: Integrate email notification here.
    // Options:
    //   - Resend:   https://resend.com  (process.env.RESEND_API_KEY)
    //   - SendGrid: https://sendgrid.com (process.env.SENDGRID_API_KEY)
    //   - Nodemailer with SMTP
    //
    // Example with Resend:
    //   import { Resend } from 'resend'
    //   const resend = new Resend(process.env.RESEND_API_KEY)
    //   await resend.emails.send({
    //     from: 'leads@avenuelocks.com',
    //     to: 'info@avenuelocks.com',
    //     subject: `New Lead: ${data.service} — ${data.name}`,
    //     text: `Name: ${data.name}\nPhone: ${data.phone}\nService: ${data.service}\nMessage: ${data.message}`,
    //   })
    // ---------------------------------------------------------------

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
