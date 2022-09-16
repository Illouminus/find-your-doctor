import React, { useEffect } from 'react'
import {Provider} from 'react-redux'
import {store} from './store'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import {RegistrationPage, MainPage, LoginPage, DoctorPage} from './pages'
import {Layout} from './components'
import { useActions } from './hooks/useActions'

function App() {
  const {checkAuth} = useActions()
  useEffect(() => {
    if(localStorage.getItem('token')) {
      checkAuth()
    }
  }, [])
  return (
    <>
    <h1>Привет</h1>
        <BrowserRouter>
            <Provider store={store}>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/main" element={ <MainPage /> } />
          <Route path="/registration" element={ <RegistrationPage /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/doctor/:id" element={ <DoctorPage /> }/>
          </Route>
      </Routes>
            </Provider>
            </BrowserRouter>
    </>
  )
}

export default App;
