import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import { formatDate } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

async function getNewsletter(id: string) {
    const newsletter = await prisma.newsletter.findUnique({
        where: { id },
    })

    if (!newsletter) {
        notFound()
    }

    return newsletter
}

export default async function NewsletterViewPage({ params }: { params: { id: string } }) {
    const newsletter = await getNewsletter(params.id)

    return (
        <div className="container mx-auto px-4 py-16">
            <Link href="/admin/newsletter/view" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Arquivo
            </Link>

            <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{newsletter.title}</h1>
                    <p className="text-gray-500">Enviada em {formatDate(newsletter.sentAt)}</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    {newsletter.contentType === "markdown" ? (
                        <div className="prose max-w-none">
                            <ReactMarkdown>{newsletter.content}</ReactMarkdown>
                        </div>
                    ) : (
                        <div className="whitespace-pre-wrap">{newsletter.content}</div>
                    )}
                </div>

                <div className="mt-8 text-center">
                    <Link href="/newsletter">
                        <Button className="bg-red-600 hover:bg-red-700 text-white">Inscrever-se na Newsletter</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

