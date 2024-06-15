'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { SkillsProps } from './types'
import { mappedVariants } from '@/app/constants/animations'

const Skills = ({ data }: SkillsProps) => {
  const { title, subtitle, skillsCollection } = data ?? {}

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
        {title}
        <span className="text-yellow">.</span>
      </motion.h1>
      <motion.p
        className="mt-2"
        initial={{ opacity: 0, x: '100px', filter: 'blur(30px)' }}
        animate={{ opacity: 1, x: '0', filter: 'blur(0px)' }}
        transition={{ bounce: false }}
      >
        {subtitle}
      </motion.p>
      <div className="mt-6 flex flex-wrap gap-1.5">
        {skillsCollection?.items?.map(({ title, image }, index) => {
          const isInverted = ['Github', 'Next']

          return (
            <motion.div
              className="skill-item flex items-center justify-center flex-row text-center p-2 md:flex-col gap-1 md:gap-2 bg-blue-200 rounded text-sm md:h-[90px] md:w-[90px] text-xs"
              key={index}
              initial="initial"
              whileInView="animate"
              custom={index}
              variants={mappedVariants}
            >
              <div className="relative h-[20px] w-[20px] md:h-[30px] w-[30px]">
                <Image
                  src={image.url}
                  alt={title}
                  fill
                  sizes="30px"
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
