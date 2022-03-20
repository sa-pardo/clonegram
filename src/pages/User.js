import React, { useContext } from 'react'
import { SubmitButton } from '../components/SumbitButton'
import Context from '../Context'

export const User = () => {
  const { removeAuth } = useContext(Context.Context)
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesion</SubmitButton>
    </>
  )
}
