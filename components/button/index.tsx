import React from 'react'
import { ButtonProps } from './types'
import clsx from 'clsx'
import Link from 'next/link'

const Button = ({ icon, className, children, variant = 'default', onClick, url }: ButtonProps) => {
  const classNames = {
    className: clsx(
      'group flex items-center justify-center gap-2 px-6 py-2 rounded-lg text-sm transition-colors',
      {
        'border border-black text-black hover:bg-black-100 hover:text-white': variant === 'outline',
        'bg-black text-white hover:bg-black-100': variant === 'default',
        'bg-green-100 text-green': variant === 'dark',
      },
      className,
    ),
  }

  if (url) {
    return (
      <Link href={url} {...classNames}>
        {children} {icon && <span className="transition-all group-hover:ml-2">{icon}</span>}
      </Link>
    )
  }

  return (
    <button onClick={onClick} {...classNames}>
      {children} {icon && <span className="transition-all group-hover:ml-2">{icon}</span>}
    </button>
  )
}

export default Button
