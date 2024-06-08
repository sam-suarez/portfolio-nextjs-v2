'use client'

import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    icon: '/icons/formfactory-icon.png',
    title: 'Software Developer',
    company: 'The Form Factory',
    startDate: 'December 2021',
    endDate: 'Present',
    description:
      'As a Software Developer, I help develop headless Shopify stores using Hydrogen (Remix React + TypeScript), communicate with clients to understand requirements and suggest improvements, perform ongoing maintenance, and collaborate with cross-functional teams to enhance website performance and meet client objectives.',
    activities: [
      'Develop Headless Shopify stores using Shopify’s latest technology Hydrogen (Remix React + TypeScript)',
      'Communicate with clients to understand requirements and suggest improvements.',
      'Perform ongoing maintenance and updates to ensure optimal website performance.',
      'Collaborate with designers and QA teams to implement enhancements and meet client objectives.',
    ],
  },
  {
    icon: '/icons/hometime-icon.png',
    title: 'Web Developer',
    company: 'Hometime',
    startDate: 'November 2020',
    endDate: 'April 2022',
    description:
      'As a Web Developer, I was responsible for maintaining and updating the company website, utilizing Gatsby, GraphQL, and CMS integration ensuring seamless performance, while also actively participating in the development and enhancement of the overall platform.',
    activities: [
      'Managed website development and maintenance.',
      'Communicated with clients to understand their needs and provide updates.',
      'Utilized Content Management Systems (CMS) for website management and updates.',
    ],
  },
  {
    icon: '/icons/3dk-icon.png',
    title: 'UI Designer / Developer',
    company: '3D Kreative Solutions',
    startDate: 'August 2018',
    endDate: 'October 2020',
    description:
      'As a UI Designer/Developer, I helped design user interface components using React and transformed these designs into reusable, efficient components for streamlined development.',
    activities: [
      'Designed user interfaces for web applications with a focus on user experience.',
      'Developed responsive UI components using ReactJS.',
      'Created and implemented web pages for company website. Conducted user research and usability testing.',
      'Collaborated with backend teams for project delivery.',
    ],
  },
  {
    icon: '/icons/fullmoon-icon.png',
    title: 'Web Designer',
    company: 'Fullmoon Web Solutions',
    startDate: 'August 2017',
    endDate: 'July 2018',
    description:
      'As a Web Designer, I was responsible for creating digital banners and posters for marketing campaigns, design visually compelling landing pages, and implement effective SEO strategies to enhance online visibility and user engagement.',
    activities: [
      'Designed landing pages aligned with branding and marketing goals.',
      'Integrated SEO strategies for higher search rankings and increased traffic.',
      'Ensured responsive design and cross-browser compatability.',
    ],
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

const Experience = () => {
  return (
    <section className="py-24" id="experience">
      <motion.h1
        className="font-bold text-2xl md:text-4xl"
        initial={{ opacity: 0, x: '100px', filter: 'blur(30px)' }}
        animate={{ opacity: 1, x: '0', filter: 'blur(0px)' }}
        transition={{ bounce: false }}
        viewport={{ once: true }}
      >
        Experience<span className="text-yellow">.</span>
      </motion.h1>
      <motion.p
        className="mt-2"
        initial={{ opacity: 0, x: '100px', filter: 'blur(30px)' }}
        animate={{ opacity: 1, x: '0', filter: 'blur(0px)' }}
        transition={{ bounce: false }}
        viewport={{ once: true }}
      >
        Where I&apos;ve worked throughout the years.
      </motion.p>
      <div className="relative mt-6 grid md:grid-cols-2 gap-4 md:gap-6">
        {experiences.map((experience, index) => {
          const { icon, title, company, startDate, endDate, description, activities } = experience
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
              variants={variants}
              viewport={{ once: true }}
            >
              <div className="relative h-[50px] w-[50px]">
                <Image src={icon} alt={title} fill className="object-contain" />
              </div>
              <div className="flex items-center text-yellow font-bold text-lg mt-3">{title}</div>
              <div
                className={clsx('flex flex-col', {
                  'md:flex-row md:items-center md:justify-between': isFirstIndex,
                })}
              >
                <p className="font-bold">{company}</p>
                <p className="text-xs">
                  {startDate} - {endDate}
                </p>
              </div>
              <p className="mt-3 text-yellow text-xs">Overview</p>
              <p className="mt-1 text-sm">{description}</p>
              <p className="mt-3 text-yellow text-xs">Responsibilities</p>
              <ul className="mt-1 list-disc pl-6 text-sm">
                {activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
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
