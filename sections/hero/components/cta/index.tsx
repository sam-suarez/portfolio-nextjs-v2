'use client'

import Button from '@/components/button'
import { ArrowRightIcon } from '@/components/icons'
import Portal from '@/components/portal'
import Contact from '@/sections/contact'
import { getResume } from '@/utils/general'
import React, { useCallback, useState } from 'react'

const CTA = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const toggleForm = useCallback(() => {
    setIsFormOpen(!isFormOpen)
  }, [isFormOpen])

  return (
    <div className="flex gap-2 mt-6">
      <Button icon={<ArrowRightIcon />} onClick={toggleForm}>
        Contact
      </Button>
      <Button variant="outline" onClick={getResume}>
        Resume
      </Button>
      <Portal>
        <Contact isOpen={isFormOpen} handleClose={toggleForm} />
      </Portal>
    </div>
  )
}

export default CTA
