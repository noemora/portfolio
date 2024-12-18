import { Button } from '@nextui-org/react'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import useScreenSize from '../hooks/useScreenSize'

interface IconButtonProps {
  ariaLabel: string
  className?: string
  href: string
  children?: React.ReactNode
}

export default function IconButton({
  ariaLabel,
  className,
  href,
  children,
}: IconButtonProps) {
  const { width } = useScreenSize()
  return (
    <Button
      isIconOnly
      radius="full"
      aria-label={ariaLabel}
      className={clsx(className, 'hover:scale-110')}
      size={width < 1537 ? 'md' : 'lg'}
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}
