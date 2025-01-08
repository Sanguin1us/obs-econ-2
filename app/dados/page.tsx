"use client"
import { useState } from 'react'
import { FileText, Download, Eye } from 'lucide-react'
import { useRouter } from 'next/navigation'

// The same structure for dataset categories and their sub-items
const datasets = {
  ATIVIDADE: [
    "Índice de Atividade Econômica (IAE-Rio)",
    "Pesquisa Mensal de Serviços (PMS) - Volume",
    "Pesquisa Mensal de Serviços (PMS) - Turismo",
    "Pesquisa Mensal de Serviços (PMS) - Receita Nominal",
    "Pesquisa Mensal de Comércio (PMC) - Volume",
    "Pesquisa Mensal de Comércio (PMC) - Receita Nominal",
    "Pesquisa Industrial Mensal - Produção Física (PIM-PF)",
    "Índice de Atividade Econômica Regional (IBCR-RJ)"
  ],
  INFLAÇÃO: [
    "Índice Nacional de Preços ao Consumidor Amplo (IPCA)",
    "Índice Nacional de Preços ao Consumidor Amplo 15 (IPCA-15)",
    "Índice Nacional de Preços ao Consumidor (INPC)",
    "Núcleos de Inflação IPCA"
  ],
  "MERCADO DE TRABALHO": [
    "Dados de Mercado de Trabalho (Pnad Contínua/IBGE) - Município do Rio de Janeiro",
    "Taxa de Desemprego Retropolada do Rio (2002-2011)",
    "Cadastro Geral de Empregados e Desempregados (CAGED) - Estado do Rio de Janeiro",
    "Cadastro Geral de Empregados e Desempregados (CAGED) - Município do Rio de Janeiro"
  ],
  "CONTAS REGIONAIS": [
    "Contas Regionais - Município do Rio de Janeiro",
    "Contas Regionais - Estado do Rio de Janeiro"
  ]
}

type DatasetCategory = keyof typeof datasets

import { datasetData } from '@/lib/datasetData'

export default function DadosPage() {
  const [activeCategory, setActiveCategory] = useState<DatasetCategory | null>(null)
  const router = useRouter()

  // Function to trigger CSV download
  const handleDownload = (dataset: string) => {
    // Retrieve the data array from the same place used in [dataset]/page.tsx
    const data = datasetData[dataset] || []

    // Build CSV content
    // Example schema: month, value
    const headers = ["month,value"]
    const rows = data.map((item) => `${item.month},${item.value}`)
    const csvContent = [headers.join(","), ...rows].join("\n")

    // Create a Blob from the CSV string
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)

    // Create a temporary link to trigger the download
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", `${dataset}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Release object URL
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Dados Econômicos</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {Object.keys(datasets).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(activeCategory === category ? null : category as DatasetCategory)}
            className={`
              p-4 rounded-lg text-center transition-colors 
              ${activeCategory === category
                ? 'bg-blue-900 text-white'
                : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
      {activeCategory && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">{activeCategory}</h2>
          {datasets[activeCategory].map((dataset, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <FileText className="text-blue-900" />
                <span>{dataset}</span>
              </div>
              <div className="flex items-center space-x-2">
                {/* Visualizar Button */}
                <button 
                  onClick={() => {
                    router.push(`/dados/${encodeURIComponent(dataset)}`)
                  }}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                >
                  <Eye size={16} />
                  <span>Visualizar</span>
                </button>
                {/* Download Button */}
                <button
                  onClick={() => handleDownload(dataset)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                >
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
