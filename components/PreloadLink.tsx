'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

interface PreloadLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function PreloadLink({ href, children, className, onClick }: PreloadLinkProps) {
  const router = useRouter()
  const handleMouseEnter = () => {
    router.prefetch(href)
  }

  return (
    <Link 
      href={href}
      className={className}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

