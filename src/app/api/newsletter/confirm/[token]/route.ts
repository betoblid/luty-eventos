import { WelcomeEmailTemplate } from "@/components/email/welcome-template"
import { prisma } from "@/lib/prisma"
import { getBaseUrl } from "@/lib/utils"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET(request: Request, { params }: { params: { token: string } }) {
  try {
    const token = params.token

    // Buscar assinante pelo token de confirmação
    const subscriber = await prisma.subscriber.findUnique({
      where: { confirmationToken: token },
      include: { preferences: true },
    })

    if (!subscriber) {
      return NextResponse.json(
        { error: "Token inválido ou expirado. Por favor, solicite uma nova confirmação." },
        { status: 400 },
      )
    }

    // Verificar se o assinante já está ativo
    if (subscriber.status === "active") {
      return NextResponse.json({ message: "Sua inscrição já foi confirmada anteriormente." }, { status: 200 })
    }

    // Atualizar status para ativo e remover token de confirmação
    await prisma.subscriber.update({
      where: { id: subscriber.id },
      data: {
        status: "active",
        confirmationToken: null,
      },
    })

    // Enviar e-mail de boas-vindas
    const unsubscribeUrl = `${getBaseUrl()}/newsletter/unsubscribe/${subscriber.unsubscribeToken}`

    await resend.emails.send({
      from: "Luty Eventos <newsletter@lutyeventos.com.br>",
      to: [subscriber.email],
      subject: "Bem-vindo à Newsletter da Luty Eventos!",
      react: WelcomeEmailTemplate({
        name: subscriber.name,
        preferences: subscriber.preferences.map((p) => p.displayName),
        unsubscribeUrl,
      }),
    })

    // Redirecionar para página de sucesso
    return NextResponse.redirect(new URL("/newsletter/success", request.url))
  } catch (error) {
    console.error("Error confirming subscription:", error)
    return NextResponse.json(
      { error: "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde." },
      { status: 500 },
    )
  }
}

