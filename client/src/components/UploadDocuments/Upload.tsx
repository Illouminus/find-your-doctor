import axios from 'axios'
import React, { useState, DragEvent } from 'react'
import styles from './styles.module.css'

const Upload = ({id}: any) => {
  console.log(id);
  
  const [drag, setDrag] = useState(false)
  const dragStartHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrag(true)
  }

  const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrag(false)
  }

  const onDropHandler = async(e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    let files = e.dataTransfer.files
    console.log(files);
    
    const formData = new FormData()
    formData.append('id', id)
    Array.from(files).forEach(file => formData.append('file', file))
    setDrag(false)
    console.log(formData);
    // 'http://localhost:4000/api/files'
    const response = await axios.post('https://httpbin.org/anything', formData)
    console.log(response);
  }

  return (
    <div 
          className={styles.drag}
          onDragStart={e => dragStartHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragStartHandler(e)}
          onDrop={e => onDropHandler(e)}
          >
      { drag 
      ? <div 
          onDragStart={e => dragStartHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragStartHandler(e)}
          className={styles.drop}>Отпустите файлы для их загрузки</div>
      : <div className={styles.take}>Перетащите файлы для их загрузки</div>
      }
    </div>
  )
}

export default Upload