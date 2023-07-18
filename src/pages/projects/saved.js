import React from "react";

import Page from "@/components/pages/page";
import SavedProjects from "@/components/pages/projects/saved/saved";
import LoadingLayout from "@/components/layout/loading";

import { FilterProvider } from "@/providers/filter";
import { SavedProjectsProvider } from "@/providers/saved_projects";
import { LinkProvider, useLink } from "@/providers/link";
import { DataProvider, useData } from "@/providers/data/data";

export default function SavedProjectsPage() {
  return (
    <Page title="Saved Projects">
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
          <DataProvider>
            <DataProviderChildren />
          </DataProvider>
      }
    </>
  )
}

function DataProviderChildren () {
  const { projects, structures, structureFilters, formats, formatFilters } = useData()

  return (
    <>
      {
        projects && structures && structureFilters && formats && formatFilters ?
          <SavedProjectsProvider>
            <FilterProvider
              projects={projects}
              structures={structures}
              structureFilters={structureFilters}
              formats={formats}
              formatFilters={formatFilters}
            >
              <SavedProjects />
            </FilterProvider>
          </SavedProjectsProvider> :
          <LoadingLayout />
      }
    </>
  )
}

