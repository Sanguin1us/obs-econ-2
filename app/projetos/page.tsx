import type { Metadata } from 'next';
import { projects } from "@/lib/projectsData"; // Import data directly on the server
import ProjetosClientView from './ProjetosClientView'; // Import the new client component

// --- Metadata (Allowed in Server Components) ---
export const metadata: Metadata = {
  title: 'Projetos | Observatório Econômico',
  description: 'Conheça as iniciativas da Secretaria de Desenvolvimento Urbano e Econômico para impulsionar a economia do Rio de Janeiro.',
  // Add other relevant metadata tags here
};

// This is now a Server Component (no "use client" directive)
export default function ProjetosPage() {
  // Data fetching or importing happens here on the server

  // Render the Client Component, passing data as props
  return <ProjetosClientView projects={projects} />;
}