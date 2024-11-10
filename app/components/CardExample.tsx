import logoIcon from '@/public/logo-nm.png'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from '@nextui-org/react'
import Image from 'next/image'

export default function CardExample() {
  return (
    <Card className="col-span-2 max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image src={logoIcon} width={40} height={40} alt="logoNM" />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
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
    </Card>
  )
}
