import Link from 'next/link'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { FaLinkedin, FaInstagram, FaXTwitter, FaFacebook } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-12">
      <div className="container mx-auto px-6 md:px-8"> {/* Adjusted padding */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-2">Entre em Contato</h2>
          <p className="text-gray-200">Em caso de dúvidas, sugestões ou reclamações entre em contato conosco.</p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Email Section */}
          <div className="flex items-center space-x-3 p-4 hover:bg-blue-800/30 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
            <MdEmail className="text-2xl flex-shrink-0 text-blue-200" />
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=observatorioeconomico@rio.rj.gov.br"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-blue-200 transition-colors font-medium text-left"> {/* Added text-left */}
              observatorioeconomico@rio.rj.gov.br
            </a>
          </div>

          {/* Address Section */}
          <div className="flex items-center space-x-3 p-4 hover:bg-blue-800/30 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"> {/* Changed to items-center, removed mt-1 from icon */}
            <MdLocationOn className="text-2xl flex-shrink-0 text-blue-200" />
            <a href="https://maps.app.goo.gl/sFHrJ4RwtztXPQdq5"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-blue-200 transition-colors text-left"> {/* Removed text-center, added text-left */}
              <p className="font-semibold mb-1">Centro Administrativo São Sebastião</p> {/* Reduced mb */}
              <div className="text-gray-200 space-y-0.5"> {/* Reduced space-y */}
                <p>R. Afonso Cavalcanti, 455, 11° andar</p>
                <p>Cidade Nova, Rio de Janeiro - RJ</p>
                <p>20211-110</p>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-8 mb-6">
          <a href="https://www.linkedin.com/company/smdue-rio/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-gray-300 hover:text-white transition-colors transform hover:scale-110 duration-300"
             aria-label="LinkedIn">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/desenvolvimento_rio/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-gray-300 hover:text-white transition-colors transform hover:scale-110 duration-300"
             aria-label="Instagram">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://www.facebook.com/desenvolvimento.rio" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-gray-300 hover:text-white transition-colors transform hover:scale-110 duration-300"
             aria-label="Facebook">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://x.com/smdue_rio" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-gray-300 hover:text-white transition-colors transform hover:scale-110 duration-300"
             aria-label="X (Twitter)">
            <FaXTwitter className="text-2xl" />
          </a>
        </div>

        <div className="text-center text-sm mt-8 pt-8 border-t border-blue-800/50">
          <p className="text-gray-300">© 2024 Observatório Econômico. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

