'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const skills = [
  {
    title: 'HTML5',
    icon: '/icons/html-icon.png',
  },
  {
    title: 'CSS3',
    icon: '/icons/css-icon.png',
  },
  {
    title: 'JavaScript',
    icon: '/icons/javascript-icon.png',
  },
  {
    title: 'jQuery',
    icon: '/icons/jquery-icon.png',
  },
  {
    title: 'TypeScript',
    icon: '/icons/typescript-icon.png',
  },
  {
    title: 'Sass',
    icon: '/icons/sass-icon.png',
  },
  {
    title: 'Bootstrap',
    icon: '/icons/bootstrap-icon.png',
  },
  {
    title: 'CSS Modules',
    icon: '/icons/css-modules-icon.png',
  },
  {
    title: 'Chakra UI',
    icon: '/icons/chakraui-icon.png',
  },
  {
    title: 'Styled-components',
    icon: '/icons/styled-components-icon.png',
  },
  {
    title: 'Framer Motion',
    icon: '/icons/framer-icon.png',
  },
  {
    title: 'NPM',
    icon: '/icons/npm-icon.png',
  },
  {
    title: 'NodeJS',
    icon: '/icons/nodejs-icon.png',
  },
  {
    title: 'Github',
    icon: '/icons/github-icon.png',
  },
  {
    title: 'Git',
    icon: '/icons/git-icon.png',
  },
  {
    title: 'Gatsby',
    icon: '/icons/gatsby-icon.png',
  },
  {
    title: 'Contentful',
    icon: '/icons/contentful-icon.png',
  },
  {
    title: 'Shopify',
    icon: '/icons/shopify-icon.png',
  },
  {
    title: 'Hydrogen',
    icon: '/icons/hydrogen-icon.png',
  },
  {
    title: 'React',
    icon: '/icons/react-icon.png',
  },
  {
    title: 'Remix',
    icon: '/icons/remix-icon.png',
  },
  {
    title: 'Next',
    icon: '/icons/nextjs-icon.png',
  },
  {
    title: 'Storybook',
    icon: '/icons/storybook-icon.png',
  },
  {
    title: 'GraphQL',
    icon: '/icons/graphql-icon.png',
  },
  {
    title: 'Figma',
    icon: '/icons/figma-icon.png',
  },
  {
    title: 'XD',
    icon: '/icons/xd-icon.png',
  },
  {
    title: 'Photoshop',
    icon: '/icons/photoshop-icon.png',
  },
  {
    title: 'AfterEffects',
    icon: '/icons/aftereffects-icon.png',
  },
]

const variants = {
  initial: {
    opacity: 0,
    transform: 'translateX(100px)',
    filter: 'blur(30px)',
  },
  animate: (custom: number) => ({
    opacity: 1,
    transform: 'translateX(0px)',
    filter: 'blur(0px)',
    transition: {
      delay: 0.05 * custom,
    },
  }),
}

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[700px] h-[calc(100vh-73px)] flex justify-center flex-col"
    >
      <motion.h1
        className="font-bold text-2xl md:text-4xl"
        initial={{ opacity: 0, x: '100px', filter: 'blur(30px)' }}
        animate={{ opacity: 1, x: '0', filter: 'blur(0px)' }}
        transition={{ bounce: false }}
      >
        Skills<span className="text-yellow">.</span>
      </motion.h1>
      <motion.p
        className="mt-2"
        initial={{ opacity: 0, x: '100px', filter: 'blur(30px)' }}
        animate={{ opacity: 1, x: '0', filter: 'blur(0px)' }}
        transition={{ bounce: false }}
      >
        Technologies and tools I&apos;ve used (in an actual work setting).
      </motion.p>
      <div className="mt-6 flex flex-wrap gap-1.5">
        {skills.map(({ title, icon }, index) => {
          const isInverted = ['Github', 'Next']

          return (
            <motion.div
              className="skill-item flex items-center justify-center flex-row text-center p-2 md:flex-col gap-1 md:gap-2 bg-blue-200 rounded text-sm md:h-[90px] md:w-[90px] text-xs"
              key={index}
              initial="initial"
              whileInView="animate"
              custom={index}
              variants={variants}
            >
              <div className="relative h-[20px] w-[20px] md:h-[30px] w-[30px]">
                <Image
                  src={icon}
                  alt={title}
                  fill
                  className={clsx('object-contain', { invert: isInverted.includes(title) })}
                />
              </div>
              {title}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
