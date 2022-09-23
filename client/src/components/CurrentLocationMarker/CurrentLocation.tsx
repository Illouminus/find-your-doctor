import React from 'react'
import { Marker} from '@react-google-maps/api';
 import s from './styles.module.css'

//  label={{text: 'Вы нашли пиздатого врача',  fontSize: '25px', color: 'red' }}

export const CurrentLocation = ({position}: any) => {
  return (
    <Marker position={position} icon={{url: './heart-disease.png'}} />
  )
}

