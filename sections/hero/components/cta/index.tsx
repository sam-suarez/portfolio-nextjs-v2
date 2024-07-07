'use client'

import Button from '@/components/button'
import { ArrowRightIcon } from '@/components/icons'
import { getResume } from '@/utils/general'
import React from 'react'

const CTA = () => {
  return (
    <div className="flex gap-2">
      <Button className="bg-black text-white mt-6" icon={<ArrowRightIcon />}>
        Contact
      </Button>
      <Button className="border border-black text-black mt-6" onClick={getResume}>
        Resume
      </Button>
    </div>
  )
}

export default CTA
