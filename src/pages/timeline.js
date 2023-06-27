import React from 'react'

import { getTimelineLocations, getTimelineStructures } from "@/utils/api/pages/timeline";
import { getFacultiesAndCenters } from "@/utils/api/structures";

import { FilterProvider }  from "@/providers/filter";

import Page from "@/components/pages/page";
import Timeline from "@/components/pages/timeline/timeline";

export async function getStaticProps () {
  const locations = await getTimelineLocations()
  const structures = await getTimelineStructures()
  const facultiesAndCenters = await getFacultiesAndCenters()

  return { props: { locations, structures, facultiesAndCenters} }
}

export default function TimelinePage ({ locations, structures, facultiesAndCenters }) {
  return (
    <Page>
      <FilterProvider page={'timeline'} locations={locations} structures={structures} facultiesAndCenters={facultiesAndCenters}>
        <Timeline />
      </FilterProvider>
    </Page>
  )
}
