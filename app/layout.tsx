import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sam Suarez',
  description: 'Built with Next.js and Tailwind CSS. Deployed on Vercel.',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} background relative bg-white text-black leading-[150%] px-5 md:px-12`}
      >
        <main className="relative mx-auto max-w-[1440px]">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
