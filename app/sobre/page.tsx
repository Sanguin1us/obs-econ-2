"use client"

import { useState } from 'react'
import Image from 'next/image'
import { subdepartments, leadership, Subdepartment } from '@/lib/teamData'

export default function Sobre() {
  const [selectedSubdepartment, setSelectedSubdepartment] = useState<Subdepartment | null>(null)

  return (
    <div className="container mx-auto px-4 py-16">
      {/* --------------------------------------------- */}
      {/* Moved from the old "Sobre" page (the sections) */}
      {/* --------------------------------------------- */}
      <div className="relative mb-24 p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute top-0 left-0 w-20 h-20 bg-blue-100 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-50 translate-x-1/4 translate-y-1/4" />
        <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Sobre o Observatório Econômico
        </h1>
        <div className="space-y-8 max-w-4xl mx-auto relative z-10">
          <p className="text-lg leading-relaxed text-gray-700">
            O Observatório Econômico é uma instituição líder dedicada a fornecer insights econômicos
            abrangentes e dados para formuladores de políticas, pesquisadores e o público em geral.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Nossa equipe de economistas e cientistas de dados especializados trabalha incansavelmente para analisar
            tendências econômicas, compilar relatórios e oferecer insights valiosos sobre a economia global em
            constante mudança.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Por meio de nossas publicações e visualizações de dados, buscamos tornar informações econômicas complexas
            acessíveis e compreensíveis para um amplo público, promovendo a tomada de decisões informadas
            e o discurso público.
          </p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Nossas Metas</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-blue-50 p-8 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-100">
            <h3 className="text-xl font-semibold mb-4">Reduzir o Desemprego</h3>
            <p>Reduzir a taxa de desemprego anual do Rio de 14,7% para 8%</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-100">
            <h3 className="text-xl font-semibold mb-4">Melhorar o Ambiente de Negócios</h3>
            <p>Tornar o Rio a melhor cidade da América Latina para abrir negócios e licenciar obras de construção</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-100">
            <h3 className="text-xl font-semibold mb-4">Crescimento Econômico</h3>
            <p>Fortalecer a economia visando um crescimento médio anual de 3% do Produto Interno Bruto (PIB)</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-100">
            <h3 className="text-xl font-semibold mb-4">Fomentar a Inovação</h3>
            <p>Atrair e fomentar a criação de 400 novas startups</p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------- */}
      {/* The old "Equipe" code follows below           */}
      {/* --------------------------------------------- */}
      <h1 className="text-4xl font-bold mb-8 text-center">Equipe</h1>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((leader) => (
            <div key={leader.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={leader.photoUrl}
                    alt={leader.name}
                    width={80}
                    height={80}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{leader.name}</h3>
                    <p className="text-gray-600">{leader.title}</p>
                  </div>
                </div>
                <p className="text-gray-700">{leader.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Subsecretarias</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {subdepartments.map((subdepartment) => (
            <button
              key={subdepartment.name}
              onClick={() => setSelectedSubdepartment(subdepartment)}
              className="p-6 bg-blue-100 rounded-lg text-center hover:bg-blue-200 transition-colors"
            >
              <h3 className="text-xl font-semibold">{subdepartment.name}</h3>
              <p className="text-gray-600">{subdepartment.members.length} membros</p>
            </button>
          ))}
        </div>
      </section>

      {selectedSubdepartment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-2">{selectedSubdepartment.name}</h3>
            <p className="text-gray-600 mb-6">{selectedSubdepartment.fullName}</p>
            <div className="grid md:grid-cols-2 gap-8">
              {selectedSubdepartment.members.map((member) => (
                <div key={member.name} className="flex items-center space-x-4">
                  <div className="w-20 h-20 relative rounded-full overflow-hidden">
                    <Image
                      src={member.photoUrl}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-gray-600">{member.certification}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSelectedSubdepartment(null)}
              className="mt-8 px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
