"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, Loader2, XCircle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function NewsletterUnsubscribePage({ params }: { params: { token: string } }) {
  const [status, setStatus] = useState<"loading" | "confirming" | "success" | "error">("loading")
  const [message, setMessage] = useState<string>("")

  useEffect(() => {
    // Apenas carregar a página de confirmação, não executar o cancelamento automaticamente
    setStatus("confirming")
  }, [])

  async function handleUnsubscribe() {
    setStatus("loading")

    try {
      const response = await fetch(`/api/newsletter/unsubscribe/${params.token}`)

      if (response.redirected) {
        window.location.href = response.url
        return
      }

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage(data.message || "Sua inscrição foi cancelada com sucesso!")
      } else {
        setStatus("error")
        setMessage(data.error || "Ocorreu um erro ao cancelar sua inscrição.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.")
      console.error("Error unsubscribing:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6 text-center">
          {status === "loading" && (
            <>
              <div className="flex justify-center mb-4">
                <Loader2 className="h-16 w-16 text-red-600 animate-spin" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Processando sua solicitação...</h1>
              <p className="text-gray-700">Por favor, aguarde enquanto processamos sua solicitação.</p>
            </>
          )}

          {status === "confirming" && (
            <>
              <div className="flex justify-center mb-4">
                <AlertTriangle className="h-16 w-16 text-amber-500" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Cancelar Inscrição</h1>
              <p className="text-gray-700 mb-6">
                Você tem certeza que deseja cancelar sua inscrição na nossa newsletter? Você não receberá mais nossas
                atualizações e novidades.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button onClick={handleUnsubscribe} className="bg-red-600 hover:bg-red-700 text-white">
                  Sim, Cancelar Inscrição
                </Button>
                <Link href="/">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Não, Voltar para Home
                  </Button>
                </Link>
              </div>
            </>
          )}

          {status === "success" && (
            <>
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Inscrição Cancelada</h1>
              <p className="text-gray-700 mb-6">
                {message || "Sua inscrição foi cancelada com sucesso. Sentiremos sua falta!"}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/newsletter">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Inscrever-se Novamente</Button>
                </Link>
                <Link href="/">
                  <Button variant="outline">Voltar para Home</Button>
                </Link>
              </div>
            </>
          )}

          {status === "error" && (
            <>
              <div className="flex justify-center mb-4">
                <XCircle className="h-16 w-16 text-red-500" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Erro no Cancelamento</h1>
              <p className="text-gray-700 mb-6">{message}</p>
              <Link href="/">
                <Button className="bg-red-600 hover:bg-red-700 text-white">Voltar para Home</Button>
              </Link>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

