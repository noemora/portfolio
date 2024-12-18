'use client'
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { pages } from '../constants/pageNames'
import AnimatedTextLink from './AnimatedTextLink'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar
      className="bg-blue-dark bg-opacity-50 px-2 backdrop-blur md:px-8 md:py-2 lg:px-20 xl:py-4"
      classNames={{
        wrapper: 'justify-center',
        menu: 'bg-blue-dark bg-opacity-50 md:mt-4 gap-4',
      }}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent className="lg:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </NavbarContent>

      {/* NavbarContent is hidden on mobile */}
      <NavbarContent className="hidden gap-8 lg:flex" justify="center">
        {pages.map(page => (
          <AnimatedTextLink
            key={page.href}
            href={page.href}
            active={pathname === page.href}
          >
            {page.name}
          </AnimatedTextLink>
        ))}
      </NavbarContent>

      {/* NavbarMenu is hidden on desktop */}
      <NavbarMenu>
        {pages.map((page, index) => (
          <NavbarMenuItem key={`${page}-${index}`}>
            <AnimatedTextLink
              href={page.href}
              active={pathname === page.href}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {page.name}
            </AnimatedTextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
