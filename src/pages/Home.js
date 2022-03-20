import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardsContainer } from '../container/ListOfPhotoCardsContainer'

export const Home = () => {
  const params = useParams()
  console.log(params)
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsContainer categoryId={params.id} />
    </>
  )
}
