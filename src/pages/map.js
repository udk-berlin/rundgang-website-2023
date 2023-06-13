import React from 'react'

import { getItemsWithLocation} from '@/utils/api/api'
import Map from '@/components/map/map'

export async function getStaticProps () {
  // const locations = await getLocations(false)
  const items = await getItemsWithLocation()
  return { props: { items } }
}

export default function MapLayout ({ items }) {
  console.log(items)

  return <Map locations={[]}/>
}
