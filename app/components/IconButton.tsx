import { Button } from '@nextui-org/react'
import clsx from 'clsx'
import React from 'react'

interface IconButtonProps {
  ariaLabel: string
  className?: string
  children?: React.ReactNode
}

export default function IconButton({
  ariaLabel,
  className,
  children,
}: IconButtonProps) {
  return (
    <Button
      isIconOnly
      radius="full"
      aria-label={ariaLabel}
      className={clsx(className, 'hover:scale-110')}
    >
      {children}
    </Button>
  )
}
