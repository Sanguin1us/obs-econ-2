"use client"
import { projects } from "@/lib/projectsData"
import ImageTrack from "@/components/ImageTrack"

export default function Projetos() {
  return (
    <>
      {/* The old "Nossos Projetos" section has been removed. 
          We now only render ImageTrack with the projects. */}
      <ImageTrack projects={projects} />
    </>
  )
}
