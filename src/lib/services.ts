export interface Servico {
    id: string
    slug: string
    titulo: string
    categoria: string
    descricaoCurta: string
    descricaoCompleta: string
    preco?: string
    imagemPrincipal: string
    galeria: string[]
    opcoes?: string[]
    servicosRelacionados?: string[]
  }
  
  export const servicos: Servico[] = [
    {
      id: "1",
      slug: "buffet-completo",
      titulo: "Buffet Completo",
      categoria: "Buffet",
      descricaoCurta: "Serviço completo de buffet para eventos corporativos e sociais",
      descricaoCompleta: `# Buffet Completo para Eventos
  
  Nosso serviço de buffet completo é a solução perfeita para quem busca excelência gastronômica em seus eventos. Oferecemos uma experiência culinária memorável, com cardápios personalizados e apresentação impecável.
  
  ## O que oferecemos:
  
  - **Cardápios personalizados** adaptados ao seu evento e preferências
  - **Equipe completa** de chefs, garçons e coordenadores
  - **Mobiliário e utensílios** inclusos (mesas, cadeiras, louças, talheres e taças)
  - **Bebidas** alcoólicas e não-alcoólicas
  - **Serviço de open bar** com bartenders profissionais
  - **Finger foods e entradas** para recepção
  - **Sobremesas e mesa de café** para finalizar com chave de ouro
  
  ## Diferenciais:
  
  - Ingredientes frescos e de alta qualidade
  - Opções para dietas especiais (vegetarianas, veganas, sem glúten, etc.)
  - Decoração personalizada das mesas de buffet
  - Degustação prévia do cardápio
  - Flexibilidade para ajustes de última hora
  
  Nosso buffet completo é ideal para casamentos, formaturas, eventos corporativos, confraternizações e qualquer ocasião especial que mereça um serviço gastronômico de excelência.`,
      preco: "Solicite um orçamento e descubra preços especiais para você!",
      imagemPrincipal: "https://a.imagem.app/BBwaAQ.png",
      galeria: [
        "https://a.imagem.app/oWJGAr.jpeg",
        "https://a.imagem.app/oWJStP.jpeg",
        "https://a.imagem.app/oWJ29v.jpeg",
        "https://a.imagem.app/oWJ74T.jpeg",
        "https://a.imagem.app/oWJT4a.jpeg",
      ],
       opcoes: [
        "Buffet Básico",
        "Buffet Intermediário",
        "Buffet Premium",
       ],
      servicosRelacionados: ["coffee-break", "coquetel"],
    },
    {
      id: "2",
      slug: "coffee-break",
      titulo: "Coffee Break",
      categoria: "Buffet",
      descricaoCurta: "Coffee break para reuniões e eventos empresariais",
      descricaoCompleta: `# Coffee Break Empresarial
  
  Nosso serviço de coffee break é perfeito para reuniões corporativas, treinamentos, workshops e eventos empresariais. Oferecemos opções práticas e saborosas que mantêm seus convidados satisfeitos e energizados.
  
  ## O que oferecemos:
  
  - **Variedade de alimentos** doces e salgados
  - **Bebidas quentes e frias** (café, chá, sucos, água, refrigerantes)
  - **Montagem e desmontagem** completa do espaço
  - **Utensílios descartáveis** ou louças, conforme preferência
  - **Serviço de garçom** para eventos maiores
  - **Opções temáticas** adaptadas ao seu evento
  
  ## Diferenciais:
  
  - Alimentos frescos preparados no dia do evento
  - Opções saudáveis e para dietas especiais
  - Apresentação elegante e profissional
  - Pontualidade na montagem e serviço
  - Flexibilidade de horários e duração
  
  Nosso coffee break pode ser adaptado para diferentes momentos do seu evento: recepção, intervalos ou encerramento. Tudo com a qualidade e excelência que sua empresa merece.`,
      preco: "Solicite um orçamento e descubra preços especiais para você!",
      imagemPrincipal: "https://a.imagem.app/BBCs6Y.jpeg",
      galeria: [
       
      ],
      opcoes: [
        "Coffee Break Básico",
        "Coffee Break Executivo ",
        "Coffee Break Premium",
      ],
      servicosRelacionados: ["buffet-completo", "coquetel"],
    },
    {
      id: "3",
      slug: "coquetel",
      titulo: "Coquetel",
      categoria: "Buffet",
      descricaoCurta: "Serviço de coquetel para recepções e eventos formais",
      descricaoCompleta: `# Coquetel para Eventos
  
  Nosso serviço de coquetel é ideal para recepções, lançamentos, inaugurações e eventos sociais que exigem elegância e sofisticação. Oferecemos uma experiência gastronômica refinada com apresentação impecável.
  
  ## O que oferecemos:
  
  - **Finger foods gourmet** servidos de forma volante
  - **Estações gastronômicas** temáticas
  - **Bebidas selecionadas** e drinks personalizados
  - **Bartenders e garçons** treinados
  - **Mobiliário e decoração** para as estações
  - **Louças e utensílios** de alta qualidade
  
  ## Diferenciais:
  
  - Apresentação sofisticada e contemporânea
  - Criação de drinks exclusivos para seu evento
  - Opções internacionais e da gastronomia brasileira
  - Adaptação a diferentes espaços e formatos de evento
  - Coordenação completa do serviço
  
  Nosso coquetel é perfeito para eventos onde os convidados circulam e socializam, criando uma atmosfera descontraída mas elegante. Ideal para networking, comemorações corporativas e eventos sociais.`,
  preco: "Solicite um orçamento e descubra preços especiais para você!",
      imagemPrincipal: "https://a.imagem.app/BBCebC.jpeg",
      galeria: [
        "https://a.imagem.app/oWJxcY.jpeg",
      ],
      opcoes: [
        "Coquetel Simples",
        "Coquetel Intermediário",
        "Coquetel Premium",
        "Adicional de Open Bar",
      ],
      servicosRelacionados: ["buffet-completo", "coffee-break"],
    },
    {
      id: "4",
      slug: "decoracao-tematica",
      titulo: "Decoração Temática",
      categoria: "Decoração",
      descricaoCurta: "Decoração personalizada de acordo com o tema do evento",
      descricaoCompleta: `# Decoração Temática para Eventos
  
  Transforme seu evento com nossas decorações temáticas personalizadas que refletem seu estilo e a identidade do seu evento. Criamos ambientes imersivos e memoráveis para todos os tipos de celebrações.
  
  ## O que oferecemos:
  
  - **Projeto personalizado** de acordo com seu tema e preferências
  - **Cenografia completa** do espaço do evento
  - **Iluminação temática** para criar a atmosfera perfeita
  - **Mobiliário e tecidos** coordenados com o tema
  - **Elementos decorativos** exclusivos e personalizados
  - **Montagem e desmontagem** completa
  
  ## Diferenciais:
  
  - Equipe de designers e decoradores especializados
  - Criação de elementos decorativos exclusivos
  - Atenção meticulosa aos detalhes
  - Adaptação a diferentes espaços e orçamentos
  - Integração com outros serviços (iluminação, mobiliário)
  
  Nossa decoração temática transforma completamente o ambiente do seu evento, criando uma experiência imersiva para seus convidados. Ideal para festas infantis, casamentos temáticos, eventos corporativos, lançamentos de produtos e qualquer ocasião que mereça um ambiente único e personalizado.`,
      preco: "Solicite um orçamento e descubra preços especiais para você!",
      imagemPrincipal: "https://a.imagem.app/oWEtrZ.webp",
      galeria: [

      ],
      opcoes: [
        "Decoração Básica",
        "Decoração Intermediária",
        "Decoração Premium",
        "Decoração Personalizada - Orçamento sob consulta",
      ],
      servicosRelacionados: ["arranjos-florais", "cenografia", "iluminacao-cenica"],
    },
    {
      id: "5",
      slug: "arranjos-florais",
      titulo: "Arranjos Florais",
      categoria: "Decoração",
      descricaoCurta: "Arranjos florais para mesas e ambientes",
      descricaoCompleta: `# Arranjos Florais para Eventos
  
  Nossos arranjos florais trazem vida, cor e elegância para qualquer evento. Trabalhamos com flores frescas e de alta qualidade para criar composições que encantam e complementam perfeitamente a decoração do seu evento.
  
  ## O que oferecemos:
  
  - **Arranjos de mesa** em diferentes tamanhos e estilos
  - **Buquês e corsages** para noivas e madrinhas
  - **Decoração floral** para cerimônias e altares
  - **Guirlandas e arcos** decorativos
  - **Flores para buffet e áreas de destaque**
  - **Boutonnières** para noivos e padrinhos
  
  ## Diferenciais:
  
  - Flores frescas selecionadas diariamente
  - Design personalizado de acordo com seu evento
  - Opções para diferentes orçamentos
  - Flores da estação e importadas
  - Coordenação com o esquema de cores do evento
  
  Nossos arranjos florais são perfeitos para casamentos, aniversários, eventos corporativos, formaturas e qualquer ocasião que mereça o toque especial das flores. Trabalhamos com diferentes estilos, desde o clássico e romântico até o moderno e minimalista.`,
      preco: "Solicite um orçamento e descubra preços especiais para você!",
      imagemPrincipal: "https://a.imagem.app/op6sct.webp",
      galeria: [
        "https://a.imagem.app/op6sct.webp",
        "https://a.imagem.app/oWJxcY.jpeg",
      ],
      opcoes: [
        "Arranjos de Mesa Pequenos",
        "Arranjos de Mesa Médios",
        "Arranjos de Mesa Grandes",
        "Decoração Floral Completa - Orçamento sob consulta",
      ],
      servicosRelacionados: ["decoracao-tematica", "cenografia"],
    },
    {
      id: "6",
      slug: "cenografia",
      titulo: "Cenografia",
      categoria: "Decoração",
      descricaoCurta: "Cenografia completa para eventos corporativos",
      descricaoCompleta: `# Cenografia para Eventos Corporativos
  
  Nossa cenografia transforma espaços comuns em ambientes extraordinários para seus eventos corporativos. Criamos cenários impactantes que comunicam a identidade da sua marca e impressionam seus convidados.
  
  ## O que oferecemos:
  
  - **Projeto cenográfico** personalizado
  - **Painéis e backdrops** com a identidade visual da empresa
  - **Palcos e estruturas** customizados
  - **Ambientação completa** do espaço
  - **Sinalização e comunicação visual**
  - **Elementos interativos** para engajamento
  
  ## Diferenciais:
  
  - Equipe especializada em eventos corporativos
  - Materiais de alta qualidade e acabamento profissional
  - Soluções criativas para diferentes orçamentos
  - Integração com iluminação e tecnologia
  - Montagem e desmontagem rápidas e eficientes
  
  Nossa cenografia corporativa é ideal para convenções, lançamentos de produtos, feiras, congressos, premiações e eventos institucionais. Criamos ambientes que fortalecem sua marca e proporcionam uma experiência memorável para todos os participantes.`,
      preco: "Solicite um orçamento e descubra preços especiais para você!",
      imagemPrincipal: "https://a.imagem.app/BBC6N9.jpeg",
      galeria: [
       
      ],
      opcoes: [
        "Cenografia Básica",
        "Cenografia Intermediária",
        "Cenografia Premium",
        "Cenografia Personalizada - Orçamento sob consulta",
      ],
      servicosRelacionados: ["decoracao-tematica", "palco-e-estruturas", "iluminacao-cenica"],
    },
    {
      id: "7",
      slug: "palco-e-estruturas",
      titulo: "Palco e Estruturas",
      categoria: "Estrutura e Iluminação",
      descricaoCurta: "Montagem de palcos e estruturas para eventos",
      descricaoCompleta: `# Palcos e Estruturas para Eventos
  
  Oferecemos soluções completas em palcos e estruturas para eventos de todos os portes. Nossos equipamentos de alta qualidade e equipe especializada garantem segurança e excelência técnica para seu evento.
  
  ## O que oferecemos:
  
  - **Palcos modulares** em diversos tamanhos e formatos
  - **Estruturas de grid** para iluminação e cenografia
  - **Praticáveis e tablados** para diferentes necessidades
  - **Estruturas para telões** e projeções
  - **Coberturas e estruturas tensionadas**
  - **Passarelas e arquibancadas**
  
  ## Diferenciais:
  
  - Equipamentos modernos e em perfeito estado
  - Equipe técnica especializada
  - Projetos personalizados conforme necessidade
  - Laudos técnicos e ARTs quando necessário
  - Montagem e desmontagem rápidas e seguras
  
  Nossas estruturas atendem a shows, festivais, eventos corporativos, feiras, congressos, casamentos e qualquer evento que necessite de infraestrutura profissional. Trabalhamos com atenção aos detalhes e comprometimento com a segurança e qualidade.`,
      preco: "Solicite um orçamento e descubra preços especiais para você!",
      imagemPrincipal: "https://a.imagem.app/BBwytW.jpeg",
      galeria: [
      ],
      opcoes: [
        "Palco Pequeno (4x3m)",
        "Palco Médio (6x4m)",
        "Palco Grande (8x6m)",
        "Estruturas Complementares - Orçamento sob consulta",
      ],
      servicosRelacionados: ["iluminacao-cenica", "tendas-e-coberturas"],
    },
    {
      id: "8",
      slug: "iluminacao-cenica",
      titulo: "Iluminação Cênica",
      categoria: "Estrutura e Iluminação",
      descricaoCurta: "Iluminação profissional para eventos",
      descricaoCompleta: `# Iluminação Cênica Profissional
  
  Nossa iluminação cênica transforma a atmosfera do seu evento, criando ambientes envolventes e destacando os momentos importantes. Utilizamos equipamentos de última geração e técnicas avançadas para resultados impressionantes.
  
  ## O que oferecemos:
  
  - **Iluminação arquitetural** para valorizar espaços
  - **Iluminação decorativa** com efeitos especiais
  - **Moving heads e robóticas** para efeitos dinâmicos
  - **Ribalta e canhões de luz** para palcos
  - **Iluminação de pista** para festas e eventos
  - **Mesas de controle** e operadores especializados
  
  ## Diferenciais:
  
  - Equipamentos LED de baixo consumo energético
  - Programação personalizada para cada momento do evento
  - Técnicos experientes e certificados
  - Backup de equipamentos para garantir segurança
  - Integração com cenografia e estruturas
  
  Nossa iluminação cênica é ideal para shows, casamentos, formaturas, eventos corporativos, lançamentos de produtos e qualquer ocasião que mereça um ambiente visualmente impactante. Criamos experiências luminosas que encantam e emocionam.`,
      preco: "Solicite um orçamento e descubra preços especiais para você!",
      imagemPrincipal: "https://a.imagem.app/BBCnqe.jpeg",
      galeria: [
       
      ],
      opcoes: [
        "Iluminação Básica",
        "Iluminação Intermediária",
        "Iluminação Premium",
        "Iluminação Personalizada - Orçamento sob consulta",
      ],
      servicosRelacionados: ["palco-e-estruturas", "dj-profissional"],
    },
    {
      id: "9",
      slug: "tendas-e-coberturas",
      titulo: "Tendas e Coberturas",
      categoria: "Estrutura e Iluminação",
      descricaoCurta: "Tendas e coberturas para eventos ao ar livre",
      descricaoCompleta: `# Tendas e Coberturas para Eventos
  
  Nossas tendas e coberturas oferecem proteção e estilo para eventos ao ar livre. Com diferentes modelos e tamanhos, garantimos a solução ideal para seu evento, independente das condições climáticas.
  
  ## O que oferecemos:
  
  - **Tendas modulares** em diversos tamanhos
  - **Tendas tensionadas** com design diferenciado
  - **Pavilhões e galpões temporários**
  - **Coberturas para palcos** e áreas técnicas
  - **Fechamentos laterais** e pisos elevados
  - **Climatização** para tendas fechadas
  
  ## Diferenciais:
  
  - Estruturas seguras e certificadas
  - Lonas anti-chama e resistentes a intempéries
  - Equipe especializada em montagem
  - Opções decorativas e de iluminação integrada
  - Projetos personalizados para cada evento
  
  Nossas tendas e coberturas são perfeitas para casamentos ao ar livre, feiras, exposições, eventos corporativos, festivais e qualquer evento que necessite de proteção contra sol ou chuva. Oferecemos soluções elegantes que se integram perfeitamente ao ambiente do seu evento.`,
      preco: "Solicite um orçamento e descubra preços especiais para você!",
      imagemPrincipal: "https://a.imagem.app/BBC0dN.jpeg",
      galeria: [
      ],
      opcoes: [
        "Tenda 5x5m",
        "Tenda 10x10m",
        "Tenda 15x15m",
        "Tendas Especiais e Tensionadas - Orçamento sob consulta",
      ],
      servicosRelacionados: ["palco-e-estruturas", "moveis-para-eventos"],
    },
    {
      id: "10",
      slug: "dj-profissional",
      titulo: "DJ Profissional",
      categoria: "DJs e Bandas",
      descricaoCurta: "DJs experientes para animar seu evento",
      descricaoCompleta: `# DJ Profissional para Eventos
  
  Nossos DJs profissionais garantem a trilha sonora perfeita para seu evento, com equipamentos de alta qualidade e repertório personalizado. Criamos a atmosfera ideal para cada momento da sua celebração.
  
  ## O que oferecemos:
  
  - **DJ experiente** com repertório versátil
  - **Equipamento completo** de som e iluminação
  - **Playlist personalizada** conforme suas preferências
  - **Microfone para cerimônia** e anúncios
  - **Interação com o público** quando desejado
  - **Técnico de som** para garantir qualidade
  
  ## Diferenciais:
  
  - DJs com experiência em diversos tipos de eventos
  - Equipamentos profissionais de última geração
  - Reunião prévia para alinhamento de expectativas
  - Pontualidade e profissionalismo
  - Backup de equipamentos para segurança
  
  Nossos DJs são ideais para casamentos, aniversários, formaturas, eventos corporativos, confraternizações e qualquer ocasião que mereça uma trilha sonora de qualidade. Adaptamos o estilo musical e a abordagem de acordo com o perfil do seu evento e público.`,
      preco: "Solicite um orçamento e descubra preços especiais para você!",
      imagemPrincipal: "https://a.imagem.app/BBCAS2.jpeg",
      galeria: [
       
      ],
      opcoes: [
        "DJ Básico (4 horas)",
        "DJ Intermediário (6 horas)",
        "DJ Premium (8 horas)"
      ],
      servicosRelacionados: ["bandas-ao-vivo", "iluminacao-cenica"],
    },
    {
      id: "11",
      slug: "bandas-ao-vivo",
      titulo: "Bandas ao Vivo",
      categoria: "DJs e Bandas",
      descricaoCurta: "Bandas para diversos estilos musicais",
      descricaoCompleta: `# Bandas ao Vivo para Eventos
  
  Nossas bandas ao vivo trazem energia e emoção para seu evento com música de qualidade e performances envolventes. Oferecemos diferentes formações e estilos musicais para atender às suas preferências.
  
  ## O que oferecemos:
  
  - **Bandas completas** com vocalistas e instrumentistas
  - **Diferentes formações** (duo, trio, quarteto, banda completa)
  - **Diversos estilos musicais** (pop, rock, MPB, jazz, samba)
  - **Equipamento de som** profissional
  - **Repertório personalizado** para seu evento
  - **Apresentações em diferentes momentos** do evento
  
  ## Diferenciais:
  
  - Músicos profissionais com vasta experiência
  - Flexibilidade para adaptar o repertório durante o evento
  - Apresentação visual elegante e adequada
  - Pontualidade e profissionalismo
  - Possibilidade de ensaiar músicas especiais
  
  Nossas bandas são perfeitas para casamentos, festas corporativas, aniversários, formaturas e eventos especiais. A música ao vivo cria uma atmosfera única e memorável, proporcionando uma experiência sensorial completa para seus convidados.`,
      preco: "Solicite um orçamento e descubra preços especiais para você!",
      imagemPrincipal: "https://a.imagem.app/BBCodl.jpeg",
      galeria: [
      ],
      opcoes: [
        "Duo (voz e violão) ",
        "Trio (voz, violão e percussão)",
        "Quarteto",
        "Banda Completa (5+ músicos)",
      ],
      servicosRelacionados: ["dj-profissional", "iluminacao-cenica"],
    },
    {
      id: "12",
      slug: "fotografia-profissional",
      titulo: "Fotografia Profissional",
      categoria: "Fotografia e Filmagem",
      descricaoCurta: "Cobertura fotográfica completa do seu evento",
      descricaoCompleta: `# Fotografia Profissional para Eventos
  
  Nossa equipe de fotógrafos profissionais captura os momentos mais especiais do seu evento com sensibilidade e técnica apurada. Eternizamos cada detalhe, emoção e instante importante com imagens de alta qualidade.
  
  ## O que oferecemos:
  
  - **Cobertura fotográfica completa** do evento
  - **Ensaios pré-evento** quando aplicável
  - **Fotógrafos experientes** e assistentes
  - **Equipamentos profissionais** de última geração
  - **Edição e tratamento** de todas as imagens
  - **Entrega digital** em alta resolução
  - **Álbuns impressos** opcionais
  
  ## Diferenciais:
  
  - Abordagem fotojornalística e documental
  - Captura de momentos espontâneos e emoções genuínas
  - Atenção aos detalhes e elementos decorativos
  - Conhecimento técnico para lidar com diferentes condições de luz
  - Discrição e profissionalismo durante todo o evento
  
  Nossos serviços de fotografia são ideais para casamentos, aniversários, formaturas, eventos corporativos, congressos e qualquer ocasião especial que mereça ser eternizada com imagens de qualidade. Entregamos não apenas fotos, mas recordações emocionantes que contam a história do seu evento.`,
      preco: "Solicite um orçamento e descubra preços especiais para você!",
      imagemPrincipal: "https://a.imagem.app/BBCYSE.png",
      galeria: [
      ],
      opcoes: [
        "Pacote Básico (6 horas)",
        "Pacote Intermediário (10 horas)",
        "Pacote Premium (12 horas + ensaio)",
        "Álbum Impresso",
      ],
      servicosRelacionados: ["filmagem-e-edicao"],
    },
    {
      id: "13",
      slug: "filmagem-e-edicao",
      titulo: "Filmagem e Edição",
      categoria: "Fotografia e Filmagem",
      descricaoCurta: "Filmagem e edição profissional de vídeos",
      descricaoCompleta: `# Filmagem e Edição Profissional
  
  Nossa equipe de videomakers captura os momentos mais importantes do seu evento com equipamentos de última geração e técnicas cinematográficas. Transformamos esses registros em vídeos emocionantes e memoráveis.
  
  ## O que oferecemos:
  
  - **Filmagem completa** do evento
  - **Equipe com cinegrafistas** experientes
  - **Equipamentos profissionais** (câmeras 4K, drones, estabilizadores)
  - **Edição cinematográfica** com trilha sonora
  - **Versões curtas e longas** do vídeo final
  - **Entrega em alta resolução** digital
  
  ## Diferenciais:
  
  - Abordagem cinematográfica e storytelling
  - Captação de áudio de alta qualidade
  - Uso de drones para tomadas aéreas (quando permitido)
  - Edição personalizada conforme seu estilo
  - Entrega rápida de teaser pós-evento
  
  Nossos serviços de filmagem são perfeitos para casamentos, aniversários, formaturas, eventos corporativos e qualquer ocasião que mereça ser eternizada em vídeo. Criamos não apenas registros, mas verdadeiras obras audiovisuais que emocionam e preservam a memória do seu evento.`,
      preco: "Solicite um orçamento e descubra preços especiais para você!",
      imagemPrincipal: "https://a.imagem.app/BBCBbS.jpeg",
      galeria: [
      ],
      opcoes: [
        "Pacote Básico (6 horas)",
        "Pacote Intermediário (10 horas)",
        "Pacote Premium (12 horas + drone)",
        "Same Day Edit (teaser no mesmo dia)",
      ],
      servicosRelacionados: ["fotografia-profissional"],
    },
    {
      id: "14",
      slug: "moveis-para-eventos",
      titulo: "Móveis para Eventos",
      categoria: "Locação de Móveis",
      descricaoCurta: "Locação de móveis para eventos",
      descricaoCompleta: `# Móveis para Eventos
  
  Oferecemos uma ampla variedade de móveis para eventos, com design moderno e acabamento de qualidade. Nossas peças complementam a decoração e garantem conforto e funcionalidade para seus convidados.
  
  ## O que oferecemos:
  
  - **Mesas e cadeiras** em diversos modelos
  - **Lounges e poltronas** para áreas de descanso
  - **Banquetas e mesas altas** para coquetéis
  - **Mobiliário para buffet** e áreas de serviço
  - **Móveis decorativos** e peças especiais
  - **Entrega, montagem e retirada**
  
  ## Diferenciais:
  
  - Móveis bem conservados e higienizados
  - Variedade de estilos (clássico, contemporâneo, rústico)
  - Consultoria para escolha das melhores opções
  - Flexibilidade para eventos de diferentes portes
  - Possibilidade de personalização para grandes eventos
  
  Nossos móveis são ideais para casamentos, festas corporativas, lançamentos, feiras, congressos e qualquer evento que necessite de mobiliário de qualidade. Oferecemos soluções completas que atendem às necessidades estéticas e funcionais do seu evento.`,
      preco: "Solicite um orçamento e descubra preços especiais para você!",
      imagemPrincipal: "https://a.imagem.app/BBCkYZ.jpeg",
      galeria: [
      ],
      opcoes: [
        "Pacote Básico (até 50 pessoas)",
        "Pacote Intermediário (até 150 pessoas)",
        "Pacote Premium",
        "Móveis Avulsos - Consulte nossa tabela",
      ],
      servicosRelacionados: ["lounges-e-ambientacao", "decoracao-tematica"],
    },
    {
      id: "15",
      slug: "lounges-e-ambientacao",
      titulo: "Lounges e Ambientação",
      categoria: "Locação de Móveis",
      descricaoCurta: "Criação de lounges e ambientes especiais",
      descricaoCompleta: `# Lounges e Ambientação para Eventos
  
  Criamos áreas de lounge e ambientações especiais que transformam seu evento em uma experiência única. Nossos espaços combinam conforto, estética e funcionalidade para encantar seus convidados.
  
  ## O que oferecemos:
  
  - **Lounges completos** com sofás, poltronas e mesas
  - **Ambientação temática** personalizada
  - **Iluminação decorativa** para criar atmosfera
  - **Elementos decorativos** complementares
  - **Áreas instagramáveis** para fotos
  - **Montagem e desmontagem** completa
  
  ## Diferenciais:
  
  - Design exclusivo para cada evento
  - Móveis confortáveis e de alta qualidade
  - Combinação harmônica de cores e texturas
  - Atenção aos detalhes e acabamentos
  - Adaptação a diferentes espaços e necessidades
  
  Nossos lounges e ambientações são perfeitos para casamentos, festas corporativas, lançamentos de produtos, eventos sociais e qualquer ocasião que necessite de áreas de convivência e descanso. Criamos espaços que convidam à interação, ao relaxamento e que complementam perfeitamente a proposta do seu evento.`,
      preco: "Solicite um orçamento e descubra preços especiais para você!",
      imagemPrincipal: "https://a.imagem.app/BBCzci.jpeg",
      galeria: [
      ],
      opcoes: [
        "Lounge Pequeno (até 30 pessoas)",
        "Lounge Médio (até 50 pessoas)",
        "Lounge Grande (até 80 pessoas)",
        "Ambientação Temática Completa - Orçamento sob consulta",
      ],
      servicosRelacionados: ["moveis-para-eventos", "decoracao-tematica", "iluminacao-cenica"],
    },
  ]
  
  // Função para buscar um serviço pelo slug
  export function getServicoBySlug(slug: string): Servico | undefined {
    return servicos.find((servico) => servico.slug === slug)
  }
  
  // Função para buscar serviços relacionados
  export function getServicosRelacionados(slugs: string[]): Servico[] {
    return servicos.filter((servico) => slugs.includes(servico.slug))
  }
  
  // Função para buscar serviços por categoria
  export function getServicosByCategoria(categoria: string): Servico[] {
    return servicos.filter((servico) => servico.categoria === categoria)
  }
  
  // Função para buscar todos os serviços
  export function getAllServicos(): Servico[] {
    return servicos
  }
  
  