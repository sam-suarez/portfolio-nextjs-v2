import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  icon?: ReactNode
  children?: ReactNode
  className?: string
}
