import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Economic Observatory',
  description: 'Institutional platform for sharing economic data and publications'
}

export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white text-gray-900`}>
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-grow"
        >
          {children}
        </motion.main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}