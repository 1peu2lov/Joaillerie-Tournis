'use client'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 44.8563, // Coordonnées de Bordeaux
  lng: -0.5714
}

export default function GoogleMapComponent() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
} 