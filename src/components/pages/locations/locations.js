import React from 'react'

import { FilterProvider } from '@/providers/filter'
import Layout from '@/components/layout/layout'
import LocationsMap from '@/components/pages/locations/map/map'
import LocationsProgram from "@/components/pages/locations/program";
import LocationsPopup from "@/components/pages/locations/popup";

export default function Locations ({ locations, projects }) {
  return (
    <Layout>
      <FilterProvider projects={projects}>
        <LocationsMap locations={locations}/>
        <LocationsPopup locations={locations} />
        <LocationsProgram/>
      </FilterProvider>
    </Layout>
  )
}
