import React from "react";

import Page from "@/components/pages/page";
import Timeline from "@/components/pages/timeline/timeline";
import LoadingLayout from "@/components/layout/loading";

import { DataProvider, useData } from "@/providers/data/data";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import { FilterProvider } from "@/providers/filter";
import { useLink, LinkProvider } from "@/providers/link";

export default function TimelinePage() {
  return (
    <Page title="timeline">
      <LinkProvider>
       <LinkProviderChildren />
      </LinkProvider>
    </Page>
  );
}

function LinkProviderChildren() {
  const link = useLink()

  return (
    <>
      {
        link.clicked ?
          <LoadingLayout /> :
          <DataProvider onlyTemporalData={true}>
            <DataProviderChildren />
          </DataProvider>
      }
    </>
  )
}

function DataProviderChildren() {
  const { locations, projects, structures, structureFilters , formats, formatFilters } = useData()

  return (
    <>
      {
        locations && projects && structures && structureFilters && formats && formatFilters ?
          <SavedProjectsProvider>
          <FilterProvider
            locations={locations}
            projects={projects}
            structures={structures}
            structureFilters={structureFilters}
            formats={formats}
            formatFilters={formatFilters}>
              <Timeline />
          </FilterProvider>
          </SavedProjectsProvider>:
          <LoadingLayout />
      }
    </>
  );
}