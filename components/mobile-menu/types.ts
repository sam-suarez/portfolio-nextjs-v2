import { NavLink } from '@/sections/header/types'
import { ReactNode } from 'react'

export interface MobileMenuProps {
  isOpen: boolean
  handleClose?: () => void
  links: NavLink[]
}
