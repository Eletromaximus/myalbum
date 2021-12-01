import React from 'react'
import { PhotoStyle } from './styles'

interface IProps {
  url: string
}
export default function Photo ({ url }: IProps) {
  return (
      <PhotoStyle src={url} alt="" />
  )
}
