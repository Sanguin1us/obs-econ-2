"use client"
import Image from "next/image"
import { projects } from "@/lib/projectsData"
import ImageTrack from "@/components/ImageTrack"

export default function Projetos() {
  return (
    <>
      {/* Keep the same top hero with ImageTrack, if desired */}
      <ImageTrack />
      
      <div className="container mx-auto px-4 py-20">
        {/* Only "Nossos Projetos" section remains */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Nossos Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
