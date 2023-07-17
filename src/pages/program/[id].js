import React, { useState } from "react";
import { useRouter } from 'next/router'

import Page from "@/components/pages/page";
import Program from "@/components/pages/program/program";
import LoadingLayout from "@/components/layout/loading";

import { DataProvider, useData } from "@/providers/data/data";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import { FilterProvider } from "@/providers/filter";

export default function ProgramPage () {
  const router = useRouter()
  const [isLinkClicked, setIsLinkClicked] = useState(false)

  return (
    <Page title="program">
      {
        isLinkClicked || !router || !router.query || !router.query.id ?
          <LoadingLayout /> :
          <DataProvider>
            <SavedProjectsProvider>
              <ProgramPageContainer id={router.query.id} setIsLinkClicked={setIsLinkClicked} />
            </SavedProjectsProvider>
          </DataProvider>
      }
    </Page>
  )
}

function ProgramPageContainer ({ id, setIsLinkClicked }) {
  const { projects, structures, structureFilters , formats, formatFilters } = useData()
  let components

  if (projects && structures && structureFilters && formats && formatFilters) {
    let format
    if (formats[id]) format = id
    let structure
    if (structures[id]) structure = id

    components = <FilterProvider
      projects={projects}
      structure={structure}
      structures={structures}
      structureFilters={structureFilters}
      formats={formats}
      format={format}
      formatFilters={formatFilters}>
      <Program setIsLinkClicked={setIsLinkClicked} />
    </FilterProvider>
  } else {
    components = <LoadingLayout />
  }

  return (<>{components}</>)
}