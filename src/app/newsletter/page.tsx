import { NewsletterSubscribeForm } from "@/components/newsletter/subscribe-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Newsletter - Luty Eventos",
    description: "Assine nossa newsletter para ficar por dentro das novidades, promoções e dicas sobre eventos em Salvador e Grande Bahia.",
    keywords: "newsletter Luty Eventos, assinar newsletter, promoções de eventos, dicas de eventos Salvador, eventos Bahia",
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
        title: "Newsletter - Luty Eventos",
        description: "Fique atualizado com as últimas novidades e promoções da Luty Eventos. Assine nossa newsletter!",
        type: "website",
        url: "https://www.lutyeventos.com.br/newsletter",

    },
    twitter: {
        card: "summary_large_image",
        site: "@LutyEventos",
        title: "Newsletter - Luty Eventos",
        description: "Assine nossa newsletter para receber novidades sobre eventos e promoções em Salvador e Grande Bahia.",

    }
};


export default function NewsletterPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Inscreva-se em nossa Newsletter</h1>
                <p className="text-gray-700 mb-8 text-center">
                    Receba as últimas novidades, eventos e dicas exclusivas diretamente em seu e-mail.
                </p>
                <NewsletterSubscribeForm />
            </div>
        </div>
    )
}

