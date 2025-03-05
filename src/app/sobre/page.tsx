import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
    title: "Quem Somos - Luty Eventos",
    description: "A Luty Eventos é uma empresa especializada na criação e organização de eventos em Salvador e Grande Bahia. Conheça nossa missão e valores.",
    keywords: "quem somos, Luty Eventos, organização de eventos, empresa de eventos, Salvador, Grande Bahia, eventos personalizados",
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
        title: "Quem Somos - Luty Eventos",
        description: "Saiba mais sobre a Luty Eventos, nossa história e como podemos ajudar você a organizar o evento dos seus sonhos em Salvador.",
        type: "website",
        url: "https://www.lutyeventos.com.br/quemsomos",

    },
    twitter: {
        card: "summary_large_image",
        site: "@LutyEventos",
        title: "Quem Somos - Luty Eventos",
        description: "Conheça a Luty Eventos e descubra como podemos ajudar a organizar seu evento de forma simples e eficiente.",

    }
};


export default function SobrePage() {
    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4 text-gray-900">Quem Somos</h1>
                <nav className="text-sm mb-8">
                    <ol className="flex">
                        <li className="flex items-center">
                            <a href="/" className="text-red-600 hover:underline">
                                Home
                            </a>
                            <span className="mx-2 text-gray-500">›</span>
                        </li>
                        <li className="text-gray-700">Quem Somos</li>
                    </ol>
                </nav>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div>
                    <div className="prose max-w-none text-gray-700">
                        <p className="mb-3">
                            A <strong>Luty Eventos</strong> é uma empresa especializada em <strong>criar e organizar eventos em Salvador e na Grande Bahia</strong>, facilitando a vida de quem precisa planejar e executar eventos de diferentes portes. Com vasta experiência no mercado, nossa missão é oferecer uma solução completa para nossos clientes, conectando-os a fornecedores de serviços qualificados e facilitando todo o processo de orçamentação e contratação.
                        </p>
                        <p className="mb-3">
                            Com uma plataforma prática e eficiente, conseguimos agilizar a escolha de serviços personalizados, sempre com foco nas necessidades e no orçamento de cada cliente. Trabalhamos apenas com uma rede confiável e bem selecionada de fornecedores, garantindo qualidade e profissionalismo em todos os aspectos do evento.
                        </p>
                        <p className="mb-3">
                            Na Luty Eventos, acreditamos que cada evento é único e merece atenção especial. Por isso, nossa equipe está sempre à disposição para orientar nossos clientes na escolha dos melhores serviços, proporcionando uma experiência agradável e tranquila desde o planejamento até a realização.
                        </p>
                        <p>
                            Valorizamos a transparência, o compromisso e a satisfação do cliente, com o objetivo de transformar a organização de eventos em um processo simples, prazeroso e inesquecível. Nosso foco é permitir que nossos clientes aproveitem o evento ao máximo, sem preocupações.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                        <Image
                            src="/event.jpg"
                            alt="Sobre a Luty Eventos"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Nossa História</h2>
                <div className="prose max-w-none text-gray-700">
                    <p className="mb-4">
                        A Luty Eventos nasceu da percepção de que o mercado de eventos precisava de uma solução que conectasse
                        clientes e fornecedores de forma eficiente. Fundada por profissionais com vasta experiência no setor, a
                        empresa começou como uma pequena agência de eventos e evoluiu para uma plataforma completa de orçamentos.
                    </p>
                    <p className="mb-4">
                        Ao longo dos anos, construímos uma rede sólida de parceiros e fornecedores, sempre priorizando a qualidade e
                        a confiabilidade dos serviços. Investimos em tecnologia para desenvolver uma plataforma intuitiva e
                        eficiente, que simplifica o processo de orçamento e contratação.
                    </p>
                    {/* <p>
                        Hoje, a Luty Eventos é reconhecida como uma referência no mercado, conectando milhares de clientes a
                        fornecedores qualificados e contribuindo para o sucesso de eventos em todo o país.
                    </p> */}
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Nossos Valores</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-red-600">Excelência</h3>
                        <p className="text-gray-700">
                            Buscamos a excelência em tudo o que fazemos, desde o atendimento ao cliente até a seleção dos fornecedores
                            parceiros.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-red-600">Confiabilidade</h3>
                        <p className="text-gray-700">
                            Construímos relações baseadas na confiança, cumprindo prazos e garantindo a qualidade dos serviços
                            oferecidos.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-red-600">Inovação</h3>
                        <p className="text-gray-700">
                            Investimos constantemente em inovação para oferecer soluções modernas e eficientes para nossos clientes e
                            parceiros.
                        </p>
                    </div>
                </div>
            </div>

            {/* <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Equipe</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-64">
                                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                                <p className="text-gray-600 text-sm">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    )
}