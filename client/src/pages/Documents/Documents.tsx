import React, { useCallback, useEffect, useState } from 'react'
import { Upload, Map, } from '../../components'
import {MODES} from '../../components/Map/Map'
import { useJsApiLoader } from '@react-google-maps/api';
import s from './styles.module.css'
import { Autocomplete } from '../../components/Autocomplete/Autocomplete';
import {getBrowserLocation} from '../../utils/geo'

const GOOGLE_API = process.env.REACT_APP_GOOGLE_API

const defaultCenter = {
  lat: -3.745,
  lng: -38.523
};

const libraries  = ['places']


const Documents = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCFjP-ieVgCSib4ZtVd3DIRtfEVMNgxppk",
  })

  const [center, setCenter] = useState(defaultCenter)
  const [mode, setMode] = useState(MODES.MOVE)
  const [markers, setMarkers]: any = useState([])



  const onPlaceSelect = useCallback((coordinates : any) => {
    console.log(coordinates);
    
    setCenter(coordinates)
  }, 
  [])


const handlerMode = useCallback(() => {
    switch (mode) {
      case MODES.MOVE:
        setMode(MODES.SET_MARKER)
        break;
      case MODES.SET_MARKER:
        setMode(MODES.MOVE)
        break;
      default:
        setMode(MODES.MOVE)
    }
    console.log(mode);
    
  }, [mode])

  const onMarkerAdd = useCallback((coordinates :any) =>{
    setMarkers([...markers, coordinates])
  }, [markers])

  useEffect(() => {
    getBrowserLocation().then((curLoc :any) => {
      setCenter(curLoc)
    })
    .catch((defaultLocation) => {
      setCenter(defaultLocation)
    })
  }, [])

  return (
    <div>
      <Upload />
      <div className={s.searchContainer}>
      <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect}/>
      <button onClick={handlerMode}>Сменить режим</button>
      </div>
    {isLoaded ?  (<Map center={center} mode={mode} markers={markers} onMarkerAdd={onMarkerAdd}/>): (<h2>Загрузка</h2>)}
    </div>
  )
}

export default Documents