import React from 'react'

import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCardsContainer } from './container/ListOfPhotoCardsContainer'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId
        ? <PhotoCardWithQuery id={detailId} />
        : <>
          <ListOfCategories />
          <ListOfPhotoCardsContainer categoryId={2} />
          </>}
    </>
  )
}
