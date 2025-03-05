"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FornecedoresPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const filteredSuppliers = selectedCategory
        ? suppliers.filter((supplier) => supplier.category === selectedCategory)
        : suppliers

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4 text-gray-900">Fornecedores</h1>
                <nav className="text-sm mb-8">
                    <ol className="flex">
                        <li className="flex items-center">
                            <a href="/" className="text-red-600 hover:underline">
                                Home
                            </a>
                            <span className="mx-2 text-gray-500">›</span>
                        </li>
                        <li className="text-gray-700">Fornecedores</li>
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
                                    Todos os Fornecedores
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
                        {filteredSuppliers.map((supplier, index) => (
                            <Card key={index} className="service-card">
                                <div className="relative h-48">
                                    <Image
                                        src={supplier.image || "/placeholder.svg"}
                                        alt={supplier.name}
                                        fill
                                        className="object-cover rounded-t-lg"
                                    />
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-lg mb-1 text-gray-900">{supplier.name}</h3>
                                    <p className="text-sm text-red-600 mb-2">{supplier.category}</p>
                                    <p className="text-sm text-gray-600 mb-4">{supplier.description}</p>
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

const suppliers = [
    {
        name: "Buffet Delícias Gourmet",
        category: "Buffet",
        description: "Especializado em gastronomia refinada para eventos corporativos e sociais",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Sabor & Festa",
        category: "Buffet",
        description: "Buffet completo com opções para todos os tipos de eventos",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Decoração Elegante",
        category: "Decoração",
        description: "Decoração sofisticada para casamentos e eventos formais",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Flores & Eventos",
        category: "Decoração",
        description: "Arranjos florais e decoração completa para eventos",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Som & Luz Produções",
        category: "Estrutura e Iluminação",
        description: "Estruturas, som e iluminação profissional para eventos",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Palco & Cia",
        category: "Estrutura e Iluminação",
        description: "Montagem de palcos, tendas e estruturas para eventos",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "DJ Master Mix",
        category: "DJs e Bandas",
        description: "DJs profissionais para todos os tipos de eventos",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Banda Festa Total",
        category: "DJs e Bandas",
        description: "Banda versátil com repertório variado para animar seu evento",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Foto & Vídeo Produções",
        category: "Fotografia e Filmagem",
        description: "Cobertura completa de fotografia e filmagem para eventos",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Imagem Perfeita",
        category: "Fotografia e Filmagem",
        description: "Fotografia e filmagem com equipamentos de última geração",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Móveis para Eventos",
        category: "Locação de Móveis",
        description: "Locação de móveis modernos e sofisticados para eventos",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Lounge & Cia",
        category: "Locação de Móveis",
        description: "Criação de lounges e ambientes especiais para eventos",
        image: "/placeholder.svg?height=200&width=300",
    },
]

