'use client'

import React, { useState } from 'react'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined'
import Button from '@/components/button'
import MobileMenu from '@/components/mobile-menu'
import { NavLink } from './types'
import { useToggleBodyScroll } from '@/hooks/useDisableBodyScroll'
import Link from 'next/link'
import { getResume } from '@/utils/general'
import clsx from 'clsx'

const NAV_LINKS: NavLink[] = [
  {
    label: 'Skills.',
    url: '/skills',
    available: true,
  },
  {
    label: 'Experience.',
    url: '/experience',
    available: true,
  },
  {
    label: 'Projects.',
    url: '/projects',
    available: false,
  },
  {
    label: 'Contact.',
    url: '/contact',
    available: true,
  },
]

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const onMobileMenuClose = () => {
    setIsMobileMenuOpen(false)
  }

  useToggleBodyScroll(isMobileMenuOpen)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 py-4 md:py-6 z-10">
        <div className="mx-auto max-w-screen-lg px-5 md:px-10 flex items-center justify-between">
          <Link href="/">
            <div className="text-2xl font-bold">
              sam<span className="text-yellow">.</span>
            </div>
          </Link>
          <button
            className="flex md:hidden flex-col gap-1 p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <div className="bg-yellow h-0.5 w-6 rounded" />
            <div className="bg-yellow h-0.5 w-6 rounded" />
            <div className="bg-yellow h-0.5 w-6 rounded" />
          </button>
          <nav className="hidden md:flex md:items-center gap-[30px]">
            {NAV_LINKS.map(({ label, url, available }, index) => (
              <Link
                href={available ? url : ''}
                className={clsx('text-sm', { 'line-through text-blue': !available })}
                key={index}
              >
                {label}
              </Link>
            ))}
            <Button
              className="bg-yellow text-black"
              icon={<ArrowRightAltOutlinedIcon />}
              onClick={getResume}
            >
              Resume
            </Button>
          </nav>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} handleClose={onMobileMenuClose} links={NAV_LINKS} />
    </>
  )
}

export default Header
