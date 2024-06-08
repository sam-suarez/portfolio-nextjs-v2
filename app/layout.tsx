import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import Head from 'next/head'
import Header from '@/sections/header'
import Footer from '@/sections/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sam Suarez',
  description: 'Built with Next.js',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <body className={`${inter.className} relative text-white bg-blue-300 leading-[150%]`}>
        <Header />
        <main className="relative mx-auto max-w-screen-lg px-5 md:px-10">{children}</main>
        <Footer />
        <div className="bg-dots" />
      </body>
    </html>
  )
}

export default RootLayout
