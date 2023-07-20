import React from "react";

import Page from "@/components/pages/page";
import Program from "@/components/pages/program/program";
import LoadingLayout from "@/components/layout/loading";

import { DataProvider, useData } from "@/providers/data/data";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import { FilterProvider } from "@/providers/filter";
import { WindowSizeProvider, useWindowSize } from "@/providers/window_size";

export default function ProgramPage() {
  return (
    <Page title="program">
      <WindowSizeProvider>
        <WindowSizeChildren />
      </WindowSizeProvider>
    </Page>
  );
}

function WindowSizeChildren () {
  const windowSize = useWindowSize()

  return (
    <>
      {
        windowSize ?
            <DataProvider>
              <DataProviderChildren />
            </DataProvider> :
          <></>
      }
    </>
  )
}

function DataProviderChildren () {
  const { projects, structures, structureFilters , formats, formatFilters } = useData()

  return (
    <SavedProjectsProvider>
      {
        projects && structures && structureFilters && formats && formatFilters ?
          <FilterProvider
            projects={projects}
            structures={structures}
            structureFilters={structureFilters}
            formats={formats}
            formatFilters={formatFilters}>
            <Program />
          </FilterProvider> :
          <LoadingLayout />
      }
    </SavedProjectsProvider>
  )
}
