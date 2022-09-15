import React, {FC, useState} from 'react'
import { useActions } from '../../hooks/useActions'

const MyTestForm: FC = () => {
  const [email, setEmail] =useState<string>('')
  const [password, SetPassword] =useState<string>('')



  const {loginUser, registerUser} = useActions()
  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} 
        type="text" 
        placeholder="Enter your e-mail" 
        value={email}
      />
      <input onChange={(e) => SetPassword(e.target.value)} 
        type="password" 
        placeholder="Enter your password" 
        value={password}
      />
      <button onClick={() => loginUser(email, password)}>Логин</button>
      <button onClick={() => registerUser(email, password)}>Регистрация</button>
    </div>
  )
}

export default MyTestForm