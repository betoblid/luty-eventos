import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { prisma } from "@/lib/prisma"
import { formatDate } from "@/lib/utils"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Eventos Luty Eventos - Planeje seu Evento em Salvador e Grande Bahia",
    description: "Descubra como a Luty Eventos pode ajudar você a planejar eventos em Salvador. Trabalhamos com diversos tipos de eventos, desde casamentos até eventos corporativos.",
    keywords: "eventos em Salvador, planejamento de eventos, eventos corporativos, eventos sociais, festas, casamentos, eventos corporativos em Salvador",
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
        title: "Eventos Luty Eventos - Planeje seu Evento em Salvador",
        description: "Planeje seu evento em Salvador com a Luty Eventos. Conecte-se aos melhores fornecedores e orce de forma rápida.",
    }
};



async function getEvents() {
    const events = await prisma.event.findMany({
        where: {
            startDate: {
                gte: new Date(),
            },
        },
        orderBy: {
            startDate: "asc",
        },
    })

    return events
}

export default async function EventosPage() {
    const events = await getEvents()

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Próximos Eventos</h1>

            {events.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-600 mb-4">Não há eventos programados no momento.</p>
                    <p className="text-gray-600">Fique atento à nossa newsletter para ser informado sobre novos eventos!</p>
                    <div className="mt-6">
                        <Link href="/newsletter">
                            <Button className="bg-red-600 hover:bg-red-700 text-white">Inscrever-se na Newsletter</Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-48">
                                <Image
                                    src={event.imageUrl || "/placeholder.svg?height=200&width=400"}
                                    alt={event.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardContent className="p-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h2>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        <span className="text-sm">{formatDate(event.startDate)}</span>
                                    </div>

                                    {event.location && (
                                        <div className="flex items-center text-gray-600">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            <span className="text-sm">{event.location}</span>
                                        </div>
                                    )}

                                    {event.startDate && (
                                        <div className="flex items-center text-gray-600">
                                            <Clock className="h-4 w-4 mr-2" />
                                            <span className="text-sm">
                                                {new Date(event.startDate).toLocaleTimeString("pt-BR", {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                                {event.endDate &&
                                                    ` - ${new Date(event.endDate).toLocaleTimeString("pt-BR", {
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                    })}`}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>

                                <Link href={`/eventos/${event.id}`}>
                                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Ver Detalhes</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}

