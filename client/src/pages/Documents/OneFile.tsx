import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

import s from './styles.module.css'
const OneFile = ({link, deleteHeandler}: any) => {



  return (
    <div className={s.oneItem}><a className={s.href} href={`http://localhost:4000/documents/${link}`} target="_blank" rel="noopener noreferrer">{link}</a><button onClick={() => deleteHeandler(link)}  className={s.delete}>Удалить</button></div>
  )
}

export default OneFile