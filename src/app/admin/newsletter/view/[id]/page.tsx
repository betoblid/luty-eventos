import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import { formatDate } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

interface PageProps {
    params: { id: string };
}

async function getNewsletter({ id }: { id: string | undefined }): Promise<{ id: string; status: string; sentAt: Date; title: string; content: string; contentType: string, } | void> {

    if (!id) {
        throw notFound()
    }
    try {
        const newsletter = await prisma.newsletter.findUnique({
            where: { id },
            select: {
                id: true,
                status: true,
                sentAt: true,
                title: true,
                content: true,
                contentType: true
            }
        })

        if (!newsletter) {
            throw notFound()
        }

        return newsletter
    } catch (error) {
        console.error(error)
    }
}
// @ts-ignore
export default async function NewsletterViewPage({ params }: PageProps) {
    if (!params.id) {
        throw notFound()
    }
    const newsletter = await getNewsletter({ id: params.id })

    return (
        <div className="container mx-auto px-4 py-16">
            <Link href="/admin/newsletter/view" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Arquivo
            </Link>

            <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{newsletter ? newsletter.title : ""}</h1>
                    <p className="text-gray-500">Enviada em {formatDate(newsletter ? newsletter.sentAt : "")}</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    {newsletter && newsletter.contentType === "markdown" ? (
                        <div className="prose max-w-none">
                            <ReactMarkdown>{newsletter.content}</ReactMarkdown>
                        </div>
                    ) : (
                        <div className="whitespace-pre-wrap">{newsletter ? newsletter.content : ""}</div>
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

// Força o Next.js a não inferir tipos errados
export const dynamicParams = true;
