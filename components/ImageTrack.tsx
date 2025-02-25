"use client"
import React, { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import styles from "./ImageTrack.module.css"
import { Project } from "@/lib/projectsData"

type ImageTrackProps = {
  projects: Project[]
}

export default function ImageTrack({ projects }: ImageTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [mouseDownAt, setMouseDownAt] = useState<string>("0")
  const [prevPercentage, setPrevPercentage] = useState<string>("0")
  const [percentage, setPercentage] = useState<string>("0")
  const [activeIndex, setActiveIndex] = useState(0)

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

  const handleGoToProject = (index: number) => {
    const nextPercentage = -(100 / projects.length) * index;
    setPercentage(nextPercentage.toString());
    setPrevPercentage(nextPercentage.toString());
    
    animateTrack(nextPercentage);
    setActiveIndex(index);
  }

  const animateTrack = (nextPercentage: number) => {
    if (trackRef.current) {
      trackRef.current.animate(
        { transform: `translate(${nextPercentage}%, -50%)` },
        { duration: 1200, fill: "forwards" }
      );

      const imageEls = trackRef.current.getElementsByClassName("image");
      for (const imageEl of imageEls) {
        (imageEl as HTMLElement).animate(
          { objectPosition: `${nextPercentage + 100}% center` },
          { duration: 1200, fill: "forwards" }
        );
      }
    }
  }

  const scrollLeft = () => {
    if (activeIndex > 0) {
      handleGoToProject(activeIndex - 1);
    }
  }

  const scrollRight = () => {
    if (activeIndex < projects.length - 1) {
      handleGoToProject(activeIndex + 1);
    }
  }

  useEffect(() => {
    const handleOnDown = (e: MouseEvent | TouchEvent) => {
      if ("touches" in e) {
        setMouseDownAt(e.touches[0].clientX.toString());
      } else {
        setMouseDownAt(e.clientX.toString());
      }
    };

    const handleOnUp = () => {
      setMouseDownAt("0");
      setPrevPercentage(percentage);
    };

    const handleOnMove = (e: MouseEvent | TouchEvent) => {
      if (mouseDownAt === "0") return;

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const mouseDelta = parseFloat(mouseDownAt) - clientX;
      const maxDelta = window.innerWidth;

      const nextPercentageUnconstrained =
        parseFloat(prevPercentage) - (mouseDelta / maxDelta) * 100;

      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        -100 * ((projects.length - 1) / projects.length)
      );
      
      setPercentage(nextPercentage.toString());
      
      // Find the nearest project index based on percentage
      const nearestIndex = Math.round(Math.abs(nextPercentage) / (100 / projects.length));
      if (nearestIndex !== activeIndex) {
        setActiveIndex(nearestIndex);
      }

      if (trackRef.current) {
        trackRef.current.animate(
          { transform: `translate(${nextPercentage}%, -50%)` },
          { duration: 1200, fill: "forwards" }
        );

        const imageEls = trackRef.current.getElementsByClassName("image");
        for (const imageEl of imageEls) {
          (imageEl as HTMLElement).animate(
            { objectPosition: `${nextPercentage + 100}% center` },
            { duration: 1200, fill: "forwards" }
          );
        }
      }
    };

    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", handleOnDown);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", handleOnMove);

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", handleOnMove);
    };
  }, [mouseDownAt, prevPercentage, percentage, activeIndex, projects.length]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 animate-fade-in-up">
          Projetos da Secretaria
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 animate-fade-in leading-relaxed">
          Conheça as iniciativas que estamos desenvolvendo para
          <br className="hidden md:block" /> 
          impulsionar a economia do Rio de Janeiro.
        </p>
        <div className="flex justify-center items-center space-x-3 text-blue-700 font-medium animate-fade-in">
          <span className="text-blue-600">Deslize ou arraste para explorar</span>
          <div className="flex space-x-2">
            <ChevronLeft size={20} />
            <ChevronRight size={20} />
          </div>
        </div>
      </div>

      {/* Track Container */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          ref={trackRef} 
          className={styles.imageTrack}
          style={{ transform: `translate(${parseFloat(percentage)}%, -50%)` }}
        >
          {projects.map((project, index) => (
            <div key={project.id} className={styles.imageCard}>
              <Image
                src={images[index % images.length]}
                alt={project.title}
                width={800}
                height={1120}
                className={`${styles.image} image`}
                priority={index < 3}
                draggable="false"
              />
              <div className={styles.overlay}>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-white">{project.title}</h3>
                  <p className="text-sm text-gray-200 line-clamp-5">{project.description}</p>
                </div>
                <div className="mt-auto hidden sm:block">
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors text-sm">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Indicators */}
      <div className="container mx-auto px-4 py-6 flex justify-center">
        <div className="flex space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleGoToProject(index)}
              className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-blue-900 w-6' : 'bg-gray-300'}`}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}