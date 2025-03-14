import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Decoração, Buffet e Espaço para Eventos em Salvador e Região Metropolitana | Luty Eventos",
    description: "Oferecemos soluções completas para seu evento: decoração personalizada, buffet de alta qualidade e espaços para eventos em Salvador. De corporativo a confraternizações, fazemos sua festa inesquecível!",
    keywords: "salão de festas, decoração de festa, espaço para eventos, decoradora de festa, buffet de festa, serviço de buffet, decoração de aniversários, tendas para eventos, iluminação para festas, dj para festas, decoração de festividade, decoração temática, buffet para festa, evento em Salvador, festas e eventos, decoração para eventos, espaços para eventos",
    robots: "index, follow",
    authors: [{
        name: "Luty Eventos herbert souza",
    },
    {
        name: "Herbert souza",
    }],
    openGraph: {
        title: "Decoração, Buffet e Espaço para Eventos em Salvador e Região Metropolitana | Luty Eventos",
        description: "Oferecemos serviços completos de organização e produção de eventos em Salvador e Região Metropolitana. Desde confraternizações empresariais até grandes eventos corporativos, garantimos a melhor gestão e planejamento para seu evento ser um sucesso.",
        type: "website",
        url: "https://www.lutyeventos.com.br/servicos",
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