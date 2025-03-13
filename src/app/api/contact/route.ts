import { ContactEmailTemplate } from "@/components/email-contact-template"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    const { data, error } = await resend.emails.send({
        from: `Luty Eventos <onboarding@resend.dev>`,
        to: [process.env.COMPANY_EMAIL!],
      subject: `Nova mensagem de contato - ${name}`,
      react: ContactEmailTemplate({
        name,
        email,
        phone,
        company,
        message,
      }),
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    // Enviar e-mail de confirmação para o cliente
    await resend.emails.send({
      from: `Luty Eventos <onboarding@resend.dev>`,
      to: [email],
      subject: "Recebemos sua mensagem - Luty Eventos",
      react: ContactEmailTemplate({
        name,
        email,
        phone,
        company,
        message,
        isConfirmation: true,
      }),
    })

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

