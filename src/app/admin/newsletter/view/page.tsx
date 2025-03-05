import { Card, CardContent } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

interface newsletters {
    id: string;
    status: string;
    sentAt: Date;
    title: string;
    content: string;
    contentType: string;
}

async function getNewsletters() {
    const newsletters = await prisma.newsletter.findMany({
        where: {
            status: "sent",
        },
        orderBy: {
            sentAt: "desc",
        },
    })

    return newsletters
}

export default async function NewsletterArchivePage() {

    const newsletters: newsletters[] = await getNewsletters()

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Arquivo de Newsletters</h1>

            {newsletters.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-600">Não há newsletters arquivadas no momento.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {newsletters.map((newsletter: newsletters) => (
                        <Link key={newsletter.id} href={`/admin/newsletter/view/${newsletter.id}`}>
                            <Card className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-xl font-bold text-gray-900">{newsletter.title}</h2>
                                        <span className="text-sm text-gray-500">{formatDate(newsletter.sentAt)}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

