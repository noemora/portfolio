import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function AnimatedTextLink({
  children,
  href,
  active,
  onClick,
}: {
  children: ReactNode
  href: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <Link
      className={clsx(
        `relative block w-fit text-base font-semibold 
        after:absolute after:block after:h-[3px] after:w-full after:origin-left 
        after:scale-x-0 after:bg-light-gray after:transition after:duration-300 
        after:content-[''] md:text-lg lg:text-xl`,
        active
          ? 'after:scale-x-100 after:bg-light-gray' // Active link style
          : 'after:hover:scale-x-100' // Hover link style
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
