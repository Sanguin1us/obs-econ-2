"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import PreloadLink from "./PreloadLink"

const navItems = [
  { name: "Início", href: "/" },
  { name: "Publicações", href: "/publicacoes" },
  { name: "Dados", href: "/dados" },
  { name: "Projetos", href: "/projetos" },
  { name: "Sobre", href: "/sobre" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12 flex items-center justify-between">
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <PreloadLink href="/">
            <Image
              src="/OBSERVATORIO-logo.webp"
              alt="Observatório Econômico"
              width={550}
              height={100}
              className="object-contain"
              priority
            />
          </PreloadLink>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 flex-grow justify-center">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <PreloadLink
                href={item.href}
                className="hover:text-blue-200 transition-colors"
              >
                {item.name}
              </PreloadLink>
            </div>
          ))}
        </nav>

        {/* Right Logo (Desktop only) */}
        <div className="hidden md:block flex-shrink-0">
          <Image
            src="/SMDUE-logo.webp"
            alt="SMDUE"
            width={550}
            height={100}
            className="object-contain"
            priority
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 border-t border-blue-800">
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

            {/* Right Logo (Mobile) */}
            <div className="pt-4 border-t border-blue-800 flex justify-center">
              <Image
                src="/SMDUE-logo.webp"
                alt="SMDUE"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
