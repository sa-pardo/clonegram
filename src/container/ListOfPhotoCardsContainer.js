import React from 'react'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { useGetPhotos } from '../hooks/useGetPhotos'

export function ListOfPhotoCardsContainer ({ categoryId }) {
  const { loading, error, data } = useGetPhotos(categoryId)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <ListOfPhotoCards data={data} />
  )
}
