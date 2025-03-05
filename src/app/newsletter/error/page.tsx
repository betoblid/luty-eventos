"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function NewsletterErrorPage() {
    const searchParams = useSearchParams()
    const message = searchParams.get("message") || "Ocorreu um erro ao processar sua solicitação."

    return (
        <div className="container mx-auto px-4 py-16">
            <Card className="max-w-md mx-auto">
                <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                        <AlertTriangle className="h-16 w-16 text-amber-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Ops! Algo deu errado</h1>
                    <p className="text-gray-700 mb-6">{message}</p>
                    <Link href="/newsletter">
                        <Button className="bg-red-600 hover:bg-red-700 text-white">Tentar novamente</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}

