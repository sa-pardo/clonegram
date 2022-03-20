import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
      <UserLogged>
        {
          ({ isAuth }) => (
            isAuth
              ? <Routes>
                <Route path='/favs' element={<Favs />} />
                <Route path='/user' element={<User />} />
              </Routes>
              : <Routes>
                <Route path='/favs' element={<NotRegisteredUser />} />
                <Route path='/user' element={<NotRegisteredUser />} />
              </Routes>
          )
        }
      </UserLogged>
      <NavBar />
    </>
  )
}
