'use client'

import { Card, CardFooter } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { pages } from '../constants/pageNames'

export default function About() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="flex flex-col items-center gap-8 py-8 md:flex-row">
      <div className="flex flex-col gap-8">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          Hola, Welcome! 👋
        </motion.h1>
        <div className="flex flex-col gap-4">
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            I&apos;m a passionate software developer with over{' '}
            <span className="font-semibold">8 years of experience</span>, based
            in Los Angeles, Biobío, Chile. My expertise lies in{' '}
            <span className="font-semibold">
              crafting modern, responsive web applications
            </span>{' '}
            using cutting-edge technologies like{' '}
            <span className="font-semibold">React, Next.js, Tailwind CSS</span>,
            and <span className="font-semibold">Framer Motion</span>.
          </motion.p>
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            With a strong foundation in frontend and backend development, I
            excel in building scalable and efficient solutions tailored to
            client needs. I&apos;m always eager to tackle new challenges and
            explore innovative tools to deliver exceptional results.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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
                  className="h-28 w-full cursor-pointer border-none"
                  onPress={() => router.push(href)}
                >
                  <Image
                    alt={altText}
                    src={image}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                  <CardFooter className="absolute bottom-1 z-10 ml-8 w-[calc(100%_-_60px)] justify-center overflow-hidden rounded-large py-1 shadow-small before:rounded-xl">
                    <h3 className="text-sm font-bold">{name}</h3>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  )
}
