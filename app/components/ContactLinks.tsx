import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { LINKS } from '../constants/links'
import DownloadIcon from './DownloadIcon'
import EmailIcon from './EmailIcon'
import GithubIcon from './GithubIcon'
import IconButton from './IconButton'
import LinkedinIcon from './LinkedinIcon'

export default function ContactLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
      className="flex flex-wrap items-center justify-center gap-4 md:justify-normal xl:gap-6"
    >
      <Button
        radius="full"
        endContent={<DownloadIcon className="h-5 w-5" />}
        className="gap-2 px-8 py-2 text-base font-semibold hover:scale-105 md:text-lg lg:text-xl"
        aria-label="Download Resume"
      >
        <Link href={LINKS.RESUME} target="_blank" rel="noopener noreferrer">
          Download Resume
        </Link>
      </Button>
      <div className="flex gap-4 xl:gap-6">
        <IconButton href={LINKS.EMAIL} ariaLabel="Send me an email">
          <EmailIcon />
        </IconButton>
        <IconButton href={LINKS.GITHUB} ariaLabel="GitHub Profile">
          <GithubIcon />
        </IconButton>
        <IconButton
          href={LINKS.LINKEDIN}
          ariaLabel="LinkedIn Profile"
          className="bg-blue-light"
        >
          <LinkedinIcon />
        </IconButton>
      </div>
    </motion.div>
  )
}
