/* eslint-disable camelcase */
import React /*, { useState } */ from 'react'
import { Grid } from '../components/foundation/layout/Grid'
// import Photo from '../components/Photo'
// import client from '../service/service'

import * as S from './style'
import SearchIcon from '@material-ui/icons/Search'

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
//     },
//   liked: boolean
// }

function App () {
  // const [photo, setPhoto] = useState<IPhoto | undefined>()

  // function apiPhotos () {
  //   client.photos.show({ id: 3764579 })
  //     .then((img: any) => {
  //       setPhoto(img)
  //     })
  //     .catch((err: Error) => {
  //       console.log(err.message)
  //     })
  // }

  function handleKeyPress (e: any) {
    e.preventDefault()
    if (e.key === 'Enter') {
      e.target.value = ''
    }
  }

  return (
    <Grid.Container
      className='App'
    >
      <S.Header>
        My Album
      </S.Header>
      <S.Input >
        <SearchIcon />
        <input type="text" onKeyUp={(e: any) => handleKeyPress(e)} />
      </S.Input>
      {/* {photo?.src && <Photo url={photo?.src.medium}/>} */}
    </Grid.Container>
  )
}

export default App
