import React from 'react'
import {IUser} from '../../models/iUser'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import s from './styles.module.css'

const ButtonMy = () => {
  const user : IUser = useTypedSelector(state => state.user.user)
  const {logoutUser, logoutDoc} = useActions()
  return (
    <>
     {user.isDoctor ?
       (<button className={s.buttonLogout} onClick={() => logoutDoc()}>Выход</button>) 
       :
       (<button  className={s.buttonLogout}onClick={() => logoutUser()}>Выход</button>)}
    </>
  )
}

export default ButtonMy