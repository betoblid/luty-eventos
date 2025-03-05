import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contato - Luty Eventos",
    description: "Entre em contato com a Luty Eventos para mais informações sobre como podemos ajudá-lo a organizar seu evento em Salvador e Grande Bahia.",
    keywords: "contato Luty Eventos, eventos em Salvador, contato para orçamentos, evento Salvador, contato empresa de eventos",
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
        title: "Contato - Luty Eventos",
        description: "Entre em contato conosco para esclarecer dúvidas ou solicitar um orçamento para o seu evento em Salvador.",
        type: "website",
        url: "https://www.lutyeventos.com.br/contato",
    },

    twitter: {
        card: "summary_large_image",
        site: "@LutyEventos",
        title: "Contato - Luty Eventos",
        description: "Fale conosco para planejar o evento perfeito em Salvador e Grande Bahia.",

    }
};


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>{children}</>
    );
}