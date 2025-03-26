"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"; // Keep this type import
import useEmblaCarousel from "embla-carousel-react";
import { Project } from "@/lib/projectsData";

// --- Helper Hooks (useDotButton - unchanged) ---
type UseDotButtonType = {
    selectedIndex: number;
    scrollSnaps: number[];
    onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
    emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi
            .on("reInit", onInit)
            .on("reInit", onSelect)
            .on("select", onSelect);
        return () => {
            if (emblaApi) {
                emblaApi
                    .off("reInit", onInit)
                    .off("reInit", onSelect)
                    .off("select", onSelect);
            }
        };
    }, [emblaApi, onInit, onSelect]);

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick,
    };
};

// --- Constants ---
const PARALLAX_FACTOR = 0.4;

// --- Main Component ---
type PropType = {
  projects: Project[];
  options?: EmblaOptionsType;
};

export default function ProjectCarousel({ projects, options }: PropType) {
  const mergedOptions: EmblaOptionsType = {
       align: 'center',
       loop: options?.loop ?? true, // Default loop to true if not provided
       dragFree: options?.dragFree ?? true, // Default dragFree to true if not provided
       ...(options || {})
   };
  const [emblaRef, emblaApi] = useEmblaCarousel(mergedOptions);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const placeholderImages = [
    "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
    "https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80",
    "https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  ];

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__parallax__layer") as HTMLElement;
    });
  }, []);

  // --- UPDATED tweenParallax ---
  const tweenParallax = useCallback(() => {
    // Updated Guard Clause: Removed check for emblaApi.options
    if (
        !emblaApi || !emblaApi.scrollSnapList || !emblaApi.scrollProgress ||
        !emblaApi.internalEngine || !tweenNodes.current.length
        // No !emblaApi.options check needed here
        ) {
        return;
    }

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    // Get loop setting from mergedOptions which is in scope
    const isLooping = mergedOptions.loop;

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        const tweenNode = tweenNodes.current[snapIndex];
        if (!tweenNode) return;

        let diffToTarget = scrollSnap - scrollProgress;

        if (isLooping) {
            const shortest = engine.location.diffs.shortest(diffToTarget);
            diffToTarget = shortest.diff;
        }

        const translate = diffToTarget * (-1 / PARALLAX_FACTOR) * 100;
        tweenNode.style.transform = `translateX(${translate}%)`;
    });
  // Dependency array depends only on emblaApi being ready,
  // mergedOptions.loop doesn't change dynamically during scroll
  }, [emblaApi, mergedOptions.loop]); // Added mergedOptions.loop for explicit dependency tracking
  // --- END UPDATED tweenParallax ---

  // --- useEffect (Unchanged) ---
  useEffect(() => {
    if (!emblaApi) return;
    setTweenNodes(emblaApi);
    tweenParallax(); // Initial call
    const handleScroll = () => tweenParallax();
    const handleResize = () => { setTweenNodes(emblaApi); tweenParallax(); };
    const handleReInit = () => { setTweenNodes(emblaApi); tweenParallax(); };

    emblaApi.on("scroll", handleScroll).on("resize", handleResize).on("reInit", handleReInit);
     return () => {
         if (emblaApi) {
             emblaApi.off("scroll", handleScroll).off("resize", handleResize).off("reInit", handleReInit);
         }
     }
  // Updated dependencies based on tweenParallax change
  }, [emblaApi, setTweenNodes, tweenParallax]);


  // --- Return JSX (Unchanged structure) ---
  return (
    <div className="relative w-full py-8">
      {/* Header/Text */}
      <div className="container mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 animate-fade-in-up">
          Projetos da Secretaria
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 animate-fade-in leading-relaxed">
          Conheça as iniciativas que estamos desenvolvendo para
          <br className="hidden md:block" />
          impulsionar a economia do Rio de Janeiro.
        </p>
         <div className="flex justify-center items-center space-x-3 text-blue-700 font-medium animate-fade-in text-sm mt-2">
            <span className="text-gray-500">Arraste para explorar</span>
        </div>
      </div>

      {/* Embla Viewport */}
      <div className="overflow-hidden py-4 px-4 sm:px-6 lg:px-8" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-6">
          {projects.map((project, index) => (
            <div
              className="flex-grow-0 flex-shrink-0 basis-full sm:basis-[55%] md:basis-[45%] lg:basis-[35%] xl:basis-[30%] min-w-0 pl-6 relative"
              key={project.id}
            >
              <div className="overflow-hidden rounded-xl shadow-lg group bg-gray-100 aspect-[16/10] max-h-[60vh] cursor-grab active:cursor-grabbing">
                <div className="embla__slide__parallax h-full w-full">
                  <div className="embla__slide__parallax__layer h-full w-full relative">
                    <Image
                      src={project.imageUrl || placeholderImages[index % placeholderImages.length]}
                      alt={project.title} fill style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 ease-out group-hover:scale-110 pointer-events-none"
                      priority={index < 3}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 55vw, (max-width: 1024px) 45vw, (max-width: 1280px) 35vw, 30vw"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-5 md:p-6 flex flex-col justify-end text-white rounded-xl">
                   <h3 className="font-bold text-lg md:text-xl mb-2 drop-shadow-sm">{project.title}</h3>
                   <p className="text-xs md:text-sm text-gray-100 line-clamp-3 md:line-clamp-4 mb-4 drop-shadow-sm">{project.description}</p>
                   <button className="self-start bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors text-xs md:text-sm font-medium opacity-80 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 duration-300 ease-out shadow">
                      Saiba mais
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-3 pt-6 pb-8">
        {scrollSnaps.map((_, index) => (
          <button key={index} onClick={() => onDotButtonClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ease-out ${
              index === selectedIndex ? "bg-blue-900 w-5" : "bg-gray-300 hover:bg-gray-500"
            }`}
            aria-label={`Ir para projeto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}