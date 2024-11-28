import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Providers } from './Providers'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Noé Mora - Web Development Portfolio',
  description:
    'Noé Mora is a Software Engineer with experience in Frontend and Full Stack Development.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-full min-h-screen w-full bg-blue-darker text-light-gray`}
      >
        <Providers>
          <Navbar />
          <main className="h-full px-8 py-8 md:px-20 lg:px-40 lg:py-12 xl:px-60">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
