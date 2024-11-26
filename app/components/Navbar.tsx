'use client'
import { usePathname } from 'next/navigation'
import { pages } from '../constants/pageNames'
import AnimatedTextLink from './AnimatedTextLink'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-10 bg-blue-dark bg-opacity-50 px-52 py-6 backdrop-blur">
      <div className="flex justify-center gap-10">
        <nav className="flex items-center gap-x-12">
          {pages.map(page => (
            <AnimatedTextLink
              key={page.href}
              href={page.href}
              active={pathname === page.href}
            >
              {page.name}
            </AnimatedTextLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
