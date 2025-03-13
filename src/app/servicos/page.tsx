"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getAllServicos, getServicosByCategoria } from "@/lib/services"

export default function ServicosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const services = getAllServicos()

  const categories = Array.from(new Set(services.map((service) => service.categoria)))

  const filteredServices = selectedCategory ? getServicosByCategoria(selectedCategory) : services

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Serviços</h1>
        <nav className="text-sm mb-8">
          <ol className="flex">
            <li className="flex items-center">
              <a href="/" className="text-red-600 hover:underline">
                Home
              </a>
              <span className="mx-2 text-gray-500">›</span>
            </li>
            <li className="text-gray-700">Serviços</li>
          </ol>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="bg-red-600 text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">Departamentos</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-b-lg shadow-md p-4">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-2 py-1 rounded transition-colors duration-200 hover:bg-gray-100 ${!selectedCategory ? "font-bold text-red-600" : "text-gray-700"}`}
                >
                  Todos os Serviços
                </button>
              </li>
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-2 py-1 rounded transition-colors duration-200 hover:bg-gray-100 ${selectedCategory === category ? "font-bold text-red-600" : "text-gray-700"}`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Link key={service.id} href={`/servicos/${service.slug}`} className="block">
                <Card className="service-card h-full group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.imagemPrincipal || "/placeholder.svg"}
                      alt={service.titulo}
                      fill
                      className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                      {service.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{service.descricaoCurta}</p>
                    <div className="mt-auto">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Ver Detalhes</Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

