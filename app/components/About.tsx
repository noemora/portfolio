'use client'

import { motion } from 'framer-motion'
import Sections from './Sections'

export default function About() {
  return (
    <div className="flex flex-col items-center gap-8 pb-0 pt-8 md:flex-row md:py-8">
      <div className="flex flex-col gap-8">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          Hola, Welcome! 👋
        </motion.h1>
        <div className="flex flex-col gap-4 text-justify md:text-start">
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
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
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            With a strong foundation in frontend and backend development, I
            excel in building scalable and efficient solutions tailored to
            client needs. I&apos;m always eager to tackle new challenges and
            explore innovative tools to deliver exceptional results.
          </motion.p>
        </div>
        <Sections />
      </div>
    </div>
  )
}
