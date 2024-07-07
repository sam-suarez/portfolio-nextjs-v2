import React from 'react'
import { RichTextProps } from './types'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const RichText = ({ content, className = '' }: RichTextProps) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        return <p className={`mb-4 last-of-type:mb-0 ${className}`}>{children}</p>
      },
    },
  }

  return documentToReactComponents(content, options)
}

export default RichText
