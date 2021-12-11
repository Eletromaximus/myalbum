/* eslint-disable camelcase */
import React, { useEffect, useRef, useState } from 'react'
import { Grid } from '../components/foundation/layout/Grid'
import client from '../service/service'
import PhotoList from '../components/PhotoList'

import * as S from './style'
import SearchIcon from '@material-ui/icons/Search'
import { debounce } from 'lodash'
import { ErrorResponse, PhotosWithTotalResults, Photo } from 'pexels'

function App () {
  const [photos, setPhotos] = useState<PhotosWithTotalResults>()
  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [scrollRadio, setScrollRadio] = useState<number>()
  const observer = useRef()

  const intersectionObserver = new IntersectionObserver((entries) => {
    const radio = entries[0].intersectionRatio
    setScrollRadio(radio)
    setPage(page + 1)
  })

  useEffect(() => {
    // const watcher = document.querySelector('#watcher')
    intersectionObserver.observe(document.querySelector('#watcher') as Element)
    console.log(observer.current, scrollRadio)
    return () => intersectionObserver.disconnect()
  }, [])

  async function apiPhotos () {
    await client.photos.search({
      query: search,
      page: page
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
        {scrollRadio}
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
          {photos && <PhotoList
            photos={photos.photos as Photo[]
          }>
            <li>
              <div
                id='watcher'
                ref={observer.current}
                style={{
                  width: '25px',
                  height: '350px'
                }}/>
            </li>
          </PhotoList>}
        </Grid.Row>
    </>
  )
}

export default App
