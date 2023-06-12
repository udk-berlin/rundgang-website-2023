import React, { useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import maplibregl from 'maplibre-gl'

import styles from '@/styles/components/map/Map.module.css'

import ResponsiveMarker from '@/components/map/marker'

const MAP_CONFIGURATION = {
  style: 'https://api.maptiler.com/maps/06aff06f-bb9b-4079-9249-48c949cefa44/style.json?key=a8EEiDlcUdsARq8hI6PH',
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
      locations.forEach(location => {
        const marker = document.createElement('div')
        createRoot(marker).render(<ResponsiveMarker location={location} />)

        new maplibregl.Marker({ element: marker, pitchAlignment: 'map' })
          .setLngLat(
            [
              location.allocation.physical[0].lng,
              location.allocation.physical[0].lat
            ]
          )
          .addTo(mapRef.current)
      })
    })

    mapRef.current.addControl(new maplibregl.NavigationControl(), 'bottom-right')
  })

  return (
        <>
            <div ref={mapContainerRef} className={styles.container}/>
        </>
  )
}
