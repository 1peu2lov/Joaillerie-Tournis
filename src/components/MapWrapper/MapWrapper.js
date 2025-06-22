'use client'
import dynamic from 'next/dynamic'

// Lazy load du composant Google Maps avec ssr: false
const GoogleMapComponent = dynamic(() => import('@/components/GoogleMapComponent/GoogleMapComponent'), {
  ssr: false,
  loading: () => (
    <div style={{ 
      height: '400px', 
      background: '#f5f5f5', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      borderRadius: '8px',
      color: '#666',
      fontFamily: 'system-ui, sans-serif'
    }}>
      Chargement de la carte...
    </div>
  )
})

export default function MapWrapper() {
  return <GoogleMapComponent />
} 