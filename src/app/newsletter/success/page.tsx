import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function NewsletterSuccessPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <Card className="max-w-md mx-auto">
                <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                        <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Inscrição Confirmada!</h1>
                    <p className="text-gray-700 mb-6">
                        Obrigado por se inscrever em nossa newsletter. Você começará a receber nossas novidades em breve.
                    </p>
                    <Link href="/">
                        <Button className="bg-red-600 hover:bg-red-700 text-white">Voltar para Home</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}

