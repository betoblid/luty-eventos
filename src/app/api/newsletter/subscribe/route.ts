import { ConfirmationEmailTemplate } from "@/components/email/confirmation-template"
import { prisma } from "@/lib/prisma"
import { generateToken, getBaseUrl } from "@/lib/utils"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, preferences } = body

    // Verificar se o e-mail já existe
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    })

    if (existingSubscriber) {
      if (existingSubscriber.status === "active") {
        return NextResponse.json({ message: "Este e-mail já está inscrito em nossa newsletter." }, { status: 400 })
      } else if (existingSubscriber.status === "pending") {
        // Reenviar e-mail de confirmação
        const confirmationUrl = `${getBaseUrl()}/newsletter/confirm/${existingSubscriber.confirmationToken}`

        await resend.emails.send({
          from: `Luty Eventos <onboarding@resend.dev>`,
          to: [email],
          subject: "Confirme sua inscrição na Newsletter",
          react: ConfirmationEmailTemplate({
            name,
            confirmationUrl,
          }),
        })

        return NextResponse.json({
          success: true,
          message: "Por favor, confirme sua inscrição através do link enviado ao seu e-mail.",
        })
        //Este e-mail já foi removido da nossa newsletter.
      } else if (existingSubscriber.status === "unsubscribed") {

        // antes de ativa o status do usuário, atualizar o token de 'confirmationToken' e 'unsubscribeToken' e atualizar o status para 'pending'
        // Gerar tokens
        const confirmationToken = generateToken()
        const unsubscribeToken = generateToken()

        //atualiza no banco de dados
        await prisma.subscriber.update({
          where: { email },
          data: {
            confirmationToken,
            unsubscribeToken,
            status: "pending",
            preferences: {
              connect: preferences.map((prefId: string) => ({ id: prefId })),
            },
          },
        });
        // Reenviar e-mail de confirmação
        const confirmationUrl = `${getBaseUrl()}/newsletter/confirm/${confirmationToken}`

        await resend.emails.send({
          from: `Luty Eventos <onboarding@resend.dev>`,
          to: [email],
          subject: "Confirme sua inscrição na Newsletter",
          react: ConfirmationEmailTemplate({
            name,
            confirmationUrl,
          }),
        })

        return NextResponse.json({ message: "Este e-mail já foi removido da nossa newsletter, revalidando." }, { status: 200 })
      }
    }

    // Gerar tokens
    const confirmationToken = generateToken()
    const unsubscribeToken = generateToken()

    // Criar novo assinante
    const subscriber = await prisma.subscriber.create({
      data: {
        name,
        email,
        confirmationToken,
        unsubscribeToken,
        preferences: {
          connect: preferences.map((prefId: string) => ({ id: prefId })),
        },
      },
    })

    // Enviar e-mail de confirmação
    const confirmationUrl = `${getBaseUrl()}/newsletter/confirm/${confirmationToken}`

    await resend.emails.send({
      from: `Luty Eventos <onboarding@resend.dev>`,
      to: [email],
      subject: "Confirme sua inscrição na Newsletter",
      react: ConfirmationEmailTemplate({
        name,
        confirmationUrl,
      }),
    })

    return NextResponse.json({
      success: true,
      message: "Por favor, confirme sua inscrição através do link enviado ao seu e-mail.",
    })
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return NextResponse.json({ error: "Ocorreu um erro ao processar sua solicitação." }, { status: 500 })
  }
}

