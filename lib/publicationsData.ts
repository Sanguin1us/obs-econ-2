export type Publication = {
  id: number;
  title: string;
  category: string;
  year: number;
  semester: 'First' | 'Second';
};

export const publicationCategories = [
  "BOLETIM ECONÔMICO",
  "NOTAS TÉCNICAS",
  "ESTUDOS ESPECIAIS",
  "APRESENTAÇÕES",
  "CARNAVAL DE DADOS",
  "RÉVEILLON EM DADOS",
  "WEB SUMMIT RIO",
  "ECONOMIA VERDE",
  "CRYPTO RIO",
  "DESENVOLVIMENTO ECONÔMICO DO RIO",
  "AEROPORTOS",
  "TURISMO",
  "ECONOMIA DA MODA",
  "DEMAIS PUBLICAÇÕES"
];

export const publications: Publication[] = [
  { id: 1, title: "Perspectiva Econômica 2023", category: "BOLETIM ECONÔMICO", year: 2023, semester: "First" },
  { id: 2, title: "Estudo Especial: Economia Verde", category: "ESTUDOS ESPECIAIS", year: 2023, semester: "First" },
  { id: 3, title: "Nota Técnica: Análise da Inflação", category: "NOTAS TÉCNICAS", year: 2023, semester: "Second" },
  { id: 4, title: "Impacto Econômico do Carnaval", category: "CARNAVAL DE DADOS", year: 2022, semester: "First" },
  { id: 5, title: "Dados de Turismo do Réveillon", category: "RÉVEILLON EM DADOS", year: 2022, semester: "Second" },
  // Add more publications as needed
];

