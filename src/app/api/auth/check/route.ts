import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 })
    }

    if (session.user.role !== "admin") {
      return NextResponse.json({ error: "Não autorizado" }, { status: 403 })
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        role: session.user.role,
      },
    })
  } catch (error) {
    console.error("Error checking auth:", error)
    return NextResponse.json({ error: "Ocorreu um erro ao verificar a autenticação." }, { status: 500 })
  }
}

