import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import s from './styles.module.css'
const OneFile = ({link, deleteHeandler}: any) => {
  const user = useTypedSelector(state => state.user.user)


  return (
    <div className={s.oneItem}><a className={s.href} href={`http://localhost:4000/documents/${link.link}`} target="_blank" rel="noopener noreferrer">{link.link}</a>{!user.isDoctor && <button onClick={() => deleteHeandler(link)}  className={s.delete}>Удалить</button>}</div>
  )
}

export default OneFile