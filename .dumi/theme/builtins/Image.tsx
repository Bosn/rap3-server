import React from 'react'
import { Image } from 'antd'

export default function({ src, width }: { src: string; width?: string }) {
  console.log(`width=${width} src=${src}`)
  return (
    <Image
      width={parseInt(width, 10) ?? 750}
      src={src}
      style={{ margin: '8px 0', borderRadius: '15px' }}
    />
  )
}
