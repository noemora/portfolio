import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from '@nextui-org/react'
import Image, { StaticImageData } from 'next/image'

interface CardExampleProps {
  header?: {
    logo: string | StaticImageData
    alt: string
    title: string
    subtitle: string
  }
  body: string
  footer?: {
    link: string
    text: string
  }
}

export default function CardExample({
  header,
  body,
  footer,
}: CardExampleProps) {
  return (
    <Card className="col-span-2 max-w-[400px]">
      {header && (
        <>
          <CardHeader className="flex gap-3">
            <Image
              src={header?.logo}
              width={40}
              height={40}
              alt={header?.alt || 'Logo'}
            />
            <div className="flex flex-col">
              <p className="text-md">{header?.title}</p>
              <p className="text-small text-default-500">{header?.title}</p>
            </div>
          </CardHeader>
          <Divider />
        </>
      )}
      <CardBody>
        <p>{body}</p>
      </CardBody>
      {footer && (
        <>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </>
      )}
    </Card>
  )
}
