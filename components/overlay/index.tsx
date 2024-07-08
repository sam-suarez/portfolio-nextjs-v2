import clsx from 'clsx'
import React from 'react'
import { OverlayProps } from './types'

const Overlay = ({ isShown, handleClose }: OverlayProps) => {
  return (
    <div
      className={clsx('fixed inset-0 bg-black opacity-50 transition-all z-10', {
        'hidden opacity-0': !isShown,
        'visible opacity-100': isShown,
      })}
      onClick={handleClose}
    />
  )
}

export default Overlay
