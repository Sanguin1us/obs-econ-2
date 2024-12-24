export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Crédito Carioca",
    description: "Linhas de crédito para micro, pequenas e médias empresas que buscam ampliar seu negócio, financiar equipamentos ou obter capital de giro. Parceria com a Invest.Rio e instituições financeiras privadas.",
    imageUrl: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 2,
    title: "Auxílio Empresa Carioca",
    description: "Auxílio para micro e pequenas empresas que precisaram fechar durante o período de medidas mais restritivas, em parceria com a Câmara Municipal de Vereadores.",
    imageUrl: "/placeholder.svg?height=400&width=300"
  },
  {
    id: 3,
    title: "Licenciamento Integrado (LICIN)",
    description: "As licenças de obra que antes demoravam até 267 dias, agora são emitidas em até 30 dias, trazendo mais Investimentos e tornando o Rio a melhor capital do Brasil para a construção civil.",
    imageUrl: "/placeholder.svg?height=350&width=350"
  },
  {
    id: 4,
    title: "PL da Liberdade Econômica",
    description: "Projeto de lei que garante autonomia para quem deseja empreender sem enfrentar muitas burocracias e elimina a necessidade de alvará para atividades de baixo risco.",
    imageUrl: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 5,
    title: "Transformação Digital",
    description: "Digitalização dos novos licenciamentos urbanísticos e ambientais e, até o final de 2021, de todo o acervo de processos da Secretaria.",
    imageUrl: "/placeholder.svg?height=400&width=300"
  },
  {
    id: 6,
    title: "Programadores Cariocas",
    description: "Curso de programação para jovens cariocas, que visa tornar o Rio um dos principais polos de startups e inovação.",
    imageUrl: "/placeholder.svg?height=350&width=350"
  },
  {
    id: 7,
    title: "Gestão de Estoque Regulatório",
    description: "Análise completa do estoque regulatório para promover a melhor organização legislativa das normas sobre licenciamento urbanístico e ambiental.",
    imageUrl: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 8,
    title: "Porto Maravalley",
    description: "Criação de um polo de inovação e tecnologia no coração da Zona Portuária para atrair big techs, startups,centros de pesquisa, universidades e moradia.",
    imageUrl: "/placeholder.svg?height=400&width=300"
  },
  {
    id: 9,
    title: "Educação Financeira Carioca",
    description: "Programa de educação financeira que visa capacitar jovens cariocas a partir dos 14 anos com noções básicas de como lidar com o dinheiro. Pilar importante tanto para a vida profissional, quanto pessoal.",
    imageUrl: "/placeholder.svg?height=350&width=350"
  },
  {
    id: 10,
    title: "Laboratório de Inovação - Ideia.Rio",
    description: "Espaço de integração entre academia, Governo e sociedade para trazer ideias e aperfeiçoamentos para políticas regulatórias de desenvolvimento econômico.",
    imageUrl: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 11,
    title: "Sandbox Regulatório",
    description: "Espaço controlado para experimentar políticas públicas e novos modelos de negócio para a cidade do Rio de Janeiro.",
    imageUrl: "/placeholder.svg?height=400&width=300"
  },
  {
    id: 12,
    title: "Análise de Impacto Regulatório",
    description: "Construção de metodologia para avaliar o impacto regulatório de políticas públicas no Município.",
    imageUrl: "/placeholder.svg?height=350&width=350"
  }
];

