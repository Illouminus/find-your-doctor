import React from 'react'
import { Marker,  InfoWindow, } from '@react-google-maps/api';
 import s from './markerDoc.module.css'

//  label={{text: 'Вы нашли пиздатого врача',  fontSize: '25px', color: 'red' }}

export const MarkerDoc = ({position, description}: any) => {
  console.log(position)
  console.log(description)
  return (
    <Marker position={position}  icon={{url: './hopital.png'}}  />
   )
}