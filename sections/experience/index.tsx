'use client'

import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { mappedVariants } from '@/animations'
import { ExperienceProps } from './types'
import { getFormattedDate } from '@/utils/general'
import RichText from '@/components/rich-text'

const Experience = ({ data }: ExperienceProps) => {
  const { title, subtitle, experiencesCollection } = data ?? {}

  return (
    <section className="py-24" id="experience">
      <motion.h1
        className="font-bold text-2xl md:text-4xl"
        initial={{ opacity: 0, x: '100px', filter: 'blur(30px)' }}
        animate={{ opacity: 1, x: '0', filter: 'blur(0px)' }}
        transition={{ bounce: false }}
        viewport={{ once: true }}
      >
        {title}
        <span className="text-yellow">.</span>
      </motion.h1>
      <motion.p
        className="mt-2"
        initial={{ opacity: 0, x: '100px', filter: 'blur(30px)' }}
        animate={{ opacity: 1, x: '0', filter: 'blur(0px)' }}
        transition={{ bounce: false }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>
      <div className="relative mt-6 grid md:grid-cols-2 gap-4 md:gap-6">
        {experiencesCollection?.items?.map((experience, index) => {
          const { image, position, company, startDate, endDate, overview, responsibilities } =
            experience ?? {}
          const isFirstIndex = index === 0

          return (
            <motion.div
              key={index}
              className={clsx('relative flex flex-col p-4 md:p-6 bg-blue-200 rounded-lg', {
                'md:col-span-2 border-solid border-yellow border': isFirstIndex,
              })}
              initial="initial"
              whileInView="animate"
              custom={index}
              variants={mappedVariants}
              viewport={{ once: true }}
            >
              {image?.url && (
                <div className="relative h-[50px] w-[50px]">
                  <Image src={image.url} alt={position ?? ''} fill className="object-contain" />
                </div>
              )}
              <div className="flex items-center text-yellow font-bold text-lg mt-3">{position}</div>
              <div
                className={clsx('flex flex-col', {
                  'md:flex-row md:items-center md:justify-between': isFirstIndex,
                })}
              >
                <p className="font-bold">{company}</p>
                <p className="text-xs">
                  {getFormattedDate(startDate)} - {endDate ? getFormattedDate(endDate) : 'Present'}
                </p>
              </div>
              <p className="mt-3 text-yellow text-xs">Overview</p>
              {overview && <RichText content={overview.json} />}
              <p className="mt-3 text-yellow text-xs">Responsibilities</p>
              <ul className="mt-1 list-disc pl-6 text-sm">
                {responsibilities?.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
