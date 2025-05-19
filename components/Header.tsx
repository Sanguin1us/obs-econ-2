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
    <header className="bg-blue-900 text-white w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center w-full py-4 px-6 relative">
        {/* Left Logo */}
        <div className="flex items-center">
          <PreloadLink href="/">
            <Image
              src="/OBSERVATORIO-logo.webp"
              alt="Observatório Econômico"
              width={250} // Adjusted for new header height, maintain aspect ratio
              height={40}  // Adjusted based on py-4 (around 16px padding + 40px logo height + 16px padding = 72px total header height)
              quality={100}
              className="object-contain h-10 w-auto" // h-10 is 40px
              priority
            />
          </PreloadLink>
        </div>

        {/* Centered nav on desktop (absolute positioned) */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <nav className="flex items-center justify-center space-x-6"> {/* Increased space-x for nav items */}
            {navItems.map((item) => (
              <div key={item.name}>
                <PreloadLink
                  href={item.href}
                  className="hover:text-blue-200 transition-colors text-lg font-medium px-2 py-1" /* Adjusted text size and padding */
                >
                  {item.name}
                </PreloadLink>
              </div>
            ))}
          </nav>
        </div>

        {/* Right Logo */}
        <div className="hidden md:flex items-center">
          <Image
            src="/SMDUE-logo.webp"
            alt="SMDUE"
            width={240} // Adjusted for new header height, maintain aspect ratio (300/40 * 32 = 240)
            height={32}  // Adjusted h-8 w-auto
            quality={100}
            className="object-contain h-8 w-auto" // h-8 is 32px
            priority
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-20 p-2 hover:text-blue-200 transition-colors" /* Removed ml-auto, flex layout handles it */
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
                  className="block py-2 hover:text-blue-200 transition-colors text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </PreloadLink>
              </div>
            ))}

            {/* Right Logo shown at the bottom on mobile (optional) */}
            <div className="pt-4 mt-2 border-t border-blue-800 flex justify-center"> {/* Added mt-2 for spacing */}
              <Image
                src="/SMDUE-logo.webp"
                alt="SMDUE"
                width={120} // Slightly increased size for mobile menu
                height={24}
                className="object-contain h-6 w-auto" // h-6 is 24px
                priority
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
