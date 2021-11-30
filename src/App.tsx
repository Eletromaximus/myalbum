import React, { useEffect } from 'react'
import client from './service/service'
import * as S from './style'

function App () {
  // const [photho, setPhoto] = useState('')

  useEffect(() => {
    client.photos.show({ id: 9367231 })
      .then((photo: any) => {
        console.log(photo)
      })
      .catch((err: Error) => {
        console.log(err.message)
      })
  })

  return (
    <S.App className="App">
      <S.Header>
        My Album
      </S.Header>

    </S.App>
  )
}

export default App
