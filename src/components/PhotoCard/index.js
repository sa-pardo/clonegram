import React from 'react'
import { Link } from 'react-router-dom'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useMutationToggleLike } from '../../container/ToggleLikeMutation'

export const PhotoCard = ({ id, liked, likes = 0, src }) => {
  const [show, ref] = useNearScreen()
  const { mutation } = useMutationToggleLike()

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }

  return (
    <Article ref={ref}>
      {show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />

        </>}
    </Article>
  )
}
