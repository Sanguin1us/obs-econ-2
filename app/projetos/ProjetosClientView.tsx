"use client";

import { Project } from "@/lib/projectsData";
import ProjectCarousel from "@/components/ProjectCarousel";
import { EmblaOptionsType } from "embla-carousel";

// --- Update OPTIONS here ---
const OPTIONS: EmblaOptionsType = {
  align: "start",     // Keep alignment if needed for initial positioning or programmatic scrolls
  loop: true,         // Keep looping if desired
  // skipSnaps: false, // This option is less impactful with dragFree, but false ensures buttons/dots still target snaps
  dragFree: true,     // **** Set dragFree to true ****
};
// -------------------------

// Define props expected by this client component
interface ProjetosClientViewProps {
  projects: Project[];
}

// This component handles the client-side rendering part
export default function ProjetosClientView({ projects }: ProjetosClientViewProps) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Pass the updated OPTIONS to the carousel */}
      <ProjectCarousel projects={projects} options={OPTIONS} />
    </div>
  );
}