import React from 'react'

import { getItems } from '@/utils/api/items'
import { getLocationsLocations, getLocationsStructures } from "@/utils/api/pages/locations";
import { getFacultiesAndCenters } from "@/utils/api/structures";

import { FilterProvider }  from "@/providers/filter";

import Page from "@/components/pages/page";
import Locations from "@/components/pages/locations/locations";

export async function getStaticProps () {
  const projects = await getItems()
  const locations = await getLocationsLocations()
  const structures = await getLocationsStructures()
  const facultiesAndCenters = await getFacultiesAndCenters()

  return { props: { projects, locations, structures, facultiesAndCenters} }
}

export default function LocationsPage ({ projects, locations, structures, facultiesAndCenters }) {
  return (
       <Page>
         <FilterProvider page={'locations'} projects={projects} locations={locations} structures={structures} facultiesAndCenters={facultiesAndCenters}>
           <Locations locations={locations} />
         </FilterProvider>
       </Page>
  )
}
