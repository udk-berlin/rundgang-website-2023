import React from "react";

import Page from "@/components/pages/page";
import SavedProjects from "@/components/pages/projects/saved/saved";
import LoadingLayout from "@/components/layout/loading";

import { FilterProvider } from "@/providers/filter";
import { SavedProjectsProvider } from "@/providers/saved_projects";
import { DataProvider, useData } from "@/providers/data/data";
import { useWindowSize, WindowSizeProvider } from "@/providers/window_size";

export default function SavedProjectsPage() {
  return (
    <Page title="Saved Projects">
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
          </DataProvider>: <></>
      }
    </>
  )
}

function DataProviderChildren () {
  const { projects, structures, structureFilters, formats, formatFilters } = useData()

  return (
    <SavedProjectsProvider>
      {
        projects && structures && structureFilters && formats && formatFilters ?
          <FilterProvider
            projects={projects}
            structures={structures}
            structureFilters={structureFilters}
            formats={formats}
            formatFilters={formatFilters}
          >
            <SavedProjects />
          </FilterProvider> :
          <LoadingLayout />
      }
    </SavedProjectsProvider>
  )
}

