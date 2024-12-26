import Image from 'next/image'
import { projects } from '@/lib/projectsData'

export default function Sobre() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Sobre o Observatório Econômico</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <p className="text-lg">
            O Observatório Econômico é uma instituição líder dedicada a fornecer insights econômicos abrangentes e dados para formuladores de políticas, pesquisadores e o público em geral.
          </p>
          <p className="text-lg">
            Nossa equipe de economistas e cientistas de dados especializados trabalha incansavelmente para analisar tendências econômicas, compilar relatórios e oferecer insights valiosos sobre a economia global em constante mudança.
          </p>
          <p className="text-lg">
            Por meio de nossas publicações e visualizações de dados, buscamos tornar informações econômicas complexas acessíveis e compreensíveis para um amplo público, promovendo a tomada de decisões informadas e o discurso público.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/placeholder.svg"
            alt="Equipe do Observatório Econômico"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossas Metas</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Reduzir o Desemprego</h3>
            <p>Reduzir a taxa de desemprego anual do Rio de 14,7% para 8%</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Melhorar o Ambiente de Negócios</h3>
            <p>Tornar o Rio a melhor cidade da América Latina para abrir negócios e licenciar obras de construção</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Crescimento Econômico</h3>
            <p>Fortalecer a economia visando um crescimento médio anual de 3% do Produto Interno Bruto (PIB)</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Fomentar a Inovação</h3>
            <p>Atrair e fomentar a criação de 400 novas startups</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossos Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
