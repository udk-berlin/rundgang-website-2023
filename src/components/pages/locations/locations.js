import React from 'react'

import { FilterProvider } from '@/providers/filter'
import Layout from '@/components/layout/layout'
import Map from '@/components/pages/locations/map/map'
import {Masonry} from "@mui/lab";
import ProjectCell from "@/components/pages/program/project_cell";

export default function Locations ({ locations, projects }) {
  console.log(projects)
  return (
    <Layout>
      <FilterProvider>
        <div>
          <Map locations={locations}/>
          {/*<Masonry columns={1} spacing={3}>*/}
          {/*  {Object.values(projects).map(project => (<ProjectCell project={project} />))}*/}
          {/*</Masonry>*/}
        </div>
      </FilterProvider>
    </Layout>
  )
}
