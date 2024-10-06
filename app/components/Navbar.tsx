import githubIcon from '@/public/github-icon.svg?url'
import linkedinIcon from '@/public/linkedin-icon.svg?url'
import Image from 'next/image'
import AnimatedImageLink from './AnimatedImageLink'
import AnimatedTextLink from './AnimatedTextLink'

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-slate-800 bg-opacity-50 px-32 py-3">
      <div className="flex justify-between">
        <nav className="flex items-center gap-x-8">
          <AnimatedTextLink href="/">Home</AnimatedTextLink>
          <AnimatedTextLink href="/about">About</AnimatedTextLink>
          <AnimatedTextLink href="/contact">Contact</AnimatedTextLink>
          <AnimatedTextLink href="/blog">Blog</AnimatedTextLink>
        </nav>
        <div>
          <nav className="flex items-center gap-x-8">
            <AnimatedImageLink href="https://github.com/noemora">
              <Image
                src={githubIcon}
                alt="Github Icon"
                width={24}
                height={24}
              />
            </AnimatedImageLink>
            <AnimatedImageLink href="https://linkedin.com/in/noe-mora-dev">
              <Image
                src={linkedinIcon}
                alt="LinkedIn Icon"
                width={24}
                height={24}
              />
            </AnimatedImageLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
