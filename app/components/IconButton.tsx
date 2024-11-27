import { Button } from '@nextui-org/react'
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
      className={className}
    >
      {children}
    </Button>
  )
}
