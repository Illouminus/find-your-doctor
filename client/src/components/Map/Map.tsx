import React, {useState, useCallback, useRef} from 'react'
import styles from './styles.module.css'
import { GoogleMap, Marker} from '@react-google-maps/api';
import {defaultTheme} from './Theme'
import { CurrentLocation } from '../CurrentLocationMarker/CurrentLocation';
import { MarkerDoc } from '../Marker/Marker';

const containerStyle = {
  width: '400px',
  height: '800px'
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

const Map = ({center, mode, markers, onMarkerAdd}: any ) => {

  const mapRef = useRef(undefined)


  const onLoad = React.useCallback(function callback(map: any) {
    mapRef.current = map;
  }, [])

  const onUnmount = React.useCallback(function callback(map : any) {
    mapRef.current = undefined;
  }, [])

  const changeMode = useCallback((loc: any) => {
    if(mode === MODES.SET_MARKER) {
      console.log(loc)
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
          return <MarkerDoc  position={pos}/>
        })}
        <></>
      </GoogleMap>
    </div>
  )
}

export default Map 