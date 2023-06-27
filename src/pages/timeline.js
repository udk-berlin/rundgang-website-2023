import React from 'react'

import getTimelineLocations from "@/utils/api/timeline";

import Page from "@/components/pages/page";
import Timeline from "@/components/pages/timeline/timeline";

export async function getStaticProps () {
  const locations = await getTimelineLocations()

  return { props: { locations } }
}

export default function TimelinePage ({ locations }) {
  return (
    <Page>
      <Timeline locations={Object.values(locations)} />
    </Page>
  )
}
