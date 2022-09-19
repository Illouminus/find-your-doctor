import React from 'react'
import { Upload, Map } from '../../components'
import { useJsApiLoader } from '@react-google-maps/api';

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

  return (
    // <Upload />
    <div>
    {isLoaded ?  (<Map center={defaultCenter}/>): (<h2>Загрузка</h2>)}
    </div>
  )
}

export default Documents