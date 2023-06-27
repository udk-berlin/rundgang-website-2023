import React from 'react'

import Layout from '@/components/layout/layout'
import LocationsMap from '@/components/pages/locations/map/map'
import LocationsProgram from "@/components/pages/locations/program";
import LocationsGroundPlanPopup from "@/components/pages/locations/ground_plan/popup";
import LocationsFloorPlanPopup from "@/components/pages/locations/floor_plan/popup";

export default function Locations ({ locations }) {
  return (
    <Layout>
      <LocationsMap locations={locations} />
      <LocationsGroundPlanPopup />
      <LocationsFloorPlanPopup />
      <LocationsProgram />
    </Layout>
  )
}
