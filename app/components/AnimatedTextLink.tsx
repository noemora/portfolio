import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function AnimatedTextLink({
  children,
  href,
  active,
}: {
  children: ReactNode
  href: string
  active?: boolean
}) {
  return (
    <Link
      className={clsx(
        "xs:text-sm relative block w-fit font-semibold after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-light-gray after:transition after:duration-300 after:content-[''] sm:text-base md:text-lg lg:text-lg xl:text-xl",
        active
          ? 'after:scale-x-100 after:bg-light-gray' // Active link style
          : 'after:hover:scale-x-100' // Hover link style
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
