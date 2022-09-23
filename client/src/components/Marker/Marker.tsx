import React, {useState} from 'react'
import { Marker,  InfoWindow, } from '@react-google-maps/api';
import s from './markerDoc.module.css'
import { borderRadius } from '@mui/system';
import CardDoc from './CardDoc';

//  label={{text: 'Вы нашли пиздатого врача',  fontSize: '25px', color: 'red' }}
// /img/${description.photo}
export const MarkerDoc = ({position, description}: any) => {
  console.log(position)
  console.log(description)
  const [selectMarker, setSelectMarker] = useState(false)
  console.log('Выбранный маркер', selectMarker)

  const heandlearCard = () => {
    console.log('КЛИКНУЛИ БЛЯТЬ ПО ТЕБЕ')
  }
  const icon = {
    url: `./hopital.png`, // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    
};

  return (
    <>
    <Marker position={position}  icon={icon}  onClick={() => setSelectMarker(prev => !prev)}>
     {selectMarker && 
      <InfoWindow position={position} >
      <CardDoc description={description}/>
    </InfoWindow>
     }
    </Marker>
    </>
   )
}