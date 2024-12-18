'use client'

import { motion } from 'framer-motion'
import Sections from './Sections'

export default function About() {
  return (
    <div className="flex flex-col items-center md:flex-row lg:py-8">
      <div className="flex flex-col gap-4 lg:gap-8">
        <motion.h1
          className="text-center text-3xl font-bold md:text-left md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          Hola, Welcome! 👋
        </motion.h1>
        <div className="flex flex-col gap-4 text-justify text-base leading-relaxed md:text-start md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            I am a versatile and passionate software developer with over 8 years
            of experience, currently based in Los Angeles, Chile. My expertise
            spans both frontend and backend development, enabling me to craft
            modern, responsive, and scalable web applications tailored to client
            needs. Recognized for my ability to adapt quickly and think
            critically, I thrive in dynamic environments where innovation and
            problem-solving are key to delivering impactful results.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            With a strong foundation in engineering principles and a commitment
            to professional excellence, I consistently demonstrate meticulous
            attention to detail and a drive for continuous learning. Whether
            collaborating within a team or working independently, I excel in
            leveraging cutting-edge technologies to create efficient solutions,
            ensuring exceptional outcomes through unwavering dedication and a
            results-oriented approach.
          </motion.p>
        </div>
        <Sections />
      </div>
    </div>
  )
}
