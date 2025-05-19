"use client"
import Image from "next/image"
import Link from "next/link"
import { Newspaper, FileCog, Library } from "lucide-react"
import HorizontalStats from "@/components/HorizontalStats"

// 1. ADD THESE IMPORTS:
import { useState } from "react"
import { TextLoop } from "@/components/core/text-loop"

const publicationTypes = [
  {
    icon: Newspaper,
    title: "Boletim Econômico",
    category: "BOLETIM ECONÔMICO",
    description: "Publicação periódica com a análise da conjuntura macroeconômica do Rio de Janeiro."
  },
  {
    icon: FileCog,
    title: "Notas Técnicas",
    category: "NOTAS TÉCNICAS",
    description: "Documentos elaborados pela equipe técnica da SMDEIS com o objetivo de embasar a tomada de decisão dos gestores."
  },
  {
    icon: Library,
    title: "Estudos Especiais",
    category: "ESTUDOS ESPECIAIS",
    description: "Análises acerca de temas que impactam no desenvolvimento econômico da cidade, ajudando na criação de políticas públicas."
  }
]

export default function Home() {
  // 2. SETUP STATE FOR HANDLING ACTIVE LINK:
  const [currentIndex, setCurrentIndex] = useState(0)

  // 3. TEXT/ROUTE OPTIONS FOR THE LOOP:
  const exploreOptions = [
    { label: "Publicações", href: "/publicacoes" },
    { label: "Dados", href: "/dados" },
    { label: "Projetos", href: "/projetos" },
  ]

  return (
    <>
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/rio-hero.webp"
          alt="Vista aérea do Rio de Janeiro"
          fill
          priority
          quality={85}
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          className="z-0 brightness-90"
        />
        <div className="absolute inset-0 bg-blue-900/50 backdrop-brightness-75 z-10"></div>
        <div className="relative z-20 text-center text-white px-6 md:px-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Observatório Econômico</h1>
          <p className="text-xl md:text-2xl mb-10">A economia do Rio em números</p>

          {/* 4. BUTTON WITH TEXT-LOOP */}
          <Link
            href={exploreOptions[currentIndex].href}
            className="mt-10 inline-block bg-white text-blue-900 px-8 py-4 rounded-md font-semibold hover:bg-blue-100 transition-colors min-w-[240px]"
          >
            Explorar{" "}
            <TextLoop
              // optional fancy transition
              transition={{
                type: 'spring',
                stiffness: 900,
                damping: 80,
                mass: 10,
              }}
              variants={{
                initial: { y: 20, rotateX: 90, opacity: 0, filter: 'blur(4px)' },
                animate: { y: 0, rotateX: 0, opacity: 1, filter: 'blur(0px)' },
                exit: { y: -20, rotateX: -90, opacity: 0, filter: 'blur(4px)' },
              }}
              interval={2}
              onIndexChange={setCurrentIndex} // update link whenever text changes
            >
              {exploreOptions.map((item) => (
                <span key={item.href}>{item.label}</span>
              ))}
            </TextLoop>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Nossas Publicações</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {publicationTypes.map((type, index) => (
            <Link
              key={type.title}
              href={`/publicacoes?categoria=${encodeURIComponent(type.category)}`}
              className="flex flex-col items-center text-center p-8 bg-blue-50 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <type.icon size={56} className="text-blue-900 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
              <p className="text-gray-600">{type.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-6 md:px-8 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Indicadores de Atividade Econômica</h2>
        <HorizontalStats />
      </section>
    </>
  )
}
