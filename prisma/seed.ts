import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  // Criar preferências
  const preferences = [
    { name: "eventos", displayName: "Eventos e Festas" },
    { name: "novidades", displayName: "Novidades e Tendências" },
    { name: "fornecedores", displayName: "Fornecedores" },
    { name: "dicas", displayName: "Dicas e Inspirações" },
    { name: "promocoes", displayName: "Promoções" },
  ]

  for (const preference of preferences) {
    await prisma.preference.upsert({
      where: { name: preference.name },
      update: {},
      create: {
        name: preference.name,
        displayName: preference.displayName,
      },
    })
  }

  // Criar usuário admin
  const adminEmail = "admin@lutyeventos.com.br"
  const adminPassword = await hash("admin12313", 10)

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: "Administrador",
      password: adminPassword,
      role: "admin",
    },
  })

  // Criar alguns eventos de exemplo
  const events = [
    {
      title: "Workshop de Decoração para Festas",
      description:
        "# Workshop de Decoração para Festas\n\nJunte-se a nós para um dia inteiro de aprendizado sobre técnicas modernas de decoração para eventos. Nossos especialistas compartilharão dicas valiosas e demonstrações práticas.\n\n## O que você vai aprender:\n\n- Tendências atuais em decoração de eventos\n- Técnicas de arranjos florais\n- Iluminação e ambientação\n- Decoração com orçamento limitado\n- Personalização de espaços\n\n## Materiais inclusos:\n\n- Kit de materiais para prática\n- Apostila com técnicas\n- Certificado de participação\n\nNão perca esta oportunidade única de aprimorar suas habilidades e conhecer outros profissionais da área!",
      location: "Centro de Convenções, Salvador/BA",
      startDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 dias a partir de hoje
      endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000), // 8 horas depois
      imageUrl: "/placeholder.svg?height=400&width=800",
    },
    {
      title: "Feira de Fornecedores para Casamentos",
      description:
        "# Feira de Fornecedores para Casamentos\n\nA maior feira de fornecedores para casamentos da Bahia está de volta! Venha conhecer os melhores profissionais e serviços para tornar seu casamento inesquecível.\n\n## Expositores:\n\n- Buffets e gastronomia\n- Fotografia e filmagem\n- Decoração e flores\n- Vestidos e trajes\n- DJs e bandas\n- Locais para cerimônia e recepção\n\n## Atrações:\n\n- Desfiles de vestidos de noiva\n- Degustações de menu\n- Sorteios e brindes\n- Palestras com especialistas\n\nEntrada gratuita! Traga sua família e amigos para planejar o casamento dos sonhos.",
      location: "Shopping Barra, Salvador/BA",
      startDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 dias a partir de hoje
      endDate: new Date(Date.now() + 32 * 24 * 60 * 60 * 1000), // 2 dias depois
      imageUrl: "/placeholder.svg?height=400&width=800",
    },
    {
      title: "Curso de Gestão de Eventos Corporativos",
      description:
        "# Curso de Gestão de Eventos Corporativos\n\nUm curso completo para profissionais que desejam se especializar na organização e gestão de eventos corporativos de sucesso.\n\n## Conteúdo programático:\n\n1. **Planejamento estratégico de eventos**\n   - Definição de objetivos\n   - Análise de público-alvo\n   - Orçamento e cronograma\n\n2. **Logística e operações**\n   - Seleção de fornecedores\n   - Gestão de espaços\n   - Coordenação de equipes\n\n3. **Marketing e comunicação**\n   - Estratégias de divulgação\n   - Identidade visual\n   - Mensuração de resultados\n\n4. **Tecnologia para eventos**\n   - Plataformas de gestão\n   - Ferramentas de engajamento\n   - Soluções híbridas\n\n## Informações adicionais:\n\n- Carga horária: 20 horas\n- Certificado reconhecido pelo MEC\n- Material didático incluso\n\nVagas limitadas! Garanta já a sua.",
      location: "Online (Zoom)",
      startDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000), // 45 dias a partir de hoje
      endDate: new Date(Date.now() + 50 * 24 * 60 * 60 * 1000), // 5 dias depois
      imageUrl: "/placeholder.svg?height=400&width=800",
    },
  ]

  for (const event of events) {
    await prisma.event.upsert({
      where: {
        title_startDate: {
          title: event.title,
          startDate: event.startDate,
        },
      },
      update: {},
      create: event,
    })
  }

  console.log("Seed completed successfully")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

