import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './markerDoc.module.css'
const CardDoc = ({description}: any) => {
  console.log(description)
  return (
    <div className={s.containerCard}>
      <div className={s.description}>
        <h4 ><NavLink to={`/doctor/${description.id}`} className={s.linkToDoc}>{description.last_name} {description.first_name}</NavLink></h4>
        <h5 className={s.descriptionItem}>{description.speciality}</h5>
        <h5 className={s.descriptionItem}>{description.adress}</h5>
      </div>
      <div className={s.imageDiv}><img className={s.image} src={`/img/${description.photo}`} alt=""/></div>
    </div>
  )
}

export default CardDoc