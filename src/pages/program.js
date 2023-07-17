import React, { useState } from "react";

import Page from "@/components/pages/page";
import Program from "@/components/pages/program/program";
import LoadingLayout from "@/components/layout/loading";

import { DataProvider, useData } from "@/providers/data/data";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import { FilterProvider } from "@/providers/filter";

export default function ProgramPage () {
  const [isLinkClicked, setIsLinkClicked] = useState(false)

  return (
    <Page title="program">
      {
        isLinkClicked ?
          <LoadingLayout /> :
          <DataProvider>
            <SavedProjectsProvider>
              <ProgramPageContainer setIsLinkClicked={setIsLinkClicked} />
            </SavedProjectsProvider>
          </DataProvider>
      }
    </Page>
  )
}

function ProgramPageContainer ({ setIsLinkClicked }) {
  const { projects, structures, structureFilters , formats, formatFilters } = useData()

  return (
    <>
      {
        projects && structures && structureFilters && formats && formatFilters ?
          <FilterProvider
            projects={projects}
            structures={structures}
            structureFilters={structureFilters}
            formats={formats}
            formatFilters={formatFilters}>
            <Program setIsLinkClicked={setIsLinkClicked} />
          </FilterProvider> :
          <LoadingLayout />
      }
    </>
  )
}