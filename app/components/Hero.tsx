'use client'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import AvatarImage from './AvatarImage'
import ContactLinks from './ContactLinks'

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.8 }}
      className="flex flex-col items-center justify-between gap-4 pt-2 md:flex-row md:gap-0 lg:pt-0"
    >
      <div className="order-2 flex flex-col gap-4 md:order-none lg:gap-8">
        <div className="flex min-w-[300px] flex-col items-center gap-4 md:items-start">
          <h1 className="text-5xl font-extrabold leading-tight tracking-wider md:text-6xl lg:text-7xl">
            Noé Mora
          </h1>
          <TypeAnimation
            sequence={[
              '',
              800,
              'Software Engineer',
              1800,
              'FrontEnd Developer',
              1800,
              'FullStack Developer',
              1800,
            ]}
            repeat={Infinity}
            cursor
            preRenderFirstString
            className="text-2xl md:text-3xl lg:text-4xl"
          />
        </div>
        <ContactLinks />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.8 }}
        className="order-1 flex items-center justify-center md:order-none"
      >
        <AvatarImage />
      </motion.div>
    </motion.div>
  )
}
