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

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Nossos Contatos</h3>
                        <div className="space-y-2">
                            <a href="tel:71 9618-5243" target="_blank" className="flex items-center">
                                <span className="font-semibold mr-2">Tel:</span> (71) 9618-5243
                            </a>
                            <p className="text-sm">
                                atendimento@lutyeventos.com.br
                                <br />
                                comercial@lutyeventos.com.br
                            </p>
                            <a href="https://api.whatsapp.com/send/?phone=7196185243" target="_blank" className="flex items-center">
                                <span className="font-semibold mr-2">WhatsApp:</span> (71) 9618-5243
                            </a>
                            <div className="flex space-x-2 mt-2">
                                <Link href="#" className="text-white hover:text-gray-300">
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
                                <Link href="#" className="text-white hover:text-gray-300">
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
                                <p className="text-xs mt-2">Copyright © Luty Eventos - Todos os direitos reservados.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t  text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p>LUTY MARKETING E PROMOÇÕES LTDA - ME | CNPJ 12.345.678/0001-00</p>
                            <p>Rua dos Eventos, nº 123, Edifício Centro Empresarial, Sala 101, Salvador/BA | CEP 40.000-000</p>
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

