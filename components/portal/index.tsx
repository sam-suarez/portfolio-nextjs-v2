'use client'

import { useEffect, useRef, useState } from 'react'
import { PortalProps } from './types'
import { createPortal } from 'react-dom'

const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = useState(false)
  const ref = useRef<Element | null>(null)

  useEffect(() => {
    ref.current = document.getElementById('portal')
    setMounted(true)
  }, [])

  return mounted && ref.current ? createPortal(children, ref.current) : null
}

export default Portal
