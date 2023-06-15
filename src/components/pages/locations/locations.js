import React from 'react'

import Layout from "@/components/layout/layout";
import Map from "@/components/pages/locations/map/map";

export default function Locations ({ locations }) {
  return (
    <Layout>
      <Map locations={locations}/>
    </Layout>
  )
}