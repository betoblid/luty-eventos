import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Tag, ChevronRight } from "lucide-react"
import Gallery from "../components/gallery"
import { getServicoBySlug, getServicosRelacionados } from "@/lib/services"
import ReactMarkdown from "react-markdown"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServicoBySlug(params.slug)

  if (!service) {
    return {
      title: "Serviço não encontrado | Luty Eventos",
    }
  }

  return {
    title: `${service.titulo} | Luty Eventos`,
    description: service.descricaoCurta,
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServicoBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const relatedServices = service.servicosRelacionados ? getServicosRelacionados(service.servicosRelacionados) : []

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="flex flex-wrap">
          <li className="flex items-center">
            <Link href="/" className="text-red-600 hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          </li>
          <li className="flex items-center">
            <Link href="/servicos" className="text-red-600 hover:underline">
              Serviços
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          </li>
          <li className="text-gray-700">{service.titulo}</li>
        </ol>
      </nav>

      {/* Back button */}
      <Link href="/servicos" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar para Serviços
      </Link>

      {/* Hero Image */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
        <Image
          src={service.imagemPrincipal || "/placeholder.svg"}
          alt={service.titulo}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{service.titulo}</h1>
          <div className="flex items-center">
            <Tag className="h-4 w-4 mr-2" />
            <span>{service.categoria}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Descrição</h2>
            <div className="prose max-w-none">
              <ReactMarkdown>{service.descricaoCompleta}</ReactMarkdown>
            </div>
          </div>

          {/* Gallery */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Galeria de Fotos</h2>
            {
                service.galeria.length === 0 && (<p>Não há fotos disponíveis na galeria no momento. Por favor, volte mais tarde ou entre em contato para mais informações.</p>)
            }
            <Gallery images={service.galeria} alt={service.titulo} />
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6">Serviços Relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedServices.map((relatedService) => (
                  <Link key={relatedService.id} href={`/servicos/${relatedService.slug}`}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <div className="relative h-40">
                        <Image
                          src={relatedService.imagemPrincipal || "/placeholder.svg"}
                          alt={relatedService.titulo}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{relatedService.titulo}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{relatedService.descricaoCurta}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
            {service.preco && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Preço</h3>
                <p className="text-2xl font-bold text-red-600">{service.preco}</p>
              </div>
            )}

            {service.opcoes && service.opcoes.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Opções Disponíveis</h3>
                <ul className="space-y-2">
                  {service.opcoes.map((opcao, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{opcao}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link href={`/orcamento?servico=${service.slug}`}>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Solicitar Orçamento</Button>
            </Link>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-2">Precisa de mais informações?</p>
              <Link href="/contato" className="text-red-600 hover:underline text-sm font-medium">
                Entre em contato conosco
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

