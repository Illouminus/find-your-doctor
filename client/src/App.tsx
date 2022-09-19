import React, { useEffect } from 'react'
import {Provider} from 'react-redux'
import {store} from './store'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import {RegistrationPage, MainPage, LoginPage, DoctorPage, Documents} from './pages'
import {Layout} from './components'
import { useActions } from './hooks/useActions'
import { useTypedSelector } from './hooks/useTypedSelector';
import { IUser } from './models/iUser'



function App() {
  const user : IUser = useTypedSelector(state => state.user.user)
  const {checkAuthUser, checkAuthDoc} = useActions()
  useEffect(() => {
    if(localStorage.getItem('token') && !user.isDoctor) {
      checkAuthUser()
    } else if(localStorage.getItem('token') && user.isDoctor){
      checkAuthDoc()
    }
  }, [])
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
          <Route path="/documents" element={ <Documents />} />
          </Route>
      </Routes>
            </Provider>
            </BrowserRouter>
    </>
  )
}

export default App;
