import React from 'react'
import { SocialsProps } from './types'
import { SOCIALS } from '@/constants/general'
import Link from 'next/link'
import clsx from 'clsx'

const Socials = ({ className }: SocialsProps) => {
  return (
    <div className={clsx('flex gap-4', className)}>
      {SOCIALS.map(({ url, icon }, index) => (
        <Link href={url} target="_blank" key={index}>
          {icon()}
        </Link>
      ))}
    </div>
  )
}

export default Socials
