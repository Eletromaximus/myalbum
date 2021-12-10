/* eslint-disable camelcase */
import React, { useState } from 'react'
import { Grid } from '../components/foundation/layout/Grid'
import client from '../service/service'
import PhotoList from '../components/PhotoList'

import * as S from './style'
import SearchIcon from '@material-ui/icons/Search'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { debounce } from 'lodash'
import { ErrorResponse, PhotosWithTotalResults, Photo } from 'pexels'

function App () {
  const [photos, setPhotos] = useState<PhotosWithTotalResults>()
  const [search, setSearch] = useState<string>('')
  const [scrollX, setScrollX] = useState<number>(0)

  function handleArrowRight () {
    const listw = (photos?.total_results as number) * 15
    let x = scrollX - Math.round(window.innerWidth / 2)
    if (listw > -x) {
      x -= 150
      setScrollX(x)
    }
    console.log(-listw, x)
  }

  function handleArrowLeft () {
    let x = scrollX + Math.round(window.innerWidth / 2)
    console.log(scrollX)
    if (x > 0) {
      x = 0
    }

    setScrollX(x)
  }

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
      <Grid.Container>
        <S.Header>
          My Album
        </S.Header>

        <S.Input >
          <SearchIcon />
          <input type="text" onChange={debounce(changeHandler, 500)} />
        </S.Input>

          <button onClick={() => handleClick()} > Confirme </button>
      </Grid.Container>

        <Grid.Row
          id='ListPhotos'
          marginLeft={scrollX}
        >
          <S.ArrowRight
            onClick={() => handleArrowRight()}
          >
            <ArrowForwardIcon style={{ fontSize: 50 }} />
          </S.ArrowRight>

          <S.ArrowLeft
            onClick={() => handleArrowLeft()}
          >
            <ArrowBackIcon style={{ fontSize: 50 }} />
          </S.ArrowLeft>

          {photos && <PhotoList photos={photos.photos as Photo[]} />}
        </Grid.Row>
    </>
  )
}

export default App
