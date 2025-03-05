"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ServicosPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const filteredServices = selectedCategory
        ? services.filter((service) => service.category === selectedCategory)
        : services

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
                        {filteredServices.map((service, index) => (
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
                                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                                    <Link href="/orcamento">
                                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Solicitar Orçamento</Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const categories = [
    "Buffet",
    "Decoração",
    "Estrutura e Iluminação",
    "DJs e Bandas",
    "Fotografia e Filmagem",
    "Locação de Móveis",
]

const services = [
    {
        title: "Buffet Completo",
        description: "Serviço completo de buffet para eventos corporativos e sociais",
        category: "Buffet",
        image: "https://a.imagem.app/BBwaAQ.png",
    },
    {
        title: "Coffee Break",
        description: "Coffee break para reuniões e eventos empresariais",
        category: "Buffet",
        image: "https://a.imagem.app/BBCs6Y.jpeg",
    },
    {
        title: "Coquetel",
        description: "Serviço de coquetel para recepções e eventos formais",
        category: "Buffet",
        image: "https://a.imagem.app/BBCebC.jpeg",
    },
    {
        title: "Decoração Temática",
        description: "Decoração personalizada de acordo com o tema do evento",
        category: "Decoração",
        image: "https://a.imagem.app/oWEtrZ.webp",
    },
    {
        title: "Arranjos Florais",
        description: "Arranjos florais para mesas e ambientes",
        category: "Decoração",
        image: "https://a.imagem.app/op6sct.webp",
    },
    {
        title: "Cenografia",
        description: "Cenografia completa para eventos corporativos",
        category: "Decoração",
        image: "https://a.imagem.app/BBC6N9.jpeg",
    },
    {
        title: "Palco e Estruturas",
        description: "Montagem de palcos e estruturas para eventos",
        category: "Estrutura e Iluminação",
        image: "https://a.imagem.app/BBwytW.jpeg",
    },
    {
        title: "Iluminação Cênica",
        description: "Iluminação profissional para eventos",
        category: "Estrutura e Iluminação",
        image: "https://a.imagem.app/BBCnqe.jpeg",
    },
    {
        title: "Tendas e Coberturas",
        description: "Tendas e coberturas para eventos ao ar livre",
        category: "Estrutura e Iluminação",
        image: "https://a.imagem.app/BBC0dN.jpeg",
    },
    {
        title: "DJ Profissional",
        description: "DJs experientes para animar seu evento",
        category: "DJs e Bandas",
        image: "https://a.imagem.app/BBCAS2.jpeg",
    },
    {
        title: "Bandas ao Vivo",
        description: "Bandas para diversos estilos musicais",
        category: "DJs e Bandas",
        image: "https://a.imagem.app/BBCodl.jpeg",
    },
    {
        title: "Fotografia Profissional",
        description: "Cobertura fotográfica completa do seu evento",
        category: "Fotografia e Filmagem",
        image: "https://a.imagem.app/BBCYSE.png",
    },
    {
        title: "Filmagem e Edição",
        description: "Filmagem e edição profissional de vídeos",
        category: "Fotografia e Filmagem",
        image: "https://a.imagem.app/BBCBbS.jpeg",
    },
    {
        title: "Móveis para Eventos",
        description: "Locação de móveis para eventos",
        category: "Locação de Móveis",
        image: "https://a.imagem.app/BBCkYZ.jpeg",
    },
    {
        title: "Lounges e Ambientação",
        description: "Criação de lounges e ambientes especiais",
        category: "Locação de Móveis",
        image: "https://a.imagem.app/BBCzci.jpeg",
    },
]

