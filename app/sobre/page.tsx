"use client"
import { useState, useRef, useEffect } from "react"
import { subdepartments, leadership } from "@/lib/teamData"
import { strategicGoals } from "@/lib/strategicGoals"
import Image from "next/image"
import { ChevronDown, Building, Users } from "lucide-react" // Added Building and Users icons

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
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Estrutura Administrativa</h2>
          <div className="flex justify-center mb-10">
            <button
              onClick={() => { setShowLeadership(true); setOpenIndex(null) }}
              className={`px-8 py-3 text-sm font-medium rounded-l-lg transition-all duration-300
                ${showLeadership 
                  ? "bg-blue-800 text-white shadow-md ring-2 ring-blue-500" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              Liderança
            </button>
            <button
              onClick={() => { setShowLeadership(false); setOpenIndex(null) }}
              className={`px-8 py-3 text-sm font-medium rounded-r-lg transition-all duration-300
                ${!showLeadership 
                  ? "bg-blue-800 text-white shadow-md ring-2 ring-blue-500" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              Subsecretarias
            </button>
          </div>

          {showLeadership && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              {leadership.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-36 h-36 flex-shrink-0">
                    <Image
                      src={leader.photoUrl}
                      alt={leader.name}
                      width={144}
                      height={144}
                      className="rounded-full border-4 border-blue-700 object-cover w-full h-full shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{leader.name}</h3>
                    <p className="text-blue-700 font-semibold text-md mb-3">{leader.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{leader.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!showLeadership && (
            <div className="space-y-6 animate-fade-in">
              {subdepartments.map((subdept, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className={`w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors duration-300 ${openIndex === idx ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                    aria-expanded={openIndex === idx}
                  >
                    <div className="flex items-center">
                      <div className={`p-3 rounded-full mr-4 ${openIndex === idx ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'}`}> 
                        <Building size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-blue-800">{subdept.name}</h4>
                        <p className="text-sm text-gray-600">{subdept.fullName}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users size={16} className="mr-2 text-gray-500" />
                      <span className="text-gray-700 font-medium">{subdept.members.length} membros</span>
                      <ChevronDown className={`w-6 h-6 ml-3 text-blue-600 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : "rotate-0"}`} />
                    </div>
                  </button>
                  
                  <div
                    style={{ maxHeight: openIndex === idx ? '1000px' : '0px' }} // Inline style for dynamic max-height
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === idx ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <div className="p-6 border-t border-gray-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subdept.members.map((member, i) => (
                          <div key={i} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-200 overflow-hidden">
                              <Image src={member.photoUrl} alt={member.name} width={48} height={48} className="object-cover w-full h-full" />
                            </div>
                            <div className="ml-4">
                              <h5 className="text-md font-semibold text-gray-800">{member.name}</h5>
                              <p className="text-xs text-blue-600">{member.certification}</p>
                            </div>
                          </div>
                        ))}
                      </div>
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

