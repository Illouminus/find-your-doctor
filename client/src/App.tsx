import React, { useEffect } from 'react'
import {Provider} from 'react-redux'
import {store} from './store'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

import {
    RegistrationPage,
    MainPage,
    LoginPage,
    DoctorPage,
    UserLkPage,
    Documents,
    AppointmentsPage,
    SetTimetablePage
} from './pages'

import {Layout} from './components'
import { useActions } from './hooks/useActions'
import { useTypedSelector } from './hooks/useTypedSelector';
import { IUser } from './models/iUser'
import DoctorLkPage from './pages/DoctorPage/DoctorLkPage'



function App() {
  const user : IUser = useTypedSelector(state => state.user.user)
  const {checkAuthUser, checkAuthDoc} = useActions()
  // console.log(user.isDoctor)

  useEffect(() => {
    if(localStorage.getItem('token') && !localStorage.getItem('isDoctor')) {
     checkAuthUser()
    } else if (localStorage.getItem('token') && localStorage.getItem('isDoctor')){
      checkAuthDoc()
    }
  }, [])
  return (
    <>
        <BrowserRouter>
            <Provider store={store}>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={ <MainPage /> } />
          <Route path="/registration" element={ <RegistrationPage /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/doctor/:id" element={<DoctorPage />} />
          <Route path="/appointments" element={ <AppointmentsPage /> } />
          <Route path="/documents" element={ <Documents />} />
          <Route path="/user/:id" element={ <UserLkPage /> } />
              <Route path="/timetable/" element={ <SetTimetablePage /> } />
          <Route path="/doctor/lk/:id" element={<DoctorLkPage />} />
      </Routes>
            </Provider>
            </BrowserRouter>
    </>
  )
}

export default App;
