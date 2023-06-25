import React from 'react'

import { getLocations } from '@/utils/api/locations'
import { getItems } from '@/utils/api/items'

import Page from "@/components/pages/page";
import Timeline from "@/components/pages/timeline/timeline";

export async function getStaticProps () {
  const locations = await getLocations()
  const projects = await getItems()
  return { props: { locations, projects } }
}

export default function TimelinePage ({ locations, projects }) {
  return (
    <Page>
      <Timeline locations={Object.values(locations).slice(0,1)} projects={Object.values(projects).slice(0,1)} />
    </Page>
  )
}
