'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ReactNode, useState } from 'react'

interface PreloadLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function PreloadLink({ href, children, className, onClick }: PreloadLinkProps) {
  const router = useRouter()
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
    router.prefetch(href)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <Link 
      href={href}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}