import React, { useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import maplibregl from 'maplibre-gl'

import styles from '@/styles/pages/locations/map/Map.module.css'

import ResponsiveMarker from '@/components/pages/locations/map/marker'
import Popup from '@/components/pages/locations/map/popup/popup'

const MAP_CONFIGURATION = {
  style: 'https://api.maptiler.com/maps/d450193f-53a4-40fc-8f3f-97a0321d7139/style.json?key=Zn4TzWj4KtRhJ9I5TDxf',
  bounds: {
    longitude: { min: 13.2397254, max: 13.4871903 },
    latitude: { min: 52.442394, max: 52.586099 }
  },
  center: {
    longitude: 13.384236255348906,
    latitude: 52.48817872121975
  }
}

export default function Map ({ locations }) {
  const mapContainerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    mapRef.current = new maplibregl.Map(
      {
        container: mapContainerRef.current,
        style: MAP_CONFIGURATION.style,
        maxBounds: [[MAP_CONFIGURATION.bounds.longitude.min, MAP_CONFIGURATION.bounds.latitude.min], [MAP_CONFIGURATION.bounds.longitude.max, MAP_CONFIGURATION.bounds.latitude.max]],
        center: [MAP_CONFIGURATION.center.longitude, MAP_CONFIGURATION.center.latitude],
        zoom: 12,
        maxZoom: 18,
        minZoom: 10,
        pitchWithRotate: false,
        clickTolerance: 7,
        dragRotate: false,
        boxZoom: false,
        touchPitch: false
      }
    )

    mapRef.current.on('load', () => {
      Object.values(locations).slice(0,-1).forEach(location => {
        const marker = document.createElement('div')
        createRoot(marker).render(<ResponsiveMarker location={location} />)

        new maplibregl.Marker({ element: marker, pitchAlignment: 'map' })
          .setLngLat([location.lng, location.lat])
          .addTo(mapRef.current)
      })

      mapRef.current.on('click', e => {
        Object.values(locations).slice(0,-1).forEach(location => {
          const otherElement = document.getElementById(`popup-${location.id}`)
          otherElement.style.display = 'none'
        })
        if (e.originalEvent.target.id) {
          const id = e.originalEvent.target.id.replaceAll('marker-', '')
          const popupElement = document.getElementById(`popup-${id}`)
          popupElement.style.display = 'inline'
        }
      })
    })
  })

  return (
    <>
      <div ref={mapContainerRef} className={styles.container}/>
      <div>{Object.values(locations).slice(0,-1).map(location => <Popup location={location} />)}</div>
    </>
  )
}
