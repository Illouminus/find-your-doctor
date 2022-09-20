import React, { useState, DragEvent } from 'react'
import styles from './styles.module.css'

const Upload = () => {
  const [drag, setDrag] = useState(false)
  const dragStartHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrag(true)
  }

  const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrag(false)
  }

  const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    let files = e.dataTransfer.files
    const formData = new FormData()
    Array.from(files).forEach(file => formData.append('file', file))
    console.log('FORMDATA', formData);
    setDrag(false)
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