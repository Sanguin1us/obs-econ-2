"use client"

import { useState } from 'react'
import Image from 'next/image'
import { subdepartments, leadership, Subdepartment } from '@/lib/teamData'

export default function Equipe() {
  const [selectedSubdepartment, setSelectedSubdepartment] = useState<Subdepartment | null>(null)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Equipe</h1>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((leader) => (
            <div key={leader.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={leader.photoUrl}
                    alt={leader.name}
                    width={80}
                    height={80}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{leader.name}</h3>
                    <p className="text-gray-600">{leader.title}</p>
                  </div>
                </div>
                <p className="text-gray-700">{leader.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Subsecretarias</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {subdepartments.map((subdepartment) => (
            <button
              key={subdepartment.name}
              onClick={() => setSelectedSubdepartment(subdepartment)}
              className="p-6 bg-blue-100 rounded-lg text-center hover:bg-blue-200 transition-colors"
            >
              <h3 className="text-xl font-semibold">{subdepartment.name}</h3>
              <p className="text-gray-600">{subdepartment.members.length} membros</p>
            </button>
          ))}
        </div>
      </section>

      {selectedSubdepartment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-2">{selectedSubdepartment.name}</h3>
            <p className="text-gray-600 mb-6">{selectedSubdepartment.fullName}</p>
            <div className="grid md:grid-cols-2 gap-8">
              {selectedSubdepartment.members.map((member) => (
                <div key={member.name} className="flex items-center space-x-4">
                  <div className="w-20 h-20 relative rounded-full overflow-hidden">
                    <Image
                      src={member.photoUrl}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-gray-600">{member.certification}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSelectedSubdepartment(null)}
              className="mt-8 px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
