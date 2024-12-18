'use client'
import { Card, CardFooter } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { pages } from '../constants/pageNames'

export default function Sections() {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <div className="grid grid-cols-1 gap-6 pb-10 pt-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {pages
        .filter(page => page.href !== pathname)
        .map(({ name, image, href, altText }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            <Card
              isFooterBlurred
              isPressable
              radius="lg"
              className="group h-28 w-full cursor-pointer border-none hover:scale-105"
              onPress={() => router.push(href)}
            >
              <Image
                alt={altText}
                src={image}
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
              <CardFooter
                className="absolute -bottom-7 z-10 ml-8 w-[calc(100%_-_60px)]
              justify-center overflow-hidden rounded-large py-1 shadow-small
              transition group-hover:-translate-y-10 group-hover:delay-150 group-hover:ease-in-out"
              >
                <h3 className="text-sm font-bold">{name}</h3>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
    </div>
  )
}
