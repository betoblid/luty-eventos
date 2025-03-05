import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const preferences = await prisma.preference.findMany({
      orderBy: { displayName: "asc" },
    })

    return NextResponse.json(preferences)
  } catch (error) {
    console.error("Error fetching preferences:", error)
    return NextResponse.json({ error: "Ocorreu um erro ao buscar as preferências." }, { status: 500 })
  }
}

