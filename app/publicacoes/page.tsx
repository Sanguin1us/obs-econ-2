"use client"

import { useState, useEffect } from 'react'
import { FileText, Download } from 'lucide-react'
import { publicationCategories, publications, Publication } from '@/lib/publicationsData'
import { useSearchParams } from 'next/navigation'

const years = [2023, 2022, 2021, 2020] as const
const semesters = ['Primeiro Semestre', 'Segundo Semestre'] as const

type Year = typeof years[number]
type Semester = typeof semesters[number]

export default function Publicacoes() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState<Year | null>(null)
  const [selectedSemester, setSelectedSemester] = useState<Semester | null>(null)

  const searchParams = useSearchParams()
  const categoryParam = searchParams?.get('categoria')

  useEffect(() => {
    if (categoryParam && publicationCategories.includes(categoryParam)) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  const filteredPublications = publications.filter(
    (pub: Publication) => 
      (!selectedCategory || pub.category === selectedCategory) &&
      (!selectedYear || pub.year === selectedYear) &&
      (!selectedSemester || pub.semester === (selectedSemester === 'Primeiro Semestre' ? 'First' : 'Second'))
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="border-b pb-8 mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Publicações</h1>
      </div>

      <div className="flex flex-col space-y-8">
        <div className="inline-flex flex-wrap gap-2">
          {publicationCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                if (selectedCategory === category) {
                  setSelectedCategory(null)
                  setSelectedYear(null)
                  setSelectedSemester(null)
                } else {
                  setSelectedCategory(category)
                }
              }}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    selectedYear === year
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {selectedYear && (
              <div className="flex items-center gap-2">
                <div className="h-8 w-px bg-gray-200" />
                {semesters.map((semester) => (
                  <button
                    key={semester}
                    onClick={() => setSelectedSemester(selectedSemester === semester ? null : semester)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedSemester === semester
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
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
          {filteredPublications.map((publication) => (
            <div
              key={publication.id}
              className="group flex items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-gray-100 group-hover:bg-white transition-colors">
                  <FileText className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{publication.title}</h3>
                  <p className="text-sm text-gray-500">
                    {publication.year} • {publication.semester === 'First' ? 'Primeiro' : 'Segundo'} Semestre
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          ))}

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