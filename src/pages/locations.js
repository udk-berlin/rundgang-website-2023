import React from 'react'

import { getLocations } from '@/utils/api/locations'
// import { getItems } from '@/utils/api/items'

import Page from "@/components/pages/page";
import Locations from "@/components/pages/locations/locations";

export async function getStaticProps () {
  // const items = await getItems()
  const locations = await getLocations()
  return { props: { locations } }
}

export default function LocationsPage ({ locations }) {
  return (
       <Page>
         <Locations locations={locations}/>
       </Page>
  )
}
