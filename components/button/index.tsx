import React from 'react'
import { ButtonProps } from './types'

const Button = ({ icon, className, children, onClick, ...props }: ButtonProps) => {
  return (
    <button
      className={`h-9 flex items-center justify-center gap-2 px-4 rounded-lg text-sm ${className}`}
      onClick={onClick}
      {...props}
    >
      {children} {icon ? icon : null}
    </button>
  )
}

export default Button
