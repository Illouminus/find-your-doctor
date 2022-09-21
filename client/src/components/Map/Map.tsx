import React, {useState, useCallback, useRef, useEffect} from 'react'
import styles from './styles.module.css'
import { GoogleMap, Marker, InfoWindow} from '@react-google-maps/api';
import {defaultTheme} from './Theme'
import { CurrentLocation } from '../CurrentLocationMarker/CurrentLocation';
import { MarkerDoc } from '../Marker/Marker';

const containerStyle = {
  width: '25vw',
  height: '60vh',
  
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: true,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme
}

export const MODES = {
  MOVE : 0,
  SET_MARKER: 1
}

const Map = ({ center, mode, markers, onMarkerAdd, }: any ) => {

  console.log(markers);
  
  const mapRef = useRef(undefined)
  const onLoad = React.useCallback(function callback(map: any) {
    mapRef.current = map;
  }, [])
  const onUnmount = React.useCallback(function callback(map : any) {
    mapRef.current = undefined;
  }, [])

  const changeMode = useCallback((loc: any) => {
    // handlerMode()
    if(mode === MODES.SET_MARKER) {
      console.log('ПРИХОДЯЩИЕ КООРДИНАТЫ', loc)
      const lat = Number(loc.latLng.lat())
      const lng = Number(loc.latLng.lng())
      console.log(lat,lng)
      onMarkerAdd({lat,lng})
    }
  }, [mode, onMarkerAdd])
  
  return (
    <div className={styles.container}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={changeMode}
        options={defaultOptions}
      >
        <CurrentLocation  position={center}/>
        { /* Child components, such as markers, info windows, etc. */ }
        {markers.map((pos: any) => {
          return <MarkerDoc description={pos.description} position={pos}>
          </MarkerDoc>
        })}
        <></>
      </GoogleMap>
    </div>
  )
}

export default Map 