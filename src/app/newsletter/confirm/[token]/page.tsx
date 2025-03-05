"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Loader2, XCircle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function NewsletterConfirmPage({ params }: { params: { token: string } }) {
    const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
    const [message, setMessage] = useState<string>("")

    useEffect(() => {
        async function confirmSubscription() {
            try {
                const response = await fetch(`/api/newsletter/confirm/${params.token}`)

                if (response.redirected) {
                    // Se a API retornar um redirecionamento, seguimos para a URL indicada
                    window.location.href = response.url
                    return
                }

                const data = await response.json()

                if (response.ok) {
                    setStatus("success")
                    setMessage(data.message || "Sua inscrição foi confirmada com sucesso!")
                } else {
                    setStatus("error")
                    setMessage(data.error || "Ocorreu um erro ao confirmar sua inscrição.")
                }
            } catch (error) {
                setStatus("error")
                setMessage("Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.")
                console.error("Error confirming subscription:", error)
            }
        }

        confirmSubscription()
    }, [params.token])

    return (
        <div className="container mx-auto px-4 py-16">
            <Card className="max-w-md mx-auto">
                <CardContent className="p-6 text-center">
                    {status === "loading" && (
                        <>
                            <div className="flex justify-center mb-4">
                                <Loader2 className="h-16 w-16 text-red-600 animate-spin" />
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-4">Processando sua confirmação...</h1>
                            <p className="text-gray-700">Por favor, aguarde enquanto confirmamos sua inscrição.</p>
                        </>
                    )}

                    {status === "success" && (
                        <>
                            <div className="flex justify-center mb-4">
                                <CheckCircle className="h-16 w-16 text-green-500" />
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-4">Inscrição Confirmada!</h1>
                            <p className="text-gray-700 mb-6">{message}</p>
                            <Link href="/">
                                <Button className="bg-red-600 hover:bg-red-700 text-white">Voltar para Home</Button>
                            </Link>
                        </>
                    )}

                    {status === "error" && (
                        <>
                            <div className="flex justify-center mb-4">
                                <XCircle className="h-16 w-16 text-red-500" />
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-4">Erro na Confirmação</h1>
                            <p className="text-gray-700 mb-6">{message}</p>
                            <Link href="/newsletter">
                                <Button className="bg-red-600 hover:bg-red-700 text-white">Tentar Novamente</Button>
                            </Link>
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

