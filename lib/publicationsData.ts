export type Publication = {
  id: number
  title: string
  category: string
  year: number
  slug: string
  autor?: string
  resumo?: string
  conteudo?: string
  downloadUrl?: string
}

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
]

export const publications: Publication[] = [
  {
    id: 1,
    title: "Boletim Econômico do Rio – 1ª edição – 2021",
    category: "BOLETIM ECONÔMICO",
    year: 2021,
    slug: "boletim-economico-do-rio-1a-edicao-2021",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%201%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202021.pdf"
  },
  {
    id: 2,
    title: "Boletim Econômico do Rio – 1ª edição – 2022",
    category: "BOLETIM ECONÔMICO",
    year: 2022,
    slug: "boletim-economico-do-rio-1a-edicao-2022",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%201%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
  },
  {
    id: 3,
    title: "Boletim Econômico do Rio – 1ª edição – 2023",
    category: "BOLETIM ECONÔMICO",
    year: 2023,
    slug: "boletim-economico-do-rio-1a-edicao-2023",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%201%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
  },
  {
    id: 4,
    title: "Boletim Econômico do Rio – 1ª edição – 2024",
    category: "BOLETIM ECONÔMICO",
    year: 2024,
    slug: "boletim-economico-do-rio-1a-edicao-2024",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%201%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
  },
  {
    id: 5,
    title: "Boletim Econômico do Rio – 2ª edição – 2021",
    category: "BOLETIM ECONÔMICO",
    year: 2021,
    slug: "boletim-economico-do-rio-2a-edicao-2021",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%202%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202021.pdf"
  },
  {
    id: 6,
    title: "Boletim Econômico do Rio – 2ª edição – 2022",
    category: "BOLETIM ECONÔMICO",
    year: 2022,
    slug: "boletim-economico-do-rio-2a-edicao-2022",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%202%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
  },
  {
    id: 7,
    title: "Boletim Econômico do Rio – 2ª edição – 2023",
    category: "BOLETIM ECONÔMICO",
    year: 2023,
    slug: "boletim-economico-do-rio-2a-edicao-2023",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%202%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
  },
  {
    id: 8,
    title: "Boletim Econômico do Rio – 2ª edição – 2024",
    category: "BOLETIM ECONÔMICO",
    year: 2024,
    slug: "boletim-economico-do-rio-2a-edicao-2024",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%202%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
  },
  {
    id: 9,
    title: "Boletim Econômico do Rio – 3ª edição – 2021",
    category: "BOLETIM ECONÔMICO",
    year: 2021,
    slug: "boletim-economico-do-rio-3a-edicao-2021",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%203%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202021.pdf"
  },
  {
    id: 10,
    title: "Boletim Econômico do Rio – 3ª edição – 2022",
    category: "BOLETIM ECONÔMICO",
    year: 2022,
    slug: "boletim-economico-do-rio-3a-edicao-2022",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%203%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
  },
  {
    id: 11,
    title: "Boletim Econômico do Rio – 3ª edição – 2023",
    category: "BOLETIM ECONÔMICO",
    year: 2023,
    slug: "boletim-economico-do-rio-3a-edicao-2023",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%203%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
  },
  {
    id: 12,
    title: "Boletim Econômico do Rio – 3ª edição – 2024",
    category: "BOLETIM ECONÔMICO",
    year: 2024,
    slug: "boletim-economico-do-rio-3a-edicao-2024",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%203%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
  },
  {
    id: 13,
    title: "Boletim Econômico do Rio – 4ª edição – 2021",
    category: "BOLETIM ECONÔMICO",
    year: 2021,
    slug: "boletim-economico-do-rio-4a-edicao-2021",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%204%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202021.pdf"
  },
  {
    id: 14,
    title: "Boletim Econômico do Rio – 4ª edição – 2022",
    category: "BOLETIM ECONÔMICO",
    year: 2022,
    slug: "boletim-economico-do-rio-4a-edicao-2022",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%204%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
  },
  {
    id: 15,
    title: "Boletim Econômico do Rio – 4ª edição – 2023",
    category: "BOLETIM ECONÔMICO",
    year: 2023,
    slug: "boletim-economico-do-rio-4a-edicao-2023",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%204%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
  },
  {
    id: 16,
    title: "Boletim Econômico do Rio – 4ª edição – 2024",
    category: "BOLETIM ECONÔMICO",
    year: 2024,
    slug: "boletim-economico-do-rio-4a-edicao-2024",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%204%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
  },
  {
    id: 17,
    title: "Boletim Econômico do Rio – 5ª edição – 2021",
    category: "BOLETIM ECONÔMICO",
    year: 2021,
    slug: "boletim-economico-do-rio-5a-edicao-2021",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%205%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202021.pdf"
  },
  {
    id: 18,
    title: "Boletim Econômico do Rio – 5ª edição – 2022",
    category: "BOLETIM ECONÔMICO",
    year: 2022,
    slug: "boletim-economico-do-rio-5a-edicao-2022",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%205%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
  },
  {
    id: 19,
    title: "Boletim Econômico do Rio – 5ª edição – 2023",
    category: "BOLETIM ECONÔMICO",
    year: 2023,
    slug: "boletim-economico-do-rio-5a-edicao-2023",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%205%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
  },
  {
    id: 20,
    title: "Boletim Econômico do Rio – 5ª edição – 2024",
    category: "BOLETIM ECONÔMICO",
    year: 2024,
    slug: "boletim-economico-do-rio-5a-edicao-2024",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%205%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
  },
  {
    id: 21,
    title: "Boletim Econômico do Rio – 6ª edição – 2021",
    category: "BOLETIM ECONÔMICO",
    year: 2021,
    slug: "boletim-economico-do-rio-6a-edicao-2021",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%206%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202021.pdf"
  },
  {
    id: 22,
    title: "Boletim Econômico do Rio – 6ª edição – 2022",
    category: "BOLETIM ECONÔMICO",
    year: 2022,
    slug: "boletim-economico-do-rio-6a-edicao-2022",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%206%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
  },
  {
    id: 23,
    title: "Boletim Econômico do Rio – 6ª edição – 2023",
    category: "BOLETIM ECONÔMICO",
    year: 2023,
    slug: "boletim-economico-do-rio-6a-edicao-2023",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%206%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
  },
  {
    id: 24,
    title: "Boletim Econômico do Rio – 6ª edição – 2024",
    category: "BOLETIM ECONÔMICO",
    year: 2024,
    slug: "boletim-economico-do-rio-6a-edicao-2024",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%206%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
  },
  {
    id: 25,
    title: "Boletim Econômico do Rio – 7ª edição – 2021",
    category: "BOLETIM ECONÔMICO",
    year: 2021,
    slug: "boletim-economico-do-rio-7a-edicao-2021",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%207%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202021.pdf"
  },
  {
    id: 26,
    title: "Boletim Econômico do Rio – 7ª edição – 2022",
    category: "BOLETIM ECONÔMICO",
    year: 2022,
    slug: "boletim-economico-do-rio-7a-edicao-2022",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%207%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
  },
  {
    id: 27,
    title: "Boletim Econômico do Rio – 7ª edição – 2023",
    category: "BOLETIM ECONÔMICO",
    year: 2023,
    slug: "boletim-economico-do-rio-7a-edicao-2023",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%207%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
  },
  {
    id: 28,
    title: "Boletim Econômico do Rio – 7ª edição – 2024",
    category: "BOLETIM ECONÔMICO",
    year: 2024,
    slug: "boletim-economico-do-rio-7a-edicao-2024",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%207%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
  },
  {
    id: 29,
    title: "Boletim Econômico do Rio – 8ª edição – 2022",
    category: "BOLETIM ECONÔMICO",
    year: 2022,
    slug: "boletim-economico-do-rio-8a-edicao-2022",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%208%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
  },
  {
    id: 30,
    title: "Boletim Econômico do Rio – 8ª edição – 2023",
    category: "BOLETIM ECONÔMICO",
    year: 2023,
    slug: "boletim-economico-do-rio-8a-edicao-2023",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%208%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
  },
  {
    id: 31,
    title: "Boletim Econômico do Rio – 8ª edição – 2024",
    category: "BOLETIM ECONÔMICO",
    year: 2024,
    slug: "boletim-economico-do-rio-8a-edicao-2024",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%208%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
  },
  {
    id: 32,
    title: "Boletim Econômico do Rio – 9ª edição – 2022",
    category: "BOLETIM ECONÔMICO",
    year: 2022,
    slug: "boletim-economico-do-rio-9a-edicao-2022",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%209%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
  },
  {
    id: 33,
    title: "Boletim Econômico do Rio – 9ª edição – 2023",
    category: "BOLETIM ECONÔMICO",
    year: 2023,
    slug: "boletim-economico-do-rio-9a-edicao-2023",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%209%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
  },
  {
    id: 34,
    title: "Boletim Econômico do Rio – 9ª edição – 2024",
    category: "BOLETIM ECONÔMICO",
    year: 2024,
    slug: "boletim-economico-do-rio-9a-edicao-2024",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%209%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
  },
  {
    id: 35,
    title: "Boletim Econômico do Rio – 10ª edição – 2022",
    category: "BOLETIM ECONÔMICO",
    year: 2022,
    slug: "boletim-economico-do-rio-10a-edicao-2022",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%2010%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
  },
  {
    id: 36,
    title: "Boletim Econômico do Rio – 10ª edição – 2023",
    category: "BOLETIM ECONÔMICO",
    year: 2023,
    slug: "boletim-economico-do-rio-10a-edicao-2023",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%2010%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
  },
  {
    id: 37,
    title: "Boletim Econômico do Rio – 10ª edição – 2024",
    category: "BOLETIM ECONÔMICO",
    year: 2024,
    slug: "boletim-economico-do-rio-10a-edicao-2024",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%2010%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
  },
  {
    id: 38,
    title: "Boletim Econômico do Rio – 11ª edição – 2022",
    category: "BOLETIM ECONÔMICO",
    year: 2022,
    slug: "boletim-economico-do-rio-11a-edicao-2022",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%2011%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
  },
  {
    id: 39,
    title: "Boletim Econômico do Rio – 11ª edição – 2023",
    category: "BOLETIM ECONÔMICO",
    year: 2023,
    slug: "boletim-economico-do-rio-11a-edicao-2023",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%2011%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
  },
  {
    id: 40,
    title: "Boletim Econômico do Rio – 11ª edição – 2024",
    category: "BOLETIM ECONÔMICO",
    year: 2024,
    slug: "boletim-economico-do-rio-11a-edicao-2024",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%2011%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
  },
  {
    id: 41,
    title: "Boletim Econômico do Rio – 12ª edição – 2022",
    category: "BOLETIM ECONÔMICO",
    year: 2022,
    slug: "boletim-economico-do-rio-12a-edicao-2022",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%2012%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
  },
  {
    id: 42,
    title: "Boletim Econômico do Rio – 12ª edição – 2023",
    category: "BOLETIM ECONÔMICO",
    year: 2023,
    slug: "boletim-economico-do-rio-12a-edicao-2023",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%2012%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
  },
  {
    id: 43,
    title: "Boletim Econômico do Rio – 12ª edição – 2024",
    category: "BOLETIM ECONÔMICO",
    year: 2024,
    slug: "boletim-economico-do-rio-12a-edicao-2024",
    downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%2012%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
  }
]