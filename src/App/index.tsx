/* eslint-disable camelcase */
import React, { useState } from 'react'
import { Grid } from '../components/foundation/layout/Grid'
// import Photo from '../components/Photo'
import client from '../service/service'

import * as S from './style'
import SearchIcon from '@material-ui/icons/Search'
import { debounce } from 'lodash'
import { ErrorResponse, PhotosWithTotalResults } from 'pexels'

// interface IPhoto {
//   id: number,
//   width: number,
//   height: number,
//   url: string,
//   photographer: string,
//   photographer_url: string,
//   photographer_id: number,
//   avg_color: string,
//   src: {
//     original: string,
//     large2x: string,
//     large: string,
//     medium: string,
//     small: string,
//     portrait: string,
//     landscape: string,
//     tiny: string
//   },
//   liked: boolean
// }
// interface IPhotos {
//   total_results: number,
//   page: number,
//   per_page: number,
//   photos: IPhoto,
//   next_page: string
// }

function App () {
  const [photos, setPhotos] = useState<PhotosWithTotalResults>()
  const [search, setSearch] = useState<string>('')

  async function apiPhotos () {
    await client.photos.search({
      query: search
    })
      .then((result: any) => {
        setPhotos(result)
      })
      .catch((err: ErrorResponse) => {
        console.log(err)
      })
  }

  function handleClick () {
    apiPhotos()
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <Grid.Container
        className='App'
      >
        <S.Header>
          My Album
        </S.Header>
        <S.Input >
          <SearchIcon />
          <input type="text" onChange={debounce(changeHandler, 500)} />
        </S.Input>
          <button onClick={() => handleClick()} > Confirme </button>
      </Grid.Container>

        <Grid.Row>
          <S.Ul>{
            photos && photos.photos.map((photo: any) => (
              <li key={photo.id} >
                <img src={photo.src.medium} />
              </li>
            ))}
          </S.Ul>
        </Grid.Row>
    </>
  )
}

export default App
