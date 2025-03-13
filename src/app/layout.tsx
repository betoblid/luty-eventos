import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Decoração Completa, Buffet e Serviços para Eventos em  Salvador e Região Metropolitana - Luty Eventos",
  description: "Encontre a melhor decoração e buffet para festas e eventos em Salvador. Oferecemos decoração personalizada, iluminação para festas, DJ's, espaços para confraternizações e muito mais para tornar o seu evento inesquecível.",
  keywords: "decoração festa, decoração de festa, salão de festas, decoradora de festa, buffet de festa, confraternização empresa, iluminação para festa, decoração para festa, buffet para aniversário, espaços para casamento, decoração de eventos, decoração para festividade, festas e eventos, aluguel decoração de festa, painel de festa, buffet para eventos, estrutura para eventos, som e iluminação para eventos",
  robots: "index, follow",
  authors: [{
    name: "Luty Eventos herbert souza",
  },
  {
    name: "Herbert souza",
  }],
  openGraph: {
    title: "Decoração Completa, Buffet e Serviços para Eventos em  Salvador e Região Metropolitana - Luty Eventos",
    description: "Encontre a melhor decoração e buffet para festas e eventos em Salvador. Oferecemos decoração personalizada, iluminação para festas, DJ's, espaços para confraternizações e muito mais para tornar o seu evento inesquecível.",
    type: "website",
    url: "https://www.lutyeventos.com.br",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LutyEventos",
    title: "Luty Eventos - Organize Eventos em Salvador e Região Metropolitana",
    description: "Solicite orçamentos e organize eventos com a Luty Eventos. Conectamos você aos melhores fornecedores.",

  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://www.lutyeventos.com.br/" />
      </head>
      <body className={inter.className}>
        <Header />
        <Toaster richColors />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

