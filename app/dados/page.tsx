"use client"

import { useState } from 'react'
import { FileText, Download } from 'lucide-react'

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

// Define a type that represents the keys of the datasets object
type DatasetCategory = keyof typeof datasets

export default function DadosPage() {
  // Update the state to use the DatasetCategory type
  const [activeCategory, setActiveCategory] = useState<DatasetCategory | null>(null)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Dados Econômicos</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {Object.keys(datasets).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(activeCategory === category ? null : category as DatasetCategory)}
            className={`p-4 rounded-lg text-center transition-colors ${
              activeCategory === category
                ? 'bg-blue-900 text-white'
                : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
            }`}
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
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
                <Download size={16} />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
