import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"

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

    // Criar o rascunho no banco de dados
    const newsletter = await prisma.newsletter.create({
      data: {
        title,
        content,
        contentType,
        status: "draft",
        preferences: {
          connect: preferenceIds.map((id: string) => ({ id })),
        },
      },
    })

    return NextResponse.json({
      success: true,
      message: "Rascunho salvo com sucesso!",
      newsletterId: newsletter.id,
    })
  } catch (error) {
    console.error("Error saving draft:", error)
    return NextResponse.json({ error: "Ocorreu um erro ao salvar o rascunho." }, { status: 500 })
  }
}

