import React from 'react'

import { getLocations } from '@/utils/api/locations'
import { getItems } from '@/utils/api/items'
import Map from '@/components/map/map'

export async function getStaticProps () {
  const items = await getItems();
  const locations = await getLocations();
  return { props: { items, locations } };
}

export default function MapLayout ({ items, locations }) {
  console.log(locations)
  return <Map locations={locations}/>
}