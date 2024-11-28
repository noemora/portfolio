'use client'

import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import AvatarImage from './AvatarImage'
import DownloadIcon from './DownloadIcon'
import GithubIcon from './GithubIcon'
import IconButton from './IconButton'
import LinkedinIcon from './LinkedinIcon'
import RightArrowIcon from './RightArrowIcon'

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className="flex flex-col gap-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.8 }}
        className="flex flex-col items-center justify-between gap-12 md:flex-row"
      >
        <div className="order-2 flex flex-col gap-8 md:order-none md:w-2/3">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
              Noé Mora
            </h1>
            <TypeAnimation
              sequence={[
                '',
                1800,
                'Software Engineer 🚀',
                3800,
                'Frontend Developer 💻',
                5800,
                'Full Stack Developer 🌐',
                7800,
              ]}
              repeat={Infinity}
              cursor
              preRenderFirstString
              className="text-xl md:text-2xl"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            className="flex flex-wrap items-center justify-center gap-4 md:justify-normal"
          >
            <Button
              radius="full"
              endContent={<DownloadIcon className="h-5 w-5" />}
              className="gap-2 text-medium font-semibold hover:scale-105"
            >
              Download Resume
            </Button>
            <Button
              color="primary"
              radius="full"
              endContent={<RightArrowIcon className="h-6 w-6" />}
              className="bg-blue-light text-medium hover:scale-105"
            >
              Contact Me
            </Button>
            <div className="flex gap-4">
              <IconButton ariaLabel="GitHub Profile">
                <GithubIcon />
              </IconButton>
              <IconButton
                ariaLabel="LinkedIn Profile"
                className="bg-blue-light"
              >
                <LinkedinIcon />
              </IconButton>
            </div>
          </motion.div>
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
    </motion.div>
  )
}
