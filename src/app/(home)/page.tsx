import Banner from "@/assets/noiseporn.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full h-[500px]">
          <Image
            src={Banner}
            alt="Banner Luty Eventos"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-4 max-w-7xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Seja bem-vindo à maior rede de fornecedores para eventos em Salvador e na Grande Região Metropolitana.
              </h1>
              <p className="text-xl md:text-2xl mb-8">Seu evento começa aqui</p>
              <Link href="/orcamento">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold">
                  SOLICITAR ORÇAMENTO
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">O que é a Luty Eventos</h2>
              <div className="prose max-w-none text-gray-700 text-justify">
                <p className="mb-4">
                  A Luty Eventos é uma empresa especializada em criar e organizar eventos em Salvador e na Grande Bahia, facilitando a vida de quem precisa planejar e executar eventos de diferentes portes. Com vasta experiência no mercado, nossa missão é oferecer uma solução completa para nossos clientes, conectando-os a fornecedores de serviços qualificados e facilitando todo o processo de orçamentação e contratação.
                </p>
                <p>
                  Com uma plataforma prática e eficiente, conseguimos agilizar a escolha de serviços personalizados, sempre com foco nas necessidades e no orçamento de cada cliente. Trabalhamos apenas com uma rede confiável e bem selecionada de fornecedores, garantindo qualidade e profissionalismo em todos os aspectos do evento.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/sobre">
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                    Saiba mais
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/Illustration.jpg"
                alt="Sobre a Luty Eventos"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Nossos Serviços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="service-card">
                <div className="relative h-48">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/servicos">
              <Button className="bg-red-600 hover:bg-red-700 text-white">Ver todos os serviços</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Suppliers Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Fornecedores</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {suppliers.map((supplier, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-32">
                  <Image src={supplier.image || "/placeholder.svg"} alt={supplier.name} fill className="object-cover bg-bottom" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium text-sm text-gray-900">{supplier.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto para organizar seu evento?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Solicite um orçamento personalizado e deixe a Luty Eventos cuidar de todos os detalhes para tornar seu
            evento inesquecível.
          </p>
          <Link href="/orcamento">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              SOLICITAR ORÇAMENTO AGORA
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "Buffet",
    description: "Opções gastronômicas para todos os tipos de eventos",
    // image: "https://a.imagem.app/BBwPdb.png",
    image: "https://a.imagem.app/BBwaAQ.png",
  },
  {
    title: "Decoração",
    description: "Decoração personalizada para eventos corporativos e sociais",
    image: "https://a.imagem.app/BBwf11.jpeg",
  },
  {
    title: "Estrutura e Iluminação",
    description: "Estruturas e iluminação profissional para seu evento",
    image: "https://a.imagem.app/BBwytW.jpeg",
  },
  {
    title: "DJs e Bandas",
    description: "Entretenimento musical para animar sua festa",
    image: "https://a.imagem.app/BBCAS2.jpeg",
  },
]

const suppliers = [
  { name: "Buffet Delícias", image: "https://a.imagem.app/BBwaAQ.png" },
  { name: "Decoração Elegante", image: "https://a.imagem.app/BBCSN3.jpeg" },
  { name: "Som & Luz", image: "https://a.imagem.app/BBCbTP.jpeg" },
  { name: "Bandas", image: "https://a.imagem.app/BBCodl.jpeg" },
  { name: "Foto & Vídeo", image: "https://a.imagem.app/BBCBbS.jpeg" },
]

