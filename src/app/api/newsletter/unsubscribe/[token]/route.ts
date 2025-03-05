import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { token: string } }) {
  try {
    const token = params.token

    // Buscar assinante pelo token de cancelamento
    const subscriber = await prisma.subscriber.findUnique({
      where: { unsubscribeToken: token },
    })

    if (!subscriber) {
      return NextResponse.json(
        { error: "Token inválido ou expirado. Por favor, verifique o link e tente novamente." },
        { status: 400 },
      )
    }

    // Verificar se o assinante já está cancelado
    if (subscriber.status === "unsubscribed") {
      return NextResponse.json({ message: "Sua inscrição já foi cancelada anteriormente." }, { status: 200 })
    }

    // Atualizar status para cancelado
    await prisma.subscriber.update({
      where: { id: subscriber.id },
      data: {
        status: "unsubscribed",
      },
    })

    return NextResponse.json({
      success: true,
      message: "Sua inscrição foi cancelada com sucesso. Sentiremos sua falta!",
    })
  } catch (error) {
    console.error("Error unsubscribing:", error)
    return NextResponse.json(
      { error: "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde." },
      { status: 500 },
    )
  }
}

