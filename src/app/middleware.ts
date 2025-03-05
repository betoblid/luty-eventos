import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
    // Obter o token da sessão
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    })

    // Verificar se a rota é administrativa
    const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")

    // Se for uma rota administrativa e não houver token, redirecionar para login
    if (isAdminRoute && !token) {
        const url = new URL("/admin/login", request.url)
        url.searchParams.set("callbackUrl", encodeURI(request.nextUrl.pathname))
        return NextResponse.redirect(url)
    }

    // Se for uma rota administrativa e o usuário não for admin, redirecionar para a página inicial
    if (isAdminRoute && token && token.role !== "admin") {
        return NextResponse.redirect(new URL("/", request.url))
    }

    return NextResponse.next()
}

// Configurar quais rotas o middleware deve ser executado
export const config = {
    matcher: ["/admin/:path*", "/api/admin/:path*", "/api/newsletter/send/:path*", "/api/newsletter/draft/:path*"],
}

