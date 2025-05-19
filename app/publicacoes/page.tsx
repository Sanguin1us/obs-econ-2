import { Suspense } from "react"
import PublicacoesClient from "@/components/PublicacoesClient"
import { loadPublications } from "@/lib/publicationsData"

export const revalidate = false

export default async function PublicacoesPage() {
  const publications = await loadPublications()
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <PublicacoesClient publications={publications} />
    </Suspense>
  )
}
