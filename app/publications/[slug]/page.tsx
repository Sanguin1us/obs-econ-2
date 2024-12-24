import { notFound } from 'next/navigation'
import { FileText, Calendar, User } from 'lucide-react'

const publications = [
  { 
    id: 1, 
    title: 'Economic Outlook 2023', 
    year: 2023, 
    semester: 'First Semester', 
    slug: 'economic-outlook-2023',
    author: 'Dr. Jane Smith',
    abstract: 'This report provides a comprehensive analysis of the global economic landscape for 2023, examining key trends, potential risks, and growth opportunities across various sectors and regions.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  // Add more publication data as needed
]

export default function PublicationPage({ params }: { params: { slug: string } }) {
  const publication = publications.find(p => p.slug === params.slug)

  if (!publication) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{publication.title}</h1>
      <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
        <div className="flex items-center">
          <Calendar className="mr-2" size={20} />
          <span>{publication.year} - {publication.semester}</span>
        </div>
        <div className="flex items-center">
          <User className="mr-2" size={20} />
          <span>{publication.author}</span>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Abstract</h2>
        <p>{publication.abstract}</p>
      </div>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Full Report</h2>
        <p>{publication.content}</p>
      </div>
      <div className="mt-12">
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
        >
          <FileText className="mr-2" size={20} />
          Download Full Report
        </a>
      </div>
    </div>
  )
}

