import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Orçamento - Espaço para Eventos, Decoração e Buffet em Salvador e Região Metropolitana",
    description: "Encontre o espaço perfeito para seu evento em Salvador e Região Metropolitana com decoração personalizada, buffet completo e artigos exclusivos para festas e eventos. Realize seu evento de maneira única com Luty Eventos.",
    keywords: "espaço para eventos, salão de festas, decoração de festa, decoradora de festa, espaço para festas, artigos de festa, decoração de festas, balões personalizados, buffet de festa, festa de decoração, tema de festas, espaço de eventos, confraternização empresa, locação de espaço para festas, buffet para festas, decoração personalizada Salvador",
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
        title: "Orçamento - Espaço para Eventos, Decoração e Buffet em Salvador e Região Metropolitana",
        description: "Encontre o espaço perfeito para seu evento em Salvador e Região Metropolitana com decoração personalizada, buffet completo e artigos exclusivos para festas e eventos. Realize seu evento de maneira única com Luty Eventos.",
        type: "website",
        url: "https://www.lutyeventos.com.br/orcamentos",

    },
    twitter: {
        card: "summary_large_image",
        site: "@LutyEventos",
        title: "Orçamento - Espaço para Eventos, Decoração e Buffet em Salvador e Região Metropolitana",
        description: "Solicite orçamentos rápidos e personalizados para o seu evento. A Luty Eventos conecta você aos melhores fornecedores.",

    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
