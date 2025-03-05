import { prisma } from "@/lib/prisma"
import { compare } from "bcrypt"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 dias
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login?error=AuthError",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        if (!user) {
          throw new Error("Usuário não encontrado")
        }

        const isPasswordValid = await compare(credentials.password, user.password)

        if (!isPasswordValid) {
          throw new Error("Senha incorreta")
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Adicionar role ao token quando o usuário faz login
      if (user) {
        token.role = user.role
        token.email = user.email
        token.name = user.name
        token.sub = user.id
      }
      return token
    },
    async session({ session, token }) {
      // Adicionar informações do token à sessão
      if (session.user) {
        session.user.id = token.sub as string
        session.user.role = token.role as string
        session.user.email = token.email as string
        session.user.name = (token.name as string) || null
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
}

export type AuthUser = {
  id: string
  name?: string | null
  email: string
  role: string
}

declare module "next-auth" {
  interface User extends AuthUser { }

  interface Session {
    user: AuthUser
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string
  }
}

