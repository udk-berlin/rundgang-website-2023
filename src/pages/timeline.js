import React from "react";

import Page from "@/components/pages/page";
import Timeline from "@/components/pages/timeline/timeline";
import LoadingLayout from "@/components/layout/loading";

import { DataProvider, useData } from "@/providers/data/data";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import { FilterProvider } from "@/providers/filter";
import { useWindowSize, WindowSizeProvider } from "@/providers/window_size";

export default function TimelinePage() {
  return (
    <Page metaHeaderConfig={{ initialTitle: 'timeline' }}>
      <WindowSizeProvider>
        <WindowSizeChildren />
      </WindowSizeProvider>
    </Page>
  );
}

function WindowSizeChildren() {
  const windowSize = useWindowSize()

  return (
    <>
      {
        windowSize ?
          <DataProvider onlyTemporalData={true}>
            <DataProviderChildren />
          </DataProvider> :
          <></>
      }
    </>
  )
}

function DataProviderChildren() {
  const { locations, projects, structures, structureFilters , formats, formatFilters } = useData()

  return (
    <SavedProjectsProvider>
      {
        locations && projects && structures && structureFilters && formats && formatFilters ?
          <FilterProvider
            locations={locations}
            projects={projects}
            structures={structures}
            structureFilters={structureFilters}
            formats={formats}
            formatFilters={formatFilters}>
              <Timeline />
          </FilterProvider> : <LoadingLayout />
      }
    </SavedProjectsProvider>
  );
}