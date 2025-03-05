import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import { formatDate } from "@/lib/utils"
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

async function getEvent(id: string) {
  const event = await prisma.event.findUnique({
    where: { id },
  })

  if (!event) {
    notFound()
  }

  return event
}

export default async function EventoDetalhesPage({ params }: { params: { id: string } }) {
  const event = await getEvent(params.id)

  return (
    <div className="container mx-auto px-4 py-16">
      <Link href="/eventos" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar para Eventos
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-6">
            <Image
              src={event.imageUrl || "/placeholder.svg?height=400&width=800"}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
              <Calendar className="h-5 w-5 mr-3 text-red-600" />
              <div>
                <p className="text-xs text-gray-500">Data</p>
                <p className="font-medium">{formatDate(event.startDate)}</p>
              </div>
            </div>

            {event.location && (
              <div className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
                <MapPin className="h-5 w-5 mr-3 text-red-600" />
                <div>
                  <p className="text-xs text-gray-500">Local</p>
                  <p className="font-medium">{event.location}</p>
                </div>
              </div>
            )}

            <div className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
              <Clock className="h-5 w-5 mr-3 text-red-600" />
              <div>
                <p className="text-xs text-gray-500">Horário</p>
                <p className="font-medium">
                  {new Date(event.startDate).toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  {event.endDate &&
                    ` - ${new Date(event.endDate).toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}`}
                </p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <ReactMarkdown>{event.description}</ReactMarkdown>
          </div>
        </div>

        <div>
          <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Informações do Evento</h2>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-medium text-gray-900">Data e Hora</h3>
                <p className="text-gray-600">
                  {formatDate(event.startDate)} às{" "}
                  {new Date(event.startDate).toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              {event.location && (
                <div>
                  <h3 className="font-medium text-gray-900">Local</h3>
                  <p className="text-gray-600">{event.location}</p>
                </div>
              )}
            </div>

            <Link href="/orcamento">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Solicitar Orçamento</Button>
            </Link>

            <div className="mt-4">
              <Link href="/newsletter">
                <Button variant="outline" className="w-full">
                  Inscrever-se na Newsletter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

