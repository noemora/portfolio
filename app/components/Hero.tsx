'use client'

import { Button } from '@nextui-org/react'
import { TypeAnimation } from 'react-type-animation'
import DownloadIcon from './DownloadIcon'
import GithubIcon from './GithubIcon'
import LinkedinIcon from './LinkedinIcon'
import RightArrowIcon from './RightArrowIcon'

export default function Hero() {
  return (
    <>
      <div className="flex flex-col gap-y-8">
        <div className="flex h-24 flex-col gap-2">
          <h1 className="text-6xl font-bold leading-none">Noé Mora</h1>
          <TypeAnimation
            sequence={[
              '',
              0,
              'I worked as a Software Engineer',
              2000,
              'I worked as a Frontend Developer',
              2000,
              'I worked as a Full Stack Developer',
              2000,
            ]}
            repeat={Infinity}
            cursor
            preRenderFirstString
            className="text-2xl"
          />
        </div>
        <div className="flex gap-6">
          <Button
            color="primary"
            radius="full"
            endContent={<RightArrowIcon className="h-6 w-6" />}
            className="bg-[#0077B5] text-medium font-medium"
          >
            Contact me here
          </Button>
          <Button
            radius="full"
            className="gap-1 text-medium font-semibold"
            endContent={<DownloadIcon className="h-7 w-7" />}
          >
            Download my resume
          </Button>
          <Button isIconOnly radius="full">
            <GithubIcon />
          </Button>
          <Button isIconOnly radius="full" className="border-none bg-[#0077B5]">
            <LinkedinIcon />
          </Button>
        </div>
      </div>
    </>
  )
}
