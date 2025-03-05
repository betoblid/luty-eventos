import { NewsletterTemplate } from "@/components/email/newsletter-template"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { getBaseUrl } from "@/lib/utils"
import { marked } from "marked"
import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    // Verificar autenticação
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Não autenticado. Faça login para continuar." }, { status: 401 })
    }

    if (session.user.role !== "admin") {
      return NextResponse.json({ error: "Você não tem permissão para realizar esta ação." }, { status: 403 })
    }

    const body = await request.json()
    const { title, content, preferenceIds, contentType = "markdown" } = body

    // Validar dados de entrada
    if (!title || !content || !preferenceIds || preferenceIds.length === 0) {
      return NextResponse.json(
        {
          error: "Dados inválidos. Verifique se todos os campos foram preenchidos corretamente.",
        },
        { status: 400 },
      )
    }

    // Criar a newsletter no banco de dados
    const newsletter = await prisma.newsletter.create({
      data: {
        title,
        content,
        contentType,
        status: "sent",
        preferences: {
          connect: preferenceIds.map((id: string) => ({ id })),
        },
      },
    })

    // Buscar todos os assinantes ativos com as preferências selecionadas
    const subscribers = await prisma.subscriber.findMany({
      where: {
        status: "active",
        preferences: {
          some: {
            id: {
              in: preferenceIds,
            },
          },
        },
      },
    })

    // Converter markdown para HTML se necessário
    let processedContent = content
    if (contentType === "markdown") {
      processedContent = marked(content)
    }

    // Enviar a newsletter para cada assinante
    for (const subscriber of subscribers) {
      const unsubscribeUrl = `${getBaseUrl()}/newsletter/unsubscribe/${subscriber.unsubscribeToken}`

      // Criar o conteúdo da newsletter
      const newsletterContent = [
        {
          title,
          description: processedContent,
          isHtml: contentType === "markdown",
          link: `${getBaseUrl()}/newsletter/view/${newsletter.id}`,
        },
      ]

      // Enviar o e-mail
      await resend.emails.send({
        from: `Luty Eventos <onboarding@resend.dev>`,
        to: [subscriber.email],
        subject: title,
        react: NewsletterTemplate({
          name: subscriber.name,
          unsubscribeUrl,
          content: newsletterContent,
        }),
      })

      // Registrar o envio
      await prisma.newsletterRecipient.create({
        data: {
          newsletterId: newsletter.id,
          subscriberId: subscriber.id,
        },
      })
    }

    return NextResponse.json({
      success: true,
      message: `Newsletter enviada com sucesso para ${subscribers.length} assinantes.`,
    })
  } catch (error) {
    console.error("Error sending newsletter:", error)
    return NextResponse.json({ error: "Ocorreu um erro ao enviar a newsletter." }, { status: 500 })
  }
}

