import React from 'react'

import { getItems } from '@/utils/api/items'
import { getFormatsFilters } from '@/utils/api/formats'
import { getStructuresFilters } from "@/utils/api/structures";
import { getLocationsLocations, getLocationsFormats, getLocationsStructures } from "@/utils/api/pages/locations";

import { FilterProvider }  from "@/providers/filter";

import Page from "@/components/pages/page";
import Locations from "@/components/pages/locations/locations";
import { SavedProjectsProvider } from '@/providers/saved_projects'

export async function getStaticProps () {
  const projects = await getItems()
  const locations = await getLocationsLocations()

  const formats = await getLocationsFormats()
  const formatsFilters = await getFormatsFilters()

  const structures = await getLocationsStructures()
  const structuresFilters = await getStructuresFilters()

  return { props: { projects, formats, formatsFilters, locations, structures, structuresFilters} }
}

export default function LocationsPage ({ projects, locations, formats, formatsFilters, structures, structuresFilters }) {

  // console.log(locations)
  return (
    <Page>
      <SavedProjectsProvider>
        <FilterProvider projects={projects} locations={locations} formats={formats} formatsFilters={formatsFilters} structures={structures} structuresFilters={structuresFilters}>
          <Locations locations={locations} />
        </FilterProvider>
      </SavedProjectsProvider>
    </Page>
  )
}
