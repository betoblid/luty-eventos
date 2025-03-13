import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Organização, Produção e Gestão de Eventos Empresariais - Luty Eventos",
    description: "Oferecemos serviços completos de organização e produção de eventos em Salvador e Região Metropolitana. Desde confraternizações empresariais até grandes eventos corporativos, garantimos a melhor gestão e planejamento para seu evento ser um sucesso.",
    keywords: "empresa de eventos, organização de eventos, agência de eventos, produção de eventos, confraternização empresa, eventos empresariais, eventos Bahia, empresa de eventos em Salvador, planejamento de eventos, orçamento de eventos, eventos corporativos, eventos de marketing, sala para eventos, realizar eventos, gestão de eventos, produtora de eventos",
    robots: "index, follow",
    authors: [{
        name: "Luty Eventos herbert souza",
    },
    {
        name: "Herbert souza",
    }],
    openGraph: {
        title: "Organização, Produção e Gestão de Eventos Empresariais - Luty Eventos",
        description: "Oferecemos serviços completos de organização e produção de eventos em Salvador e Região Metropolitana. Desde confraternizações empresariais até grandes eventos corporativos, garantimos a melhor gestão e planejamento para seu evento ser um sucesso.",
        type: "website",
        url: "https://www.lutyeventos.com.br/sobre",
    },
    twitter: {
        card: "summary_large_image",
        site: "@LutyEventos",
        title: "Organização, Produção e Gestão de Eventos Empresariais - Luty Eventos",
        description: "Oferecemos serviços completos de organização e produção de eventos em Salvador e Região Metropolitana. Desde confraternizações empresariais até grandes eventos corporativos, garantimos a melhor gestão e planejamento para seu evento ser um sucesso.",
    }
};


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50">
            {children}
        </div>
    );
}