import Link from 'next/link'
import { MdEmail, MdLocationOn } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-lg">Em caso de dúvidas, sugestões ou reclamações entre em contato conosco.</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-center space-x-2 p-3 hover:bg-blue-800/30 rounded-lg transition-colors">
            <MdEmail className="text-xl flex-shrink-0" />
            <a href="mailto:observatorioeconomico@rio.rj.gov.br" className="hover:text-blue-200 transition-colors">
              observatorioeconomico@rio.rj.gov.br
            </a>
          </div>
          <div className="flex items-start justify-center space-x-2 p-3 hover:bg-blue-800/30 rounded-lg transition-colors">
            <MdLocationOn className="text-xl flex-shrink-0 mt-1" />
            <div className="text-center">
              <p className="font-medium mb-2">Centro Administrativo São Sebastião</p>
              <div className="text-gray-200">
                <p>R. Afonso Cavalcanti, 455, 11° andar</p>
                <p>Cidade Nova, Rio de Janeiro - RJ</p>
                <p>20211-110</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-8 pt-8 border-t border-blue-800">
          © 2024 Observatório Econômico. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

