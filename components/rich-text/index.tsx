import React from 'react'
import { RichTextProps } from './types'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const RichText = ({ content }: RichTextProps) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className="mt-1 text-sm">{children}</p>,
    },
  }

  return <div className="prose">{documentToReactComponents(content, options)}</div>
}

export default RichText
