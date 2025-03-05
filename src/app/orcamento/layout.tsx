import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Orçamentos Personalizados - Luty Eventos",
    description: "Solicite orçamentos personalizados para o seu evento com a Luty Eventos. Conecte-se aos melhores fornecedores e faça seu evento acontecer.",
    keywords: "orçamento para evento, orçamentos personalizados, fornecedores de eventos, planejamento de eventos, eventos Salvador, orçamentos rápidos",
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
        title: "Orçamentos Personalizados - Luty Eventos",
        description: "Receba orçamentos personalizados e rápidos para o seu evento em Salvador. Trabalhamos com uma rede de fornecedores qualificados.",
        type: "website",
        url: "https://www.lutyeventos.com.br/orcamentos",

    },
    twitter: {
        card: "summary_large_image",
        site: "@LutyEventos",
        title: "Orçamentos Personalizados - Luty Eventos",
        description: "Solicite orçamentos rápidos e personalizados para o seu evento. A Luty Eventos conecta você aos melhores fornecedores.",

    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
