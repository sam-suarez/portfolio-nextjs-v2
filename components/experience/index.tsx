import React from 'react'
import { ExperienceProps } from './types'
import clsx from 'clsx'
import Link from 'next/link'
import { ArrowUpRightIcon } from '../icons'
import RichText from '../rich-text'
import Stack from '../stack'

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div className="grid gap-6">
      {experience?.entriesCollection?.items.map((experience, index) => {
        const { position, location, type, company, startDate, endDate, overview, stack, url } =
          experience ?? {}
        return (
          <div
            key={index}
            className={clsx(
              'grid p-4 rounded-md md:grid-cols-[180px_1fr] md:gap-6 lg:grid-cols-1 lg:gap-0 xl:grid-cols-[180px_1fr] xl:gap-6 xl:p-6',
              {
                'transition-colors bg-white-100 hover:bg-white-200': endDate,
                'bg-black text-white': !endDate,
              },
            )}
          >
            <div>
              <div className="flex gap-2 text-xs uppercase">
                <div>{startDate}</div>
                <div>—</div>
                {endDate ? endDate : <div className="font-bold">PRESENT</div>}
              </div>
              <div className="flex gap-2 text-xs xl:flex-col xl:gap-0 xl:mt-4">
                <div>{location}</div>
                <div className="xl:hidden">—</div>
                <div>{type}</div>
              </div>
            </div>
            <div>
              <div
                className={clsx('flex gap-2 font-bold text-sm', {
                  'text-green-100': !endDate,
                })}
              >
                <div>{position}</div>
                <div>•</div>
                {url ? (
                  <Link
                    href={url}
                    target="_blank"
                    className="group flex gap-1 items-center underline"
                  >
                    {company}{' '}
                    <span className="transition-transform relative group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRightIcon />
                    </span>
                  </Link>
                ) : (
                  <div>{company}</div>
                )}
              </div>
              <RichText className="text-sm mt-4" content={overview?.json} />
              <Stack stack={stack} className="mt-4" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Experience
