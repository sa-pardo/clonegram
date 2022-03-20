/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import Context from './Context'

export const App = () => {
  const { isAuth } = useContext(Context.Context)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      {
        isAuth
          ? <>
            <Route path='/favs' element={<Favs />} />
            <Route path='/user' element={<User />} />
          </>
          : <>
            <Route path='/favs' element={<NotRegisteredUser />} />
            <Route path='/user' element={<NotRegisteredUser />} />
          </>
      }
      </Routes>
      <NavBar />
    </>
  )
}
