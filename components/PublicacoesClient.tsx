"use client"
import { useState, useEffect } from "react"
import { FileText, Download, Calendar, User, Search, X } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"
import { Publication, publicationCategories } from "@/lib/publicationsData"
import { publicationYears } from "@/lib/publicationYears"

type Props = {
  publications: Publication[]
}

export default function PublicacoesClient({ publications }: Props) {
  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
  }

  const categories = publicationCategories
  const searchParams = useSearchParams()
  const router = useRouter()
  const slug = searchParams.get("slug")
  const categoria = searchParams.get("categoria")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (categoria && categories.includes(categoria)) {
      setSelectedCategory(categoria)
    } else {
      setSelectedCategory(null)
    }
  }, [categoria, categories])

  useEffect(() => {
    if (slug) {
      setSelectedCategory(null)
      setSelectedYear(null)
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
            <span>{pub.year}</span>
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
    if (!searchQuery) {
      return (
        (!selectedCategory || p.category === selectedCategory) &&
        (!selectedYear || p.year === selectedYear)
      )
    }
    const norm = normalizeText(searchQuery)
    const matchesSearch = [p.title, p.category, p.autor || "", p.resumo || ""].some(field =>
      normalizeText(field).includes(norm)
    )
    return (
      matchesSearch &&
      (!selectedCategory || p.category === selectedCategory) &&
      (!selectedYear || p.year === selectedYear)
    )
  })

  const handleCategoryClick = (c: string) => {
    if (selectedCategory === c) {
      setSelectedCategory(null)
      setSelectedYear(null)
      router.push("/publicacoes")
    } else {
      setSelectedCategory(c)
      setSelectedYear(null)
      router.push(`/publicacoes?categoria=${encodeURIComponent(c)}`)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="border-b pb-8 mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-gray-900">Publicações</h1>
          <div className="relative">
            <label htmlFor="publication-search" className="sr-only">
              Buscar publicações
            </label>
            <div
              className={`flex items-center bg-gray-100 rounded-full transition-all duration-200 ease-in-out ${searchOpen ? 'w-[280px]' : 'w-10'}`}
            >
              <input
                id="publication-search"
                type="text"
                placeholder="Buscar publicações..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full bg-transparent pl-4 pr-10 h-10 focus:ring-2 focus:ring-blue-500 text-sm transition-opacity duration-200 ${searchOpen ? 'opacity-100' : 'opacity-0'}`}
              />
              <button
                type="button"
                onClick={() => {
                  if (searchOpen && searchQuery) {
                    setSearchQuery("")
                  } else {
                    setSearchOpen(!searchOpen)
                  }
                }}
                className="absolute right-0 w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors"
                aria-label={searchOpen && searchQuery ? "Limpar busca" : searchOpen ? "Fechar busca" : "Abrir busca"}
              >
                {searchOpen && searchQuery ? <X className="w-4 h-4 text-gray-600" /> : <Search className="w-4 h-4 text-gray-600" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-8">
        <div className="inline-flex flex-wrap gap-2">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => handleCategoryClick(c)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${selectedCategory === c ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {c}
            </button>
          ))}
        </div>
        {selectedCategory && (
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-px bg-gray-200" />
              {publicationYears.map(yr => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(selectedYear === yr ? null : yr)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedYear === yr ? 'bg-blue-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="grid gap-3">
          {filteredPublications.map(pub => (
            <div
              key={pub.id}
              className="group flex items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50/50 transition-all duration-200"
            >
              <button
                type="button"
                className="flex items-center gap-4 flex-1 text-left"
                onClick={() => router.push(`?slug=${encodeURIComponent(pub.slug)}`)}
              >
                <div className="p-2 rounded-full bg-gray-100">
                  <FileText className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-gray-500">{pub.year}</p>
                </div>
              </button>
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
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100/80 transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              )}
            </div>
          ))}
          {filteredPublications.length === 0 && (
            <div className="text-center py-12 text-gray-500">Nenhuma publicação encontrada para os filtros selecionados</div>
          )}
        </div>
      </div>
    </div>
  )
}
