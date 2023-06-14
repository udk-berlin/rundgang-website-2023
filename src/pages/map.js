import React from 'react'

import {getLocationsWithItems} from '@/utils/api/locations'
import Map from '@/components/map/map'

export async function getStaticProps () {
  const locations = await getLocationsWithItems()
  return { props: { locations } }
}

export default function MapLayout ({ locations }) {
  console.log(locations)
  return <Map locations={locations}/>
}
