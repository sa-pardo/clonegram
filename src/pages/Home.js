import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardsContainer } from '../container/ListOfPhotoCardsContainer'
import { Layout } from '../components/Layout'

export const Home = () => {
  const params = useParams()
  return (
    <Layout title='App de fotos aleatorias' subtitle='Diviertete viendo una variedad de fotos en Clonegram'>
      <ListOfCategories />
      <ListOfPhotoCardsContainer categoryId={params.id} />
    </Layout>
  )
}
