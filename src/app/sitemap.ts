import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.lutyeventos.com.br/",
            lastModified: "12/03/2025",
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://www.lutyeventos.com.br/servicos',
            lastModified: "12/03/2025",
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.lutyeventos.com.br/sobre',
            lastModified: "12/03/2025",
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.lutyeventos.com.br/orcamento',
            lastModified: "12/03/2025",
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.lutyeventos.com.br/contato',
            lastModified: "12/03/2025",
            changeFrequency: 'weekly',
            priority: 0.5,
        }
    ]
}