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
      {experience?.items.map((experience, index) => {
        const { position, location, type, company, startDate, endDate, overview, stack, url } =
          experience ?? {}
        return (
          <div
            key={index}
            className={clsx(
              'grid p-4 rounded-md md:grid-cols-[180px_1fr] md:gap-6 lg:grid-cols-1 lg:gap-0 xl:grid-cols-[180px_1fr] xl:gap-6 xl:p-6',
              {
                'bg-white-100': endDate,
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
              <div className="flex gap-2 text-xs">
                <div>{location}</div>
                <div>—</div>
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
                  <Link href={url} target="_blank" className="flex gap-1 items-center underline">
                    {company} <ArrowUpRightIcon />
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
