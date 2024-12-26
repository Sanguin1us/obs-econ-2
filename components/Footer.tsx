import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="bg-blue-900 text-white py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p>Em caso de dúvidas, sugestões ou reclamações entre em contato conosco.</p>
        </div>
        <div className="text-center mb-4">
          <p>observatorioeconomico@rio.rj.gov.br</p>
          <p>Centro Administrativo São Sebastião</p>
          <p>R. Afonso Cavalcanti, 455, 11° andar</p>
          <p>Cidade Nova, Rio de Janeiro - RJ, 20211-110</p>
        </div>
        <div className="text-center text-sm">
          © 2024 Observatório Econômico. Todos os direitos reservados.
        </div>
      </div>
    </motion.footer>
  )
}