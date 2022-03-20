import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import Context from '../Context'
import { useRegisterMutation } from '../container/RegisterMutation'
import { useLoginMutation } from '../container/LoginMutation'
import { useNavigate } from 'react-router-dom'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context.Context)
  const [registerMutation, { data: dataRegister, loading: loadingRegister, error: errorRegister }] = useRegisterMutation()
  const [loginMutation, { data: dataLogin, loading: loadingLogin, error: errorLogin }] = useLoginMutation()

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables })
      .then(({ data }) => {
        const { signup } = data
        activateAuth(signup)
      })
  }

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables })
      .then(({ data }) => {
        const { login } = data
        activateAuth(login)
      })
  }

  return (
    <>
      <UserForm title='Registrarse' disabled={loadingRegister} error={errorRegister} onSubmit={onSubmitRegister} />
      <UserForm title='Iniciar sesión' disabled={loadingLogin} error={errorLogin} onSubmit={onSubmitLogin} />
    </>
  )
}
