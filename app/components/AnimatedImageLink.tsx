import Link from 'next/link'
import { ReactNode } from 'react'

export default function AnimatedImageLink({
  children,
  href,
}: {
  children: ReactNode
  href: string
}) {
  return (
    <Link
      className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
      href={href}
      target="_blank"
    >
      {children}
    </Link>
  )
}
