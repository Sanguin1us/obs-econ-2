'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import PreloadLink from './PreloadLink'

const navItems = [
  { name: 'Início', href: '/' },
  { name: 'Publicações', href: '/publicacoes' },
  { name: 'Dados', href: '/dados' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Equipe', href: '/equipe' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <PreloadLink href="/" className="text-2xl font-bold">
          Observatório Econômico
        </PreloadLink>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <PreloadLink href={item.href} className="hover:text-blue-200 transition-colors">
                {item.name}
              </PreloadLink>
            </div>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <PreloadLink
                  href={item.href}
                  className="block py-2 hover:text-blue-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </PreloadLink>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}