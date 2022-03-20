/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React, { useContext, useEffect, Suspense } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
// import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import Context from './Context'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs').then(module => ({ default: module.Favs })))

export const App = () => {
  const { isAuth } = useContext(Context.Context)
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  }, [isAuth])
  return (
    <Suspense fallback={<h1>Cargando</h1>}>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        {!isAuth && <Route path='/login' element={<NotRegisteredUser />} />}
        {!isAuth && <Route path='/favs' element={<Navigate to='/login' />} />}
        {!isAuth && <Route path='/user' element={<Navigate to='/login' />} />}
        <Route path='/favs' element={<Favs />} />
        <Route path='/user' element={<User />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <NavBar />
    </Suspense>
  )
}
