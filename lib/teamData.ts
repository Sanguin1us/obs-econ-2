export type TeamMember = {
  name: string;
  certification: string;
  photoUrl: string;
};

export type Subdepartment = {
  name: string;
  fullName: string;
  members: TeamMember[];
};

export const subdepartments: Subdepartment[] = [
  {
    name: "SUBDEI",
    fullName: "Subsecretaria de Desenvolvimento Econômico e Inovação",
    members: [
      { name: "Marcel Grillo Balassiano", certification: "Subsecretário de Desenvolvimento Econômico e Inovação", photoUrl: "/placeholder.svg" },
      { name: "Leonardo Moog", certification: "Doutorando em Economia (EPGE/FGV)", photoUrl: "/placeholder.svg" },
      { name: "Lucas Simões", certification: "Mestrando em População, Território e Estatísticas Públicas (ENCE/IBGE)", photoUrl: "/placeholder.svg" },
      { name: "Luiza Branco", certification: "Doutoranda em Direito (UFF)", photoUrl: "/placeholder.svg" },
      { name: "Maíra França", certification: "Doutora em Economia (UFF)", photoUrl: "/placeholder.svg" },
      { name: "Manoel Tabet", certification: "Doutor em Economia (UFF)", photoUrl: "/placeholder.svg" },
      { name: "Marcus Nascimento", certification: "Doutorando em Estatística (UFRJ)", photoUrl: "/placeholder.svg" },
      { name: "Tayanne Rodrigues", certification: "Graduanda em Economia (UERJ)", photoUrl: "/placeholder.svg" },
    ]
  },
  {
    name: "SUBRAN",
    fullName: "Subsecretaria de Regulação e Ambiente de Negócios",
    members: [
      { name: "Carina Quirino", certification: "Subsecretária de Regulação e Ambiente de Negócios", photoUrl: "/placeholder.svg" },
      { name: "Emanuel Fernandes", certification: "Mestre em Economia (EPGE/FGV)", photoUrl: "/placeholder.svg" },
      { name: "Rachel Milito", certification: "Pós-graduada em Direito (ESAP/PGE-RJ)", photoUrl: "/placeholder.svg" },
      { name: "Rafael Wanderley", certification: "Graduado em Direito (UFRJ)", photoUrl: "/placeholder.svg" },
      { name: "João Donasolo", certification: "Graduando em Ciência de Dados (EMAp/FGV) e Direito (UFRJ)", photoUrl: "/placeholder.svg" },
      { name: "Kátia Alves", certification: "Doutora em Economia (EPGE/FGV)", photoUrl: "/placeholder.svg" },
      { name: "Theo Garcia", certification: "Mestrando em Economia (EPGE/FGV)", photoUrl: "/placeholder.svg" },
    ]
  },
];

export const leadership = [
  {
    name: "Eduardo Paes",
    title: "Prefeito do Município do Rio de Janeiro",
    description: "Nascido no Rio de Janeiro em 14 de novembro de 1969, o prefeito Eduardo Paes é formado em Direito pela Pontifícia Universidade Católica do Rio de Janeiro com especialização em Políticas Públicas e Governo pela UFRJ. Dedicou sua carreira primordialmente a vida pública, hoje comanda pela terceira vez a cidade Maravilhosa.",
    photoUrl: "/placeholder.svg"
  },
  {
    name: "Chicão Bulhões",
    title: "Secretário de Desenvolvimento Urbano e Econômico",
    description: "Carioca apaixonado, advogado formado pela PUC-Rio e ex deputado estadual pelo partido NOVO. Foi eleito com 26.335 votos, tendo como principal bandeira a defesa da liberdade em todas as suas formas - seja na economia, por meio da desburocratização e simplificação de tributos, seja no âmbito das liberdades individuais.",
    photoUrl: "/placeholder.svg"
  }
];

