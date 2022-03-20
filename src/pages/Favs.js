import React from 'react'
import { Layout } from '../components/Layout'
import { RenderProp } from '../container/GetFavorites'

export const Favs = () => {
  return (
    <Layout title='Tus Favoritos' subtitle='Aqui veras tus imagenes favoritas'>
      <RenderProp />
    </Layout>
  )
}
