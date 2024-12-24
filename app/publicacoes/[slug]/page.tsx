import { notFound } from 'next/navigation'
import { FileText, Calendar, User } from 'lucide-react'

interface Publication {
  id: number
  titulo: string
  ano: number
  semestre: string
  slug: string
  autor: string
  resumo: string
  conteudo: string
}

const publicacoes: Publication[] = [
  {
    id: 1,
    titulo: 'Perspectiva Econômica 2023',
    ano: 2023,
    semestre: 'Primeiro Semestre',
    slug: 'perspectiva-economica-2023',
    autor: 'Dra. Ana Silva',
    resumo: 'Análise detalhada do cenário econômico atual.',
    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]

interface PageProps {
  params: {
    slug: string
  }
}

export default function Page({ params }: PageProps) {
  const publicacao = publicacoes.find(pub => pub.slug === params.slug)
  if (!publicacao) notFound()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{publicacao.titulo}</h1>
      <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
        <div className="flex items-center">
          <Calendar className="mr-2" size={20} />
          <span>{publicacao.ano} - {publicacao.semestre}</span>
        </div>
        <div className="flex items-center">
          <User className="mr-2" size={20} />
          <span>{publicacao.autor}</span>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resumo</h2>
        <p>{publicacao.resumo}</p>
      </div>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Relatório Completo</h2>
        <p>{publicacao.conteudo}</p>
      </div>
      <div className="mt-12">
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
        >
          <FileText className="mr-2" size={20} />
          Download do Relatório
        </a>
      </div>
    </div>
  )
}
