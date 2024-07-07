import React from 'react'
import { StackProps } from './types'
import clsx from 'clsx'

const Stack = ({ stack, className = '' }: StackProps) => {
  return (
    <div className={clsx('flex flex-wrap gap-1', className)}>
      {stack?.map((skill, index) => (
        <div key={index} className="bg-green text-green-100 rounded px-2 py-1 text-xs">
          {skill}
        </div>
      ))}
    </div>
  )
}

export default Stack
