import React from 'react'
import { useNavigate } from "react-router-dom";
import {IUser} from '../../models/iUser'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '@mui/material/Button';
import s from './styles.module.css'

const ButtonMy = ({color}: any) => {
  const navigate = useNavigate()
  const user : IUser = useTypedSelector(state => state.user.user)
  const {logoutUser, logoutDoc} = useActions()
  return (
    <>
     {user.isDoctor ?
       (<Button sx={{ color: color,  display: 'block' }} 
        className={s.buttonLogout} onClick={() => {
        logoutDoc()
        navigate('/')
      }}>Выход</Button>) 
       :
       (<Button sx={{ color: color, display: 'block' }}
        className={s.buttonLogout}onClick={() => {
        logoutUser()
        navigate('/')
        }}>Выход</Button>)}
    </>
  )
}

export default ButtonMy