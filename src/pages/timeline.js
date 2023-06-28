import React from 'react'

import { getTimelineLocations, getTimelineStructures } from "@/utils/api/pages/timeline";
import { getStructuresFilters } from "@/utils/api/structures";

import { FilterProvider }  from "@/providers/filter";

import Page from "@/components/pages/page";
import Timeline from "@/components/pages/timeline/timeline";

export async function getStaticProps () {
  const locations = await getTimelineLocations()
  const structures = await getTimelineStructures()
  const structuresFilters = await getStructuresFilters()

  return { props: { locations, structures, structuresFilters} }
}

export default function TimelinePage ({ locations, structures, structuresFilters }) {
  return (
    <Page>
      <FilterProvider page={'timeline'} locations={locations} structures={structures} structuresFilters={structuresFilters}>
        <Timeline />
      </FilterProvider>
    </Page>
  )
}
