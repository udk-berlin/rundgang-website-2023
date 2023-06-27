import React from 'react'

import { getTimelineLocations, getTimelineStructures } from "@/utils/api/timeline";
import { getFacultiesAndCenters } from "@/utils/api/structures";

import Page from "@/components/pages/page";
import Timeline from "@/components/pages/timeline/timeline";
import { FilterProvider }  from "@/providers/filter";

export async function getStaticProps () {
  const locations = await getTimelineLocations()
  const structures = await getTimelineStructures()
  const facultiesAndCenters = await getFacultiesAndCenters()

  return { props: { locations, structures, facultiesAndCenters} }
}

export default function TimelinePage ({ locations, structures, facultiesAndCenters }) {
  return (
    <Page>
      <FilterProvider projects={[]} structures={structures} locations={locations} facultiesAndCenters={facultiesAndCenters}>
        <Timeline />
      </FilterProvider>
    </Page>
  )
}
