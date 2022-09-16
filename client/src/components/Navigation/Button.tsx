import React from 'react'
import {IUser} from '../../models/iUser'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector';


const ButtonMy = () => {
  const user : IUser = useTypedSelector(state => state.user.user)
  const {logoutUser, logoutDoc} = useActions()
  return (
     <button>{user.isDoctor ? (<button onClick={() => logoutDoc()}>Выход</button>) : (<button onClick={() => logoutUser()}>Выход</button>)}</button>
  )
}

export default ButtonMy