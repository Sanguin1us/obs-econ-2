export type Publication = {
  id: number
  title: string
  category: string
  year: number
  slug: string
  autor?: string
  resumo?: string
  conteudo?: string
  downloadUrl?: string
}

export const publicationCategories = [
  "BOLETIM ECONÔMICO",
  "NOTAS TÉCNICAS",
  "ESTUDOS ESPECIAIS",
  "APRESENTAÇÕES",
  "CARNAVAL DE DADOS",
  "RÉVEILLON EM DADOS",
  "WEB SUMMIT RIO",
  "ECONOMIA VERDE",
  "CRYPTO RIO",
  "DESENVOLVIMENTO ECONÔMICO DO RIO",
  "AEROPORTOS",
  "TURISMO",
  "ECONOMIA DA MODA",
  "DEMAIS PUBLICAÇÕES"
]

import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export async function loadPublications(): Promise<Publication[]> {
  const dir = path.join(process.cwd(), 'content/publicacoes')
  const files = await fs.readdir(dir)
  const pubs = await Promise.all(
    files.map(async (file, idx) => {
      const fullPath = path.join(dir, file)
      const content = await fs.readFile(fullPath, 'utf8')
      const { data, content: body } = matter(content)
      const slug = file.replace(/\.md$/, '')
      return {
        id: idx + 1,
        title: data.title ?? slug,
        category: data.category ?? '',
        year: Number(data.year ?? 0),
        slug,
        autor: data.autor,
        resumo: data.resumo,
        conteudo: data.conteudo ?? body,
        downloadUrl: data.file ? `/uploads/${data.file}` : undefined
      } as Publication
    })
  )
  return pubs.sort((a, b) => b.year - a.year)
}

