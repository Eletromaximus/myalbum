import React from 'react'
import { Ul } from './styles'
import { Photo } from 'pexels'

interface IPhoto {
  photos: Photo[],
  children: React.ReactChild
}

export default function PhotoList ({ photos, children } : IPhoto) {
  return (
    <Ul>{
      photos && photos.map((photo: any) => (
        <li key={photo.id} >
          <img src={photo.src.medium} />
        </li>
      ))}
      {children}
    </Ul>
  )
}
