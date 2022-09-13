import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import {RegistrationPage, MainPage, LoginPage} from './pages'

import {Layout} from './components'

function App() {
  return (
    <>
        <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/main" element={ <MainPage /> } />
          <Route path="/registration" element={ <RegistrationPage /> } />
          <Route path="/login" element={ <LoginPage /> } />
          </Route>
      </Routes>
            </BrowserRouter>
    </>
  )
}

export default App;
