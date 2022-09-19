import React from 'react'
import {Provider} from 'react-redux'
import {store} from './store'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import {RegistrationPage, MainPage, LoginPage, DoctorPage, UserLkPage} from './pages'

import {Layout} from './components'

function App() {
  return (
    <>
        <BrowserRouter>
            <Provider store={store}>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/main" element={ <MainPage /> } />
          <Route path="/registration" element={ <RegistrationPage /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/doctor/:id" element={ <DoctorPage /> }/>
          <Route path="/user/:id" element={ <UserLkPage /> } />
          </Route>
      </Routes>
            </Provider>
            </BrowserRouter>
    </>
  )
}

export default App;
