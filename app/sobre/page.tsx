"use client"
import { useState, useRef, useEffect } from "react"
import { subdepartments, leadership } from "@/lib/teamData"

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

  const strategicGoals = [
    { title: "Redução do Desemprego", target: "45%", description: "Reduzir a taxa de desemprego anual do Rio de 14,7% para 8%" },
    { title: "Ambiente de Negócios", target: "#1", description: "Tornar o Rio a melhor cidade da América Latina para negócios" },
    { title: "Crescimento do PIB", target: "3%", description: "Alcançar crescimento médio anual de 3% do PIB municipal" },
    { title: "Novas Startups", target: "400", description: "Fomentar a criação de 400 novas startups na cidade" }
  ]

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
              const displayValue = animateNumbers && i < 2
                ? item.target.toString()
                : item.target
              return (
                <div key={i} className="bg-white rounded-lg p-6 shadow transition-transform duration-300 hover:scale-105">
                  <div className="text-4xl font-extrabold text-blue-700 mb-2">
                    {displayValue}
                  </div>
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
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={() => { setShowLeadership(true); setOpenIndex(null) }}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${showLeadership ? "bg-blue-900 text-white" : "bg-blue-50 text-blue-900 hover:bg-blue-100"}`}
            >
              Liderança
            </button>
            <button
              onClick={() => { setShowLeadership(false); setOpenIndex(null) }}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${!showLeadership ? "bg-blue-900 text-white" : "bg-blue-50 text-blue-900 hover:bg-blue-100"}`}
            >
              Subsecretarias
            </button>
          </div>
          {showLeadership && (
            <div className="relative overflow-hidden">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
                {leadership.map((leader, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg shadow relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="h-36 bg-gray-200 flex items-center justify-center text-gray-400">No Img</div>
                    <div className="p-4 space-y-1">
                      <h3 className="text-lg font-bold text-gray-800">{leader.name}</h3>
                      <p className="text-blue-600 text-sm">{leader.title}</p>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">{leader.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {!showLeadership && (
            <div className="relative overflow-hidden">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
                {subdepartments.map((subdept, idx) => (
                  <div key={idx} className="bg-blue-50 rounded-lg shadow transition-all duration-300 hover:shadow-lg">
                    <button
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between focus:outline-none"
                    >
                      <div>
                        <h4 className="text-base font-semibold text-gray-800">{subdept.name}</h4>
                        <p className="text-xs text-gray-500">{subdept.fullName}</p>
                      </div>
                      <span className="text-xs font-medium text-blue-600">{subdept.members.length} membros</span>
                    </button>
                    {openIndex === idx && (
                      <div className="px-4 py-3 bg-white">
                        {subdept.members.map((member, i) => (
                          <div key={i} className="flex items-center gap-3 bg-gray-50 rounded p-2 mb-2 last:mb-0 animate-fade-in transition-all">
                            <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-xs">No Img</div>
                            <div>
                              <h5 className="text-sm font-semibold text-gray-800">{member.name}</h5>
                              <p className="text-xs text-gray-600">{member.certification}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}