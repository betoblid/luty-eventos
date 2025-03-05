import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-16">
            <Card className="max-w-md mx-auto">
                <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                        <Loader2 className="h-16 w-16 text-red-600 animate-spin" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Processando sua confirmação...</h1>
                    <p className="text-gray-700">Por favor, aguarde enquanto confirmamos sua inscrição.</p>
                </CardContent>
            </Card>
        </div>
    )
}

