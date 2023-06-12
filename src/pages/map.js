import React from 'react'

import { getLocations } from '@/utils/api/api'
import Map from '@/components/map/map'

export async function getStaticProps () {
  const locations = await getLocations(false)
  return { props: { locations } }
}

export default function MapLayout ({ locations }) {
  console.log(locations)

  return <Map locations={locations}/>
}
