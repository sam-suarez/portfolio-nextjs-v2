import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import Contact from '@/sections/contact'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sam Suarez',
  description: 'Built with Next.js and Tailwind CSS. Deployed on Vercel.',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white background text-black relative`}>
        <main className="relative leading-[150%] px-5 md:px-12">{children}</main>
        <div id="portal" />
      </body>
    </html>
  )
}

export default RootLayout
