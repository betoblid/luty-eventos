import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Serviços de Eventos - Luty Eventos",
    description: "Oferecemos uma variedade de serviços para a criação e organização do seu evento. Desde planejamento até a execução, temos tudo o que você precisa.",
    keywords: "serviços de eventos, planejamento de eventos, fornecedores de eventos, Salvador, organização de casamentos, festas e eventos corporativos",
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
        title: "Serviços de Eventos - Luty Eventos",
        description: "Conheça os serviços oferecidos pela Luty Eventos para transformar seu evento em uma experiência única. Temos soluções completas para você.",
        type: "website",
        url: "https://www.lutyeventos.com.br/servicos",

    },

    twitter: {
        card: "summary_large_image",
        site: "@LutyEventos",
        title: "Serviços de Eventos - Luty Eventos",
        description: "Saiba mais sobre os serviços da Luty Eventos para planejar o evento perfeito em Salvador e Grande Bahia.",

    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>{children}</>
    );
}