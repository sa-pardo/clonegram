import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { ListOfFavs } from './ListOfFavs'

const GET_FAVS = gql`
 query getFavs {
   favs{
     id
     categoryId
     src
     likes
     userId
   }
 }
`
const useGetFavorites = () => {
  const { data, error, loading } = useQuery(GET_FAVS, { fetchPolicy: 'cache-and-network' })
  return { data, loading, error }
}

export const RenderProp = () => {
  const { loading, data, error } = useGetFavorites()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  const { favs } = data

  return <ListOfFavs favs={favs} />
}
