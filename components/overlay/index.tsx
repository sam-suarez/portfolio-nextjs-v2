import clsx from 'clsx'
import React from 'react'
import { OverlayProps } from './types'

const Overlay = ({ isShown, handleClose }: OverlayProps) => {
  return (
    <div
      className={clsx('transition-all fixed inset-0 bg-black transition-all z-10', {
        'invisible opacity-0': !isShown,
        'visible opacity-60': isShown,
      })}
      onClick={handleClose}
    />
  )
}

export default Overlay
