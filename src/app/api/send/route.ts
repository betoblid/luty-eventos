import { EmailTemplate } from "@/components/email-template"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, observations, services } = body

    const { data, error } = await resend.emails.send({
      from: `Luty Eventos <onboarding@resend.dev>`,
      to: [process.env.COMPANY_EMAIL!],
      subject: "Solicitação de Orçamento - Luty Eventos",
      react: EmailTemplate({
        name,
        email,
        phone,
        company,
        observations,
        services,
      }),
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

