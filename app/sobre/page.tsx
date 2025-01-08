"use client"
import Image from "next/image"
import { projects } from "@/lib/projectsData"
import ImageTrack from "@/components/ImageTrack"
export default function Sobre() {
  return (
    <>
      <ImageTrack />
      <div className="container mx-auto px-4 py-20">
        <div className="relative mb-24 p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="absolute top-0 left-0 w-20 h-20 bg-blue-100 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-50 translate-x-1/4 translate-y-1/4" />
          <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Sobre o Observatório Econômico</h1>
          <div className="space-y-8 max-w-4xl mx-auto relative z-10">
            <p className="text-lg leading-relaxed text-gray-700">O Observatório Econômico é uma instituição líder dedicada a fornecer insights econômicos abrangentes e dados para formuladores de políticas, pesquisadores e o público em geral.</p>
            <p className="text-lg leading-relaxed text-gray-700">Nossa equipe de economistas e cientistas de dados especializados trabalha incansavelmente para analisar tendências econômicas, compilar relatórios e oferecer insights valiosos sobre a economia global em constante mudança.</p>
            <p className="text-lg leading-relaxed text-gray-700">Por meio de nossas publicações e visualizações de dados, buscamos tornar informações econômicas complexas acessíveis e compreensíveis para um amplo público, promovendo a tomada de decisões informadas e o discurso público.</p>
          </div>
        </div>
        <section className="mb-24">
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
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Nossos Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
                <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}