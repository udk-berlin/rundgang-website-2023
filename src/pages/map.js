import React from 'react'

import {getItemsWithLocation, getLocationsWithItems} from '@/utils/api/locations'
import Map from '@/components/map/map'

export async function getStaticProps () {
  const items = await getItemsWithLocation();
  const locations = await getLocationsWithItems();
  return { props: { items , locations} };
}

export default function MapLayout ({ items , locations}) {
  console.log(locations)
  return <Map locations={locations}/>
}
