import React, {useState, useCallback, useRef} from 'react'
import styles from './styles.module.css'
import { GoogleMap} from '@react-google-maps/api';


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
}

const Map = ({center}: any ) => {

  const mapRef = useRef(undefined)


  const onLoad = React.useCallback(function callback(map : any) {
    mapRef.current = map;
  }, [])

  const onUnmount = React.useCallback(function callback(map : any) {
    mapRef.current = undefined;
  }, [])

  return (
    <div className={styles.container}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </div>
  )
}

export default Map 