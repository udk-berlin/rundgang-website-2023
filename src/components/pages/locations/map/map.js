import React, { useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import maplibregl from 'maplibre-gl'
import styled from 'styled-components'

import { useFilterDispatch } from '@/providers/filter'
import ResponsiveMarker from '@/components/pages/locations/map/marker'

const MAP_CONFIGURATION = {
  style: 'https://api.maptiler.com/maps/d450193f-53a4-40fc-8f3f-97a0321d7139/style.json?key=Zn4TzWj4KtRhJ9I5TDxf',
  bounds: {
    longitude: { min: 13.1397254, max: 13.5871903 },
    latitude: { min: 52.442394, max: 52.586099 }
  },
  center: {
    longitude: 13.369633,
    latitude: 52.515813
  }
}

const LOCATION_ID_TO_MAX_ZOOM = {
  '!uAswzmPHWtAVmjhIYx:content.udk-berlin.de': 15.4,
  '!hjTkjNaIDkzxNWQZTR:content.udk-berlin.de': 15.8,
  '!XaBVrlwEHUifKOmMPa:content.udk-berlin.de': 14.1,
  '!aLyedVYnhynRwlhXUm:content.udk-berlin.de': 14.7,
  '!amwvMUTwucDiRylpJQ:content.udk-berlin.de': 13.7,
  '!LiVonEpyzckeIAyOIb:content.udk-berlin.de': 14.66,
  '!cUpdRzxCGmLkwfrUeq:content.udk-berlin.de': 15.2,
  '!FYglBKPJHZGUNIYcBt:content.udk-berlin.de': 15.45,
  '!fwsuOeorRCZtTqwukc:content.udk-berlin.de': 16.8,
  '!ozXLGbrpCVNrRScjQJ:content.udk-berlin.de': 15.6,
  '!nOMmizEAkvzoapuqCK:content.udk-berlin.de': 15.89,
  '!PkpdUouHNyPWmVReTC:content.udk-berlin.de': 18,
  '!dYAxemkkcQCGTMQgTS:content.udk-berlin.de': 14.4,
  '!FqPOhaHHAjYeliMfOU:content.udk-berlin.de': 16,
  '!bwyfqxrdHCbwOYLLgp:content.udk-berlin.de': 14.4,
  '!jocCvZKGntdCmvmmUG:content.udk-berlin.de': 15.2,
}

const LOCATION_ID_TO_LNG_LAT = {
  '!uAswzmPHWtAVmjhIYx:content.udk-berlin.de': {lng: 13.3290, lat: 52.5098},
  '!hjTkjNaIDkzxNWQZTR:content.udk-berlin.de': {lng: 13.32299, lat: 52.5169},
  '!XaBVrlwEHUifKOmMPa:content.udk-berlin.de': {lng: 13.3299, lat: 52.498635},
  '!aLyedVYnhynRwlhXUm:content.udk-berlin.de': {lng: 13.32215, lat: 52.51705},
  '!amwvMUTwucDiRylpJQ:content.udk-berlin.de': {lng: 13.327300406397331, lat: 52.50967152502669},
  '!LiVonEpyzckeIAyOIb:content.udk-berlin.de': {lng: 13.3588243, lat: 52.4908045},
  '!cUpdRzxCGmLkwfrUeq:content.udk-berlin.de': {lng: 13.32859, lat: 52.50939},
  '!FYglBKPJHZGUNIYcBt:content.udk-berlin.de': {lng: 13.329011660461106, lat: 52.513815995810795},
  '!fwsuOeorRCZtTqwukc:content.udk-berlin.de': {lng: 13.323453006016974, lat: 52.511295526569526},
  '!ozXLGbrpCVNrRScjQJ:content.udk-berlin.de': {lng: 13.332849698118526, lat: 52.49982823444154},
  '!nOMmizEAkvzoapuqCK:content.udk-berlin.de': {lng: 13.30389, lat: 52.52441},
  '!PkpdUouHNyPWmVReTC:content.udk-berlin.de': {lng: 13.322278932541101, lat: 52.5129644934866},
  '!dYAxemkkcQCGTMQgTS:content.udk-berlin.de': {lng: 13.376558909891168, lat: 52.49975612059813},
  '!FqPOhaHHAjYeliMfOU:content.udk-berlin.de': {lng: 13.3748, lat: 52.5517},
  '!bwyfqxrdHCbwOYLLgp:content.udk-berlin.de': {lng: 13.322555087168652, lat: 52.51741297926878},
  '!jocCvZKGntdCmvmmUG:content.udk-berlin.de': {lng: 13.3281, lat: 52.50895},
}

const LOCATION_ID_TO_ORDER_MAPPER = {
  '!amwvMUTwucDiRylpJQ:content.udk-berlin.de': -1,
}


export default function LocationsMap ({ locations }) {
  const mapContainerRef = useRef(null)
  const mapRef = useRef(null)
  const dispatch = useFilterDispatch()
  const markersCache = {'groundPlan': {}, 'text': {}};

  useEffect(() => {
    mapRef.current = new maplibregl.Map(
      {
        container: mapContainerRef.current,
        style: MAP_CONFIGURATION.style,
        maxBounds: [[MAP_CONFIGURATION.bounds.longitude.min, MAP_CONFIGURATION.bounds.latitude.min], [MAP_CONFIGURATION.bounds.longitude.max, MAP_CONFIGURATION.bounds.latitude.max]],
        center: [MAP_CONFIGURATION.center.longitude, MAP_CONFIGURATION.center.latitude],
        zoom: 12.5,
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
      mapRef.current.resize();
      Object.values(locations).sort(sortById).forEach(location => {
        markersCache['groundPlan'][location.id] = buildMarker(mapRef, location, markersCache['groundPlan'], false)
      })

      Object.values(locations).sort(sortById).forEach(location => {
        markersCache['text'][location.id] = buildMarker(mapRef, location, markersCache['text'], true)
      })

      mapRef.current.on("zoom", () => {
        setTimeout(() => {
          let zoom = mapRef.current.getZoom();
          if (zoom > 13.6) {
            Object.values(locations).sort(sortById).forEach(location => {
              const scale = zoom - LOCATION_ID_TO_MAX_ZOOM[location.id];
              if (scale !== markersCache['groundPlan'][location.id].scale && scale > 0) {
                markersCache['groundPlan'][location.id].scale = scale;
                markersCache['groundPlan'][location.id].markerRoot.render(
                  <ResponsiveMarker location={location} scale={scale} />
                );
              } else if (markersCache['groundPlan'][location.id].scale > 0 && scale <= 0) {
                markersCache['groundPlan'][location.id].scale = scale;
                markersCache['groundPlan'][location.id].markerRoot.render(
                  <ResponsiveMarker location={location} />
                );
              }
            });
          }
        }, 500);
      });

      mapRef.current.on('click', e => {
        if (e.originalEvent.target.id) {
          const id = e.originalEvent.target.id.replaceAll('marker-', '')

          dispatch(
            {
              type: 'filter-location',
              location: locations[id]
            })
        } else {
          dispatch(
            {
              type: 'all-locations'
            })
        }
      })
    })
  })

  return <MapContainer ref={mapContainerRef}/>
}

const MapContainer = styled.div`
  height: var(--locations-map-height);
  min-height: var(--locations-map-height);
  width: 100%;
  min-width: 100%;

  overflow: hidden;
`

function buildMarker (mapRef, location, cache, useTextBox) {
  const marker = document.createElement('div')
  let markerRoot

  if (location.id in cache) {
    markerRoot = cache[location.id].markerRoot;
  } else {
    markerRoot = createRoot(marker);
  }

  markerRoot.render(<ResponsiveMarker location={location} useTextBox={useTextBox} />)

  let lng = location.id in LOCATION_ID_TO_LNG_LAT ? LOCATION_ID_TO_LNG_LAT[location.id].lng : location.lng
  let lat = location.id in LOCATION_ID_TO_LNG_LAT ? LOCATION_ID_TO_LNG_LAT[location.id].lat : location.lat
  if (useTextBox) {
    lng = lng - 0.0002
    lat = lat - 0.0002
  }

  new maplibregl.Marker({ element: marker, pitchAlignment: 'map' })
    .setLngLat([lng, lat])
    .addTo(mapRef.current)

  return { marker, markerRoot, scale: 0 };
}

export function sortById(a, b) {
  const orderA = a.id in LOCATION_ID_TO_ORDER_MAPPER ? LOCATION_ID_TO_ORDER_MAPPER[a.id] : 0
  const orderB = b.id in LOCATION_ID_TO_ORDER_MAPPER ? LOCATION_ID_TO_ORDER_MAPPER[b.id] : 0
  console.log()

  if (orderA < orderB) {
    return -1;
  }
  if (orderA > orderB) {
    return 1;
  }
  return 0;
}
