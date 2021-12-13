/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { Grid } from '../components/foundation/layout/Grid'
import client from '../service/service'
import PhotoList from '../components/PhotoList'

import * as S from './style'
import SearchIcon from '@material-ui/icons/Search'
import { debounce } from 'lodash'
import { ErrorResponse, Photo } from 'pexels'

function App () {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState<number>(0)
  const [memory, setMemory] = useState('')

  const intersectionObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      setPage((pageisState) => (pageisState + 1))
    }
  })

  useEffect(() => {
    apiPhotos()
  }, [page])

  useEffect(() => {
    intersectionObserver.observe(document.querySelector('#watcher') as Element)
    return () => intersectionObserver.disconnect()
  }, [])

  async function apiPhotos () {
    if (search) {
      const changeSearch = memory !== search
      await client.photos.search({
        query: search,
        page: page
      })
        .then((result: any) => {
          setPhotos(changeSearch
            ? result.photos
            : (photos) => [...photos, ...result.photos]
          )
          setMemory(search)
        })
        .catch((err: ErrorResponse) => {
          console.log(err)
        })
    }
  }

  function handleClick () {
    if (memory !== search) {
      if (page > 1) {
        setPage(1)
      }
      apiPhotos()
    }
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

          <button onClick={
            () => handleClick()
          }>
            Confirme
          </button>
      </Grid.Container>

        <Grid.Row
          id='ListPhotos'
          marginLeft={scrollX}
        >
          <PhotoList
            photos={photos}
          >
            <li>
            <div
                id='watcher'
                style={{
                  width: '25px',
                  height: '350px'
                }}/>
            </li>
          </PhotoList>
        </Grid.Row>
    </>
  )
}

export default App
