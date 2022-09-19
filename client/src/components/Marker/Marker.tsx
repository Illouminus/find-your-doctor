import React from 'react'
import { Marker } from '@react-google-maps/api';
 import s from './markerDoc.module.css'

//  label={{text: 'Вы нашли пиздатого врача',  fontSize: '25px', color: 'red' }}

export const MarkerDoc = ({position}: any) => {
  console.log(position)
  return (
    <Marker position={position}  icon={{url: './hopital.png'}} />
  )
}

