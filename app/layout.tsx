import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Providers } from './Providers'
import Footer from './components/Footer'
import Header from './components/Header'
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
        className={`${inter.className} h-full min-h-screen w-full min-w-[350px] bg-blue-darker text-light-gray`}
      >
        <Providers>
          <Header />
          <main className="h-full px-8 md:px-14 lg:px-20 lg:pt-6 xl:px-40">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
