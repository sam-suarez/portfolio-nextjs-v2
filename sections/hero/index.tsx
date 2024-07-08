import React from 'react'
import { HeroProps } from './types'
import RichText from '@/components/rich-text'
import Stack from '@/components/stack'
import Socials from '@/components/socials'
import Experience from '@/components/experience'
import CTA from './components/cta'

const Hero = ({ data }: HeroProps) => {
  const { hero, experience } = data ?? {}
  const { title, description, skills, summary } = hero ?? {}

  return (
    <section className="py-12 lg:py-0 mx-auto max-w-[1440px]">
      <div className="grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="lg:py-32 lg:h-screen lg:flex lg:flex-col lg:sticky lg:top-0">
          <h1 className="text-5xl font-bold mb-4 lg:text-7xl">{title}</h1>
          <RichText className="text-xl font-bold max-w-md" content={description?.json} />
          <CTA />
          <div className="mt-20 lg:hidden">
            <h4 className="font-bold mb-6">About.</h4>
            <RichText content={summary?.json} />
          </div>
          <div className="mt-20 lg:mt-auto">
            <h4 className="font-bold mb-6 lg:hidden">Stack.</h4>
            <Stack stack={skills} />
          </div>
          <Socials className="mt-6" />
        </div>
        <div className="lg:py-32">
          <div className="hidden lg:block">
            <RichText content={summary?.json} />
          </div>
          <div className="mt-20">
            <h4 className="font-bold mb-6">Experience.</h4>
            <Experience experience={experience} />
          </div>
          <div className="mt-20">
            <h4 className="font-bold mb-6">Projects.</h4>
            <div className="flex items-center justify-center p-4 rounded-md bg-white-100 h-[150px] text-xs font-bold">
              COMING SOON.
            </div>
          </div>
          <div className="mt-20">
            <p className="text-sm">
              Built with <span className="font-bold">Next.js</span> and{' '}
              <span className="font-bold">Tailwind CSS</span>. Deployed on{' '}
              <span className="font-bold">Vercel</span>.
            </p>
            <p className="text-sm mt-4">Sam Suarez — 2024</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
