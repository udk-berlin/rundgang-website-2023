import React from 'react'

import { getLocations } from '@/utils/api/locations'
import { getItems } from '@/utils/api/items'

import Page from "@/components/page/page";
import Map from '@/components/pages/map/map'

export async function getStaticProps () {
  const items = await getItems()
  const locations = await getLocations()
  return { props: { items, locations } }
}

export default function MapPage ({ items, locations }) {
  return (
       <Page>
         <Map locations={locations}/>
       </Page>
  )
}
