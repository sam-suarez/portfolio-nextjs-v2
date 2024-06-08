'use client'

import React, { useEffect } from 'react'
import { MobileMenuProps } from './types'
import clsx from 'clsx'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { animate, stagger } from 'framer-motion'
import Link from 'next/link'

const MobileMenu = ({ isOpen, handleClose, links }: MobileMenuProps) => {
  useEffect(() => {
    animate(
      '.link-item',
      isOpen
        ? { opacity: 1, translate: '0px', filter: 'blur(0px)', scale: 1 }
        : { opacity: 0, translate: '500px', filter: 'blur(30px)', scale: 0.3 },
      {
        duration: 0.2,
        delay: isOpen ? stagger(0.03, { startDelay: 0.15 }) : 0,
      },
    )
  }, [isOpen])

  return (
    <aside
      className={clsx(
        'fixed top-0 bottom-0 right-0 w-full bg-blue-200 z-20 transition-transform duration-150 ease-out md:hidden',
        { 'translate-x-0': isOpen, 'translate-x-full': !isOpen },
      )}
    >
      <div className="p-4 px-5 flex flex-col">
        <button onClick={handleClose} className="ml-auto text-yellow">
          <CloseOutlinedIcon className="h-10 w-10" />
        </button>
        <div className="flex flex-col gap-12 items-start mt-12">
          {links.map(({ label, url, available }, index) => (
            <Link
              href={available ? url : ''}
              key={index}
              className={clsx('link-item text-yellow text-3xl font-bold', {
                'line-through text-blue': !available,
              })}
              style={{ opacity: 0 }}
              onClick={handleClose}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default MobileMenu
