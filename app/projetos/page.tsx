"use client"
import { projects } from "@/lib/projectsData"
import ImageTrack from "@/components/ImageTrack"
import { useEffect } from "react"

export default function Projetos() {
  // Set page title for better SEO
  useEffect(() => {
    document.title = "Projetos | Observatório Econômico"
  }, [])

  return (
    <>
      <ImageTrack projects={projects} />
    </>
  )
}