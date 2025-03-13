import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fale Conosco para Planejar Seu Evento em Salvador e Região Metropolitana - Luty Eventos",
    description: "Entre em contato com a Luty Eventos para planejar seu evento perfeito em Salvador e Região Metropolitana. Oferecemos espaços exclusivos, decoração personalizada e buffet de qualidade para todos os tipos de festas e confraternizações.",
    keywords: "entrar em contato, contato Luty Eventos, fale conosco, planejar evento em Salvador, espaços para eventos, decoração personalizada, buffet para festas, festa de casamento, evento corporativo, confraternização empresa, orçar evento, agendar evento Salvador",
    robots: "index, follow",
    authors: [{
        name: "Luty Eventos",
        url: "@LutyEventos",
    },
    {
        name: "Herbert souza",
    }],
    openGraph: {
        title: "Fale Conosco para Planejar Seu Evento em Salvador e Região Metropolitana - Luty Eventos",
        description: "Entre em contato com a Luty Eventos para planejar seu evento perfeito em Salvador e Região Metropolitana. Oferecemos espaços exclusivos, decoração personalizada e buffet de qualidade para todos os tipos de festas e confraternizações.",
        type: "website",
        url: "https://www.lutyeventos.com.br/contato",
    },

    twitter: {
        card: "summary_large_image",
        site: "@LutyEventos",
        title: "Fale Conosco para Planejar Seu Evento em Salvador e Região Metropolitana - Luty Eventos",
        description: "Entre em contato com a Luty Eventos para planejar seu evento perfeito em Salvador e Região Metropolitana. Oferecemos espaços exclusivos, decoração personalizada e buffet de qualidade para todos os tipos de festas e confraternizações.",

    }
};


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>{children}</>
    );
}