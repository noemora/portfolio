'use client'
import { Divider } from '@nextui-org/react'
import useScreenSize from '../hooks/useScreenSize'

export default function Footer() {
  const screenSize = useScreenSize()
  return (
    <footer className="w-full bg-blue-dark px-8 py-6 md:px-14 lg:px-20 xl:px-40 xl:py-8">
      <div className="flex flex-col items-center justify-center gap-2 text-base md:flex-row md:text-lg lg:text-xl">
        <p>2025 © Built by Noé Mora</p>
        <Divider
          orientation={screenSize.width < 640 ? 'horizontal' : 'vertical'}
          className={`${screenSize.width < 640 ? 'w-44' : 'h-6'} bg-light-gray`}
        />
        <p>All Rights Reserved</p>
      </div>
    </footer>
  )
}
