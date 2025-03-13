import Logo from "@/assets/logo-footer.png";
import Image from "next/image";
import Link from "next/link";
import { FooterSubscribeForm } from "./newsletter/footer-subscribe-form";

export default function Footer() {
    return (
        <footer className="bg-black/90 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
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
                                className="w-6 h-6"
                            >
                                <path d="M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5Z"></path>
                                <path d="m3 7 9 6 9-6"></path>
                            </svg>
                            <h3 className="text-lg font-semibold">Newsletter</h3>
                        </div>
                        <p className="text-sm">Cadastre seu e-mail e receba nossas novidades.</p>
                        <FooterSubscribeForm />
                    </div>

                    <div className="space-y-4 text-sm">
                        <h3 className="text-lg font-semibold">Nossos Contatos</h3>
                        <div className="space-y-2">
                            <a href="tel:7196185243" target="_blank" className="flex items-center">
                                <span className="font-semibold mr-2">Tel:</span> (71) 9618-5243
                            </a>
                            <a href="tel:11949208086" target="_blank" className="flex items-center">
                                <span className="font-semibold mr-2">Tel:</span> (11) 94920-8086
                            </a>
                            <p>
                                <a href="mailto:atendimento@lutyeventos.com.br">atendimento@lutyeventos.com.br</a>
                                <br />
                                <a href="mailto:comercial@lutyeventos.com.br">comercial@lutyeventos.com.br</a>
                            </p>
                            <a href="https://wa.me/7196185243" target="_blank" className="flex items-center">
                                <span className="font-semibold mr-2">WhatsApp:</span> (71) 9618-5243
                            </a>
                            <a href="https://wa.me/11949208086" target="_blank" className="flex items-center">
                                <span className="font-semibold mr-2">WhatsApp:</span> (11) 94920-8086
                            </a>
                            
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="space-y-2 text-center">
                            <div className="flex space-x-4">
                                <Link href="/" className="text-sm hover:underline">
                                    Home
                                </Link>
                                <Link href="/sobre" className="text-sm hover:underline">
                                    Quem Somos
                                </Link>
                                <Link href="/contato" className="text-sm hover:underline">
                                    Contato
                                </Link>
                            </div>
                            <div className="mt-4">
                                <Image src={Logo} alt="Luty Eventos" width={150} height={60} />
                                <p className="text-xs mt-2">Copyright 2025 © Luty Eventos - Todos os direitos reservados.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t  text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p>LUTY EVENTOS E PROMOÇÕES LTDA - ME</p>
                            <p>Est do Côco, 2774 - Centro - BA | CEP 42.700-000</p>
                        </div>
                        <div className="md:text-right">
                            <p>HORÁRIO DE FUNCIONAMENTO:</p>
                            <p>De segunda a sexta, das 08h às 18h</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

