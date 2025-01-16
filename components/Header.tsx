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
    <header className="bg-blue-900 text-white w-full">
      <div className="flex justify-between items-center w-full py-4 px-4 relative">
        {/* Left Logo (relative positioned) */}
        <div className="flex-shrink-0 max-w-[600px] w-1/3">
          <PreloadLink href="/">
            <Image
              src="/OBSERVATORIO-logo.webp"
              alt="Observatório Econômico"
              width={300}
              height={40}
              className="object-contain w-full h-auto"
              priority
            />
          </PreloadLink>
        </div>

        {/* Centered nav on desktop (absolute positioned) */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <nav className="flex items-center justify-center space-x-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <PreloadLink
                  href={item.href}
                  className="hover:text-blue-200 transition-colors text-lg font-medium px-1 py-1"
                >
                  {item.name}
                </PreloadLink>
              </div>
            ))}
          </nav>
        </div>

        {/* Right Logo (relative positioned) */}
        <div className="hidden md:block flex-shrink-0 max-w-[350px] w-1/3">
          <Image
            src="/SMDUE-logo.webp"
            alt="SMDUE"
            width={300}
            height={40}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden ml-auto z-20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (slides down) */}
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

            {/* Right Logo shown at the bottom on mobile (optional) */}
            <div className="pt-4 border-t border-blue-800 flex justify-center">
              <Image
                src="/SMDUE-logo.webp"
                alt="SMDUE"
                width={100}
                height={30}
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
