"use client"
import React, { useRef, useEffect, useState } from "react"
import Image from "next/image"
import styles from "./ImageTrack.module.css"
import { Project } from "@/lib/projectsData"

type ImageTrackProps = {
  projects: Project[]
}

export default function ImageTrack({ projects }: ImageTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [mouseDownAt, setMouseDownAt] = useState("0")
  const [prevPercentage, setPrevPercentage] = useState("0")
  const [percentage, setPercentage] = useState("0")

  // Restored placeholder images
  const images = [
    "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
    "https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80",
    "https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  ]

  useEffect(() => {
    const handleOnDown = (e: MouseEvent | TouchEvent) => {
      if ("touches" in e) {
        setMouseDownAt(e.touches[0].clientX.toString())
      } else {
        setMouseDownAt(e.clientX.toString())
      }
    }

    const handleOnUp = () => {
      setMouseDownAt("0")
      setPrevPercentage(percentage)
    }

    const handleOnMove = (e: MouseEvent | TouchEvent) => {
      if (mouseDownAt === "0") return

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
      const mouseDelta = parseFloat(mouseDownAt) - clientX
      const maxDelta = window.innerWidth

      const nextPercentageUnconstrained =
        parseFloat(prevPercentage) - (mouseDelta / maxDelta) * 100

      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100)
      setPercentage(nextPercentage.toString())

      if (trackRef.current) {
        trackRef.current.animate(
          { transform: `translate(${nextPercentage}%, -50%)` },
          { duration: 1200, fill: "forwards" }
        )

        const imageEls = trackRef.current.getElementsByClassName("image")
        for (const imageEl of imageEls) {
          ;(imageEl as HTMLElement).animate(
            { objectPosition: `${nextPercentage + 100}% center` },
            { duration: 1200, fill: "forwards" }
          )
        }
      }
    }

    window.addEventListener("mousedown", handleOnDown)
    window.addEventListener("touchstart", handleOnDown)
    window.addEventListener("mouseup", handleOnUp)
    window.addEventListener("touchend", handleOnUp)
    window.addEventListener("mousemove", handleOnMove)
    window.addEventListener("touchmove", handleOnMove)

    return () => {
      window.removeEventListener("mousedown", handleOnDown)
      window.removeEventListener("touchstart", handleOnDown)
      window.removeEventListener("mouseup", handleOnUp)
      window.removeEventListener("touchend", handleOnUp)
      window.removeEventListener("mousemove", handleOnMove)
      window.removeEventListener("touchmove", handleOnMove)
    }
  }, [mouseDownAt, prevPercentage, percentage])

  return (
    <div className="h-screen w-screen bg-white overflow-hidden">
      <div ref={trackRef} className={`${styles.imageTrack} left-1/2 top-1/2`}>
        {projects.map((project, index) => (
          <div key={project.id} className={styles.imageCard}>
            <Image
              // Show the restored placeholder images
              src={images[index % images.length]}
              alt={project.title}
              width={800}
              height={1120}
              className={`${styles.image} image`}
              draggable="false"
            />
            <div className={styles.overlay}>
              <h3 className="font-bold text-xl">{project.title}</h3>
              <p className="mt-2 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
