import React from 'react'

import { getFormatsFilters } from '@/utils/api/formats'
import { getStructuresFilters } from "@/utils/api/structures";
import { getTimelineLocations, getTimelineFormats, getTimelineStructures } from "@/utils/api/pages/timeline";

import { FilterProvider }  from "@/providers/filter";

import Page from "@/components/pages/page";
import Timeline from "@/components/pages/timeline/timeline";
import { getItems } from '@/utils/api/items'
import { SavedProjectsProvider } from '@/providers/saved_projects'

export async function getStaticProps () {
  const projects = await getItems()
  const locations = await getTimelineLocations()

  const formats = await getTimelineFormats()
  const formatsFilters = await getFormatsFilters()

  const structures = await getTimelineStructures()
  const structuresFilters = await getStructuresFilters()

  return { props: { projects, locations, formats, formatsFilters, structures, structuresFilters} }
}

export default function TimelinePage ({ projects, locations, formats, formatsFilters, structures, structuresFilters }) {
  return (
    <Page>
      <SavedProjectsProvider>
        <FilterProvider projects={projects} locations={locations} formats={formats} formatsFilters={formatsFilters} structures={structures} structuresFilters={structuresFilters}>
          <Timeline />
        </FilterProvider>
      </SavedProjectsProvider>
    </Page>
  )
}
