import React from 'react'

import { LocationProvider } from '@/providers/location'
import Layout from '@/components/layout/layout'
import Map from '@/components/pages/locations/map/map'

export default function Locations ({ locations }) {
  return (
    <Layout>
      <LocationProvider>
        <Map locations={locations}/>
      </LocationProvider>
    </Layout>
  )
}
