"use client"

import Logo from "@/assets/logo.png";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const route = usePathname()

    return (
        <header className="w-full bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src={Logo}
                                alt="Luty Eventos"
                                width={150}
                                height={60}
                                className="h-15"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-2">
                        <div className="text-right">
                            <p className="text-sm text-gray-600">Acompanhe-nos:</p>
                            <div className="flex space-x-2">
                                <Link href="#" className="text-primary hover:text-red-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-5 h-5"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="text-primary hover:text-red-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-5 h-5"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="ml-4 px-4 py-2 bg-gray-900 text-white rounded-md">
                            <a href="tel:71 9618-5243" target="_blank" className="text-sm font-semibold">(71) 9618-5243</a>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between py-4">
                    <div className="hidden md:flex space-x-1">
                        <Link href="/" className={`px-3 py-2 text-sm font-medium hover:text-primary ${route === "/" ? "text-red-600" : ""}`}>
                            Home
                        </Link>
                        <Link href="/sobre" className={`px-3 py-2 text-sm font-medium hover:text-primary ${route === "/sobre" ? "text-red-600" : ""}`}>
                            Quem Somos
                        </Link>
                        <Link href="/servicos" className={`px-3 py-2 text-sm font-medium hover:text-primary ${route === "/servicos" ? "text-red-600" : ""}`}>
                            Serviços
                        </Link>
                        <Link href="/orcamento" className={`px-3 py-2 text-sm font-medium hover:text-primary ${route === "/orcamento" ? "text-red-600" : ""}`}>
                            Orçamento
                        </Link>
                        <Link href="/contato" className={`px-3 py-2 text-sm font-medium hover:text-primary ${route === "/contato" ? "text-red-600" : ""}`}>
                            Contato
                        </Link>

                        <Link href="/eventos" className={`px-3 py-2 text-sm font-medium hover:text-primary ${route === "/eventos" ? "text-red-600" : ""}`}>
                            Eventos
                        </Link>
                        <Link href="/newsletter" className={`px-3 py-2 text-sm font-medium hover:text-primary ${route === "/newsletter" ? "text-red-600" : ""}`}>
                            Newsletter
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <Link href="/orcamento">
                            <Button className="bg-primary hover:bg-primary/90 text-white font-bold">ORÇAMENTO</Button>
                        </Link>
                    </div>

                    <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="container mx-auto px-4 py-2">
                        <nav className="flex flex-col space-y-2">
                            <Link href="/" className="px-3 py-2 text-sm font-medium hover:text-red-600">
                                Home
                            </Link>
                            <Link href="/sobre" className="px-3 py-2 text-sm font-medium hover:text-red-600">
                                Quem Somos
                            </Link>
                            <Link href="/servicos" className="px-3 py-2 text-sm font-medium hover:text-red-600">
                                Serviços
                            </Link>
                            <Link href="/fornecedores" className="px-3 py-2 text-sm font-medium hover:text-red-600">
                                Fornecedores
                            </Link>
                            <Link href="/eventos" className="px-3 py-2 text-sm font-medium hover:text-red-600">
                                Eventos
                            </Link>
                            <Link href="/contato" className="px-3 py-2 text-sm font-medium hover:text-red-600">
                                Contato
                            </Link>
                            <Link href="/newsletter" className="px-3 py-2 text-sm font-medium hover:text-red-600">
                                Newsletter
                            </Link>
                            <Link
                                href="/orcamento"
                                className="px-3 py-2 text-sm font-medium bg-red-600 text-white rounded text-center"
                            >
                                ORÇAMENTO
                            </Link>
                        </nav>

                        <div className="mt-4 flex items-center justify-between">
                            <div className="flex space-x-2">
                                <Link href="#" className="text-red-600 hover:text-red-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-5 h-5"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="text-red-600 hover:text-red-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-5 h-5"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                    </svg>
                                </Link>
                            </div>

                            <div className="flex items-center">
                                <Phone size={16} className="text-red-600 mr-2" />
                                <span className="text-sm font-semibold">(71) 99999-9999</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-gray-900 text-white py-2">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-center text-center">
                        <p className="text-sm">
                            <span className="font-bold">Nossa equipe à disposição</span>
                            <span className="mx-2 font-bold text-yellow-400">Gratuitamente</span>
                        </p>
                        <p className="text-sm">para acompanhar seus pedidos de orçamento.</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

