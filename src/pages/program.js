import React from "react";

import Page from "@/components/pages/page";
import Program from "@/components/pages/program/program";
import LoadingLayout from "@/components/layout/loading";

import { DataProvider, useData } from "@/providers/data/data";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import { FilterProvider } from "@/providers/filter";
import { useLink, LinkProvider } from "@/providers/link";

export default function ProgramPage() {
  return (
    <Page title="program">
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
  const { projects, structures, structureFilters , formats, formatFilters } = useData()

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
              formatFilters={formatFilters}>
              <Program />
            </FilterProvider>
          </SavedProjectsProvider> :
          <LoadingLayout />
      }
    </>
  )
}
