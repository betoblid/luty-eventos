import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luty Eventos - Organize Eventos em Salvador e Grande Bahia",
  description: "A Luty Eventos facilita a criação e organização de eventos em Salvador, conectando você aos melhores fornecedores. Solicite orçamentos e tenha a experiência ideal.",
  keywords: "organização de eventos, Salvador, Grande Bahia, eventos corporativos, eventos sociais, fornecedores de eventos, orçamentos personalizados",
  robots: "index, follow",
  authors: [{
    name: "Luty Eventos",
    url: "@LutyEventos",
  },
  {
    name: "Herbert souza",
    url: ""
  }],
  openGraph: {
    title: "Luty Eventos - Organize Eventos em Salvador e Grande Bahia",
    description: "A Luty Eventos facilita a criação e organização de eventos em Salvador, conectando você aos melhores fornecedores. Solicite orçamentos e tenha a experiência ideal.",
    type: "website",
    url: "https://www.lutyeventos.com.br",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LutyEventos",
    title: "Luty Eventos - Organize Eventos em Salvador e Grande Bahia",
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

