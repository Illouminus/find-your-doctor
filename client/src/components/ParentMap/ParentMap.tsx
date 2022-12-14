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


const ParentMap = ({docs}: any) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCFjP-ieVgCSib4ZtVd3DIRtfEVMNgxppk",
  })

  const [center, setCenter] = useState(defaultCenter)
  const [mode, setMode] = useState(MODES.MOVE)
  const [markers, setMarkers]: any = useState([])



  const onPlaceSelect = useCallback((coordinates : any) => {
    setCenter(center)
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
    console.log('PARENT MAP COORDINATES', coordinates);
    
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
    <div className={s.mapContainer}>
      <div className={s.searchContainer}>
      <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} handlerMode={handlerMode} onMarkerAdd={onMarkerAdd} docs={docs}/>
      {/* <button onClick={handlerMode}>Сменить режим</button> */}
      </div>
    {isLoaded ?  (<Map handlerMode={handlerMode} center={center} mode={mode} markers={markers} onMarkerAdd={onMarkerAdd} docs={docs}/>): (<h2>Загрузка</h2>)}
    </div>
  )
}

export default ParentMap