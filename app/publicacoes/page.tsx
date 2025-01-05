"use client"
import { useState, useEffect, Suspense } from "react"
import { FileText, Download, Calendar, User, Search, X } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"

function PublicacoesInner() {
  type Publication = {
    id: number
    title: string
    category: string
    year: number
    semester: "First" | "Second"
    slug: string
    autor?: string
    resumo?: string
    conteudo?: string
    downloadUrl?: string
  }

  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  }

  const publicationCategories = [
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

  const publications: Publication[] = [
    // 1ª Edição
    {
      id: 2,
      title: "Boletim Econômico do Rio – 1ª edição – 2021",
      category: "BOLETIM ECONÔMICO",
      year: 2021,
      semester: "Second",
      slug: "boletim-economico-do-rio-1a-edicao-2021",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%201%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202021.pdf"
    },
    {
      id: 3,
      title: "Boletim Econômico do Rio – 1ª edição – 2022",
      category: "BOLETIM ECONÔMICO",
      year: 2022,
      semester: "Second",
      slug: "boletim-economico-do-rio-1a-edicao-2022",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%201%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
    },
    {
      id: 4,
      title: "Boletim Econômico do Rio – 1ª edição – 2023",
      category: "BOLETIM ECONÔMICO",
      year: 2023,
      semester: "Second",
      slug: "boletim-economico-do-rio-1a-edicao-2023",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%201%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
    },
    {
      id: 5,
      title: "Boletim Econômico do Rio – 1ª edição – 2024",
      category: "BOLETIM ECONÔMICO",
      year: 2024,
      semester: "Second",
      slug: "boletim-economico-do-rio-1a-edicao-2024",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%201%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
    },
    // 2ª Edição
    {
      id: 7,
      title: "Boletim Econômico do Rio – 2ª edição – 2021",
      category: "BOLETIM ECONÔMICO",
      year: 2021,
      semester: "Second",
      slug: "boletim-economico-do-rio-2a-edicao-2021",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%202%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202021.pdf"
    },
    {
      id: 8,
      title: "Boletim Econômico do Rio – 2ª edição – 2022",
      category: "BOLETIM ECONÔMICO",
      year: 2022,
      semester: "Second",
      slug: "boletim-economico-do-rio-2a-edicao-2022",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%202%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
    },
    {
      id: 9,
      title: "Boletim Econômico do Rio – 2ª edição – 2023",
      category: "BOLETIM ECONÔMICO",
      year: 2023,
      semester: "Second",
      slug: "boletim-economico-do-rio-2a-edicao-2023",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%202%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
    },
    {
      id: 10,
      title: "Boletim Econômico do Rio – 2ª edição – 2024",
      category: "BOLETIM ECONÔMICO",
      year: 2024,
      semester: "Second",
      slug: "boletim-economico-do-rio-2a-edicao-2024",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%202%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
    },
    // 3ª Edição
    {
      id: 11,
      title: "Boletim Econômico do Rio – 3ª edição – 2021",
      category: "BOLETIM ECONÔMICO",
      year: 2021,
      semester: "Second",
      slug: "boletim-economico-do-rio-3a-edicao-2021",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%203%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202021.pdf"
    },
    {
      id: 12,
      title: "Boletim Econômico do Rio – 3ª edição – 2022",
      category: "BOLETIM ECONÔMICO",
      year: 2022,
      semester: "Second",
      slug: "boletim-economico-do-rio-3a-edicao-2022",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%203%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
    },
    {
      id: 13,
      title: "Boletim Econômico do Rio – 3ª edição – 2023",
      category: "BOLETIM ECONÔMICO",
      year: 2023,
      semester: "Second",
      slug: "boletim-economico-do-rio-3a-edicao-2023",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%203%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
    },
    {
      id: 14,
      title: "Boletim Econômico do Rio – 3ª edição – 2024",
      category: "BOLETIM ECONÔMICO",
      year: 2024,
      semester: "Second",
      slug: "boletim-economico-do-rio-3a-edicao-2024",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%203%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
    },
    // 4ª Edição
    {
      id: 15,
      title: "Boletim Econômico do Rio – 4ª edição – 2021",
      category: "BOLETIM ECONÔMICO",
      year: 2021,
      semester: "Second",
      slug: "boletim-economico-do-rio-4a-edicao-2021",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%204%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202021.pdf"
    },
    {
      id: 16,
      title: "Boletim Econômico do Rio – 4ª edição – 2022",
      category: "BOLETIM ECONÔMICO",
      year: 2022,
      semester: "Second",
      slug: "boletim-economico-do-rio-4a-edicao-2022",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%204%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
    },
    {
      id: 17,
      title: "Boletim Econômico do Rio – 4ª edição – 2023",
      category: "BOLETIM ECONÔMICO",
      year: 2023,
      semester: "Second",
      slug: "boletim-economico-do-rio-4a-edicao-2023",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%204%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
    },
    {
      id: 18,
      title: "Boletim Econômico do Rio – 4ª edição – 2024",
      category: "BOLETIM ECONÔMICO",
      year: 2024,
      semester: "Second",
      slug: "boletim-economico-do-rio-4a-edicao-2024",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%204%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
    },
    // 5ª Edição
    {
      id: 19,
      title: "Boletim Econômico do Rio – 5ª edição – 2021",
      category: "BOLETIM ECONÔMICO",
      year: 2021,
      semester: "Second",
      slug: "boletim-economico-do-rio-5a-edicao-2021",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%205%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202021.pdf"
    },
    {
      id: 20,
      title: "Boletim Econômico do Rio – 5ª edição – 2022",
      category: "BOLETIM ECONÔMICO",
      year: 2022,
      semester: "Second",
      slug: "boletim-economico-do-rio-5a-edicao-2022",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%205%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
    },
    {
      id: 21,
      title: "Boletim Econômico do Rio – 5ª edição – 2023",
      category: "BOLETIM ECONÔMICO",
      year: 2023,
      semester: "Second",
      slug: "boletim-economico-do-rio-5a-edicao-2023",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%205%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
    },
    {
      id: 22,
      title: "Boletim Econômico do Rio – 5ª edição – 2024",
      category: "BOLETIM ECONÔMICO",
      year: 2024,
      semester: "Second",
      slug: "boletim-economico-do-rio-5a-edicao-2024",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%205%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
    },
    // 6ª Edição
    {
      id: 23,
      title: "Boletim Econômico do Rio – 6ª edição – 2021",
      category: "BOLETIM ECONÔMICO",
      year: 2021,
      semester: "Second",
      slug: "boletim-economico-do-rio-6a-edicao-2021",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%206%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202021.pdf"
    },
    {
      id: 24,
      title: "Boletim Econômico do Rio – 6ª edição – 2022",
      category: "BOLETIM ECONÔMICO",
      year: 2022,
      semester: "Second",
      slug: "boletim-economico-do-rio-6a-edicao-2022",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%206%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
    },
    {
      id: 25,
      title: "Boletim Econômico do Rio – 6ª edição – 2023",
      category: "BOLETIM ECONÔMICO",
      year: 2023,
      semester: "Second",
      slug: "boletim-economico-do-rio-6a-edicao-2023",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%206%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
    },
    {
      id: 26,
      title: "Boletim Econômico do Rio – 6ª edição – 2024",
      category: "BOLETIM ECONÔMICO",
      year: 2024,
      semester: "Second",
      slug: "boletim-economico-do-rio-6a-edicao-2024",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%206%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
    },
    // 7ª Edição
    {
      id: 27,
      title: "Boletim Econômico do Rio – 7ª edição – 2021",
      category: "BOLETIM ECONÔMICO",
      year: 2021,
      semester: "Second",
      slug: "boletim-economico-do-rio-7a-edicao-2021",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%207%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202021.pdf"
    },
    {
      id: 28,
      title: "Boletim Econômico do Rio – 7ª edição – 2022",
      category: "BOLETIM ECONÔMICO",
      year: 2022,
      semester: "Second",
      slug: "boletim-economico-do-rio-7a-edicao-2022",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%207%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
    },
    {
      id: 29,
      title: "Boletim Econômico do Rio – 7ª edição – 2023",
      category: "BOLETIM ECONÔMICO",
      year: 2023,
      semester: "Second",
      slug: "boletim-economico-do-rio-7a-edicao-2023",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%207%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
    },
    {
      id: 30,
      title: "Boletim Econômico do Rio – 7ª edição – 2024",
      category: "BOLETIM ECONÔMICO",
      year: 2024,
      semester: "Second",
      slug: "boletim-economico-do-rio-7a-edicao-2024",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%207%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
    },
    // 8ª Edição
    {
      id: 31,
      title: "Boletim Econômico do Rio – 8ª edição – 2022",
      category: "BOLETIM ECONÔMICO",
      year: 2022,
      semester: "Second",
      slug: "boletim-economico-do-rio-8a-edicao-2022",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%208%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
    },
    {
      id: 32,
      title: "Boletim Econômico do Rio – 8ª edição – 2023",
      category: "BOLETIM ECONÔMICO",
      year: 2023,
      semester: "Second",
      slug: "boletim-economico-do-rio-8a-edicao-2023",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%208%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
    },
    {
      id: 33,
      title: "Boletim Econômico do Rio – 8ª edição – 2024",
      category: "BOLETIM ECONÔMICO",
      year: 2024,
      semester: "Second",
      slug: "boletim-economico-do-rio-8a-edicao-2024",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%208%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
    },
    // 9ª Edição
    {
      id: 34,
      title: "Boletim Econômico do Rio – 9ª edição – 2022",
      category: "BOLETIM ECONÔMICO",
      year: 2022,
      semester: "Second",
      slug: "boletim-economico-do-rio-9a-edicao-2022",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%209%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202022.pdf"
    },
    {
      id: 35,
      title: "Boletim Econômico do Rio – 9ª edição – 2023",
      category: "BOLETIM ECONÔMICO",
      year: 2023,
      semester: "Second",
      slug: "boletim-economico-do-rio-9a-edicao-2023",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%209%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202023.pdf"
    },
    {
      id: 36,
      title: "Boletim Econômico do Rio – 9ª edição – 2024",
      category: "BOLETIM ECONÔMICO",
      year: 2024,
      semester: "Second",
      slug: "boletim-economico-do-rio-9a-edicao-2024",
      downloadUrl: "https://raw.githubusercontent.com/Sanguin1us/arquivos_obs_econ/main/Boletims/Boletim%20Econ%C3%B4mico%20do%20Rio%20%E2%80%93%209%C2%AA%20edi%C3%A7%C3%A3o%20%E2%80%93%202024.pdf"
    }
  ]

  const years = [2024, 2023, 2022, 2021, 2020]
  const semesters = ["Primeiro Semestre", "Segundo Semestre"]
  const searchParams = useSearchParams()
  const router = useRouter()
  const slug = searchParams.get("slug")
  const categoria = searchParams.get("categoria")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [selectedSemester, setSelectedSemester] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (categoria && publicationCategories.includes(categoria)) {
      setSelectedCategory(categoria)
    } else {
      setSelectedCategory(null)
    }
  }, [categoria])

  useEffect(() => {
    if (slug) {
      setSelectedCategory(null)
      setSelectedYear(null)
      setSelectedSemester(null)
    }
  }, [slug])

  if (slug) {
    const pub = publications.find(item => item.slug === slug)
    if (!pub) {
      return (
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Publicação não encontrada</h1>
        </div>
      )
    }
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">{pub.title}</h1>
        <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
          <div className="flex items-center">
            <Calendar className="mr-2" size={20} />
            <span>
              {pub.year} - {pub.semester === "First" ? "Primeiro Semestre" : "Segundo Semestre"}
            </span>
          </div>
          {pub.autor && (
            <div className="flex items-center">
              <User className="mr-2" size={20} />
              <span>{pub.autor}</span>
            </div>
          )}
        </div>
        {pub.resumo && (
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Resumo</h2>
            <p>{pub.resumo}</p>
          </div>
        )}
        {pub.conteudo && (
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Relatório Completo</h2>
            <p>{pub.conteudo}</p>
          </div>
        )}
        <div className="mt-12">
          {pub.downloadUrl ? (
            <a
              href={pub.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
            >
              <FileText className="mr-2" size={20} />
              Download do Relatório
            </a>
          ) : (
            <button className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
              <FileText className="mr-2" size={20} />
              Download do Relatório
            </button>
          )}
        </div>
      </div>
    )
  }

  const filteredPublications = publications.filter(p => {
    if (!searchQuery) return (
      (!selectedCategory || p.category === selectedCategory) &&
      (!selectedYear || p.year === selectedYear) &&
      (!selectedSemester || p.semester === (selectedSemester.includes("Primeiro") ? "First" : "Second"))
    )
    const normalizedQuery = normalizeText(searchQuery)
    const matchesSearch = [
      p.title,
      p.category,
      p.autor || '',
      p.resumo || ''
    ].some(field => normalizeText(field).includes(normalizedQuery))
    return (
      matchesSearch &&
      (!selectedCategory || p.category === selectedCategory) &&
      (!selectedYear || p.year === selectedYear) &&
      (!selectedSemester || p.semester === (selectedSemester.includes("Primeiro") ? "First" : "Second"))
    )
  })

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null)
      setSelectedYear(null)
      setSelectedSemester(null)
      router.push('/publicacoes')
    } else {
      setSelectedCategory(category)
      setSelectedYear(null)
      setSelectedSemester(null)
      router.push(`/publicacoes?categoria=${encodeURIComponent(category)}`)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="border-b pb-8 mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-gray-900">Publicações</h1>
          <div className="relative">
            <div 
              className={`
                flex items-center bg-gray-100 rounded-full 
                transition-all duration-200 ease-in-out
                ${searchOpen ? 'w-[280px]' : 'w-10'}
              `}
            >
              <input
                type="text"
                placeholder="Buscar publicações..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`
                  w-full bg-transparent pl-4 pr-10 h-10
                  focus:outline-none text-sm
                  transition-opacity duration-200
                  ${searchOpen ? 'opacity-100' : 'opacity-0'}
                `}
              />
              <div 
                onClick={() => {
                  if (searchOpen && searchQuery) {
                    setSearchQuery("")
                  } else {
                    setSearchOpen(!searchOpen)
                  }
                }}
                className="absolute right-0 w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-200 rounded-full transition-colors"
              >
                {searchOpen && searchQuery ? (
                  <X className="w-4 h-4 text-gray-600" />
                ) : (
                  <Search className="w-4 h-4 text-gray-600" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-8">
        <div className="inline-flex flex-wrap gap-2">
          {publicationCategories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {selectedCategory && (
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-px bg-gray-200" />
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    selectedYear === year
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
            {selectedYear && (
              <div className="flex items-center gap-2">
                <div className="h-8 w-px bg-gray-200" />
                {semesters.map(semester => (
                  <button
                    key={semester}
                    onClick={() =>
                      setSelectedSemester(selectedSemester === semester ? null : semester)
                    }
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedSemester === semester
                        ? "bg-gray-900 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {semester}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="grid gap-3">
          {filteredPublications.map(pub => {
            const semLabel = pub.semester === "First" ? "Primeiro" : "Segundo"
            return (
              <div
                key={pub.id}
                className="group flex items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50/50 transition-all duration-200"
              >
                <div 
                  className="flex items-center gap-4 flex-1 cursor-pointer"
                  onClick={() => router.push(`?slug=${encodeURIComponent(pub.slug)}`)}
                >
                  <div className="p-2 rounded-full bg-gray-100">
                    <FileText className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {pub.year} • {semLabel} Semestre
                    </p>
                  </div>
                </div>
                {pub.downloadUrl ? (
                  <a
                    href={pub.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100/80 transition-colors duration-200"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      console.log(`Downloading publication: ${pub.slug}`)
                    }}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100/80 transition-colors duration-200"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                )}
              </div>
            )
          })}
          {filteredPublications.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Nenhuma publicação encontrada para os filtros selecionados
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function PublicacoesPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <PublicacoesInner />
    </Suspense>
  )
}
