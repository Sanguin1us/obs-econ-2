"use client"

import { useState } from 'react'
import Image from 'next/image'
import { subdepartments, leadership, Subdepartment } from '@/lib/teamData'

export default function Sobre() {
  const [selectedSubdepartment, setSelectedSubdepartment] = useState<Subdepartment | null>(null)

  return (
    <div className="min-h-screen">
      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
            <p className="text-xl leading-relaxed">
              O Observatório Econômico é um órgão estratégico da Prefeitura do Rio de Janeiro,
              dedicado ao monitoramento e análise do desenvolvimento econômico da cidade.
            </p>
            <p className="text-xl leading-relaxed">
              Nossa missão é fornecer dados econômicos confiáveis e análises aprofundadas
              para apoiar a formulação de políticas públicas eficazes.
            </p>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-gray-900">
            Metas Estratégicas 2025-2028
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Redução do Desemprego",
                target: "45%",
                description: "Reduzir a taxa de desemprego anual do Rio de 14,7% para 8%"
              },
              {
                title: "Ambiente de Negócios",
                target: "#1",
                description: "Tornar o Rio a melhor cidade da América Latina para negócios"
              },
              {
                title: "Crescimento do PIB",
                target: "3%",
                description: "Alcançar crescimento médio anual de 3% do PIB municipal"
              },
              {
                title: "Novas Startups",
                target: "400",
                description: "Fomentar a criação de 400 novas startups na cidade"
              }
            ].map((goal) => (
              <div key={goal.title} className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-4">{goal.target}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-gray-900">Liderança</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {leadership.map((leader) => (
              <div key={leader.name} className="flex gap-6">
                <Image
                  src={leader.photoUrl}
                  alt={leader.name}
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{leader.name}</h3>
                  <p className="text-blue-600 mb-3">{leader.title}</p>
                  <p className="text-gray-600 text-sm">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subdepartments Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-gray-900">Subsecretarias</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {subdepartments.map((subdepartment) => (
              <button
                key={subdepartment.name}
                onClick={() => setSelectedSubdepartment(subdepartment)}
                className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all text-left"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{subdepartment.name}</h3>
                <p className="text-gray-600">{subdepartment.members.length} membros</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedSubdepartment && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900">{selectedSubdepartment.name}</h3>
              <p className="text-blue-600">{selectedSubdepartment.fullName}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {selectedSubdepartment.members.map((member) => (
                <div key={member.name} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <Image
                    src={member.photoUrl}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-gray-600 text-sm">{member.certification}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSelectedSubdepartment(null)}
              className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
