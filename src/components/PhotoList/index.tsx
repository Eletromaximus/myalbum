import React from 'react'
import { Ul } from './styles'
import { Photo } from 'pexels'

interface IPhoto {
  photos: Photo[]
}

export default function PhotoList ({ photos } : IPhoto) {
  return (
    <Ul>{
      photos && photos.map((photo: any) => (
        <li key={photo.id} >
          <img src={photo.src.medium} />
        </li>
      ))}
    </Ul>
  )
}
