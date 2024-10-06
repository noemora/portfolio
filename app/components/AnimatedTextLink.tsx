import Link from 'next/link'
import { ReactNode } from 'react'

export default function AnimatedTextLink({
  children,
  href,
}: {
  children: ReactNode
  href: string
}) {
  return (
    <Link
      className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
      href={href}
    >
      {children}
    </Link>
  )
}
