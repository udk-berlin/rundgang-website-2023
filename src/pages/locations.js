import React from 'react'

import { getItems } from '@/utils/api/items'
import { getLocationsLocations, getLocationsStructures } from "@/utils/api/pages/locations";
import { getStructuresFilters } from "@/utils/api/structures";

import { FilterProvider }  from "@/providers/filter";

import Page from "@/components/pages/page";
import Locations from "@/components/pages/locations/locations";

export async function getStaticProps () {
  const projects = await getItems()
  const locations = await getLocationsLocations()
  const structures = await getLocationsStructures()
  const structuresFilters = await getStructuresFilters()

  return { props: { projects, locations, structures, structuresFilters} }
}

export default function LocationsPage ({ projects, locations, structures, structuresFilters }) {
  return (
       <Page>
         <FilterProvider projects={projects} locations={locations} structures={structures} structuresFilters={structuresFilters}>
           <Locations locations={locations} />
         </FilterProvider>
       </Page>
  )
}
