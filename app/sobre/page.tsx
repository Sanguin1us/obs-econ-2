"use client"
import { useState, useRef, useEffect } from "react"
import { subdepartments, leadership } from "@/lib/teamData"
import { strategicGoals } from "@/lib/strategicGoals"
import Image from "next/image"

export default function Sobre() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showLeadership, setShowLeadership] = useState(true)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [animateNumbers, setAnimateNumbers] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setAnimateNumbers(true)
    }, { threshold: 0.3 })
    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [])


  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <section className="container mx-auto px-4 py-16 flex flex-col gap-12 md:flex-row">
        <div className="flex-1 space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-blue-900">Nossa Missão</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            O Observatório Econômico é um órgão estratégico da Prefeitura do Rio,
            dedicado ao monitoramento e análise do desenvolvimento econômico da cidade.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Nossa missão é fornecer dados econômicos confiáveis e análises aprofundadas
            para apoiar a formulação de políticas públicas eficazes.
          </p>
        </div>
        <div className="flex-1 space-y-6 animate-fade-in-up" ref={containerRef}>
          <h2 className="text-3xl font-bold text-blue-900">Metas Estratégicas</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {strategicGoals.map((item, i) => {
              const displayValue = animateNumbers && i < 2 ? item.target : item.target
              return (
                <div key={i} className="bg-white rounded-lg p-6 shadow transition-transform duration-300 hover:scale-105">
                  <div className="text-4xl font-extrabold text-blue-700 mb-2">{displayValue}</div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Estrutura Administrativa</h2>
          <div className="flex justify-center mb-8">
            <button
              onClick={() => { setShowLeadership(true); setOpenIndex(null) }}
              className={`px-6 py-2 border-b-2 ${showLeadership ? "border-blue-900 text-blue-900" : "border-transparent text-gray-500 hover:text-blue-700 hover:border-blue-300"}`}
            >
              Liderança
            </button>
            <button
              onClick={() => { setShowLeadership(false); setOpenIndex(null) }}
              className={`px-6 py-2 border-b-2 ${!showLeadership ? "border-blue-900 text-blue-900" : "border-transparent text-gray-500 hover:text-blue-700 hover:border-blue-300"}`}
            >
              Subsecretarias
            </button>
          </div>
          {showLeadership && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 shadow-md p-6 flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6"
                >
                  <div className="w-32 h-32 flex-shrink-0">
                    <Image
                      src={leader.photoUrl}
                      alt={leader.name}
                      width={128}
                      height={128}
                      className="rounded-full border-2 border-blue-900 object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800">{leader.name}</h3>
                    <p className="text-blue-600 text-sm">{leader.title}</p>
                    <p className="text-gray-600 text-sm mt-2">{leader.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!showLeadership && (
            <div className="space-y-8">
              {subdepartments.map((subdept, idx) => (
                <div key={idx} className="flex">
                  <div className="relative mr-4">
                    <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-px h-full bg-blue-300"></div>
                  </div>
                  <div className="flex-1">
                  <button
                      type="button"
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition-colors"
                      aria-expanded={openIndex === idx}
                    >
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">{subdept.name}</h4>
                        <p className="text-xs text-gray-500">{subdept.fullName}</p>
                      </div>
                      <div className="text-blue-600 text-xs flex items-center">
                        <span>{subdept.members.length} membros</span>
                        <svg className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${openIndex === idx ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </button>
                    <div
                      className={`mt-4 border-l-2 border-blue-300 pl-6 space-y-4 overflow-hidden ease-in-out duration-300 transition-[max-height] transition-opacity ${openIndex === idx ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      {subdept.members.map((member, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200 overflow-hidden">
                            <Image src={member.photoUrl} alt={member.name} width={40} height={40} className="object-cover" />
                          </div>
                          <div className="ml-3">
                            <h5 className="text-sm font-semibold text-gray-800">{member.name}</h5>
                            <p className="text-xs text-gray-500">{member.certification}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
